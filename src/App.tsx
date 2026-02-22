import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navigation } from './components/Navigation';
import { CustomCursor } from './components/CustomCursor';
import { ParticleField } from './components/ParticleField';
import { AIChatBot } from './components/AIChatBot';
import { Preloader } from './components/Preloader';
import { RamadanPopup } from './components/RamadanPopup';
import { siteConfig } from './config';
import { usePageView } from './hooks/usePageView';

// Lazy load sections/pages for performance
const Hero = lazy(() => import('./sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./sections/About').then(m => ({ default: m.About })));
const Works = lazy(() => import('./sections/Works').then(m => ({ default: m.Works })));
const KatalogAroma = lazy(() => import('./sections/KatalogAroma').then(m => ({ default: m.KatalogAroma })));
const Services = lazy(() => import('./sections/Services').then(m => ({ default: m.Services })));
const FAQ = lazy(() => import('./sections/FAQ').then(m => ({ default: m.FAQ })));
const Testimonials = lazy(() => import('./sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Pricing = lazy(() => import('./sections/Pricing').then(m => ({ default: m.Pricing })));
const Blog = lazy(() => import('./sections/Blog').then(m => ({ default: m.Blog })));
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./sections/Footer').then(m => ({ default: m.Footer })));

// SEO Pages
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductsMenPage = lazy(() => import('./pages/ProductsMenPage').then(m => ({ default: m.ProductsMenPage })));
const ProductsWomenPage = lazy(() => import('./pages/ProductsWomenPage').then(m => ({ default: m.ProductsWomenPage })));
const KatalogPage = lazy(() => import('./pages/KatalogPage').then(m => ({ default: m.KatalogPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then(m => ({ default: m.BlogPostPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  return (
    <>
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
        <main id="main-content" className="w-full min-w-0 overflow-x-hidden relative z-20" tabIndex={-1}>
          <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-highlight/20 border-t-highlight rounded-full animate-spin" />
            </div>
          }>
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
          </Suspense>
        </main>
        <AIChatBot />
      </div>
    </>
  );
}

function App() {
  usePageView();
  const [loaderDone, setLoaderDone] = useState(false);

  useEffect(() => {
    if (siteConfig.title) {
      document.title = siteConfig.title;
    }
    if (siteConfig.language) {
      document.documentElement.lang = siteConfig.language;
    }
  }, []);

  useEffect(() => {
    if (loaderDone) {
      // Refresh ScrollTrigger after loader finishes
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loaderDone]);

  return (
    <>
      {/* Preloader — always rendered until complete */}
      {!loaderDone && <Preloader onComplete={() => setLoaderDone(true)} />}

      {/* Ramadan popup — only after loader finishes */}
      {loaderDone && <RamadanPopup reappearAfterSeconds={60} />}

      <Suspense fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-highlight/20 border-t-highlight rounded-full animate-spin" />
        </div>
      }>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk" element={<ProductsPage />} />
          <Route path="/produk/pria" element={<ProductsMenPage />} />
          <Route path="/produk/wanita" element={<ProductsWomenPage />} />
          <Route path="/katalog" element={<KatalogPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/tentang-kami" element={<AboutPage />} />
          <Route path="/layanan" element={<ServicesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;