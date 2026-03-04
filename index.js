// Millionaire’s Roast — minimal JS (accordion + mobile nav + sms/tel wiring)

(() => {
  // Digits only (US). Example: "12175551234"
  const PHONE_NUMBER = "12174167072";

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Wire up "Text to Order" links
  const textBtn = document.getElementById("textOrderBtn");
  const textCard = document.getElementById("textUsCard");

  function makeSmsLink(num){
    return `sms:${num}?&body=${encodeURIComponent("Hi! I'd like to order coffee from Millionaire’s Roast.")}`;
  }
  function makeTelLink(num){
    return `tel:${num}`;
  }

  const sms = makeSmsLink(PHONE_NUMBER);
  const tel = makeTelLink(PHONE_NUMBER);

  // Prefer SMS by default (best UX on mobile)
  if (textBtn) textBtn.setAttribute("href", sms);
  if (textCard) textCard.setAttribute("href", sms);

  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  function closeMobileNav(){
    if (!toggle || !mobileNav) return;
    toggle.setAttribute("aria-expanded", "false");
    mobileNav.hidden = true;
  }

  if (toggle && mobileNav){
    // Ensure menu starts closed
    mobileNav.hidden = true;
    toggle.setAttribute("aria-expanded", "false");

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      mobileNav.hidden = expanded;
    });

    mobileNav.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (a) closeMobileNav();
    });

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
