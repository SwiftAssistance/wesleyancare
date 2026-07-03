import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

/**
 * Light interior-page hero.
 * crumbs: [{ name, path? }] — last item rendered as current page.
 */
export default function PageHero({ crumbs = [], title, lead, children }) {
  return (
    <section className="pt-32 sm:pt-36 pb-14 sm:pb-20 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-sand blur-3xl opacity-70 pointer-events-none"
      />
      <div className="max-w-6xl mx-auto px-5 relative">
        <Reveal>
          {crumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-evergreen/25">/</span>}
                  {c.path ? (
                    <Link to={c.path} className="text-terracotta hover:text-terracotta-dark transition-colors">{c.name}</Link>
                  ) : (
                    <span className="text-evergreen/45">{c.name}</span>
                  )}
                </span>
              ))}
            </nav>
          )}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-evergreen leading-[1.02] tracking-tight mb-7 max-w-3xl">
            {title}
          </h1>
          {lead && (
            <p className="text-evergreen/60 text-lg md:text-xl leading-relaxed max-w-2xl">
              {lead}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
