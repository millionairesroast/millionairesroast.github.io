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

The header and footer use `images/logo-160.webp`; larger logo artwork uses `images/logo.webp`. Keep both sizes. The Discovery Box image receives a high-priority preload only on desktop, while below-the-fold and hidden images use native lazy loading. When replacing shared styles, update the stylesheet version query in both HTML pages together so returning visitors receive the new layout.

## Cacao retail update — October 3, 2026

The homepage now includes released cacao products with their own photographs, prices, English/Spanish descriptions, and direct Square links:

- [8 oz Drinking Chocolate](https://millionaires-roast.square.site/product/8-oz-drinking-chocolate/ZMWO643HKYKFW32RAFJLELUY?cs=true&cst=custom): $16, 60% Ecuadorian cacao and 40% cane sugar, stone-ground for approximately 24 hours. Prepare with hot milk; it can also be used in coffee and baking.
- [12 oz Cacao Nibs](https://millionaires-roast.square.site/product/12-oz-shelled-cacao-beans/FIBSRSAADKSDK24KM3QKAHJF?cs=true&cst=custom): $18, roasted, cracked, and winnowed to remove the shells; 100% unsweetened cacao nibs with nothing added.

The business's [Facebook announcement](https://www.facebook.com/millionairesroast/posts/pfbid0i9YNk5fTWtcos96qs2QsaUkDz7NtpSASoYYeU9Uja6jFrV6HSXLbKNDdRZhYV4fBl) confirms the drinking chocolate process and retail availability at The Cottage, market booths, and online. Both products use Hacienda Victoria cacao from Ecuador. Chocolate-covered coffee beans and chocolate bars remain in development. The wholesale form collects future interest in the released products without offering wholesale supply.

The drinking chocolate photograph comes from the business's Square listing and uses two responsive WebP sizes. The nibs card uses the existing crest as a placeholder because the previous photo shows a package labeled whole shelled beans. All product images are lazy-loaded, and retail links use the existing `shop_click` analytics handling. The old beans photo is no longer referenced by the website.

The October 3 business update confirms complimentary full 8 oz cups of coffee and hot chocolate at the market stand. This wording appears in the mobile hero, cacao section, and local market card in both languages. The inquiry form has one roasted cacao nibs option.

The existing 12 oz/$18 Square item URL still works, but its public title remains "12 oz Shelled Cacao Beans". Rename the Square listing and update its description/photo to cacao nibs; the website retains its verified URL and existing analytics identifiers until the item is updated.

The Illinois Products Thursday market's 2026 season ended September 24, according to the [Illinois Department of Agriculture](https://agr.illinois.gov/consumers/illinoisproductsfarmersmarket/contact-us.html). Local-shopping copy now directs visitors to social channels for current seasonal appearances instead of promising year-round Thursday attendance.

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

Before the October 2 edits, all 29 local files matched the GitHub repository byte for byte at commit `4f14f56f66b52879c488a6dab5a18dff417caa89` on `main`. Differences now consist of the cacao update and its documentation/assets.

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
