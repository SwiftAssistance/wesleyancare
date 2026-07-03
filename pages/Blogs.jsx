import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import PageHero from '../components/PageHero.jsx';
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
        crumbs={[{ name: 'Home', path: '/' }, { name: 'Blog' }]}
        title={<>Advice, insights &amp; <em className="text-terracotta">updates</em>.</>}
        lead="Practical guidance for families navigating care — written by me in Slough. No jargon, no sales pitch, just honest information."
      />

      {/* ── FEATURED POST ─────────────────────────────── */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <Link
              to={`/blogs/${featured.slug}`}
              className="group block bg-parchment border border-evergreen/5 rounded-[2rem] overflow-hidden hover:shadow-lift transition-shadow duration-300"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto lg:h-full bg-evergreen">
                  {featured.coverImage ? (
                    <img
                      src={featured.coverImage}
                      alt={featured.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center px-10 py-16 text-center">
                      <p className="font-display text-3xl text-cream leading-snug">{featured.title}</p>
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                      {featured.tag}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-evergreen/35">Latest post</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl text-evergreen leading-snug tracking-tight mb-5 group-hover:text-terracotta transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-evergreen/60 text-lg leading-relaxed mb-6">{featured.summary}</p>
                  <div className="flex items-center gap-4 text-sm text-evergreen/45 mb-8">
                    <span className="flex items-center gap-1.5"><Clock size={13} /> {featured.readTime}</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-2 self-start bg-evergreen group-hover:bg-terracotta text-cream px-6 py-3 rounded-full font-semibold transition-colors text-sm">
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
        <section className="pb-20 md:pb-28">
          <div className="max-w-6xl mx-auto px-5">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-terracotta mb-9">More articles</p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={i * 60}>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="group flex flex-col bg-parchment border border-evergreen/5 rounded-3xl overflow-hidden h-full hover:shadow-lift hover:-translate-y-1 transition-all duration-300"
                  >
                    {post.coverImage && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    )}
                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-terracotta bg-terracotta/10 px-3 py-1 rounded-full">
                          {post.tag}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-evergreen/40">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-display text-xl text-evergreen leading-snug mb-3 group-hover:text-terracotta transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-evergreen/55 text-sm leading-relaxed mb-6 flex-1">
                        {post.summary}
                      </p>
                      <div className="flex items-center justify-between pt-5 border-t border-evergreen/8">
                        <p className="text-xs text-evergreen/40">{post.date}</p>
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.15em] text-evergreen/30 group-hover:text-terracotta transition-colors">
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
    </>
  );
}
