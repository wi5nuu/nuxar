import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Instagram, MessageCircle, ExternalLink, ArrowUpRight, Music2, Linkedin, Facebook } from 'lucide-react';
import { footerConfig, type FooterLink } from '../config';

gsap.registerPlugin(ScrollTrigger);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram,
  MessageCircle,
  ExternalLink,
  Music2,
  Linkedin,
  Facebook,
};

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const linksCol1Ref = useRef<(HTMLAnchorElement | null)[]>([]);
  const linksCol2Ref = useRef<(HTMLAnchorElement | null)[]>([]);
  const copyrightRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!footerConfig.copyright) return null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 90%',
      onEnter: () => {
        const tl = gsap.timeline();

        // Marquee fade in and start
        tl.fromTo(
          marqueeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1, ease: 'power2.out' }
        );

        // Top border draw
        tl.fromTo(
          borderRef.current,
          { width: 0 },
          { width: '100%', duration: 0.8, ease: 'expo.inOut' },
          '-=0.5'
        );

        // Links column 1 stagger
        linksCol1Ref.current.forEach((link, i) => {
          if (link) {
            tl.fromTo(
              link,
              { x: -30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
              `-=${0.35 - i * 0.1}`
            );
          }
        });

        // Links column 2 stagger
        linksCol2Ref.current.forEach((link, i) => {
          if (link) {
            tl.fromTo(
              link,
              { x: 30, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.4, ease: 'power2.out' },
              `-=${0.35 - i * 0.1}`
            );
          }
        });

        // Copyright fade up
        tl.fromTo(
          copyrightRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.2'
        );
      },
      once: true,
    });
    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="relative pt-12 sm:pt-16 pb-24 sm:pb-12 bg-black overflow-hidden"
    >
      {/* Marquee section */}
      <div
        ref={marqueeRef}
        className="relative mb-20 overflow-hidden"
      >
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black to-transparent z-10" />

        {/* Marquee content */}
        <div className="marquee-container">
          <div className="marquee-content inline-flex items-center gap-12 text-[clamp(2.5rem,10vw,6rem)] lg:text-[112px] font-black whitespace-nowrap flex-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 flex-nowrap whitespace-nowrap">
                <span className="whitespace-nowrap">
                  TEMUKAN AROMA SIGNATUREMU BERSAMA{" "}
                  <span className="text-highlight animate-pulse-glow">NUXAR</span>
                </span>
                <span className="text-white/20 mx-4 font-normal text-3xl md:text-6xl select-none">&bull;</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Top border */}
      <div
        ref={borderRef}
        className="h-px bg-white/20 mb-16"
        style={{ willChange: 'width' }}
      />

      {/* Footer content */}
      <div className="container-full relative z-10 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Nav links */}
          <div className="space-y-4">
            {(footerConfig.navLinks1 as FooterLink[]).map((link, i) => (
              link.isPage ? (
                <Link
                  key={link.label}
                  ref={(el) => {
                    linksCol1Ref.current[i] = el;
                  }}
                  to={link.href}
                  className="block text-body text-white/60 hover:text-white transition-colors duration-300 group relative overflow-hidden"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-400">
                    {link.label}
                  </span>
                  <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-400 text-white">
                    {link.label}
                  </span>
                </Link>
              ) : (
                <a
                  key={link.label}
                  ref={(el) => {
                    linksCol1Ref.current[i] = el;
                  }}
                  href={link.href}
                  className="block text-body text-white/60 hover:text-white transition-colors duration-300 group relative overflow-hidden"
                >
                  <span className="block group-hover:-translate-y-full transition-transform duration-400">
                    {link.label}
                  </span>
                  <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-400 text-white">
                    {link.label}
                  </span>
                </a>
              )
            ))}
          </div>

          {/* Column 2 - More links */}
          <div className="space-y-4">
            {footerConfig.navLinks2.map((link, i) => {
              const IconComponent = link.icon ? iconMap[link.icon] : null;
              const isExternal = link.href.startsWith('http');
              return (
                <a
                  key={link.label}
                  ref={(el) => {
                    linksCol2Ref.current[i] = el;
                  }}
                  href={link.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 text-body text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  {IconComponent && (
                    <IconComponent className="w-4 h-4 group-hover:drop-shadow-[0_0_10px_currentColor] transition-all duration-200" />
                  )}
                  <span className="relative overflow-hidden">
                    <span className="block group-hover:-translate-y-full transition-transform duration-400">
                      {link.label}
                    </span>
                    <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-400 text-white">
                      {link.label}
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Column 3-4 - CTA */}
          <div className="col-span-2 lg:text-right">
            <Link
              to={footerConfig.ctaHref}
              className="inline-flex items-center gap-3 text-h5 lg:text-h4 text-white font-medium group hover:text-highlight transition-colors duration-300"
            >
              {footerConfig.ctaText}
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-highlight group-hover:shadow-[0_0_15px_var(--highlight)] transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div
          ref={copyrightRef}
          className="mt-20 pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4"
        >
          <p className="text-body-sm text-white/40">
            {footerConfig.copyright}
          </p>
          <p className="text-body-sm text-white/30">
            {footerConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
