import { Link } from 'react-router-dom';
import {
  Brain, Heart, Activity, Stethoscope, HandHeart,
  Home as HomeIcon, ArrowRight, Phone, CheckCircle2,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import SEO, { buildBreadcrumbLD, SITE_URL } from '../components/SEO.jsx';

const SERVICES = [
  {
    icon: Brain,
    title: 'Dementia Care',
    img: 'https://images.pexels.com/photos/8172269/pexels-photo-8172269.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: 'Living with dementia is different for everyone. My carers bring consistency — the same faces, the same routines, the same patient presence. I work alongside families, not around them.',
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
    img: 'https://images.pexels.com/photos/14441380/pexels-photo-14441380.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: 'End-of-life care should be about the person, not logistics. I work alongside GPs and medical teams to make sure every moment is as comfortable and peaceful as possible — for the individual and their family.',
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
    img: 'https://images.pexels.com/photos/8949833/pexels-photo-8949833.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: 'Managing a heart condition at home takes careful attention to medication, routine, and physical limits. My carers are trained to support safely and to keep families and healthcare providers informed.',
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
    img: 'https://images.pexels.com/photos/18429373/pexels-photo-18429373.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: 'Skilled, attentive support for individuals living with spinal cord injuries. My trained support workers help clients maintain as much independence as possible, with care adapted as needs change over time.',
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
    img: 'https://images.pexels.com/photos/7529994/pexels-photo-7529994.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: 'Consistent, non-judgemental support for adults managing mental health challenges. I focus on building routine and confidence at a pace the individual sets — not one imposed on them.',
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
    img: 'https://images.pexels.com/photos/8949908/pexels-photo-8949908.jpeg?auto=compress&cs=tinysrgb&w=1200',
    intro: 'Practical, day-to-day support for people who need help at home. I offer flexible packages — from a one-hour morning visit to full daily care — built around your actual routine, not mine.',
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

const FAQS = [
  { q: 'How quickly can care start?',                          a: 'In most cases, I can begin care within 48–72 hours of an initial assessment. For urgent situations — such as hospital discharges — I can often arrange same-day or next-day start. Call me and I\'ll tell you what\'s realistic for your situation.' },
  { q: 'Can I choose the times and days of visits?',           a: 'Yes. Care schedules are built around your routine, not mine. Whether you need early morning support, evening visits, or weekend care, I\'ll work with you to find a pattern that fits.' },
  { q: 'Will I have the same carer each time?',                a: 'Consistency is a core part of how I work. I assign a small, regular team to every client. You\'ll know who is coming and when. If a carer is unavailable, I\'ll let you know in advance and send someone your team already knows.' },
  { q: 'Do you accept Direct Payments?',                       a: 'Yes. If your local council has approved you for Direct Payments, you can use them to pay for Wesleyan Care. I work with Direct Payments clients regularly and can help you understand how to allocate your budget.' },
  { q: 'What if my needs change?',                             a: 'Care plans are reviewed regularly and adjusted without bureaucracy. If your condition changes, your hours need increasing, or something isn\'t working — I respond quickly. You don\'t need to go through a formal process to make a change.' },
  { q: 'Are your carers trained for specialist conditions?',    a: 'Yes. All carers receive mandatory training, and those working with clients who have dementia, mental health conditions, cardiac needs, or spinal injuries receive additional specialist modules. Training is ongoing, not a one-off.' },
];

/* Schema for each specialist service offered */
const SERVICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wesleyan Care Services',
  url: `${SITE_URL}/services`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Dementia Care',          url: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 2, name: 'Palliative Care',        url: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 3, name: 'Cardiac Care',           url: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 4, name: 'Spinal Injury Support',  url: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 5, name: 'Mental Health Support',  url: `${SITE_URL}/services` },
    { '@type': 'ListItem', position: 6, name: 'Home & Personal Care',   url: `${SITE_URL}/services` },
  ],
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
          buildBreadcrumbLD([{ name: 'Home', path: '/' }, { name: 'Services' }]),
        ]}
      />

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
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/40 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A855]" /> Private & self-funded</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A855]" /> 1hr visits to live-in</span>
              <span className="text-white/20">·</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#D4A855]" /> Slough & Berkshire</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-5 space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={50}>
              <div className="bg-white border border-gray-100 hover:border-[#D4A855]/30 hover:shadow-md transition-all overflow-hidden">
                {s.img && (
                  <div className="aspect-[21/9] overflow-hidden">
                    <img src={s.img} alt={`${s.title} – Wesleyan Care Slough`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-100">
                    <div className="text-[#D4A855] mb-6">
                      <s.icon size={20} />
                    </div>
                    <h2 className="font-serif text-2xl text-[#1B2A4A] mb-4">{s.title}</h2>
                    <p className="text-gray-500 leading-relaxed text-sm">{s.intro}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#1B2A4A] hover:text-[#D4A855] transition-colors mt-6">
                      Enquire <ArrowRight size={12} />
                    </Link>
                  </div>
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

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <div className="mb-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4A855] mb-4">Common Questions</p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
                Questions families ask me.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Accordion items={FAQS} />
          </Reveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────── */}
      <section className="py-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="text-white">
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6">Not sure what you need?</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Many of my clients come to me with needs that don't fit neatly into one category — and that's completely normal. I'm experienced at working through that with families, building care plans that respond to the full picture rather than a single diagnosis. Call me for a free, informal conversation and I'll help you figure out what makes sense.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-4">
              <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-7 py-4 font-semibold transition-colors text-sm">
                <Phone size={14} /> Call 01753 424 473
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/25 hover:border-white text-white px-7 py-4 font-semibold transition-colors text-sm">
                Send a message <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
