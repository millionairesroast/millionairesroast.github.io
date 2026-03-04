(() => {
  // ===== EDIT THIS LATER =====
  const SQUARE_BUY_LINK = "https://square.link/u/PASTE_YOUR_LINK_HERE";
  // ==========================

  const PHONE_NUMBER = "12174167072"; // digits only

  const T = {
    en: {
      skip: "Skip to content",
      tagline: "Luxury in every cup.",
      "lang.label": "Language",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "nav.order": "ORDER",
      "hero.kicker": "SMALL BATCH ROASTERY",
      "hero.sub": "Small-batch, rotating single-origin coffees for those with discerning taste.",
      "cta.buy": "Buy Now",
      "cta.email": "Email to Order",
      "cta.text": "Text to Order",
      "hero.note": "Order online, or order by text or email.",
      "find.label": "Where to find us",
      "find.text": "Catch us at Central Illinois farmers markets. Follow us for weekly locations and updates.",
      "about.title": "Refined Roasts for Discerning Tastes.",
      "about.subtitle": "At Millionaire’s Roast, we craft exclusive small-batch roasts using a rotating selection of the finest single-origin beans.",
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
      "faq.a1": "Our selection rotates based on the roaster’s choice of single-origin beans. For this week’s options, check Facebook/Instagram or text/email us.",
      "faq.q2": "How do I order?",
      "faq.a2": "Order online, or order directly by email or by text. Tell us what you want (whole bean vs. ground), how many bags, and your preferred pickup.",
      "faq.q3": "Do you ship?",
      "faq.a3": "Not reliably yet. For now, the best way to get coffee is to meet us at a market or arrange local pickup. Follow Facebook/Instagram for weekly locations.",
      "faq.q4": "Do you offer K-Cups?",
      "faq.a4": "We’re exploring single-serve options. Follow us for announcements and new drops.",
      "contact.title": "Contact & Follow Us",
      "contact.subtitle": "Fastest response: text or email. Weekly locations: socials.",
      "contact.email.kicker": "Email Us",
      "contact.text.kicker": "Text Us",
      "contact.text.sub": "Tap to message",
      "contact.follow.kicker": "Follow Us",
      "contact.follow.sub": "Weekly locations & updates",
    },
    es: {
      skip: "Saltar al contenido",
      tagline: "Lujo en cada taza.",
      "lang.label": "Idioma",
      "nav.about": "Acerca de",
      "nav.faq": "Preguntas",
      "nav.contact": "Contacto",
      "nav.order": "ORDENAR",
      "hero.kicker": "TOSTADORÍA ARTESANAL",
      "hero.sub": "Café de lotes pequeños, de origen único y rotativo, para paladares exigentes.",
      "cta.buy": "Comprar ahora",
      "cta.email": "Pedir por correo",
      "cta.text": "Pedir por texto",
      "hero.note": "Ordena en línea, o por texto o correo.",
      "find.label": "Dónde encontrarnos",
      "find.text": "Encuéntranos en mercados de agricultores del centro de Illinois. Síguenos para ubicaciones y novedades semanales.",
      "about.title": "Tostados refinados para paladares exigentes.",
      "about.subtitle": "En Millionaire’s Roast, elaboramos tostados exclusivos en lotes pequeños con una selección rotativa de los mejores granos de origen único.",
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
      "faq.a1": "Nuestra selección rota según la elección del tostador de granos de origen único. Para las opciones de esta semana, revisa Facebook/Instagram o envíanos un texto/correo.",
      "faq.q2": "¿Cómo hago un pedido?",
      "faq.a2": "Ordena en línea, o directamente por correo o por texto. Dinos qué quieres (grano entero o molido), cuántas bolsas y tu forma de entrega preferida.",
      "faq.q3": "¿Hacen envíos?",
      "faq.a3": "Aún no de forma constante. Por ahora, lo mejor es encontrarnos en un mercado o coordinar recogida local. Sigue Facebook/Instagram para ubicaciones semanales.",
      "faq.q4": "¿Ofrecen K-Cups?",
      "faq.a4": "Estamos explorando opciones de porción individual. Síguenos para anuncios y lanzamientos.",
      "contact.title": "Contacto y redes",
      "contact.subtitle": "Respuesta más rápida: texto o correo. Ubicaciones semanales: redes.",
      "contact.email.kicker": "Correo",
      "contact.text.kicker": "Texto",
      "contact.text.sub": "Toca para enviar",
      "contact.follow.kicker": "Síguenos",
      "contact.follow.sub": "Ubicaciones y novedades",
    }
  };

  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Square button (safe: link-out only)
  const squareBtn = document.getElementById("squareBuyBtn");
  if (squareBtn) {
    squareBtn.href = SQUARE_BUY_LINK;
    if (SQUARE_BUY_LINK.includes("PASTE_YOUR_LINK_HERE")) {
      squareBtn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Paste your Square payment link into index.js (SQUARE_BUY_LINK).");
      });
    }
  }

  // Text links (SMS)
  const sms = `sms:${PHONE_NUMBER}?&body=${encodeURIComponent("Hi! I'd like to order coffee from Millionaire’s Roast.")}`;
  const textBtn = document.getElementById("textOrderBtn");
  const textCard = document.getElementById("textUsCard");
  if (textBtn) textBtn.href = sms;
  if (textCard) textCard.href = sms;

  // Mobile nav smooth open/close
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  function setMobile(open) {
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", String(open));
    mobileNav.classList.toggle("is-open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    mobileNav.style.maxHeight = open ? (mobileNav.scrollHeight + "px") : "0px";
  }

  if (toggle && mobileNav) {
    setMobile(false);

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMobile(!isOpen);
    });

    mobileNav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setMobile(false);
    });

    window.addEventListener("resize", () => {
      if (toggle.getAttribute("aria-expanded") === "true") {
        mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setMobile(false);
    });
  }

  // FAQ smooth expand/collapse
  const acc = document.querySelector("[data-accordion]");
  if (acc) {
    const items = [...acc.querySelectorAll(".faq-item")];

    function closeAll() {
      items.forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
        const panel = btn.nextElementSibling;
        if (panel && panel.matches("[data-panel]")) panel.style.maxHeight = "0px";
      });
    }

    closeAll();

    items.forEach((btn) => {
      const panel = btn.nextElementSibling;
      if (!panel || !panel.matches("[data-panel]")) return;

      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        closeAll();
        if (!expanded) {
          btn.setAttribute("aria-expanded", "true");
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    });
  }

  // Language toggle (EN/ES), persists choice
  const root = document.documentElement;

  function applyLang(lang) {
    const dict = T[lang] || T.en;
    root.setAttribute("lang", lang === "es" ? "es" : "en");
    root.dataset.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang-btn") === lang));
    });

    try { localStorage.setItem("mr_lang", lang); } catch {}

    // keep mobile height accurate if open
    if (mobileNav && toggle && toggle.getAttribute("aria-expanded") === "true") {
      mobileNav.style.maxHeight = mobileNav.scrollHeight + "px";
    }
  }

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-btn")));
  });

  let initial = "en";
  try {
    const saved = localStorage.getItem("mr_lang");
    if (saved === "en" || saved === "es") initial = saved;
  } catch {}
  applyLang(initial);
})();
