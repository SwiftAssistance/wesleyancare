import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
import SectionHead from '../components/SectionHead.jsx';
import SEO, { buildBreadcrumbLD } from '../components/SEO.jsx';
import POSTS from '../data/posts.js';

export default function Blogs() {
  const featured = POSTS[0];
  const rest     = POSTS.slice(1);

  return (
    <>
      <SEO
        title="Blog – Care Advice &amp; Guides for Families in Slough"
        description="Practical advice for families navigating home care in Slough and Berkshire. Articles on dementia care, mental health support, cardiac recovery, carer wellbeing, and council funding guidance."
        canonical="/blogs"
        extraSchema={[buildBreadcrumbLD([{ name: 'Home', path: '/' }, { name: 'Blog' }])]}
      />

      <PageHero
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Journal' }]}
        n="04"
        title={<>The <em className="text-terracotta">journal</em>.</>}
        lead="Practical guidance for families navigating care — written by me in Slough. No jargon, no sales pitch, just honest information."
      />

      {/* ── FEATURED POST ─────────────────────────────── */}
      <section className="pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal><SectionHead n="01" label="Latest article" /></Reveal>
          <Reveal delay={60}>
            <Link to={`/blogs/${featured.slug}`} className="group grid md:grid-cols-12 gap-8 md:gap-8 mt-10 sm:mt-14 items-start">
              <figure className="md:col-span-7">
                {featured.coverImage ? (
                  <img
                    src={featured.coverImage}
                    alt={featured.title}
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full aspect-[16/10] bg-evergreen flex items-center justify-center px-10 text-center">
                    <p className="font-display text-3xl text-cream leading-snug">{featured.title}</p>
                  </div>
                )}
                <figcaption className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/50 pt-3">
                  {featured.tag} · {featured.date}
                </figcaption>
              </figure>
              <div className="md:col-span-5 md:pl-6">
                <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-evergreen tracking-tight leading-[1.08] mb-6 group-hover:text-terracotta transition-colors">
                  {featured.title}
                </h2>
                <p className="text-evergreen/60 text-lg leading-relaxed mb-8">{featured.summary}</p>
                <span className="btn btn-solid group-hover:bg-terracotta">
                  Read article <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── ALL POSTS INDEX ───────────────────────────── */}
      {rest.length > 0 && (
        <section className="pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <Reveal><SectionHead n="02" label="All articles" /></Reveal>
            <div className="mt-10 sm:mt-14">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 50}>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="group grid sm:grid-cols-[10rem_1fr_auto] items-baseline gap-2 sm:gap-8 py-7 border-t border-evergreen/20 last:border-b transition-colors hover:bg-sand/50"
                  >
                    <span className="font-mono text-xs text-evergreen/50">{post.date}</span>
                    <span>
                      <span className="block font-display text-2xl sm:text-[1.65rem] text-evergreen tracking-tight leading-snug group-hover:text-terracotta transition-colors mb-2">
                        {post.title}
                      </span>
                      <span className="block text-sm text-evergreen/55 leading-relaxed max-w-xl mb-2">
                        {post.summary}
                      </span>
                      <span className="label-mono text-evergreen/40">{post.tag} · {post.readTime}</span>
                    </span>
                    <ArrowUpRight size={18} className="hidden sm:block self-center text-evergreen/30 group-hover:text-terracotta transition-colors" />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
