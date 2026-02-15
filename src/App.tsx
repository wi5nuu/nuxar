import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronUp } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { ParticleField } from './components/ParticleField';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Works } from './sections/Works';
import { KatalogAroma } from './sections/KatalogAroma';
import { Services } from './sections/Services';
import { FAQ } from './sections/FAQ';
import { Testimonials } from './sections/Testimonials';
import { Pricing } from './sections/Pricing';
import { Blog } from './sections/Blog';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { siteConfig } from './config';

gsap.registerPlugin(ScrollTrigger);

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-highlight text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-highlight/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <ChevronUp className="h-6 w-6" />
    </button>
  );
}

function App() {
  useEffect(() => {
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }

    // Refresh ScrollTrigger after initial render
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full min-w-0 bg-black text-white overflow-x-hidden">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <CustomCursor />

      {/* Particle field */}
      <ParticleField />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main id="main-content" className="w-full min-w-0 overflow-x-hidden" tabIndex={-1}>
        <Hero />
        <About />
        <Works />
        <KatalogAroma />
        <Services />
        <FAQ />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
        <Footer />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
