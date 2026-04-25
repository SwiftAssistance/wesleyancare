import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, User } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import POSTS from '../data/posts.js';

function BodyBlock({ block }) {
  if (block.type === 'p') {
    return <p className="text-gray-600 text-lg leading-relaxed">{block.text}</p>;
  }
  if (block.type === 'h2') {
    return <h2 className="font-serif text-2xl md:text-3xl text-[#1B2A4A] leading-snug mt-4">{block.text}</h2>;
  }
  if (block.type === 'h3') {
    return <h3 className="font-serif text-xl text-[#1B2A4A] leading-snug mt-2">{block.text}</h3>;
  }
  if (block.type === 'list') {
    return (
      <ul className="space-y-2">
        {block.items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-600 text-lg leading-relaxed">
            <span className="text-[#D4A855] mt-1.5 flex-shrink-0 font-bold">&mdash;</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="border-l-4 border-[#D4A855] pl-6 py-2">
        <p className="font-serif text-xl text-[#1B2A4A] leading-snug italic">{block.text}</p>
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
      {/* ── HERO ──────────────────────────────────────── */}
      <section className="pt-36 pb-0 bg-[#1B2A4A]">
        <div className="max-w-4xl mx-auto px-5 pb-24">
          <Reveal>
            <div className="flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-6">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <Link to="/blogs" className="hover:text-white transition-colors">Blog</Link>
              <span className="text-white/30">/</span>
              <span className="text-white/60 truncate max-w-[180px]">{post.title}</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4A855] bg-[#D4A855]/15 px-3 py-1">
                {post.tag}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-8">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
              <span className="flex items-center gap-2"><User size={14} /> {post.author}</span>
              <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
              <span>{post.date}</span>
            </div>
          </Reveal>
        </div>
        <div className="border-t border-white/10" />
      </section>

      {/* ── COVER IMAGE ──────────────────────────────── */}
      {post.coverImage && (
        <div className="bg-white">
          <div className="max-w-4xl mx-auto">
            <img src={post.coverImage} alt={post.title} className="w-full aspect-[21/9] object-cover" />
          </div>
        </div>
      )}

      {/* ── ARTICLE BODY ─────────────────────────────── */}
      <article className="py-20 md:py-28 bg-white">
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
            <div className="mt-16 pt-10 border-t border-gray-200">
              <div className="bg-[#FAF7F2] border border-gray-100 p-8 md:p-10">
                <p className="font-serif text-xl text-[#1B2A4A] mb-3">Need to talk this through?</p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  If anything in this article raised questions about your own situation, I'm happy to have an honest conversation — no obligation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-6 py-3 font-semibold transition-colors text-sm">
                    Call 01753 424 473
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 border border-[#1B2A4A]/20 text-[#1B2A4A] hover:border-[#1B2A4A] px-6 py-3 font-semibold transition-colors text-sm">
                    Send a message <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* ── PREV / NEXT ──────────────────────────────── */}
      <section className="bg-[#FAF7F2] border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-5">
          <div className={`grid ${prev && next ? 'grid-cols-2' : 'grid-cols-1'} divide-x divide-gray-200`}>
            {prev && (
              <Link to={`/blogs/${prev.slug}`} className="group py-10 pr-8">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 flex items-center gap-1"><ArrowLeft size={11} /> Previous</p>
                <p className="font-serif text-lg text-[#1B2A4A] group-hover:text-[#D4A855] transition-colors leading-snug">{prev.title}</p>
              </Link>
            )}
            {next && (
              <Link to={`/blogs/${next.slug}`} className="group py-10 pl-8 text-right">
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 flex items-center justify-end gap-1">Next <ArrowRight size={11} /></p>
                <p className="font-serif text-lg text-[#1B2A4A] group-hover:text-[#D4A855] transition-colors leading-snug">{next.title}</p>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
