import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import POSTS from '../data/posts.js';

export default function Blogs() {
  const featured = POSTS[0];
  const rest     = POSTS.slice(1);

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
              Practical guidance for families navigating care — written by me in Slough. No jargon, no sales pitch, just honest information.
            </p>
          </Reveal>
        </div>
        <div className="border-t border-white/10" />
      </section>

      {/* ── FEATURED POST ─────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <Link to={`/blogs/${featured.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                <div className="aspect-[4/3] md:aspect-auto md:h-full rounded-sm overflow-hidden bg-[#1B2A4A] relative">
                  {featured.coverImage ? (
                    <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-center px-10">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A855] bg-[#D4A855]/15 px-3 py-1">
                          {featured.tag}
                        </span>
                        <p className="font-serif text-3xl text-white leading-snug mt-6">{featured.title}</p>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4A855] mb-4">Latest Post</p>
                  <h2 className="font-serif text-3xl md:text-4xl text-[#1B2A4A] leading-snug mb-5 group-hover:text-[#D4A855] transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-6">{featured.summary}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                    <span className="flex items-center gap-1"><Clock size={13} /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 font-semibold text-[#1B2A4A] border-b-2 border-[#D4A855] pb-0.5 group-hover:text-[#D4A855] transition-colors text-sm">
                    Read article <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── ALL POSTS GRID ────────────────────────────── */}
      {rest.length > 0 && (
        <section className="pb-24 md:pb-32 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">More Articles</p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <Link to={`/blogs/${post.slug}`} className="group block bg-white h-full">
                    {post.coverImage && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-8">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A855] bg-[#D4A855]/10 px-3 py-1">
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
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1B2A4A] leading-tight">
              Have a question I haven't covered?
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                If there's a topic you'd like me to write about, or if you'd like to speak to me directly about any of the subjects covered here, I'm happy to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#243860] text-white px-7 py-4 font-semibold transition-colors text-sm">
                  Get in touch <ArrowRight size={14} />
                </Link>
                <a href="tel:01753424473" className="inline-flex items-center gap-2 border border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-[#1B2A4A] px-7 py-4 font-semibold transition-colors text-sm">
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
