(() => {
  const SQUARE_BUY_LINK = "https://square.link/u/JRlFCpYu";
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";
  const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LANG_FADE_MS = REDUCE_MOTION ? 0 : 160;

  const T = {
    en: {
      skip: "Skip to content",
      tagline: "Luxury in every cup.",
      "meta.title": "Millionaire’s Roast | Small Batch Coffee Roastery in Springfield, IL",
      "meta.description": "Locally roasted in Beardstown, Illinois. Small-batch single-origin coffees for Springfield and Central Illinois, with simple ordering by text, email, or Illinois shipping.",
      "lang.label": "Language",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.order": "ORDER",
      "hero.kicker": "SMALL BATCH ROASTERY",
      "hero.sub": "Locally roasted in Beardstown, Illinois, with rotating single-origin coffees for Springfield and Central Illinois.",
      "hero.note": "Most local orders are easiest by text or email. Pickup in Beardstown and Springfield is free. Beardstown delivery is free too. Springfield delivery may have a fee depending on the order and distance.",
      "hero.compliance": "Ordering online? That checkout is just for shipping to Illinois addresses. If you’re local and want pickup or delivery, just text or email us instead.",
      "cta.buy": "Order Online",
      "cta.email": "Email to Order",
      "cta.text": "Text to Order",
      "buy.guard.kicker": "Illinois shipping only",
      "buy.guard.title": "Before you check out",
      "buy.guard.body": "This checkout is just for shipping to Illinois addresses. If you want pickup or local delivery, just text or email us instead. Payment is handled securely through Square.",
      "buy.guard.checkbox": "My shipping address is in Illinois.",
      "buy.guard.cancel": "Cancel",
      "buy.guard.continue": "Go to secure checkout",
      "buy.guard.close.aria": "Close Illinois shipping notice",
      "find.label": "Where to find us",
      "find.mini": "Best place for weekly locations and market updates.",
      "find.text": "Catch us at Springfield and Central Illinois farmers markets. Follow us for weekly locations and updates.",
      "find.image.alt": "Millionaire’s Roast market booth set up for a local event",
      "featured.kicker": "Current Roast",
      "featured.title": "Costa Rica Tarrazú “San Diego Jaguar”",
      "featured.process": "Honey Process",
      "featured.text": "A rich, dessert-leaning cup with chocolate sweetness and a honeyed finish, layered with nectarine, guava, berry, and a bright citrus lift. Full-bodied with medium acidity, bold and silky hot or iced.",
      "featured.price.bag": "14 oz bag · $18",
      "featured.price.shipping": "Illinois shipping · $5.99",
      "featured.price.kcups": "K-Cups are available for local orders too: 8 pack $10, 18 pack $22, 24 pack $29, 32 pack $35.",
      "featured.note": "Want a bag shipped? Use online checkout. Want pickup, local delivery, or K-Cups? Text or email us and we’ll get you set up.",
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
      "about.market.alt": "Millionaire’s Roast market booth at a local event",
      "about.market.caption": "A look at the booths at the Old Capital Farmers Market.",
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
      "faq.a2": "Most local orders are easiest by text or email. Use online checkout if you want a 14 oz bag shipped to an Illinois address. Pickup in Beardstown and Springfield is free. Beardstown delivery is free. Springfield delivery may have a fee depending on the order and distance.",
      "faq.q3": "Do you ship?",
      "faq.a3": "Yes. We ship 14 oz bagged coffee to Illinois addresses only through online checkout, and shipping is $5.99. If you want pickup or local delivery instead, just text or email us. Orders placed with a shipping address outside Illinois will be canceled and refunded.",
      "faq.q4": "Do you offer K-Cups?",
      "faq.a4": "Yes. K-Cups are available for local orders: 8 pack $10, 18 pack $22, 24 pack $29, and 32 pack $35. Text or email us to order.",
      "contact.title": "Contact & Follow Us",
      "contact.subtitle": "Best way to reach us: text or email, especially for pickup, delivery, and K-Cup orders. For Springfield and Central Illinois market and pickup updates, follow us on social.",
      "contact.prompt": "Need a local order in Springfield or Central Illinois? Text us first.",
      "footer.service": "Locally roasted in Beardstown, Illinois, and serving Springfield and Central Illinois.",
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
      "meta.description": "Tostado localmente en Beardstown, Illinois. Café artesanal de origen único para Springfield y el centro de Illinois, con pedidos sencillos por texto, correo o envío dentro de Illinois.",
      "lang.label": "Idioma",
      "nav.about": "Acerca de",
      "nav.faq": "Preguntas",
      "nav.contact": "Contacto",
      "nav.order": "ORDENAR",
      "hero.kicker": "TOSTADORÍA ARTESANAL",
      "hero.sub": "Tostado localmente en Beardstown, Illinois, con cafés de origen único y rotativos para Springfield y el centro de Illinois.",
      "hero.note": "La mayoría de los pedidos locales se resuelven más fácil por texto o correo. La recogida en Beardstown y Springfield es gratis. La entrega en Beardstown también es gratis. La entrega en Springfield puede tener un costo según el pedido y la distancia.",
      "hero.compliance": "¿Vas a pedir en línea? Ese pago es solo para envíos a direcciones dentro de Illinois. Si estás cerca y prefieres recogida o entrega local, solo mándanos un texto o correo.",
      "cta.buy": "Pedir en línea",
      "cta.email": "Pedir por correo",
      "cta.text": "Pedir por texto",
      "buy.guard.kicker": "Solo envío en Illinois",
      "buy.guard.title": "Antes de continuar",
      "buy.guard.body": "Este pago es solo para envíos a direcciones dentro de Illinois. Si quieres recogida o entrega local, mejor mándanos un texto o correo. El pago se procesa de forma segura por Square.",
      "buy.guard.checkbox": "Mi dirección de envío está en Illinois.",
      "buy.guard.cancel": "Cancelar",
      "buy.guard.continue": "Ir al pago seguro",
      "buy.guard.close.aria": "Cerrar aviso de envío solo en Illinois",
      "find.label": "Dónde encontrarnos",
      "find.mini": "El mejor lugar para ver ubicaciones semanales y novedades del mercado.",
      "find.text": "Encuéntranos en mercados de agricultores de Springfield y del centro de Illinois. Síguenos para ubicaciones y novedades semanales.",
      "find.image.alt": "Puesto de Millionaire’s Roast preparado para un evento local",
      "featured.kicker": "Tostado actual",
      "featured.title": "Costa Rica Tarrazú “San Diego Jaguar”",
      "featured.process": "Proceso Honey",
      "featured.text": "Una taza intensa y sedosa con dulzor de chocolate y un final con miel, con capas de nectarina, guayaba, frutos rojos y un toque cítrico brillante. Cuerpo alto y acidez media, potente y deliciosa tanto caliente como en frío.",
      "featured.price.bag": "Bolsa de 14 oz · $18",
      "featured.price.shipping": "Envío en Illinois · $5.99",
      "featured.price.kcups": "También tenemos K-Cups para pedidos locales: paquete de 8 $10, de 18 $22, de 24 $29 y de 32 $35.",
      "featured.note": "¿Quieres una bolsa con envío? Usa el pago en línea. ¿Prefieres recogida, entrega local o K-Cups? Envíanos un texto o correo y te ayudamos.",
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
      "about.market.alt": "Puesto de Millionaire’s Roast en un evento local",
      "about.market.caption": "Una mirada a los puestos en el Old Capital Farmers Market.",
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
      "faq.a2": "La mayoría de los pedidos locales se resuelven mejor por texto o correo. Usa el pago en línea si quieres una bolsa de 14 oz enviada a una dirección dentro de Illinois. La recogida en Beardstown y Springfield es gratis. La entrega en Beardstown es gratis. La entrega en Springfield puede tener un costo según el pedido y la distancia.",
      "faq.q3": "¿Hacen envíos?",
      "faq.a3": "Sí. Enviamos café en bolsa de 14 oz solo a direcciones dentro de Illinois por medio del pago en línea, y el envío cuesta $5.99. Si prefieres recogida o entrega local, solo mándanos un texto o correo. Los pedidos con una dirección de envío fuera de Illinois serán cancelados y reembolsados.",
      "faq.q4": "¿Ofrecen K-Cups?",
      "faq.a4": "Sí. Las K-Cups están disponibles para pedidos locales: paquete de 8 $10, de 18 $22, de 24 $29 y de 32 $35. Envíanos un texto o correo para pedir.",
      "contact.title": "Contacto y redes",
      "contact.subtitle": "La mejor manera de contactarnos es por texto o correo, especialmente para recogida, entrega y pedidos de K-Cups. Para novedades de mercados y recogida en Springfield y el centro de Illinois, síguenos en redes.",
      "contact.prompt": "¿Necesitas un pedido local en Springfield o el centro de Illinois? Mándanos un texto primero.",
      "footer.service": "Tostado localmente en Beardstown, Illinois, y sirviendo a Springfield y al centro de Illinois.",
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
  const buyGuard = document.getElementById("buyGuard");
  const buyGuardCheckbox = document.getElementById("buyGuardCheckbox");
  const buyGuardContinue = document.getElementById("buyGuardContinue");
  const buyGuardClosers = [...document.querySelectorAll("[data-buy-guard-close]")];
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
      body.classList.add("buy-link-missing");
      squareBtn.classList.add("is-disabled");
      squareBtn.setAttribute("aria-disabled", "true");
      squareBtn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Online purchasing is currently under maintenance. Please order by text or email — we’ll take care of you right away.");
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

    if (buyGuard) {
      buyGuard.addEventListener("click", (event) => {
        if (event.target === buyGuard) closeBuyGuard();
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && buyGuard && !buyGuard.hidden) {
        closeBuyGuard();
      }
    });
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
    panel.hidden = true;
    panel.style.maxHeight = "0px";
  }

  function openAccordionButtonElement(button) {
    const panel = getAccordionPanel(button);
    if (!panel) return;
    button.setAttribute("aria-expanded", "true");
    panel.hidden = false;
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  }

  function syncOpenAccordionHeight() {
    if (!openAccordionButton) return;
    const panel = getAccordionPanel(openAccordionButton);
    if (panel) {
      panel.hidden = false;
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
