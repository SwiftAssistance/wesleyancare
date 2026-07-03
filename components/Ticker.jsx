/**
 * Slow editorial ticker of coverage areas. Decorative — a static
 * screen-reader list is provided alongside. The global
 * prefers-reduced-motion rule freezes the animation.
 */
export default function Ticker({ items, label = 'Areas covered' }) {
  const row = items.map(a => a.toUpperCase()).join(' — ');
  return (
    <div className="border-y border-evergreen/20 py-4 overflow-hidden">
      <div className="flex whitespace-nowrap w-max animate-marquee" aria-hidden="true">
        <span className="label-mono text-evergreen/50 pr-4">{row}&ensp;—&ensp;</span>
        <span className="label-mono text-evergreen/50 pr-4">{row}&ensp;—&ensp;</span>
      </div>
      <p className="sr-only">{label}: {items.join(', ')}.</p>
    </div>
  );
}
