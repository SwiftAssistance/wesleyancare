import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Phone } from 'lucide-react';
import { getPost, getRecentPosts } from '../data/blogPosts.js';
import Reveal from '../components/Reveal.jsx';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

function Section({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="font-serif text-2xl md:text-3xl text-[#1B2A4A] mt-12 mb-5 leading-snug">{block.text}</h2>;
    case 'p':
      return <p className="text-gray-600 text-lg leading-relaxed mb-5">{block.text}</p>;
    case 'list':
      return (
        <ul className="mb-6 space-y-3 pl-0">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-4 text-gray-600 text-base leading-relaxed">
              <span className="text-[#D4A855] font-bold flex-shrink-0 mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRecentPosts(slug, 3);

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="pt-36 pb-16 bg-[#1B2A4A]">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#D4A855] text-xs font-bold uppercase tracking-widest mb-8 hover:text-white transition-colors">
              <ArrowLeft size={13} /> Back to blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A855]">{post.category}</span>
              <span className="text-white/20">·</span>
              <span className="text-xs text-white/40">{formatDate(post.date)}</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] max-w-3xl">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── ARTICLE BODY ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-3 gap-16">

          {/* Main content */}
          <article className="lg:col-span-2">
            <Reveal>
              <p className="text-gray-500 text-xl leading-relaxed mb-8 border-l-4 border-[#D4A855] pl-6 font-serif italic">
                {post.excerpt}
              </p>
            </Reveal>
            <Reveal delay={80}>
              {post.sections.map((block, i) => (
                <Section key={i} block={block} />
              ))}
            </Reveal>

            {/* End of article CTA */}
            <Reveal delay={100}>
              <div className="mt-16 pt-10 border-t border-gray-100">
                <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Talk to Wesleyan Care</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If anything in this article raises questions about your own situation, we're happy to have a conversation. No obligation, no sales pitch.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:01753424473" className="inline-flex items-center gap-2 bg-[#D4A855] hover:bg-[#c09040] text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                    <Phone size={15} /> 01753 424 473
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 border border-[#1B2A4A]/25 hover:border-[#1B2A4A] text-[#1B2A4A] px-7 py-3.5 rounded-full font-semibold text-sm transition-colors">
                    Send a message <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Reveal delay={120}>
              <div className="sticky top-28 space-y-8">
                {/* Contact card */}
                <div className="bg-[#1B2A4A] p-7 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#D4A855] mb-4">Need to talk?</p>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    Call us for a free, informal conversation about care in Slough or Berkshire.
                  </p>
                  <a href="tel:01753424473" className="block text-center bg-[#D4A855] hover:bg-[#c09040] text-white py-3 rounded-full font-semibold text-sm transition-colors">
                    01753 424 473
                  </a>
                </div>

                {/* Related posts */}
                {related.length > 0 && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">More articles</p>
                    <div className="space-y-5">
                      {related.map(r => (
                        <Link key={r.slug} to={`/blog/${r.slug}`} className="group block border-b border-gray-100 pb-5 last:border-0 last:pb-0">
                          <p className="text-xs text-[#D4A855] font-bold uppercase tracking-widest mb-1">{r.category}</p>
                          <p className="text-sm font-semibold text-[#1B2A4A] leading-snug group-hover:text-[#D4A855] transition-colors">
                            {r.title}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
