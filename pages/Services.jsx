import { Link } from 'react-router-dom';
import {
  Brain, Heart, Activity, Stethoscope, HandHeart,
  Home as HomeIcon, ArrowRight, Phone, Check, BadgeCheck,
} from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import PageHero from '../components/PageHero.jsx';
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
  { q: 'How quickly can care start?',                       a: 'In most cases, I can begin care within 48–72 hours of an initial assessment. For urgent situations — such as hospital discharges — I can often arrange same-day or next-day start. Call me and I\'ll tell you what\'s realistic for your situation.' },
  { q: 'Can I choose the times and days of visits?',        a: 'Yes. Care schedules are built around your routine, not mine. Whether you need early morning support, evening visits, or weekend care, I\'ll work with you to find a pattern that fits.' },
  { q: 'Will I have the same carer each time?',             a: 'Consistency is a core part of how I work. I assign a small, regular team to every client. You\'ll know who is coming and when. If a carer is unavailable, I\'ll let you know in advance and send someone your team already knows.' },
  { q: 'Do you accept Direct Payments?',                    a: 'Yes. If your local council has approved you for Direct Payments, you can use them to pay for Wesleyan Care. I work with Direct Payments clients regularly and can help you understand how to allocate your budget.' },
  { q: 'What if my needs change?',                          a: 'Care plans are reviewed regularly and adjusted without bureaucracy. If your condition changes, your hours need increasing, or something isn\'t working — I respond quickly. You don\'t need to go through a formal process to make a change.' },
  { q: 'Are your carers trained for specialist conditions?', a: 'Yes. All carers receive mandatory training, and those working with clients who have dementia, mental health conditions, cardiac needs, or spinal injuries receive additional specialist modules. Training is ongoing, not a one-off.' },
];

const SERVICE_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Wesleyan Care Services',
  url: `${SITE_URL}/services`,
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `${SITE_URL}/services`,
  })),
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

      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Services' }]}
        title={<>Specialist care for <em className="text-terracotta">complex needs</em>.</>}
        lead="Private and self-funded care, delivered across Slough and Berkshire. Direct Payments accepted."
      >
        <div className="flex flex-wrap gap-2.5 mt-9">
          {['Private & self-funded', '1-hour visits to live-in', 'Slough & Berkshire'].map(t => (
            <span key={t} className="inline-flex items-center gap-2 bg-parchment border border-evergreen/10 rounded-full px-4 py-2 text-sm text-evergreen/70 font-medium">
              <BadgeCheck size={14} className="text-moss" /> {t}
            </span>
          ))}
        </div>
      </PageHero>

      {/* ── SERVICE CARDS ─────────────────────────────── */}
      <section className="pb-8">
        <div className="max-w-6xl mx-auto px-5 space-y-8">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={50}>
              <article className="bg-parchment border border-evergreen/5 rounded-[2rem] overflow-hidden hover:shadow-lift transition-shadow duration-300">
                <div className="grid lg:grid-cols-2">
                  <div className={`aspect-[16/10] lg:aspect-auto lg:h-full ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={s.img}
                      alt={`${s.title} – Wesleyan Care Slough`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-8 md:p-12">
                    <span className="w-12 h-12 rounded-2xl bg-sand text-evergreen flex items-center justify-center mb-6">
                      <s.icon size={20} />
                    </span>
                    <h2 className="font-display text-3xl text-evergreen tracking-tight mb-4">{s.title}</h2>
                    <p className="text-evergreen/60 leading-relaxed mb-7">{s.intro}</p>
                    <ul className="grid sm:grid-cols-2 gap-y-2.5 gap-x-6 mb-8">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-evergreen/70">
                          <Check size={15} className="text-moss mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-evergreen hover:bg-evergreen-light text-cream px-6 py-3 rounded-full font-semibold transition-colors text-sm"
                    >
                      Enquire about {s.title.toLowerCase()} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-5">Common questions</p>
              <h2 className="font-display text-4xl md:text-5xl text-evergreen leading-tight tracking-tight">
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
      <section className="px-3 sm:px-5 pb-20">
        <div className="max-w-7xl mx-auto bg-terracotta rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none"
          />
          <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative">
            <Reveal>
              <div className="text-white">
                <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight mb-6">Not sure what you need?</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Many clients come to me with needs that don't fit neatly into one category — that's completely normal. Call me for a free, informal conversation and I'll help you figure out what makes sense.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex flex-wrap gap-4 md:justify-end">
                <a
                  href="tel:01753424473"
                  className="inline-flex items-center gap-2 bg-white text-terracotta-dark hover:bg-cream px-8 py-4 rounded-full font-semibold transition-colors text-sm"
                >
                  <Phone size={15} /> Call 01753 424 473
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white px-8 py-4 rounded-full font-semibold transition-colors text-sm"
                >
                  Send a message <ArrowRight size={15} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
