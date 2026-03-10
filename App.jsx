import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home    from './pages/Home.jsx';
import About   from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Funding  from './pages/Funding.jsx';
import Contact  from './pages/Contact.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FAF7F2] text-[#1B2A4A] antialiased">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
          * { font-family: 'DM Sans', sans-serif; }
          .font-serif { font-family: 'Libre Baskerville', Georgia, serif !important; }
          html { scroll-behavior: smooth; }
          ::selection { background: #D4A855; color: white; }
        `}</style>

        <Navbar />

        <main>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/about"    element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/funding"  element={<Funding />} />
            <Route path="/contact"  element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
