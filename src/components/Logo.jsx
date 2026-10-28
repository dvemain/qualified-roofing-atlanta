/**
 * Qualified Roofing of Atlanta — brand mark.
 * A gable roofline sheltering a Georgia peach: "everything under your roof".
 * The right eave finishes in a short check-stroke — qualified, inspected, done.
 * Two colors, no gradients, legible from favicon to yard sign.
 */
export function Mark({ size = 48, roof = "var(--pine)", peach = "var(--peach)", leaf = "var(--moss)", title }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role={title ? "img" : "presentation"} aria-hidden={title ? undefined : true}>
      {title && <title>{title}</title>}
      {/* peach */}
      <circle cx="34" cy="43" r="12" fill={peach} />
      <path d="M34 31.5c-3-5-7-6-9.5-5.5 1 4.5 4.5 7 9.5 5.5z" fill={leaf} />
      <path d="M34 31.5v-4" stroke={leaf} strokeWidth="2.2" strokeLinecap="round" />
      <path d="M30.5 43.5c0-4 2-6.5 3.5-7.5" stroke="#fff" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* gable + check eave */}
      <path d="M7 36 L32 12 L52 31" fill="none" stroke={roof} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 25 L52 31 L61 22" fill="none" stroke={roof} strokeWidth="7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark({ onDark = false }) {
  return (
    <span className={"wordmark" + (onDark ? " on-dark" : "")}>
      <span className="wm-name">Qualified Roofing</span>
      <span className="wm-sub">of Atlanta</span>
    </span>
  );
}

export default function Logo({ onDark = false, size = 50 }) {
  return (
    <a className="brand" href="#top" aria-label="Qualified Roofing of Atlanta — home">
      <Mark size={size} roof={onDark ? "var(--cream)" : "var(--pine)"} />
      <Wordmark onDark={onDark} />
    </a>
  );
}
