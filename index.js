(() => {
  const SHIPPING_BAG_LINK = "https://square.link/u/JRlFCpYu";
  const SHIPPING_KCUP_LINK = "https://square.link/u/uk8WaB8d";
  const PICKUP_LINK = "https://cash.app/order/$millionairesroast";
  const PHONE_NUMBER = "12174167072";
  const STORAGE_KEY = "mr_lang";

  const T = {
    en: {
      skip: "Skip to content",
      "brand.tag": "Small-batch specialty coffee",
      "nav.order": "Order",
      "nav.roast": "Current Roast",
      "nav.about": "About",
      "nav.faq": "FAQ",
      "nav.contact": "Contact",
      "lang.label": "Language",
      "hero.kicker": "Roasted in Beardstown, serving Springfield and Central Illinois",
      "hero.title": "Specialty coffee with a premium feel, not a premium price.",
      "hero.sub": "Millionaire's Roast is a Central Illinois small-batch roaster focused on approachable specialty coffee, rotating origins, and easy everyday drinking.",
      "hero.chip1": "Small-batch roasted",
      "hero.chip2": "Specialty coffee",
      "hero.chip3": "Rotating origins",
      "hero.chip4": "Pickup, delivery, or Illinois shipping",
      "hero.cta.primary": "Choose Order Option",
      "hero.cta.secondary": "See Current Roast",
      "hero.proof1.title": "Featured locally",
      "hero.proof1.body": "Found at local markets and community events across Central Illinois.",
      "hero.proof2.title": "Clear roast details",
      "hero.proof2.body": "Origin, tasting notes, best use, and pricing are all easy to scan.",
      "order.title": "Two simple ways to order",
      "order.subtitle": "Use the shipping links for bags or K-Cups, or use the ordering profile for pickup and local delivery.",
      "order.ship.kicker": "Ship Coffee",
      "order.ship.title": "Shipping for Illinois orders",
      "order.ship.body": "Choose the shipping link that matches what you want sent: coffee bags or K-Cups.",
      "order.ship.cta1": "Ship Coffee Bags",
      "order.ship.cta2": "Ship K-Cups",
      "order.ship.note": "Best for shipped Illinois orders that need a direct payment link.",
      "order.local.kicker": "Local Pickup / Delivery",
      "order.local.title": "Pickup and local delivery",
      "order.local.body": "Use the ordering profile for Beardstown, Springfield, and nearby pickup or delivery orders.",
      "order.local.cta": "Order Pickup or Delivery",
      "order.local.note": "One local ordering profile for pickup and delivery coordination.",
      "order.note.lead": "Need help deciding?",
      "order.note.body": "Use the shipping links for coffee bags or K-Cups, and use the ordering profile for pickup or delivery. If you'd rather handle it personally or just want help placing the order, text us instead.",
      "roast.kicker": "Current Roast",
      "roast.title": "Costa Rica Tarrazu \"San Diego Jaguar\"",
      "roast.process": "Honey Process",
      "roast.body": "A rich, balanced daily drinker with chocolate sweetness, a honeyed finish, and fruit notes that keep the cup lively without getting too sharp.",
      "roast.note": "Best for drinkers who want a balanced, sweet daily coffee with fruit complexity but no harsh edge.",
      "roast.spec1.label": "Origin",
      "roast.spec1.value": "Tarrazu, Costa Rica",
      "roast.spec2.label": "Roast Level",
      "roast.spec2.value": "Medium, Medium Dark, Dark",
      "roast.spec3.label": "Tasting Notes",
      "roast.spec3.value": "Chocolate, honey, nectarine, guava, berry, citrus",
      "roast.spec4.label": "Best Use",
      "roast.spec4.value": "Great for drip, solid iced, easy daily drinker",
      "roast.spec5.label": "Availability",
      "roast.spec5.value": "Available now in whole bean or ground",
      "roast.spec6.label": "Cup Profile",
      "roast.spec6.value": "Balanced, sweet, and easy to come back to",
      "roast.price.bag": "14 oz Bag",
      "roast.price.kcups": "K-Cups",
      "jaguar.kicker": "Why \"Jaguar\"?",
      "jaguar.title": "A strong cup with a real conservation backstory",
      "jaguar.body": "This Jaguar Honey coffee comes from Beneficio San Diego in Tarrazu, Costa Rica. The Jaguar coffee line has been publicly linked by Volcafe Costa Rica and Genuine Origin to a conservation partnership with Fundazoo supporting jaguar and wild-cat preservation in Costa Rica.",
      "jaguar.note": "The current lot page highlights the San Diego mill and the coffee's profile; the conservation story comes from the broader Jaguar coffee program tied to this wet mill.",
      "proof.title": "A real local brand, already in motion",
      "proof.subtitle": "The brand looks polished because the work behind it is real: local markets, hands-on roasting, and a founder building it batch by batch.",
      "proof.caption1": "Jesus Gomez, Max's older brother, helping run the Millionaire's Roast booth at the Old Capitol Farmers Market in downtown Springfield with coffee bags, sample cups, and the chalkboard menu out front.",
      "proof.caption2": "Maximiliano Gomez, founder of Millionaire's Roast, during a Western Illinois University visit through the Cass County CEO program, one of the many places the group tours while building real businesses.",
      "proof.caption3": "An earlier Old Capitol Farmers Market setup with Max behind a smaller table, showing how the presentation has grown over time while the local, hands-on approach has stayed the same.",
      "about.title": "About Millionaire's Roast",
      "about.subtitle": "A local coffee brand built through the Cass County CEO program and grown through markets, direct orders, and hands-on roasting.",
      "about.story.title": "Meet Maximiliano",
      "about.story.p1": "Millionaire's Roast started through the Cass County CEO program, where Maximiliano Gomez turned a business idea into a real small-batch coffee brand rooted in his community.",
      "about.story.p2": "Each batch begins with carefully sourced green coffee, then gets roasted, ground, packed, and prepared by hand. The goal is not to make coffee feel exclusive. It is to offer something genuinely high quality at a price normal people can come back to.",
      "about.story.p3": "Roasted in Beardstown and regularly sold around Springfield and Central Illinois, the brand is growing through direct sales, local events, pickup, delivery, and simple online shipping for Illinois customers.",
      "about.story.line": "Proudly launched through the Cass County CEO program.",
      "about.story.link": "Learn more about Cass County CEO",
      "about.side.title": "What sets it apart",
      "about.side.li1": "Small-batch roasting with rotating origins",
      "about.side.li2": "Clear roast information that helps people buy confidently",
      "about.side.li3": "Flexible ordering for shipping, pickup, delivery, and K-Cups",
      "about.side.li4": "Built for Central Illinois customers, not just coffee insiders",
      "about.find.title": "Where to find us",
      "about.find.body": "Watch social media for weekly market appearances, pickup coordination, and current availability updates.",
      "faq.title": "Quick answers",
      "faq.subtitle": "Short and useful, so ordering stays easy.",
      "faq.q1": "How do I order?",
      "faq.a1": "Use the local ordering profile for pickup or delivery, and use the shipping payment links for coffee bags or K-Cups.",
      "faq.q2": "Where are you based?",
      "faq.a2": "Millionaire's Roast is roasted in Beardstown and regularly serves Springfield and the wider Central Illinois area.",
      "faq.q3": "What is the current roast like?",
      "faq.a3": "Costa Rica Tarrazu \"San Diego Jaguar\" is a medium roast honey process coffee with chocolate, honey, nectarine, guava, berry, and citrus notes. It is balanced, sweet, and built for everyday drinking.",
      "faq.q4": "How long does a current rotation last?",
      "faq.a4": "We source green coffee in bulk, but harvest timing differs by region and crop cycle. Once a coffee sells through, there is a high chance that specific lot is gone for now, not forever, and the menu keeps rotating based on demand and availability.",
      "contact.title": "Contact & follow",
      "contact.subtitle": "Text is the fastest way to ask a quick question. Email works best for follow-up and custom questions.",
      "contact.text.kicker": "Text Us",
      "contact.text.sub": "Fastest way to ask a quick question",
      "contact.email.kicker": "Email Us",
      "contact.email.sub": "Best for follow-up and custom questions",
      "contact.ig.kicker": "Instagram",
      "contact.ig.sub": "Market updates and current availability",
      "contact.fb.kicker": "Facebook",
      "contact.fb.main": "Millionaire's Roast",
      "contact.fb.sub": "Announcements, events, and local updates",
      "footer.line": "Roasted in Beardstown, serving Springfield and Central Illinois.",
      "sms.body": "Hi! I have a question about Millionaire's Roast."
    },
    es: {
      skip: "Saltar al contenido",
      "brand.tag": "Cafe de especialidad en lotes pequenos",
      "nav.order": "Ordenar",
      "nav.roast": "Tostado actual",
      "nav.about": "Acerca de",
      "nav.faq": "Preguntas",
      "nav.contact": "Contacto",
      "lang.label": "Idioma",
      "hero.kicker": "Tostado en Beardstown, sirviendo a Springfield y al centro de Illinois",
      "hero.title": "Cafe de especialidad con sensacion premium, no con precio premium.",
      "hero.sub": "Millionaire's Roast es una tostaduria artesanal del centro de Illinois enfocada en cafe de especialidad accesible, origenes rotativos y una taza facil para todos los dias.",
      "hero.chip1": "Tostado en lotes pequenos",
      "hero.chip2": "Cafe de especialidad",
      "hero.chip3": "Origenes rotativos",
      "hero.chip4": "Recogida, entrega o envio en Illinois",
      "hero.cta.primary": "Elegir forma de ordenar",
      "hero.cta.secondary": "Ver tostado actual",
      "hero.proof1.title": "Presencia local",
      "hero.proof1.body": "Nos encuentras en mercados locales y eventos comunitarios por todo el centro de Illinois.",
      "hero.proof2.title": "Detalles claros del cafe",
      "hero.proof2.body": "Origen, notas de sabor, mejor uso y precios faciles de revisar.",
      "order.title": "Dos formas simples de ordenar",
      "order.subtitle": "Usa los enlaces de envio para bolsas o K-Cups, o usa el perfil de pedidos para recogida y entrega local.",
      "order.ship.kicker": "Enviar cafe",
      "order.ship.title": "Envios para pedidos en Illinois",
      "order.ship.body": "Elige el enlace de envio que corresponda a lo que quieres recibir: bolsas de cafe o K-Cups.",
      "order.ship.cta1": "Enviar bolsas de cafe",
      "order.ship.cta2": "Enviar K-Cups",
      "order.ship.note": "Ideal para pedidos enviados dentro de Illinois que necesitan un enlace de pago directo.",
      "order.local.kicker": "Recogida / Entrega local",
      "order.local.title": "Recogida y entrega local",
      "order.local.body": "Usa el perfil de pedidos para recogida o entrega en Beardstown, Springfield y zonas cercanas.",
      "order.local.cta": "Ordenar recogida o entrega",
      "order.local.note": "Un solo perfil local para coordinar recogidas y entregas.",
      "order.note.lead": "Necesitas ayuda?",
      "order.note.body": "Usa los enlaces de envio para bolsas de cafe o K-Cups, y usa el perfil de pedidos para recogida o entrega. Si prefieres hacerlo de forma mas personal o quieres ayuda para completar la orden, mandanos un texto.",
      "roast.kicker": "Tostado actual",
      "roast.title": "Costa Rica Tarrazu \"San Diego Jaguar\"",
      "roast.process": "Proceso Honey",
      "roast.body": "Una taza rica y balanceada con dulzor de chocolate, final meloso y notas frutales que mantienen el perfil vivo sin ponerse agresivo.",
      "roast.note": "Ideal para quien quiere un cafe diario balanceado y dulce, con complejidad frutal pero sin aspereza.",
      "roast.spec1.label": "Origen",
      "roast.spec1.value": "Tarrazu, Costa Rica",
      "roast.spec2.label": "Nivel de tueste",
      "roast.spec2.value": "Medio, medio oscuro, oscuro",
      "roast.spec3.label": "Notas de sabor",
      "roast.spec3.value": "Chocolate, miel, nectarina, guayaba, frutos rojos, citricos",
      "roast.spec4.label": "Mejor uso",
      "roast.spec4.value": "Excelente para drip, buen helado, cafe diario facil",
      "roast.spec5.label": "Disponibilidad",
      "roast.spec5.value": "Disponible ahora en grano o molido",
      "roast.spec6.label": "Perfil de taza",
      "roast.spec6.value": "Balanceado, dulce y facil de volver a tomar",
      "roast.price.bag": "Bolsa de 14 oz",
      "roast.price.kcups": "K-Cups",
      "jaguar.kicker": "Por que \"Jaguar\"?",
      "jaguar.title": "Una gran taza con una historia real de conservacion",
      "jaguar.body": "Este cafe Jaguar Honey viene de Beneficio San Diego en Tarrazu, Costa Rica. La linea Jaguar ha sido vinculada publicamente por Volcafe Costa Rica y Genuine Origin con una alianza de conservacion junto a Fundazoo para apoyar la preservacion del jaguar y otros felinos silvestres en Costa Rica.",
      "jaguar.note": "La pagina actual del lote destaca el beneficio San Diego y el perfil del cafe; la historia de conservacion viene del programa Jaguar mas amplio vinculado a este beneficio humedo.",
      "proof.title": "Una marca local real y en movimiento",
      "proof.subtitle": "La marca se ve pulida porque el trabajo detras es real: mercados locales, tostado manual y un fundador construyendo todo lote por lote.",
      "proof.caption1": "Jesus Gomez, hermano mayor de Max, ayudando a atender el puesto de Millionaire's Roast en el Old Capitol Farmers Market en Springfield con bolsas de cafe, vasos de muestra y el menu de pizarra al frente.",
      "proof.caption2": "Maximiliano Gomez, fundador de Millionaire's Roast, durante una visita a Western Illinois University como parte del programa Cass County CEO, uno de los muchos lugares que recorren mientras construyen negocios reales.",
      "proof.caption3": "Una version mas temprana del puesto en el Old Capitol Farmers Market con Max detras de una mesa mas pequena, mostrando como la presentacion ha crecido con el tiempo mientras el enfoque local y practico sigue igual.",
      "about.title": "Sobre Millionaire's Roast",
      "about.subtitle": "Una marca local de cafe creada a traves del programa Cass County CEO y desarrollada por medio de mercados, pedidos directos y tostado manual.",
      "about.story.title": "Conoce a Maximiliano",
      "about.story.p1": "Millionaire's Roast comenzo a traves del programa Cass County CEO, donde Maximiliano Gomez convirtio una idea de negocio en una marca real de cafe artesanal arraigada en su comunidad.",
      "about.story.p2": "Cada lote comienza con cafe verde cuidadosamente seleccionado, luego se tuesta, se muele, se empaca y se prepara a mano. La meta no es hacer que el cafe se sienta exclusivo. La meta es ofrecer algo genuinamente de alta calidad a un precio al que la gente pueda volver.",
      "about.story.p3": "Tostado en Beardstown y vendido regularmente en Springfield y el centro de Illinois, la marca sigue creciendo a traves de ventas directas, eventos locales y el nuevo sistema de pedidos en linea.",
      "about.story.line": "Lanzado con orgullo a traves del programa Cass County CEO.",
      "about.story.link": "Conoce mas sobre Cass County CEO",
      "about.side.title": "Lo que lo distingue",
      "about.side.li1": "Tostado en lotes pequenos con origenes rotativos",
      "about.side.li2": "Informacion clara del cafe que ayuda a comprar con confianza",
      "about.side.li3": "Pedidos flexibles para envio, recogida, entrega y K-Cups",
      "about.side.li4": "Hecho para clientes del centro de Illinois, no solo para conocedores",
      "about.find.title": "Donde encontrarnos",
      "about.find.body": "Sigue nuestras redes para ver apariciones en mercados, coordinacion de recogidas y disponibilidad actual.",
      "faq.title": "Respuestas rapidas",
      "faq.subtitle": "Corto y util, para que ordenar sea sencillo.",
      "faq.q1": "Como ordeno?",
      "faq.a1": "Usa el perfil de pedidos local para recogida o entrega, y usa los enlaces de envio para bolsas de cafe o K-Cups.",
      "faq.q2": "Donde estan ubicados?",
      "faq.a2": "Millionaire's Roast se tuesta en Beardstown y sirve regularmente a Springfield y al centro de Illinois.",
      "faq.q3": "Como es el tostado actual?",
      "faq.a3": "Costa Rica Tarrazu \"San Diego Jaguar\" es un cafe honey de tueste medio con notas de chocolate, miel, nectarina, guayaba, frutos rojos y citricos. Es balanceado, dulce y hecho para tomar todos los dias.",
      "faq.q4": "Cuanto dura una rotacion actual?",
      "faq.a4": "Compramos cafe verde en volumen, pero los tiempos de cosecha cambian segun la region y el ciclo agricola. Cuando un cafe se acaba, hay una alta probabilidad de que ese lote en especifico se haya ido por ahora, no para siempre, y la rotacion sigue cambiando segun la demanda y la disponibilidad.",
      "contact.title": "Contacto y redes",
      "contact.subtitle": "El texto es la forma mas rapida de hacer una pregunta rapida. El correo funciona mejor para seguimiento y preguntas personalizadas.",
      "contact.text.kicker": "Texto",
      "contact.text.sub": "La forma mas rapida de hacer una pregunta rapida",
      "contact.email.kicker": "Correo",
      "contact.email.sub": "Mejor para seguimiento y preguntas personalizadas",
      "contact.ig.kicker": "Instagram",
      "contact.ig.sub": "Actualizaciones de mercados y disponibilidad",
      "contact.fb.kicker": "Facebook",
      "contact.fb.main": "Millionaire's Roast",
      "contact.fb.sub": "Anuncios, eventos y noticias locales",
      "footer.line": "Tostado en Beardstown, sirviendo a Springfield y al centro de Illinois.",
      "sms.body": "Hola! Tengo una pregunta sobre Millionaire's Roast."
    }
  };

  const root = document.documentElement;
  const body = document.body;
  const header = document.querySelector(".site-header");
  const yearEl = document.getElementById("year");
  const heroOrderBtn = document.getElementById("heroOrderBtn");
  const shipBagBtn = document.getElementById("shipBagBtn");
  const shipKCupBtn = document.getElementById("shipKCupBtn");
  const pickupOrderBtn = document.getElementById("pickupOrderBtn");
  const textCard = document.getElementById("textUsCard");
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const brandMark = document.querySelector(".brand-mark");
  const accordion = document.querySelector("[data-accordion]");
  const accordionButtons = accordion ? [...accordion.querySelectorAll(".faq-item")] : [];
  const carousel = document.querySelector("[data-carousel]");
  const langButtons = [...document.querySelectorAll("[data-lang-btn]")];
  const langSwitch = document.querySelector(".lang-switch");
  const i18nBindings = [...document.querySelectorAll("[data-i18n]")]
    .map((element) => [element, element.getAttribute("data-i18n")])
    .filter(([, key]) => Boolean(key));
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

  function setOrderLinks() {
    if (heroOrderBtn) {
      heroOrderBtn.href = "#order";
      heroOrderBtn.removeAttribute("target");
      heroOrderBtn.removeAttribute("rel");
    }

    if (shipBagBtn) {
      shipBagBtn.href = SHIPPING_BAG_LINK;
    }

    if (shipKCupBtn) {
      shipKCupBtn.href = SHIPPING_KCUP_LINK;
    }

    if (pickupOrderBtn) {
      pickupOrderBtn.href = PICKUP_LINK;
    }
  }

  function setSmsLink(lang) {
    const dict = T[lang] || T.en;
    const bodyText = encodeURIComponent(dict["sms.body"] || T.en["sms.body"]);
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

  function applyTranslations(lang) {
    const dict = T[lang] || T.en;

    i18nBindings.forEach(([element, key]) => {
      const value = dict[key];
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

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
      if (!button) return;
      fadeToLanguage(button.getAttribute("data-lang-btn"));
    });

    let initialLang = root.dataset.lang || "en";

    try {
      const savedLang = localStorage.getItem(STORAGE_KEY);
      if (savedLang === "en" || savedLang === "es") {
        initialLang = savedLang;
      }
    } catch {}

    applyTranslations(initialLang);
  }

  applyBrandFallback();
  setOrderLinks();
  setupMobileNav();
  setupAccordion();
  setupCarousel();
  setupLanguageToggle();
})();
