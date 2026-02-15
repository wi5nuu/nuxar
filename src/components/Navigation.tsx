import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';
import { navigationConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!navigationConfig.logo) return null;

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: '100px top',
      end: 'max',
      onUpdate: (self) => {
        setIsScrolled(self.progress > 0);
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 flex items-center transition-all duration-400 ${
          isScrolled ? 'glass py-0' : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo - 24px mobile / 28px desktop */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-base lg:text-lg font-medium text-white hover:text-highlight transition-colors duration-200"
          >
            {navigationConfig.logo}
          </a>

          {/* Desktop nav - 14px font */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navigationConfig.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-highlight group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile menu button - min 44px tap target */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-white touch-manipulation"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navigationConfig.items.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-h3 text-white hover:text-highlight transition-colors duration-300"
              style={{
                transform: isMobileMenuOpen
                  ? 'translateY(0)'
                  : 'translateY(20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
                transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.1}s`,
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
