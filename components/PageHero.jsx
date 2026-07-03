import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

/**
 * Editorial interior-page opener: mono breadcrumb + page index over a hairline,
 * oversized display heading, measured lead.
 * crumbs: [{ name, path? }] — last item rendered as current page.
 */
export default function PageHero({ crumbs = [], n, title, lead, children }) {
  return (
    <section className="pt-28 sm:pt-36 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="rule pt-4 flex items-baseline justify-between gap-4 mb-10 sm:mb-14">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 label-mono">
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2.5">
                  {i > 0 && <span className="text-evergreen/30">/</span>}
                  {c.path ? (
                    <Link to={c.path} className="text-evergreen/60 hover:text-terracotta transition-colors">{c.name}</Link>
                  ) : (
                    <span className="text-evergreen">{c.name}</span>
                  )}
                </span>
              ))}
            </nav>
            {n && <span className="label-mono text-terracotta">( {n} )</span>}
          </div>
          <h1 className="font-display text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-evergreen leading-[0.98] tracking-tight mb-8 max-w-4xl">
            {title}
          </h1>
          {lead && (
            <p className="text-evergreen/60 text-lg md:text-xl leading-relaxed max-w-xl">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
