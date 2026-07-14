import { ImageResponse } from "next/og";

// `force-static` is required for the GH_PAGES export build to collect this route
// (see next.config.ts / ADR 0169).
export const dynamic = "force-static";

export const alt = "Bar Moshe, for Shopic";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Shopic brand: dark plum feed, violet + vision-green, mono HUD label, and a
// bounding-box reticle echoing item-level recognition.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(120% 90% at 82% -10%, #3a1e63, #1a0930 60%)",
          color: "#ffffff",
          position: "relative",
        }}
      >
        {/* detection reticle, top-right */}
        <div
          style={{
            position: "absolute",
            top: 70,
            right: 80,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              letterSpacing: 3,
              color: "#10c053",
              fontFamily: "monospace",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#10c053",
              }}
            />
            LIVE
          </div>
          <div
            style={{
              width: 260,
              height: 150,
              border: "3px solid #9382ff",
              borderRadius: 8,
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 4,
            color: "#9382ff",
            fontFamily: "monospace",
          }}
        >
          SHOPIC · VISION · 0.98
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontSize: 66,
            fontWeight: 600,
            lineHeight: 1.05,
            maxWidth: 820,
          }}
        >
          I build the software behind vision like Shopic&apos;s.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 30,
            fontSize: 30,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          Bar Moshe · AI builder & full-stack engineer
        </div>
      </div>
    ),
    { ...size },
  );
}
