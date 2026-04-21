(() => {
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";

  const ES = {
    skip: "Saltar al contenido",
    "brand.tag": "Café de especialidad en lotes pequeños",
    "nav.roast": "Cafés actuales",
    "nav.about": "Acerca de",
    "nav.faq": "Preguntas",
    "nav.contact": "Contacto",
    "nav.orderCta": "Ordenar ahora",
    "lang.label": "Idioma",
    "hero.kicker": "Tostado en Beardstown, sirviendo a Springfield y al centro de Illinois",
    "hero.title": "Café de especialidad con sensación premium, no con precio premium.",
    "hero.sub": "Millionaire's Roast es una tostaduría artesanal del centro de Illinois que ofrece tres cafés de origen único dentro de perfiles de tueste medio, medio oscuro y oscuro.",
    "hero.chip1": "Tostado en lotes pequeños",
    "hero.chip2": "Tres orígenes únicos",
    "hero.chip3": "Medio, medio oscuro y oscuro",
    "hero.chip5": "K-Cups disponibles",
    "hero.pricing": "Bolsas de 14 oz $18 \u2022 K-Cups desde $10",
    "hero.helper": "Ordena en línea para recogida, entrega o envío en Illinois.",
    "hero.cta.primary": "Comprar ahora",
    "hero.cta.secondary": "Ver cafés actuales",
    "hero.proof1.title": "Presencia local",
    "hero.proof1.body": "Nos encuentras en mercados locales y eventos comunitarios por todo el centro de Illinois.",
    "hero.proof2.title": "Detalles claros del café",
    "hero.proof2.body": "Orígenes, notas de sabor, mejor uso y precios fáciles de revisar.",
    "order.title": "Ordena en línea",
    "order.subtitle": "Usa la tienda principal para pedir la línea actual en un solo lugar.",
    "order.card.kicker": "Tienda principal",
    "order.card.title": "Compra la línea actual",
    "order.card.body": "Abre la tienda para pedir la línea actual y elegir recogida, entrega o envío en Illinois.",
    "order.card.cta": "Abrir la tienda",
    "order.card.note": "Pago seguro para recogida, entrega y envío en Illinois.",
    "order.note.lead": "¿Necesitas ayuda para elegir?",
    "order.note.body": "Mándanos un texto y te ayudamos a elegir el café correcto.",
    "coffees.title": "Cafés actuales",
    "coffees.subtitle": "Actualmente ofrecemos tres cafés de origen único dentro de tres perfiles de tueste. Costa Rican Tarrazú Jaguar Honey lidera la línea como nuestro tueste medio insignia y llegó para quedarse, mientras que Peruvian Chonta G1 Washed y Brazilian Cerrado Natural rotan por los espacios de medio oscuro y oscuro.",
    "coffee.pricing.title": "Precio simple",
    "coffee.pricing.bag": "Bolsa de 14 oz $18",
    "coffee.pricing.kcups": "K-Cups: 8 pack $10 \u00b7 18 pack $22 \u00b7 24 pack $28",
    "coffee.pricing.note": "El precio aplica en toda la línea actual.",
    "coffee.spec.origin": "Origen",
    "coffee.spec.notes": "Notas de sabor",
    "coffee.spec.best": "Mejor uso",
    "coffee.spec.availability": "Disponibilidad",
    "coffee.conservation.kicker": "Conservación Jaguar",
    "coffee.cr.kicker": "Origen insignia",
    "coffee.cr.badge": "Tueste medio",
    "coffee.cr.title": "Costa Rican Tarrazú Jaguar Honey",
    "coffee.cr.process": "Proceso Honey",
    "coffee.cr.body": "Nuestro origen insignia actual y el perfil más brillante de la línea, construido alrededor de notas de chocolate con leche, miel y frambuesa con un final más limpio y dulce. Este café ancla la línea y llegó para quedarse.",
    "coffee.cr.note": "Ideal para clientes que quieren un café de especialidad accesible con dulzura, balance y un poco de brillo.",
    "coffee.cr.origin": "Tarrazú, Costa Rica",
    "coffee.cr.notes": "Chocolate con leche, miel, frambuesa",
    "coffee.cr.best": "Excelente para drip, pour over y tomar a diario",
    "coffee.cr.availability": "Disponible ahora en grano, molido o K-Cups",
    "coffee.cr.conservation": "El nombre Jaguar de este origen se conecta con una historia real de conservación vinculada al beneficio San Diego en Costa Rica. Aporta un trasfondo significativo al café insignia sin quitarle el foco a la taza.",
    "coffee.pe.badge": "Tueste medio oscuro",
    "coffee.pe.title": "Peruvian Chonta G1 Washed",
    "coffee.pe.process": "Lavado",
    "coffee.pe.body": "Un origen rotativo de tueste medio oscuro con un perfil más desarrollado que todavía conserva algo de brillo, con chocolate, manzana verde, ciruela, almendra tostada y cítricos.",
    "coffee.pe.origin": "Perú",
    "coffee.pe.notes": "Chocolate, manzana verde, ciruela, almendra tostada, cítricos",
    "coffee.pe.best": "Ideal para clientes que quieren un carácter de tueste más profundo sin llegar por completo al oscuro",
    "coffee.pe.availability": "Disponible ahora en grano, molido o K-Cups",
    "coffee.br.badge": "Tueste oscuro",
    "coffee.br.title": "Brazilian Cerrado Natural",
    "coffee.br.process": "Proceso Natural",
    "coffee.br.body": "Un origen rotativo oscuro con una taza más llena y suave construida alrededor de chocolate con leche, almendra, ciruela pasa y vainilla.",
    "coffee.br.origin": "Brasil",
    "coffee.br.notes": "Chocolate con leche, almendra, ciruela pasa, vainilla",
    "coffee.br.best": "Ideal para clientes que quieren una taza más oscura que siga tomando suave y dulce",
    "coffee.br.availability": "Disponible ahora en grano, molido o K-Cups",
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
    "about.side.title": "Lo que lo distingue",
    "about.side.li1": "Tostado en lotes pequeños con orígenes rotativos",
    "about.side.li2": "Información clara del café que ayuda a comprar con confianza",
    "about.side.li3": "Pedidos flexibles para envío, recogida, entrega y K-Cups",
    "about.side.li4": "Hecho para clientes del centro de Illinois, no solo para conocedores",
    "about.find.title": "Dónde encontrarnos",
    "about.find.body": "Sigue nuestras redes para ver apariciones en mercados, coordinación de recogidas y disponibilidad actual.",
    "ceo.caption": "Lanzado con orgullo a través del programa Cass County CEO.",
    "faq.title": "Respuestas rápidas",
    "faq.subtitle": "Corto y útil, para que ordenar sea sencillo.",
    "faq.q1": "¿Cómo ordeno?",
    "faq.a1": "Usa nuestra tienda en línea para elegir envío, recogida o entrega en un solo lugar.",
    "faq.q2": "¿Dónde están ubicados?",
    "faq.a2": "Millionaire's Roast se tuesta en Beardstown y sirve regularmente a Springfield y al centro de Illinois.",
    "faq.q3": "¿Qué cafés están disponibles ahora mismo?",
    "faq.a3": "Actualmente ofrecemos tres cafés de origen único: Costa Rican Tarrazú Jaguar Honey como nuestro tueste medio insignia que llegó para quedarse, además de Peruvian Chonta G1 Washed y Brazilian Cerrado Natural como orígenes rotativos en los espacios de medio oscuro y oscuro. Cada origen está disponible en grano, molido y K-Cups.",
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
  const emailCard = document.getElementById("emailUsCard");
  const instagramCard = document.getElementById("instagramCard");
  const facebookCard = document.getElementById("facebookCard");
  const heroOrderBtn = document.getElementById("heroOrderBtn");
  const orderShopBtn = document.getElementById("orderShopBtn");
  const navOrderBtn = document.getElementById("navOrderBtn");
  const mobileNavOrderBtn = document.getElementById("mobileNavOrderBtn");
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
    if (lang === "es") {
      return "Actualmente ofrecemos tres cafés de origen único: Costa Rican Tarrazú Jaguar Honey como nuestro tueste medio insignia que llegó para quedarse, además de Peruvian Chonta G1 Washed y Brazilian Cerrado Natural como orígenes rotativos en los espacios de medio oscuro y oscuro. Cada origen está disponible en grano, molido y K-Cups.";
    }

    return "We currently offer three single origin coffees: Costa Rican Tarrazú Jaguar Honey as our flagship medium roast that is here to stay, plus Peruvian Chonta G1 Washed and Brazilian Cerrado Natural as rotating origins in the medium dark and dark slots. Each origin is available as whole bean, ground, and K-Cups.";
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
          name: "What coffees are available right now?",
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

  function getAnalyticsLanguage() {
    return root.dataset.lang || root.getAttribute("lang") || "en";
  }

  function getLinkText(element) {
    return (element?.textContent || "").replace(/\s+/g, " ").trim();
  }

  function sendAnalyticsEvent(eventName, params) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", eventName, params);
  }

  function registerShopClickTracking(element) {
    if (!element) return;

    element.addEventListener("click", () => {
      sendAnalyticsEvent("shop_click", {
        cta_location: element.dataset.ctaLocation || "unknown",
        destination_url: element.href,
        language: getAnalyticsLanguage(),
        link_text: getLinkText(element)
      });
    });
  }

  function registerContactClickTracking(element, eventName, clickLocation) {
    if (!element) return;

    element.addEventListener("click", () => {
      sendAnalyticsEvent(eventName, {
        click_location: clickLocation,
        destination_url: element.href,
        language: getAnalyticsLanguage(),
        link_text: getLinkText(element)
      });
    });
  }

  function setupAnalytics() {
    [
      heroOrderBtn,
      orderShopBtn,
      navOrderBtn,
      mobileNavOrderBtn
    ].forEach(registerShopClickTracking);

    registerContactClickTracking(textCard, "text_click", "contact_text");
    registerContactClickTracking(emailCard, "email_click", "contact_email");
    registerContactClickTracking(instagramCard, "instagram_click", "contact_instagram");
    registerContactClickTracking(facebookCard, "facebook_click", "contact_facebook");
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

    const slideCount = originalSlides.length;
    const firstClone = originalSlides[0].cloneNode(true);
    firstClone.setAttribute("aria-hidden", "true");
    firstClone.dataset.clone = "true";

    const lastClone = originalSlides[slideCount - 1].cloneNode(true);
    lastClone.setAttribute("aria-hidden", "true");
    lastClone.dataset.clone = "true";

    track.prepend(lastClone);
    track.appendChild(firstClone);

    let activeIndex = 0;
    let trackIndex = 1;
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
        trackIndex = slideCount + 1;
        renderCarousel(true);
        return;
      }

      if (direction === "prev" && activeIndex === 0 && nextIndex < 0) {
        activeIndex = slideCount - 1;
        trackIndex = 0;
        renderCarousel(true);
        return;
      }

      activeIndex = (nextIndex + slideCount) % slideCount;
      trackIndex = activeIndex + 1;
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
          let direction = "auto";
          if (activeIndex === slideCount - 1 && nextIndex === 0) direction = "next";
          if (activeIndex === 0 && nextIndex === slideCount - 1) direction = "prev";
          goTo(nextIndex, direction);
        }
      });
    });

    track.addEventListener("transitionend", () => {
      if (trackIndex === slideCount + 1) {
        trackIndex = 1;
        setTrackPosition(false);
        return;
      }

      if (trackIndex === 0) {
        trackIndex = slideCount;
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
  setupAnalytics();
})();
