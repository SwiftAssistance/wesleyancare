import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // In production, wire this to a form backend (e.g. Formspree, EmailJS, or a server endpoint)
    setSubmitted(true);
  };

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Contact</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6 max-w-3xl">
              Let's talk about what you need.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Whether you're ready to arrange care or just want to ask a question — we're here, we're local, and we're happy to help.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT METHODS ───────────────────────────── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Phone,
                label: 'Call Us',
                primary: '01753 424 473',
                secondary: 'Mon–Fri, 8am–6pm',
                href: 'tel:01753424473',
                cta: 'Call now',
              },
              {
                icon: Mail,
                label: 'Email Us',
                primary: 'support@wesleyancare.onmicrosoft.com',
                secondary: 'We reply within 1 working day',
                href: 'mailto:support@wesleyancare.onmicrosoft.com',
                cta: 'Send email',
              },
              {
                icon: MapPin,
                label: 'Our Office',
                primary: '89 Whitby Road',
                secondary: 'Slough, SL1 3DR, Berkshire',
                href: 'https://maps.google.com/?q=89+Whitby+Road+Slough+SL1+3DR',
                cta: 'Get directions',
                external: true,
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center text-center bg-[#FAF7F2] hover:bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#D4A855]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#1B2A4A] text-white flex items-center justify-center mb-5 group-hover:bg-[#D4A855] transition-colors">
                    <item.icon size={22} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                  <p className="font-semibold text-[#1B2A4A] mb-1 text-sm break-all">{item.primary}</p>
                  <p className="text-xs text-gray-400 mb-4">{item.secondary}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#D4A855]">
                    {item.cta} <ArrowRight size={12} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ───────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-5 gap-16">

          {/* Left: info panel */}
          <div className="md:col-span-2">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">What to Expect</p>
              <h2 className="font-serif text-3xl text-[#1B2A4A] leading-tight mb-6">
                No pressure. No obligation. Just a conversation.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                When you get in touch, you'll speak with a real person — not an automated system. We take the time to understand your situation before making any recommendations.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4">
                {[
                  'We respond within 1 working day',
                  'No contract required to enquire',
                  'Free initial consultation available',
                  'We cover Slough and all of Berkshire',
                  'Direct Payments clients welcome',
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#7BA68D] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{p}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="mt-10 bg-[#1B2A4A] rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={18} className="text-[#D4A855]" />
                  <p className="font-semibold">Office hours</p>
                </div>
                <div className="space-y-2 text-sm text-white/60">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="text-white">8:00am – 6:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="text-white">9:00am – 1:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="text-white/40">Closed</span></div>
                </div>
                <p className="text-xs text-white/40 mt-4">For urgent care matters outside these hours, please call our main line and leave a message.</p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <Reveal delay={80}>
              {submitted ? (
                <div className="bg-[#7BA68D]/10 border border-[#7BA68D]/30 rounded-2xl p-12 text-center">
                  <CheckCircle2 size={48} className="text-[#7BA68D] mx-auto mb-5" />
                  <h3 className="font-serif text-2xl text-[#1B2A4A] mb-3">Thank you for getting in touch.</h3>
                  <p className="text-gray-500">We'll be in touch within one working day. If your matter is urgent, please call us on <strong className="text-[#1B2A4A]">01753 424 473</strong>.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10 space-y-6">
                  <h3 className="font-serif text-2xl text-[#1B2A4A] mb-2">Send us a message</h3>
                  <p className="text-sm text-gray-400 mb-6">We'll get back to you within one working day.</p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your name"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="07700 000000"
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service of interest</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors bg-white"
                    >
                      <option value="">Select a service (optional)</option>
                      <option>Dementia Care</option>
                      <option>Palliative Care</option>
                      <option>Cardiac Care</option>
                      <option>Spinal Injury Support</option>
                      <option>Mental Health Support</option>
                      <option>Home & Personal Care</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Message *</label>
                    <textarea
                      name="message" required value={form.message} onChange={handleChange}
                      rows={5} placeholder="Tell us a bit about your situation and what you're looking for..."
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4A855] hover:bg-[#c09040] text-white py-4 rounded-full font-semibold text-sm transition-colors shadow-md"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-gray-400 text-center">
                    Or call us directly: <a href="tel:01753424473" className="text-[#1B2A4A] font-semibold hover:text-[#D4A855] transition-colors">01753 424 473</a>
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COVERAGE NOTE ─────────────────────────────── */}
      <section className="py-16 bg-[#FAF7F2] border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <p className="font-bold text-[#1B2A4A] text-lg mb-1">Serving Slough, Berkshire & surrounding areas</p>
                <p className="text-gray-500 text-sm">Including Windsor, Maidenhead, Reading, and beyond. Contact us to check coverage in your area.</p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-7 py-3.5 rounded-full font-semibold transition-colors whitespace-nowrap">
                View our services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
