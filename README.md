# Millionaire’s Roast website

A static HTML, CSS, and JavaScript website, with retail shopping handled by Square and future wholesale inquiries handled by Formspree.

## Pages and code

- `index.html`: homepage, English/Spanish copy, and retail links.
- `wholesale/index.html`: wholesale interest page and the single Formspree endpoint setting.
- `styles.css`: shared styles and responsive layouts.
- `index.js`: shared navigation, language switching, FAQ animation, and shopping analytics.
- `wholesale.js`: validation, submission, bilingual status messages, and confirmed lead analytics.
- `images/`: images used by the site, including responsive WebP variants and the social sharing preview.
- `CNAME`, `robots.txt`, and `sitemap.xml`: domain and search discovery files.

The shared navigation and footer appear in both HTML pages; keep both in sync when editing links. Translation text belongs in matching `data-en` and `data-es` attributes. Dynamic form status text lives in `wholesale.js`.

## Page navigation

Both pages opt into native cross-document view transitions through the shared stylesheet. Navigation between the homepage and wholesale page uses a short fade and subtle content movement while keeping the header steady. Browsers without native support use a brief JavaScript animation when available. Reduced-motion users keep immediate navigation. Same-page section links keep their existing smooth scrolling.

The Wholesale links on the wholesale page itself point to its main content, so choosing the current page scrolls up without reloading or clearing a draft inquiry. Retail links to Square continue to use normal external navigation.

## Formspree configuration

The Formspree account and form have been created, and `wholesale/index.html` now uses `https://formspree.io/f/xljelzak`. Follow [FORMSPREE-SETUP.md](FORMSPREE-SETUP.md) to finish checking email verification, the notification destination, spam protection, and the production domain restriction. Dashboard settings and live dashboard/email receipt have not been verified.

The existing vanilla JavaScript `fetch` handler in `wholesale.js` provides bilingual feedback, validation, and submission handling. No SDK or React integration is needed. The form's HTML action is its single endpoint setting; the script enables submission only when that endpoint passes validation. Keep this guard and require provider confirmation before displaying success.

The page collects interest in potential future partnerships. It does not accept wholesale orders or promise supply for resale while the business operates from a home kitchen. Review the page’s wording when the required business approvals and wholesale terms are established.

## Preview

Serve this directory with a static HTTP server, for example:

```sh
python -m http.server 4183 --bind 127.0.0.1
```

Open `http://127.0.0.1:4183/` or `http://127.0.0.1:4183/wholesale/`. There is no build step or package installation.

## Publish

This supplied folder is not currently a Git checkout; its empty `.git` placeholder was removed during directory cleanup. The updates have not been committed, pushed, or deployed.

1. Copy the updated HTML, CSS, JavaScript, `wholesale/`, `images/`, favicon, CNAME, robots, and sitemap files into the actual repository’s GitHub Pages publishing directory. Preserve its Git history and deployment settings.
2. Keep the configured Formspree endpoint, `https://formspree.io/f/xljelzak`, and complete the dashboard checks in [FORMSPREE-SETUP.md](FORMSPREE-SETUP.md).
3. Review and commit the changes in that actual repository, then push through the existing deployment workflow.
4. Verify the homepage, wholesale route, images, mobile menu, and both languages on the live domain. Test Formspree receipt in both its dashboard and the notification inbox.

GitHub Pages has restrictions on commercial hosting. Confirm the hosting arrangement’s suitability before publishing the expansion: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits . Changing static hosts would not require replacing this code or abandoning Git.

## Verification performed

- JavaScript syntax checks and local HTML link/asset/accessibility-reference checks.
- Desktop and mobile browser review in English and Spanish, including landscape menu scrolling and the dropdown route to Wholesale.
- Static checks cover local links/assets, translation pairs, image descriptions, control/ARIA references, HTML nesting, JSON-LD, and the sitemap.
- Form validation, success, and connection-failure checks with a local mock that sends nothing to Formspree.
- Additional isolated checks for provider errors, duplicate submissions, timeout, honeypot, and language changes.

The real Formspree endpoint is configured. A live dashboard/email receipt test is still required; no live inquiry has been sent during implementation. Local mock tests cannot verify account activation, spam settings, or email delivery.
