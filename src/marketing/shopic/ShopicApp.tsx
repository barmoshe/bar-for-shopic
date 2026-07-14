"use client";

import { useReveal } from "@/src/lib/reveal";
import { buildMailtoHref, buildWhatsAppHref } from "@/src/lib/contact";
import { Centerpiece } from "./Centerpiece";
import { EclipseGlow, DottedChevrons, ConnectorArrow } from "./graphics";

// One-page pitch for Shopic, rebuilt in Shopic's real visual language: the
// hub-and-spoke Vision orb, the pill eyebrows, the alternating dark / violet
// section rhythm, the white Results cards, eclipse glows and connector arrows.
// Copy is first person, plain, addressed to Shopic. Honest to jobs/cv.md; no
// invented metrics.
const CV = "/Bar_Moshe_CV_Shopic.pdf";
const CV_HREF = (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + CV;

// Small stroke line-icons, matching Shopic's Innovation feature list.
function Icon({ name }: { name: "layers" | "ai" | "cloud" | "chart" }) {
  const paths: Record<string, string> = {
    layers: "M12 3 3 8l9 5 9-5-9-5Z M3 12l9 5 9-5 M3 16l9 5 9-5",
    ai: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z M19 15l.9 2.4L22 18l-2.1.6L19 21l-.9-2.4L16 18l2.1-.6L19 15Z",
    cloud: "M7 18h9.5a3.5 3.5 0 0 0 .4-7 5.5 5.5 0 0 0-10.6 1.4A3.5 3.5 0 0 0 7 18Z",
    chart: "M4 20h16 M7 20v-6 M12 20V6 M17 20v-9",
  };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Mirrors Shopic's "AI-Powered Retail, Driven by Computer Vision" four-up: their
// pillars (recognition / analytics / frictionless / cloud-native) mapped to what
// I actually bring to the team building them.
const FOCUS: {
  icon: "layers" | "ai" | "cloud" | "chart";
  title: string;
  body: string;
}[] = [
  {
    icon: "layers",
    title: "Full-stack around the vision",
    body: "React and Next.js front ends over Node APIs: the dashboards, carts, and store-ops screens that turn item-level recognition into something staff and shoppers use.",
  },
  {
    icon: "ai",
    title: "AI and agents in production",
    body: "LLM apps, MCP tooling, and evals. I ship AI features from idea to running code, with open-source proof, not slideware.",
  },
  {
    icon: "cloud",
    title: "Deploy it and keep it up",
    body: "Docker, Kubernetes, Terraform, and CI/CD. Shopic runs cloud-native at retail scale; I have shipped and operated the infrastructure side, not just the app.",
  },
  {
    icon: "chart",
    title: "Turn signals into analytics",
    body: "Pipelines and services that move data from the floor to a screen someone acts on, the same loop behind Shopic's real-time store insights.",
  },
];

// Honest proof cards for the Results-style violet band. Each maps to public,
// verifiable work, no invented KPIs.
const PROOF = [
  {
    pill: "Open source",
    big: "npm",
    accent: false,
    title: "MDP, published",
    body: "A Markdown to document and deck compiler, with an MCP server and Claude Code plugin so other tools extend it.",
  },
  {
    pill: "Validated",
    big: "Featured",
    accent: true,
    title: "Temporal Code Exchange",
    body: "A cross-language workflow service orchestrating Go, Python, and TypeScript, featured by Temporal.io.",
  },
  {
    pill: "Ship speed",
    big: "hrs → days",
    accent: false,
    title: "Idea to deployed",
    body: "MVPs scoped and shipped end to end, from intake to a live URL.",
  },
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
          <EclipseGlow
            variant="a"
            style={{ top: "-6rem", left: "-8rem" }}
          />
          <div>
            <p className="shopic-eyebrow">Vision-powered, full-stack</p>
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
          <div style={{ position: "relative" }}>
            <EclipseGlow
              variant="b"
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
            />
            <Centerpiece />
          </div>
        </section>

        {/* --- focus areas: Shopic's Innovation feature list --- */}
        <section className="shopic-band" data-reveal aria-labelledby="focus-h">
          <DottedChevrons
            style={{ position: "absolute", top: "3rem", right: "2rem", opacity: 0.7 }}
          />
          <div className="shopic-wrap shopic-section">
            <p className="shopic-eyebrow">Where I&apos;d plug in</p>
            <h2 className="shopic-h2" id="focus-h">
              AI-powered retail runs on real software. That&apos;s my half.
            </h2>
            <p className="shopic-lead">
              Recognition, analytics, frictionless checkout, cloud-native scale:
              each pillar needs someone shipping the app and the pipes. Here is
              how I map to yours.
            </p>
            <div className="shopic-features">
              {FOCUS.map((f) => (
                <div className="shopic-feature" key={f.title}>
                  <span className="fi">
                    <Icon name={f.icon} />
                  </span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- proof: Shopic's Results band (violet + white cards) --- */}
        <section
          className="shopic-band-violet"
          data-reveal
          aria-labelledby="proof-h"
        >
          <div className="shopic-wrap shopic-section">
            <p className="shopic-eyebrow">Shipped, public</p>
            <h2 className="shopic-h2" id="proof-h">
              Proof, not a pitch
            </h2>
            <p className="shopic-lead">
              The strongest signal that I can build vision-grade software is the
              software I have already shipped in the open.
            </p>
            <div className="shopic-statgrid">
              {PROOF.map((p) => (
                <div className="shopic-statcard" key={p.title}>
                  <div className="sc-top">
                    <span className="sc-pill">{p.pill}</span>
                  </div>
                  <b className={p.accent ? "v" : undefined}>{p.big}</b>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="shopic-bar" aria-hidden="true">
                    <i style={{ width: p.accent ? "82%" : "92%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- selected work --- */}
        <section
          className="shopic-wrap shopic-section"
          data-reveal
          aria-labelledby="work-h"
        >
          <div
            style={{ display: "flex", justifyContent: "center", marginBottom: "0.5rem" }}
          >
            <ConnectorArrow style={{ opacity: 0.7 }} />
          </div>
          <p className="shopic-eyebrow">Selected work</p>
          <h2 className="shopic-h2" id="work-h">
            A few things I&apos;ve built
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
          <EclipseGlow
            variant="a"
            style={{ bottom: "-10rem", left: "50%", transform: "translateX(-50%)" }}
          />
          <div className="shopic-wrap shopic-section shopic-close">
            <p className="shopic-eyebrow" style={{ marginInline: "auto" }}>
              Let&apos;s talk
            </p>
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
