import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SEO, { buildArticleLD, buildBreadcrumbLD } from '../components/SEO.jsx';
import POSTS from '../data/posts.js';

function BodyBlock({ block }) {
  if (block.type === 'p') {
    return <p className="text-evergreen/65 text-lg leading-relaxed">{block.text}</p>;
  }
  if (block.type === 'h2') {
    return <h2 className="font-display text-2xl md:text-3xl text-evergreen tracking-tight leading-snug mt-4">{block.text}</h2>;
  }
  if (block.type === 'h3') {
    return <h3 className="font-display text-xl text-evergreen leading-snug mt-2">{block.text}</h3>;
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2.5">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-evergreen/65 text-lg leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-3 flex-shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="bg-sand/70 border-l-4 border-terracotta rounded-r-3xl px-7 py-6">
        <p className="font-display text-xl text-evergreen leading-snug italic">{block.text}</p>
      </blockquote>
    );
  }
  return null;
}

export default function BlogPost() {
  const { slug } = useParams();
  const postIndex = POSTS.findIndex(p => p.slug === slug);

  if (postIndex === -1) return <Navigate to="/blogs" replace />;

  const post = POSTS[postIndex];
  const prev = postIndex < POSTS.length - 1 ? POSTS[postIndex + 1] : null;
  const next = postIndex > 0 ? POSTS[postIndex - 1] : null;

  return (
    <>
      <SEO
        title={post.title}
        description={post.summary}
        canonical={`/blogs/${post.slug}`}
        image={post.coverImage}
        type="article"
        extraSchema={[
          buildArticleLD(post),
          buildBreadcrumbLD([
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blogs' },
            { name: post.title },
          ]),
        ]}
      />

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="pt-32 sm:pt-36 pb-12 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-sand blur-3xl opacity-70 pointer-events-none"
        />
        <div className="max-w-3xl mx-auto px-5 relative">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
              <Link to="/" className="text-terracotta hover:text-terracotta-dark transition-colors">Home</Link>
              <span className="text-evergreen/25">/</span>
              <Link to="/blogs" className="text-terracotta hover:text-terracotta-dark transition-colors">Blog</Link>
              <span className="text-evergreen/25">/</span>
              <span className="text-evergreen/45 truncate max-w-[180px]">{post.title}</span>
            </nav>
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.15em] text-terracotta bg-terracotta/10 px-3 py-1 rounded-full mb-6">
              {post.tag}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-evergreen tracking-tight leading-[1.06] mb-7">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-evergreen/50">
              <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
              <span>{post.date}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COVER IMAGE ──────────────────────────────── */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto px-5 mb-14">
          <Reveal>
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full aspect-[21/9] object-cover rounded-[2rem] shadow-card"
              loading="lazy"
              decoding="async"
            />
          </Reveal>
        </div>
      )}

      {/* ── ARTICLE BODY ─────────────────────────────── */}
      <article className="pb-20">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <div className="space-y-6">
              {post.body.map((block, i) => (
                <BodyBlock key={i} block={block} />
              ))}
            </div>
          </Reveal>

          {/* ── ARTICLE FOOTER ────────────────────────── */}
          <Reveal delay={80}>
            <div className="mt-16 bg-evergreen text-cream rounded-[2rem] p-8 md:p-10 relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-terracotta/25 blur-3xl pointer-events-none"
              />
              <div className="relative">
                <p className="font-display text-2xl mb-3">Need to talk this through?</p>
                <p className="text-cream/60 leading-relaxed mb-7 max-w-lg">
                  If anything in this article raised questions about your own situation, I'm happy to have an honest conversation — no obligation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:01753424473"
                    className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white px-6 py-3 rounded-full font-semibold transition-colors text-sm"
                  >
                    Call 01753 424 473
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-cream/30 hover:border-cream text-cream px-6 py-3 rounded-full font-semibold transition-colors text-sm"
                  >
                    Send a message <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* ── PREV / NEXT ──────────────────────────────── */}
      {(prev || next) && (
        <section className="pb-20">
          <div className="max-w-3xl mx-auto px-5 grid sm:grid-cols-2 gap-5">
            {prev && (
              <Link
                to={`/blogs/${prev.slug}`}
                className="group bg-parchment border border-evergreen/5 hover:border-terracotta/30 rounded-3xl p-7 transition-colors"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-evergreen/35 mb-3 flex items-center gap-1.5">
                  <ArrowLeft size={11} /> Previous
                </p>
                <p className="font-display text-lg text-evergreen group-hover:text-terracotta transition-colors leading-snug">{prev.title}</p>
              </Link>
            )}
            {next && (
              <Link
                to={`/blogs/${next.slug}`}
                className={`group bg-parchment border border-evergreen/5 hover:border-terracotta/30 rounded-3xl p-7 transition-colors text-right ${!prev ? 'sm:col-start-2' : ''}`}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-evergreen/35 mb-3 flex items-center justify-end gap-1.5">
                  Next <ArrowRight size={11} />
                </p>
                <p className="font-display text-lg text-evergreen group-hover:text-terracotta transition-colors leading-snug">{next.title}</p>
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
