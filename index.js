// Millionaire’s Roast — minimal JS (accordion + mobile nav + contact placeholders)

(() => {
  // ====== EDIT THIS LATER ======
  // Replace with real US number (digits only). Example: "12175551234"
  const PHONE_NUMBER = "1XXXXXXXXXX";
  // ============================

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Wire up placeholder "Text to Order" links safely
  const textBtn = document.getElementById("textOrderBtn");
  const textCard = document.getElementById("textUsCard");

  const hasRealPhone = /^\d{10,15}$/.test(PHONE_NUMBER) && !PHONE_NUMBER.includes("X");

  function makeSmsLink(num){
    // sms: works on most mobile; on desktop it may do nothing (that's fine)
    return `sms:${num}?&body=${encodeURIComponent("Hi! I'd like to order coffee from Millionaire’s Roast.")}`;
  }
  function makeTelLink(num){
    return `tel:${num}`;
  }

  function setPlaceholder(el){
    if (!el) return;
    el.setAttribute("href", "mailto:millionairesroast@gmail.com?subject=Coffee%20Order%20%7C%20Millionaire%E2%80%99s%20Roast&body=Text%20ordering%20is%20coming%20soon.%20For%20now%2C%20please%20email%20us%20your%20order.");
    el.setAttribute("title", "Text ordering: phone number not set yet. Email for now.");
  }

  function setPhoneLinks(){
    if (hasRealPhone){
      const sms = makeSmsLink(PHONE_NUMBER);
      const tel = makeTelLink(PHONE_NUMBER);

      // Prefer SMS for the hero button, but fall back to tel on desktop click if desired later
      if (textBtn) {
        textBtn.setAttribute("href", sms);
        textBtn.removeAttribute("title");
      }
      if (textCard) {
        textCard.setAttribute("href", sms);
        textCard.removeAttribute("title");
      }
    } else {
      setPlaceholder(textBtn);
      setPlaceholder(textCard);
    }
  }
  setPhoneLinks();

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  function closeMobileNav(){
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }

  if (toggle && mobileNav){
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });

    // Close menu when clicking a link
    mobileNav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeMobileNav();
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileNav();
    });
  }

  // Accordion
  const acc = document.querySelector("[data-accordion]");
  if (acc){
    const items = Array.from(acc.querySelectorAll(".faq-item"));

    items.forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const panel = btn.nextElementSibling;

        // Collapse all (keeps it tidy)
        items.forEach((b) => {
          b.setAttribute("aria-expanded", "false");
          const p = b.nextElementSibling;
          if (p) p.hidden = true;
        });

        // Toggle this one
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel) panel.hidden = expanded;
      });
    });
  }
})();
