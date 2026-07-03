import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO, { buildBreadcrumbLD } from '../components/SEO.jsx';

const INPUT_CLASSES =
  'w-full bg-cream border border-evergreen/10 rounded-2xl px-5 py-3.5 text-sm text-evergreen placeholder:text-evergreen/30 focus:outline-none focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 transition-colors';

const CONTACT_METHODS = [
  {
    icon: Phone,
    label: 'Call me',
    value: '01753 424 473',
    detail: 'Mon–Fri 8am–6pm · Sat 9am–1pm',
    href: 'tel:01753424473',
  },
  {
    icon: Mail,
    label: 'Email me',
    value: 'support@wesleyancare.onmicrosoft.com',
    detail: 'Reply within 1 working day',
    href: 'mailto:support@wesleyancare.onmicrosoft.com',
  },
  {
    icon: MapPin,
    label: 'Visit me',
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
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

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
        title={<>Talk to <em className="text-terracotta">me</em>.</>}
        lead="Whether you're ready to arrange care or just want to ask a question — I'm here, I'm local, and there's no pressure."
      />

      {/* ── CONTACT METHODS ───────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-3 gap-5">
          {CONTACT_METHODS.map((m, i) => (
            <Reveal key={m.label} delay={i * 70}>
              <a
                href={m.href}
                {...(m.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="group flex flex-col bg-parchment border border-evergreen/5 hover:border-terracotta/30 rounded-3xl p-7 h-full hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
              >
                <span className="w-11 h-11 rounded-2xl bg-sand text-evergreen flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:text-white transition-colors">
                  <m.icon size={18} />
                </span>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-evergreen/40 mb-2">{m.label}</p>
                <p className="font-semibold text-evergreen text-sm break-all">{m.value}</p>
                <p className="text-xs text-evergreen/45 mt-1.5">{m.detail}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────── */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-5 gap-10">

          {/* Left: info */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div>
                <h2 className="font-display text-3xl text-evergreen tracking-tight leading-tight mb-5">
                  No pressure. No obligation.
                </h2>
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

            <Reveal delay={100}>
              <div className="bg-parchment border border-evergreen/5 rounded-3xl p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-9 h-9 rounded-xl bg-sand text-evergreen flex items-center justify-center">
                    <Clock size={15} />
                  </span>
                  <p className="font-semibold text-evergreen text-sm">Office hours</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-evergreen/60">
                    <span>Monday – Friday</span><span className="font-semibold text-evergreen">8:00am – 6:00pm</span>
                  </div>
                  <div className="flex justify-between text-evergreen/60">
                    <span>Saturday</span><span className="font-semibold text-evergreen">9:00am – 1:00pm</span>
                  </div>
                  <div className="flex justify-between text-evergreen/40">
                    <span>Sunday</span><span>Closed</span>
                  </div>
                </div>
                <p className="text-xs text-evergreen/45 mt-5 pt-5 border-t border-evergreen/8">
                  For urgent care matters outside these hours, call my main number and leave a message.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="bg-parchment border border-evergreen/5 rounded-3xl p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-xl bg-sand text-evergreen flex items-center justify-center">
                    <Shield size={15} />
                  </span>
                  <p className="font-semibold text-evergreen text-sm">Your enquiry is confidential</p>
                </div>
                <p className="text-sm text-evergreen/55 leading-relaxed">
                  Everything you share with me is treated in confidence. I will never pass your details to third parties or contact you without your permission.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <Reveal delay={80}>
              {submitted ? (
                <div className="bg-parchment border border-evergreen/5 rounded-[2rem] p-12 text-center">
                  <span className="w-16 h-16 rounded-full bg-moss/15 text-moss flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="font-display text-3xl text-evergreen mb-3">Thank you.</h3>
                  <p className="text-evergreen/55 mb-8 max-w-sm mx-auto">
                    I'll be back in touch within one working day. If it's urgent, call me on{' '}
                    <strong className="text-evergreen">01753 424 473</strong>.
                  </p>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-evergreen hover:bg-evergreen-light text-cream px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
                  >
                    Back to homepage <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <div className="bg-parchment border border-evergreen/5 rounded-[2rem] p-8 md:p-10">
                  <h3 className="font-display text-3xl text-evergreen tracking-tight mb-2">Send me a message</h3>
                  <p className="text-sm text-evergreen/45 mb-8">I reply within one working day.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold text-evergreen/70 mb-2">Full name *</label>
                        <input
                          id="contact-name" type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your name" autoComplete="name"
                          className={INPUT_CLASSES}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold text-evergreen/70 mb-2">Phone</label>
                        <input
                          id="contact-phone" type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="07700 000000" autoComplete="tel"
                          className={INPUT_CLASSES}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-evergreen/70 mb-2">Email address *</label>
                      <input
                        id="contact-email" type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="you@example.com" autoComplete="email"
                        className={INPUT_CLASSES}
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-semibold text-evergreen/70 mb-2">Service of interest</label>
                      <select
                        id="contact-service" name="service" value={form.service} onChange={handleChange}
                        className={INPUT_CLASSES}
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
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-evergreen/70 mb-2">Your message *</label>
                      <textarea
                        id="contact-message" name="message" required value={form.message} onChange={handleChange}
                        rows={5} placeholder="Tell me about your situation and what you're looking for..."
                        className={`${INPUT_CLASSES} resize-none`}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-terracotta hover:bg-terracotta-dark text-white py-4 rounded-full font-semibold text-sm transition-colors"
                    >
                      Send message
                    </button>
                    <p className="text-xs text-evergreen/45 text-center">
                      Or call:{' '}
                      <a href="tel:01753424473" className="text-evergreen font-semibold hover:text-terracotta transition-colors">
                        01753 424 473
                      </a>
                    </p>
                  </form>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COVERAGE NOTE ─────────────────────────────── */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="bg-sand/70 rounded-3xl px-7 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                <p className="text-evergreen/60 text-sm leading-relaxed">
                  <strong className="text-evergreen">Covering Slough, Berkshire &amp; surrounding areas</strong> — including Windsor, Maidenhead, Langley, Iver, Reading, and beyond.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-evergreen hover:text-terracotta transition-colors whitespace-nowrap"
              >
                View my services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
