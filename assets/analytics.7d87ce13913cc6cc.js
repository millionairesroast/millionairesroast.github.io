(() => {
  "use strict";

  // This file runs before the shared page script so early events always queue.
  if (window.__mrAnalyticsInitialized) return;
  window.__mrAnalyticsInitialized = true;

  const measurementId = "G-LFTJZC85EC";
  let started = false;
  let frame;
  let idle;
  let fallback;

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
    // A real event takes precedence over waiting for idle time.
    if (arguments[0] === "event") loadAnalytics();
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  function loadAnalytics() {
    if (started) return;
    started = true;
    window.clearTimeout(fallback);
    window.cancelAnimationFrame(frame);
    if (idle !== undefined) window.cancelIdleCallback?.(idle);
    window.removeEventListener("load", afterLoad);
    window.removeEventListener("pointerdown", loadAnalytics, true);
    window.removeEventListener("keydown", loadAnalytics, true);
    window.removeEventListener("pagehide", loadAnalytics);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.mrAnalytics = "";
    document.head.appendChild(script);
  }

  function afterLoad() {
    if (started) return;
    // Let the initial page paint before giving optional analytics idle time.
    frame = window.requestAnimationFrame(() => {
      frame = window.requestAnimationFrame(() => {
        if (started) return;
        if ("requestIdleCallback" in window) {
          idle = window.requestIdleCallback(loadAnalytics, { timeout: 1000 });
        } else {
          loadAnalytics();
        }
      });
    });
  }

  window.addEventListener("pointerdown", loadAnalytics, {
    capture: true,
    passive: true,
  });
  window.addEventListener("keydown", loadAnalytics, { capture: true });
  // Best effort for short visits. Never delay or cancel the user's navigation.
  window.addEventListener("pagehide", loadAnalytics);
  // Also works in background tabs, where animation frames may not run.
  fallback = window.setTimeout(loadAnalytics, 1500);
  if (document.readyState === "complete") afterLoad();
  else window.addEventListener("load", afterLoad, { once: true });
})();
