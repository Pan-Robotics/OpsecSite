# 🛡️ CryptoOpsec — cryptoopsec.com

> The marketing site and app launcher for **CryptoOpsec**: an operational-security
> education resource for self-custody crypto users, plus the front door to the
> CryptoOpsec tool suite.

**Live:** https://cryptoopsec.com · **App launcher:** https://apps.cryptoopsec.com

This is a content and navigation site. It holds no wallets, no keys, no user
accounts and no database — it serves a React SPA, a set of downloadable PDF
guides, and links out to separately-deployed apps.

---

## 📄 What the site is

A single-page educational guide to crypto operational security, organised as a
scroll-through narrative, with a searchable app launcher alongside it.

### Home page (`/`)

Rendered by `client/src/pages/home.tsx` as a fixed sequence of sections:

| Section | Component | Contents |
|---|---|---|
| Navigation | `navigation.tsx` | Sticky bar; anchors to each section + **Launch Apps** → `apps.cryptoopsec.com` |
| Hero | `hero-section.tsx` | *"Secure Your Crypto Life. Start Here."* — CTAs scroll to the Journey or download the Security Checklist |
| Intro | `intro-section.tsx` | *"What is Crypto Operational Security?"* — "Crypto isn't risky. Poor OPSEC is!" |
| Foundations | `foundations-section.tsx` | 3 cards: Blockchain Basics, Wallets & Keys, Threat Landscape |
| Security Journey | `journey-section.tsx` | 4 steps: Exchange Risks → Hot Wallets → Cold Storage → Scam Detection, each with its own PDF |
| Toolkit | `toolkit-section.tsx` | Curated outbound links: password managers, 2FA, VPNs, secure OSes, hardware wallets |
| Tools | `tools-section.tsx` | DYOR (live) and OpsecViz (coming soon) |
| Resources | `resources-section.tsx` | Two featured downloads + X / Telegram links |
| Footer | `footer.tsx` | All 8 PDFs, section anchors, developer credits |

### App launcher (`/apps`)

`client/src/pages/apps.tsx` — a searchable card grid driven by a single `APPS`
array at the top of the file. **Add a tool by adding an entry there.**

| App | Status | URL |
|---|---|---|
| **DYOR** | live | https://dyor.cryptoopsec.com |
| **Bridge** | live | https://bridge.cryptoopsec.com |
| **OpsecViz** | soon | — |

`App.tsx` also serves the launcher at `/` when the hostname starts with `apps.`,
so `apps.cryptoopsec.com` lands directly on the grid while `cryptoopsec.com`
lands on the guide.

Each app is its own repository and its own deployment — this site only links to them.

- DYOR → [`Pan-Robotics/opsecDYOR`](https://github.com/Pan-Robotics/opsecDYOR) — token qualification engine (Next.js + FastAPI, also exposed over MCP)
- Bridge → [`Pan-Robotics/opsecBridge`](https://github.com/Pan-Robotics/opsecBridge) — legacy OP Mainnet withdrawals, static and client-side
- OpsecViz → [`Pan-Robotics/OpSecViz`](https://github.com/Pan-Robotics/OpSecViz) — multi-chain portfolio analytics, in development

### Downloadable guides

Eight PDFs in `public/downloads/`, served at `/downloads/<filename>`:

| File | Size | Linked from |
|---|---|---|
| `CryptoOPSEC_Crypto_Security_Checklist.pdf` | 42 KB | Hero, Footer |
| `CryptoOPSEC_Crypto_Fundamentals_Guide.pdf` | 41 KB | Foundations, Footer |
| `CryptoOPSEC_Crypto_Exchange_Security_Checklist.pdf` | 42 KB | Journey step 1, Footer |
| `CryptoOPSEC_Hot_Wallet_Guide.pdf` | 43 KB | Journey step 2, Footer |
| `CrytoOPSEC_Cold_Wallet_Guide.pdf` | 41 KB | Journey step 3, Footer |
| `CryptoOPSEC_Crypto_Scam_Cheat_Sheet.pdf` | 42 KB | Journey step 4, Footer |
| `CryptoOPSEC_50_Point_Security_Checklist.pdf` | 38 KB | Resources, Footer |
| `CryptoOPSEC_Scam_Detection_Guide.pdf` | 47 KB | Resources, Footer |

> `CrytoOPSEC_Cold_Wallet_Guide.pdf` is misspelled ("Cryto") **in the filename
> itself**, and both `journey-section.tsx` and `footer.tsx` link to that spelling.
> Renaming it means updating both call sites in the same commit or the download 404s.

---

## 🧱 Tech stack

What is actually in use — the dependency tree was pruned to match in `98cd0c2`.

**Frontend**
- React 18 + TypeScript, bundled by **Vite 5**
- **wouter** for routing (`/`, `/apps`, catch-all → `not-found.tsx`)
- **Tailwind CSS 3.4.17** via `postcss.config.js` — *not* Tailwind v4
- **shadcn/ui** on Radix primitives (47 components in `client/src/components/ui/`)
- **Framer Motion** / **motion** for the `Reveal` scroll animation
- **lucide-react** icons, **react-icons** for the X and Telegram brand marks

**Backend**
- **Express 4** serving the built SPA and the `/downloads` static directory
- Listens on **`127.0.0.1:3000`** only; nginx terminates TLS and reverse-proxies

**Theme** — HSL custom properties in `client/src/index.css`, exposed as
`cyber-*` utilities: `cyber-dark` `210 65% 6%`, `cyber-slate` `210 55% 12%`,
`cyber-gray` `210 45% 18%`, `cyber-steel` `210 35% 55%`, `cyber-gold`
`47 75% 45%`, `cyber-gold-dark` `45 70% 38%`. Type is **Orbitron** for headings,
**Inter** for body, **JetBrains Mono** for accents, all from Google Fonts.

### Scaffold remnants still present

The project started from a Replit `rest-express` template and the backend was
never built out. `server/routes.ts` registers **zero** `/api` routes,
`server/storage.ts` is an unused in-memory store, and `shared/schema.ts` defines
a `users` table that nothing reads or writes. `drizzle-orm` and `drizzle-kit`
are present only for that unused schema.

---

## 📁 Repository layout

```
client/               Vite root
  index.html          SPA shell, meta/OG tags, Google Fonts
  src/
    App.tsx           wouter router + the apps.* hostname switch
    pages/            home.tsx, apps.tsx, not-found.tsx
    components/       the 9 page sections + animation/Reveal + ui/ (shadcn)
    index.css         theme tokens, cyber-* utilities, keyframes
server/
  index.ts            Express app, static serving, error handler
  routes.ts           empty — no API routes registered
  storage.ts          unused in-memory scaffold
  vite.ts             dev middleware + production static serving
shared/schema.ts      unused Drizzle users table
public/downloads/     the 8 PDFs (served by Express, NOT bundled by Vite)
attached_assets/      images used by journey-section; also 8 unreferenced PDFs
dist/                 build output (tracked, but regenerated on every deploy)
deploy.sh             production deploy script
```

Vite aliases (`vite.config.ts`): `@` → `client/src`, `@shared` → `shared`,
`@assets` → `attached_assets`. Note `@assets` is defined but unused — components
import images by relative path instead.

---

## 💻 Development

```bash
npm install
npm run dev        # tsx server/index.ts with NODE_ENV=development
```

Dev mode mounts Vite in middleware mode with HMR against the same Express
process, so `/downloads` and the SPA are both served from
http://127.0.0.1:3000.

```bash
npm run build      # vite build -> dist/public, then esbuild server -> dist/index.js
npm start          # NODE_ENV=production node dist/index.js
npm run check      # tsc (tsconfig.json sets noEmit)
```

`public/downloads` is served from `path.join(process.cwd(), 'public/downloads')`,
so the server must be started **from the repository root** or every PDF link 404s.

### Environment variables

| Variable | Default | Effect |
|---|---|---|
| `VITE_DYOR_URL` | `https://dyor.cryptoopsec.com` | DYOR launch URL in `tools-section.tsx`; baked in at build time |
| `NODE_ENV` | — | `development` mounts Vite/HMR, anything else serves `dist/public` |
| `REPL_ID` | — | When set alongside non-production `NODE_ENV`, enables the Replit cartographer plugin |

There is no `.env` file in the repo. `DATABASE_URL` is referenced only by
`drizzle.config.ts`, which throws without it — `npm run db:push` will not run
until that is set, and nothing in the app needs a database today.

---

## 🚀 Deployment

Production is a Vultr VPS running nginx + pm2. `deploy.sh` is the whole deploy:

```bash
cd /root/OpsecSite && ./deploy.sh            # full deploy
cd /root/OpsecSite && ./deploy.sh --dry-run  # print the plan, change nothing
```

It runs: `git fetch` → discard local `dist/` and `package-lock.json` → autostash
anything else → `git merge --ff-only origin/main` → `npm ci` → `npm run build` →
`pm2 restart OpsecSite && pm2 save` → curl the health endpoint and require 200.

**Pushing to `main` deploys nothing by itself.** Production only moves when
`deploy.sh` runs on the VPS.

Two properties of the script worth knowing before you change dependencies:

- It runs **`git checkout -- package-lock.json`**, restoring the lockfile from
  git. A dependency change therefore has no effect on the server until the
  updated lockfile is committed and pushed.
- It runs **`npm ci`**, which fails hard if `package.json` and the lockfile
  disagree. Always change dependencies with `npm install` / `npm uninstall`
  (which update both), never by hand-editing `package.json`.

`dist/` is tracked in git but deliberately never committed — history is
source-only, and the script discards and rebuilds `dist/` on every deploy.
Expect a permanently dirty `dist/` in `git status`; that is normal.

**If a commit ever modifies `deploy.sh` itself**, do not run `./deploy.sh` to
deploy it. Bash reads scripts incrementally by byte offset, so overwriting the
file mid-run corrupts the tail. Copy it out first:

```bash
cp deploy.sh /tmp/deploy-run.sh && bash /tmp/deploy-run.sh
```

### Runtime topology

Read off the live `nginx -T`, not assumed:

```
nginx  :80/:443  (TLS via Certbot)
  ├── cryptoopsec.com, www.   -> proxy_pass http://localhost:3000   (pm2 "OpsecSite")
  ├── apps.cryptoopsec.com    -> proxy_pass http://localhost:3000   (same app)
  ├── bridge.cryptoopsec.com  -> root /var/www/bridge.cryptoopsec.com  (static)
  └── dyor.cryptoopsec.com    -> :8077 (FastAPI) / :3010 (Next.js) / :8765 (MCP)
ufw: default-deny inbound, allows 22/80/443 only
```

The Express process binds loopback only, by design — nginx is the sole entry
point and the firewall permits nothing else inbound. `cryptoopsec.com` and
`apps.cryptoopsec.com` are the *same* pm2 process; only the hostname-based
router switch in `App.tsx` makes them look different.

---

## ⚠️ Known issues

Tracked here rather than hidden. None of these break the live site today.

- **`npm run check` fails** with one pre-existing error at `server/vite.ts:39`:
  `allowedHosts: true` is not assignable to Vite 5.4.14's `ServerOptions`
  (`true | string[] | undefined`). One-line fix is `allowedHosts: true as const`.
  `npm run build` does not invoke tsc, so production is unaffected.
- **The SPA catch-all answers `200` for every unmatched path, including all of
  `/api/*`.** `serveStatic` ends in `app.use("*", …) → sendFile(index.html)` with
  no carve-out, so `/api/nonexistent` returns `200 text/html`. Any future API
  client hitting a wrong or removed endpoint gets a silent success, an
  `/api/health` probe would be a false positive, and the soft-404s are indexable.
- **Third-party hotlinks in the page body.** `tools-section.tsx` uses a
  `mkt-site-asset.crypto.com` WebP as a background image, `intro-section.tsx` an
  Unsplash photo, and Journey step 4 an iconscout illustration. All three break
  or change without notice and none are under this project's control. The built
  `index.html` also pulls fonts from Google. These are now the only external
  requests the page makes.
- **Dead weight in `attached_assets/`:** its 8 PDFs are an *identical duplicate
  set* of `public/downloads/` and nothing references them; `images/exchanging.png`
  is unused (the `exchangingimg` variable in `journey-section.tsx` actually
  imports `wmremove-transformed.png`); `cryptogold` is imported but never used;
  and `toolkit-section.tsx` imports `Rocket` without using it. The `@assets`
  alias is likewise defined but unused.
- **`shared/schema.ts` stores passwords in plaintext.** Unused today, but it is
  the obvious thing to reach for when auth is added — delete it or add hashing
  first.
- **No `LICENSE` file.** `package.json` declares MIT and this README previously
  linked `./LICENSE`, which does not exist.

---

## 🧑‍💻 Developers

Credited in the site footer:

- [Alexander Dada](https://github.com/alexdada555) — Pan Robotics
- [Sylvia Yousif](https://github.com/sylvia5555)
- [Aiman Jamil](https://github.com/ai-28)

**Organisation:** [Pan-Robotics](https://github.com/Pan-Robotics) ·
**Site:** [CryptoOPSEC.com](https://cryptoopsec.com) ·
[X](https://x.com/cryptoopseccom) · [Telegram](https://t.me/cryptoopseccom)

---

## 📄 License

`package.json` declares **MIT**, but no `LICENSE` file has been committed. Add
one before relying on the declaration.

---

> Educational content only. Not financial advice.
