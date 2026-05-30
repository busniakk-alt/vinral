# Publish vinral.com on GitHub Pages

**You do NOT need `package.json`, npm, or any build.** This is a plain static site — GitHub just serves the files as-is.

Flow: **commit the files → create a GitHub repo → push → turn on Pages → point DNS.** ~10 minutes.

### What's in this folder
```
index.html        the page
products.js       your editable data (prices, links, products)
images/           your product images
CNAME             contains "vinral.com" (tells GitHub Pages your domain)
.nojekyll         serves files as-is (no Jekyll processing)
robots.txt        SEO
sitemap.xml       SEO
404.html          friendly not-found page
README.md         how to edit the site
PUBLISH.md        this file
```
> `STRATEGY.md` is intentionally **git-ignored** so your internal strategy/margins don't go on the public web. It stays on your computer. (Delete the `STRATEGY.md` line in `.gitignore` if you'd rather keep it in the repo — e.g. a private repo.)

> ⚠️ **Tip:** this folder is inside **OneDrive**, which can corrupt the many tiny files git uses while syncing. If git acts strangely, the cleanest fix is to **copy this folder somewhere outside OneDrive** (e.g. `C:\dev\vinral`) and run git there.

---

## Step 1 — Commit the files (in this folder, on your computer)

**If a `.git` folder already exists here** from earlier setup, delete it first (it may be incomplete):
- PowerShell: `Remove-Item -Recurse -Force .git`
- CMD: `rmdir /s /q .git`

Then:
```bash
git init -b main
git add -A
git commit -m "Initial commit: vinral.com landing page"
```
> If git asks who you are, run once and re-commit:
> `git config --global user.name "Eddie"`
> `git config --global user.email "busniakk@gmail.com"`

---

## Step 2 — Create the GitHub repo and push

Make the repo **Public** (free GitHub Pages works on public repos; private needs a paid plan).

**Easiest — GitHub CLI** (if you have `gh`):
```bash
gh repo create vinral --public --source=. --remote=origin --push
```
Done → go to Step 3.

**Or — manual:**
1. github.com → **New repository** → name `vinral` → **Public** → **Create** (don't tick "add a README").
2. Then (replace `YOUR-GITHUB-USERNAME`):
```bash
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/vinral.git
git push -u origin main
```

---

## Step 3 — Turn on GitHub Pages
1. Repo → **Settings** → **Pages**.
2. **Source** = "Deploy from a branch".
3. **Branch** = `main`, folder = **/ (root)** → **Save**.
4. ~1 min later it's live at `https://YOUR-GITHUB-USERNAME.github.io/vinral/`.

---

## Step 4 — Connect your domain vinral.com
1. **Settings → Pages → Custom domain** → type `vinral.com` → **Save**. (The `CNAME` file is already in the repo.)
2. At your domain registrar (where you bought vinral.com), add these DNS records:

| Type | Host / Name | Value |
|---|---|---|
| A | `@` (or blank) | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `YOUR-GITHUB-USERNAME.github.io` |

Optional IPv6 (add if your registrar supports AAAA):

| Type | Host | Value |
|---|---|---|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

3. DNS can take a few minutes to ~24h (usually fast).
4. Back in **Settings → Pages**, once the check passes, tick **Enforce HTTPS**. Live at `https://vinral.com`.

---

## Updating the site later
Edit `products.js`, then:
```bash
git add -A
git commit -m "update products"
git push
```
Live again in ~1 minute. (Or use the **GitHub Desktop** app — commit + push with buttons, no terminal.)

---

## Two things worth knowing
1. **`products.js` is public.** Every visitor downloads it, so treat its contents as public — including ops notes (`adAngle`, `riskNote`, `targetCountries`). Normal for any static site. Want those private? Tell me and I'll move them into a file that isn't shipped to the browser.
2. **Brand vs domain:** the site reads **"the everyday edit"** but your domain is **vinral.com**. That's allowed, but matching them builds trust. To rename, change `brandName` in `products.js` (one line) — or tell me and I'll do it.

### Prefer a different host?
Because it's static, you can connect this same repo to **Netlify / Vercel / Cloudflare Pages** (build command: *none*, output dir: root) and add `vinral.com` there instead. GitHub Pages is the most direct for "publish on GitHub", so that's what's set up above.
