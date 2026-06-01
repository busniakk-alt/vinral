# vinral — dark product-discovery site

A fast, single-screen **dark** site. Products sit across the top; the selected one shows big in the center; clicking another **swaps the image, description, price and link smoothly in place** — no scrolling. Supporting info (How we choose, FAQ, legal, contact) opens in **modals**, so the product experience stays on one screen. Built to drop ad/organic traffic straight onto a product.

No `package.json`, no build, no external requests → fast and GDPR-friendly.

| File | What it is | You edit it? |
|---|---|---|
| `index.html` | The whole dark site + design + logic | Rarely |
| `products.js` | **Your data: products, prices, links, site text** | **Yes — this is your control panel** |
| `images/` | Your product images | Add files here |
| `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html` | Hosting/SEO files | No |
| `PUBLISH.md` | Step-by-step publish to GitHub Pages + vinral.com | — |
| `STRATEGY.md` | Your private strategy (git-ignored, stays off the web) | — |

> The `v1-spotlight.html`, `v2-dark.html`, `v3-split.html` files were just design previews. `index.html` is the real site now — you can delete the three `v*` files.

---

## Preview
Double-click `index.html`. Edit `products.js`, save, refresh.

## Edit products (in `products.js`)
The top selector and the center stage are generated automatically from your `PRODUCTS` list. For each product:
- **Price:** `price: "from €18"`
- **Affiliate link:** `link: "https://..."` (opens in a new tab, already `rel="sponsored"`)
- **Image:** `image: "images/neck-fan.jpg"` (empty `""` shows the emoji tile)
- **Button text:** `cta: "Check it out →"`
- **Order:** `priority:` (higher shows first; the first product is what loads on open)
- **Hide:** `status: "paused"`
- Each product also gets its **own accent colour** automatically (drives the glow, price, button).

## Add images
Drop files in `images/`, then set `image: "images/your-file.jpg"`. Use square/4:3 photos, compressed under ~150 KB ([squoosh.app](https://squoosh.app)). Add `images/og-cover.jpg` (1200×630) for the social share preview.

## Edit the site text (also in `products.js` → `SITE`)
- `brandName` — the wordmark (currently "the everyday edit"; change to "vinral" here if you want it to match the domain).
- `metaTitle` / `metaDescription` — browser tab + Google/social.
- `faq`, `trust` (the "How we choose" points), `affiliateDisclosure`, `footer.contactEmail` — these fill the footer **modals** automatically.
- Tagline (top-right): shows a default; add `tagline: "your line"` to `SITE` to change it.

## Point an ad at one product
Link the ad to `https://vinral.com/?p=PRODUCT-ID` (or `#PRODUCT-ID`) and the page opens with that product selected. Use the `id` from `products.js`, e.g. `?p=neck-fan`, `?p=car-shade`.

## Tracking & EU consent
There's a commented pixel slot in `index.html` `<head>` for TikTok/Meta/GA4. In the EU these need a **consent banner** before they run — add one before enabling. CTA clicks are easy to track (each has the product id).

## Publish
See **`PUBLISH.md`** — create the GitHub repo, push, enable Pages, point `vinral.com` DNS.

---
*Want changes — layout, colours, fonts, more/fewer products, or the brand switched to "vinral"? Tell me and I'll update the files.*
