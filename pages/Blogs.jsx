import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';

const POSTS = [
  {
    tag: 'Dementia',
    title: 'Understanding dementia care at home',
    summary: 'What families should know about supporting a loved one with dementia — from daily routines to communication techniques that actually help.',
    date: '5 March 2026',
    readTime: '6 min read',
  },
  {
    tag: 'Families',
    title: 'How to choose the right care provider',
    summary: 'A straightforward guide to finding a provider that fits your family. What to ask, what to look for, and the red flags to watch out for.',
    date: '21 February 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Wellbeing',
    title: 'Looking after yourself as a family carer',
    summary: 'Caring for someone you love is rewarding but exhausting. Practical steps to protect your own mental and physical health along the way.',
    date: '8 February 2026',
    readTime: '4 min read',
  },
  {
    tag: 'Mental Health',
    title: 'Supporting adults with mental health challenges',
    summary: 'How structured, compassionate home care can make a real difference for adults living with anxiety, depression, or more complex conditions.',
    date: '24 January 2026',
    readTime: '7 min read',
  },
  {
    tag: 'Cardiac',
    title: 'Cardiac care: what to expect after hospital',
    summary: 'Returning home after a cardiac event can feel daunting. Here\'s how specialist home care supports recovery and ongoing management.',
    date: '10 January 2026',
    readTime: '5 min read',
  },
  {
    tag: 'Guide',
    title: 'Navigating council funding and Direct Payments',
    summary: 'Many families in Slough are entitled to council funding but never claim. This post explains how Direct Payments work and how to apply.',
    date: '28 December 2025',
    readTime: '6 min read',
  },
];

export default function Blogs() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-0 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5 pb-24">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Blog</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-3xl">
              Advice, insights & updates.
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Practical guidance for families navigating care — written by our team in Slough. No jargon, no sales pitch, just honest information.
            </p>
          </Reveal>
        </div>
        <div className="border-t border-white/10" />
      </section>

      {/* ── BLOG POSTS ────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {POSTS.map((post, i) => (
              <Reveal key={i} delay={i * 60}>
                <article className="bg-white p-8 flex flex-col h-full group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A855] bg-[#D4A855]/10 px-3 py-1 rounded-full">
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl text-[#1B2A4A] leading-snug mb-4 group-hover:text-[#D4A855] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                    <p className="text-xs text-gray-400">{post.date}</p>
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#D4A855] transition-colors">
                      Read <ArrowRight size={11} />
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ─────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
              Have a question we haven't covered?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                If there's a topic you'd like us to write about, or if you'd like to speak to our team directly about any of the subjects covered here, we're happy to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-sm">
                  Get in touch <ArrowRight size={15} />
                </Link>
                <a href="tel:01753424473" className="inline-flex items-center gap-2 border border-[#1B2A4A]/25 text-[#1B2A4A] hover:border-[#1B2A4A] px-8 py-4 rounded-full font-semibold transition-colors">
                  Call 01753 424 473
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
