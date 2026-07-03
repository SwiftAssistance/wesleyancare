/**
 * Editorial section header: hairline rule, mono label left, index number right.
 * Usage: <SectionHead n="03" label="Services" dark />
 */
export default function SectionHead({ n, label, dark = false }) {
  return (
    <div
      className={`border-t pt-4 flex items-baseline justify-between gap-4 ${
        dark ? 'border-cream/25' : 'border-evergreen/25'
      }`}
    >
      <span className={`label-mono ${dark ? 'text-cream/70' : 'text-evergreen/70'}`}>{label}</span>
      {n && <span className="label-mono text-terracotta">( {n} )</span>}
    </div>
  );
}
