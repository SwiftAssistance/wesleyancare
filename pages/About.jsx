import { Link } from 'react-router-dom';
import { ArrowRight, Heart, UserCheck, Shield, Clock, Users, CheckCircle2, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const VALUES = [
  { icon: UserCheck, title: 'Person-Centred Care',    desc: 'No two people are the same. Every care plan we create is built around the individual — their preferences, their routine, their life — not a one-size-fits-all schedule.' },
  { icon: Shield,    title: 'Safe & Fully Vetted',    desc: 'Every member of the Wesleyan Care team is DBS-checked, reference-verified, and trained before they ever step foot in a client\'s home. Your safety is non-negotiable.' },
  { icon: Users,     title: 'Genuinely Local',        desc: 'We are a Slough-based business — not a national franchise or call centre. We care about our reputation in this community because we are part of it.' },
  { icon: Clock,     title: 'Flexible & Responsive',  desc: 'From a one-hour weekly visit to full-time live-in care, we build packages around what you actually need — and adjust as those needs change.' },
];

const TIMELINE = [
  { year: '2014', title: 'Wesleyan Care founded', desc: 'Established in Slough to provide high-quality private care to adults with complex needs in Berkshire.' },
  { year: '2016', title: 'Expanded services',     desc: 'Added specialist dementia care and mental health support to our offering, responding to growing community need.' },
  { year: '2019', title: '200 families milestone', desc: 'Reached 200 families supported across Slough, Berkshire and surrounding areas.' },
  { year: '2022', title: 'Spinal & cardiac care',  desc: 'Introduced dedicated care pathways for individuals living with spinal cord injuries and cardiac conditions.' },
  { year: 'Now',  title: '500+ families strong',   desc: 'Continuing to grow — and continuing to put people first, one family at a time.' },
];

export default function About() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>About</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6 max-w-3xl">
              A care provider built on dignity, trust, and genuine compassion.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              We're a locally run team in Slough, Berkshire — not a national call centre. Here's who we are, what we stand for, and why families trust us.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#1B2A4A] to-[#2d4070] flex flex-col items-center justify-center text-white p-14 shadow-2xl">
                <Heart size={64} className="text-[#D4A855] mb-6 opacity-80" />
                <p className="font-serif italic text-2xl text-center leading-relaxed text-white/85">
                  "We believe that inviting someone into your home is one of the most significant decisions a family can make. We don't take that lightly."
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D4A855] rounded-2xl p-6 shadow-xl">
                <p className="text-white font-serif text-3xl font-bold">10+</p>
                <p className="text-white/80 text-sm mt-1">Years in Berkshire</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Our Mission</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight mb-6">
                Enhancing quality of life through real, human connection.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                Wesleyan Care was founded in Slough on a simple belief: that everyone deserves care that respects their dignity, reflects their individuality, and genuinely improves their daily life.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-5">
                We specialise in supporting adults with complex care needs — including those living with dementia, mental health challenges, cardiac conditions, and spinal injuries. Our approach is always to start by listening.
              </p>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                Whether we're providing daily personal care, overnight support, or specialist intervention, our goal is the same: to help people live safely, comfortably, and as independently as possible in their own homes.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-7 py-3.5 rounded-full font-semibold transition-colors">
                Talk to our team <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────── */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">What We Stand For</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
                Our values aren't just words on a wall.
              </h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-[#FAF7F2] rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-[#7BA68D]/10 text-[#7BA68D] flex items-center justify-center mb-5">
                    <v.icon size={22} />
                  </div>
                  <h3 className="font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ─────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Our Journey</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
                Ten years of putting people first.
              </h2>
            </div>
          </Reveal>

          <div className="relative pl-8 border-l-2 border-gray-200 space-y-12">
            {TIMELINE.map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[2.85rem] w-5 h-5 rounded-full bg-[#D4A855] border-4 border-white shadow" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4A855] mb-2">{item.year}</p>
                  <h3 className="font-bold text-xl text-[#1B2A4A] mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Getting Started</p>
              <h2 className="font-serif text-4xl text-[#1B2A4A] leading-tight">What to expect when you contact us.</h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Initial conversation', desc: 'Call or email us for a free, informal chat. We\'ll listen to your situation and answer any questions with no pressure at all.' },
              { step: '02', title: 'Care assessment', desc: 'We visit you at home to fully understand your needs, preferences, and daily routine — and discuss what a care plan might look like.' },
              { step: '03', title: 'Care begins', desc: 'We match you with the right carer, introduce them before care starts, and stay in regular contact to make sure everything is working well.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <p className="font-serif text-4xl font-bold text-[#D4A855]/30 mb-4">{item.step}</p>
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-4xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to find out more?</h2>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
              We'd love to have a conversation about how we can support you or your loved one. No obligation, no pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <Phone size={16} /> Call 01753 424 473
              </a>
              <Link to="/services" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-all">
                View our services <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
