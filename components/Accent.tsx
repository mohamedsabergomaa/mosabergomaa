/**
 * Accent component: italic emphasis that adapts to language.
 * English: Instrument Serif italic (editorial display serif).
 * Arabic: Amiri italic (authentic Naskh calligraphic italic — the closest Arabic parallel).
 *
 * The `.font-accent` class in globals.css handles both languages automatically
 * via html[lang="…"] selectors, so this component works in both server and client contexts.
 */
export function Accent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-accent text-accent ${className}`}>{children}</span>;
}
