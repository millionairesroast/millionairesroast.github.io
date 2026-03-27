(() => {
  const SQUARE_BUY_LINK = "https://square.link/u/PASTE_YOUR_LINK_HERE";
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";
  const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LANG_FADE_MS = REDUCE_MOTION ? 0 : 160;

  const T = {
    en: {
      skip: "Skip to content",
      tagline: "Luxury in every cup.",
      "meta.title": "Millionaire’s Roast | Small Batch Coffee Roastery in Springfield, IL",
      "meta.description": "Luxury small-batch coffee roastery serving Springfield and Central Illinois. Fresh roasted single-origin coffees with simple ordering by text or email and weekly market updates.",
      "lang.label": "Language",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.order": "ORDER",
      "hero.kicker": "SMALL BATCH ROASTERY",
      "hero.sub": "Luxury small-batch coffee roastery serving Springfield and Central Illinois with rotating single-origin coffees for discerning taste.",
      "hero.note": "Need coffee in Springfield or Central Illinois this week? Text us for the fastest order and pickup details.",
      "cta.buy": "Buy Now",
      "cta.email": "Email to Order",
      "cta.text": "Text to Order",
      "find.label": "Where to find us",
      "find.mini": "Best place for weekly locations and market updates.",
      "find.text": "Catch us at Springfield and Central Illinois farmers markets. Follow us for weekly locations and updates.",
      "featured.kicker": "Current Roast",
      "featured.title": "Costa Rica Tarrazú “San Diego Jaguar”",
      "featured.process": "Honey Process",
      "featured.text": "A rich, dessert-leaning cup with chocolate sweetness and a honeyed finish, layered with nectarine, guava, berry, and a bright citrus lift. Full-bodied with medium acidity, bold and silky hot or iced.",
      "featured.note": "Want it whole bean or ground? Text or email and we’ll get your order ready.",
      "featured.tag1": "Chocolate sweetness",
      "featured.tag2": "Honeyed finish",
      "featured.tag3": "Hot or iced",
      "featured.tag4": "Whole bean or ground",
      "featured.action": "Order this roast",
      "featured.image.alt": "Farm image for the current Costa Rica Tarrazú San Diego Jaguar roast",
      "featured.image.fallback": "Current farm image coming soon.",
      "about.title": "About Millionaire’s Roast",
      "about.subtitle": "I started Millionaire’s Roast through the Cass County CEO program to build something real for my community — quality coffee, roasted with care and meant to stay approachable.",
      "about.photo.alt": "Portrait of Maximiliano Gomez, founder of Millionaire’s Roast",
      "about.story.title": "Meet Maximiliano",
      "about.story.p1": "My name is Maximiliano Gomez, and I started Millionaire’s Roast as part of the Cass County CEO program, where high school seniors build a business idea and bring it to life. What began as a class project quickly became something much bigger to me.",
      "about.story.p2": "Every bag starts with green coffee that I source myself. From there, I roast it, grind it, package it, and prepare it by hand. I care deeply about quality, but I also care about keeping it affordable and accessible for the people around me.",
      "about.story.p3": "The name Millionaire’s Roast is a play on my own name, Maximiliano, and it reflects the kind of experience I want to create: something bold, memorable, and a little elevated. I’m based in Beardstown, Illinois, and I regularly bring Millionaire’s Roast to markets in Springfield and across Central Illinois.",
      "about.story.p4": "This business started through Cass County CEO, but I’m building it to last beyond the program. My long-term goal is to keep growing Millionaire’s Roast and one day open a coffee shop of my own.",
      "about.ceo.line": "Proudly launched through the Cass County CEO program.",
      "about.ceo.link": "Learn more about Cass County CEO",
      "about.values.title": "What I care about",
      "about.values.li1": "Sourcing green coffee and roasting each batch myself",
      "about.values.li2": "Keeping the product high-quality and affordable",
      "about.values.li3": "Serving Beardstown, Springfield, and the wider Central Illinois community",
      "about.values.li4": "Growing the business toward a future coffee shop",
      "about.local.title": "Built locally, supported by family",
      "about.local.text": "I handle the coffee side myself, and I also get real support from my family. My older brother Jesus helps with materials, logistics, and the website so I can keep building the brand the right way.",
      "about.local.emphasis": "Small-batch, community-minded, and built to grow.",
      "faq.title": "Have Questions?",
      "faq.subtitle": "Quick answers. If you don’t see what you need, reach out.",
      "faq.q1": "What beans are available right now?",
      "faq.a1": "This rotation is Costa Rica Tarrazú “San Diego Jaguar” (Honey Process) — a rich, dessert-leaning cup with chocolate sweetness and a honeyed finish, layered with nectarine, guava, berry, and a bright citrus lift. Full-bodied with medium acidity, it’s bold, silky, and ridiculously satisfying hot or iced. Want it whole bean or ground? Text or email and we’ll get your order ready.",
      "faq.q2": "How do I order?",
      "faq.a2": "Order online, or order directly by email or by text. Tell us what you want (whole bean vs. ground), how many bags, and your preferred pickup in Springfield or Central Illinois.",
      "faq.q3": "Do you ship?",
      "faq.a3": "Not reliably yet. For now, the best way to get coffee is to meet us at a market or arrange local pickup in Springfield or Central Illinois. Follow Facebook or Instagram for weekly locations.",
      "faq.q4": "Do you offer K-Cups?",
      "faq.a4": "Yes. We offer K-Cups now. Text or email us to ask what’s currently available.",
      "contact.title": "Contact & Follow Us",
      "contact.subtitle": "Fastest response: text or email. Best for Springfield and Central Illinois pickup updates: socials.",
      "contact.prompt": "Ready to order in Springfield or Central Illinois? Text us first.",
      "footer.service": "Serving Springfield, Illinois and Central Illinois.",
      "contact.email.kicker": "Email Us",
      "contact.text.kicker": "Text Us",
      "contact.text.sub": "Tap to message",
      "contact.follow.kicker": "Follow Us",
      "contact.follow.sub": "Weekly locations & updates",
      "sms.body": "Hi! I'd like to order coffee from Millionaire’s Roast."
    },
    es: {
      skip: "Saltar al contenido",
      tagline: "Lujo en cada taza.",
      "meta.title": "Millionaire’s Roast | Tostaduría de café artesanal en Springfield, Illinois",
      "meta.description": "Tostaduría de café artesanal de lujo para Springfield y el centro de Illinois. Cafés frescos de origen único con pedido sencillo por texto o correo y novedades semanales del mercado.",
      "lang.label": "Idioma",
      "nav.about": "Acerca de",
      "nav.faq": "Preguntas",
      "nav.contact": "Contacto",
      "nav.order": "ORDENAR",
      "hero.kicker": "TOSTADORÍA ARTESANAL",
      "hero.sub": "Tostaduría de café artesanal de lotes pequeños para Springfield y el centro de Illinois, con cafés de origen único y rotativos para paladares exigentes.",
      "hero.note": "¿Quieres café esta semana en Springfield o el centro de Illinois? Envíanos un texto para la forma más rápida de pedir y coordinar tu entrega.",
      "cta.buy": "Comprar ahora",
      "cta.email": "Pedir por correo",
      "cta.text": "Pedir por texto",
      "find.label": "Dónde encontrarnos",
      "find.mini": "El mejor lugar para ver ubicaciones semanales y novedades del mercado.",
      "find.text": "Encuéntranos en mercados de agricultores de Springfield y del centro de Illinois. Síguenos para ubicaciones y novedades semanales.",
      "featured.kicker": "Tostado actual",
      "featured.title": "Costa Rica Tarrazú “San Diego Jaguar”",
      "featured.process": "Proceso Honey",
      "featured.text": "Una taza intensa y sedosa con dulzor de chocolate y un final con miel, con capas de nectarina, guayaba, frutos rojos y un toque cítrico brillante. Cuerpo alto y acidez media, potente y deliciosa tanto caliente como en frío.",
      "featured.note": "¿Lo quieres en grano o molido? Envíanos un texto o correo y preparamos tu pedido.",
      "featured.tag1": "Dulzor de chocolate",
      "featured.tag2": "Final con miel",
      "featured.tag3": "Caliente o frío",
      "featured.tag4": "En grano o molido",
      "featured.action": "Pedir este tostado",
      "featured.image.alt": "Imagen de finca para el tostado actual Costa Rica Tarrazú San Diego Jaguar",
      "featured.image.fallback": "La imagen actual de la finca estará disponible pronto.",
      "about.title": "Sobre Millionaire’s Roast",
      "about.subtitle": "Comencé Millionaire’s Roast a través del programa Cass County CEO para crear algo real para mi comunidad: café de calidad, tostado con cuidado y pensado para seguir siendo accesible.",
      "about.photo.alt": "Retrato de Maximiliano Gomez, fundador de Millionaire’s Roast",
      "about.story.title": "Conoce a Maximiliano",
      "about.story.p1": "Me llamo Maximiliano Gomez y comencé Millionaire’s Roast como parte del programa Cass County CEO, donde estudiantes de último año de preparatoria desarrollan una idea de negocio y la convierten en realidad. Lo que empezó como un proyecto escolar rápidamente se convirtió en algo mucho más grande para mí.",
      "about.story.p2": "Cada bolsa empieza con café verde que yo mismo selecciono y consigo. A partir de ahí, lo tuesto, lo muelo, lo empaco y lo preparo a mano. Me importa profundamente la calidad, pero también me importa que siga siendo accesible y a un precio razonable para la gente que me rodea.",
      "about.story.p3": "El nombre Millionaire’s Roast nace como un juego de palabras con mi propio nombre, Maximiliano, y refleja el tipo de experiencia que quiero crear: algo audaz, memorable y con un toque elevado. Estoy basado en Beardstown, Illinois, y llevo Millionaire’s Roast a mercados en Springfield y en otras partes del centro de Illinois.",
      "about.story.p4": "Este negocio comenzó gracias a Cass County CEO, pero lo estoy construyendo para que siga creciendo más allá del programa. Mi meta a largo plazo es hacer crecer Millionaire’s Roast y algún día abrir mi propia cafetería.",
      "about.ceo.line": "Lanzado con orgullo a través del programa Cass County CEO.",
      "about.ceo.link": "Conoce más sobre Cass County CEO",
      "about.values.title": "Lo que me importa",
      "about.values.li1": "Seleccionar el café verde y tostar cada lote yo mismo",
      "about.values.li2": "Mantener el producto de alta calidad y a un precio accesible",
      "about.values.li3": "Servir a Beardstown, Springfield y a la comunidad del centro de Illinois",
      "about.values.li4": "Hacer crecer el negocio con la meta de abrir una cafetería",
      "about.local.title": "Hecho localmente, con apoyo familiar",
      "about.local.text": "Yo manejo personalmente la parte del café, y también cuento con apoyo real de mi familia. Mi hermano mayor Jesús me ayuda con materiales, logística y el sitio web para que pueda seguir construyendo la marca de la manera correcta.",
      "about.local.emphasis": "Lotes pequeños, enfocado en la comunidad y hecho para crecer.",
      "faq.title": "¿Tienes preguntas?",
      "faq.subtitle": "Respuestas rápidas. Si no ves lo que necesitas, contáctanos.",
      "faq.q1": "¿Qué granos hay disponibles ahora?",
      "faq.a1": "En esta rotación tenemos Costa Rica Tarrazú “San Diego Jaguar” (Proceso Honey) — una taza intensa y sedosa con dulzor de chocolate y un final con miel, con capas de nectarina, guayaba, frutos rojos y un toque cítrico brillante. Cuerpo alto y acidez media: potente, suave y deliciosa tanto caliente como en frío. ¿Lo quieres en grano o molido? Envíanos un texto o correo y preparamos tu pedido.",
      "faq.q2": "¿Cómo hago un pedido?",
      "faq.a2": "Ordena en línea, o directamente por correo o por texto. Dinos qué quieres (grano entero o molido), cuántas bolsas y tu forma de entrega preferida en Springfield o el centro de Illinois.",
      "faq.q3": "¿Hacen envíos?",
      "faq.a3": "Aún no de forma constante. Por ahora, lo mejor es encontrarnos en un mercado o coordinar recogida local en Springfield o el centro de Illinois. Sigue Facebook o Instagram para ubicaciones semanales.",
      "faq.q4": "¿Ofrecen K-Cups?",
      "faq.a4": "Sí. Ya ofrecemos K-Cups. Envíanos un texto o correo para preguntar qué opciones hay disponibles.",
      "contact.title": "Contacto y redes",
      "contact.subtitle": "Respuesta más rápida: texto o correo. Lo mejor para novedades de recogida en Springfield y el centro de Illinois: redes.",
      "contact.prompt": "¿Listo para pedir en Springfield o el centro de Illinois? Mándanos un texto primero.",
      "footer.service": "Atendiendo a Springfield, Illinois y al centro de Illinois.",
      "contact.email.kicker": "Correo",
      "contact.text.kicker": "Texto",
      "contact.text.sub": "Toca para enviar",
      "contact.follow.kicker": "Síguenos",
      "contact.follow.sub": "Ubicaciones y novedades",
      "sms.body": "¡Hola! Me gustaría pedir café de Millionaire’s Roast."
    }
  };

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector(".site-header");
  const yearEl = document.getElementById("year");
  const squareBtn = document.getElementById("squareBuyBtn");
  const textBtn = document.getElementById("textOrderBtn");
  const textCard = document.getElementById("textUsCard");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const brandMark = document.querySelector(".brand-mark");
  const featuredImage = document.querySelector(".featured-image");
  const titleEl = document.querySelector("title");
  const metaDescriptionEl = document.querySelector('meta[name="description"]');
  const ogTitleEl = document.querySelector('meta[property="og:title"]');
  const ogDescriptionEl = document.querySelector('meta[property="og:description"]');
  const ogLocaleEl = document.querySelector('meta[property="og:locale"]');
  const twitterTitleEl = document.querySelector('meta[name="twitter:title"]');
  const twitterDescriptionEl = document.querySelector('meta[name="twitter:description"]');
  const i18nBindings = [...document.querySelectorAll("[data-i18n]")]
    .map((element) => [element, element.getAttribute("data-i18n")])
    .filter(([, key]) => Boolean(key));
  const i18nAttributeBindings = [...document.querySelectorAll("[data-i18n-attr][data-i18n-attr-key]")]
    .map((element) => [
      element,
      element.getAttribute("data-i18n-attr"),
      element.getAttribute("data-i18n-attr-key")
    ])
    .filter(([, attribute, key]) => Boolean(attribute && key));
  const langButtons = [...document.querySelectorAll("[data-lang-btn]")];
  const langSwitch = document.querySelector(".lang-switch");
  const accordion = document.querySelector("[data-accordion]");
  const accordionButtons = accordion ? [...accordion.querySelectorAll(".faq-item")] : [];
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const squarePlaceholder = SQUARE_BUY_LINK.includes("PASTE_YOUR_LINK_HERE");
  let langInitialized = false;
  let currentLang = root.dataset.lang || (root.getAttribute("lang") === "es" ? "es" : "en");
  let openAccordionButton = null;

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

  function applyFeaturedImageFallback() {
    if (!featuredImage) return;

    const media = featuredImage.closest(".featured-media");
    if (!media) return;

    const showFallback = () => {
      media.classList.add("is-empty");
    };

    if (featuredImage.complete && (!featuredImage.naturalWidth || !featuredImage.naturalHeight)) {
      showFallback();
    }

    featuredImage.addEventListener("error", showFallback, { once: true });
    featuredImage.addEventListener("load", () => {
      if (featuredImage.naturalWidth && featuredImage.naturalHeight) {
        media.classList.remove("is-empty");
      }
    }, { once: true });
  }

  function setupBuyButton() {
    if (!squareBtn) return;

    squareBtn.href = SQUARE_BUY_LINK;

    if (squarePlaceholder) {
      body.classList.add("buy-link-missing");
      squareBtn.classList.add("is-disabled");
      squareBtn.setAttribute("aria-disabled", "true");
      squareBtn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Online purchasing is currently under maintenance. Please order by text or email — we’ll take care of you right away.");
      });
    }
  }

  function setSmsLink(lang) {
    const dict = T[lang] || T.en;
    const bodyText = encodeURIComponent(dict["sms.body"] || T.en["sms.body"]);
    const separator = isIOS ? "&" : "?";
    const smsUrl = `sms:${PHONE_NUMBER}${separator}body=${bodyText}`;

    if (textBtn) textBtn.href = smsUrl;
    if (textCard) textCard.href = smsUrl;
  }

  function setMetaContent(element, value) {
    if (element && element.getAttribute("content") !== value) {
      element.setAttribute("content", value);
    }
  }

  function updateSeo(lang) {
    const dict = T[lang] || T.en;
    const title = dict["meta.title"] || T.en["meta.title"];
    const description = dict["meta.description"] || T.en["meta.description"];
    const locale = lang === "es" ? "es_US" : "en_US";

    if (titleEl && titleEl.textContent !== title) titleEl.textContent = title;
    setMetaContent(metaDescriptionEl, description);
    setMetaContent(ogTitleEl, title);
    setMetaContent(ogDescriptionEl, description);
    setMetaContent(ogLocaleEl, locale);
    setMetaContent(twitterTitleEl, title);
    setMetaContent(twitterDescriptionEl, description);
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

  function closeAccordionButton(button) {
    const panel = getAccordionPanel(button);
    if (!panel) return;
    button.setAttribute("aria-expanded", "false");
    panel.style.maxHeight = "0px";
  }

  function openAccordionButtonElement(button) {
    const panel = getAccordionPanel(button);
    if (!panel) return;
    button.setAttribute("aria-expanded", "true");
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }

  function syncOpenAccordionHeight() {
    if (!openAccordionButton) return;
    const panel = getAccordionPanel(openAccordionButton);
    if (panel) {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    }
  }

  function setupAccordion() {
    if (!accordion || !accordionButtons.length) return;

    accordionButtons.forEach(closeAccordionButton);

    openAccordionButton = accordionButtons.find((button) => button.hasAttribute("data-open-default")) || accordionButtons[0] || null;
    if (openAccordionButton) {
      openAccordionButtonElement(openAccordionButton);
    }

    accordion.addEventListener("click", (event) => {
      const button = event.target.closest(".faq-item");
      if (!button || !accordion.contains(button)) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      if (openAccordionButton) {
        closeAccordionButton(openAccordionButton);
      }

      if (isExpanded) {
        openAccordionButton = null;
        return;
      }

      openAccordionButton = button;
      openAccordionButtonElement(button);
    });
  }

  function applyTranslations(lang) {
    const dict = T[lang] || T.en;

    for (const [element, key] of i18nBindings) {
      const value = dict[key];
      if (typeof value === "string" && element.textContent !== value) {
        element.textContent = value;
      }
    }

    for (const [element, attribute, key] of i18nAttributeBindings) {
      const value = dict[key];
      if (typeof value === "string" && element.getAttribute(attribute) !== value) {
        element.setAttribute(attribute, value);
      }
    }

    for (const button of langButtons) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-btn") === lang));
    }
  }

  function commitLanguage(lang) {
    root.setAttribute("lang", lang === "es" ? "es" : "en");
    root.dataset.lang = lang;
    currentLang = lang;
    langInitialized = true;

    applyTranslations(lang);
    setSmsLink(lang);
    updateSeo(lang);
    syncOpenAccordionHeight();
    syncMobileMenuHeight();

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}

    requestAnimationFrame(() => {
      root.classList.remove("is-lang-fading");
    });
  }

  function applyLang(nextLang) {
    const lang = nextLang === "es" ? "es" : "en";
    if (langInitialized && lang === currentLang) return;

    if (langInitialized && LANG_FADE_MS > 0) {
      root.classList.add("is-lang-fading");
      window.setTimeout(() => commitLanguage(lang), LANG_FADE_MS);
      return;
    }

    commitLanguage(lang);
  }

  function setupLangButtons() {
    if (langSwitch) {
      langSwitch.addEventListener("click", (event) => {
        const button = event.target.closest("[data-lang-btn]");
        if (!button || !langSwitch.contains(button)) return;
        applyLang(button.getAttribute("data-lang-btn"));
      });
    }

    let initial = currentLang;

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") {
        initial = saved;
      }
    } catch {}

    applyLang(initial);
  }

  applyBrandFallback();
  applyFeaturedImageFallback();
  setupBuyButton();
  setupMobileNav();
  setupAccordion();
  setupLangButtons();
})();
