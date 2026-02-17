import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, BookOpen, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { navigationConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  if (!navigationConfig.logoImage) return null;


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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const mobileNavItems = [
    { label: "Produk", href: "#works", icon: ShoppingBag },
    { label: "Katalog", href: "#katalog", icon: BookOpen },
    { label: "Home", href: "#hero", isLogo: true },
    { label: "FAQ", href: "#faq", icon: HelpCircle },
    { label: "Tanya AI", href: "#ai", icon: Sparkles, isAI: true },
  ];

  const handleAIClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-nuxar-chat'));
  };

  return (
    <>
      {/* Top Header - Desktop Only */}
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 h-16 lg:h-20 hidden md:flex items-center transition-all duration-400 ${isScrolled ? 'glass py-0' : 'bg-transparent'
          }`}
      >
        <div className="container-full flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group select-none"
          >
            <img
              src={navigationConfig.logoImage}
              alt="NUXAR Perfumery Logo"
              width="120"
              height="40"
              className="h-8 lg:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              loading="eager"
              draggable={false}
            />

            <div className="flex flex-col leading-none">
              <span className="text-sm lg:text-base font-semibold tracking-wider text-white group-hover:text-highlight transition-colors">
                {navigationConfig.brandName}
              </span>
              <span className="text-[10px] lg:text-xs tracking-[0.25em] text-white/60 uppercase">
                {navigationConfig.brandTagline}
              </span>
            </div>
          </a>

          <div className="flex items-center gap-8 xl:gap-10">
            {navigationConfig.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[13px] font-medium text-white/70 hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-highlight group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Top Bar - Simple Logo & Contact */}
      <div className="md:hidden fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-white/5">
        <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center gap-2">
          <img src={navigationConfig.logoImage} alt="Logo" className="w-7 h-7 object-contain" />
          <span className="text-base font-bold text-white tracking-tight uppercase">
            {navigationConfig.brandName}<span className="text-highlight">.</span>
          </span>
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className="text-white p-2 active:scale-95 transition-transform bg-white/10 rounded-full"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {/* Mobile Bottom Navigation - Shopee/Android Style */}
      <div className="md:hidden fixed bottom-6 left-0 w-full px-6 z-[100]">
        <nav className="mx-auto max-w-[380px] glass shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 rounded-[2.5rem] px-2 py-2">
          <div className="flex items-center justify-around">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;

              if (item.isLogo) {
                return (
                  <button
                    key="logo"
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative -translate-y-6 transition-transform active:scale-95 outline-none"
                  >
                    <div className="w-14 h-14 bg-black rounded-full p-1 shadow-2xl border border-white/20 flex items-center justify-center">
                      <img
                        src={navigationConfig.logoImage}
                        alt="Home"
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </button>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={(e) => {
                    if ((item as any).isAI) {
                      handleAIClick(e);
                    } else {
                      handleNavClick(e, item.href);
                    }
                  }}
                  className="flex flex-col items-center py-2 min-w-[50px] transition-transform active:scale-95 outline-none group"
                >
                  <div className="text-white/40 group-hover:text-white transition-colors duration-300">
                    {Icon && <Icon size={20} strokeWidth={2} />}
                  </div>
                  <span className="text-[9px] mt-1 font-semibold uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <style>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 100px;
            padding-top: 60px;
          }
        }
      `}</style>
    </>
  );
}
