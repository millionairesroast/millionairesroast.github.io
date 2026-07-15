(() => {
  "use strict";

  const LANGUAGE_KEY = "mr-language";
  const LANGUAGE_FADE_MS = 180;
  const languages = new Set(["en", "es"]);
  const root = document.documentElement;
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const stickyShop = document.querySelector(".mobile-shop-bar");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let currentLanguage = "en";
  let pendingLanguage = null;
  let languageTimer;
  let languageFrame;

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
    updateMenuLabel();
    if (!open && returnFocus) menuToggle.focus();
  }

  function applyLanguage(language) {
    if (!languages.has(language)) return;
    currentLanguage = language;
    pendingLanguage = null;
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
            element.getAttribute(`data-${attribute}-${language}`) || ""
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
  }

  function setLanguage(language, animate = true) {
    if (!languages.has(language)) return;
    const activeTarget = pendingLanguage || currentLanguage;
    if (language === activeTarget) return;

    window.clearTimeout(languageTimer);
    window.cancelAnimationFrame(languageFrame);

    if (!animate || reduceMotion.matches) {
      pendingLanguage = null;
      root.classList.remove("is-language-changing");
      applyLanguage(language);
      return;
    }

    pendingLanguage = language;
    root.classList.add("is-language-changing");

    languageTimer = window.setTimeout(() => {
      applyLanguage(language);

      // Keep the replacement copy hidden for one paint, then fade it in.
      languageFrame = window.requestAnimationFrame(() => {
        languageFrame = window.requestAnimationFrame(() => {
          root.classList.remove("is-language-changing");
        });
      });
    }, LANGUAGE_FADE_MS);
  }

  document.querySelectorAll(".language-switch button").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.textContent.trim().toLowerCase());
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

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1080 && menuIsOpen()) setMenu(false);
  });

  document.querySelectorAll(".faq-list details").forEach((details) => {
    const summary = details.querySelector("summary");
    let closingTimer;

    summary?.addEventListener("click", (event) => {
      if (reduceMotion.matches) return;
      event.preventDefault();
      window.clearTimeout(closingTimer);

      if (!details.open) {
        details.classList.remove("is-closing");
        details.open = true;
        return;
      }

      details.classList.add("is-closing");
      closingTimer = window.setTimeout(() => {
        details.open = false;
        details.classList.remove("is-closing");
      }, 370);
    });
  });

  document.querySelectorAll("a[data-location]").forEach((link) => {
    link.addEventListener("click", () => {
      window.gtag?.("event", "shop_click", {
        cta_location: link.getAttribute("data-location"),
        language: document.documentElement.lang,
      });
    });
  });

  const year = document.querySelector(".footer-bottom p:first-child");
  if (year) year.textContent = `© ${new Date().getFullYear()} Millionaire's Roast`;

  function setStickyHidden(hidden) {
    if (!stickyShop) return;
    stickyShop.classList.toggle("is-hidden", hidden);
    stickyShop.setAttribute("aria-hidden", String(hidden));
    setInert(stickyShop, hidden);
  }

  const heroShop = document.querySelector('[data-location="hero_primary"]');
  if (stickyShop && heroShop && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const heroActionIsAhead = entry.boundingClientRect.top > 76;
        setStickyHidden(entry.isIntersecting || heroActionIsAhead);
      },
      { threshold: 0.05, rootMargin: "-76px 0px 0px 0px" }
    );
    observer.observe(heroShop);
  } else {
    setStickyHidden(true);
  }

  let savedLanguage = "en";
  try {
    const saved = window.localStorage.getItem(LANGUAGE_KEY);
    if (saved && languages.has(saved)) savedLanguage = saved;
  } catch {
    // Use English when browser storage is unavailable.
  }
  applyLanguage(savedLanguage);
})();
