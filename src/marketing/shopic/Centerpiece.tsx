// Centerpiece — the Vision hub, rebuilt to match Shopic's actual hero.
//
// Shopic's hero is a hub-and-spoke diagram: a glowing violet crystalline
// "Shopic Vision" orb at the center with dashed connectors radiating to four
// capability nodes (Smart Cart, Expedite Checkout, Smart SCO, Stock
// Availability), each a label + one-liner. This rebuilds that composition from
// scratch, but the nodes are *my* capabilities — the four things I'd bring to
// the team building Shopic Vision. Sparks flow along the connectors; the rings
// rotate and the halo pulses.
//
// Decorative, so aria-hidden; the real message is in the copy. Coordinates are
// rounded to 2dp so server and client strings match (no hydration mismatch).
// Motion is CSS-driven and reduced-motion safe (see shopic.css).

const CX = 240;
const CY = 190;
const r2 = (n: number) => Math.round(n * 100) / 100;

type Node = {
  x: number;
  y: number;
  side: "left" | "right";
  label: string;
  sub: string;
  cls: string;
  spark: string;
  color: string;
};

const NODES: Node[] = [
  { x: 132, y: 96, side: "left", label: "Full-Stack", sub: "React · Next · Node", cls: "n1", spark: "", color: "var(--shopic-accent-2)" },
  { x: 348, y: 96, side: "right", label: "AI & Agents", sub: "LLM apps · MCP · evals", cls: "n2", spark: "s2", color: "var(--shopic-green)" },
  { x: 132, y: 284, side: "left", label: "MCP Tooling", sub: "servers · plugins", cls: "n3", spark: "s3", color: "var(--shopic-accent-2)" },
  { x: 348, y: 284, side: "right", label: "DevOps · Cloud", sub: "Docker · K8s · CI/CD", cls: "n4", spark: "s4", color: "var(--shopic-green)" },
];

// Connector start point: 60px out from the orb center toward each node.
function connectorStart(nx: number, ny: number) {
  const dx = nx - CX;
  const dy = ny - CY;
  const len = Math.hypot(dx, dy);
  return { x: r2(CX + (dx / len) * 60), y: r2(CY + (dy / len) * 60) };
}

export function Centerpiece() {
  return (
    <svg
      className="shopic-vision"
      viewBox="0 0 480 380"
      role="img"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orbHalo" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#7d6bf0" stopOpacity="0.7" />
          <stop offset="55%" stopColor="#5a3fd0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#5a3fd0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orbGem" cx="42%" cy="38%" r="62%">
          <stop offset="0" stopColor="#d9cfff" />
          <stop offset="42%" stopColor="#8b74f0" />
          <stop offset="100%" stopColor="#3a1e7a" />
        </radialGradient>
      </defs>

      {/* connectors + sparks */}
      {NODES.map((n) => {
        const s = connectorStart(n.x, n.y);
        return (
          <g key={`c-${n.cls}`}>
            <line
              x1={s.x}
              y1={s.y}
              x2={n.x}
              y2={n.y}
              stroke="var(--shopic-accent-2)"
              strokeOpacity="0.28"
              strokeWidth="1.5"
            />
            <line
              className={`spark ${n.spark}`}
              x1={s.x}
              y1={s.y}
              x2={n.x}
              y2={n.y}
              stroke={n.color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        );
      })}

      {/* the glowing orb */}
      <circle className="halo" cx={CX} cy={CY} r="74" fill="url(#orbHalo)" />
      <circle
        className="ring ring-1"
        cx={CX}
        cy={CY}
        r="58"
        fill="none"
        stroke="var(--shopic-accent-2)"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeDasharray="46 16"
        strokeLinecap="round"
      />
      <circle
        className="ring ring-2"
        cx={CX}
        cy={CY}
        r="49"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeDasharray="4 12"
      />
      <circle cx={CX} cy={CY} r="41" fill="url(#orbGem)" />
      {/* crystalline facets */}
      <g stroke="#ffffff" strokeOpacity="0.28" strokeWidth="1" fill="none">
        <path d={`M${CX} ${CY - 41} L${CX - 22} ${CY + 8} L${CX} ${CY + 41} L${CX + 22} ${CY + 8} Z`} />
        <path d={`M${CX - 41} ${CY} L${CX} ${CY + 8} L${CX + 41} ${CY}`} />
      </g>
      <text
        className="core-label"
        x={CX}
        y={CY - 2}
        textAnchor="middle"
        fill="#ffffff"
        fontSize="16"
        fontWeight="600"
        letterSpacing="0.5"
      >
        Vision
      </text>
      <text
        x={CX}
        y={CY + 16}
        textAnchor="middle"
        className="shopic-mono"
        fill="#e7e0ff"
        fillOpacity="0.85"
        fontSize="8.5"
        letterSpacing="2"
      >
        BY BAR
      </text>

      {/* capability nodes */}
      {NODES.map((n) => {
        const anchor = n.side === "left" ? "end" : "start";
        const tx = n.side === "left" ? n.x - 16 : n.x + 16;
        return (
          <g className={`node ${n.cls}`} key={n.cls}>
            <circle cx={n.x} cy={n.y} r="10" fill={n.color} fillOpacity="0.16" />
            <circle cx={n.x} cy={n.y} r="4.5" fill={n.color} />
            <text
              x={tx}
              y={n.y - 2}
              textAnchor={anchor}
              fill="#ffffff"
              fontSize="13.5"
              fontWeight="600"
            >
              {n.label}
            </text>
            <text
              x={tx}
              y={n.y + 13}
              textAnchor={anchor}
              className="shopic-mono"
              fill="var(--shopic-ink-soft)"
              fontSize="9"
            >
              {n.sub}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
