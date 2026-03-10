import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  const [form, setForm]         = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Contact</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-3xl">
              Talk to us.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Whether you're ready to arrange care or just want to ask a question — we're here, we're local, and there's no pressure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACT METHODS STRIP ─────────────────────── */}
      <div className="bg-[#243860] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <a href="tel:01753424473" className="flex items-center gap-5 py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4A855] transition-colors">
                <Phone size={16} className="text-[#D4A855]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Call us</p>
                <p className="text-white font-semibold">01753 424 473</p>
                <p className="text-xs text-white/40 mt-0.5">Mon–Fri 8am–6pm · Sat 9am–1pm</p>
              </div>
            </a>
            <a href="mailto:support@wesleyancare.onmicrosoft.com" className="flex items-center gap-5 py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4A855] transition-colors">
                <Mail size={16} className="text-[#D4A855]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email us</p>
                <p className="text-white font-semibold text-sm break-all">support@wesleyancare.onmicrosoft.com</p>
                <p className="text-xs text-white/40 mt-0.5">Reply within 1 working day</p>
              </div>
            </a>
            <a href="https://maps.google.com/?q=89+Whitby+Road+Slough+SL1+3DR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 py-8 px-6 group hover:bg-white/5 transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:border-[#D4A855] transition-colors">
                <MapPin size={16} className="text-[#D4A855]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Visit us</p>
                <p className="text-white font-semibold">89 Whitby Road, Slough</p>
                <p className="text-xs text-white/40 mt-0.5">SL1 3DR, Berkshire</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── FORM + INFO ───────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-5 gap-16">

          {/* Left: info */}
          <div className="md:col-span-2">
            <Reveal>
              <h2 className="font-serif text-3xl text-[#1B2A4A] leading-tight mb-6">
                No pressure. No obligation.
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-base mb-10">
                <p>
                  When you get in touch, you'll speak with a real person on our team. We take the time to listen before we make any suggestions — because until we understand your situation, we can't tell you what's right for you.
                </p>
                <p>
                  If you're just at the information-gathering stage, that's completely fine. We'd rather answer your questions honestly now than rush you into anything.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border border-gray-100 bg-[#FAF7F2] p-7 mb-6">
                <div className="flex items-center gap-3 mb-5">
                  <Clock size={16} className="text-[#D4A855]" />
                  <p className="font-semibold text-[#1B2A4A] text-sm">Office hours</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Monday – Friday</span><span className="font-semibold text-[#1B2A4A]">8:00am – 6:00pm</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Saturday</span><span className="font-semibold text-[#1B2A4A]">9:00am – 1:00pm</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sunday</span><span>Closed</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-5 pt-5 border-t border-gray-200">For urgent care matters outside these hours, call our main number and leave a message.</p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="border border-gray-100 bg-[#FAF7F2] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <Shield size={16} className="text-[#D4A855]" />
                  <p className="font-semibold text-[#1B2A4A] text-sm">Your enquiry is confidential</p>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Everything you share with us is treated in confidence. We will never pass your details to third parties or contact you without your permission.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="md:col-span-3">
            <Reveal delay={80}>
              {submitted ? (
                <div className="border border-gray-100 bg-[#FAF7F2] p-12 text-center">
                  <CheckCircle2 size={40} className="text-[#7BA68D] mx-auto mb-5" />
                  <h3 className="font-serif text-2xl text-[#1B2A4A] mb-3">Thank you.</h3>
                  <p className="text-gray-500 mb-6">We'll be back in touch within one working day. If it's urgent, call us on <strong className="text-[#1B2A4A]">01753 424 473</strong>.</p>
                  <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A855] hover:text-[#c09040] transition-colors">
                    Back to homepage <ArrowRight size={14} />
                  </Link>
                </div>
              ) : (
                <>
                  <h3 className="font-serif text-3xl text-[#1B2A4A] mb-2">Send us a message</h3>
                  <p className="text-sm text-gray-400 mb-8">We reply within one working day.</p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Full Name *</label>
                        <input
                          type="text" name="name" required value={form.name} onChange={handleChange}
                          placeholder="Your name"
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300 rounded-none bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="07700 000000"
                          className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300 rounded-none bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email Address *</label>
                      <input
                        type="email" name="email" required value={form.email} onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300 rounded-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Service of interest</label>
                      <select
                        name="service" value={form.service} onChange={handleChange}
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors bg-white rounded-none"
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
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Your Message *</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={5} placeholder="Tell us about your situation and what you're looking for..."
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] focus:outline-none focus:border-[#D4A855] transition-colors placeholder:text-gray-300 resize-none rounded-none bg-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#D4A855] hover:bg-[#c09040] text-white py-4 rounded-full font-semibold text-sm transition-colors"
                    >
                      Send Message
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      Or call: <a href="tel:01753424473" className="text-[#1B2A4A] font-semibold hover:text-[#D4A855] transition-colors">01753 424 473</a>
                    </p>
                  </form>
                </>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COVERAGE NOTE ─────────────────────────────── */}
      <section className="py-12 bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#D4A855] flex-shrink-0" />
                <p className="text-gray-500 text-sm">
                  <strong className="text-[#1B2A4A]">Covering Slough, Berkshire & surrounding areas</strong> — including Windsor, Maidenhead, Langley, Iver, Reading, and beyond.
                </p>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#D4A855] transition-colors whitespace-nowrap">
                View our services <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
