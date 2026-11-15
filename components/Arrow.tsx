/**
 * Arrow icon that automatically flips in RTL via CSS.
 * Use this instead of literal "→" in CTAs.
 */
export function Arrow({
  className = "",
  size = 16
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`arrow-rtl-flip ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 8h12" />
      <path d="M9 3l5 5-5 5" />
    </svg>
  );
}
