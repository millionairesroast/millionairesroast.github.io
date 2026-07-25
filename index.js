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
  let scrollFrame;

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

    requestScrollProgressUpdate();
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

  function updateScrollProgress() {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollable > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollable))
        : 0;
    root.style.setProperty("--scroll-progress", progress.toFixed(4));
    scrollFrame = undefined;
  }

  function requestScrollProgressUpdate() {
    if (scrollFrame !== undefined) return;
    scrollFrame = window.requestAnimationFrame(updateScrollProgress);
  }

  window.addEventListener("scroll", requestScrollProgressUpdate, {
    passive: true,
  });
  window.addEventListener("resize", requestScrollProgressUpdate);
  requestScrollProgressUpdate();

  const revealElements = [];
  const revealGroups = [
    [".trust-item", "up", 70],
    [".section-heading > *", "up", 90],
    [".product-card", "scale", 105],
    [".center-link", "up", 0],
    [".difference-intro > :not(.ornament)", "left", 75],
    [".benefit", "right", 90],
    [".story-photos figure", "left", 120],
    [".story-copy > *", "right", 70],
    [".local-card", "scale", 120],
    [".faq-heading > *", "left", 70],
    [".faq-list details", "up", 55],
    [".final-panel > *", "up", 90],
    [".footer-top > *", "up", 80],
  ];

  revealGroups.forEach(([selector, direction, delayStep]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      if (element.hasAttribute("data-reveal")) return;
      element.setAttribute("data-reveal", direction);
      element.style.setProperty(
        "--reveal-delay",
        `${Math.min(index * delayStep, 280)}ms`,
      );
      revealElements.push(element);
    });
  });

  let revealObserver;
  if (!reduceMotion.matches && "IntersectionObserver" in window) {
    root.classList.add("motion-ready");
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    window.requestAnimationFrame(() => {
      revealElements.forEach((element) => revealObserver.observe(element));
    });
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }

  reduceMotion.addEventListener?.("change", (event) => {
    if (!event.matches) return;
    revealObserver?.disconnect();
    revealElements.forEach((element) => element.classList.add("is-visible"));
  });

  document.querySelectorAll(".faq-list details").forEach((details) => {
    const summary = details.querySelector("summary");
    const answer = details.querySelector(".faq-answer");
    let transitionTimer;
    let transitionListener;
    let firstFrame;
    let secondFrame;

    details.classList.toggle("is-open", details.open);

    function cancelFaqTransition() {
      window.clearTimeout(transitionTimer);
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      if (transitionListener && answer) {
        answer.removeEventListener("transitionend", transitionListener);
      }
      transitionListener = undefined;
    }

    function settleFaq(open) {
      cancelFaqTransition();
      details.classList.toggle("is-open", open);
      details.classList.remove("is-animating");
      details.open = open;
    }

    function waitForFaqTransition(open) {
      if (!answer) {
        settleFaq(open);
        return;
      }

      transitionListener = (event) => {
        if (
          event.target !== answer ||
          event.propertyName !== "grid-template-rows"
        ) {
          return;
        }
        settleFaq(open);
      };

      answer.addEventListener("transitionend", transitionListener);
      transitionTimer = window.setTimeout(() => settleFaq(open), 500);
    }

    summary?.addEventListener("click", (event) => {
      event.preventDefault();
      cancelFaqTransition();

      const opening = !details.classList.contains("is-open");

      if (reduceMotion.matches) {
        settleFaq(opening);
        return;
      }

      details.classList.add("is-animating");

      if (opening) {
        details.open = true;
        details.classList.remove("is-open");
        if (answer) void answer.offsetHeight;

        // Give the newly opened details content one collapsed paint first.
        firstFrame = window.requestAnimationFrame(() => {
          secondFrame = window.requestAnimationFrame(() => {
            details.classList.add("is-open");
            waitForFaqTransition(true);
          });
        });
        return;
      }

      details.classList.add("is-open");
      if (answer) void answer.offsetHeight;
      firstFrame = window.requestAnimationFrame(() => {
        details.classList.remove("is-open");
        waitForFaqTransition(false);
      });
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
  if (year)
    year.textContent = `© ${new Date().getFullYear()} Millionaire's Roast`;

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
      { threshold: 0.05, rootMargin: "-76px 0px 0px 0px" },
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
