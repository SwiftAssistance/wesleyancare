import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you were looking for doesn't exist. Head back to the Wesleyan Care homepage." canonical="/" />
      <section className="pt-40 pb-28 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-sand blur-3xl opacity-70 pointer-events-none"
        />
        <div className="max-w-6xl mx-auto px-5 relative text-center">
          <p className="font-display text-8xl md:text-9xl text-terracotta/25 leading-none mb-6 select-none">404</p>
          <h1 className="font-display text-4xl md:text-5xl text-evergreen tracking-tight mb-5">
            That page doesn't exist.
          </h1>
          <p className="text-evergreen/55 text-lg max-w-md mx-auto mb-10">
            The page may have moved, or the link may be out of date. Everything you need is one click away.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-evergreen hover:bg-evergreen-light text-cream px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
            >
              Back to homepage <ArrowRight size={14} />
            </Link>
            <a
              href="tel:01753424473"
              className="inline-flex items-center gap-2 bg-parchment border border-evergreen/15 hover:border-evergreen/50 text-evergreen px-7 py-3.5 rounded-full font-semibold transition-colors text-sm"
            >
              <Phone size={14} /> 01753 424 473
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
