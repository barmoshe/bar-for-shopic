import { ImageResponse } from "next/og";

// `force-static` is required for the GH_PAGES export build to collect this route
// (see next.config.ts / ADR 0169).
export const dynamic = "force-static";

export const alt = "Bar Moshe, for Shopic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Shopic brand: dark plum, violet + vision-green, and the Vision hub orb with
// radiating capability nodes echoing the hero.
export default function OpengraphImage() {
  const nodes = [
    { label: "Full-Stack", top: 96, left: 690 },
    { label: "AI & Agents", top: 96, left: 980 },
    { label: "MCP", top: 470, left: 700 },
    { label: "DevOps", top: 470, left: 980 },
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "80px",
          background:
            "radial-gradient(120% 90% at 82% 40%, #3a1e63, #1a0930 62%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 560,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: 4,
              color: "#9382ff",
              fontFamily: "monospace",
            }}
          >
            VISION-POWERED · FULL-STACK
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.05,
            }}
          >
            I build the software behind vision like Shopic&apos;s.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 28,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Bar Moshe · AI builder & full-stack engineer
          </div>
        </div>

        {/* Vision hub orb */}
        <div
          style={{
            position: "absolute",
            top: 235,
            left: 795,
            width: 170,
            height: 170,
            borderRadius: 999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "radial-gradient(circle at 42% 38%, #d9cfff, #8b74f0 45%, #3a1e7a)",
            border: "3px solid rgba(147,130,255,0.85)",
            boxShadow: "0 0 90px 20px rgba(112,92,234,0.55)",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          Vision
        </div>

        {/* capability nodes */}
        {nodes.map((n) => (
          <div
            key={n.label}
            style={{
              position: "absolute",
              top: n.top,
              left: n.left,
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 22,
              fontWeight: 600,
              color: "#ffffff",
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#10c053",
              }}
            />
            {n.label}
          </div>
        ))}
      </div>
    ),
    { ...size },
  );
}
