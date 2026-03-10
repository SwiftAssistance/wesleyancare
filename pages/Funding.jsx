import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Phone, Mail, Shield, HelpCircle } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const STEPS = [
  { n: '01', title: 'Contact your local council', desc: 'Ask Slough Borough Council (or your local authority) for a care needs assessment. This is free and you are entitled to one.' },
  { n: '02', title: 'Needs assessment', desc: 'A social worker visits to assess what support you require. Be open and honest — this determines your eligibility and the level of funding.' },
  { n: '03', title: 'Financial assessment', desc: 'The council assesses your finances to determine how much they will contribute. You may need to contribute a top-up amount depending on your savings.' },
  { n: '04', title: 'Receive your Direct Payments', desc: 'If approved, you receive funds directly (or through a managed account) to pay for your chosen care provider — such as Wesleyan Care.' },
  { n: '05', title: 'We begin your care', desc: 'Contact us to discuss your approved care budget and we\'ll build a package that works within it. Simple.' },
];

const FAQS = [
  { q: 'What are Direct Payments?', a: 'Direct Payments are money from your local council that you use to arrange and pay for your own care, rather than the council arranging it for you. They give you more choice and control.' },
  { q: 'Will Direct Payments affect my benefits?', a: 'No. Direct Payments are not treated as income or capital, so they will not affect means-tested benefits such as Universal Credit, Housing Benefit, or Pension Credit.' },
  { q: 'Am I eligible?', a: 'You may be eligible if you have been assessed by your local council as needing care and support, and you have the capacity to consent to and manage Direct Payments (or have someone to manage them on your behalf).' },
  { q: 'Can I use Direct Payments to pay for Wesleyan Care?', a: 'Yes. You can use your Direct Payments to purchase care from Wesleyan Care. We work with clients funded through Direct Payments regularly.' },
  { q: 'What if I don\'t qualify for Direct Payments?', a: 'You can still access our services as a private, self-funded client. We offer the same high-quality care regardless of how you fund it. Contact us to discuss your options.' },
  { q: 'How do I start the process?', a: 'Contact Slough Borough Council\'s adult social care team to request a needs assessment. You can also call us and we\'ll help guide you through what to expect.' },
];

export default function Funding() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Funding</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6 max-w-3xl">
              Understanding how to fund your care.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Care can feel expensive and complicated to navigate. This page explains your options — including Direct Payments, which many families don't know they're entitled to.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── WHAT ARE DIRECT PAYMENTS ──────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Council Funding</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-6">
                What are Direct Payments?
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Direct Payments are funding provided by your local council that allow you to choose and manage your own care — rather than having the council arrange it on your behalf. They put you in control.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                If you are assessed as needing care, your local authority has a legal obligation to offer you Direct Payments. Many people in Slough and Berkshire are eligible but never claim them.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                The money can be paid directly to you, into a managed account, or to a third party — and <strong className="text-[#1B2A4A]">it does not count as income</strong>, so it won't affect your benefits.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="space-y-3">
                {[
                  'Eligible if assessed by your local council as needing care',
                  'You choose your own care provider (including Wesleyan Care)',
                  'Will not affect Universal Credit or other means-tested benefits',
                  'Can be managed by a family member or nominated person',
                  'Can be combined with top-up private funding',
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#7BA68D] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="bg-[#1B2A4A] rounded-2xl p-10 text-white">
              <div className="w-14 h-14 rounded-2xl bg-[#D4A855]/20 flex items-center justify-center text-[#D4A855] mb-8">
                <Shield size={28} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Private funding</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                You don't need to go through the council to access Wesleyan Care. Many of our clients are privately funded — they simply pay for the care they need, when they need it.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We offer transparent pricing with no hidden fees. Contact us to discuss your budget and we'll build a care package that works.
              </p>
              <div className="border-t border-white/10 pt-8">
                <a href="tel:01753424473" className="flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white py-4 px-6 rounded-full font-semibold transition-colors w-full justify-center mb-3">
                  <Phone size={16} /> 01753 424 473
                </a>
                <a href="mailto:support@wesleyancare.onmicrosoft.com" className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white py-4 px-6 rounded-full font-semibold transition-all w-full justify-center">
                  <Mail size={16} /> Email us
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Step by Step</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
                How to apply for Direct Payments.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {STEPS.map((step, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="flex gap-6 bg-[#FAF7F2] rounded-2xl p-7 border border-gray-100 hover:border-[#D4A855]/30 hover:shadow-sm transition-all">
                  <div className="font-serif text-3xl font-bold text-[#D4A855]/30 flex-shrink-0 pt-1 w-10">{step.n}</div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1B2A4A] mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Common Questions</p>
              <h2 className="font-serif text-4xl text-[#1B2A4A] leading-tight">Frequently asked questions.</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((faq, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <HelpCircle size={20} className="text-[#D4A855] flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-[#1B2A4A] mb-3">{faq.q}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] mb-5">We can help you navigate the process.</h2>
            <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
              Not sure where to start? Call us for a free conversation. We'll help you understand your options and what to ask for.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-md">
                <Phone size={16} /> Call 01753 424 473
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white px-8 py-4 rounded-full font-semibold transition-all">
                Get in touch <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
