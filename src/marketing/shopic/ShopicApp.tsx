"use client";

import { useReveal } from "@/src/lib/reveal";
import { buildMailtoHref, buildWhatsAppHref } from "@/src/lib/contact";
import { Centerpiece } from "./Centerpiece";

// One-page pitch for Shopic, rebuilt in Shopic's own brand: dark plum, violet +
// vision-green, Graphik/mono type, and the item-level detection overlay as the
// hero graphic. Copy is first person, plain, addressed to Shopic. Honest to
// jobs/cv.md; no invented metrics.
const CV = "/Bar_Moshe_CV_Shopic.pdf";
const CV_HREF = (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + CV;

// Mirrors Shopic's "AI-Powered Retail, Driven by Computer Vision" four-up: their
// pillars (recognition / analytics / frictionless / cloud-native) mapped to what
// I actually bring to the team building them.
const FOCUS = [
  {
    tag: "The app layer",
    title: "Full-stack around the vision",
    body: "React and Next.js front ends over Node APIs. The dashboards, carts, and store-ops screens that turn item-level recognition into something staff and shoppers use.",
  },
  {
    tag: "AI & agents",
    title: "LLM and agent features, in production",
    body: "LLM apps, MCP tooling, and evals. I ship AI features from idea to running code, with open-source proof, not slideware.",
  },
  {
    tag: "Cloud-native",
    title: "Deploy it and keep it up",
    body: "Docker, Kubernetes, Terraform, and CI/CD. Shopic runs cloud-native at retail scale; I have shipped and operated the infrastructure side, not just the app.",
  },
  {
    tag: "Data → decisions",
    title: "Turn signals into analytics",
    body: "Pipelines and services that move data from the floor to a screen someone acts on, the same loop behind Shopic's real-time store insights.",
  },
];

// Honest proof points, not invented KPIs. Each maps to public, verifiable work.
const STATS = [
  { big: "npm", accent: false, label: "MDP published, with an MCP server + Claude Code plugin" },
  { big: "Code Exchange", accent: true, label: "cross-language Temporal service, featured by Temporal.io" },
  { big: "idea → deploy", accent: false, label: "MVPs shipped in hours-to-days, intake to live" },
];

// Selected work — honeybook standard: live links, AI/systems first, then craft.
// Pulled from jobs/portfolio-inventory.md + site portfolio data.
const WORK = [
  {
    tag: "AI · npm",
    title: "MDP",
    body: "Markdown → document/deck compiler on npm, with an MCP server and editor plugins so other tools and agents extend it.",
    href: "https://barmoshe.github.io/mdp/",
    link: "barmoshe.github.io/mdp",
  },
  {
    tag: "Distributed",
    title: "Cross-language Temporal service",
    body: "One Temporal workflow orchestrating Go, Python, and TypeScript workers. Featured on Temporal's Code Exchange.",
    href: "https://temporal.io/code-exchange/cross-language-data-processing-service-with-temporal",
    link: "temporal.io/code-exchange",
  },
  {
    tag: "AI · creative",
    title: "Biome Synth",
    body: "Browser instrument with an AI DJ across five states. Tone.js, Three.js, Canvas2D. Started as a Claude skill that writes its own brief.",
    href: "https://biome-synth.lovable.app/",
    link: "biome-synth.lovable.app",
  },
  {
    tag: "AI · logic",
    title: "entailer",
    body: "Open-source logic-validity toolkit that checks whether an argument actually follows. Six packages, public on npm.",
    href: "https://github.com/barmoshe/entailer",
    link: "github.com/barmoshe/entailer",
  },
  {
    tag: "Full-stack",
    title: "Israelify",
    body: "Spotify-style app: React + Node + Mongo, REST API, auth, a custom logger. Full-stack from data model to UI.",
    href: "https://github.com/barmoshe/Israelify-backend",
    link: "github.com/barmoshe/Israelify",
  },
  {
    tag: "Vision · on-device",
    title: "Bloom Garden",
    body: "Webcam hand-gesture game: pinch to pluck flowers, MediaPipe running on-device so no video ever leaves the browser.",
    href: "https://bloom-garden-five.vercel.app",
    link: "bloom-garden-five.vercel.app",
  },
];

export function ShopicApp() {
  useReveal();

  const waHref = buildWhatsAppHref(
    "Hi Bar, saw your page built for Shopic, let's talk.",
  );
  const mailHref = buildMailtoHref("Bar Moshe, for Shopic");

  return (
    <div className="shopic-root">
      <a className="shopic-skip" href="#main">
        Skip to content
      </a>

      <header className="shopic-wrap">
        <nav className="shopic-nav" aria-label="Primary">
          <span className="shopic-wordmark">
            bar <b>for shopic</b>
            <span className="dot">.</span>
          </span>
          <a className="shopic-btn-ghost" href={waHref}>
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <main id="main">
        {/* --- hero --- */}
        <section className="shopic-wrap shopic-hero" data-reveal>
          <div>
            <p className="shopic-eyebrow">Item-level · full-stack</p>
            <h1>
              Shopic Vision reads every item on the shelf. I build the{" "}
              <em>software behind vision</em> like that.
            </h1>
            <p className="shopic-lead">
              I&apos;m Bar, an AI builder and full-stack engineer. I ship AI and
              agentic products from idea to production, and the systems and
              DevOps around them. This page is built in Shopic&apos;s own brand
              as the proof.
            </p>
            <div className="shopic-cta-row">
              <a className="shopic-btn" href={waHref}>
                WhatsApp
              </a>
              <a className="shopic-btn-ghost" href={mailHref}>
                Email
              </a>
              <a className="shopic-btn-ghost" href={CV_HREF}>
                Download CV
              </a>
            </div>
          </div>
          <Centerpiece />
        </section>

        {/* --- focus areas (mirrors Shopic's four vision pillars) --- */}
        <section className="shopic-band" data-reveal aria-labelledby="focus-h">
          <div className="shopic-wrap shopic-section">
            <p className="shopic-eyebrow">Where I&apos;d plug in</p>
            <h2 className="shopic-h2" id="focus-h">
              AI-powered retail runs on real software. That&apos;s my half.
            </h2>
            <p className="shopic-lead">
              Recognition, analytics, frictionless checkout, cloud-native scale,
              each pillar needs someone shipping the app and the pipes. Here is
              how I map to yours.
            </p>
            <div className="shopic-grid">
              {FOCUS.map((f) => (
                <article className="shopic-card" key={f.title}>
                  <span className="shopic-tag shopic-mono">{f.tag}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* --- proof stat band (honest, verifiable) --- */}
        <section
          className="shopic-wrap shopic-section"
          data-reveal
          aria-labelledby="proof-h"
        >
          <p className="shopic-eyebrow">Shipped, public</p>
          <h2 className="shopic-h2" id="proof-h">
            Proof, not a pitch
          </h2>
          <div className="shopic-stats">
            {STATS.map((s) => (
              <div className="shopic-stat" key={s.label}>
                <b>{s.accent ? <i>{s.big}</i> : s.big}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* --- selected work --- */}
        <section
          className="shopic-wrap shopic-section"
          data-reveal
          aria-labelledby="work-h"
        >
          <p className="shopic-eyebrow">Detected in the wild</p>
          <h2 className="shopic-h2" id="work-h">
            Selected work
          </h2>
          <div className="shopic-work">
            {WORK.map((w) => (
              <a
                key={w.title}
                href={w.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="wk-top">
                  <span className="wk-tag">{w.tag}</span>
                  <span className="wk-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
                <span className="wk-link shopic-mono">{w.link}</span>
              </a>
            ))}
          </div>
        </section>

        {/* --- contact close --- */}
        <section className="shopic-band" data-reveal aria-labelledby="contact-h">
          <div className="shopic-wrap shopic-section shopic-close">
            <p className="shopic-eyebrow">Let&apos;s talk</p>
            <h2 className="shopic-h2" id="contact-h">
              I&apos;d like to build the software behind Shopic Vision.
            </h2>
            <div className="shopic-cta-row">
              <a className="shopic-btn" href={waHref}>
                WhatsApp
              </a>
              <a className="shopic-btn-ghost" href={mailHref}>
                Email
              </a>
              <a className="shopic-btn-ghost" href={CV_HREF}>
                Download CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="shopic-foot">
        <div className="shopic-wrap">
          <span className="shopic-mono">bar for shopic</span> · built by Bar
          Moshe. Not affiliated with or endorsed by Shopic.
        </div>
      </footer>
    </div>
  );
}
