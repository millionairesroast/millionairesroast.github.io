(() => {
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";
  const DEFAULT_SHOP_URL = "https://millionaires-roast.square.site/";
  const COFFEE_DATA_URL = "data/coffees.json?v=76";
  const HERO_SAMPLE_TARGETS = ["#coffee-card-light", "#coffee-card-medium", "#coffee-card-dark"];
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
    "hero.sub": "Caf\u00e9 fresco de origen \u00fanico y grado de especialidad, tostado en lotes peque\u00f1os desde Springfield para Springfield, Beardstown y el centro de Illinois.",
    "hero.price.coldbrew": "Cold brew de 16 oz: $5",
    "hero.price.bags": "Bolsas de 12 oz: $16",
    "hero.price.kcups": "K-Cups de 8 unidades: 1 por $10 \u2022 2 por $19 \u2022 3 por $27",
    "hero.helper": "Ordena en l\u00ednea para env\u00edos en Illinois, o encuentra disponibilidad local en mercados de Springfield y en The Cottage en Beardstown.",
    "hero.cta.primary": "Probar la Discovery Box",
    "hero.cta.mobile": "Comprar en l\u00ednea",
    "hero.cta.secondary": "Caf\u00e9s actuales",
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

    "featured.eyebrow": "Oferta destacada",
    "featured.title": "Cold Brew embotellado",
    "featured.taste": "Cereza \u2022 Caramelo \u2022 Mara\u00f1\u00f3n \u2022 Chocolate de reposter\u00eda",
    "featured.body": "Nuestro cold brew embotellado de 16 oz se prepara con Guatemalan Organic Highlands, un tueste oscuro procedente de cooperativas de peque\u00f1as fincas de Guatemala con certificaci\u00f3n org\u00e1nica. Espera una taza suave y balanceada con cereza, caramelo, mara\u00f1\u00f3n y chocolate de reposter\u00eda.",
    "featured.spec.origin": "Origen: Tierras altas de Guatemala",
    "featured.spec.roast": "Tueste: Oscuro",
    "featured.spec.body": "Cuerpo: Medio",
    "featured.cta": "Ordenar cold brew",

    "coffees.eyebrow": "Caf\u00e9s actuales",
    "coffees.title": "Una l\u00ednea clara, reci\u00e9n tostada.",
    "coffees.subtitle": "Cinco caf\u00e9s de origen \u00fanico, perfiles claros y precios simples. Compara la taza que quieres y ordena de la lista actual.",
    "coffee.spec.origin": "Origen",
    "coffee.spec.process": "Proceso",
    "coffee.spec.body": "Cuerpo",
    "coffee.spec.acidity": "Acidez",
    "coffee.notes.label": "Notas",
    "coffee.spec.origin.explain": "De d\u00f3nde viene el caf\u00e9. El origen afecta el clima, el suelo, la variedad y el car\u00e1cter general de la taza.",
    "coffee.spec.process.explain": "C\u00f3mo se procesa el caf\u00e9 despu\u00e9s de la cosecha. El proceso afecta la dulzura, la textura, la claridad y el sabor frutal.",
    "coffee.spec.body.explain": "El peso o la textura del caf\u00e9 en la boca. Un cuerpo m\u00e1s pesado se siente m\u00e1s lleno y rico.",
    "coffee.spec.acidity.explain": "El brillo o la vivacidad en la taza. Una acidez media puede hacer que el caf\u00e9 sepa m\u00e1s limpio, frutal o vivo.",
    "coffee.price.title": "Precio simple en toda la l\u00ednea",
    "coffee.price.bag": "Bolsa de 12 oz: $16",
    "coffee.price.kcups": "K-Cups de 8 unidades: 1 por $10 \u2022 2 por $19 \u2022 3 por $27",
    "coffee.price.coldbrew": "Cold brew de 16 oz: $5",
    "coffee.price.discovery": "Discovery Box: $18",
    "product.select.label": "Elige una oferta",
    "discovery.card.badge": "Discovery Box",
    "discovery.card.process": "Sampler de tres paquetes \u2022 $18",
    "discovery.card.body": "Tres muestras de caf\u00e9 de 3.5 oz para comparar nuestros tuestes claro, medio y oscuro antes de elegir una bolsa completa. Disponible en grano entero o molido.",
    "discovery.card.contents": "Dentro de la caja",
    "discovery.card.contentsList": "Ugandan Rwenzori Kasese \u2014 Claro \u2022 Costa Rican Jaguar Honey \u2014 Medio \u2022 Guatemalan Organic Highlands \u2014 Oscuro",
    "discovery.card.choice": "Quiero comparar tres caf\u00e9s distintos y encontrar el perfil de tueste ideal para m\u00ed.",
    "discovery.spec.price": "Precio",
    "discovery.spec.format": "Formato",
    "discovery.spec.grind": "Preparaci\u00f3n",
    "discovery.spec.roasts": "Tuestes",
    "discovery.value.grind": "En grano entero o molido",
    "discovery.value.roasts": "Claro \u2022 Medio \u2022 Oscuro",
    "coffee.ug.badge": "Tueste claro",
    "coffee.ug.title": "Ugandan Rwenzori Kasese",
    "coffee.ug.process": "Proceso natural",
    "coffee.ug.body": "Caf\u00e9 natural 2026 frutal de Kasese, de peque\u00f1os productores de Kyagalanyi Coffee listados como 43% mujeres, con frambuesa, ciruela, az\u00facar morena, clementina y t\u00e9 negro.",
    "coffee.ug.notes": "Frambuesa, ciruela, az\u00facar morena, clementina, t\u00e9 negro",
    "coffee.ug.origin": "Kasese, monta\u00f1as Rwenzori, Uganda",
    "coffee.ug.bodyValue": "Medio",
    "coffee.ug.acidity": "Suave",
    "coffee.ug.choice": "Quiero un tueste claro frutal con dulzura de berries, clementina y t\u00e9 negro.",
    "coffee.cr.badge": "Tueste medio",
    "coffee.cr.title": "Costa Rican Jaguar Honey",
    "coffee.cr.process": "Proceso Honey",
    "coffee.cr.body": "Lote honey 2026 del beneficio San Diego, con chocolate con leche, miel y frambuesa sobre un perfil limpio de tueste medio.",
    "coffee.cr.notes": "Chocolate con leche, miel, frambuesa",
    "coffee.cr.origin": "Tarraz\u00fa, Costa Rica",
    "coffee.cr.bodyValue": "Ligero",
    "coffee.cr.acidity": "Brillante",
    "coffee.pe.badge": "Tueste med-oscuro",
    "coffee.pe.title": "Peruvian Chonta G1 Washed",
    "coffee.pe.process": "Proceso lavado",
    "coffee.pe.body": "Caf\u00e9 lavado 2026 de Chonta, Cajamarca, con chocolate, manzana verde, ciruela, almendra tostada y c\u00edtricos.",
    "coffee.pe.notes": "Chocolate, manzana verde, ciruela, almendra tostada, c\u00edtricos",
    "coffee.pe.origin": "Chonta, Cajamarca, Per\u00fa",
    "coffee.pe.bodyValue": "Medio",
    "coffee.pe.acidity": "Media",
    "coffee.gt.badge": "Tueste oscuro",
    "coffee.gt.title": "Guatemalan Organic Highlands",
    "coffee.gt.process": "Lavado y secado al sol",
    "coffee.gt.body": "Caf\u00e9 de las tierras altas de Guatemala procedente de cooperativas de peque\u00f1as fincas con certificaci\u00f3n org\u00e1nica, lavado y secado al sol, con cereza, caramelo, mara\u00f1\u00f3n y chocolate de reposter\u00eda.",
    "coffee.gt.notes": "Cereza, caramelo, mara\u00f1\u00f3n, chocolate de reposter\u00eda",
    "coffee.gt.origin": "Tierras altas de Guatemala",
    "coffee.gt.bodyValue": "Medio",
    "coffee.gt.acidity": "Suave",
    "coffee.co.badge": "Decaf",
    "coffee.co.title": "Colombian Sugarcane Decaf",
    "coffee.co.process": "Descafeinado Sugarcane EA",
    "coffee.co.body": "Descafeinado sugarcane EA de Valle del Cauca con chocolate con leche, almendra, fresa, vainilla y c\u00edtricos.",
    "coffee.co.notes": "Chocolate con leche, almendra, fresa, vainilla, c\u00edtricos",
    "coffee.co.origin": "Valle del Cauca, Colombia",
    "coffee.co.bodyValue": "Medio",
    "coffee.co.acidity": "Brillante",
    "coffee.cta.light": "Ordenar tueste claro",
    "coffee.cta.medium": "Ordenar tueste medio",
    "coffee.cta.mediumDark": "Ordenar tueste medio oscuro",
    "coffee.cta.dark": "Ordenar tueste oscuro",
    "coffee.cta.decaf": "Ordenar decaf",
    "discovery.cta": "Ordenar Discovery Box",

    "choose.card1.title": "Quiero una taza brillante y dulce a miel, con chocolate suave y frambuesa.",
    "choose.card2.title": "Quiero una taza balanceada con chocolate, fruta de huerto y almendra tostada.",
    "choose.card3.title": "Quiero una taza profunda y balanceada con dulzura de cereza, caramelo, mara\u00f1\u00f3n y chocolate de reposter\u00eda.",
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
    "faq.a3": "Actualmente ofrecemos cinco caf\u00e9s frescos de origen \u00fanico: Ugandan Rwenzori Kasese como nuestro tueste claro, Costa Rican Jaguar Honey como nuestro tueste medio insignia 2026, Peruvian Chonta G1 Washed, Guatemalan Organic Highlands y Colombian Sugarcane Decaf. Nuestra Discovery Box de $18 incluye tres muestras de 3.5 oz: tueste claro de Uganda, tueste medio de Costa Rica y tueste oscuro de Guatemala, disponibles en grano entero o molido. Tambi\u00e9n ofrecemos cold brew embotellado de 16 oz por $5, preparado con Guatemalan Organic Highlands. Toda la l\u00ednea es de grado de especialidad.",
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
  const productSelectorQuery = typeof window.matchMedia === "function"
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
  let productSelectorListenerBound = false;
  let productModeListenerBound = false;
  let mobileMarketTabsListenerBound = false;
  let heroSampleLinksBound = false;
  let revealObserver = null;
  let sectionObserver = null;
  let revealMotionListenerBound = false;
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

  function getFallbackCoffee() {
    const activeCoffees = getActiveCoffees();
    return activeCoffees.find((coffee) => coffee.featured) || activeCoffees[0] || null;
  }

  function getFeaturedOffering() {
    return coffeeLineup?.featuredOffering || getFallbackCoffee();
  }

  function getHeroOffering() {
    return coffeeLineup?.heroOffering || getFallbackCoffee();
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

  function setHeroProductPlaceholder(isVisible) {
    const plate = document.querySelector(".hero-image-plate");
    const picture = document.querySelector(".hero-product-picture");
    const placeholder = document.querySelector(".hero-product-placeholder");

    plate?.classList.toggle("is-placeholder", isVisible);
    if (picture) picture.hidden = isVisible;
    if (placeholder) placeholder.hidden = !isVisible;
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
      setHeroProductPlaceholder(true);
      image.onload = () => setHeroProductPlaceholder(false);
      image.onerror = () => setHeroProductPlaceholder(true);
      image.src = desktopSrc;
      image.loading = "eager";
      image.setAttribute("fetchpriority", "high");
      if (image.complete) {
        setHeroProductPlaceholder(!image.naturalWidth);
      }
    } else {
      image.onload = null;
      image.onerror = null;
      image.src = TRANSPARENT_PIXEL;
      image.loading = "lazy";
      image.setAttribute("fetchpriority", "low");
      setHeroProductPlaceholder(!desktopSrc);
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

  function getNotesLabel(lang) {
    return lang === "es" ? "Notas" : "Tasting Notes";
  }

  function renderCoffeeHero(lang) {
    const offering = getHeroOffering();
    if (!offering) return;

    const copy = getCoffeeCopy(offering, lang);
    const usesCompactHero = !isHeroDesktopImageAllowed();
    const heroBadge = document.querySelector(".hero-floating-badge");
    const badgeSpans = heroBadge ? heroBadge.querySelectorAll("span") : [];
    const heroCta = document.getElementById("heroOrderBtn");
    const heroSampleRows = [...document.querySelectorAll("[data-hero-sample]")];

    setHeroProductImage(
      getCoffeeImage(offering, "hero"),
      copy.heroAlt || `Millionaire's Roast ${copy.title || "coffee"}`
    );
    setText(badgeSpans[0], copy.heroKicker || getCopy(lang, "hero.badge.kicker"));
    setText(heroBadge?.querySelector("strong"), copy.title);
    setText(badgeSpans[1], copy.heroMeta || formatCoffeeMeta(copy));
    setText(document.querySelector("[data-hero-placeholder-kicker]"), copy.placeholderKicker || getCopy(lang, "hero.placeholder.kicker"));
    setText(document.querySelector("[data-hero-placeholder-title]"), copy.title || getCopy(lang, "hero.placeholder.title"));
    setText(document.querySelector("[data-hero-placeholder-meta]"), copy.placeholderMeta || getCopy(lang, "hero.placeholder.meta"));
    heroSampleRows.forEach((row, index) => {
      const sample = Array.isArray(copy.heroSamples) ? copy.heroSamples[index] : null;
      setText(row.querySelector("[data-hero-sample-roast]"), sample?.roast);
      setText(row.querySelector("[data-hero-sample-origin]"), sample?.origin);
      if (HERO_SAMPLE_TARGETS[index]) {
        row.setAttribute("href", HERO_SAMPLE_TARGETS[index]);
      }
      const roastLabel = sample?.roast || "";
      const originLabel = String(sample?.origin || "").replace(/\s+/g, " ").trim();
      const ariaLabel = [roastLabel, originLabel].filter(Boolean).join(": ");
      if (ariaLabel) {
        row.setAttribute("aria-label", lang === "es"
          ? `Ver caf\u00e9 ${ariaLabel}`
          : `View ${ariaLabel} coffee`);
      }
    });

    if (heroCta) {
      heroCta.href = usesCompactHero
        ? coffeeLineup?.defaultShopUrl || DEFAULT_SHOP_URL
        : getCoffeeShopUrl(offering);
      heroCta.textContent = usesCompactHero
        ? copy.mobileHeroCta || getCopy(lang, "hero.cta.mobile")
        : copy.heroCta || getCopy(lang, "hero.cta.primary");
      heroCta.dataset.ctaLocation = usesCompactHero
        ? "hero_shop_mobile"
        : offering.id === "discovery-box" ? "hero_discovery_box" : "hero_shop_current";
    }
  }

  function renderFeaturedCoffee(lang) {
    const coffee = getFeaturedOffering();
    if (!coffee) return;

    const copy = getCoffeeCopy(coffee, lang);
    const isColdBrewFeature = coffee.id === "bottled-cold-brew";
    const featuredPanel = document.querySelector("#featured-offering .feature-panel");
    const featuredImage = document.querySelector(".feature-product-image");
    const featuredCta = document.querySelector("#featured-offering [data-shop-cta]");
    const specs = [
      { label: getCopy(lang, "coffee.spec.origin") || (lang === "es" ? "Origen" : "Origin"), value: copy.origin },
      { label: lang === "es" ? "Tueste" : "Roast", value: copy.roast || copy.badge },
      { label: getCopy(lang, "coffee.spec.body") || (lang === "es" ? "Cuerpo" : "Body"), value: copy.body }
    ].filter((spec) => spec.label && spec.value);

    featuredPanel?.classList.toggle("is-cold-brew-feature", isColdBrewFeature);
    setImage(
      featuredImage,
      getCoffeeImage(coffee, "featured"),
      copy.featuredAlt || `Millionaire's Roast ${copy.title || "coffee"} coffee bag`
    );
    setText(document.getElementById("featured-offering-title"), copy.title);
    setText(document.querySelector("#featured-offering .section-eyebrow"), copy.featuredKicker || getCopy(lang, "featured.eyebrow"));
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
      featuredCta.dataset.ctaLocation = isColdBrewFeature ? "featured_cold_brew" : "featured_flagship";
    }
  }

  function renderProductSelector(lang) {
    const selector = document.querySelector("[data-product-select]");
    const discoveryOffering = coffeeLineup?.heroOffering;
    const activeCoffees = getActiveCoffees();
    const offerings = [discoveryOffering, ...activeCoffees].filter(Boolean);
    if (!selector || !offerings.length) return;

    activeProductIndex = Math.min(activeProductIndex, offerings.length - 1);
    selector.innerHTML = offerings.map((offering, index) => {
      const copy = getCoffeeCopy(offering, lang);
      const label = index === 0 ? copy.title : copy.badge || copy.roast || copy.title;
      return `<option value="${index}">${escapeHtml(label || "")}</option>`;
    }).join("");
    selector.value = String(activeProductIndex);
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

  function renderDiscoveryBoxCard(offering, lang) {
    const copy = getCoffeeCopy(offering, lang);
    const panelId = "coffee-card-discovery";
    const titleId = "coffee-title-discovery";
    const isActive = activeProductIndex === 0;
    const contents = Array.isArray(copy.heroSamples)
      ? copy.heroSamples.map((sample) => {
        const origin = String(sample?.origin || "").replace(/\s+/g, " ").trim();
        return [origin, sample?.roast].filter(Boolean).join(" \u2014 ");
      }).filter(Boolean).join(" \u2022 ")
      : "";
    const specs = [
      { label: getCopy(lang, "discovery.spec.price"), value: copy.price },
      { label: getCopy(lang, "discovery.spec.format"), value: copy.format },
      { label: getCopy(lang, "discovery.spec.grind"), value: copy.grind },
      { label: getCopy(lang, "discovery.spec.roasts"), value: copy.roasts }
    ].filter((spec) => spec.label && spec.value);

    return `
      <article class="card card-plate product-card discovery-box-product-card card-interactive${isActive ? " is-active" : ""}" id="${panelId}" data-product-panel aria-labelledby="${titleId}" data-reveal="up" data-reveal-delay="0"${isProductSelectorMode() && !isActive ? " hidden" : ""}>
        <div class="product-card-head" data-reveal="fade" data-reveal-delay="80">
          <span class="origin-badge">${escapeHtml(copy.cardBadge || copy.title || "")}</span>
          <span class="product-process">${escapeHtml(copy.cardProcess || "")}</span>
        </div>
        <h3 class="origin-title" id="${titleId}" data-reveal="fade" data-reveal-delay="120">${escapeHtml(copy.title || "")}</h3>
        <p class="card-text" data-reveal="fade" data-reveal-delay="160">${escapeHtml(copy.cardDescription || "")}</p>
        ${contents ? `<p class="product-notes-line" data-reveal="fade" data-reveal-delay="210"><strong>${escapeHtml(copy.cardContentsLabel || "")}</strong><span>${escapeHtml(contents)}</span></p>` : ""}
        <div class="product-choice" data-reveal="fade" data-reveal-delay="250">
          <span>${escapeHtml(copy.cardChoice || "")}</span>
        </div>
        <div class="product-spec-grid">
          ${specs.map((spec, index) => `
            <div class="spec-card" data-reveal="up" data-reveal-delay="${index * 45}">
              <span class="spec-label">${escapeHtml(spec.label)}</span>
              <span class="spec-value">${escapeHtml(spec.value)}</span>
            </div>
          `).join("")}
        </div>
        <a class="btn btn-gold coffee-order-btn" data-shop-cta data-cta-location="coffee_discovery_box_mobile" href="${escapeHtml(getCoffeeShopUrl(offering))}">${escapeHtml(copy.cardCta || getCopy(lang, "discovery.cta"))}</a>
      </article>
    `;
  }

  function renderCoffeeCard(coffee, index, lang, productIndex) {
    const copy = getCoffeeCopy(coffee, lang);
    const panelId = makeCoffeeDomId("coffee-card", coffee, index);
    const titleId = makeCoffeeDomId("coffee-title", coffee, index);
    const isActive = productIndex === activeProductIndex;
    const revealBase = index * 90;
    const specs = [
      {
        key: "origin",
        label: getCopy(lang, "coffee.spec.origin"),
        value: copy.origin,
        explain: getCopy(lang, "coffee.spec.origin.explain")
      },
      {
        key: "process",
        label: getCopy(lang, "coffee.spec.process"),
        value: copy.process,
        explain: getCopy(lang, "coffee.spec.process.explain")
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
      <article class="card card-plate product-card${coffee.featured ? " product-card-featured" : ""} card-interactive${isActive ? " is-active" : ""}" id="${escapeHtml(panelId)}" data-product-panel aria-labelledby="${escapeHtml(titleId)}" data-reveal="up" data-reveal-delay="${revealBase}"${isProductSelectorMode() && !isActive ? " hidden" : ""}>
        <div class="product-card-head" data-reveal="fade" data-reveal-delay="${80 + revealBase}">
          <span class="origin-badge">${escapeHtml(copy.badge || copy.roast || "")}</span>
        </div>
        <h3 class="origin-title" id="${escapeHtml(titleId)}" data-reveal="fade" data-reveal-delay="${120 + revealBase}">${escapeHtml(copy.title || "")}</h3>
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
    const discoveryOffering = coffeeLineup?.heroOffering;
    const activeCoffees = getActiveCoffees();
    if (!grid || !activeCoffees.length) return;

    const coffeeProductOffset = discoveryOffering ? 1 : 0;

    const productCount = activeCoffees.length + (discoveryOffering ? 1 : 0);
    activeProductIndex = Math.min(activeProductIndex, productCount - 1);
    grid.innerHTML = [
      discoveryOffering ? renderDiscoveryBoxCard(discoveryOffering, lang) : "",
      ...activeCoffees.map((coffee, index) =>
        renderCoffeeCard(coffee, index, lang, index + coffeeProductOffset)
      )
    ].join("");
  }

  function renderCoffeeLineup(lang = getCurrentLang()) {
    if (!coffeeLineup) return;

    renderCoffeeHero(lang);
    renderFeaturedCoffee(lang);
    renderProductSelector(lang);
    renderCoffeeCards(lang);
    setupRevealAnimations();
    setupProductSelector();
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

    document.querySelectorAll("[data-map-link]").forEach((link, index) => {
      registerContactClickTracking(
        link,
        "directions_click",
        link.dataset.contactLocation || `directions_${index + 1}`
      );
    });
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

  function isProductSelectorMode() {
    return Boolean(productSelectorQuery?.matches);
  }

  function getProductSelectorElements() {
    const selector = document.querySelector("[data-product-select]");
    const grid = document.querySelector(".coffee-product-grid");
    const panels = grid ? [...grid.querySelectorAll("[data-product-panel]")] : [];

    return { selector, grid, panels };
  }

  function revealProductPanelIfReadable(panel) {
    if (!panel || !isProductSelectorMode()) return;

    const revealIfReadable = () => {
      const rect = panel.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      revealCoffeeCard(panel);
    };

    requestAnimationFrame(revealIfReadable);
    window.setTimeout(revealIfReadable, 250);
  }

  function renderProductSelection() {
    const { selector, panels: productPanels } = getProductSelectorElements();
    if (!productPanels.length) return;

    activeProductIndex = Math.min(activeProductIndex, productPanels.length - 1);
    const selectorMode = isProductSelectorMode();
    if (selector) selector.value = String(activeProductIndex);

    productPanels.forEach((panel, index) => {
      const isActive = index === activeProductIndex;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = selectorMode && !isActive;
    });

    revealProductPanelIfReadable(productPanels[activeProductIndex]);
  }

  function highlightProductPanel(panel) {
    if (!panel) return;

    document.querySelectorAll(".product-card.is-jump-highlight").forEach((highlightedPanel) => {
      if (highlightedPanel === panel) return;
      window.clearTimeout(Number(highlightedPanel.dataset.highlightTimer || 0));
      highlightedPanel.classList.remove("is-jump-highlight");
      delete highlightedPanel.dataset.highlightTimer;
    });

    window.clearTimeout(Number(panel.dataset.highlightTimer || 0));
    panel.classList.remove("is-jump-highlight");
    requestAnimationFrame(() => {
      panel.classList.add("is-jump-highlight");
      panel.dataset.highlightTimer = String(window.setTimeout(() => {
        panel.classList.remove("is-jump-highlight");
        delete panel.dataset.highlightTimer;
      }, 3200));
    });
  }

  function prepareProductPanelJump(target) {
    if (!target?.matches?.("[data-product-panel]")) return false;

    const { panels } = getProductSelectorElements();
    const targetIndex = panels.indexOf(target);
    if (targetIndex >= 0 && isProductSelectorMode()) {
      updateProductSelection(targetIndex, false);
    }

    revealCoffeeCard(target);
    highlightProductPanel(target);
    return true;
  }

  function scrollToProductPanel(target) {
    const isProductPanelJump = prepareProductPanelJump(target);

    target.scrollIntoView({
      behavior: productMotionQuery?.matches ? "auto" : "smooth",
      block: isProductPanelJump ? "center" : "start"
    });

    return isProductPanelJump;
  }

  function setupHeroSampleLinks() {
    if (heroSampleLinksBound) return;

    document.addEventListener("click", (event) => {
      const link = event.target.closest("[data-hero-sample-link]");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      scrollToProductPanel(target);
      history.pushState(null, "", href);
    });

    heroSampleLinksBound = true;
  }

  function updateProductSelection(nextIndex = activeProductIndex, animate = false) {
    const { grid: productGrid, panels: productPanels } = getProductSelectorElements();
    if (!productPanels.length) return;

    const boundedIndex = Math.min(Math.max(nextIndex, 0), productPanels.length - 1);
    const shouldAnimate = animate
      && productGrid
      && isProductSelectorMode()
      && boundedIndex !== activeProductIndex
      && !productMotionQuery?.matches;

    window.clearTimeout(productSwitchTimer);

    if (!shouldAnimate) {
      productGrid?.classList.remove("is-switching");
      activeProductIndex = boundedIndex;
      renderProductSelection();
      return;
    }

    productGrid.classList.add("is-switching");
    productSwitchTimer = window.setTimeout(() => {
      activeProductIndex = boundedIndex;
      renderProductSelection();
      requestAnimationFrame(() => {
        productGrid.classList.remove("is-switching");
      });
    }, 150);
  }

  function setupProductSelector() {
    const { selector, panels: productPanels } = getProductSelectorElements();
    if (!selector || !productPanels.length) return;

    if (!productSelectorListenerBound) {
      selector.addEventListener("change", () => {
        updateProductSelection(Number(selector.value), true);
      });
      productSelectorListenerBound = true;
    }

    if (!productModeListenerBound) {
      productSelectorQuery?.addEventListener?.("change", () => {
        updateProductSelection();
      });
      productModeListenerBound = true;
    }

    updateProductSelection();
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
      const isProductPanelJump = prepareProductPanelJump(target);

      target.scrollIntoView({
        behavior: productMotionQuery?.matches ? "auto" : "smooth",
        block: isProductPanelJump ? "center" : "start"
      });

      history.pushState(null, "", href);
    });
  }

  applyBrandFallback();
  setupViewportSizing();
  heroDesktopQuery?.addEventListener?.("change", () => {
    syncHeroProductImageLoading();
    renderCoffeeHero(getCurrentLang());
  });
  syncHeroProductImageLoading();
  setupMobileNav();
  setupAccordion();
  setupRevealAnimations();
  setupProductSelector();
  setupMobileMarketTabs();
  setupCarousel();
  setupLanguageToggle();
  setupHeroSampleLinks();
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
