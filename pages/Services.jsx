import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Accordion from '../components/Accordion.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO, { buildBreadcrumbLD, SITE_URL } from '../components/SEO.jsx';

const SERVICES = [
  {
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
        n="03"
        title={<>Specialist care for<br /><em className="text-terracotta">complex needs</em>.</>}
        lead="Private and self-funded care, delivered across Slough and Berkshire. Direct Payments accepted. Six specialisms, one approach: built around the person."
      >
        <ul className="font-mono text-xs text-evergreen/55 flex flex-wrap gap-x-8 gap-y-2 mt-9">
          <li>— Private &amp; self-funded</li>
          <li>— 1-hour visits to live-in</li>
          <li>— Slough &amp; Berkshire</li>
        </ul>
      </PageHero>

      {/* ── SERVICES ──────────────────────────────────── */}
      <div>
        {SERVICES.map((s, i) => (
          <section key={i} className="border-t border-evergreen/20">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-20">
              <Reveal>
                <div className="grid md:grid-cols-12 gap-10 md:gap-8 items-start">
                  {/* Index + title column */}
                  <div className="md:col-span-4">
                    <p className="label-mono text-terracotta mb-5">0{i + 1} / 0{SERVICES.length}</p>
                    <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-[1.05] mb-7">
                      {s.title}
                    </h2>
                    <figure className={i % 2 === 1 ? 'hidden md:block' : ''}>
                      <img
                        src={s.img}
                        alt={`${s.title} – Wesleyan Care Slough`}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  </div>

                  {/* Copy + includes */}
                  <div className="md:col-span-8 md:pl-10">
                    <p className="text-evergreen/65 text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
                      {s.intro}
                    </p>
                    <p className="label-mono text-evergreen/50 border-t border-evergreen/20 pt-4 mb-6">
                      This service includes
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-10 mb-10 max-w-2xl">
                      {s.includes.map((item, j) => (
                        <li key={j} className="flex items-baseline gap-3.5 text-evergreen/70 py-2.5 border-b border-evergreen/10">
                          <span className="font-mono text-[10px] text-terracotta select-none">{String(j + 1).padStart(2, '0')}</span>
                          <span className="text-[0.95rem]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn-outline">
                      Enquire about {s.title.toLowerCase()} <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        ))}
      </div>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section className="border-t border-evergreen/20 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="07" label="Common questions" /></Reveal>
          <div className="grid md:grid-cols-12 gap-10 md:gap-8 mt-10 sm:mt-14">
            <Reveal className="md:col-span-4" delay={60}>
              <h2 className="font-display text-4xl sm:text-5xl text-evergreen tracking-tight leading-tight md:sticky md:top-28">
                Questions families ask me.
              </h2>
            </Reveal>
            <Reveal className="md:col-span-8" delay={120}>
              <Accordion items={FAQS} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── BOTTOM NOTE ───────────────────────────────── */}
      <section className="bg-terracotta text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <Reveal className="md:col-span-8">
              <div>
                <p className="label-mono text-white/70 border-t border-white/30 pt-4 mb-8">A note</p>
                <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-tight mb-6">Not sure what you need?</h2>
                <p className="text-white/85 text-lg leading-relaxed max-w-2xl">
                  Many clients come to me with needs that don't fit neatly into one category — that's completely normal. Call me for a free, informal conversation and I'll help you figure out what makes sense.
                </p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-4" delay={100}>
              <div className="flex flex-col items-start gap-3 md:items-end">
                <a href="tel:01753424473" className="btn bg-white text-terracotta-dark hover:bg-evergreen hover:text-cream">
                  <Phone size={13} /> 01753 424 473
                </a>
                <Link to="/contact" className="btn border border-white/50 text-white hover:bg-white hover:text-terracotta-dark hover:border-white">
                  Send a message <ArrowRight size={13} />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
