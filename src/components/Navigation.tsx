import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, BookOpen, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { navigationConfig, promoConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

function PromoBanner() {
  return (
    <div className="w-full bg-black text-highlight py-2 overflow-hidden whitespace-nowrap z-[60] relative border-y border-white/10">
      <div className="flex animate-marquee-container w-max">
        <div className="flex py-0.5">
          {promoConfig.messages.map((msg, i) => (
            <span key={i} className="mx-10 font-bold text-[10px] lg:text-[11px] tracking-[0.15em] uppercase flex items-center gap-3">
              <span className="w-1 h-1 bg-highlight rounded-full shadow-[0_0_8px_#D4AF37]" />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-clip-text text-transparent">
                {msg}
              </span>
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex py-0.5">
          {promoConfig.messages.map((msg, i) => (
            <span key={i} className="mx-10 font-bold text-[10px] lg:text-[11px] tracking-[0.15em] uppercase flex items-center gap-3">
              <span className="w-1 h-1 bg-highlight rounded-full shadow-[0_0_8px_#D4AF37]" />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFFACD] to-[#D4AF37] bg-clip-text text-transparent">
                {msg}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullHeader, setShowFullHeader] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const navigate = useNavigate();

  if (!navigationConfig.logoImage) return null;

  useEffect(() => {
    // Check if we need to scroll to a hash on mount/update
    if (location.hash && location.pathname === '/') {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }

    // Refresh ScrollTrigger
    ScrollTrigger.refresh();
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if we've scrolled past a small threshold
      setIsScrolled(currentScrollY > 50);

      // Handle show/hide logic based on direction
      if (currentScrollY <= 50) {
        setShowFullHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling down
        setShowFullHeader(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling up
        setShowFullHeader(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();

    // Case 1: External link
    if (href.startsWith('http')) {
      window.open(href, '_blank');
      return;
    }

    // Case 2: Hash link (e.g. /#about or #about)
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const targetHash = href.substring(hashIndex);
      // If we are already at home, just scroll
      if (location.pathname === '/' || href.startsWith('#')) {
        const target = document.querySelector(targetHash);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          // Update URL without reload
          window.history.pushState(null, '', targetHash);
        } else if (location.pathname !== '/') {
          // If target not found and not at home, go home + hash
          navigate('/' + targetHash);
        }
      } else {
        // If not at home, navigate to home + hash
        navigate('/' + targetHash);
      }
      return;
    }

    // Case 3: Internal page link (e.g. /product)
    navigate(href);
    if (!href.includes('#')) {
      window.scrollTo(0, 0);
    }
  };

  const mobileNavItems = [
    { label: "Produk", href: "/produk", icon: ShoppingBag },
    { label: "Katalog", href: "/katalog", icon: BookOpen },
    { label: "Home", href: "/", isLogo: true },
    { label: "FAQ", href: "/#faq", icon: HelpCircle },
    { label: "Tanya AI", href: "#ai", icon: Sparkles, isAI: true },
  ];

  const handleAIClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('open-nuxar-chat'));
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${!showFullHeader ? '-translate-y-16 lg:-translate-y-20' : 'translate-y-0'
        }`}>
        {/* Top Header - Desktop Only */}
        <nav
          ref={navRef}
          aria-label="Main navigation"
          className={`h-16 lg:h-20 hidden md:flex items-center transition-all duration-400 ${isScrolled ? 'glass py-0' : 'bg-transparent'
            }`}
        >
          <div className="container-full flex items-center justify-between">
            <Link
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-3 group select-none"
            >
              <div className="relative">
                <img
                  src={navigationConfig.logoImage}
                  alt="NUXAR Perfumery Logo"
                  width="120"
                  height="40"
                  className="h-8 lg:h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
                  loading="eager"
                  draggable={false}
                />
                <div
                  className="absolute -bottom-1 -right-1 bg-gradient-to-br from-[#0064e0] to-[#1d9bf0] rounded-full w-4 h-4 flex items-center justify-center border border-white shadow-sm"
                  style={{ animation: 'badgePulse 2s infinite ease-in-out' }}
                >
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="white">
                    <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.66 2.19-1.91 2.19-3.33zM9.9 16.8L6.4 13.3l1.41-1.41 2.09 2.09 5.69-5.69 1.41 1.41-7.1 7.1z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-sm lg:text-base font-semibold tracking-wider text-white group-hover:text-highlight transition-colors">
                  {navigationConfig.brandName}
                </span>
                <span className="text-[10px] lg:text-xs tracking-[0.25em] text-white/60 uppercase">
                  {navigationConfig.brandTagline}
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-8 xl:gap-10">
              {navigationConfig.items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[13px] font-medium transition-colors duration-200 relative group cursor-pointer ${location.pathname === item.href ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-px bg-highlight transition-all duration-300 ${location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Top Bar - Simple Logo & Contact */}
        <div className="md:hidden w-full bg-black/80 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-white/5">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <img src={navigationConfig.logoImage} alt="Logo" className="w-7 h-7 object-contain" />
              <div
                className="absolute -bottom-0.5 -right-0.5 bg-gradient-to-br from-[#0064e0] to-[#1d9bf0] rounded-full w-3 h-3 flex items-center justify-center border border-white shadow-sm"
                style={{ animation: 'badgePulse 2.0s infinite ease-in-out' }}
              >
                <svg viewBox="0 0 24 24" width="8" height="8" fill="white">
                  <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.66 2.19-1.91 2.19-3.33zM9.9 16.8L6.4 13.3l1.41-1.41 2.09 2.09 5.69-5.69 1.41 1.41-7.1 7.1z" />
                </svg>
              </div>
            </div>
            <span className="text-base font-bold text-white tracking-tight uppercase">
              {navigationConfig.brandName}<span className="text-highlight">.</span>
            </span>
          </Link>
          <Link
            to="/kontak"
            aria-label="Hubungi kami via WhatsApp"
            className="text-white p-2 active:scale-95 transition-transform bg-white/10 rounded-full"
          >
            <MessageCircle size={18} />
          </Link>
        </div>

        <PromoBanner />
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-0 w-full px-6 z-[100]">
        <nav className="mx-auto max-w-[380px] glass shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-white/10 rounded-[2.5rem] px-2 py-2">
          <div className="flex items-center justify-around">
            {mobileNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = !((item as any).isAI) && !((item as any).isLogo) &&
                (location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href)));

              if (item.isLogo) {
                return (
                  <button
                    key="logo"
                    aria-label="Kembali ke Beranda"
                    onClick={() => {
                      navigate('/');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="relative -translate-y-6 transition-transform active:scale-95 outline-none"
                  >
                    <div className="w-14 h-14 bg-black rounded-full p-1 shadow-2xl border border-white/20 flex items-center justify-center relative">
                      <img
                        src={navigationConfig.logoImage}
                        alt="NUXAR"
                        className="w-10 h-10 object-contain"
                      />
                      <div
                        className="absolute bottom-1 right-1 bg-gradient-to-br from-[#0064e0] to-[#1d9bf0] rounded-full w-4.5 h-4.5 flex items-center justify-center border border-white shadow-lg"
                        style={{ animation: 'badgePulse 2.0s infinite ease-in-out' }}
                      >
                        <svg viewBox="0 0 24 24" width="12" height="12" fill="white">
                          <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.9-.2-3.91.81s-1.27 2.52-.81 3.91c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.33c-.46 1.4-.2 2.9.81 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.46 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.66 2.19-1.91 2.19-3.33zM9.9 16.8L6.4 13.3l1.41-1.41 2.09 2.09 5.69-5.69 1.41 1.41-7.1 7.1z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                );
              }

              return (
                <button
                  key={item.label}
                  aria-label={item.label}
                  onClick={(e) => {
                    if ((item as any).isAI) {
                      handleAIClick(e);
                    } else {
                      handleNavClick(e, item.href);
                    }
                  }}
                  className="flex flex-col items-center py-2 min-w-[50px] transition-transform active:scale-95 outline-none group"
                >
                  <div className={`${isActive ? 'text-highlight' : 'text-white/40'} group-hover:text-white transition-colors duration-300`}>
                    {Icon && <Icon size={20} strokeWidth={2} />}
                  </div>
                  <span className={`text-[9px] mt-1 font-semibold uppercase tracking-wider ${isActive ? 'text-white' : 'text-white/60'} group-hover:text-white transition-colors`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <style>{`
        @keyframes badgePulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(29, 155, 240, 0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 12px 2px rgba(29, 155, 240, 0.2); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0, 100, 224, 0.4); }
        }
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-container {
          animation: marquee-scroll ${promoConfig.speed}s linear infinite;
        }
        @media (max-width: 768px) {
          body {
            padding-bottom: 100px;
            padding-top: 100px;
          }
        }
      `}</style>
    </>
  );
}

