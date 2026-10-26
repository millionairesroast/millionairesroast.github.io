(() => {
  "use strict";

  const form = document.getElementById("wholesale-form");
  const status = document.getElementById("form-status");
  const submit = form?.querySelector('button[type="submit"]');
  if (!form || !status || !submit) return;

  const submitLabel = submit.querySelector("[data-submit-label]") || submit;
  const fields = Array.from(form.elements).filter((field) =>
    ["INPUT", "SELECT", "TEXTAREA"].includes(field.tagName) &&
    field.type !== "hidden" && field.name !== "_gotcha",
  );
  const errors = new Map();
  const errorElements = new Map();
  const originalDisabled = new Map();
  let language = document.documentElement.lang === "es" ? "es" : "en";
  let state = "idle";
  let pending = false;

  const copy = {
    en: {
      submit: "Send wholesale inquiry",
      sending: "Sending your inquiry…",
      setup: "Online inquiries are not available yet. Please email us to share your interest.",
      invalid: "Please correct the highlighted fields before sending your inquiry.",
      required: "Please complete this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a complete website address, starting with https://.",
      length: "Please shorten your answer to the allowed length.",
      field: "Please check this answer and try again.",
      success: "Thank you. Your interest has been received for review. This inquiry does not place an order or confirm a partnership.",
      rejected: "Your inquiry was not accepted. Your details are still here. Please check your answers or email us for help.",
      rate: "The inquiry service is busy. Your details are still here. Please try again later or email us.",
      uncertain: "We could not confirm receipt. Your details are still here. Please email us before resubmitting to avoid a duplicate.",
      emailUs: "Email Millionaire’s Roast",
    },
    es: {
      submit: "Enviar consulta de mayoreo",
      sending: "Enviando tu consulta…",
      setup: "Las consultas en línea aún no están disponibles. Escríbenos por correo para compartir tu interés.",
      invalid: "Corrige los campos marcados antes de enviar tu consulta.",
      required: "Completa este campo.",
      email: "Ingresa una dirección de correo electrónico válida.",
      url: "Ingresa una dirección web completa que comience con https://.",
      length: "Acorta tu respuesta al límite permitido.",
      field: "Revisa esta respuesta e inténtalo de nuevo.",
      success: "Gracias. Recibimos tu interés para revisarlo. Esta consulta no realiza un pedido ni confirma una colaboración.",
      rejected: "Tu consulta no fue aceptada. Tus datos siguen aquí. Revisa tus respuestas o escríbenos por correo para recibir ayuda.",
      rate: "El servicio de consultas está ocupado. Tus datos siguen aquí. Inténtalo más tarde o escríbenos por correo.",
      uncertain: "No pudimos confirmar la recepción. Tus datos siguen aquí. Escríbenos por correo antes de volver a enviar para evitar duplicados.",
      emailUs: "Escribir a Millionaire’s Roast",
    },
  };

  // The form action is the only endpoint setting. Placeholder or non-Formspree
  // URLs must never receive visitors' information.
  function configuredEndpoint() {
    const action = form.getAttribute("action") || "";
    const id = action.match(/^https:\/\/formspree\.io\/f\/([a-z0-9]+)\/?$/i)?.[1];
    if (!id || /^(yourformid|placeholder|example|replace|formid)$/i.test(id)) return null;
    return action;
  }

  function updateLanguageField() {
    const field = form.elements.namedItem("language");
    if (field) field.value = language;
  }

  function render() {
    submitLabel.textContent = copy[language][pending ? "sending" : "submit"];
    status.textContent = state === "idle" ? "" : copy[language][state];
    status.dataset.state = state;
    if (["setup", "rejected", "rate", "uncertain"].includes(state)) {
      const link = document.createElement("a");
      link.href = "mailto:millionairesroast@gmail.com?subject=Wholesale%20interest";
      link.textContent = copy[language].emailUs;
      status.append(" ", link);
    }
    errors.forEach((key, field) => {
      errorElements.get(field).textContent = copy[language][key];
    });
    updateLanguageField();
  }

  function setState(nextState, focus = false) {
    state = nextState;
    render();
    if (focus) status.focus();
  }

  function clearError(field) {
    errors.delete(field);
    field.removeAttribute("aria-invalid");
    const error = errorElements.get(field);
    if (error) {
      error.textContent = "";
      error.hidden = true;
    }
  }

  function showError(field, key) {
    let error = errorElements.get(field);
    if (!error) {
      error = document.createElement("span");
      error.id = `${field.id || field.name}-error`;
      error.className = "field-error";
      field.insertAdjacentElement("afterend", error);
      const descriptions = new Set((field.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean));
      descriptions.add(error.id);
      field.setAttribute("aria-describedby", Array.from(descriptions).join(" "));
      errorElements.set(field, error);
    }
    errors.set(field, key);
    field.setAttribute("aria-invalid", "true");
    error.textContent = copy[language][key];
    error.hidden = false;
  }

  function validationKey(field) {
    if (field.disabled) return null;
    if (field.validity.valueMissing || (field.required && !field.value.trim())) return "required";
    if (field.validity.typeMismatch) return field.type === "email" ? "email" : "url";
    if (field.validity.tooLong) return "length";
    return field.validity.valid ? null : "field";
  }

  function validate() {
    fields.forEach((field) => {
      clearError(field);
      const key = validationKey(field);
      if (key) showError(field, key);
    });
    if (!errors.size) return true;
    setState("invalid");
    errors.keys().next().value.focus();
    return false;
  }

  function setBusy(busy) {
    pending = busy;
    form.setAttribute("aria-busy", String(busy));
    submit.disabled = busy || !configuredEndpoint();
    fields.forEach((field) => {
      if (busy) {
        originalDisabled.set(field, field.disabled);
        field.disabled = true;
      } else {
        field.disabled = originalDisabled.get(field) || false;
      }
    });
    if (!busy) originalDisabled.clear();
    render();
  }

  function serverFieldErrors(serverErrors) {
    if (!Array.isArray(serverErrors)) return;
    serverErrors.forEach((error) => {
      const field = fields.find((candidate) => candidate.name === error?.field);
      if (!field) return;
      const code = typeof error.code === "string" ? error.code.toLowerCase() : "";
      const key = code.includes("required") ? "required"
        : code.includes("email") ? "email"
        : code.includes("length") ? "length" : "field";
      showError(field, key);
    });
  }

  fields.forEach((field) => {
    const changed = () => {
      clearError(field);
      if (["success", "invalid"].includes(state) && !errors.size) setState("idle");
    };
    field.addEventListener("input", changed);
    field.addEventListener("change", changed);
  });

  document.addEventListener("mr:languagechange", (event) => {
    language = event.detail?.language === "es" ? "es" : "en";
    render();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (pending) return;
    const endpoint = configuredEndpoint();
    if (!endpoint) {
      submit.disabled = true;
      setState("setup", true);
      return;
    }
    if (!validate()) return;

    updateLanguageField();
    const payload = new FormData(form);
    // A populated honeypot is not a confirmed inquiry: do not fake success.
    if (String(payload.get("_gotcha") || "").trim()) {
      setState("rejected", true);
      return;
    }
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 20000);
    let outcome = "uncertain";
    setBusy(true);
    setState("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: payload,
        headers: { Accept: "application/json" },
        signal: controller.signal,
        credentials: "omit",
        redirect: "error",
      });
      const data = await response.json().catch(() => null);
      const hasErrors = Array.isArray(data?.errors) && data.errors.length > 0;
      // Formspree's current client recognizes { next: string } as receipt;
      // existing endpoints can also explicitly acknowledge with { ok: true }.
      // We never navigate to the returned URL or treat HTTP 200 alone as receipt.
      const confirmed = data?.ok === true || typeof data?.next === "string";
      if (response.ok && confirmed && data?.ok !== false && !hasErrors && !data.error) {
        outcome = "success";
      } else if (response.status === 429) {
        outcome = "rate";
      } else if ((response.status >= 400 && response.status < 500) || hasErrors || data?.ok === false) {
        serverFieldErrors(data?.errors);
        outcome = errors.size ? "invalid" : "rejected";
      }
      // An unexpected body, a server failure, a redirect, or a dropped connection
      // may occur after receipt. Preserve the inquiry and report uncertainty.
    } catch {
      outcome = "uncertain";
    } finally {
      window.clearTimeout(timeout);
      setBusy(false);
    }

    if (outcome === "success") {
      form.reset();
      fields.forEach(clearError);
      // Only a confirmed response records a conversion. Never include form data.
      try {
        window.gtag?.("event", "generate_lead", {
          form_name: "wholesale_interest",
          language,
        });
      } catch {
        // Analytics availability must not affect the confirmed receipt.
      }
    }
    setState(outcome, outcome !== "invalid");
    if (outcome === "invalid") errors.keys().next().value.focus();
  });

  form.noValidate = true;
  submit.disabled = !configuredEndpoint();
  setState(submit.disabled ? "setup" : "idle");
})();
