# Finish setting up the wholesale inquiry form

Your Formspree account and form have been created. The website now uses your endpoint, `https://formspree.io/f/xljelzak`, in `wholesale/index.html`. The code is configured; account/email verification, dashboard settings, and live delivery have not been verified. This implementation has not sent any live inquiries.

## 1. Check your existing form

1. [Sign in to Formspree](https://formspree.io/login) and complete account email verification if it is still pending.
2. Open the form you created. A useful name is **Millionaire's Roast — Wholesale Interest**.
3. In its **Integration** section, confirm **Your form's endpoint is** shows `https://formspree.io/f/xljelzak`.

The form is already built and connected in the code. You do not need another form or Formspree's sample HTML. [Formspree's setup instructions](https://help.formspree.io/articles/building-your-form/building-an-html-form)

## 2. Choose where inquiries are delivered

Use **millionairesroast@gmail.com**, or another inbox you monitor. If necessary, add that address under **Account → Linked Emails** and complete its verification email. Open the form's **Workflow** panel and check its **Email** action. Use the action's **… → Settings** to choose the verified destination; if there is no Email action, use **+ Add New → Email**. [Email destination instructions](https://help.formspree.io/articles/form-and-project-settings/changing-a-form-email-address)

The form already sends the visitor's `email` field for replies and a `_subject` field for organization. Keep any automatic reply limited to acknowledging an inquiry. It should not confirm a wholesale order, pricing, delivery, or approval.

## 3. Set spam protection for this implementation

In the form's **Settings → Spam protection**, turn **CAPTCHA off** for the initial setup. This page submits in place using JavaScript and has no CAPTCHA widget or site key. Formspree's hosted CAPTCHA redirect cannot be completed inside this submission flow. Do not enable a CAPTCHA requirement without also implementing its widget on the website. [CAPTCHA settings](https://help.formspree.io/articles/form-and-project-settings/recaptcha-settings)

The hidden `_gotcha` field is already present, and Formspree's own filtering still applies. Keep the hidden field empty when testing; a filled honeypot is treated as spam. Check the dashboard's spam inbox during launch. [Honeypot instructions](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering), [Formspree spam filtering](https://help.formspree.io/articles/troubleshooting/how-to-prevent-spam)

If unwanted submissions become a problem, your existing Cloudflare account can provide a Turnstile widget. That is a follow-up integration: it needs a public site key in the page, a secret stored only in Formspree, and token handling/reset in the script. It is not enabled by this change. [Formspree's Turnstile integration](https://help.formspree.io/articles/form-and-project-settings/protecting-your-forms-with-cloudflare-turnstile)

## 4. Keep the existing website integration

The form in `wholesale/index.html` already contains:

```html
action="https://formspree.io/f/xljelzak"
```

This HTML action is the only endpoint setting. The existing vanilla JavaScript handler in `wholesale.js` submits `FormData` with `fetch` and requests a JSON response. It preserves the site's English/Spanish feedback, accessible validation errors, duplicate-submission protection, and draft contents when receipt cannot be confirmed. No SDK, React, package installation, or replacement handler is required.

Leave `method="POST"`, the field names, and the initial `disabled` submit attribute in place. `wholesale.js` enables the button only after checking the configured endpoint. This prevents accidental submissions if the endpoint or JavaScript is unavailable. Visitors can use the email link when JavaScript is disabled.

The form ID is public and belongs in HTML. Do not put your Formspree account password, API key, email credentials, or a CAPTCHA secret in the website. No Cloudflare DNS change is needed for this basic integration.

## 5. Restrict the production form to your domain

In your **Project → Settings → Restrict to Domain**, enter:

```text
millionairesroast.com
```

Use no protocol, path, or `www`. This includes the bare domain and its subdomains. Submissions from other domains are sent to Formspree's spam inbox. The feature depends on browser referrer information; a `no-referrer` policy can prevent it working as intended. [Domain restriction instructions](https://help.formspree.io/articles/form-and-project-settings/restrict-to-domain)

Local preview can check the page and validation without sending a real inquiry. For live submissions during local development, use a separate Formspree test form/project without the production domain restriction, then restore `https://formspree.io/f/xljelzak` before publishing. A `localhost` submission does not meet the `millionairesroast.com` restriction. Do not remove the production restriction just to make local tests pass. The final receipt test must run on the live domain.

## 6. Publish and verify receipt

After committing these changes to your actual GitHub Pages source repository and completing its deployment:

1. Open `https://millionairesroast.com/wholesale/` and confirm the submit button is enabled.
2. Try submitting empty required fields and an invalid email. They should show clear errors without sending anything.
3. Send one complete inquiry using your own details and label the message **TEST — setup verification**. Check the page's confirmation, the form's **Submissions** inbox, and the destination email. Verify that replying uses the visitor email. If a notification is absent, check both spam folders and the Email action configuration.
4. Switch to Spanish and send a second labeled test. Confirm the page feedback is Spanish and the received `language` value is `es`.
5. On a separate unsent draft, temporarily go offline and submit. The draft should remain intact and the page should say receipt could not be confirmed. Restore your connection. Do not repeatedly resend an uncertain submission without checking receipt.

Only confirmed provider responses clear the fields and send the website's `generate_lead` analytics event. That event includes the form name and language, never the visitor's answers. Dashboard/email receipt still needs the real tests above. Formspree stores the submitted data, so restrict account access and periodically delete inquiries you no longer need.

Keep the page's home-kitchen disclosure and future-interest wording while the business is operating under its current status. Collecting interest is not a commitment to provide wholesale products. Confirm the appropriate approvals before accepting resale orders or changing the page to advertise active wholesale fulfillment.

Formspree documentation checked September 5, 2026. Dashboard labels may evolve.
