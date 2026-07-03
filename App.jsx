import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';
import Home from './pages/Home.jsx';

// Home stays eager for the fastest first paint; the rest load on demand.
const About    = lazy(() => import('./pages/About.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const Blogs    = lazy(() => import('./pages/Blogs.jsx'));
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'));
const Contact  = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function RouteFallback() {
  return (
    <div className="pt-40 pb-32 text-center" aria-busy="true">
      <p className="label-mono text-evergreen/40">Loading…</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream text-evergreen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-evergreen focus:text-cream focus:px-5 focus:py-3 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/about"       element={<About />} />
              <Route path="/services"    element={<Services />} />
              <Route path="/blogs"       element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogPost />} />
              <Route path="/contact"     element={<Contact />} />
              <Route path="*"            element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}
