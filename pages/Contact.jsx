import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO, { buildBreadcrumbLD } from '../components/SEO.jsx';

const FIELD_CLASSES =
  'w-full bg-transparent border-0 border-b border-evergreen/30 rounded-none px-0 py-3 text-lg text-evergreen placeholder:text-evergreen/30 focus:outline-none focus:ring-0 focus:border-terracotta transition-colors';

const CONTACT_METHODS = [
  {
    n: '01',
    label: 'Call',
    value: '01753 424 473',
    detail: 'Mon–Fri 8am–6pm · Sat 9am–1pm',
    href: 'tel:01753424473',
  },
  {
    n: '02',
    label: 'Write',
    value: 'support@wesleyancare.onmicrosoft.com',
    detail: 'Reply within 1 working day',
    href: 'mailto:support@wesleyancare.onmicrosoft.com',
  },
  {
    n: '03',
    label: 'Visit',
    value: '18 Teesdale Road, Slough',
    detail: 'SL2 1UD, Berkshire',
    href: 'https://maps.google.com/?q=18+Teesdale+Road+Slough+SL2+1UD',
    external: true,
  },
];

export default function Contact() {
  const [form, setForm]           = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  // No form backend — compose the enquiry in the visitor's own email app
  // so the message actually reaches the practice.
  const handleSubmit = e => {
    e.preventDefault();
    const subject = `Care enquiry — ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      form.phone && `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      form.service && `Service of interest: ${form.service}`,
      '',
      form.message,
    ].filter(Boolean).join('\n');
    window.location.href =
      `mailto:support@wesleyancare.onmicrosoft.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact – Private Home Care Enquiries | Slough &amp; Berkshire"
        description="Get in touch with Wesleyan Care for private home care in Slough and Berkshire. Call 01753 424 473 or send a message. I respond within one working day. No obligation, no pressure."
        canonical="/contact"
        extraSchema={[buildBreadcrumbLD([{ name: 'Home', path: '/' }, { name: 'Contact' }])]}
      />

      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Contact' }]}
        n="05"
        title={<>Talk to <em className="text-terracotta">me</em>.</>}
        lead="Whether you're ready to arrange care or just want to ask a question — I'm here, I'm local, and there's no pressure."
      />

      {/* ── CONTACT METHODS ───────────────────────────── */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-3">
            {CONTACT_METHODS.map((m, i) => (
              <Reveal key={m.label} delay={i * 60}>
                <a
                  href={m.href}
                  {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`group block border-t border-evergreen/20 pt-5 pb-8 pr-8 h-full ${i > 0 ? 'sm:border-l sm:border-evergreen/20 sm:pl-8' : ''}`}
                >
                  <div className="flex items-baseline justify-between mb-8">
                    <span className="label-mono text-evergreen/60">{m.label}</span>
                    <span className="label-mono text-terracotta">{m.n}</span>
                  </div>
                  <p className="font-display text-xl sm:text-[1.35rem] text-evergreen tracking-tight leading-snug break-all group-hover:text-terracotta transition-colors mb-2.5">
                    {m.value}
                  </p>
                  <p className="font-mono text-xs text-evergreen/50">{m.detail}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + NOTES ──────────────────────────────── */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="01" label="Send a message" /></Reveal>
          <div className="grid md:grid-cols-12 gap-12 md:gap-8 mt-10 sm:mt-14">

            {/* Form */}
            <div className="md:col-span-7">
              <Reveal delay={60}>
                {submitted ? (
                  <div className="border-t-2 border-evergreen pt-8">
                    <p className="label-mono text-terracotta mb-6">One more step</p>
                    <h3 className="font-display text-4xl text-evergreen tracking-tight mb-5">Nearly there.</h3>
                    <p className="text-evergreen/60 text-lg leading-relaxed mb-5 max-w-md">
                      Your email app should have opened with your message ready — just press send. I reply within one working day.
                    </p>
                    <p className="text-evergreen/60 leading-relaxed mb-9 max-w-md">
                      If it didn't open, email{' '}
                      <a href="mailto:support@wesleyancare.onmicrosoft.com" className="text-evergreen font-semibold underline underline-offset-4 decoration-terracotta hover:text-terracotta transition-colors break-all">support@wesleyancare.onmicrosoft.com</a>{' '}
                      or call{' '}
                      <a href="tel:01753424473" className="text-evergreen font-semibold underline underline-offset-4 decoration-terracotta hover:text-terracotta transition-colors">01753 424 473</a>.
                    </p>
                    <Link to="/" className="btn btn-outline">
                      Back to homepage <ArrowRight size={13} />
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-9">
                    <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
                      <div>
                        <label htmlFor="contact-name" className="label-mono text-evergreen/60 block mb-1">01 — Full name *</label>
                        <input
                          id="contact-name" type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your name" autoComplete="name"
                          className={FIELD_CLASSES}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="label-mono text-evergreen/60 block mb-1">02 — Phone</label>
                        <input
                          id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="07700 000000" autoComplete="tel"
                          className={FIELD_CLASSES}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="label-mono text-evergreen/60 block mb-1">03 — Email address *</label>
                      <input
                        id="contact-email" type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="you@example.com" autoComplete="email"
                        className={FIELD_CLASSES}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="label-mono text-evergreen/60 block mb-1">04 — Service of interest</label>
                      <select
                        id="contact-service" name="service" value={form.service} onChange={handleChange}
                        className={`${FIELD_CLASSES} cursor-pointer`}
                      >
                        <option value="">Select a service (optional)</option>
                        <option>Dementia Care</option>
                        <option>Palliative Care</option>
                        <option>Cardiac Care</option>
                        <option>Spinal Injury Support</option>
                        <option>Mental Health Support</option>
                        <option>Home &amp; Personal Care</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="label-mono text-evergreen/60 block mb-1">05 — Your message *</label>
                      <textarea
                        id="contact-message" name="message" required value={form.message} onChange={handleChange}
                        rows={4} placeholder="Tell me about your situation and what you're looking for..."
                        className={`${FIELD_CLASSES} resize-none`}
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-6 pt-2">
                      <button type="submit" className="btn btn-solid">
                        Send message <ArrowUpRight size={13} />
                      </button>
                      <p className="font-mono text-xs text-evergreen/50">
                        or call{' '}
                        <a href="tel:01753424473" className="text-evergreen hover:text-terracotta transition-colors underline underline-offset-4 decoration-evergreen/30">
                          01753 424 473
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </Reveal>
            </div>

            {/* Notes column */}
            <div className="md:col-span-5 md:pl-10 space-y-12">
              <Reveal delay={100}>
                <div>
                  <p className="label-mono text-evergreen/50 border-t border-evergreen/20 pt-4 mb-5">No pressure, no obligation</p>
                  <div className="space-y-4 text-evergreen/60 leading-relaxed">
                    <p>
                      When you get in touch, you'll speak with me directly. I take the time to listen before I make any suggestions — because until I understand your situation, I can't tell you what's right for you.
                    </p>
                    <p>
                      If you're just at the information-gathering stage, that's completely fine. I'd rather answer your questions honestly now than rush you into anything.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={140}>
                <div>
                  <p className="label-mono text-evergreen/50 border-t border-evergreen/20 pt-4 mb-5">Office hours</p>
                  <dl className="font-mono text-sm space-y-2.5">
                    <div className="flex justify-between gap-4 text-evergreen/70">
                      <dt>Mon – Fri</dt><dd className="text-evergreen">8:00am – 6:00pm</dd>
                    </div>
                    <div className="flex justify-between gap-4 text-evergreen/70">
                      <dt>Saturday</dt><dd className="text-evergreen">9:00am – 1:00pm</dd>
                    </div>
                    <div className="flex justify-between gap-4 text-evergreen/40">
                      <dt>Sunday</dt><dd>Closed</dd>
                    </div>
                  </dl>
                  <p className="text-sm text-evergreen/50 leading-relaxed mt-5">
                    For urgent care matters outside these hours, call my main number and leave a message.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <div>
                  <p className="label-mono text-evergreen/50 border-t border-evergreen/20 pt-4 mb-5">Confidentiality</p>
                  <p className="text-sm text-evergreen/60 leading-relaxed">
                    Everything you share with me is treated in confidence. I will never pass your details to third parties or contact you without your permission.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={220}>
                <div>
                  <p className="label-mono text-evergreen/50 border-t border-evergreen/20 pt-4 mb-5">Coverage</p>
                  <p className="text-sm text-evergreen/60 leading-relaxed mb-4">
                    Slough, Berkshire &amp; surrounding areas — including Windsor, Maidenhead, Langley, Iver, Reading, and beyond.
                  </p>
                  <Link to="/services" className="label-mono text-evergreen hover:text-terracotta transition-colors inline-flex items-center gap-2">
                    View services <ArrowRight size={11} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
