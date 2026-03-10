import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { POSTS } from '../data/blogPosts.js';
import Reveal from '../components/Reveal.jsx';

const CATEGORIES = ['All', ...Array.from(new Set(POSTS.map(p => p.category)))];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Blog() {
  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-24 bg-[#1B2A4A]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-3xl">
              Advice and guidance<br />
              <em className="text-[#D4A855] not-italic">for families and carers.</em>
            </h1>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Practical, honest articles on navigating care — from recognising the first signs to understanding your funding options.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CATEGORY TAGS ─────────────────────────────── */}
      <div className="bg-white border-b border-gray-100 sticky top-[60px] z-10">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center gap-3 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <span key={cat} className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-gray-400 px-4 py-2 border border-gray-200 rounded-full hover:border-[#1B2A4A] hover:text-[#1B2A4A] transition-colors cursor-default">
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* ── POST LIST ─────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          {/* Featured post (first) */}
          <Reveal>
            <Link
              to={`/blog/${POSTS[0].slug}`}
              className="group grid md:grid-cols-2 gap-0 bg-[#FAF7F2] border border-gray-100 hover:border-[#D4A855]/30 hover:shadow-lg transition-all mb-10 overflow-hidden"
            >
              <div className="p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4A855]">{POSTS[0].category}</span>
                    <span className="text-gray-300">·</span>
                    <span className="text-xs text-gray-400">{formatDate(POSTS[0].date)}</span>
                  </div>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#1B2A4A] leading-tight mb-5 group-hover:text-[#D4A855] transition-colors">
                    {POSTS[0].title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">{POSTS[0].excerpt}</p>
                </div>
                <div className="flex items-center gap-2 font-semibold text-sm text-[#1B2A4A] group-hover:text-[#D4A855] transition-colors mt-8">
                  Read article <ArrowRight size={15} />
                </div>
              </div>
              <div className="bg-[#1B2A4A] min-h-[240px] md:min-h-0 flex items-center justify-center p-14">
                <p className="font-serif text-7xl text-[#D4A855]/20 select-none leading-none">"</p>
              </div>
            </Link>
          </Reveal>

          {/* Remaining posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {POSTS.slice(1).map((post, i) => (
              <Reveal key={post.slug} delay={i * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group bg-white hover:bg-[#FAF7F2] p-8 transition-colors flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D4A855]">{post.category}</span>
                    <span className="text-gray-200">·</span>
                    <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1B2A4A] leading-snug mb-4 group-hover:text-[#D4A855] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#D4A855] transition-colors">
                    Read <ArrowRight size={11} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-20 bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1B2A4A] leading-tight">
              Have a question we haven't answered?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="text-gray-500 leading-relaxed mb-6">
                Call us or drop us a message. We're happy to answer questions about care, about how we work, or about your specific situation — no commitment required.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-7 py-3.5 rounded-full font-semibold transition-colors text-sm">
                Get in touch <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
