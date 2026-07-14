// Centerpiece — Shopic Vision, reframed.
//
// Shopic's signature motif is item-level recognition: a live camera feed with
// bounding boxes and confidence scores drawn over every product in the cart
// ("Shopic Vision sees it all through item level recognition"). This rebuilds
// that overlay from scratch as an inline SVG, but the boxes detect *my stack*
// instead of groceries — full-stack, AI/agents, MCP tooling, DevOps — each with
// a mono HUD label and a confidence score. A scan line sweeps the frame.
//
// Decorative, so aria-hidden; the real message lives in the copy. Coordinates
// are integer/2dp literals so server and client strings match (no hydration
// mismatch). Motion is CSS-driven and reduced-motion safe (see shopic.css).

type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  conf: string;
  cls: string;
  color: string;
};

const L = 13; // corner-bracket arm length

const BOXES: Box[] = [
  { x: 38, y: 78, w: 156, h: 92, label: "FULL-STACK", conf: "0.98", cls: "b1", color: "var(--shopic-accent-2)" },
  { x: 236, y: 66, w: 150, h: 74, label: "AI · AGENTS", conf: "0.96", cls: "b2", color: "var(--shopic-green)" },
  { x: 54, y: 206, w: 150, h: 82, label: "MCP TOOLING", conf: "0.94", cls: "b3", color: "var(--shopic-accent-2)" },
  { x: 244, y: 190, w: 142, h: 100, label: "DEVOPS · CI/CD", conf: "0.92", cls: "b4", color: "var(--shopic-green)" },
];

function DetectionBox({ x, y, w, h, label, conf, cls, color }: Box) {
  const brackets = [
    `M${x} ${y + L} L${x} ${y} L${x + L} ${y}`,
    `M${x + w - L} ${y} L${x + w} ${y} L${x + w} ${y + L}`,
    `M${x} ${y + h - L} L${x} ${y + h} L${x + L} ${y + h}`,
    `M${x + w - L} ${y + h} L${x + w} ${y + h} L${x + w} ${y + h - L}`,
  ];
  const tabW = label.length * 6.4 + 40;
  return (
    <g className={`box ${cls}`}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="4"
        fill={color}
        fillOpacity="0.06"
        stroke={color}
        strokeOpacity="0.35"
        strokeDasharray="4 5"
      />
      {brackets.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      <rect x={x} y={y - 18} width={tabW} height="17" rx="3" fill={color} />
      <text
        x={x + 7}
        y={y - 5.5}
        className="shopic-mono"
        fontSize="9.5"
        fontWeight="600"
        fill="#160a2b"
      >
        {label} {conf}
      </text>
    </g>
  );
}

export function Centerpiece() {
  return (
    <svg
      className="shopic-vision"
      viewBox="0 0 424 340"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="feed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#26123f" />
          <stop offset="1" stopColor="#190a2e" />
        </linearGradient>
        <linearGradient id="scanline" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="var(--shopic-accent-2)" stopOpacity="0" />
          <stop offset="1" stopColor="var(--shopic-accent-2)" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* camera-feed frame */}
      <rect
        x="4"
        y="4"
        width="416"
        height="332"
        rx="18"
        fill="url(#feed)"
        stroke="var(--shopic-border-strong)"
        strokeWidth="1.5"
      />

      {/* faint scan grid */}
      <g stroke="var(--shopic-accent-2)" strokeOpacity="0.07" strokeWidth="1">
        <line x1="4" y1="90" x2="420" y2="90" />
        <line x1="4" y1="176" x2="420" y2="176" />
        <line x1="4" y1="262" x2="420" y2="262" />
        <line x1="110" y1="4" x2="110" y2="336" />
        <line x1="212" y1="4" x2="212" y2="336" />
        <line x1="314" y1="4" x2="314" y2="336" />
      </g>

      {/* top HUD bar */}
      <text
        x="22"
        y="34"
        className="shopic-mono"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.5"
        fill="var(--shopic-ink-soft)"
      >
        SHOPIC · VISION
      </text>
      <g className="blip">
        <circle cx="360" cy="30" r="4" fill="var(--shopic-green)" />
      </g>
      <text
        x="370"
        y="34"
        className="shopic-mono"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.5"
        fill="var(--shopic-green)"
      >
        LIVE
      </text>

      {/* sweeping scan line */}
      <g className="scan">
        <rect x="10" y="52" width="404" height="26" fill="url(#scanline)" opacity="0.5" />
        <line
          x1="10"
          y1="78"
          x2="414"
          y2="78"
          stroke="var(--shopic-accent-2)"
          strokeWidth="1.5"
          strokeOpacity="0.9"
        />
      </g>

      {/* detection boxes */}
      {BOXES.map((b) => (
        <DetectionBox key={b.cls} {...b} />
      ))}

      {/* bottom HUD readout */}
      <text
        x="22"
        y="322"
        className="shopic-mono"
        fontSize="10"
        letterSpacing="1"
        fill="var(--shopic-ink-faint)"
      >
        4 ITEMS RECOGNIZED · idea → deploy
      </text>
    </svg>
  );
}
