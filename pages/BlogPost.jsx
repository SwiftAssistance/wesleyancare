import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SEO, { buildArticleLD, buildBreadcrumbLD } from '../components/SEO.jsx';
import POSTS from '../data/posts.js';

function BodyBlock({ block }) {
  if (block.type === 'p') {
    return <p className="text-evergreen/70 text-lg leading-relaxed">{block.text}</p>;
  }
  if (block.type === 'h2') {
    return (
      <h2 className="font-display text-3xl text-evergreen tracking-tight leading-snug pt-6 border-t border-evergreen/20 mt-6">
        {block.text}
      </h2>
    );
  }
  if (block.type === 'h3') {
    return <h3 className="font-display text-xl text-evergreen leading-snug mt-2">{block.text}</h3>;
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-3">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-baseline gap-4 text-evergreen/70 text-lg leading-relaxed">
            <span className="font-mono text-xs text-terracotta select-none">{String(i + 1).padStart(2, '0')}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="border-l-2 border-terracotta pl-7 py-1 my-2">
        <p className="font-display italic text-2xl text-evergreen leading-snug">{block.text}</p>
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

      {/* ── OPENER ────────────────────────────────────── */}
      <section className="pt-28 sm:pt-36 pb-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="rule pt-4 flex items-baseline justify-between gap-4 mb-10 sm:mb-14">
              <nav aria-label="Breadcrumb" className="flex items-center gap-2.5 label-mono min-w-0">
                <Link to="/" className="text-evergreen/60 hover:text-terracotta transition-colors">Home</Link>
                <span className="text-evergreen/30">/</span>
                <Link to="/blogs" className="text-evergreen/60 hover:text-terracotta transition-colors">Journal</Link>
                <span className="text-evergreen/30">/</span>
                <span className="text-evergreen truncate">{post.tag}</span>
              </nav>
              <span className="label-mono text-terracotta whitespace-nowrap">{post.readTime}</span>
            </div>
            <div className="max-w-4xl">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-evergreen tracking-tight leading-[1.04] mb-8">
                {post.title}
              </h1>
              <p className="font-mono text-xs text-evergreen/55">
                {post.author} · {post.date}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COVER IMAGE ──────────────────────────────── */}
      {post.coverImage && (
        <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-14">
          <Reveal>
            <figure>
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full aspect-[21/9] object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="font-mono text-[10px] uppercase tracking-[0.15em] text-evergreen/50 pt-3 border-b border-evergreen/20 pb-3">
                {post.tag} — Wesleyan Care journal
              </figcaption>
            </figure>
          </Reveal>
        </div>
      )}

      {/* ── ARTICLE BODY ─────────────────────────────── */}
      <article className="pb-16 sm:pb-24">
        <div className="max-w-2xl mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="space-y-6">
              {post.body.map((block, i) => (
                <BodyBlock key={i} block={block} />
              ))}
            </div>
          </Reveal>

          {/* ── ARTICLE FOOTER ────────────────────────── */}
          <Reveal delay={80}>
            <aside className="mt-16 border-t-2 border-evergreen pt-8">
              <p className="label-mono text-terracotta mb-5">Need to talk this through?</p>
              <p className="font-display text-2xl text-evergreen tracking-tight leading-snug mb-4">
                If this raised questions about your own situation, I'm happy to have an honest conversation.
              </p>
              <p className="text-evergreen/55 mb-8">No obligation, no pressure.</p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:01753424473" className="btn btn-accent">
                  Call 01753 424 473
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Send a message <ArrowRight size={13} />
                </Link>
              </div>
            </aside>
          </Reveal>
        </div>
      </article>

      {/* ── PREV / NEXT ──────────────────────────────── */}
      {(prev || next) && (
        <section className="border-t border-evergreen/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2">
            {prev ? (
              <Link to={`/blogs/${prev.slug}`} className="group py-10 pr-8 sm:border-r sm:border-evergreen/20">
                <p className="label-mono text-evergreen/45 mb-3 flex items-center gap-2">
                  <ArrowLeft size={11} /> Previous
                </p>
                <p className="font-display text-xl text-evergreen tracking-tight group-hover:text-terracotta transition-colors leading-snug max-w-md">
                  {prev.title}
                </p>
              </Link>
            ) : <div className="hidden sm:block sm:border-r sm:border-evergreen/20" />}
            {next && (
              <Link to={`/blogs/${next.slug}`} className="group py-10 sm:pl-8 text-right border-t sm:border-t-0 border-evergreen/20">
                <p className="label-mono text-evergreen/45 mb-3 flex items-center justify-end gap-2">
                  Next <ArrowRight size={11} />
                </p>
                <p className="font-display text-xl text-evergreen tracking-tight group-hover:text-terracotta transition-colors leading-snug max-w-md ml-auto">
                  {next.title}
                </p>
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
