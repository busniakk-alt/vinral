/* ============================================================================
   THE EVERYDAY EDIT  —  SITE DATA  (THIS IS THE ONLY FILE YOU NEED TO EDIT)
   ----------------------------------------------------------------------------
   • Change text, prices, affiliate links, images and CTAs below.
   • Do NOT edit index.html for normal updates — everything lives here.
   • After editing: save this file, refresh the page. That's it.

   QUICK EDITS:
   - Price:            change  price: "from €19"
   - Affiliate link:   change  link:  "https://..."     (paste your real link)
   - Image:            set     image: "images/neck-fan.jpg"   (drop file in /images)
   - Hide a product:   set     status: "paused"
   - Reorder products: change  priority: (higher number = shown first)
   - Change a CTA:     change  cta:   "Check it out →"

   Status values:  "active"  = shown   |  "testing" = shown + small tag
                   "paused"  = hidden
============================================================================ */

const SITE = {
  brandName: "the everyday edit",
  // Used in <title> and search/social previews — keep it short.
  metaTitle: "the everyday edit — useful viral finds, only the ones that are worth it",
  metaDescription:
    "We test the viral products blowing up on TikTok & Reels, keep the ones that are actually useful.",

  // Top scrolling bar. Keep it HONEST — no fake countdowns, no fake free shipping.
  offerBar: [
    "Curated viral finds — only the ones actually worth it",
    "Updated daily · independent picks",
    "Available across the EU",
  ],

  nav: [
    { label: "summer cooling", href: "#summer-cooling" },
    { label: "grooming & scent", href: "#grooming-scent" },
    { label: "phone & room", href: "#phone-room" },
    { label: "car fixes", href: "#car-fixes" },
    { label: "how we choose", href: "#how" },
  ],

  hero: {
    eyebrow: "VIRAL FINDS, MINUS THE JUNK",
    headline: "The useful stuff you keep seeing — in one place.",
    sub: "We test the products blowing up on TikTok & Reels, keep the ones that are actually good.",
    ctaPrimary: "See this summer's picks →",
    ctaPrimaryHref: "#summer-cooling",
    ctaSecondary: "How we choose",
    ctaSecondaryHref: "#how",
  },

  // Category chips (quick-jump) + section headers. id must match a product's category.
  categories: [
    { id: "summer-cooling", chip: "🔥 Beat the heat", label: "Summer cooling",
      blurb: "Wearable fans, misting fans and cooling gear for heatwaves, commutes and no-AC days." },
    { id: "grooming-scent", chip: "✨ Look & smell good", label: "Grooming & scent",
      blurb: "Hair texture that lasts the day and a smarter way to find your next scent." },
    { id: "phone-room", chip: "📱 Phone & room", label: "Phone & room",
      blurb: "Phone upgrades people actually notice, and lighting that makes a room look good on camera." },
    { id: "car-fixes", chip: "🚗 Car summer fixes", label: "Car summer fixes",
      blurb: "Stop your parked car turning into an oven." },
  ],

  // "How we choose" / trust row. No fake reviews — this is the honesty section.
  trust: [
    { emoji: "🔍", title: "We actually vet them", text: "We dig through the viral stuff, check real reviews, and skip what doesn't hold up." },
    { emoji: "🇪🇺", title: "EU-friendly picks", text: "Things you can get in Germany, Austria, the Netherlands, Czechia, Poland and nearby." },
    { emoji: "💬", title: "Honest about money", text: "Some links are affiliate links. We only list things we'd recommend anyway. Your price never changes." },
    { emoji: "🔄", title: "Updated daily", text: "New winners in, dead trends out. This page is a living list, not a dusty store." },
  ],

  // Optional email capture. action:"" = just shows a thank-you (no data stored).
  // To collect real emails, see README ("Email capture").
  email: {
    enabled: true,
    title: "Get next week's finds",
    text: "One short email when we add new winners. No spam, unsubscribe anytime.",
    placeholder: "your@email.com",
    button: "Keep me posted",
    action: "", // e.g. your Formspree URL: "https://formspree.io/f/abc123"
  },

  faq: [
    { q: "Do you sell these products?",
      a: "No. We're a discovery page. We point you to a store where you can get it and you buy there directly. Payment, shipping and returns are handled by that store." },
    { q: "Are the links affiliate links?",
      a: "Some are. If you buy through them we may earn a small commission at no extra cost to you — it never changes your price." },
    { q: "How do you choose the products?",
      a: "We look for viral products that are genuinely useful, we buy & try them in person and also check other reviews and EU availability, and drop the ones that don't hold up." },
    { q: "Which countries can order?",
      a: "Most picks are available across the EU. Exact availability and shipping times depend on the store you're sent to." },
  ],

  // Footer columns. Anchors (#...) jump on this page; mailto opens email.
  footer: {
    columns: [
      { title: "explore", links: [
        { label: "summer cooling", href: "#summer-cooling" },
        { label: "grooming & scent", href: "#grooming-scent" },
        { label: "phone & room", href: "#phone-room" },
        { label: "car fixes", href: "#car-fixes" },
      ]},
      { title: "about", links: [
        { label: "how we choose", href: "#how" },
        { label: "faqs", href: "#faq" },
        { label: "contact", href: "mailto:hello@yourdomain.com" },
      ]},
      { title: "legal", links: [
        { label: "affiliate disclosure", href: "#legal" },
        { label: "privacy policy", href: "#legal" },
        { label: "cookie policy", href: "#legal" },
        { label: "terms", href: "#legal" },
      ]},
    ],
    contactEmail: "hello@yourdomain.com",
    disclaimer:
      "Independent product discovery. Not affiliated with TikTok, Instagram, Meta or the brands shown. Some links are affiliate links — if you buy through them we may earn a small commission at no extra cost to you.",
  },

  // Affiliate disclosure shown near products and in legal section.
  affiliateDisclosure:
    "Heads up: some links on this page are affiliate links. If you buy through them, we may earn a small commission — at no extra cost to you. We only list things we genuinely think are useful.",
};

/* ============================================================================
   PRODUCTS
   Each product has every field your brief asked for. The page renders the
   marketing fields (name, hook, problem, benefit, bestFor, price, cta, link,
   image, badge). The ops fields (adAngle, audience, countries, riskNote,
   complianceClaim, video, priority, status) are for YOU — easy to keep here.
============================================================================ */

const PRODUCTS = [
  {
    id: "misting-fan",
    productName: "Misting handheld fan",
    category: "summer-cooling",
    emoji: "💦",                 // used for the placeholder tile until you add an image
    shortHook: "A handheld fan with a fine water mist for extra cooling.",
    painPoint: "A normal mini-fan just pushes hot air around.",
    mainBenefit: "Adds a light water mist for a fresher, cooler feel than a basic fan — pocket-sized and rechargeable.",
    bestFor: "Outdoors, festivals, hot rooms",
    price: "from €15",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",                    // e.g. "images/misting-fan.jpg"
    video: "",                    // optional clip path, see README
    badge: "Upgrade pick",
    cta: "Check it out →",
    status: "testing",
    priority: 95,
    riskNote: "Seasonal (Jun–Aug). Saturated category — content quality decides. Low ticket = thin affiliate commission.",
    complianceClaim: "Gives a cooling feel; effect varies with conditions. No exact temperature-drop claims.",
    adAngle: "Normal fan vs misting fan — feel the difference on camera.",
    targetAudience: "16–35, festival/commuter/outdoor, hot-weather regions",
    targetCountries: ["DE", "AT", "NL", "CZ", "PL"],
  },
  {
    id: "car-shade",
    productName: "Car windshield sun umbrella",
    category: "car-fixes",
    emoji: "🚗",
    shortHook: "Stop your parked car turning into an oven.",
    painPoint: "Parked in the sun, the cabin, wheel and dashboard get unbearable.",
    mainBenefit: "A foldable umbrella-style shade that opens across the windshield to block sun and reduce heat build-up while you're parked.",
    bestFor: "Anyone who parks in the sun",
    price: "from €19",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Summer fix",
    cta: "See it →",
    status: "testing",
    priority: 92,
    riskNote: "Seasonal. Fit varies by windshield size — note dimensions. Satisfying before/after demo potential.",
    complianceClaim: "Helps reduce heat build-up; actual temperature depends on car, sun and time. No medical/efficacy claims.",
    adAngle: "Open your car door without the wall of heat. Before/after dashboard temp feel.",
    targetAudience: "25–55, drivers, commuters, parents, hot-climate parkers",
    targetCountries: ["DE", "AT", "CZ", "PL", "NL"],
  },
  {
    id: "neck-fan",
    productName: "Portable neck fan",
    category: "summer-cooling",
    emoji: "🌀",
    shortHook: "Hands-free cooling that sits on your neck.",
    painPoint: "Commutes, queues and walks get brutal in summer heat.",
    mainBenefit: "A wearable, hands-free fan designed to keep air moving while you move — rechargeable, adjustable speeds.",
    bestFor: "Commuters, travel, festivals, no-AC days",
    price: "from €18",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Summer pick",
    cta: "Check it out →",
    status: "testing",
    priority: 90,
    riskNote: "Very saturated and seasonal. Differentiate on content angle (POV commute) not the product.",
    complianceClaim: "Helps you feel cooler. Does not prevent heatstroke or replace medical care.",
    adAngle: "Surviving the heatwave commute without melting — POV.",
    targetAudience: "16–40, commuters, travellers, festival-goers",
    targetCountries: ["DE", "AT", "NL", "CZ", "PL"],
  },
  {
    id: "cooling-towel",
    productName: "Cooling towel",
    category: "summer-cooling",
    emoji: "🧊",
    shortHook: "Wet it, wring it, snap it — instant cool-down.",
    painPoint: "Workouts, walks and heat leave you overheated and sweaty.",
    mainBenefit: "A towel designed to feel cool when wet — reusable, for the gym, sport, the beach or hot days.",
    bestFor: "Gym, sport, outdoor work, beach",
    price: "from €12",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Gym favourite",
    cta: "See it →",
    status: "active",
    priority: 84,
    riskNote: "Lowest ticket here — weakest affiliate economics. Good top-of-funnel content, weak money driver alone.",
    complianceClaim: "Provides a cooling feel when wet. Not a medical cooling device.",
    adAngle: "The cheap gym-bag essential for summer. Snap-to-activate demo.",
    targetAudience: "18–40, gym/sport, runners, outdoor workers",
    targetCountries: ["DE", "AT", "NL", "CZ", "PL"],
  },
  {
    id: "sunset-lamp",
    productName: "Sunset & galaxy projector lamp",
    category: "phone-room",
    emoji: "🌅",
    shortHook: "Turn any room into a sunset (or galaxy) in seconds.",
    painPoint: "A plain room looks boring and flat on camera.",
    mainBenefit: "A projector lamp that casts warm sunset or galaxy light for a cozy room, setup or content background.",
    bestFor: "Bedrooms, gaming setups, content backgrounds",
    price: "from €17",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Aesthetic pick",
    cta: "See it →",
    status: "active",
    priority: 80,
    riskNote: "Evergreen and very visual, but heavily promoted for years — needs a fresh angle. Good year-round backbone.",
    complianceClaim: "For ambience and decoration. Not a therapy, sleep or 'mood-fixing' device.",
    adAngle: "Room glow-up in 5 seconds — the light that makes your room look expensive on camera.",
    targetAudience: "16–30, students, gamers, content creators, renters",
    targetCountries: ["DE", "AT", "NL", "CZ", "PL"],
  },
  {
    id: "perfume-set",
    productName: "Perfume discovery set",
    category: "grooming-scent",
    emoji: "🧴",
    shortHook: "Try 5–10 scents before you commit to a full bottle.",
    painPoint: "Full bottles are expensive and risky to blind-buy online.",
    mainBenefit: "A discovery set lets you test multiple scents at home, then buy only the one you actually love.",
    bestFor: "Anyone tired of blind-buying perfume",
    price: "from €20",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Smart buy",
    cta: "Browse sets →",
    status: "active",
    priority: 78,
    riskNote: "Higher intent + better beauty commissions = stronger money driver. Less 'snackable' video; lean on the anti-blind-buy angle.",
    complianceClaim: "Helps you sample scents. No claims that a scent attracts people or guarantees compliments.",
    adAngle: "Stop spending €100 on a bottle you end up hating — test first.",
    targetAudience: "18–45, fragrance-curious, gift buyers",
    targetCountries: ["DE", "AT", "NL"],
  },
  {
    id: "hair-trio",
    productName: "Hair texture trio",
    category: "grooming-scent",
    emoji: "💈",
    shortHook: "Flat hair to full texture in a few minutes.",
    painPoint: "Fine or long hair goes flat fast and loses shape by midday.",
    mainBenefit: "A simple 3-step combo — sea-salt spray, texture powder and matte clay — built for grip, lift and a natural matte finish.",
    bestFor: "Fine, flat or long hair",
    price: "from €19",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Editor pick",
    cta: "See the trio →",
    status: "active",
    priority: 74,
    riskNote: "Good before/after demo + bundle potential. Compatibility-free. Strong evergreen grooming angle (men's hair big on short-form).",
    complianceClaim: "Designed to add texture and hold. Not a hair-growth or regrowth product.",
    adAngle: "The 3 products behind the effortless 'just-styled' look that lasts the day.",
    targetAudience: "16–35, men's grooming + fine-hair styling",
    targetCountries: ["DE", "AT", "NL", "CZ", "PL"],
  },
  {
    id: "phone-case",
    productName: "Viral phone case",
    category: "phone-room",
    emoji: "📱",
    shortHook: "Give your phone a glow-up that's actually useful.",
    painPoint: "Boring case, nowhere to keep your card, phone slips out of your hand.",
    mainBenefit: "Aesthetic cases with real utility — MagSafe, card holder, grip and standout designs people notice.",
    bestFor: "Anyone bored of a plain phone",
    price: "from €14",
    link: "#REPLACE-WITH-AFFILIATE-LINK",
    image: "",
    video: "",
    badge: "Trending",
    cta: "See cases →",
    status: "active",
    priority: 68,
    riskNote: "Huge audience but enormous saturation + model-compatibility friction (must match exact phone). Returns risk.",
    complianceClaim: "Styles and utility vary by model. Always check compatibility with your exact phone.",
    adAngle: "The case everyone asks you about — show the feature people don't expect.",
    targetAudience: "16–30, phone-style buyers, gift buyers",
    targetCountries: ["DE", "AT", "NL", "CZ", "PL"],
  },
];

// Make data available to the page. (Do not change these two lines.)
window.SITE = SITE;
window.PRODUCTS = PRODUCTS;
