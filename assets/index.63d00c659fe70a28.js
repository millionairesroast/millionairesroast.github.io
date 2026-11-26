(() => {
  "use strict";

  const LANGUAGE_KEY = "mr-language";
  const languages = new Set(["en", "es"]);
  const root = document.documentElement;
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const stickyShop = document.querySelector(".mobile-shop-bar");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  // Native anchor and keyboard scrolling need the space occupied by wrapped chrome.
  if ("ResizeObserver" in window) {
    const overlaySizes = new ResizeObserver((entries) => {
      for (const { target } of entries) {
        const height = target.getBoundingClientRect().height;
        if (height) {
          const property = target === siteHeader ? "--header-height" : "--shop-height";
          root.style.setProperty(property, `${height}px`);
        }
      }
    });
    if (siteHeader) overlaySizes.observe(siteHeader);
    if (stickyShop) overlaySizes.observe(stickyShop);
  }
  let currentLanguage = "en";

  const menuLabels = {
    en: { open: "Open menu", close: "Close menu" },
    es: { open: "Abrir menú", close: "Cerrar menú" },
  };

  function setInert(element, inert) {
    if (!element) return;
    element.inert = inert;
    if (inert) element.setAttribute("inert", "");
    else element.removeAttribute("inert");
  }

  function menuIsOpen() {
    return Boolean(mobileMenu?.classList.contains("is-open"));
  }

  function updateMenuLabel() {
    if (!menuToggle) return;
    const state = menuIsOpen() ? "close" : "open";
    menuToggle.setAttribute("aria-label", menuLabels[currentLanguage][state]);
  }

  function setMenu(open, returnFocus = false) {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.classList.toggle("is-open", open);
    mobileMenu.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    mobileMenu.setAttribute("aria-hidden", String(!open));
    setInert(mobileMenu, !open);
    // The menu owns the viewport while open; keep the sticky shop CTA clear.
    siteHeader?.classList.toggle("has-open-menu", open);
    updateMenuLabel();
    if (!open && returnFocus) menuToggle.focus();
  }

  function applyLanguage(language) {
    if (!languages.has(language)) return;
    currentLanguage = language;
    root.lang = language;

    document.querySelectorAll("[data-en][data-es]").forEach((element) => {
      element.textContent = element.getAttribute(`data-${language}`) || "";
    });

    ["aria-label", "title", "alt"].forEach((attribute) => {
      document
        .querySelectorAll(`[data-${attribute}-${language}]`)
        .forEach((element) => {
          element.setAttribute(
            attribute,
            element.getAttribute(`data-${attribute}-${language}`) || "",
          );
        });
    });

    document.querySelectorAll(".language-switch").forEach((switcher) => {
      const buttons = switcher.querySelectorAll("button");
      buttons.forEach((button) => {
        const active = button.textContent.trim().toLowerCase() === language;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    });

    updateMenuLabel();
    try {
      window.localStorage.setItem(LANGUAGE_KEY, language);
    } catch {
      // The site remains fully usable when browser storage is unavailable.
    }

    document.dispatchEvent(
      new CustomEvent("mr:languagechange", { detail: { language } }),
    );
  }

  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.textContent.trim().toLowerCase();
      if (language !== currentLanguage) applyLanguage(language);
    });
  });

  menuToggle?.addEventListener("click", () => setMenu(!menuIsOpen()));

  mobileMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("click", (event) => {
    if (!menuIsOpen()) return;
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (!mobileMenu?.contains(target) && !menuToggle?.contains(target)) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuIsOpen()) setMenu(false, true);
  });

  // Let keyboard users leave the disclosure without covering the next link.
  document.addEventListener("focusin", (event) => {
    if (
      menuIsOpen() && event.target instanceof Node &&
      !siteHeader?.contains(event.target)
    ) setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (menuIsOpen() && menuToggle && !menuToggle.getClientRects().length) setMenu(false);
  });

  document.querySelectorAll("a[data-location]").forEach((link) => {
    link.addEventListener("click", () => {
      window.gtag?.("event", "shop_click", {
        cta_location: link.getAttribute("data-location"),
        language: document.documentElement.lang,
      });
    });
  });

  const year = document.querySelector("[data-copyright-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  const wideFooter = window.matchMedia("(min-width: 761px)");
  const directories = document.querySelectorAll(".footer-directory");
  function setFooterLayout() {
    for (const group of directories) {
      if (!wideFooter.matches && group.contains(document.activeElement)) {
        group.querySelector("summary").focus({ preventScroll: true });
      }
      group.open = wideFooter.matches;
    }
  }
  setFooterLayout();
  wideFooter.addEventListener("change", setFooterLayout);

  const heroShop = document.querySelector('[data-location="hero_primary"]');
  if (stickyShop && heroShop) {
    // An instant jump can pass the hero link without ever bringing it into view.
    const syncStickyShop = () => {
      const headerBottom = siteHeader?.getBoundingClientRect().bottom ?? 0;
      const hidden = heroShop.getBoundingClientRect().bottom > headerBottom;
      if (stickyShop.classList.contains("is-hidden") === hidden) return;
      stickyShop.classList.toggle("is-hidden", hidden);
      stickyShop.setAttribute("aria-hidden", String(hidden));
      setInert(stickyShop, hidden);
    };
    window.addEventListener("scroll", syncStickyShop, { passive: true });
    window.addEventListener("resize", syncStickyShop);
    window.addEventListener("pageshow", syncStickyShop);
    if ("ResizeObserver" in window) {
      const heroCopy = heroShop.closest(".front-hero-copy");
      if (heroCopy) new ResizeObserver(syncStickyShop).observe(heroCopy);
    }
    document.addEventListener("mr:languagechange", syncStickyShop);
  }

  let savedLanguage = "en";
  try {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (saved && languages.has(saved)) savedLanguage = saved;
  } catch {
    // Use English when browser storage is unavailable.
  }
  applyLanguage(savedLanguage);

  // Back/Forward can restore this document without rerunning its scripts.
  // Honor a language selected on another page while preserving this page's state.
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    let saved;
    try {
      saved = window.localStorage.getItem(LANGUAGE_KEY);
    } catch {
      return;
    }
    if (!languages.has(saved)) return;

    if (saved !== currentLanguage) applyLanguage(saved);
  });

  // Animate editorial groups only on their first entrance from below the fold.
  // Content is always painted normally during initial load, focus and navigation.
  if ("IntersectionObserver" in window) {
    const belowFold = new WeakSet();
    let scrollGesture = false;
    const startGesture = () => { scrollGesture = true; };
    const stopGesture = () => { scrollGesture = false; };
    const clearEntrances = () => {
      stopGesture();
      document.querySelectorAll(".is-arriving").forEach((element) => {
        element.classList.remove("is-arriving");
      });
    };
    const endEntrance = (event) => {
      if (event.animationName === "mr-enter") event.target.classList.remove("is-arriving");
    };
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const element = entry.target;
        if (!entry.isIntersecting) {
          if (entry.rootBounds && entry.boundingClientRect.top >= entry.rootBounds.bottom) {
            belowFold.add(element);
          }
          continue;
        }
        observer.unobserve(element);
        if (belowFold.has(element) && scrollGesture && !reduceMotion.matches &&
          !element.matches(":focus-within")) {
          element.classList.add("is-arriving");
        }
      }
    });
    document.querySelectorAll(
      ".shop-tile, .story-media, .story-copy, .local-entry, .faq-heading, " +
      ".partner-contact, .partner-retail, .partner-sheet-head",
    ).forEach((element) => observer.observe(element));

    window.addEventListener("wheel", startGesture, { passive: true });
    window.addEventListener("touchmove", startGesture, { passive: true });
    window.addEventListener("pointerdown", stopGesture, { passive: true });
    window.addEventListener("keydown", stopGesture);
    window.addEventListener("focusin", stopGesture);
    window.addEventListener("hashchange", clearEntrances);
    window.addEventListener("pagehide", clearEntrances);
    reduceMotion.addEventListener("change", clearEntrances);
    document.addEventListener("animationend", endEntrance);
    document.addEventListener("animationcancel", endEntrance);
  }
})();
