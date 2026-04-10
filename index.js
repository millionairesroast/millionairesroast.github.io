(() => {
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";

  const ES = {
    skip: "Saltar al contenido",
    "brand.tag": "Café de especialidad en lotes pequeños",
    "nav.roast": "Tostado actual",
    "nav.about": "Acerca de",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.orderCta": "Ordenar ahora",
    "lang.label": "Idioma",
    "hero.kicker": "Tostado en Beardstown, sirviendo a Springfield y al centro de Illinois",
    "hero.title": "Café de especialidad con sensación premium, no con precio premium.",
    "hero.sub": "Millionaire's Roast es una tostaduría artesanal del centro de Illinois enfocada en café de especialidad accesible, orígenes rotativos y una taza fácil para todos los días.",
    "hero.chip1": "Tostado en lotes pequeños",
    "hero.chip2": "Café de especialidad",
    "hero.chip3": "Orígenes rotativos",
    "hero.chip4": "Recogida, entrega o envío en Illinois",
    "hero.chip5": "Bolsas de 14 oz desde $18",
    "hero.cta.primary": "Elegir forma de ordenar",
    "hero.cta.secondary": "Ver tostado actual",
    "hero.proof1.title": "Presencia local",
    "hero.proof1.body": "Nos encuentras en mercados locales y eventos comunitarios por todo el centro de Illinois.",
    "hero.proof2.title": "Detalles claros del café",
    "hero.proof2.body": "Origen, notas de sabor, mejor uso y precios fáciles de revisar.",
    "order.title": "Ordena en un solo lugar",
    "order.subtitle": "El envío, la recogida y la entrega ahora se manejan desde una sola vitrina.",
    "order.card.kicker": "Un enlace para ordenar",
    "order.card.title": "Elige envío, recogida o entrega",
    "order.card.body": "Abre la tienda para hacer tu pedido y elegir la opción de cumplimiento que mejor te convenga.",
    "order.card.cta": "Abrir la tienda",
    "order.card.note": "Pago seguro para envío, recogida y entrega.",
    "order.ship.kicker": "Envío de café",
    "order.ship.title": "Envíos para pedidos en Illinois",
    "order.ship.body": "Elige el enlace de envío que corresponda a lo que quieres recibir: bolsas de café o K-Cups.",
    "order.ship.cta1": "Enviar bolsas de café",
    "order.ship.cta2": "Enviar K-Cups",
    "order.ship.note": "Abre el pago seguro para pedidos enviados dentro de Illinois.",
    "order.local.kicker": "Recogida / Entrega local",
    "order.local.title": "Recogida y entrega local",
    "order.local.body": "Usa el perfil de pedidos para recogida o entrega en Beardstown, Springfield y zonas cercanas.",
    "order.local.cta": "Ordenar recogida o entrega",
    "order.local.note": "Abre el perfil local de pedidos para recogida o entrega.",
    "order.note.lead": "¿Necesitas ayuda?",
    "order.note.body": "Un solo enlace ahora maneja el envío, la recogida y la entrega. Si prefieres hacerlo de forma más personal o quieres ayuda para completar la orden, mándanos un texto.",
    "roast.kicker": "Tostado actual",
    "roast.title": "Costa Rica Tarrazú \"San Diego Jaguar\"",
    "roast.process": "Proceso Honey",
    "roast.body": "Una taza rica y balanceada con dulzor de chocolate, final meloso y notas frutales que mantienen el perfil vivo sin ponerse agresivo.",
    "roast.note": "Ideal para quien quiere un café diario balanceado y dulce, con complejidad frutal pero sin aspereza.",
    "roast.spec1.label": "Origen",
    "roast.spec1.value": "Tarrazú, Costa Rica",
    "roast.spec2.label": "Nivel de tueste",
    "roast.spec2.value": "Medio, medio oscuro, oscuro",
    "roast.spec3.label": "Notas de sabor",
    "roast.spec3.value": "Chocolate, miel, nectarina, guayaba, frutos rojos, cítricos",
    "roast.spec4.label": "Mejor uso",
    "roast.spec4.value": "Excelente para drip, buen café helado y fácil para diario",
    "roast.spec5.label": "Disponibilidad",
    "roast.spec5.value": "Disponible ahora en grano o molido",
    "roast.spec6.label": "Perfil de taza",
    "roast.spec6.value": "Balanceado, dulce y fácil de volver a tomar",
    "roast.price.bag": "Bolsa de 14 oz",
    "roast.price.kcups": "K-Cups",
    "jaguar.kicker": "¿Por qué \"Jaguar\"?",
    "jaguar.title": "Una gran taza con una historia real de conservación",
    "jaguar.body": "Este café Jaguar Honey viene de Beneficio San Diego en Tarrazú, Costa Rica. La línea Jaguar ha sido vinculada públicamente por Volcafe Costa Rica y Genuine Origin con una alianza de conservación junto a Fundazoo para apoyar la preservación del jaguar y otros felinos silvestres en Costa Rica.",
    "jaguar.note": "La página actual del lote destaca el beneficio San Diego y el perfil del café; la historia de conservación viene del programa Jaguar más amplio vinculado a este beneficio húmedo.",
    "proof.title": "Una marca local real y en movimiento",
    "proof.subtitle": "La marca se ve pulida porque el trabajo detrás es real: mercados locales, tostado manual y un fundador construyendo todo lote por lote.",
    "proof.caption1": "Jesús Gómez ayudando en el puesto de Millionaire's Roast durante el Old Capitol Farmers Market en el centro de Springfield.",
    "proof.caption2": "Maximiliano Gómez, fundador de Millionaire's Roast, durante una visita de Cass County CEO a Western Illinois University.",
    "proof.caption3": "Una versión más temprana del puesto en el Old Capitol Farmers Market que muestra cómo ha crecido la presentación.",
    "about.title": "Sobre Millionaire's Roast",
    "about.subtitle": "Una marca local de café creada a través del programa Cass County CEO y desarrollada por medio de mercados, pedidos directos y tostado manual.",
    "about.story.title": "Conoce a Maximiliano",
    "about.story.p1": "Millionaire's Roast comenzó a través del programa Cass County CEO, donde Maximiliano Gomez convirtió una idea de negocio en una marca real de café artesanal arraigada en su comunidad.",
    "about.story.p2": "Cada lote comienza con café verde cuidadosamente seleccionado, luego se tuesta, se muele, se empaca y se prepara a mano. La meta no es hacer que el café se sienta exclusivo. La meta es ofrecer algo genuinamente de alta calidad a un precio al que la gente pueda volver.",
    "about.story.p3": "Tostado en Beardstown y vendido regularmente en Springfield y el centro de Illinois, la marca sigue creciendo a través de ventas directas, eventos locales, recogida, entrega y envíos sencillos en línea para clientes de Illinois.",
    "about.story.line": "Lanzado con orgullo a través del programa Cass County CEO.",
    "about.story.link": "Conoce más sobre Cass County CEO",
    "about.side.title": "Lo que lo distingue",
    "about.side.li1": "Tostado en lotes pequeños con orígenes rotativos",
    "about.side.li2": "Información clara del café que ayuda a comprar con confianza",
    "about.side.li3": "Pedidos flexibles para envío, recogida, entrega y K-Cups",
    "about.side.li4": "Hecho para clientes del centro de Illinois, no solo para conocedores",
    "about.find.title": "Dónde encontrarnos",
    "about.find.body": "Sigue nuestras redes para ver apariciones en mercados, coordinación de recogidas y disponibilidad actual.",
    "faq.title": "Respuestas rápidas",
    "faq.subtitle": "Corto y útil, para que ordenar sea sencillo.",
    "faq.q1": "¿Cómo ordeno?",
    "faq.a1": "Usa nuestra tienda en línea para elegir envío, recogida o entrega en un solo lugar.",
    "faq.q2": "¿Dónde están ubicados?",
    "faq.a2": "Millionaire's Roast se tuesta en Beardstown y sirve regularmente a Springfield y al centro de Illinois.",
    "faq.q3": "¿Cómo es el tostado actual?",
    "faq.q4": "¿Cuánto dura una rotación actual?",
    "faq.a4": "Compramos café verde en volumen, pero los tiempos de cosecha cambian según la región y el ciclo agrícola. Cuando un café se acaba, hay una alta probabilidad de que ese lote en específico se haya ido por ahora, no para siempre, y la rotación sigue cambiando según la demanda y la disponibilidad.",
    "contact.title": "Contacto y redes",
    "contact.subtitle": "El texto es la forma más rápida de hacer una pregunta rápida. El correo funciona mejor para seguimiento y preguntas personalizadas.",
    "contact.text.kicker": "Texto",
    "contact.text.sub": "La forma más rápida de hacer una pregunta rápida",
    "contact.email.kicker": "Correo",
    "contact.email.sub": "Mejor para seguimiento y preguntas personalizadas",
    "contact.ig.kicker": "Instagram",
    "contact.ig.sub": "Actualizaciones de mercados y disponibilidad",
    "contact.fb.kicker": "Facebook",
    "contact.fb.main": "Millionaire's Roast",
    "contact.fb.sub": "Anuncios, eventos y noticias locales",
    "footer.line": "Tostado en Beardstown, sirviendo a Springfield y al centro de Illinois.",
    "sms.body": "¡Hola! Tengo una pregunta sobre Millionaire's Roast."
  };

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector(".site-header");
  const yearEl = document.getElementById("year");
  const textCard = document.getElementById("textUsCard");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const brandMark = document.querySelector(".brand-mark");
  const accordion = document.querySelector("[data-accordion]");
  const accordionButtons = accordion ? [...accordion.querySelectorAll(".faq-item")] : [];
  const carousel = document.querySelector("[data-carousel]");
  const langButtons = [...document.querySelectorAll("[data-lang-btn]")];
  const langSwitch = document.querySelector(".lang-switch");
  const faqSchemaScript = document.getElementById("faq-schema");
  const roastFaqAnswer = document.querySelector('[data-i18n="faq.a3"]');
  const i18nElements = [...document.querySelectorAll("[data-i18n]")];
  const i18nBindings = i18nElements
    .map((element) => [element, element.getAttribute("data-i18n")])
    .filter(([, key]) => Boolean(key));
  const BASE = Object.fromEntries(
    i18nBindings.map(([element, key]) => [key, element.textContent])
  );
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

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

  function getCopy(lang, key) {
    return lang === "es" ? (ES[key] ?? BASE[key]) : BASE[key];
  }

  function buildRoastFaqAnswer(lang) {
    const roastTitle = getCopy(lang, "roast.title");
    const roastProcess = getCopy(lang, "roast.process");
    const tastingNotes = getCopy(lang, "roast.spec3.value");
    const cupProfile = getCopy(lang, "roast.spec6.value");

    if (lang === "es") {
      return `${roastTitle} es un café ${roastProcess.toLowerCase()} con notas de ${tastingNotes.toLowerCase()}. Es ${cupProfile.toLowerCase()}.`;
    }

    return `${roastTitle} is a ${roastProcess.toLowerCase()} coffee with ${tastingNotes.toLowerCase()} notes. It is ${cupProfile.toLowerCase()}.`;
  }

  function updateFaqSchema() {
    if (!faqSchemaScript) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://millionairesroast.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I order?",
          acceptedAnswer: { "@type": "Answer", text: BASE["faq.a1"] }
        },
        {
          "@type": "Question",
          name: "Where are you based?",
          acceptedAnswer: { "@type": "Answer", text: BASE["faq.a2"] }
        },
        {
          "@type": "Question",
          name: "What is the current roast?",
          acceptedAnswer: { "@type": "Answer", text: buildRoastFaqAnswer("en") }
        },
        {
          "@type": "Question",
          name: "How long does a current rotation last?",
          acceptedAnswer: { "@type": "Answer", text: BASE["faq.a4"] }
        }
      ]
    };

    faqSchemaScript.textContent = JSON.stringify(schema, null, 2);
  }

  function setSmsLink(lang) {
    const bodyText = encodeURIComponent(getCopy(lang, "sms.body"));
    const separator = isIOS ? "&" : "?";
    const smsUrl = `sms:${PHONE_NUMBER}${separator}body=${bodyText}`;

    if (textCard) textCard.href = smsUrl;
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
    toggle.addEventListener("click", () => setMobile(toggle.getAttribute("aria-expanded") !== "true"));
    mobileNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) setMobile(false);
    });
    window.addEventListener("resize", () => {
      syncMobileMenuHeight();
      syncOpenAccordionHeight();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMobile(false);
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
      if (panel && button.getAttribute("aria-expanded") === "true") {
        panel.hidden = false;
        panel.style.maxHeight = `${panel.scrollHeight}px`;
      }
    });
  }

  function setupAccordion() {
    if (!accordion || !accordionButtons.length) return;

    accordionButtons.forEach((button) => closeAccordionButton(button, true));
    accordionButtons.filter((button) => button.hasAttribute("data-open-default")).forEach(openAccordionButtonElement);
    accordion.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-item");
      if (!button || !accordion.contains(button)) return;
      if (button.getAttribute("aria-expanded") === "true") {
        closeAccordionButton(button);
      } else {
        openAccordionButtonElement(button);
      }
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

    const stopAutoplay = () => {
      if (autoplayId) {
        window.clearInterval(autoplayId);
        autoplayId = 0;
      }
    };

    const setTrackPosition = (animate = true) => {
      if (!animate) track.style.transition = "none";
      track.style.transform = `translateX(-${trackIndex * 100}%)`;
      if (!animate) {
        track.offsetHeight;
        track.style.transition = "";
      }
    };

    const updateCarouselUi = () => {
      originalSlides.forEach((slide, slideIndex) => {
        slide.setAttribute("aria-hidden", String(slideIndex !== activeIndex));
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
      if (count) count.textContent = `${activeIndex + 1} / ${slideCount}`;
    };

    const renderCarousel = (animate = true) => {
      updateCarouselUi();
      setTrackPosition(animate);
    };

    const goTo = (nextIndex, direction = "auto") => {
      if (direction === "next" && activeIndex === slideCount - 1 && nextIndex >= slideCount) {
        activeIndex = 0;
        trackIndex = slideCount;
        renderCarousel(true);
        return;
      }

      activeIndex = (nextIndex + slideCount) % slideCount;
      trackIndex = activeIndex;
      renderCarousel(true);
    };

    const startAutoplay = () => {
      stopAutoplay();
      autoplayId = window.setInterval(() => goTo(activeIndex + 1, "next"), 5000);
    };

    prevButton?.addEventListener("click", () => goTo(activeIndex - 1, "prev"));
    nextButton?.addEventListener("click", () => goTo(activeIndex + 1, "next"));
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const nextIndex = Number(dot.getAttribute("data-carousel-dot"));
        if (!Number.isNaN(nextIndex)) {
          goTo(nextIndex, activeIndex === slideCount - 1 && nextIndex === 0 ? "next" : "auto");
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
      if (!carousel.contains(event.relatedTarget)) startAutoplay();
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
      if (touch) {
        const deltaX = touch.clientX - touchStartX;
        const deltaY = touch.clientY - touchStartY;
        if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
          goTo(deltaX < 0 ? activeIndex + 1 : activeIndex - 1, deltaX < 0 ? "next" : "prev");
        }
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

  function updateDerivedContent(lang) {
    if (roastFaqAnswer) {
      roastFaqAnswer.textContent = buildRoastFaqAnswer(lang);
    }
    updateFaqSchema();
  }

  function applyTranslations(lang) {
    i18nBindings.forEach(([element, key]) => {
      element.textContent = getCopy(lang, key);
    });

    updateDerivedContent(lang);
    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-btn") === lang));
    });
    root.setAttribute("lang", lang === "es" ? "es" : "en");
    root.dataset.lang = lang;
    setSmsLink(lang);

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}

    syncOpenAccordionHeight();
    syncMobileMenuHeight();
  }

  function fadeToLanguage(lang) {
    if (root.dataset.lang === lang) return;

    root.classList.add("is-lang-fading");
    window.setTimeout(() => {
      applyTranslations(lang);
      requestAnimationFrame(() => {
        root.classList.remove("is-lang-fading");
      });
    }, 180);
  }

  function setupLanguageToggle() {
    if (!langSwitch) return;

    langSwitch.addEventListener("click", (event) => {
      const button = event.target.closest("[data-lang-btn]");
      if (button) fadeToLanguage(button.getAttribute("data-lang-btn"));
    });

    let initialLang = root.dataset.lang || "en";
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === "en" || savedLang === "es") initialLang = savedLang;
    } catch {}

    applyTranslations(initialLang);
  }

  applyBrandFallback();
  setupMobileNav();
  setupAccordion();
  setupCarousel();
  setupLanguageToggle();
})();
