# the everyday edit — MVP landing page

A fast, mobile-first product-discovery page for ad/organic traffic. No frameworks, no build step, no database. Three files:

| File | What it is | Do you edit it? |
|---|---|---|
| `index.html` | The whole page + design + logic | Rarely (only design changes) |
| `products.js` | **All your text, prices, links, products** | **Yes — this is your control panel** |
| `README.md` | This guide | No |

There are **no external requests** (no Google Fonts, no CDN, no trackers by default) → it loads fast and is GDPR-friendly out of the box.

---

## 1. Preview it on your computer

Double-click `index.html`. It opens in your browser. That's the whole site. Edit `products.js`, save, refresh the tab to see changes.

---

## 2. Edit products, prices, links, CTAs (the part you'll use daily)

Open `products.js`. Everything is plain text between quotes. Change what's inside the quotes, keep the quotes and commas.

Each product looks like this:

```js
{
  id: "neck-fan",                 // unique, lowercase, no spaces (used in ad links)
  productName: "Portable neck fan",
  category: "summer-cooling",     // must match a category id (see top of file)
  emoji: "🌀",                    // shows on the card until you add a real image
  shortHook: "Hands-free cooling that sits on your neck.",
  painPoint: "Commutes, queues and walks get brutal in summer heat.",
  mainBenefit: "A wearable, hands-free fan ...",
  bestFor: "Commuters, travel, festivals, no-AC days",
  price: "from €18",              // a guide only — say "from €X"
  link: "#REPLACE-WITH-AFFILIATE-LINK",   // <-- paste your real affiliate URL here
  image: "",                      // "" = emoji tile. Or "images/neck-fan.jpg"
  video: "",                      // optional, see below
  badge: "Summer pick",           // small tag on the card
  cta: "Check it out →",          // the button text
  status: "testing",              // "active" = shown | "testing" = shown + tag | "paused" = hidden
  priority: 90,                   // higher number = appears earlier
  ...ops fields (riskNote, adAngle, audience, countries) are just notes for you
}
```

**Common edits**

- **Change a price:** edit `price: "from €18"`.
- **Add your affiliate link:** replace `link: "#REPLACE-WITH-AFFILIATE-LINK"` with your URL, e.g. `link: "https://amzn.to/xxxx"`. (Affiliate links open in a new tab and already use `rel="sponsored"`.)
- **Change a button:** edit `cta:`.
- **Hide a product:** set `status: "paused"`.
- **Reorder products:** change `priority:` (highest shows first; the top product also becomes the big "Featured" block).
- **Edit site text** (offer bar, hero, FAQ, footer, brand name): scroll to the `SITE = { ... }` block at the top of `products.js`.
- **Rename the brand:** change `brandName:` in `SITE`.

> Keep the structure: every line ends with a comma, every text value is wrapped in `"quotes"`. If the page goes blank, you probably deleted a quote or comma — undo your last change.

---

## 3. Add real images

1. Put image files in the `images/` folder (create it next to `index.html` if it isn't there).
2. In `products.js`, set the path, e.g. `image: "images/neck-fan.jpg"`.
3. Use **square or 4:3** images, compressed to **under ~150 KB** each (use [squoosh.app](https://squoosh.app)). `.webp` or `.jpg`. This keeps the page fast.

A social preview image: save one as `images/og-cover.jpg` (1200×630). It's already referenced in `index.html`.

(Optional video: the `video:` field is reserved for later. The MVP shows images; ask me to wire in autoplay video clips when you have them.)

---

## 4. Point each ad at the right spot (ad-to-page match)

Your page supports deep links so an ad lands exactly where it should:

| Ad is about… | Link the ad to… | What happens |
|---|---|---|
| A category | `yoursite.com/#summer-cooling` | Scrolls straight to that category |
| One product | `yoursite.com/#neck-fan` | Scrolls to that card and highlights it |
| One product (hero) | `yoursite.com/?featured=neck-fan` | Puts that product in the big featured block at the top |

Use the product `id` (from `products.js`) in the link. **Always send an ad to its matching section, never just the homepage.**

---

## 5. Email capture (optional)

The email box currently just says "thanks" without storing anything. To actually collect emails:

1. Make a free form at [formspree.io](https://formspree.io) (or use Mailchimp/Brevo).
2. In `products.js` → `SITE.email.action`, paste the form URL, e.g. `action: "https://formspree.io/f/abcxyz"`.

To remove the email box entirely: set `SITE.email.enabled` to `false`.

---

## 6. Tracking & EU consent (read before running paid ads)

There's a clearly-marked slot in `index.html` `<head>` for the **TikTok Pixel / Meta Pixel / GA4**.

**Important:** in the EU, advertising/analytics pixels legally require **user consent**. Before enabling any pixel:

1. Add a consent banner — a free, lightweight option is [cookieconsent (Osano)](https://www.osano.com/cookieconsent) or [Klaro](https://klaro.org).
2. Only load the pixel after the user accepts.

Every CTA button has a `data-pid` attribute, and there's a commented click-hook at the bottom of the script so you can fire a "click" event per product once your pixel is live.

---

## 7. SEO / meta basics

In `index.html` `<head>` (or via `SITE.metaTitle` / `SITE.metaDescription` in `products.js`):

- `metaTitle` — ~55 characters, includes what the page is.
- `metaDescription` — ~150 characters, the pitch.
- `og:image` — the `images/og-cover.jpg` preview for when the link is shared.

For ads this matters less than for organic/Google, but it's set up correctly for later.

---

## 8. Deploy it (free, ~5 minutes)

Pick **one**. All three are free, fast, give HTTPS, and let you add a custom domain. **Netlify Drop is the easiest.**

### Option A — Netlify (drag & drop, no account-juggling)
1. Go to **app.netlify.com/drop**.
2. Drag this whole folder (the one with `index.html`) onto the page.
3. Done — you get a live URL like `random-name.netlify.app`.
4. To update: drag the folder again, or connect a GitHub repo for auto-deploys.
5. Custom domain: Site settings → Domain management → add your domain.

### Option B — Cloudflare Pages
1. Create a free Cloudflare account → **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Upload the folder, name the project, deploy. You get `project.pages.dev`.
3. Or connect a GitHub repo: build command = *(none)*, output directory = `/` (root). It's a static site.
4. Custom domain: Pages project → Custom domains.

### Option C — Vercel
1. Easiest via GitHub: push these files to a repo, then on **vercel.com** → **Add New → Project** → import the repo.
2. Framework preset = **Other**, build command = *(none)*, output dir = *(leave default / root)*.
3. Deploy → `project.vercel.app`. Add a domain in Project → Settings → Domains.
4. CLI alternative: `npm i -g vercel` then run `vercel` in this folder.

> It's a plain static site, so there is **no build step** on any platform. If a host asks for a build command, leave it empty and set the output/publish directory to the project root.

### Custom domain
Buy a domain (Namecheap, Cloudflare, Porkbun ~€8–12/yr). A short, brandable `.com`, `.eu`, or `.store` works. Point it at your host using their domain instructions (DNS records they give you).

---

## 9. Updating over time

- Daily/weekly: edit `products.js` (prices, links, add/remove products, flip `status`), then redeploy (drag the folder again, or `git push` if connected).
- Kill a loser: `status: "paused"`. Promote a winner: raise its `priority`.
- Add a category: add an entry to `SITE.categories`, then give products that `category` id.

---

## 10. When a product wins → moving to Shopify later

Only when one product clearly sells (see `STRATEGY.md` → testing rules). Then:

1. Keep this page as the top-of-funnel **discovery** site.
2. Build a single Shopify (or even a one-product) store **only for the winner**, with real checkout/shipping.
3. Swap that product's `link:` in `products.js` from the affiliate URL to your own store URL.
4. Everything else stays affiliate. You only take on inventory/returns for proven winners.

Ask me when you reach this point and I'll plan the migration.

---

*Questions or changes? Just tell me what you want different — design, sections, copy, more products — and I'll update the files.*
