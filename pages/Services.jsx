import { Link } from 'react-router-dom';
import {
  Brain, Heart, Activity, Stethoscope, HandHeart,
  Home as HomeIcon, ArrowRight, CheckCircle2, Phone,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const SERVICES = [
  {
    icon: Brain,
    title: 'Dementia Care',
    color: 'bg-purple-50 text-purple-600',
    intro: 'Living with dementia can be frightening — for the individual and their family. Our specialist dementia carers provide consistency, patience, and a calm presence that makes a real difference every day.',
    includes: [
      'Personalised daily routine and structure',
      'Cognitive engagement activities',
      'Medication support and prompting',
      'Safe environment monitoring',
      'Family communication and updates',
      'Overnight and live-in care available',
    ],
  },
  {
    icon: Heart,
    title: 'Palliative Care',
    color: 'bg-rose-50 text-rose-600',
    intro: 'End-of-life care should be about dignity, comfort, and spending precious time with loved ones. Our palliative care team works alongside medical professionals to ensure every moment is as peaceful as possible.',
    includes: [
      'Coordination with GP and medical teams',
      'Pain and symptom management support',
      'Emotional support for client and family',
      'Personal care delivered with sensitivity',
      'Flexible hours including overnight support',
      'Bereavement signposting for families',
    ],
  },
  {
    icon: Activity,
    title: 'Cardiac Care',
    color: 'bg-red-50 text-red-600',
    intro: 'Managing a heart condition requires careful attention to routine, medication, and physical activity. Our carers are trained to support clients safely at home while keeping families and healthcare providers informed.',
    includes: [
      'Medication management and reminders',
      'Monitoring of symptoms and vitals',
      'Support with prescribed exercise routines',
      'Dietary and lifestyle support',
      'Liaison with cardiac nurses and GPs',
      'Emergency response planning',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Spinal Injury Support',
    color: 'bg-blue-50 text-blue-600',
    intro: 'Living with a spinal cord injury requires skilled, attentive care. Our trained support workers help clients maintain as much independence as possible, adapting to changing needs over time.',
    includes: [
      'Personal care and hygiene support',
      'Positioning and pressure care',
      'Mobility and transfer assistance',
      'Catheter and bowel care (trained staff)',
      'Support with rehabilitation exercises',
      'Equipment and assistive technology support',
    ],
  },
  {
    icon: HandHeart,
    title: 'Mental Health Support',
    color: 'bg-green-50 text-green-600',
    intro: 'Mental health challenges can make everyday life feel overwhelming. Our support workers provide consistent, non-judgemental companionship and practical help — building confidence and routine at a pace that works.',
    includes: [
      'Daily structure and routine support',
      'Medication prompting and management',
      'Community engagement and social activities',
      'Household and personal care tasks',
      'Crisis support planning',
      'Coordination with mental health teams',
    ],
  },
  {
    icon: HomeIcon,
    title: 'Home & Personal Care',
    color: 'bg-amber-50 text-amber-600',
    intro: 'Sometimes the support needed is practical and day-to-day. We offer flexible personal care packages covering everything from morning routines to household tasks and companionship.',
    includes: [
      'Personal hygiene and grooming support',
      'Dressing and undressing assistance',
      'Meal preparation and feeding support',
      'Household tasks and cleaning',
      'Shopping and errands',
      'Companionship and social engagement',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-32 pb-20 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Services</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6 max-w-3xl">
              Specialist care for the people who need it most.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Every service we offer is designed around the individual — flexible, private, and delivered by people who truly understand complex care needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── INTRO NOTE ────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'All services', value: 'Private & self-funded', note: 'Direct Payments accepted' },
                { label: 'Availability', value: 'Flexible hours', note: 'From 1hr visits to live-in care' },
                { label: 'Coverage', value: 'Slough & Berkshire', note: 'And surrounding areas' },
              ].map((item, i) => (
                <div key={i} className="bg-[#FAF7F2] rounded-xl p-6 border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">{item.label}</p>
                  <p className="font-bold text-lg text-[#1B2A4A] mb-1">{item.value}</p>
                  <p className="text-sm text-gray-500">{item.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 space-y-8">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={60}>
              <div className="bg-white rounded-2xl border border-gray-100 hover:border-[#D4A855]/30 hover:shadow-lg transition-all overflow-hidden">
                <div className="grid md:grid-cols-5">
                  {/* Left */}
                  <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.color}`}>
                      <s.icon size={26} />
                    </div>
                    <h2 className="font-serif text-2xl text-[#1B2A4A] mb-4">{s.title}</h2>
                    <p className="text-gray-500 leading-relaxed text-sm">{s.intro}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B2A4A] hover:text-[#D4A855] transition-colors mt-6">
                      Enquire about this service <ArrowRight size={13} />
                    </Link>
                  </div>
                  {/* Right */}
                  <div className="md:col-span-3 p-8 md:p-10 bg-[#FAF7F2]">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">This service includes</p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {s.includes.map((item, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={16} className="text-[#7BA68D] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{item}</span>
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

      {/* ── TAILORED CARE NOTE ────────────────────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="bg-[#1B2A4A] rounded-2xl p-10 md:p-16 grid md:grid-cols-2 gap-12 items-center">
              <div className="text-white">
                <h2 className="font-serif text-3xl md:text-4xl mb-5">Not sure what you need?</h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  Many of our clients come to us with complex or changing needs that don't fit neatly into a single category. We're experienced at working with families to figure out what's needed and building a care plan that genuinely works.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-7 py-3.5 rounded-full font-semibold transition-colors">
                    <Phone size={16} /> Call us to discuss
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-7 py-3.5 rounded-full font-semibold transition-all">
                    Send a message <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {['We listen before we recommend anything', 'Care plans adapt as needs change', 'No minimum contract period', 'Free initial consultation'].map((p, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-5 py-4">
                    <CheckCircle2 size={18} className="text-[#D4A855] flex-shrink-0" />
                    <span className="text-white/80 font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
