import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO, { buildBreadcrumbLD, buildFAQLD, buildServiceLD } from '../components/SEO.jsx';
import SERVICES from '../data/services.js';

const SPEC = [
  ['Availability', '1-hour visits to 24/7 live-in'],
  ['Typical start', 'Within 48–72 hours'],
  ['Urgent start', 'Same / next day where needed'],
  ['Coverage', 'Slough & Berkshire'],
  ['Funding', 'Private · Direct Payments'],
  ['Carers', 'DBS-checked, small regular team'],
];

export default function Service() {
  const { slug } = useParams();
  const index = SERVICES.findIndex(s => s.slug === slug);

  if (index === -1) return <Navigate to="/services" replace />;

  const service = SERVICES[index];
  const prev = SERVICES[(index + SERVICES.length - 1) % SERVICES.length];
  const next = SERVICES[(index + 1) % SERVICES.length];
  const nn = String(index + 1).padStart(2, '0');
  const total = String(SERVICES.length).padStart(2, '0');

  return (
    <>
      <SEO
        title={`${service.title} in Slough &amp; Berkshire`}
        description={`${service.intro} Private and Direct Payments welcome. Call 01753 424 473.`}
        canonical={`/services/${service.slug}`}
        image={service.img}
        extraSchema={[
          buildServiceLD(service),
          buildFAQLD(service.faqs),
          buildBreadcrumbLD([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
            { name: service.title },
          ]),
        ]}
      />

      {/* ── OPENER ────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="rule pt-4 flex items-baseline justify-between gap-4 mb-10 sm:mb-14">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 label-mono min-w-0">
                <Link to="/" className="text-evergreen/60 hover:text-terracotta transition-colors">Home</Link>
                <span className="text-evergreen/30">/</span>
                <Link to="/services" className="text-evergreen/60 hover:text-terracotta transition-colors">Services</Link>
                <span className="text-evergreen/30">/</span>
                <span className="text-evergreen truncate">{service.title}</span>
              </nav>
              <span className="label-mono text-terracotta whitespace-nowrap">( {nn} / {total} )</span>
            </div>
            <h1 className="font-display text-[13vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] text-evergreen leading-[0.98] tracking-tight mb-8 max-w-4xl">
              {service.title}<span className="text-terracotta">.</span>
            </h1>
            <p className="font-display italic text-2xl sm:text-3xl text-evergreen/70 leading-snug max-w-2xl">
              {service.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── IMAGE ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-14 sm:mb-20">
        <Reveal>
          <figure>
            <img
              src={service.img}
              alt={`${service.title} at home in Slough and Berkshire — Wesleyan Care`}
              className="w-full aspect-[21/9] object-cover"
              fetchpriority="high"
              decoding="async"
            />
            <figcaption className="flex items-baseline justify-between gap-4 pt-3 border-b border-evergreen/20 pb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/50">{service.imgCaption}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/50">Fig. {nn}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* ── SPEC SHEET + BODY ─────────────────────────── */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-12 gap-12 md:gap-8 items-start">

          {/* Spec rail */}
          <Reveal className="md:col-span-4 md:sticky md:top-24">
            <aside aria-label={`${service.title} at a glance`}>
              <p className="label-mono text-evergreen/50 border-t-2 border-evergreen pt-4 mb-1">At a glance</p>
              <dl>
                {SPEC.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-6 py-3.5 border-b border-evergreen/15">
                    <dt className="label-mono text-evergreen/50 whitespace-nowrap">{k}</dt>
                    <dd className="font-mono text-xs text-evergreen text-right">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-col gap-3 mt-8">
                <a href="tel:01753424473" className="btn btn-accent">
                  <Phone size={13} /> 01753 424 473
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Enquire about this service <ArrowRight size={13} />
                </Link>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/40 mt-5 leading-relaxed">
                Free, informal conversation first.<br />No obligation, no pressure.
              </p>
            </aside>
          </Reveal>

          {/* Body */}
          <div className="md:col-span-8 md:pl-10">
            <Reveal delay={60}>
              <p className="font-display text-2xl sm:text-3xl text-evergreen leading-[1.3] tracking-tight mb-14">
                {service.intro}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <SectionHead n="01" label="How I approach it" />
              <div className="space-y-5 text-evergreen/65 text-lg leading-relaxed mt-8 mb-14">
                {service.approach.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>

            <Reveal delay={80}>
              <SectionHead n="02" label="Who this helps" />
              <ul className="mt-6 mb-14">
                {service.whoFor.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-4 py-3.5 border-b border-evergreen/15 text-evergreen/75">
                    <span className="font-mono text-[10px] text-terracotta select-none">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <SectionHead n="03" label="This service includes" />
              <ul className="grid sm:grid-cols-2 gap-x-10 mt-6 mb-14">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-baseline gap-4 py-3 border-b border-evergreen/15 text-evergreen/75 text-[0.95rem]">
                    <span className="font-mono text-[10px] text-terracotta select-none">{String(i + 1).padStart(2, '0')}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={80}>
              <SectionHead n="04" label="Asked about this service" />
              <div className="mt-6">
                <Accordion items={service.faqs} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOLIO NAV ─────────────────────────────────── */}
      <nav className="border-t border-evergreen/20" aria-label="More services">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2">
          <Link to={`/services/${prev.slug}`} className="group py-10 pr-8 sm:border-r sm:border-evergreen/20">
            <p className="label-mono text-evergreen/45 mb-3 flex items-center gap-2">
              <ArrowLeft size={11} /> Previous service
            </p>
            <p className="font-display text-2xl text-evergreen tracking-tight group-hover:text-terracotta transition-colors">
              {prev.title}
            </p>
          </Link>
          <Link to={`/services/${next.slug}`} className="group py-10 sm:pl-8 text-right border-t sm:border-t-0 border-evergreen/20">
            <p className="label-mono text-evergreen/45 mb-3 flex items-center justify-end gap-2">
              Next service <ArrowRight size={11} />
            </p>
            <p className="font-display text-2xl text-evergreen tracking-tight group-hover:text-terracotta transition-colors">
              {next.title}
            </p>
          </Link>
        </div>
      </nav>
    </>
  );
}
