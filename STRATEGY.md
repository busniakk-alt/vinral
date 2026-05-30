# Strategy — the everyday edit (MVP)

Short, strict, and built for your exact situation (Slovakia base, EU target, short-form traffic, affiliate-first, €500–1000/month net goal). Assumptions are labelled. No filler.

---

## 1. The diagnosis (read this first — it changes everything)

**Affiliate commissions on cheap viral gadgets are too thin to carry paid ads. That is the single most important fact about this business.**

Grounded numbers from research (May 2026):

- **Amazon EU/Germany Associates:** most physical-product categories pay **1–5%**; Germany electronics ~5%; only luxury beauty hits ~10%. Commissions paid in EUR. Amazon's tracking cookie is also short (~24h), so you only earn on near-immediate purchases.
- **AliExpress affiliate:** typically **4–8%** (fashion 8–10%, electronics/home 3–5%), **capped at ~$50**, 30-day cookie.

**Worked example (assumption, clearly labelled):** €20 average order × 5% commission = **~€1 per sale**. To net ~€750/month at €1/sale you'd need ~750 sales/month. If ~2% of visitors who click out actually buy, that's **~37,500 visitors/month**. Buying that traffic at even €0.10–0.30/click = **€3,750–11,250 in ad spend to earn €750** → a guaranteed loss.

**Conclusions that drive the whole plan:**

1. **Acquisition for v1 must be organic short-form (free), not paid ads.** Paid ads come later, only on a proven winner, and even then mostly to feed an *owned-margin* offer.
2. **Affiliate is the validation layer, not the profit engine.** Its job is to prove which products people actually click and buy — cheaply.
3. **Real €500–1000 net almost certainly comes from owning the margin on 1–2 proven winners** (buy ~€4, sell ~€19 = ~€12 margin) — i.e. the later Shopify/own-bundle step. That's exactly your stated long-term model, and it's the right one.
4. Where you *do* use affiliate, **bias toward higher-commission / higher-intent items** (perfume discovery sets, grooming, brand programs on networks like Awin which often pay 8–15%) to lift €/sale.

This page is the cheap, fast machine for finding those winners.

---

## 2. Site structure recommendation

**Build: one fast single-page site with anchored category sections + deep links. Not multipage yet.**

Why this beats the alternatives at your stage:

- **Speed & maintenance:** one HTML file, zero build step, loads instantly on mobile, one place to edit.
- **Ad-to-page match without extra pages:** an ad links to `/#summer-cooling`, `/#neck-fan`, or `/?featured=neck-fan` and lands the user exactly on the right thing (already built in).
- **Cheap to test:** add/remove/pause products by editing one file; no rebuilds.
- **Clean migration path:** when a product wins, you spin out a *dedicated page* (better SEO + ad match) or a Shopify store for that one product, and keep this page as the discovery hub.

**Rejected for now:** separate site per niche (8× the maintenance, splits your tiny effort), one-product-at-a-time (you lose cross-sell and the "discovery" angle), full multipage (premature — build pages only for winners).

---

## 3. Product ranking (my assessment — scores are judgement, not measured data)

Scored 1–10 (10 = best) on the factors that actually matter for your model. **Demo** = how easily it stops the scroll on video. **Money** = commission × likely order value × buyer intent. **Unsaturated** = how much room is left (higher = less crowded). **Evergreen** = still works after summer. **Ease** = sourcing content + low compatibility/returns friction.

| Product | Demo | Timely (now) | Money | Unsaturated | Evergreen | Ease | **Avg** | Tier |
|---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--|
| Car windshield umbrella | 8 | 9 | 6 | 7 | 4 | 7 | **6.8** | A |
| Perfume discovery set | 5 | 5 | 8 | 7 | 8 | 6 | **6.5** | A |
| Hair texture trio | 8 | 5 | 6 | 6 | 8 | 6 | **6.5** | A |
| Misting handheld fan | 9 | 9 | 4 | 4 | 3 | 8 | **6.2** | B |
| Sunset/galaxy lamp | 9 | 5 | 5 | 3 | 8 | 7 | **6.2** | B |
| Portable neck fan | 8 | 9 | 4 | 3 | 3 | 8 | **5.8** | B |
| Cooling towel | 7 | 8 | 3 | 5 | 4 | 8 | **5.8** | C |
| Viral phone case | 7 | 5 | 5 | 2 | 8 | 4 | **5.2** | C |

Reading it: **car shade, perfume, hair trio** are the strongest *long-term backbone* (better margin/durability). The **fans/towel** are weak on margin and saturation but unbeatable on *in-season demo content and ease* — perfect for cheap, fast learning right now. **Phone case** is last: brutal saturation plus model-compatibility and returns friction.

---

## 4. First 3 to test (and why)

**Test now (it's late May — the summer window is open and it's your unfair advantage):**

1. **Car windshield umbrella** — best overall score, clearest pain, satisfying before/after demo, *better margin than the fans*, and less saturated.
2. **Misting handheld fan** — the single best stop-the-scroll demo (visible mist on camera), dead-easy content, in-season.
3. **Portable neck fan** — broadest audience, easiest POV content ("surviving the commute"), in-season volume.

These are set to `status: "testing"` in `products.js`.

**Honest caveat:** the two fans are *learning bets*, not profit bets — their commissions are tiny. Their job is to teach you, this month and cheaply, which hooks and formats convert. In parallel, treat **perfume set + hair trio + car shade** as your **profit-backbone candidates** (better €/sale) to scale into from week 2.

---

## 5. Testing rules (don't waste money)

**Channel for the test:** organic short-form first (TikTok + Reels + Shorts). Budget = your time + ~€0 media. Optionally €5/day per product *only* once a video already performs organically.

**Volume:** 3–5 short videos per product over 5–7 days. Different hook each time; same product.

**What's a real signal vs vanity:**

| Real signal | Vanity |
|---|---|
| Outbound clicks to the product link (CTR on the CTA) | Raw views |
| Saves + shares (intent) | Likes |
| Watch-through > ~50% | Follower count |
| Actual affiliate clicks/sales in the dashboard | Comments volume alone |

**Decisions:**

- **Kill** a product if after ~5 posts it gets views but **<1% click out** and no saves/shares. The offer/hook isn't landing.
- **Iterate (change the hook, keep the product)** if one video clearly out-performs others — double down on that angle, change headline/opening 2 seconds, not the product.
- **Scale** a product if it produces *repeatable* outbound clicks across multiple videos. Then: (a) consider €5–10/day paid behind the best-performing organic video, (b) give it a dedicated landing section/page, (c) evaluate owning the margin (Shopify/own bundle).
- **Build a dedicated page** when one product alone drives most of your clicks.
- **Move to Shopify** only when a winner shows *consistent* demand and the affiliate margin is the bottleneck — i.e. you're leaving real money on the table by not owning the sale.

---

## 6. Brand name

Default in the build is **"the everyday edit"** (premium-ish, EU-neutral, honest, evergreen, easy for non-native speakers — not tied to summer, not scammy). Change it in `products.js` → `SITE.brandName` anytime.

Shortlist if you want alternatives: *the everyday edit · keptlist · worth it finds · the good list · trywell · finds & co · the daily edit · useful things*. Check domain + that it isn't a real brand before committing.

---

## 7. 7-day execution plan (compressed)

- **Day 1 — Set up.** Edit `products.js`: confirm brand, prices, and paste real affiliate links for the 3 test products (sign up: Amazon EU Associates + AliExpress/Awin). Deploy to Netlify (5 min). Buy a cheap domain (optional).
- **Day 2 — Research content.** For each of the 3 products, watch the top 10 viral videos in EU. Note the hook patterns that work. Don't copy — note structure. Add real images to `/images`.
- **Day 3 — Film batch 1.** Shoot 3 short videos per product (9 total). Phone only. Lead with the problem in the first 2 seconds. Show, don't tell. (See `STRATEGY` angles + each product's `adAngle` in `products.js`.)
- **Day 4 — Publish + link.** Post across TikTok/Reels/Shorts. Bio link → the matching deep link (`/#car-shade` etc.). Set up TikTok/Meta pixel *code* but keep it off until you add a consent banner.
- **Day 5 — Film batch 2 + first read.** Shoot 6 more videos using your best-performing hook so far. Check outbound clicks, saves, watch-through.
- **Day 6 — Cut & double down.** Kill the weakest product/hook. Make 3 more videos of the best one. Optionally put €5/day behind the single best organic video.
- **Day 7 — Decision.** Pick the **one** product with the best *outbound click* signal. Plan week 2 around it: dedicated section, more content, and start evaluating owned-margin economics. Add perfume/hair as backbone tests.

**End-of-week decision:** which 1–2 products earn continued effort (real click signal), and which are killed. Nothing scales without a click signal — not views.

---

## 8. What not to do

- Don't run paid ads on cold cheap-gadget affiliate links expecting profit (the math in §1).
- Don't add fake reviews, fake countdowns, or "free shipping" you don't control. The build deliberately avoids all of these.
- Don't make medical/transformation claims (no heatstroke prevention, no hair regrowth, no "this scent attracts people"). Compliant wording is baked into the copy.
- Don't build Shopify yet. Validate first.
- Don't spread across all 8 products at once. Three, in-season, this week.

---

### Sources (affiliate economics + trend validation)

- [Amazon Affiliate Commission Rates by Category 2026 — AzonPress](https://azonpress.com/amazon-affiliate-commission-rates/)
- [Amazon Associates Commission Rates 2026 — EarnifyHub](https://earnifyhub.com/blog/affiliate/amazon-associates-commission-rates-all-categories)
- [Amazon Associates Germany Guide — Geniuslink](https://geniuslink.com/blog/amazon-associates-germany/)
- [AliExpress Affiliate Program Review 2026 — Diggity Marketing](https://diggitymarketing.com/best-affiliate-programs/aliexpress/)
- [AliExpress Affiliate Program Details 2026 — Lasso](https://getlasso.co/affiliate/aliexpress/)
- [Best 20 TikTok Viral Products 2026 — CJ Dropshipping](https://cjdropshipping.com/blogs/winning-products/TikTok-Viral-products-2026)

*Commission percentages above are from these sources; the worked-example traffic/sales numbers are my labelled assumptions for illustration, not measured data.*
