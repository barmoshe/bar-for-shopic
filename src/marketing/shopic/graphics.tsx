// Decorative SVG pieces that give the page Shopic's graphic language: radial
// eclipse glows, dotted chevrons, and curved dashed connector arrows. All are
// aria-hidden (meaning lives in the copy) and coordinate-rounded so server and
// client markup match (no hydration mismatch).

// Radial violet/green glow blob. Positioned by the caller via `style`; visual
// treatment comes from the `.shopic-glow*` classes in shopic.css.
export function EclipseGlow({
  variant = "a",
  style,
}: {
  variant?: "a" | "b";
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`shopic-glow shopic-glow-${variant}`}
      style={style}
    />
  );
}

// Shopic's stacked dotted-V chevrons (a decorative pointer).
export function DottedChevrons({
  style,
}: {
  style?: React.CSSProperties;
}) {
  const rows = [0, 16, 32];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 96"
      width="120"
      height="96"
      style={style}
    >
      {rows.map((dy, i) => (
        <polyline
          key={i}
          points={`8,${12 + dy} 60,${44 + dy} 112,${12 + dy}`}
          fill="none"
          stroke="var(--shopic-accent-2)"
          strokeOpacity={0.5 - i * 0.12}
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="1 7"
        />
      ))}
    </svg>
  );
}

// Curved dashed connector arrow, the signature stitch between Shopic's sections.
export function ConnectorArrow({
  flip = false,
  style,
}: {
  flip?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 60"
      width="200"
      height="60"
      style={{ transform: flip ? "scaleX(-1)" : undefined, ...style }}
    >
      <path
        d="M6 10 C 70 10, 90 50, 176 46"
        fill="none"
        stroke="var(--shopic-accent-2)"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <path
        d="M166 38 L178 46 L166 54"
        fill="none"
        stroke="var(--shopic-accent-2)"
        strokeOpacity="0.85"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
