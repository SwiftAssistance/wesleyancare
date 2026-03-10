import { Link } from 'react-router-dom';
import {
  Brain, Heart, Activity, Stethoscope, HandHeart,
  Home as HomeIcon, ArrowRight, Phone,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const SERVICES = [
  {
    icon: Brain,
    title: 'Dementia Care',
    intro: 'Living with dementia is different for everyone. Our carers bring consistency — the same faces, the same routines, the same patient presence. We work alongside families, not around them.',
    includes: [
      'Personalised daily structure and routine',
      'Cognitive engagement and meaningful activity',
      'Medication support and prompting',
      'Safe environment monitoring',
      'Regular family communication',
      'Overnight and live-in care available',
    ],
  },
  {
    icon: Heart,
    title: 'Palliative Care',
    intro: 'End-of-life care should be about the person, not logistics. We work alongside GPs and medical teams to make sure every moment is as comfortable and peaceful as possible — for the individual and their family.',
    includes: [
      'Coordination with GP and medical teams',
      'Comfort and symptom management support',
      'Emotional support for client and family',
      'Personal care delivered with sensitivity',
      'Flexible hours including overnight',
      'Bereavement signposting for families',
    ],
  },
  {
    icon: Activity,
    title: 'Cardiac Care',
    intro: 'Managing a heart condition at home takes careful attention to medication, routine, and physical limits. Our carers are trained to support safely and to keep families and healthcare providers informed.',
    includes: [
      'Medication management and reminders',
      'Symptom monitoring and reporting',
      'Support with prescribed exercise routines',
      'Dietary and lifestyle assistance',
      'Liaison with cardiac nurses and GPs',
      'Emergency response awareness',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Spinal Injury Support',
    intro: 'Skilled, attentive support for individuals living with spinal cord injuries. Our trained workers help clients maintain as much independence as possible, with care adapted as needs change over time.',
    includes: [
      'Personal care and hygiene support',
      'Positioning and pressure care',
      'Mobility and transfer assistance',
      'Catheter and bowel care (trained staff)',
      'Rehabilitation exercise support',
      'Assistive technology and equipment help',
    ],
  },
  {
    icon: HandHeart,
    title: 'Mental Health Support',
    intro: 'Consistent, non-judgemental support for adults managing mental health challenges. We focus on building routine and confidence at a pace the individual sets — not one imposed on them.',
    includes: [
      'Daily structure and routine support',
      'Medication prompting and management',
      'Community engagement and social activity',
      'Household and personal care tasks',
      'Crisis support planning',
      'Coordination with mental health teams',
    ],
  },
  {
    icon: HomeIcon,
    title: 'Home & Personal Care',
    intro: 'Practical, day-to-day support for people who need help at home. We offer flexible packages — from a one-hour morning visit to full daily care — built around your actual routine, not ours.',
    includes: [
      'Personal hygiene and grooming support',
      'Dressing and undressing assistance',
      'Meal preparation and feeding support',
      'Household tasks and light cleaning',
      'Shopping and errands',
      'Companionship and social engagement',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Services</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-3xl">
              Specialist care for complex needs.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl mb-6">
              Private and self-funded care, delivered across Slough and Berkshire. Direct Payments accepted.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40 font-medium">
              <span>Private · self-funded</span>
              <span className="text-white/20">·</span>
              <span>Flexible hours — 1hr visits to live-in</span>
              <span className="text-white/20">·</span>
              <span>Slough & Berkshire</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HOW WE WORK NOTE ──────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className="text-gray-500 text-base max-w-3xl leading-relaxed">
              Across every service we provide, two things don't change: the carers we place are fully DBS-checked, trained, and regularly supervised; and wherever possible, you'll see the same small number of familiar faces rather than a rotating pool of strangers. That consistency matters — especially when someone's needs are complex.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={50}>
              <div className="bg-white border border-gray-100 hover:border-[#D4A855]/30 hover:shadow-md transition-all overflow-hidden">
                <div className="grid md:grid-cols-5">
                  {/* Left */}
                  <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#1B2A4A]/5 text-[#1B2A4A] flex items-center justify-center mb-6">
                      <s.icon size={20} />
                    </div>
                    <h2 className="font-serif text-2xl text-[#1B2A4A] mb-4">{s.title}</h2>
                    <p className="text-gray-500 leading-relaxed text-sm">{s.intro}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B2A4A] hover:text-[#D4A855] transition-colors mt-6">
                      Enquire <ArrowRight size={12} />
                    </Link>
                  </div>
                  {/* Right */}
                  <div className="md:col-span-3 p-8 md:p-10 bg-[#FAF7F2]">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">This service includes</p>
                    <div className="grid sm:grid-cols-2 gap-y-3 gap-x-8">
                      {s.includes.map((item, j) => (
                        <div key={j} className="flex items-start gap-3 text-sm text-gray-600">
                          <span className="text-[#D4A855] mt-0.5 flex-shrink-0 font-bold">—</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-white">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">Not sure what you need?</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Many of our clients come to us with needs that don't fit neatly into one category — and that's completely normal. We're experienced at working through that with families, building care plans that respond to the full picture rather than a single diagnosis. Call us for a free, informal conversation and we'll help you figure out what makes sense.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-4">
              <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-8 py-4 rounded-full font-semibold transition-colors">
                <Phone size={16} /> Call 01753 424 473
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-colors">
                Send a message <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
