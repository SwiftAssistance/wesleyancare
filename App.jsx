import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import MobileCallBar from './components/MobileCallBar.jsx';
import Home     from './pages/Home.jsx';
import About    from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blogs    from './pages/Blogs.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Contact  from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream text-evergreen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-evergreen focus:text-cream focus:px-5 focus:py-3 focus:rounded-full focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main">
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/about"       element={<About />} />
            <Route path="/services"    element={<Services />} />
            <Route path="/blogs"       element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogPost />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <MobileCallBar />
      </div>
    </BrowserRouter>
  );
}
