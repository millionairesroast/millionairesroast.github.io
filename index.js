(() => {
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";
  const SMS_BODY = {
    en: "Hi! I'd like to order coffee from Millionaire's Roast. What do you have available?",
    es: "\u00a1Hola! Me gustar\u00eda ordenar caf\u00e9 de Millionaire's Roast. \u00bfQu\u00e9 tienen disponible?"
  };
  const MOBILE_MENU_LABELS = {
    en: { open: "Open menu", close: "Close menu" },
    es: { open: "Abrir men\u00fa", close: "Cerrar men\u00fa" }
  };

  const ES = {
    "skip": "Saltar al contenido",
    "announce.text": "Pedidos en l\u00ednea \u2022 Mercados en Springfield \u2022 The Cottage en Beardstown",
    "brand.tag": "Caf\u00e9 de especialidad en lotes peque\u00f1os",
    "nav.roast": "Caf\u00e9s actuales",
    "nav.find": "Encontrarnos",
    "nav.faq": "Preguntas",
    "nav.orderCta": "Ordenar ahora",
    "lang.label": "Idioma",

    "hero.eyebrow": "Caf\u00e9 en lotes peque\u00f1os tostado en Illinois",
    "hero.title": "Caf\u00e9 de especialidad sin el sobreprecio premium.",
    "hero.sub": "Caf\u00e9 fresco de origen \u00fanico y grado de especialidad, tostado en lotes peque\u00f1os para Springfield, Beardstown y las comunidades del centro de Illinois.",
    "hero.pricing.label": "Precios actuales",
    "hero.price.coldbrew.label": "Cold brew de 16 oz",
    "hero.price.bags.label": "Bolsas de 12 oz",
    "hero.price.kcups.label": "K-Cups de 8 unidades",
    "hero.price.kcups.multi": "Paquetes: 2 por $19 \u2022 3 por $27",
    "hero.helper": "Compra en l\u00ednea, vis\u00edtanos en los mercados de Springfield o encuentra la l\u00ednea completa en The Cottage en Beardstown.",
    "hero.cta.primary": "Comprar caf\u00e9",
    "hero.cta.mobile": "Comprar caf\u00e9",
    "hero.cta.secondary": "Ver el men\u00fa actual",
    "hero.badge.kicker": "Nueva oferta de mercado",
    "hero.badge.title": "Discovery Box",
    "hero.badge.meta": "3.5 oz cada uno \u2022 Uganda claro \u2022 Costa Rica medio \u2022 Guatemala oscuro",
    "hero.placeholder.kicker": "Tres caf\u00e9s. Una caja.",
    "hero.placeholder.title": "Discovery Box",
    "hero.placeholder.light": "Claro",
    "hero.placeholder.lightOrigin": "Ugandan Rwenzori\nKasese",
    "hero.placeholder.medium": "Medio",
    "hero.placeholder.mediumOrigin": "Costa Rican\nJaguar Honey",
    "hero.placeholder.dark": "Oscuro",
    "hero.placeholder.darkOrigin": "Guatemalan\nOrganic Highlands",
    "hero.placeholder.meta": "Tres muestras de 3.5 oz \u2022 En grano entero o molido",
    "ghost.featured": "COLD BREW",
    "ghost.origin": "ORIGEN",
    "ghost.local": "LOCAL",
    "ghost.markets": "MERCADOS",

    "featured.eyebrow": "Favorito local",
    "featured.title": "Cold Brew embotellado",
    "featured.body": "Cold brew suave de lotes peque\u00f1os en una botella de 16 oz lista para tomar.",
    "featured.meta": "16 oz \u2022 Listo para tomar",
    "featured.cta": "Ordenar cold brew",

    "coffees.eyebrow": "Caf\u00e9s actuales",
    "coffees.title": "Mira lo que estamos tostando ahora.",
    "coffees.subtitle": "Nuestros caf\u00e9s rotan a medida que se agotan los lotes. Para ver la selecci\u00f3n, los perfiles de tueste y la disponibilidad m\u00e1s precisos, visita la tienda en l\u00ednea de Millionaire's Roast.",
    "coffees.cta": "Ver caf\u00e9s actuales",
    "coffee.price.title": "Precio simple en toda la l\u00ednea",
    "coffee.price.bag.label": "Bolsas de 12 oz",
    "coffee.price.kcups.label": "K-Cups de 8 unidades",
    "coffee.price.kcups.multi": "2 por $19 • 3 por $27",
    "coffee.price.coldbrew.label": "Cold brew de 16 oz",
    "coffee.price.discovery.label": "Discovery Box",
    "discovery.card.badge": "Discovery Box",
    "discovery.card.title": "Encuentra tu tueste antes de comprar una bolsa completa.",
    "discovery.card.body": "Tres muestras de cafe de 3.5 oz que cubren tuestes claro, medio y oscuro. Elige en grano entero o molido.",
    "discovery.card.meta": "3 × 3.5 oz • En grano entero o molido",
    "discovery.cta": "Ordenar Discovery Box",

    "proof.title": "Una marca local real y en movimiento",
    "proof.subtitle": "La marca se ve pulida porque el trabajo detr\u00e1s es real: mercados locales, tostado manual y un fundador construyendo todo lote por lote.",
    "proof.card1.title": "Old Capitol Farmers Market",
    "proof.card1.body": "Sirviendo a clientes cara a cara en el centro de Springfield.",
    "proof.card2.title": "Construido con Cass County CEO",
    "proof.card2.body": "Lanzado a trav\u00e9s de un programa real de emprendimiento, no solo una tienda en l\u00ednea.",
    "proof.card3.title": "Tostado y vendido en lotes peque\u00f1os",
    "proof.card3.body": "La l\u00ednea se construye lote por lote mientras la marca crece.",

    "find.eyebrow": "Mercados y disponibilidad local",
    "find.title": "Encu\u00e9ntranos localmente.",
    "find.subtitle": "Encuentra a Millionaire's Roast en los mercados de Springfield y a trav\u00e9s de The Cottage en 201 W Main St en Beardstown, nuestro socio local principal para disponibilidad en Beardstown. Las fechas del mercado, el clima y la ubicaci\u00f3n del puesto pueden cambiar, as\u00ed que revisa nuestro Facebook o Instagram antes de venir.",
    "find.label.days": "D\u00edas",
    "find.label.location": "Lugar",
    "find.label.hours": "Horario",
    "find.label.booth": "Puesto",
    "find.label.note": "Nota",
    "find.label.format": "Formato",
    "find.label.availability": "Disponibilidad",
    "find.label.partner": "Socio",
    "find.label.role": "Rol",
    "find.cottage.title": "The Cottage",
    "find.cottage.location": "201 W Main St \u2022 Beardstown, IL 62618",
    "find.cottage.format": "Puesto local sin personal",
    "find.cottage.partner": "Conectado con Rosebud & Co.",
    "find.cottage.availability": "Bolsas, K-Cups, cold brew negro y cold brew con crema",
    "find.cottage.role": "Punto de contacto principal en Beardstown",
    "find.cottage.note": "The Cottage es nuestra conexi\u00f3n principal en Beardstown: una tienda estilo puesto local sin personal en 201 W Main St, conectada con Rosebud & Co., que tendra la l\u00ednea completa de Millionaire's Roast para clientes de Beardstown.",
    "find.cottage.photoCaption": "The Cottage \u2022 201 W Main St",
    "find.cottage.directions": "C\u00f3mo llegar",
    "find.oldCapitol.title": "Old Capitol Farmers Market",
    "find.oldCapitol.location": "Centro de Springfield",
    "find.oldCapitol.days": "Mi\u00e9rcoles y s\u00e1bados",
    "find.oldCapitol.hours": "8:00 a.m. a 12:30 p.m.",
    "find.oldCapitol.booth": "Normalmente estamos en el puesto 60 los mi\u00e9rcoles y en el puesto 30 los s\u00e1bados.",
    "find.illinoisProduct.title": "Illinois Product Farmers Market",
    "find.illinoisProduct.location": "The Shed en el Illinois State Fairgrounds",
    "find.illinoisProduct.days": "Jueves",
    "find.illinoisProduct.hours": "3:30 p.m. a 7:00 p.m.",
    "find.illinoisProduct.booth": "Encu\u00e9ntranos durante el mercado de los jueves por la tarde.",
    "find.mobile.wednesday": "Mi\u00e9rcoles",
    "find.mobile.thursday": "Jueves",
    "find.mobile.saturday": "S\u00e1bado",
    "find.mobile.wednesday.booth": "Puesto 60",
    "find.mobile.thursday.note": "Mercado de jueves por la tarde",
    "find.mobile.saturday.booth": "Puesto 30",
    "find.cta.facebook": "Facebook",
    "find.cta.instagram": "Instagram",
    "find.cta.text": "M\u00e1ndanos un texto para confirmar",

    "about.title": "Sobre Millionaire's Roast",
    "about.subtitle": "Una marca de caf\u00e9 con base en Springfield, construida a trav\u00e9s del programa Cass County CEO y fortalecida por mercados, pedidos directos y tostado manual, con caf\u00e9 fresco de origen \u00fanico en el centro de todo.",
    "about.story.title": "Conoce a Maximiliano",
    "about.story.p1": "Millionaire's Roast comenz\u00f3 a trav\u00e9s del programa Cass County CEO, donde Maximiliano Gomez convirti\u00f3 una idea de negocio en una marca real de caf\u00e9 artesanal arraigada en su comunidad.",
    "about.story.p2": "Cada lote comienza con caf\u00e9 verde cuidadosamente seleccionado de origen \u00fanico y grado de especialidad. La meta no es hacer que el caf\u00e9 se sienta exclusivo. Es ofrecer caf\u00e9 de alta calidad a un precio al que la gente normal pueda volver.",
    "about.story.p3": "Despu\u00e9s de graduarse de la preparatoria, Maximiliano se mud\u00f3 a Springfield para continuar su educaci\u00f3n superior en negocios. Sigue desarrollando Millionaire's Roast como parte pasi\u00f3n, parte hobby y parte peque\u00f1o negocio en crecimiento.",
    "about.story.p4": "Ahora con base y operaciones en Springfield, y todav\u00eda sirviendo a Beardstown y al centro de Illinois, la marca sigue creciendo a trav\u00e9s de ventas directas, mercados en Springfield, pedidos en l\u00ednea y una nueva colaboraci\u00f3n en Beardstown con The Cottage como el hogar local de nuestra l\u00ednea completa all\u00ed.",
    "about.side.title": "Lo que lo distingue",
    "about.side.li1": "Caf\u00e9 fresco de origen \u00fanico",
    "about.side.li2": "Caf\u00e9 de origen \u00fanico y grado de especialidad",
    "about.side.li3": "Pedidos flexibles para env\u00edos en Illinois, mercados locales, The Cottage y K-Cups",
    "about.side.li4": "Hecho para clientes del centro de Illinois, no solo para conocedores del caf\u00e9",
    "ceo.caption": "Lanzado con orgullo a trav\u00e9s del programa Cass County CEO.",

    "faq.title": "Respuestas r\u00e1pidas",
    "faq.subtitle": "Corto y \u00fatil, para que ordenar sea sencillo.",
    "faq.q1": "\u00bfC\u00f3mo ordeno?",
    "faq.a1": "Usa nuestra tienda en l\u00ednea para ver caf\u00e9s actuales y env\u00edos en Illinois. En Beardstown, The Cottage en 201 W Main St es nuestro punto de contacto local principal y tendra la l\u00ednea completa de Millionaire's Roast: bolsas, K-Cups y cold brew embotellado en versiones negro y con crema.",
    "faq.q2": "\u00bfD\u00f3nde est\u00e1n ubicados?",
    "faq.a2": "Millionaire's Roast tiene base en Springfield, Illinois. Servimos a Springfield a trav\u00e9s de mercados locales y pedidos en l\u00ednea, y a Beardstown a trav\u00e9s de The Cottage en 201 W Main St, un puesto local sin personal conectado con Rosebud & Co.",
    "faq.q3": "\u00bfQu\u00e9 caf\u00e9s est\u00e1n disponibles ahora mismo?",
    "faq.a3": "Nuestros caf\u00e9s rotan a medida que se agotan los lotes, por lo que la tienda en l\u00ednea es la fuente m\u00e1s precisa para ver lo que est\u00e1 disponible ahora. La Discovery Box y el cold brew embotellado siguen siendo productos destacados, y todo el caf\u00e9 que tostamos es de grado de especialidad.",
    "faq.q4": "\u00bfCu\u00e1nto dura una rotaci\u00f3n actual?",
    "faq.a4": "Compramos caf\u00e9 verde en volumen, pero los tiempos de cosecha cambian seg\u00fan la regi\u00f3n y el ciclo agr\u00edcola. Cuando un caf\u00e9 se acaba, hay una alta probabilidad de que ese lote en espec\u00edfico se haya ido por ahora, no para siempre, y la rotaci\u00f3n sigue cambiando seg\u00fan la demanda y la disponibilidad.",
    "faq.q5": "\u00bfQu\u00e9 hace que este caf\u00e9 sea de especialidad?",
    "faq.a5": "El caf\u00e9 de grado de especialidad empieza con mejor caf\u00e9 verde antes de llegar al tostador. Seleccionamos caf\u00e9s por su origen, frescura, trazabilidad y claridad de sabor, no por tratarlos como caf\u00e9 comercial com\u00fan.\n\nPara el cliente, el resultado es simple: sabores m\u00e1s limpios, notas m\u00e1s claras y una taza m\u00e1s intencional.",

    "contact.title": "Contacto y redes",
    "contact.subtitle": "M\u00e1ndanos un texto para preguntas r\u00e1pidas sobre caf\u00e9s actuales, fechas de mercado o disponibilidad local completa en The Cottage. El correo funciona mejor para seguimiento y preguntas personalizadas.",
    "contact.text.kicker": "Texto",
    "contact.text.sub": "La forma m\u00e1s r\u00e1pida de hacer una pregunta r\u00e1pida",
    "contact.email.kicker": "Correo",
    "contact.email.sub": "Mejor para seguimiento y preguntas personalizadas",
    "contact.ig.kicker": "Instagram",
    "contact.ig.sub": "Actualizaciones de mercados y disponibilidad",
    "contact.fb.kicker": "Facebook",
    "contact.fb.main": "Millionaire's Roast",
    "contact.fb.sub": "Anuncios, eventos y noticias locales",

    "footer.srTitle": "Pie de p\u00e1gina de Millionaire's Roast",
    "footer.shop.title": "Comprar",
    "footer.shop.current": "Caf\u00e9s actuales",
    "footer.shop.order": "Ordenar en l\u00ednea",
    "footer.local.title": "Local",
    "footer.local.markets": "Mercados",
    "footer.local.contact": "Contacto",
    "footer.line": "Este producto fue elaborado en una cocina del hogar no inspeccionada por un departamento de salud que tambi\u00e9n puede procesar al\u00e9rgenos alimentarios comunes. Si tiene preocupaciones de seguridad, comun\u00edquese con su departamento de salud local."
  };

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector(".site-header");
  const yearEl = document.getElementById("year");
  const textCard = document.getElementById("textUsCard");
  const emailCard = document.getElementById("emailUsCard");
  const instagramCard = document.getElementById("instagramCard");
  const facebookCard = document.getElementById("facebookCard");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const brandMark = document.querySelector(".brand-mark");
  const accordion = document.querySelector("[data-accordion]");
  const accordionButtons = accordion ? [...accordion.querySelectorAll(".faq-item")] : [];
  const carousel = document.querySelector("[data-carousel]");
  const langButtons = [...document.querySelectorAll("[data-lang-btn]")];
  const langSwitches = [...document.querySelectorAll(".lang-switch")];
  const productMotionQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  const finePointerQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(hover: hover) and (pointer: fine)")
    : null;
  const supportsSmallViewportUnits = typeof CSS !== "undefined"
    && typeof CSS.supports === "function"
    && CSS.supports("height", "100svh");
  const faqSchemaScript = document.getElementById("faq-schema");
  const BASE = Object.fromEntries(
    [
      ...[...document.querySelectorAll("[data-i18n]")].map((element) => [
        element.getAttribute("data-i18n"),
        element.textContent
      ]),
      ...[...document.querySelectorAll("[data-i18n-aria-label]")].map((element) => [
        element.getAttribute("data-i18n-aria-label"),
        element.getAttribute("aria-label")
      ])
    ].filter(([key]) => Boolean(key))
  );
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  let mobileMarketSwitchTimer = 0;
  let mobileMarketTabsListenerBound = false;
  let revealObserver = null;
  let sectionObserver = null;
  let revealMotionListenerBound = false;
  let stableViewportWidth = 0;
  const accordionCloseCleanups = new WeakMap();

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
    return lang === "es" ? (ES[key] ?? BASE[key] ?? "") : (BASE[key] ?? "");
  }

  const HTML_ESCAPE_MAP = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  };

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => HTML_ESCAPE_MAP[character]);
  }

  function getCurrentLang() {
    return root.dataset.lang === "es" ? "es" : "en";
  }

  function updateFaqSchema(lang) {
    if (!faqSchemaScript) return;

    const questionKeys = ["1", "2", "3", "4", "5"];
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://millionairesroast.com/#faq",
      mainEntity: questionKeys.map((number) => ({
        "@type": "Question",
        name: getCopy(lang, `faq.q${number}`),
        acceptedAnswer: {
          "@type": "Answer",
          text: getCopy(lang, `faq.a${number}`)
        }
      }))
    };

    faqSchemaScript.textContent = JSON.stringify(schema);
  }

  function getSmsBody(lang) {
    return SMS_BODY[lang] || SMS_BODY.en;
  }

  function setSmsLinks(lang) {
    const separator = isIOS ? "&" : "?";
    const links = [...document.querySelectorAll("[data-sms-link]")];
    const buildSmsUrl = (body) => `sms:${PHONE_NUMBER}${separator}body=${encodeURIComponent(body)}`;

    if (!links.length && textCard) {
      textCard.href = buildSmsUrl(getSmsBody(lang));
      return;
    }

    links.forEach((link) => {
      const customBody = lang === "es" ? link.dataset.smsBodyEs : link.dataset.smsBodyEn;
      link.href = buildSmsUrl(customBody || getSmsBody(lang));
    });
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
    if (element.dataset.shopAnalyticsBound === "true") return;
    element.dataset.shopAnalyticsBound = "true";

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
    if (element.dataset.contactAnalyticsBound === "true") return;
    element.dataset.contactAnalyticsBound = "true";

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
    document.querySelectorAll("[data-shop-cta]").forEach(registerShopClickTracking);

    const smsLinks = [...document.querySelectorAll("[data-sms-link]")];
    if (smsLinks.length) {
      smsLinks.forEach((link, index) => {
        registerContactClickTracking(
          link,
          "text_click",
          link.dataset.contactLocation || `text_${index + 1}`
        );
      });
    } else {
      registerContactClickTracking(textCard, "text_click", "contact_text");
    }

    registerContactClickTracking(emailCard, "email_click", "contact_email");
    registerContactClickTracking(instagramCard, "instagram_click", "contact_instagram");
    registerContactClickTracking(facebookCard, "facebook_click", "contact_facebook");

    document.querySelectorAll("[data-map-link]").forEach((link, index) => {
      registerContactClickTracking(
        link,
        "directions_click",
        link.dataset.contactLocation || `directions_${index + 1}`
      );
    });
  }

  function syncViewportSizing(forceHeight = false) {
    const headerHeight = header ? header.offsetHeight : 0;
    const visualViewport = window.visualViewport;
    const visualHeight = visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 0;
    const visualWidth = visualViewport?.width || window.innerWidth || document.documentElement.clientWidth || 0;

    root.style.setProperty("--header-height", `${headerHeight}px`);
    if (!supportsSmallViewportUnits
      && (forceHeight || !stableViewportWidth || Math.abs(visualWidth - stableViewportWidth) > 1)) {
      stableViewportWidth = visualWidth;
      root.style.setProperty("--mobile-visual-height", `${Math.round(visualHeight)}px`);
    }
  }

  function setupViewportSizing() {
    syncViewportSizing(true);

    window.addEventListener("resize", () => syncViewportSizing());

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", () => syncViewportSizing());
    }
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

    const menuLabels = MOBILE_MENU_LABELS[getCurrentLang()] || MOBILE_MENU_LABELS.en;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? menuLabels.close : menuLabels.open);
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

    accordionCloseCleanups.get(panel)?.();
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

    let fallbackTimer = 0;
    const cleanup = () => {
      window.clearTimeout(fallbackTimer);
      panel.removeEventListener("transitionend", handleTransitionEnd);
      accordionCloseCleanups.delete(panel);
    };
    const handleTransitionEnd = () => {
      if (button.getAttribute("aria-expanded") === "false") {
        panel.hidden = true;
      }
      cleanup();
    };

    panel.addEventListener("transitionend", handleTransitionEnd);
    fallbackTimer = window.setTimeout(handleTransitionEnd, 400);
    accordionCloseCleanups.set(panel, cleanup);
  }

  function openAccordionButtonElement(button) {
    const panel = getAccordionPanel(button);
    if (!panel) return;

    accordionCloseCleanups.get(panel)?.();
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

  function revealElement(element) {
    element.classList.add("is-visible");
    element.dataset.revealObserved = "true";
  }

  function revealCoffeeCard(card) {
    revealElement(card);
    card.querySelectorAll("[data-reveal]").forEach(revealElement);
  }

  function setupRevealAnimations() {
    const revealElements = [...document.querySelectorAll("[data-reveal]")];
    const editorialSections = [...document.querySelectorAll(".editorial-section")];
    const groupedCoffeeCardChildren = new Set(
      revealElements.filter((element) => element.closest(".product-card") && !element.matches(".product-card"))
    );

    revealElements.forEach((element) => {
      const delay = Number(element.getAttribute("data-reveal-delay") || 0);
      element.style.setProperty("--reveal-delay", `${Math.max(0, delay)}ms`);
    });

    const showImmediately = () => {
      revealElements.forEach(revealElement);
      editorialSections.forEach((section) => section.classList.add("has-revealed"));
    };

    if (productMotionQuery?.matches || typeof IntersectionObserver !== "function") {
      showImmediately();
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target.matches(".product-card")) {
            revealCoffeeCard(entry.target);
          } else {
            revealElement(entry.target);
          }
          observer.unobserve(entry.target);
        });
      }, {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12
      });
    }

    revealElements.forEach((element) => {
      if (groupedCoffeeCardChildren.has(element)) return;
      if (element.classList.contains("is-visible") || element.dataset.revealObserved === "true") return;
      element.dataset.revealObserved = "true";
      revealObserver.observe(element);
    });

    if (editorialSections.length) {
      if (!sectionObserver) {
        sectionObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("has-revealed");
            entry.target.dataset.sectionObserved = "true";
            observer.unobserve(entry.target);
          });
        }, {
          rootMargin: "0px 0px -18% 0px",
          threshold: 0.08
        });
      }

      editorialSections.forEach((section) => {
        if (section.classList.contains("has-revealed") || section.dataset.sectionObserved === "true") return;
        section.dataset.sectionObserved = "true";
        sectionObserver.observe(section);
      });
    }

    if (!revealMotionListenerBound) {
      productMotionQuery?.addEventListener?.("change", () => {
        if (productMotionQuery.matches) showImmediately();
      });
      revealMotionListenerBound = true;
    }
  }

  function setupActiveNavHighlighting() {
    const trackedIds = ["current-roast", "find-us", "faq"];
    const sections = trackedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const desktopLinks = new Map(
      trackedIds.map((id) => [
        id,
        document.querySelector(`.nav .nav-link[href="#${id}"]`)
      ]).filter(([, link]) => Boolean(link))
    );

    if (!sections.length || !desktopLinks.size) return;

    const clearActive = () => {
      desktopLinks.forEach((link) => link.classList.remove("is-active"));
    };

    const setActive = (id) => {
      desktopLinks.forEach((link, linkId) => {
        link.classList.toggle("is-active", linkId === id);
      });
    };

    const chooseActiveSection = () => {
      const hero = document.getElementById("hero");
      const headerOffset = header ? header.offsetHeight : 0;
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;

      if (heroBottom > headerOffset + 120) {
        clearActive();
        return;
      }

      let bestId = "";
      let bestDistance = Number.POSITIVE_INFINITY;
      const targetLine = headerOffset + window.innerHeight * 0.24;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isReadable = rect.bottom > headerOffset + 40 && rect.top < window.innerHeight * 0.78;
        if (!isReadable) return;

        const distance = Math.abs(rect.top - targetLine);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestId = section.id;
        }
      });

      if (bestId) setActive(bestId);
      else clearActive();
    };

    if (typeof IntersectionObserver === "function") {
      const navObserver = new IntersectionObserver(() => chooseActiveSection(), {
        rootMargin: "-24% 0px -54% 0px",
        threshold: [0, 0.08, 0.24, 0.5]
      });
      sections.forEach((section) => navObserver.observe(section));
    }

    window.addEventListener("scroll", chooseActiveSection, { passive: true });
    window.addEventListener("resize", chooseActiveSection);
    chooseActiveSection();
  }

  function setupCursorCardGlow() {
    if (!finePointerQuery?.matches || productMotionQuery?.matches) return;

    const glowCards = [...document.querySelectorAll(
      ".hero-product-placeholder.card-interactive, .product-card.card-interactive, .feature-panel.card-interactive, .market-event-card.card-interactive, .contact-grid .card-action.card-interactive"
    )];

    if (!glowCards.length) return;

    glowCards.forEach((card) => {
      if (card.dataset.cursorGlowBound === "true") return;
      card.dataset.cursorGlowBound = "true";

      card.addEventListener("pointermove", (event) => {
        if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") return;

        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x.toFixed(2)}%`);
        card.style.setProperty("--my", `${y.toFixed(2)}%`);
        card.classList.add("is-glowing");
      });

      card.addEventListener("pointerleave", () => {
        card.classList.remove("is-glowing");
      });
    });
  }

  function applyMobileMarketTabState(tabList, activeKey) {
    const tabs = [...tabList.querySelectorAll("[data-market-tab]")];
    const wrapper = tabList.closest("[data-mobile-market-tabs]");
    const panels = wrapper ? [...wrapper.querySelectorAll("[data-market-panel]")] : [];

    tabs.forEach((tab) => {
      const isActive = tab.getAttribute("data-market-tab") === activeKey;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", isActive ? "0" : "-1");
    });

    panels.forEach((panel) => {
      panel.hidden = panel.getAttribute("data-market-panel") !== activeKey;
    });
  }

  function setActiveMobileMarketTab(tabList, targetTab, animate = false) {
    const tabs = [...tabList.querySelectorAll("[data-market-tab]")];
    const wrapper = tabList.closest("[data-mobile-market-tabs]");
    const panels = wrapper ? [...wrapper.querySelectorAll("[data-market-panel]")] : [];
    const activeKey = targetTab?.getAttribute("data-market-tab") || tabs[0]?.getAttribute("data-market-tab") || "";
    const currentKey = tabs.find((tab) => tab.getAttribute("aria-selected") === "true")?.getAttribute("data-market-tab") || "";
    const shouldAnimate = animate
      && wrapper
      && panels.length
      && activeKey
      && activeKey !== currentKey
      && !productMotionQuery?.matches;

    window.clearTimeout(mobileMarketSwitchTimer);

    if (!shouldAnimate) {
      wrapper?.classList.remove("is-switching");
      applyMobileMarketTabState(tabList, activeKey);
      return;
    }

    wrapper.classList.add("is-switching");
    mobileMarketSwitchTimer = window.setTimeout(() => {
      applyMobileMarketTabState(tabList, activeKey);
      requestAnimationFrame(() => {
        wrapper.classList.remove("is-switching");
      });
    }, 150);
  }

  function setupMobileMarketTabs() {
    const wrapper = document.querySelector("[data-mobile-market-tabs]");
    const tabList = wrapper?.querySelector("[role='tablist']");
    const tabs = tabList ? [...tabList.querySelectorAll("[data-market-tab]")] : [];
    const panels = wrapper ? [...wrapper.querySelectorAll("[data-market-panel]")] : [];
    if (!wrapper || !tabList || !tabs.length || !panels.length) return;

    if (!mobileMarketTabsListenerBound) {
      tabList.addEventListener("click", (event) => {
        const tab = event.target.closest("[data-market-tab]");
        if (!tab || !tabList.contains(tab)) return;

        setActiveMobileMarketTab(tabList, tab, true);
      });

      tabList.addEventListener("keydown", (event) => {
        const tab = event.target.closest("[data-market-tab]");
        if (!tab || !tabList.contains(tab)) return;
        if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;

        const currentTabs = [...tabList.querySelectorAll("[data-market-tab]")];
        if (!currentTabs.length) return;

        event.preventDefault();
        const currentIndex = currentTabs.indexOf(tab);
        const direction = event.key === "ArrowRight" ? 1 : -1;
        let nextIndex = event.key === "Home" ? 0 : currentTabs.length - 1;

        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          nextIndex = (currentIndex + direction + currentTabs.length) % currentTabs.length;
        }

        setActiveMobileMarketTab(tabList, currentTabs[nextIndex], true);
        currentTabs[nextIndex]?.focus();
      });

      mobileMarketTabsListenerBound = true;
    }

    const selectedTab = tabs.find((tab) => tab.getAttribute("aria-selected") === "true") || tabs[0];
    setActiveMobileMarketTab(tabList, selectedTab);
  }

  function setupCarousel() {
    if (!carousel) return;

    const viewport = carousel.querySelector(".carousel-viewport");
    const track = carousel.querySelector(".carousel-track");
    const slides = track ? [...track.querySelectorAll(".carousel-slide")] : [];
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");
    const dots = [...carousel.querySelectorAll("[data-carousel-dot]")];
    const count = carousel.querySelector("[data-carousel-count]");
    const reducedMotionQuery = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

    if (!viewport || !track || !slides.length) return;

    const slideCount = slides.length;
    let activeIndex = 0;
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

    const updateCarouselUi = () => {
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-selected", String(isActive));
      });
      if (count) count.textContent = `${activeIndex + 1} / ${slideCount}`;
    };

    const goTo = (nextIndex) => {
      activeIndex = (nextIndex + slideCount) % slideCount;
      updateCarouselUi();
    };

    const startAutoplay = () => {
      stopAutoplay();
      if (reducedMotionQuery?.matches) return;
      autoplayId = window.setInterval(() => goTo(activeIndex + 1), 5000);
    };

    prevButton?.addEventListener("click", () => goTo(activeIndex - 1));
    nextButton?.addEventListener("click", () => goTo(activeIndex + 1));
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const nextIndex = Number(dot.getAttribute("data-carousel-dot"));
        if (!Number.isNaN(nextIndex)) {
          goTo(nextIndex);
        }
      });
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
          goTo(deltaX < 0 ? activeIndex + 1 : activeIndex - 1);
        }
      }
      startAutoplay();
    }, { passive: true });

    viewport.addEventListener("touchcancel", () => {
      touchActive = false;
      startAutoplay();
    }, { passive: true });

    reducedMotionQuery?.addEventListener?.("change", () => {
      if (reducedMotionQuery.matches) stopAutoplay();
      else startAutoplay();
    });

    updateCarouselUi();
    startAutoplay();
  }

  function updateDerivedContent(lang) {
    updateFaqSchema(lang);
  }

  function applyTranslations(lang) {
    root.setAttribute("lang", lang === "es" ? "es" : "en");
    root.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key) element.textContent = getCopy(lang, key);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.getAttribute("data-i18n-aria-label");
      if (key) element.setAttribute("aria-label", getCopy(lang, key));
    });

    updateDerivedContent(lang);
    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-btn") === lang));
    });
    setSmsLinks(lang);
    if (toggle) {
      const menuLabels = MOBILE_MENU_LABELS[lang] || MOBILE_MENU_LABELS.en;
      toggle.setAttribute(
        "aria-label",
        toggle.getAttribute("aria-expanded") === "true" ? menuLabels.close : menuLabels.open
      );
    }

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
    }, 260);
  }

  function setupLanguageToggle() {
    langSwitches.forEach((langSwitch) => {
      langSwitch.addEventListener("click", (event) => {
        const button = event.target.closest("[data-lang-btn]");
        if (button) fadeToLanguage(button.getAttribute("data-lang-btn"));
      });
    });

    let initialLang = root.dataset.lang || "en";
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === "en" || savedLang === "es") initialLang = savedLang;
    } catch {}

    applyTranslations(initialLang);
  }

  function setupSmoothAnchorScrolling() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: productMotionQuery?.matches ? "auto" : "smooth",
        block: "start"
      });

      history.pushState(null, "", href);
    });
  }

  applyBrandFallback();
  setupViewportSizing();
  setupMobileNav();
  setupAccordion();
  setupRevealAnimations();
  setupMobileMarketTabs();
  setupCarousel();
  setupLanguageToggle();
  setupSmoothAnchorScrolling();
  setupActiveNavHighlighting();
  setupCursorCardGlow();
  setupAnalytics();
})();
