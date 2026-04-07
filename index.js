(() => {
  const SQUARE_BUY_LINK = "https://square.link/u/JRlFCpYu";
  const PHONE_NUMBER = "12174167072";

  const body = document.body;
  const header = document.querySelector(".site-header");
  const yearEl = document.getElementById("year");
  const squareBtn = document.getElementById("squareBuyBtn");
  const buyGuard = document.getElementById("buyGuard");
  const buyGuardCheckbox = document.getElementById("buyGuardCheckbox");
  const buyGuardContinue = document.getElementById("buyGuardContinue");
  const buyGuardClosers = [...document.querySelectorAll("[data-buy-guard-close]")];
  const textBtn = document.getElementById("textOrderBtn");
  const textCard = document.getElementById("textUsCard");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const brandMark = document.querySelector(".brand-mark");
  const accordion = document.querySelector("[data-accordion]");
  const accordionButtons = accordion ? [...accordion.querySelectorAll(".faq-item")] : [];
  const carousel = document.querySelector("[data-carousel]");
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const squarePlaceholder = SQUARE_BUY_LINK.includes("PASTE_YOUR_LINK_HERE");

  let lastActiveElement = null;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function applyBrandFallback() {
    if (!brandMark) return;

    const showFallback = () => {
      brandMark.classList.add("is-hidden");
    };

    if (brandMark.complete && (!brandMark.naturalWidth || !brandMark.naturalHeight)) {
      showFallback();
    }

    brandMark.addEventListener("error", showFallback, { once: true });
  }

  function setSmsLink() {
    const bodyText = encodeURIComponent("Hi! I'd like to order coffee from Millionaire's Roast.");
    const separator = isIOS ? "&" : "?";
    const smsUrl = `sms:${PHONE_NUMBER}${separator}body=${bodyText}`;

    if (textBtn) textBtn.href = smsUrl;
    if (textCard) textCard.href = smsUrl;
  }

  function openBuyGuard() {
    if (!buyGuard || !buyGuardCheckbox || !buyGuardContinue) {
      window.open(SQUARE_BUY_LINK, "_blank", "noopener,noreferrer");
      return;
    }

    lastActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    buyGuard.hidden = false;
    buyGuard.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");
    buyGuardCheckbox.checked = false;
    buyGuardContinue.disabled = true;
    window.requestAnimationFrame(() => {
      buyGuardCheckbox.focus();
    });
  }

  function closeBuyGuard() {
    if (!buyGuard) return;
    buyGuard.hidden = true;
    buyGuard.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");
    if (lastActiveElement && typeof lastActiveElement.focus === "function") {
      lastActiveElement.focus();
    }
  }

  function setupBuyButton() {
    if (!squareBtn) return;

    squareBtn.href = SQUARE_BUY_LINK;

    if (squarePlaceholder) {
      squareBtn.classList.add("is-disabled");
      squareBtn.setAttribute("aria-disabled", "true");
      squareBtn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Online checkout is currently unavailable. Please text or email to place your order.");
      });
      return;
    }

    squareBtn.addEventListener("click", (event) => {
      event.preventDefault();
      openBuyGuard();
    });

    if (buyGuardCheckbox && buyGuardContinue) {
      buyGuardCheckbox.addEventListener("change", () => {
        buyGuardContinue.disabled = !buyGuardCheckbox.checked;
      });

      buyGuardContinue.addEventListener("click", () => {
        if (!buyGuardCheckbox.checked) return;
        window.open(SQUARE_BUY_LINK, "_blank", "noopener,noreferrer");
        closeBuyGuard();
      });
    }

    buyGuardClosers.forEach((element) => {
      element.addEventListener("click", closeBuyGuard);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && buyGuard && !buyGuard.hidden) {
        closeBuyGuard();
      }
    });
  }

  function syncMobileMenuHeight() {
    if (!toggle || !mobileNav || toggle.getAttribute("aria-expanded") !== "true") return;

    const headerHeight = header ? header.offsetHeight : 64;
    const maxAvailable = Math.max(160, window.innerHeight - headerHeight - 8);
    const targetHeight = Math.min(mobileNav.scrollHeight, maxAvailable);

    mobileNav.style.maxHeight = `${targetHeight}px`;
    mobileNav.style.overflowY = mobileNav.scrollHeight > maxAvailable ? "auto" : "hidden";
  }

  function setMobile(open) {
    if (!toggle || !mobileNav) return;

    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    mobileNav.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    body.classList.toggle("nav-open", open);

    if ("inert" in mobileNav) {
      mobileNav.inert = !open;
    }

    if (open) {
      syncMobileMenuHeight();
    } else {
      mobileNav.style.maxHeight = "0px";
      mobileNav.style.overflowY = "hidden";
    }
  }

  function setupMobileNav() {
    if (!toggle || !mobileNav) return;

    setMobile(false);

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMobile(!isOpen);
    });

    mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        setMobile(false);
      }
    });

    let resizeFrame = 0;

    window.addEventListener("resize", () => {
      if (resizeFrame) cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        resizeFrame = 0;
        syncMobileMenuHeight();
        syncOpenAccordionHeight();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMobile(false);
      }
    });
  }

  function getAccordionPanel(button) {
    const panel = button?.nextElementSibling;
    return panel && panel.matches("[data-panel]") ? panel : null;
  }

  function closeAccordionButton(button, immediate = false) {
    const panel = getAccordionPanel(button);
    if (!panel) return;

    button.setAttribute("aria-expanded", "false");

    if (immediate) {
      panel.hidden = true;
      panel.style.maxHeight = "0px";
      return;
    }

    panel.style.maxHeight = `${panel.scrollHeight}px`;

    requestAnimationFrame(() => {
      panel.style.maxHeight = "0px";
    });

    const handleTransitionEnd = () => {
      if (button.getAttribute("aria-expanded") === "false") {
        panel.hidden = true;
      }
      panel.removeEventListener("transitionend", handleTransitionEnd);
    };

    panel.addEventListener("transitionend", handleTransitionEnd);
  }

  function openAccordionButtonElement(button) {
    const panel = getAccordionPanel(button);
    if (!panel) return;

    button.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }

  function syncOpenAccordionHeight() {
    accordionButtons.forEach((button) => {
      const panel = getAccordionPanel(button);
      if (!panel) return;

      if (button.getAttribute("aria-expanded") === "true") {
        panel.hidden = false;
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  }

  function setupAccordion() {
    if (!accordion || !accordionButtons.length) return;

    accordionButtons.forEach((button) => closeAccordionButton(button, true));
    accordionButtons
      .filter((button) => button.hasAttribute("data-open-default"))
      .forEach(openAccordionButtonElement);

    accordion.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-item");
      if (!button || !accordion.contains(button)) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";

      if (isExpanded) {
        closeAccordionButton(button);
        return;
      }

      openAccordionButtonElement(button);
    });
  }

  function setupCarousel() {
    if (!carousel) return;

    const viewport = carousel.querySelector(".carousel-viewport");
    const track = carousel.querySelector(".carousel-track");
    const originalSlides = track ? [...track.querySelectorAll(".carousel-slide")] : [];
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
    const count = carousel.querySelector("[data-carousel-count]");

    if (!viewport || !track || !originalSlides.length) return;

    const firstClone = originalSlides[0].cloneNode(true);
    firstClone.setAttribute("aria-hidden", "true");
    firstClone.dataset.clone = "true";
    track.appendChild(firstClone);

    const slideCount = originalSlides.length;

    let activeIndex = 0;
    let trackIndex = 0;
    let autoplayId = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchActive = false;

    function stopAutoplay() {
      if (!autoplayId) return;
      window.clearInterval(autoplayId);
      autoplayId = 0;
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayId = window.setInterval(() => {
        goTo(activeIndex + 1, { direction: "next" });
      }, 5000);
    }

    function setTrackPosition(animate = true) {
      if (!animate) {
        track.style.transition = "none";
      }

      track.style.transform = `translateX(-${trackIndex * 100}%)`;

      if (!animate) {
        track.offsetHeight;
        track.style.transition = "";
      }
    }

    function updateCarouselUi() {
      originalSlides.forEach((slide, slideIndex) => {
        slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });

      if (count) {
        count.textContent = `${activeIndex + 1} / ${slideCount}`;
      }
    }

    function renderCarousel(animate = true) {
      updateCarouselUi();
      setTrackPosition(animate);
    }

    function goTo(nextIndex, options = {}) {
      const direction = options.direction || "auto";

      if (direction === "next" && activeIndex === slideCount - 1 && nextIndex >= slideCount) {
        activeIndex = 0;
        trackIndex = slideCount;
        renderCarousel(true);
        return;
      }

      activeIndex = (nextIndex + slideCount) % slideCount;
      trackIndex = activeIndex;
      renderCarousel(true);
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        goTo(activeIndex - 1, { direction: "prev" });
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        goTo(activeIndex + 1, { direction: "next" });
      });
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const nextIndex = Number(dot.getAttribute("data-carousel-dot"));
        if (!Number.isNaN(nextIndex)) {
          const direction = activeIndex === slideCount - 1 && nextIndex === 0 ? "next" : "auto";
          goTo(nextIndex, { direction });
        }
      });
    });

    track.addEventListener("transitionend", () => {
      if (trackIndex === slideCount) {
        trackIndex = 0;
        setTrackPosition(false);
      }
    });

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);
    carousel.addEventListener("focusin", stopAutoplay);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        startAutoplay();
      }
    });

    viewport.addEventListener("touchstart", (event) => {
      const touch = event.changedTouches[0];
      if (!touch) return;
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
      touchActive = true;
      stopAutoplay();
    }, { passive: true });

    viewport.addEventListener("touchend", (event) => {
      if (!touchActive) return;
      const touch = event.changedTouches[0];
      touchActive = false;
      if (!touch) {
        startAutoplay();
        return;
      }

        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;

        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          goTo(deltaX < 0 ? activeIndex + 1 : activeIndex - 1, {
            direction: deltaX < 0 ? "next" : "prev"
          });
        }

        startAutoplay();
      }, { passive: true });

    viewport.addEventListener("touchcancel", () => {
      touchActive = false;
      startAutoplay();
      }, { passive: true });

    renderCarousel(false);
    startAutoplay();
  }

  applyBrandFallback();
  setSmsLink();
  setupBuyButton();
  setupMobileNav();
  setupAccordion();
  setupCarousel();
})();
