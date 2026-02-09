import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Journey from './components/Journey';
import Services from './components/Services';
import Ventures from './components/Ventures';
import Speaking from './components/Speaking';
import Press from './components/Press';
import Blog from './components/Blog';
import FullBlog from './components/FullBlog';
import BlogDetail from './components/BlogDetail';
import SpeakerProfile from './components/SpeakerProfile';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Helper component to handle scrolling based on state or route changes
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to specific section passed via state
    const state = location.state as { targetId?: string } | null;
    
    if (state?.targetId) {
      setTimeout(() => {
        const element = document.getElementById(state.targetId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Scroll to top on route change if no specific target
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

const LandingPage: React.FC = () => (
  <>
    <Hero />
    <About />
    <Philosophy />
    <Journey />
    <Ventures />
    <Services />
    <Speaking />
    <Press />
    <Blog />
    <Testimonials />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollHandler />
      <div className="antialiased text-gray-700 font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<FullBlog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/speaker-profile" element={<SpeakerProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;