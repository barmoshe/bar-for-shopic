# bar-for-shopic

A one-page application site, Bar Moshe, presented in Shopic's own brand, sent
as the application. Next.js 16 + React 19 + TypeScript, plain CSS, deployed on
Vercel.

> **Not affiliated.** This is an independent application site built by Bar Moshe.
> Company names, marks, and brand styling are used nominatively to address the
> company; it does not claim any affiliation or endorsement, and reuses none of
> the company's proprietary assets. The page is private (`noindex`) and shared by
> direct link only.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint    # jsx-a11y accessibility gate (must pass)
npm run build
```

## Re-brand

All brand values live in `src/marketing/shopic/shopic.css` (`.shopic-root` tokens).
Work through `BRAND-READ.md`, read the company's real tokens off their live
site, replace the placeholders, replicate their layout, and rewrite the copy.

## Deploy

```bash
npx vercel --prod          # → https://bar-for-shopic.vercel.app
```

If Vercel's free daily deploy cap is hit, a GitHub-Pages static mirror is wired
in `next.config.ts` (`GH_PAGES=1 npm run build`), a fallback, not the canonical
URL. See `references/bar-for-site.md` in the operator repo for the full flow.
