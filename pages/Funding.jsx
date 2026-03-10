import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';

const STEPS = [
  { n: '01', title: 'Request a needs assessment', desc: 'Contact Slough Borough Council (or your local authority) and ask for a care needs assessment. You are entitled to one — it\'s free, and they cannot refuse.' },
  { n: '02', title: 'Attend the assessment', desc: 'A social worker visits to understand what support you require. Be open and specific. The outcome of this assessment determines what funding you\'re offered.' },
  { n: '03', title: 'Receive a financial assessment', desc: 'The council assesses your finances to calculate how much they\'ll contribute. You may be asked to top up from your own resources depending on savings and income.' },
  { n: '04', title: 'Start receiving Direct Payments', desc: 'If approved, funds arrive directly into your account (or a managed account) on a regular basis. You decide which care provider to use.' },
  { n: '05', title: 'Choose Wesleyan Care', desc: 'Contact us with your approved care budget. We\'ll build a package around it. The process is straightforward and we\'re happy to walk you through it.' },
];

const FAQS = [
  { q: 'What are Direct Payments?',                    a: 'Direct Payments are money from your local council paid directly to you, which you use to arrange and pay for your own care rather than having the council arrange it. They give you choice and control over who supports you and how.' },
  { q: 'Will they affect my benefits?',                a: 'No. Direct Payments are not treated as income or capital. They will not reduce Universal Credit, Housing Benefit, Pension Credit, or any other means-tested benefit.' },
  { q: 'Who is eligible?',                             a: 'You may be eligible if your local council has assessed you as needing care and support, and you have the capacity to consent to and manage Direct Payments (or have someone — a family member or third party — to manage them on your behalf).' },
  { q: 'Can I use them to pay for Wesleyan Care?',     a: 'Yes. Once you\'ve been approved for Direct Payments, you can use them to purchase care from any eligible provider — including Wesleyan Care. We work with Direct Payments clients regularly.' },
  { q: 'What if I don\'t qualify?',                    a: 'You can still access our services as a private, self-funded client. We offer the same standard of care regardless of how it\'s funded. Call us to discuss your situation and we\'ll help you understand your options.' },
  { q: 'How do I start the application?',              a: 'Call Slough Borough Council\'s adult social care team and ask for a care needs assessment. Alternatively, call us first — we can explain exactly what to expect and what information to have ready.' },
];

export default function Funding() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-0 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 pb-24">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Funding</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-3xl">
              How to pay for your care.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Many families in Slough are entitled to Direct Payments from the council but never know to ask. This page explains what they are, whether you qualify, and how the process works.
            </p>
          </Reveal>
        </div>
        {/* Bottom border decoration */}
        <div className="border-t border-white/10" />
      </section>

      {/* ── WHAT ARE DIRECT PAYMENTS ──────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-6">Council Funding Explained</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-8">
                What are Direct Payments?
              </h2>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  If your local council assesses you as needing care and support, they have a legal duty to offer you Direct Payments. This means the funding comes to you directly — and you choose who provides your care.
                </p>
                <p>
                  Direct Payments give you control. Rather than the council arranging care for you through their own contractors, you receive the money and spend it with a provider of your choice — such as Wesleyan Care.
                </p>
                <p>
                  The money does not count as income. It will not affect means-tested benefits, and it can be managed by a family member or nominated person if that's easier for you.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-gray-100 p-8 bg-[#FAF7F2]">
              <h3 className="font-serif text-2xl text-[#1B2A4A] mb-6">Private funding</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                You don't have to go through the council to access Wesleyan Care. Many of our clients pay privately — either because they prefer the flexibility, or because they're not eligible for council funding.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We offer transparent pricing with no hidden fees. Contact us to discuss your budget and we'll put together a package that works.
              </p>
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <a href="tel:01753424473" className="flex items-center gap-3 text-sm font-semibold text-[#1B2A4A] hover:text-[#D4A855] transition-colors">
                  <Phone size={15} className="text-[#D4A855]" /> 01753 424 473
                </a>
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="flex items-center gap-3 text-sm font-semibold text-[#1B2A4A] hover:text-[#D4A855] transition-colors">
                  <Mail size={15} className="text-[#D4A855]" /> support@wesleyancare.onmicrosoft.com
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-16 max-w-xl">
              How to apply, step by step.
            </h2>
          </Reveal>
          <div className="space-y-0">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex gap-8 py-10 border-b border-gray-200 last:border-0">
                  <p className="font-serif text-5xl md:text-6xl font-bold text-[#D4A855]/25 leading-none flex-shrink-0 w-20 select-none pt-1">
                    {step.n}
                  </p>
                  <div>
                    <h3 className="font-bold text-xl text-[#1B2A4A] mb-3">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed max-w-2xl">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-14">
              Common questions.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
              We can help you navigate this.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Not sure where to start? Call us. We'll explain the process, tell you what to ask for, and answer any questions about eligibility or funding honestly.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-sm">
                  <Phone size={16} /> Call 01753 424 473
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 border border-[#1B2A4A]/25 text-[#1B2A4A] hover:border-[#1B2A4A] px-8 py-4 rounded-full font-semibold transition-colors">
                  Get in touch <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
