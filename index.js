(() => {
  const SQUARE_BUY_LINK = "https://square.link/u/PASTE_YOUR_LINK_HERE";
  const PHONE_NUMBER = "12174167072";
  const LANG_FADE_MS = 160;

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
      "about.title": "Refined Roasts for Discerning Tastes.",
      "about.subtitle": "At Millionaire’s Roast, we craft exclusive small-batch roasts using a rotating selection of the finest single-origin beans for Springfield, Illinois and surrounding Central Illinois communities.",
      "about.card1.title": "The Roast",
      "about.card1.text": "Our beans rotate based on the roaster’s choice — selected for character, balance, and a clean finish. Each batch is roasted to bring out the best of its origin.",
      "about.card1.emphasis": "Experience luxury in every cup.",
      "about.card2.title": "What you’re getting",
      "about.card2.li1": "Rotating single-origin coffees",
      "about.card2.li2": "Roasted fresh in small batches",
      "about.card2.li3": "Premium presentation & gifting-ready",
      "about.card2.li4": "Order online, text, or email",
      "faq.title": "Have Questions?",
      "faq.subtitle": "Quick answers. If you don’t see what you need, reach out.",
      "faq.q1": "What beans are available right now?",
      "faq.a1": "This rotation is Costa Rica Tarrazú “San Diego Jaguar” (Honey Process) — a rich, dessert-leaning cup with chocolate sweetness and a honeyed finish, layered with nectarine, guava, berry, and a bright citrus lift. Full-bodied with medium acidity, it’s bold, silky, and ridiculously satisfying hot or iced. Want it whole bean or ground? Text or email and we’ll get your order ready.",
      "faq.q2": "How do I order?",
      "faq.a2": "Order online, or order directly by email or by text. Tell us what you want (whole bean vs. ground), how many bags, and your preferred pickup in Springfield or Central Illinois.",
      "faq.q3": "Do you ship?",
      "faq.a3": "Not reliably yet. For now, the best way to get coffee is to meet us at a market or arrange local pickup in Springfield or Central Illinois. Follow Facebook or Instagram for weekly locations.",
      "faq.q4": "Do you offer K-Cups?",
      "faq.a4": "We’re exploring single-serve options. Follow us for announcements and new drops.",
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
      "about.title": "Tostados refinados para paladares exigentes.",
      "about.subtitle": "En Millionaire’s Roast, elaboramos tostados exclusivos en lotes pequeños con una selección rotativa de los mejores granos de origen único para Springfield, Illinois y las comunidades cercanas del centro de Illinois.",
      "about.card1.title": "El tostado",
      "about.card1.text": "Nuestros granos rotan según la selección del tostador — elegidos por su carácter, balance y final limpio. Cada lote se tuesta para resaltar lo mejor de su origen.",
      "about.card1.emphasis": "Vive el lujo en cada taza.",
      "about.card2.title": "Qué obtienes",
      "about.card2.li1": "Cafés de origen único rotativos",
      "about.card2.li2": "Tostado fresco en lotes pequeños",
      "about.card2.li3": "Presentación premium, ideal para regalar",
      "about.card2.li4": "Ordena en línea, por texto o correo",
      "faq.title": "¿Tienes preguntas?",
      "faq.subtitle": "Respuestas rápidas. Si no ves lo que necesitas, contáctanos.",
      "faq.q1": "¿Qué granos hay disponibles ahora?",
      "faq.a1": "En esta rotación tenemos Costa Rica Tarrazú “San Diego Jaguar” (Proceso Honey) — una taza intensa y sedosa con dulzor de chocolate y un final con miel, con capas de nectarina, guayaba, frutos rojos y un toque cítrico brillante. Cuerpo alto y acidez media: potente, suave y deliciosa tanto caliente como en frío. ¿Lo quieres en grano o molido? Envíanos un texto o correo y preparamos tu pedido.",
      "faq.q2": "¿Cómo hago un pedido?",
      "faq.a2": "Ordena en línea, o directamente por correo o por texto. Dinos qué quieres (grano entero o molido), cuántas bolsas y tu forma de entrega preferida en Springfield o el centro de Illinois.",
      "faq.q3": "¿Hacen envíos?",
      "faq.a3": "Aún no de forma constante. Por ahora, lo mejor es encontrarnos en un mercado o coordinar recogida local en Springfield o el centro de Illinois. Sigue Facebook o Instagram para ubicaciones semanales.",
      "faq.q4": "¿Ofrecen K-Cups?",
      "faq.a4": "Estamos explorando opciones de porción individual. Síguenos para anuncios y lanzamientos.",
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
  const titleEl = document.querySelector("title");
  const metaDescriptionEl = document.querySelector('meta[name="description"]');
  const ogTitleEl = document.querySelector('meta[property="og:title"]');
  const ogDescriptionEl = document.querySelector('meta[property="og:description"]');
  const ogLocaleEl = document.querySelector('meta[property="og:locale"]');
  const twitterTitleEl = document.querySelector('meta[name="twitter:title"]');
  const twitterDescriptionEl = document.querySelector('meta[name="twitter:description"]');
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  const squarePlaceholder = SQUARE_BUY_LINK.includes("PASTE_YOUR_LINK_HERE");
  let langInitialized = false;

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  function applyBrandFallback() {
    if (!brandMark) return;

    if (brandMark.complete && (!brandMark.naturalWidth || !brandMark.naturalHeight)) {
      brandMark.classList.add("is-hidden");
    }

    brandMark.addEventListener("error", () => {
      brandMark.classList.add("is-hidden");
    });
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

  function updateSeo(lang) {
    const dict = T[lang] || T.en;
    const title = dict["meta.title"] || T.en["meta.title"];
    const description = dict["meta.description"] || T.en["meta.description"];
    const locale = lang === "es" ? "es_US" : "en_US";

    if (titleEl) titleEl.textContent = title;
    if (metaDescriptionEl) metaDescriptionEl.setAttribute("content", description);
    if (ogTitleEl) ogTitleEl.setAttribute("content", title);
    if (ogDescriptionEl) ogDescriptionEl.setAttribute("content", description);
    if (ogLocaleEl) ogLocaleEl.setAttribute("content", locale);
    if (twitterTitleEl) twitterTitleEl.setAttribute("content", title);
    if (twitterDescriptionEl) twitterDescriptionEl.setAttribute("content", description);
  }


  function setMobile(open) {
    if (!toggle || !mobileNav) return;

    toggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));

    if (open) {
      const headerHeight = header ? header.offsetHeight : 64;
      const maxAvailable = Math.max(160, window.innerHeight - headerHeight - 8);
      const targetHeight = Math.min(mobileNav.scrollHeight, maxAvailable);
      mobileNav.style.maxHeight = `${targetHeight}px`;
      mobileNav.style.overflowY = mobileNav.scrollHeight > maxAvailable ? "auto" : "hidden";
      body.classList.add("nav-open");
    } else {
      mobileNav.style.maxHeight = "0px";
      mobileNav.style.overflowY = "hidden";
      body.classList.remove("nav-open");
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

    window.addEventListener("resize", () => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        setMobile(true);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMobile(false);
      }
    });
  }

  function updateOpenPanels() {
    document.querySelectorAll("[data-panel]").forEach((panel) => {
      const button = panel.previousElementSibling;
      if (!button || !button.matches(".faq-item")) return;
      panel.style.maxHeight = button.getAttribute("aria-expanded") === "true" ? `${panel.scrollHeight}px` : "0px";
    });
  }

  function setupAccordion() {
    const accordion = document.querySelector("[data-accordion]");
    if (!accordion) return;

    const items = [...accordion.querySelectorAll(".faq-item")];

    const openPanel = (button) => {
      const panel = button.nextElementSibling;
      if (!panel || !panel.matches("[data-panel]")) return;
      button.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    };

    const closePanel = (button) => {
      const panel = button.nextElementSibling;
      if (!panel || !panel.matches("[data-panel]")) return;
      button.setAttribute("aria-expanded", "false");
      panel.style.maxHeight = "0px";
    };

    const closeAll = () => {
      items.forEach(closePanel);
    };

    closeAll();
    const defaultButton = items.find((button) => button.hasAttribute("data-open-default")) || items[0];
    if (defaultButton) openPanel(defaultButton);

    items.forEach((button) => {
      button.addEventListener("click", () => {
        const expanded = button.getAttribute("aria-expanded") === "true";
        closeAll();
        if (!expanded) openPanel(button);
      });
    });
  }

  function applyLang(lang) {
    const dict = T[lang] || T.en;
    const current = root.dataset.lang || (root.getAttribute("lang") === "es" ? "es" : "en");
    if (langInitialized && lang === current) return;

    const shouldAnimate = Boolean(root.dataset.lang);
    if (shouldAnimate) root.classList.add("is-lang-fading");

    window.setTimeout(() => {
      root.setAttribute("lang", lang === "es" ? "es" : "en");
      root.dataset.lang = lang;
      langInitialized = true;

      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (dict[key]) {
          element.textContent = dict[key];
        }
      });

      document.querySelectorAll("[data-lang-btn]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.getAttribute("data-lang-btn") === lang));
      });

      try {
        localStorage.setItem("mr_lang", lang);
      } catch {}

      setSmsLink(lang);
      updateSeo(lang);
      updateOpenPanels();

      if (mobileNav && toggle && toggle.getAttribute("aria-expanded") === "true") {
        setMobile(true);
      }

      requestAnimationFrame(() => {
        root.classList.remove("is-lang-fading");
      });
    }, shouldAnimate ? LANG_FADE_MS : 0);
  }

  function setupLangButtons() {
    document.querySelectorAll("[data-lang-btn]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLang(button.getAttribute("data-lang-btn"));
      });
    });

    let initial = "en";
    try {
      const saved = localStorage.getItem("mr_lang");
      if (saved === "en" || saved === "es") {
        initial = saved;
      }
    } catch {}

    applyLang(initial);
  }

  applyBrandFallback();
  setupBuyButton();
  setupMobileNav();
  setupAccordion();
  setupLangButtons();
})();
