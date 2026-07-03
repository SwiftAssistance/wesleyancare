/**
 * Service data — one entry per specialism.
 *
 * Each service renders at /services/<slug>. To add or edit a service,
 * change this file only; the index page, detail pages, home page list,
 * footer links, and structured data all read from here.
 */

const SERVICES = [
  {
    slug: 'dementia-care',
    title: 'Dementia Care',
    tagline: 'Consistency, routine, and calm — in the home they know.',
    img: 'https://images.pexels.com/photos/8172269/pexels-photo-8172269.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imgCaption: 'Familiar surroundings do half the work',
    intro: 'Living with dementia is different for everyone. My carers bring consistency — the same faces, the same routines, the same patient presence. I work alongside families, not around them.',
    approach: [
      'The first thing I map out is the person\'s existing routine — not what I think a routine should look like, but what they\'re already used to. Waking time, meals, the radio programme they never miss. The goal is to support their day, not replace it with ours.',
      'Consistency of carer matters more in dementia care than anywhere else. Unfamiliar faces cause genuine distress, so I assign a small, regular team and keep it small. Your family will know exactly who is coming and when — and so, in time, will the person being cared for, even on difficult days.',
      'I train carers specifically for the hard moments: sundowning, agitation, refusal of personal care. The approach is always redirect, never argue — and I keep families in the loop so nothing that happens at 4pm is a surprise at 7pm.',
    ],
    whoFor: [
      'People recently diagnosed who need structure put in place early',
      'Families managing mid-stage dementia who need regular, reliable visits',
      'Advanced dementia requiring overnight or live-in support',
      'Family carers who are exhausted and need proper respite',
    ],
    includes: [
      'Personalised daily structure and routine',
      'Cognitive engagement and meaningful activity',
      'Medication support and prompting',
      'Safe environment monitoring',
      'Regular family communication',
      'Overnight and live-in care available',
    ],
    faqs: [
      { q: 'My mum doesn\'t think she needs help. What do you suggest?', a: 'This is extremely common, and pushing rarely works. I usually suggest starting small — a companionship visit or help with one specific task — introduced as help for the family rather than for her. Once a carer becomes a familiar face, resistance tends to soften. I\'m happy to talk through your specific situation before anything is arranged.' },
      { q: 'How do you handle sundowning and agitation?', a: 'Carers working with dementia clients receive specific training in de-escalation: redirecting rather than correcting, matching tone and body language, and knowing each client\'s individual triggers and comforts. I record what works for your family member so the whole team uses the same approach.' },
      { q: 'Do you provide overnight dementia care?', a: 'Yes — both waking nights and sleeping nights, depending on need. For families whose main pressure is disturbed sleep and night-time wandering, overnight support is often the single change that makes everything else sustainable.' },
    ],
  },
  {
    slug: 'palliative-care',
    title: 'Palliative Care',
    tagline: 'Comfort, dignity, and presence — for the person and their family.',
    img: 'https://images.pexels.com/photos/14441380/pexels-photo-14441380.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imgCaption: 'Being present is the work',
    intro: 'End-of-life care should be about the person, not logistics. I work alongside GPs and medical teams to make sure every moment is as comfortable and peaceful as possible — for the individual and their family.',
    approach: [
      'Palliative care at home means the medical side is handled by GPs, district nurses, and hospice teams — my role is everything around it. Personal care delivered gently. The house kept calm. Family given the space to be family, rather than full-time carers.',
      'I coordinate directly with the medical team so that changes in condition are communicated quickly and care adjusts without the family having to chase anyone. When things change — and at this stage they can change fast — I respond the same day.',
      'This is also care for the family. I\'ve sat with many families through final weeks, and part of the job is honest conversation: what to expect, what\'s normal, and where to find support. That doesn\'t stop at the end — I signpost bereavement support and stay reachable.',
    ],
    whoFor: [
      'People who want to remain at home rather than move to a hospice or hospital',
      'Families coordinating a hospital discharge for end-of-life care',
      'Situations where family carers need overnight relief',
      'Anyone needing sensitive personal care alongside district-nurse visits',
    ],
    includes: [
      'Coordination with GP and medical teams',
      'Comfort and symptom management support',
      'Emotional support for client and family',
      'Personal care delivered with sensitivity',
      'Flexible hours including overnight',
      'Bereavement signposting for families',
    ],
    faqs: [
      { q: 'How quickly can palliative care start?', a: 'Fast — this is the one situation where I move everything. For hospital discharges and end-of-life situations I can usually arrange same-day or next-day start. Call me directly on 01753 424 473 and I\'ll tell you exactly what\'s possible today.' },
      { q: 'Do you work with hospices and district nurses?', a: 'Yes, routinely. I see my role as the layer around the clinical team: they manage symptoms and medication, my carers handle personal care, comfort, and presence. I keep communication open in both directions so the family isn\'t the messenger.' },
      { q: 'Can family stay as involved as they want?', a: 'Completely. Some families want carers to take over everything; others want help with only the hardest parts. Both are right. The care plan is built around what your family wants to keep doing, not what\'s convenient for a rota.' },
    ],
  },
  {
    slug: 'cardiac-care',
    title: 'Cardiac Care',
    tagline: 'Steady, informed support for life with a heart condition.',
    img: 'https://images.pexels.com/photos/8949833/pexels-photo-8949833.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imgCaption: 'Routine, observed properly',
    intro: 'Managing a heart condition at home takes careful attention to medication, routine, and physical limits. My carers are trained to support safely and to keep families and healthcare providers informed.',
    approach: [
      'Heart conditions are managed in the details: medication taken on time and in the right order, exertion kept within safe limits, salt and fluid guidance actually followed at mealtimes. My carers are briefed on each client\'s specific condition and care plan — not a generic checklist.',
      'Observation is half the value of a visit. Carers know the warning signs to watch for — breathlessness, swelling, sudden weight change, chest discomfort — and exactly who to contact when something looks wrong, from the cardiac nurse to 999.',
      'After a cardiac event or surgery, confidence is often the biggest casualty. I structure support so clients rebuild independence gradually — doing more themselves each week, with someone there while they do it.',
    ],
    whoFor: [
      'People recently discharged after a cardiac event or heart surgery',
      'Anyone managing heart failure who needs daily routine support',
      'Families who want trained eyes on medication and symptoms',
      'People whose confidence has dropped and need support to stay active safely',
    ],
    includes: [
      'Medication management and reminders',
      'Symptom monitoring and reporting',
      'Support with prescribed exercise routines',
      'Dietary and lifestyle assistance',
      'Liaison with cardiac nurses and GPs',
      'Emergency response awareness',
    ],
    faqs: [
      { q: 'Can you support a hospital discharge after a heart attack or surgery?', a: 'Yes — discharge support is one of the most common ways cardiac care starts. I can usually assess quickly and have support in place within 48–72 hours, sooner for urgent discharges. Early support at home is often what prevents readmission.' },
      { q: 'Do your carers know what warning signs to look for?', a: 'Yes. Carers supporting cardiac clients are trained on the specific signs relevant to the client\'s condition, and every care plan includes a clear escalation route: what to watch, who to call, and when calling 999 is the right answer.' },
      { q: 'Can you help with cardiac rehab exercises and diet?', a: 'Yes. Carers support the exercise routine your cardiac rehab team has prescribed — encouragement, supervision, and honest reporting back — and help with shopping and cooking that actually follows the dietary guidance.' },
    ],
  },
  {
    slug: 'spinal-injury-support',
    title: 'Spinal Injury Support',
    tagline: 'Skilled support that protects independence.',
    img: 'https://images.pexels.com/photos/18429373/pexels-photo-18429373.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imgCaption: 'Adapted as needs change',
    intro: 'Skilled, attentive support for individuals living with spinal cord injuries. My trained support workers help clients maintain as much independence as possible, with care adapted as needs change over time.',
    approach: [
      'Spinal injury support is skilled work, and I treat it that way. Carers working with spinal injury clients are trained in positioning and pressure care, safe transfers, and — where needed — catheter and bowel care. This isn\'t an add-on to general care; it\'s a specialism.',
      'The client leads. People living with spinal injuries are usually the leading expert on their own care, and the worst thing a provider can do is override that. My carers work to your established routine and preferences, precisely, every visit.',
      'Needs change over years, not weeks — equipment changes, goals change, complications come and go. Because I\'m independent and local, the package changes with a phone call, not a re-assessment queue.',
    ],
    whoFor: [
      'People with established spinal cord injuries running long-term care packages',
      'New injuries transitioning home from spinal units',
      'Clients needing trained catheter, bowel, and pressure care',
      'Anyone who wants carers who follow their routine exactly',
    ],
    includes: [
      'Personal care and hygiene support',
      'Positioning and pressure care',
      'Mobility and transfer assistance',
      'Catheter and bowel care (trained staff)',
      'Rehabilitation exercise support',
      'Assistive technology and equipment help',
    ],
    faqs: [
      { q: 'Are your staff actually trained in catheter and bowel care?', a: 'Yes — only carers who have completed the relevant clinical training deliver catheter and bowel care, and competency is refreshed regularly. I will never send an untrained carer to a visit that requires these skills.' },
      { q: 'Can you work with hoists and transfer equipment?', a: 'Yes. Carers are trained in safe transfers including hoist use, and I make sure everyone assigned to you is familiar with your specific equipment before their first solo visit.' },
      { q: 'I already know exactly how my care should be done. Will carers follow it?', a: 'Yes — that\'s the standard I hold them to. Your routine is documented in your words, in your order, and carers follow it. If someone gets it wrong, tell me and I fix it; you shouldn\'t have to retrain every new face.' },
    ],
  },
  {
    slug: 'mental-health-support',
    title: 'Mental Health Support',
    tagline: 'Practical, non-judgemental support at your pace.',
    img: 'https://images.pexels.com/photos/7529994/pexels-photo-7529994.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imgCaption: 'Confidence is built, not rushed',
    intro: 'Consistent, non-judgemental support for adults managing mental health challenges. I focus on building routine and confidence at a pace the individual sets — not one imposed on them.',
    approach: [
      'This is practical support, not therapy — and that\'s exactly why it works. Clinical care comes from GPs and community mental health teams; my carers provide the daily scaffolding around it: routine, company, the tasks that pile up during difficult stretches.',
      'Progress isn\'t linear, and my carers are trained not to treat a bad week as a failure. Support flexes with capacity: some days it\'s getting out to the shops together; other days it\'s making sure there\'s a hot meal and no pressure to talk.',
      'Where there\'s a community mental health team, I coordinate with them — attending reviews if wanted, flagging changes early, and making sure crisis plans are known by every carer who visits.',
    ],
    whoFor: [
      'Adults whose mental health makes daily routine hard to sustain',
      'People rebuilding after a crisis or hospital admission',
      'Anyone isolated who needs regular, reliable human contact',
      'Families who want practical support around clinical care',
    ],
    includes: [
      'Daily structure and routine support',
      'Medication prompting and management',
      'Community engagement and social activity',
      'Household and personal care tasks',
      'Crisis support planning',
      'Coordination with mental health teams',
    ],
    faqs: [
      { q: 'Is this a clinical or therapeutic service?', a: 'No — and I\'m clear about that boundary. Therapy and medication are for your GP and mental health team. What I provide is the practical, day-to-day support that makes clinical care work: routine, company, structure, and someone reliable turning up when they said they would.' },
      { q: 'What conditions do you support?', a: 'I support adults with a wide range of needs — depression, anxiety, bipolar disorder, schizophrenia, and others. What matters more than the diagnosis is what daily life looks like and where support would genuinely help. That\'s what the first conversation is for.' },
      { q: 'Will carers push me to do things I\'m not ready for?', a: 'No. The pace is yours. Carers encourage, but the care plan explicitly records what you want to work towards and what should never be pushed. A bad day is met with practical help, not pressure.' },
    ],
  },
  {
    slug: 'home-personal-care',
    title: 'Home & Personal Care',
    tagline: 'Everyday help, built around your actual routine.',
    img: 'https://images.pexels.com/photos/8949908/pexels-photo-8949908.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imgCaption: 'Your routine, kept yours',
    intro: 'Practical, day-to-day support for people who need help at home. I offer flexible packages — from a one-hour morning visit to full daily care — built around your actual routine, not mine.',
    approach: [
      'Most care starts here: a bit of help in the morning, a hand with the shopping, someone to cook a proper meal. It sounds simple, and it should be — but done well, it\'s what keeps people in their own homes for years longer.',
      'I build the visit schedule around how you actually live. If you\'ve had breakfast at 9:30 for forty years, your visit isn\'t at 7am because it suits a rota. That\'s the practical difference an independent local provider makes.',
      'Companionship is real work too. For many clients the carer is the most regular company they have, so I match personalities, not just postcodes — and because the team stays consistent, those visits become something looked forward to.',
    ],
    whoFor: [
      'Older adults who need daily or weekly help to stay independent at home',
      'People recovering from illness or surgery who need short-term support',
      'Anyone whose family carers live far away or need backup',
      'People who mainly want reliable companionship and errands',
    ],
    includes: [
      'Personal hygiene and grooming support',
      'Dressing and undressing assistance',
      'Meal preparation and feeding support',
      'Household tasks and light cleaning',
      'Shopping and errands',
      'Companionship and social engagement',
    ],
    faqs: [
      { q: 'Is there a minimum visit length?', a: 'Visits start from one hour. I don\'t do 15-minute calls — nobody can deliver dignified care in 15 minutes, and I won\'t pretend otherwise. If your needs are genuinely small, an hour once or twice a week is a perfectly good starting package.' },
      { q: 'Can I have companionship visits without personal care?', a: 'Absolutely. Plenty of my clients have no personal care needs at all — the visits are company, conversation, outings, and errands. It\'s some of the most valuable work my carers do.' },
      { q: 'Can hours go up or down as things change?', a: 'Yes, and without a formal process. Recovering well and want to drop a visit? Fine. Rough patch and need doubling up for a fortnight? Also fine. One phone call to me is the whole procedure.' },
    ],
  },
];

export default SERVICES;

export const getService = (slug) => SERVICES.find(s => s.slug === slug);
