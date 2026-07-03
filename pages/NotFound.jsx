import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO.jsx';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you were looking for doesn't exist. Head back to the Wesleyan Care homepage." canonical="/" />
      <section className="pt-28 sm:pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="rule pt-4 flex items-baseline justify-between gap-4 mb-10 sm:mb-14">
            <p className="label-mono text-evergreen/70">Error</p>
            <p className="label-mono text-terracotta">( 404 )</p>
          </div>
          <h1 className="font-display text-[16vw] sm:text-8xl lg:text-[9rem] text-evergreen leading-[0.95] tracking-tight mb-10">
            Page<br /><em className="text-terracotta">not found</em>.
          </h1>
          <p className="text-evergreen/60 text-lg leading-relaxed max-w-md mb-10">
            The page may have moved, or the link may be out of date. Everything you need is one click away.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/" className="btn btn-solid">
              Back to homepage <ArrowRight size={13} />
            </Link>
            <a href="tel:01753424473" className="btn btn-outline">
              Call 01753 424 473
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
