(() => {
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";
  const DEFAULT_SHOP_URL = "https://millionaires-roast.square.site/";
  const COFFEE_DATA_URL = "data/coffees.json?v=59";
  const TRANSPARENT_PIXEL = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
  const SMS_BODY = {
    en: "Hi! I'd like to order coffee from Millionaire's Roast. What do you have available?",
    es: "\u00a1Hola! Me gustar\u00eda ordenar caf\u00e9 de Millionaire's Roast. \u00bfQu\u00e9 tienen disponible?"
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
    "hero.sub": "Caf\u00e9 fresco de origen \u00fanico de lotes de especialidad documentados 80+, tostado en lotes peque\u00f1os desde Springfield para Springfield, Beardstown y el centro de Illinois.",
    "hero.price.coldbrew": "Cold brew de 16 oz: $5",
    "hero.price.bags": "Bolsas de 12 oz: $16",
    "hero.price.kcups": "K-Cups de 8 unidades: 1 por $10 \u2022 2 por $19 \u2022 3 por $27",
    "hero.helper": "Ordena en l\u00ednea para env\u00edos en Illinois, o encuentra disponibilidad local en mercados de Springfield y en The Cottage en Beardstown.",
    "hero.cta.primary": "Comprar ahora",
    "hero.cta.secondary": "Caf\u00e9s actuales",
    "hero.badge.kicker": "Nueva oferta de mercado",
    "hero.badge.title": "Cold Brew embotellado",
    "hero.badge.meta": "16 oz \u2022 Guatemalan La Morena \u2022 $5",
    "ghost.flagship": "INSIGNIA",
    "ghost.origin": "ORIGEN",
    "ghost.local": "LOCAL",
    "ghost.markets": "MERCADOS",

    "featured.eyebrow": "Oferta destacada",
    "featured.title": "Costa Rican Jaguar Honey",
    "featured.taste": "Chocolate con leche \u2022 Miel \u2022 Frambuesa",
    "featured.body": "Nuestro tueste medio insignia 2026 es un lote honey del beneficio San Diego en Tarraz\u00fa, con puntaje de taza 85.25 y notas de chocolate con leche, miel y frambuesa en una taza brillante y limpia.",
    "featured.spec.origin": "Origen: Tarraz\u00fa, Costa Rica",
    "featured.spec.roast": "Tueste: Medio",
    "featured.spec.body": "Cuerpo: Ligero",
    "featured.spec.cupScore": "Puntaje de taza: 85.25",
    "featured.cta": "Comprar el insignia",

    "coffees.eyebrow": "Caf\u00e9s actuales",
    "coffees.title": "Una l\u00ednea clara, reci\u00e9n tostada.",
    "coffees.subtitle": "Cuatro caf\u00e9s de origen \u00fanico, perfiles claros y precios simples. Compara la taza que quieres y ordena de la lista actual.",
    "coffee.spec.origin": "Origen",
    "coffee.spec.body": "Cuerpo",
    "coffee.spec.acidity": "Acidez",
    "coffee.spec.cupScore": "Puntaje de taza",
    "coffee.notes.label": "Notas",
    "coffee.spec.origin.explain": "De d\u00f3nde viene el caf\u00e9. El origen afecta el clima, el suelo, la variedad y el car\u00e1cter general de la taza.",
    "coffee.spec.body.explain": "El peso o la textura del caf\u00e9 en la boca. Un cuerpo m\u00e1s pesado se siente m\u00e1s lleno y rico.",
    "coffee.spec.acidity.explain": "El brillo o la vivacidad en la taza. Una acidez media puede hacer que el caf\u00e9 sepa m\u00e1s limpio, frutal o vivo.",
    "coffee.spec.cupScore.explain": "El puntaje de cata resume la calidad de la taza. Un puntaje de 80 o m\u00e1s se considera caf\u00e9 de especialidad.",
    "coffee.price.title": "Precio simple en toda la l\u00ednea",
    "coffee.price.bag": "Bolsa de 12 oz: $16",
    "coffee.price.kcups": "K-Cups de 8 unidades: 1 por $10 \u2022 2 por $19 \u2022 3 por $27",
    "coffee.price.coldbrew": "Cold brew de 16 oz: $5",
    "coffee.cr.badge": "Tueste medio",
    "coffee.cr.title": "Costa Rican Jaguar Honey",
    "coffee.cr.process": "Proceso Honey",
    "coffee.cr.body": "Lote honey 2026 del beneficio San Diego, puntaje 85.25, con chocolate con leche, miel y frambuesa sobre un perfil limpio de tueste medio.",
    "coffee.cr.notes": "Chocolate con leche, miel, frambuesa",
    "coffee.cr.origin": "Tarraz\u00fa, Costa Rica",
    "coffee.cr.bodyValue": "Ligero",
    "coffee.cr.acidity": "Brillante",
    "coffee.cr.cupScore": "85.25",
    "coffee.pe.badge": "Tueste med-oscuro",
    "coffee.pe.title": "Peruvian Chonta G1 Washed",
    "coffee.pe.process": "Proceso lavado",
    "coffee.pe.body": "Caf\u00e9 lavado 2026 de Chonta, Cajamarca, puntaje 85.5, con chocolate, manzana verde, ciruela, almendra tostada y c\u00edtricos.",
    "coffee.pe.notes": "Chocolate, manzana verde, ciruela, almendra tostada, c\u00edtricos",
    "coffee.pe.origin": "Chonta, Cajamarca, Per\u00fa",
    "coffee.pe.bodyValue": "Medio",
    "coffee.pe.acidity": "Media",
    "coffee.pe.cupScore": "85.5",
    "coffee.gt.badge": "Tueste oscuro",
    "coffee.gt.title": "Guatemalan \"La Morena\"",
    "coffee.gt.process": "Proceso lavado",
    "coffee.gt.body": "Lote rico 2026 de Huehuetenango, de mujeres productoras del programa La Morena, puntaje 85.5, con chocolate oscuro, caramelo, mora y vainilla.",
    "coffee.gt.notes": "Chocolate oscuro, caramelo, mora, vainilla",
    "coffee.gt.origin": "Huehuetenango, Guatemala",
    "coffee.gt.bodyValue": "Medio",
    "coffee.gt.acidity": "Media",
    "coffee.gt.cupScore": "85.5",
    "coffee.co.badge": "Decaf",
    "coffee.co.title": "Colombian Sugarcane Decaf",
    "coffee.co.process": "Descafeinado Sugarcane EA",
    "coffee.co.body": "Descafeinado sugarcane EA de Valle del Cauca, puntaje 84.5, con chocolate con leche, almendra, fresa, vainilla y c\u00edtricos.",
    "coffee.co.notes": "Chocolate con leche, almendra, fresa, vainilla, c\u00edtricos",
    "coffee.co.origin": "Valle del Cauca, Colombia",
    "coffee.co.bodyValue": "Medio",
    "coffee.co.acidity": "Brillante",
    "coffee.co.cupScore": "84.5",
    "coffee.cta.medium": "Ordenar tueste medio",
    "coffee.cta.mediumDark": "Ordenar tueste medio oscuro",
    "coffee.cta.dark": "Ordenar tueste oscuro",
    "coffee.cta.decaf": "Ordenar decaf",

    "choose.card1.title": "Quiero una taza brillante y dulce a miel, con chocolate suave y frambuesa.",
    "choose.card2.title": "Quiero una taza balanceada con chocolate, fruta de huerto y almendra tostada.",
    "choose.card3.title": "Quiero una taza m\u00e1s profunda con chocolate oscuro, caramelo y mora.",
    "choose.card4.title": "Quiero sabor de caf\u00e9 real sin cafe\u00edna: chocolate, almendra y fruta brillante.",

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
    "about.story.p2": "Cada lote comienza con caf\u00e9 verde cuidadosamente seleccionado de lotes documentados de origen \u00fanico y grado de especialidad con puntajes de 80+. La meta no es hacer que el caf\u00e9 se sienta exclusivo. Es ofrecer caf\u00e9 de alta calidad a un precio al que la gente normal pueda volver.",
    "about.story.p3": "Despu\u00e9s de graduarse de la preparatoria, Maximiliano se mud\u00f3 a Springfield para continuar su educaci\u00f3n superior en negocios. Sigue desarrollando Millionaire's Roast como parte pasi\u00f3n, parte hobby y parte peque\u00f1o negocio en crecimiento.",
    "about.story.p4": "Ahora con base y operaciones en Springfield, y todav\u00eda sirviendo a Beardstown y al centro de Illinois, la marca sigue creciendo a trav\u00e9s de ventas directas, mercados en Springfield, pedidos en l\u00ednea y una nueva colaboraci\u00f3n en Beardstown con The Cottage como el hogar local de nuestra l\u00ednea completa all\u00ed.",
    "about.side.title": "Lo que lo distingue",
    "about.side.li1": "Caf\u00e9 fresco de origen \u00fanico",
    "about.side.li2": "Caf\u00e9 de grado de especialidad documentado de lotes 80+",
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
    "faq.a3": "Actualmente ofrecemos cuatro caf\u00e9s frescos de origen \u00fanico: Costa Rican Jaguar Honey como nuestro tueste medio insignia 2026, Peruvian Chonta G1 Washed, Guatemalan \"La Morena\" y Colombian Sugarcane Decaf. Tambi\u00e9n ofrecemos cold brew embotellado de 16 oz por $5, ahora preparado con nuestro tueste oscuro Guatemalan \"La Morena\" para una taza m\u00e1s profunda con chocolate oscuro, caramelo, mora y vainilla. Toda la l\u00ednea es de grado de especialidad, seleccionada de caf\u00e9s que punt\u00faan 80+, y est\u00e1 disponible en grano, molido, K-Cups o cold brew embotellado seg\u00fan el producto.",
    "faq.q4": "\u00bfCu\u00e1nto dura una rotaci\u00f3n actual?",
    "faq.a4": "Compramos caf\u00e9 verde en volumen, pero los tiempos de cosecha cambian seg\u00fan la regi\u00f3n y el ciclo agr\u00edcola. Cuando un caf\u00e9 se acaba, hay una alta probabilidad de que ese lote en espec\u00edfico se haya ido por ahora, no para siempre, y la rotaci\u00f3n sigue cambiando seg\u00fan la demanda y la disponibilidad.",
    "faq.q5": "\u00bfQu\u00e9 hace que este caf\u00e9 sea de especialidad?",
    "faq.a5": "El caf\u00e9 de grado de especialidad empieza con mejor caf\u00e9 verde antes de llegar al tostador. Nuestros caf\u00e9s se seleccionan de lotes documentados con puntajes de 80+, lo que significa que fueron evaluados por la calidad de la taza en lugar de tratarse como caf\u00e9 comercial com\u00fan.\n\nEn la industria del caf\u00e9, los caf\u00e9s se eval\u00faan mediante cata: un proceso estandarizado que considera aroma, sabor, retrogusto, acidez, cuerpo, balance, dulzura, limpieza y defectos. Un puntaje de 80 o m\u00e1s es el umbral tradicional para caf\u00e9 de grado de especialidad.\n\nPara el cliente, el resultado es simple: sabores m\u00e1s limpios, notas m\u00e1s claras y una taza m\u00e1s intencional.",

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
  const productTabsQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(max-width: 760px)")
    : null;
  const heroDesktopQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(min-width: 981px)")
    : null;
  const productMotionQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  const finePointerQuery = typeof window.matchMedia === "function"
    ? window.matchMedia("(hover: hover) and (pointer: fine)")
    : null;
  const faqSchemaScript = document.getElementById("faq-schema");
  const roastFaqAnswer = document.querySelector('[data-i18n="faq.a3"]');
  const BASE = Object.fromEntries(
    [...document.querySelectorAll("[data-i18n]")].map((element) => [
      element.getAttribute("data-i18n"),
      element.textContent
    ]).filter(([key]) => Boolean(key))
  );
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  let activeProductIndex = 0;
  let productSwitchTimer = 0;
  let mobileMarketSwitchTimer = 0;
  let coffeeLineup = null;
  let coffeeLoadWarned = false;
  let productTabsListenerBound = false;
  let productTabsQueryListenerBound = false;
  let mobileMarketTabsListenerBound = false;
  let revealObserver = null;
  let sectionObserver = null;
  let revealMotionListenerBound = false;

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

  function normalizeCoffeeLineup(data) {
    if (!data || typeof data !== "object") {
      throw new Error("Coffee lineup data is not an object.");
    }

    const coffees = Array.isArray(data.coffees)
      ? data.coffees
        .filter((coffee) => coffee && typeof coffee === "object")
        .sort((a, b) => Number(a.order || 0) - Number(b.order || 0))
      : [];

    if (!coffees.length) {
      throw new Error("Coffee lineup data does not include coffees.");
    }

    return {
      ...data,
      defaultShopUrl: data.defaultShopUrl || DEFAULT_SHOP_URL,
      coffees
    };
  }

  async function loadCoffeeLineup() {
    if (typeof fetch !== "function") return false;

    try {
      const response = await fetch(COFFEE_DATA_URL);
      if (!response.ok) {
        throw new Error(`Coffee lineup request failed with ${response.status}.`);
      }

      coffeeLineup = normalizeCoffeeLineup(await response.json());
      return true;
    } catch (error) {
      coffeeLineup = null;
      if (!coffeeLoadWarned) {
        console.warn("Millionaire's Roast coffee lineup could not be loaded; using static fallback.", error);
        coffeeLoadWarned = true;
      }
      return false;
    }
  }

  function getActiveCoffees() {
    return (coffeeLineup?.coffees || []).filter((coffee) => coffee.active !== false);
  }

  function getFeaturedCoffee() {
    const activeCoffees = getActiveCoffees();
    return activeCoffees.find((coffee) => coffee.featured) || activeCoffees[0] || null;
  }

  function getFeaturedOffering() {
    if (isProductTabsMode() && coffeeLineup?.heroOffering) {
      return coffeeLineup.heroOffering;
    }

    return getFeaturedCoffee();
  }

  function getHeroOffering() {
    return coffeeLineup?.heroOffering || getFeaturedCoffee();
  }

  function getCoffeeCopy(coffee, lang) {
    return coffee?.[lang] || coffee?.en || {};
  }

  function getCoffeeLineupCopy(lang, key) {
    return coffeeLineup?.copy?.[lang]?.[key] || coffeeLineup?.copy?.en?.[key] || "";
  }

  function getCoffeeShopUrl(coffee) {
    return coffee?.squareUrl || coffeeLineup?.defaultShopUrl || DEFAULT_SHOP_URL;
  }

  function getCoffeeImage(coffee, imageKey) {
    const image = coffee?.images?.[imageKey];
    return typeof image === "string" && image.trim() ? image : "";
  }

  function makeCoffeeDomId(prefix, coffee, index) {
    const base = String(coffee?.slot || coffee?.id || `coffee-${index + 1}`)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    return `${prefix}-${base || index + 1}`;
  }

  function makeCoffeeCtaLocation(coffee) {
    return `coffee_${String(coffee?.slot || coffee?.id || "current").replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "").toLowerCase()}`;
  }

  function setText(element, text) {
    if (element && text !== undefined && text !== null) {
      element.textContent = text;
    }
  }

  function setImage(image, src, alt) {
    if (!image) return;
    if (src) image.src = src;
    if (typeof alt === "string") image.alt = alt;
  }

  function isHeroDesktopImageAllowed() {
    return heroDesktopQuery ? heroDesktopQuery.matches : true;
  }

  function syncHeroProductImageLoading() {
    const image = document.querySelector(".hero-product-image");
    const source = document.querySelector(".hero-product-source");
    if (!image) return;

    const desktopSrc = image.dataset.desktopSrc || source?.dataset.desktopSrc || "";

    if (source) {
      if (desktopSrc) {
        source.dataset.desktopSrc = desktopSrc;
        source.srcset = desktopSrc;
      } else {
        source.removeAttribute("srcset");
      }
    }

    if (isHeroDesktopImageAllowed() && desktopSrc) {
      image.src = desktopSrc;
      image.loading = "eager";
      image.setAttribute("fetchpriority", "high");
    } else {
      image.src = TRANSPARENT_PIXEL;
      image.loading = "lazy";
      image.setAttribute("fetchpriority", "low");
    }
  }

  function setHeroProductImage(src, alt) {
    const image = document.querySelector(".hero-product-image");
    const source = document.querySelector(".hero-product-source");
    if (!image) return;

    const desktopSrc = typeof src === "string" ? src.trim() : "";

    image.dataset.desktopSrc = desktopSrc;
    if (source) {
      source.dataset.desktopSrc = desktopSrc;
    }

    if (typeof alt === "string") {
      image.alt = alt;
    }

    syncHeroProductImageLoading();
  }

  function formatCoffeeMeta(copy) {
    return [copy.process, copy.roast || copy.badge].filter(Boolean).join(" \u2022 ");
  }

  function formatNotes(notes) {
    return Array.isArray(notes) ? notes.filter(Boolean).join(" \u2022 ") : "";
  }

  function getCupScoreLabel(lang, score) {
    if (!score) return "";
    return `${lang === "es" ? "Puntaje" : "Cup Score"} ${score}`;
  }

  function getNotesLabel(lang) {
    return lang === "es" ? "Notas" : "Tasting Notes";
  }

  function renderCoffeeHero(lang) {
    const offering = getHeroOffering();
    if (!offering) return;

    const copy = getCoffeeCopy(offering, lang);
    const heroBadge = document.querySelector(".hero-floating-badge");
    const badgeSpans = heroBadge ? heroBadge.querySelectorAll("span") : [];
    const heroCta = document.getElementById("heroOrderBtn");

    setHeroProductImage(
      getCoffeeImage(offering, "hero"),
      copy.heroAlt || `Millionaire's Roast ${copy.title || "coffee"}`
    );
    setText(badgeSpans[0], copy.heroKicker || getCopy(lang, "hero.badge.kicker"));
    setText(heroBadge?.querySelector("strong"), copy.title);
    setText(badgeSpans[1], copy.heroMeta || formatCoffeeMeta(copy));

    if (heroCta) {
      heroCta.href = getCoffeeShopUrl(offering);
    }
  }

  function renderFeaturedCoffee(lang) {
    const coffee = getFeaturedOffering();
    if (!coffee) return;

    const copy = getCoffeeCopy(coffee, lang);
    const isMobileColdBrewFeature = Boolean(coffeeLineup?.heroOffering && coffee === coffeeLineup.heroOffering && isProductTabsMode());
    const featuredPanel = document.querySelector("#featured-offering .feature-panel");
    const featuredImage = document.querySelector(".feature-product-image");
    const featuredCta = document.querySelector("#featured-offering [data-shop-cta]");
    const specs = [
      { label: getCopy(lang, "coffee.spec.cupScore") || (lang === "es" ? "Puntaje de taza" : "Cup Score"), value: copy.cupScore },
      { label: getCopy(lang, "coffee.spec.origin") || (lang === "es" ? "Origen" : "Origin"), value: copy.origin },
      { label: lang === "es" ? "Tueste" : "Roast", value: copy.roast || copy.badge },
      { label: getCopy(lang, "coffee.spec.body") || (lang === "es" ? "Cuerpo" : "Body"), value: copy.body }
    ].filter((spec) => spec.label && spec.value);

    featuredPanel?.classList.toggle("is-mobile-cold-brew", isMobileColdBrewFeature);
    setImage(
      featuredImage,
      getCoffeeImage(coffee, "featured"),
      copy.featuredAlt || `Millionaire's Roast ${copy.title || "coffee"} coffee bag`
    );
    setText(document.getElementById("featured-offering-title"), copy.title);
    setText(document.querySelector("#featured-offering .taste-line"), formatNotes(copy.notes));
    setText(document.querySelector("#featured-offering .section-subtitle"), copy.featuredDescription || copy.description);

    const specGrid = document.querySelector("#featured-offering .feature-specs");
    if (specGrid && specs.length) {
      specGrid.innerHTML = specs
        .map((spec) => `<div class="feature-spec"><span>${escapeHtml(spec.label)}: ${escapeHtml(spec.value)}</span></div>`)
        .join("");
    }

    if (featuredCta) {
      featuredCta.href = getCoffeeShopUrl(coffee);
      featuredCta.textContent = copy.featuredCta || copy.cta || getCopy(lang, "featured.cta");
      featuredCta.dataset.ctaLocation = isMobileColdBrewFeature ? "featured_cold_brew_mobile" : "featured_flagship";
    }
  }

  function renderCoffeeTabs(lang) {
    const tabList = document.querySelector("[data-product-tabs]");
    const activeCoffees = getActiveCoffees();
    if (!tabList || !activeCoffees.length) return;

    activeProductIndex = Math.min(activeProductIndex, activeCoffees.length - 1);
    tabList.innerHTML = activeCoffees.map((coffee, index) => {
      const copy = getCoffeeCopy(coffee, lang);
      const tabId = makeCoffeeDomId("coffee-tab", coffee, index);
      const panelId = makeCoffeeDomId("coffee-card", coffee, index);
      const isActive = index === activeProductIndex;

      return `
        <button id="${escapeHtml(tabId)}" class="roast-pill${isActive ? " is-active" : ""}" type="button" role="tab" aria-selected="${isActive}" aria-controls="${escapeHtml(panelId)}" data-product-tab="${index}">
          ${escapeHtml(copy.badge || copy.roast || copy.title)}
        </button>
      `;
    }).join("");
  }

  function renderCoffeeSpecButton(spec, coffee, index, specIndex) {
    const controlId = `${makeCoffeeDomId("spec", coffee, index)}-${spec.key}-copy`;
    return `
      <div class="spec-card spec-card-tooltip" tabindex="0" aria-describedby="${escapeHtml(controlId)}" data-reveal="up" data-reveal-delay="${specIndex * 45}">
        <span class="spec-label">${escapeHtml(spec.label)}</span>
        <span class="spec-value">${escapeHtml(spec.value)}</span>
        <span class="spec-explain" id="${escapeHtml(controlId)}">${escapeHtml(spec.explain)}</span>
      </div>
    `;
  }

  function renderCoffeeCard(coffee, index, lang) {
    const copy = getCoffeeCopy(coffee, lang);
    const tabId = makeCoffeeDomId("coffee-tab", coffee, index);
    const panelId = makeCoffeeDomId("coffee-card", coffee, index);
    const isActive = index === activeProductIndex;
    const revealBase = index * 90;
    const specs = [
      {
        key: "cup-score",
        label: getCopy(lang, "coffee.spec.cupScore"),
        value: copy.cupScore,
        explain: getCopy(lang, "coffee.spec.cupScore.explain")
      },
      {
        key: "origin",
        label: getCopy(lang, "coffee.spec.origin"),
        value: copy.origin,
        explain: getCopy(lang, "coffee.spec.origin.explain")
      },
      {
        key: "body",
        label: getCopy(lang, "coffee.spec.body"),
        value: copy.body,
        explain: getCopy(lang, "coffee.spec.body.explain")
      },
      {
        key: "acidity",
        label: getCopy(lang, "coffee.spec.acidity"),
        value: copy.acidity,
        explain: getCopy(lang, "coffee.spec.acidity.explain")
      }
    ].filter((spec) => spec.label && spec.value);
    const notesLine = formatNotes(copy.notes);

    return `
      <article class="card card-plate product-card${coffee.featured ? " product-card-featured" : ""} card-interactive${isActive ? " is-active" : ""}" id="${escapeHtml(panelId)}" data-product-panel aria-labelledby="${escapeHtml(tabId)}" data-reveal="up" data-reveal-delay="${revealBase}"${isProductTabsMode() && !isActive ? " hidden" : ""}>
        <div class="product-card-head" data-reveal="fade" data-reveal-delay="${80 + revealBase}">
          <span class="origin-badge">${escapeHtml(copy.badge || copy.roast || "")}</span>
          <span class="product-process">${escapeHtml(copy.process || "")}</span>
        </div>
        <h3 class="origin-title" data-reveal="fade" data-reveal-delay="${120 + revealBase}">${escapeHtml(copy.title || "")}</h3>
        <p class="card-text" data-reveal="fade" data-reveal-delay="${160 + revealBase}">${escapeHtml(copy.description || "")}</p>
        ${notesLine ? `<p class="product-notes-line" data-reveal="fade" data-reveal-delay="${210 + revealBase}"><strong>${escapeHtml(getNotesLabel(lang))}</strong><span>${escapeHtml(notesLine)}</span></p>` : ""}
        <div class="product-choice" data-reveal="fade" data-reveal-delay="${250 + revealBase}">
          <span>${escapeHtml(copy.choice || "")}</span>
        </div>
        <div class="product-spec-grid">
          ${specs.map((spec, specIndex) => renderCoffeeSpecButton(spec, coffee, index, specIndex)).join("")}
        </div>
        <a class="btn btn-gold coffee-order-btn" data-shop-cta data-cta-location="${escapeHtml(makeCoffeeCtaLocation(coffee))}" href="${escapeHtml(getCoffeeShopUrl(coffee))}">${escapeHtml(copy.cta || getCopy(lang, "nav.orderCta"))}</a>
      </article>
    `;
  }

  function renderCoffeeCards(lang) {
    const grid = document.querySelector(".coffee-product-grid");
    const activeCoffees = getActiveCoffees();
    if (!grid || !activeCoffees.length) return;

    activeProductIndex = Math.min(activeProductIndex, activeCoffees.length - 1);
    grid.innerHTML = activeCoffees.map((coffee, index) => renderCoffeeCard(coffee, index, lang)).join("");
  }

  function renderCoffeeLineup(lang = getCurrentLang()) {
    if (!coffeeLineup) return;

    renderCoffeeHero(lang);
    renderFeaturedCoffee(lang);
    renderCoffeeTabs(lang);
    renderCoffeeCards(lang);
    setupRevealAnimations();
    setupProductTabs();
    setupCursorCardGlow();
    setupAnalytics();
  }

  function buildCoffeeFaqAnswer(lang) {
    const configuredAnswer = getCoffeeLineupCopy(lang, "faqCurrentAnswer");
    if (configuredAnswer) return configuredAnswer;

    const names = getActiveCoffees()
      .map((coffee) => getCoffeeCopy(coffee, lang).title)
      .filter(Boolean);

    if (!names.length) return "";
    if (names.length === 1) {
      return lang === "es"
        ? `Actualmente ofrecemos ${names[0]}.`
        : `We currently offer ${names[0]}.`;
    }

    const lastName = names[names.length - 1];
    const leadingNames = names.slice(0, -1).join(", ");
    const conjunction = lang === "es" ? " y " : ", and ";
    const coffeeList = `${leadingNames}${conjunction}${lastName}`;

    return lang === "es"
      ? `Actualmente ofrecemos estos caf\u00e9s frescos de origen \u00fanico: ${coffeeList}.`
      : `We currently offer these fresh single-origin coffees: ${coffeeList}.`;
  }

  function buildRoastFaqAnswer(lang) {
    return buildCoffeeFaqAnswer(lang) || getCopy(lang, "faq.a3");
  }

  function updateFaqSchema(lang) {
    if (!faqSchemaScript) return;

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": "https://millionairesroast.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: getCopy(lang, "faq.q1"),
          acceptedAnswer: { "@type": "Answer", text: getCopy(lang, "faq.a1") }
        },
        {
          "@type": "Question",
          name: getCopy(lang, "faq.q2"),
          acceptedAnswer: { "@type": "Answer", text: getCopy(lang, "faq.a2") }
        },
        {
          "@type": "Question",
          name: getCopy(lang, "faq.q3"),
          acceptedAnswer: { "@type": "Answer", text: buildRoastFaqAnswer(lang) }
        },
        {
          "@type": "Question",
          name: getCopy(lang, "faq.q4"),
          acceptedAnswer: { "@type": "Answer", text: getCopy(lang, "faq.a4") }
        },
        {
          "@type": "Question",
          name: getCopy(lang, "faq.q5"),
          acceptedAnswer: { "@type": "Answer", text: getCopy(lang, "faq.a5") }
        }
      ]
    };

    faqSchemaScript.textContent = JSON.stringify(schema, null, 2);
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
  }

  function syncHeaderHeight() {
    const headerHeight = header ? header.offsetHeight : 0;
    const visualViewport = window.visualViewport;
    const visualHeight = visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 0;
    const browserBuffer = Math.max(0, Math.round((window.innerHeight || visualHeight) - visualHeight - (visualViewport?.offsetTop || 0)));

    root.style.setProperty("--header-height", `${headerHeight}px`);
    root.style.setProperty("--mobile-visual-height", `${Math.round(visualHeight)}px`);
    root.style.setProperty("--mobile-browser-buffer", `${browserBuffer}px`);
  }

  function setupViewportSizing() {
    syncHeaderHeight();

    window.addEventListener("resize", syncHeaderHeight);

    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", syncHeaderHeight);
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
      syncHeaderHeight();
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
      ".product-card.card-interactive, .feature-panel.card-interactive, .market-event-card.card-interactive, .contact-grid .card-action.card-interactive"
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

  function isProductTabsMode() {
    return Boolean(productTabsQuery?.matches);
  }

  function getProductTabElements() {
    const tabList = document.querySelector("[data-product-tabs]");
    const grid = document.querySelector(".coffee-product-grid");
    const tabs = tabList ? [...tabList.querySelectorAll("[data-product-tab]")] : [];
    const panels = tabs
      .map((tab) => document.getElementById(tab.getAttribute("aria-controls") || ""))
      .filter(Boolean);

    return { tabList, grid, tabs, panels };
  }

  function revealProductPanelIfReadable(panel) {
    if (!panel || !isProductTabsMode()) return;

    const revealIfReadable = () => {
      const rect = panel.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      revealCoffeeCard(panel);
    };

    requestAnimationFrame(revealIfReadable);
    window.setTimeout(revealIfReadable, 250);
  }

  function renderProductTabs() {
    const { tabs: productTabs, panels: productPanels } = getProductTabElements();
    if (!productTabs.length || !productPanels.length) return;

    activeProductIndex = Math.min(activeProductIndex, productPanels.length - 1);
    const tabsMode = isProductTabsMode();
    productTabs.forEach((tab, index) => {
      const isActive = index === activeProductIndex;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.setAttribute("tabindex", tabsMode && !isActive ? "-1" : "0");
    });

    productPanels.forEach((panel, index) => {
      const isActive = index === activeProductIndex;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = tabsMode && !isActive;
    });

    revealProductPanelIfReadable(productPanels[activeProductIndex]);
  }

  function updateProductTabs(nextIndex = activeProductIndex, animate = false) {
    const { grid: productGrid, tabs: productTabs, panels: productPanels } = getProductTabElements();
    if (!productTabs.length || !productPanels.length) return;

    const boundedIndex = Math.min(Math.max(nextIndex, 0), productPanels.length - 1);
    const shouldAnimate = animate
      && productGrid
      && isProductTabsMode()
      && boundedIndex !== activeProductIndex
      && !productMotionQuery?.matches;

    window.clearTimeout(productSwitchTimer);

    if (!shouldAnimate) {
      productGrid?.classList.remove("is-switching");
      activeProductIndex = boundedIndex;
      renderProductTabs();
      return;
    }

    productGrid.classList.add("is-switching");
    productSwitchTimer = window.setTimeout(() => {
      activeProductIndex = boundedIndex;
      renderProductTabs();
      requestAnimationFrame(() => {
        productGrid.classList.remove("is-switching");
      });
    }, 150);
  }

  function setupProductTabs() {
    const { tabList: productTabList, tabs: productTabs, panels: productPanels } = getProductTabElements();
    if (!productTabList || !productTabs.length || !productPanels.length) return;

    if (!productTabsListenerBound) {
      productTabList.addEventListener("click", (event) => {
        const tab = event.target.closest("[data-product-tab]");
        if (!tab || !productTabList.contains(tab)) return;

        const currentTabs = [...productTabList.querySelectorAll("[data-product-tab]")];
        const index = currentTabs.indexOf(tab);
        if (index < 0) return;
        updateProductTabs(index, true);
      });

      productTabList.addEventListener("keydown", (event) => {
        const tab = event.target.closest("[data-product-tab]");
        if (!tab || !productTabList.contains(tab)) return;
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;

        const currentTabs = [...productTabList.querySelectorAll("[data-product-tab]")];
        if (!currentTabs.length) return;

        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (activeProductIndex + direction + currentTabs.length) % currentTabs.length;
        updateProductTabs(nextIndex, true);
        currentTabs[nextIndex]?.focus();
      });

      productTabsListenerBound = true;
    }

    if (!productTabsQueryListenerBound) {
      productTabsQuery?.addEventListener?.("change", () => {
        updateProductTabs();
        renderFeaturedCoffee(getCurrentLang());
      });
      productTabsQueryListenerBound = true;
    }

    updateProductTabs();
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
      autoplayId = window.setInterval(() => goTo(activeIndex + 1, "next"), 5000);
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
    if (roastFaqAnswer) {
      roastFaqAnswer.textContent = buildRoastFaqAnswer(lang);
    }
    updateFaqSchema(lang);
  }

  function applyTranslations(lang) {
    root.setAttribute("lang", lang === "es" ? "es" : "en");
    root.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      if (key) element.textContent = getCopy(lang, key);
    });

    renderCoffeeLineup(lang);
    updateDerivedContent(lang);
    langButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-btn") === lang));
    });
    setSmsLinks(lang);

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
    const reducedMotionQuery = typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;

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
        behavior: reducedMotionQuery?.matches ? "auto" : "smooth",
        block: "start"
      });

      history.pushState(null, "", href);
    });
  }

  applyBrandFallback();
  setupViewportSizing();
  heroDesktopQuery?.addEventListener?.("change", syncHeroProductImageLoading);
  syncHeroProductImageLoading();
  setupMobileNav();
  setupAccordion();
  setupRevealAnimations();
  setupProductTabs();
  setupMobileMarketTabs();
  setupCarousel();
  setupLanguageToggle();
  setupSmoothAnchorScrolling();
  setupActiveNavHighlighting();
  setupCursorCardGlow();
  setupAnalytics();

  loadCoffeeLineup().then((loaded) => {
    if (!loaded) return;

    const lang = getCurrentLang();
    renderCoffeeLineup(lang);
    updateDerivedContent(lang);
    syncOpenAccordionHeight();
    syncMobileMenuHeight();
  });
})();
