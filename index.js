(() => {
  "use strict";

  const LANGUAGE_KEY = "mr-language";
  const LANGUAGE_FADE_MS = 180;
  const languages = new Set(["en", "es"]);
  const root = document.documentElement;
  const siteHeader = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const stickyShop = document.querySelector(".mobile-shop-bar");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compactMotion = window.matchMedia(
    "(max-width: 900px), (pointer: coarse)",
  );
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
    // The menu owns the viewport while open; keep the sticky shop CTA clear.
    siteHeader?.classList.toggle("has-open-menu", open);
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
    document.dispatchEvent(
      new CustomEvent("mr:languagechange", { detail: { language } }),
    );
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
    if (window.innerWidth > 1240 && menuIsOpen()) setMenu(false);
  });

  function setupPageNavigation() {
    const main = document.querySelector("main");
    // CSS handles supported cross-document transitions without intercepting links.
    if ("CSSViewTransitionRule" in window || !main?.animate) return;

    const arrivalKey = "mr-page-arrival";
    let departure;
    let departureTimer;
    let recoveryTimer;

    function resetDeparture() {
      window.clearTimeout(departureTimer);
      window.clearTimeout(recoveryTimer);
      departure?.cancel();
      departure = undefined;
    }

    try {
      const arrival = JSON.parse(window.sessionStorage.getItem(arrivalKey));
      window.sessionStorage.removeItem(arrivalKey);
      if (
        arrival?.url === window.location.href &&
        Date.now() - arrival.at < 10000 &&
        !reduceMotion.matches
      ) {
        main.animate(
          [
            { opacity: 0, transform: "translateY(8px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
          { duration: 280, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
        );
      }
    } catch {
      // Navigation still works when session storage is unavailable.
    }

    // A restored page must never retain its departure animation or timer.
    window.addEventListener("pageshow", resetDeparture);
    window.addEventListener("pagehide", resetDeparture);

    document.addEventListener("click", (event) => {
      if (
        event.defaultPrevented || event.button !== 0 ||
        event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
        reduceMotion.matches || !(event.target instanceof Element)
      ) return;

      const link = event.target.closest("a[href]");
      if (
        !link || link.hasAttribute("download") ||
        (link.target && link.target.toLowerCase() !== "_self")
      ) return;

      const destination = new URL(link.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname ||
        (!document.body.classList.contains("wholesale-page") &&
          !/\/wholesale(?:\/(?:index\.html)?)?$/.test(destination.pathname))
      ) return;

      event.preventDefault();
      resetDeparture();
      // A brief softening keeps the page readable while the real navigation starts.
      departure = main.animate([{ opacity: 1 }, { opacity: 0.55 }], {
        duration: 140, easing: "ease-out", fill: "forwards",
      });
      departureTimer = window.setTimeout(() => {
        try {
          window.sessionStorage.setItem(arrivalKey, JSON.stringify({
            url: destination.href, at: Date.now(),
          }));
        } catch {
          // The departure effect does not depend on browser storage.
        }
        window.location.assign(destination.href);
        // Restore the page if a navigation is cancelled or takes unusually long.
        recoveryTimer = window.setTimeout(resetDeparture, 1500);
      }, 140);
    });
  }

  setupPageNavigation();

  function updateScrollProgress() {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress =
      scrollable > 0
        ? Math.min(1, Math.max(0, window.scrollY / scrollable))
        : 0;
    // Keep this rapidly changing value on the header instead of the root.
    // Root-level custom properties can invalidate styles across the full page
    // on every scroll frame, which is especially costly on mobile.
    siteHeader?.style.setProperty("--scroll-progress", progress.toFixed(4));
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
  const revealGroups = compactMotion.matches
    ? [
        [".trust-grid", "up", 0],
        [".section-heading", "up", 0],
        [".product-card", "up", 45],
        [".center-link", "up", 0],
        [".difference-intro", "up", 0],
        [".benefit-list", "up", 0],
        [".story-photos", "up", 0],
        [".story-copy", "up", 0],
        [".local-card", "up", 45],
        [".faq-heading", "up", 0],
        [".faq-list", "up", 0],
        [".final-panel", "up", 0],
        [".footer-top", "up", 0],
      ]
    : [
        [".trust-grid", "up", 0],
        [".section-heading > *", "up", 90],
        [".product-card", "scale", 105],
        [".center-link", "up", 0],
        [".difference-intro > :not(.ornament)", "left", 75],
        [".benefit", "right", 90],
        [".story-photos", "left", 0],
        [".story-copy", "right", 0],
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
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" },
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
