import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO, { buildBreadcrumbLD, buildFAQLD, SITE_URL } from '../components/SEO.jsx';
import SERVICES from '../data/services.js';

const FAQS = [
  { q: 'How quickly can care start?',                       a: 'In most cases, I can begin care within 48–72 hours of an initial assessment. For urgent situations — such as hospital discharges — I can often arrange same-day or next-day start. Call me and I\'ll tell you what\'s realistic for your situation.' },
  { q: 'Can I choose the times and days of visits?',        a: 'Yes. Care schedules are built around your routine, not mine. Whether you need early morning support, evening visits, or weekend care, I\'ll work with you to find a pattern that fits.' },
  { q: 'Will I have the same carer each time?',             a: 'Consistency is a core part of how I work. I assign a small, regular team to every client. You\'ll know who is coming and when. If a carer is unavailable, I\'ll let you know in advance and send someone your team already knows.' },
  { q: 'Do you accept Direct Payments?',                    a: 'Yes. If your local council has approved you for Direct Payments, you can use them to pay for Wesleyan Care. I work with Direct Payments clients regularly and can help you understand how to allocate your budget.' },
  { q: 'What if my needs change?',                          a: 'Care plans are reviewed regularly and adjusted without bureaucracy. If your condition changes, your hours need increasing, or something isn\'t working — I respond quickly. You don\'t need to go through a formal process to make a change.' },
  { q: 'Are your carers trained for specialist conditions?', a: 'Yes. All carers receive mandatory training, and those working with clients who have dementia, mental health conditions, cardiac needs, or spinal injuries receive additional specialist modules. Training is ongoing, not a one-off.' },
];

const SERVICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wesleyan Care Services',
  url: `${SITE_URL}/services`,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}/services/${s.slug}`,
  })),
};

export default function Services() {
  return (
    <>
      <SEO
        title="Services – Dementia, Palliative, Cardiac &amp; Home Care | Slough"
        description="Specialist private home care in Slough and Berkshire: dementia care, palliative care, cardiac care, spinal injury support, mental health support, and home &amp; personal care. Direct Payments accepted."
        canonical="/services"
        extraSchema={[
          SERVICE_LD,
          buildFAQLD(FAQS),
          buildBreadcrumbLD([{ name: 'Home', path: '/' }, { name: 'Services' }]),
        ]}
      />

      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]}
        n="03"
        title={<>An index of<br /><em className="text-terracotta">what I do</em>.</>}
        lead="Six specialisms, one approach: built around the person. Private and self-funded care across Slough and Berkshire; Direct Payments accepted."
      >
        <ul className="font-mono text-xs text-evergreen/55 flex flex-wrap gap-x-8 gap-y-2 mt-9">
          <li>— Private &amp; self-funded</li>
          <li>— 1-hour visits to live-in</li>
          <li>— Slough &amp; Berkshire</li>
        </ul>
      </PageHero>

      {/* ── TABLE OF CONTENTS ─────────────────────────── */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40}>
              <Link
                to={`/services/${s.slug}`}
                className="group grid grid-cols-[3rem_1fr] sm:grid-cols-[6rem_1fr_auto] items-baseline gap-4 sm:gap-8 py-8 sm:py-10 border-t border-evergreen/20 last:border-b transition-colors hover:bg-sand/50"
              >
                <span className="font-display text-2xl sm:text-3xl text-terracotta/40 group-hover:text-terracotta transition-colors select-none">
                  0{i + 1}
                </span>
                <span>
                  <span className="block font-display text-3xl sm:text-5xl lg:text-6xl text-evergreen tracking-tight leading-[1.02] group-hover:text-terracotta transition-colors mb-3">
                    {s.title}
                  </span>
                  <span className="block font-display italic text-lg sm:text-xl text-evergreen/50 leading-snug max-w-xl">
                    {s.tagline}
                  </span>
                </span>
                <span className="hidden sm:flex flex-col items-end gap-3 self-center">
                  <ArrowUpRight size={22} className="text-evergreen/30 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  <span className="label-mono text-evergreen/35 group-hover:text-evergreen/60 transition-colors">Read</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="border-t border-evergreen/20 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="07" label="Common questions" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-4" delay={60}>
              <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-tight md:sticky md:top-28">
                Questions families ask me.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-8" delay={120}>
              <Accordion items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BOTTOM NOTE ───────────────────────────────── */}
      <section className="bg-terracotta text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-8">
              <div>
                <p className="label-mono text-white/70 border-t border-white/30 pt-4 mb-8">A note</p>
                <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight mb-6">Not sure what you need?</h2>
                <p className="text-white/85 text-lg leading-relaxed max-w-2xl">
                  Many clients come to me with needs that don't fit neatly into one category — that's completely normal. Call me for a free, informal conversation and I'll help you figure out what makes sense.
                </p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4" delay={100}>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <a href="tel:01753424473" className="btn bg-white text-terracotta-dark hover:bg-evergreen hover:text-cream">
                  <Phone size={13} /> 01753 424 473
                </a>
                <Link to="/contact" className="btn border border-white/50 text-white hover:bg-white hover:text-terracotta-dark hover:border-white">
                  Send a message <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
