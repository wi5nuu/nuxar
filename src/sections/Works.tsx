import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { worksConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const imgRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!worksConfig.title || worksConfig.projects.length === 0) return null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Entry animation
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();

        if (titleRef.current) {
          const chars = titleRef.current.querySelectorAll('.char');
          tl.fromTo(
            chars,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'elastic.out(1, 0.5)',
            }
          );
        }

        tl.fromTo(
          subtitleRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
          '-=0.3'
        );

        cardsRef.current.forEach((card, i) => {
          if (card) {
            tl.fromTo(
              card,
              { rotateY: i % 2 === 0 ? -180 : 180, opacity: 0 },
              { rotateY: 0, opacity: 1, duration: 1, ease: 'expo.out' },
              `-=${0.85 - i * 0.15}`
            );
          }
        });
      },
      once: true,
    });
    triggersRef.current.push(trigger);

    return () => {
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  // Zoom image in on hover/touch
  const handleImageZoomIn = (index: number) => {
    const img = imgRefs.current[index];
    if (!img) return;
    gsap.to(img, {
      scale: 1.08,
      duration: 0.6,
      ease: 'power2.out',
    });
    setHoveredIndex(index);
  };

  // Zoom image back out
  const handleImageZoomOut = (index: number) => {
    const img = imgRefs.current[index];
    if (!img) return;
    gsap.to(img, {
      scale: 1,
      duration: 0.7,
      ease: 'power2.out',
    });
    setHoveredIndex(null);
  };

  const titleChars = worksConfig.title.split('');

  return (
    <section
      ref={sectionRef}
      id="works"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-white overflow-hidden"
    >
      {/* Header */}
      <div className="container-full relative z-10 w-full mb-12 sm:mb-16">
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-black mb-4 tracking-[-0.02em] leading-tight"
        >
          {titleChars.map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h2>
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg text-black/60 max-w-2xl font-light tracking-wide leading-relaxed"
        >
          {worksConfig.subtitle}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="container-full relative z-10 w-full font-sans">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6 lg:gap-8 px-1 sm:px-0">
          {worksConfig.projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative group cursor-pointer"
              style={{
                // Hanya preserve-3d untuk entry animation, tapi tidak ada tilt saat hover
                transformStyle: 'preserve-3d',
                willChange: 'transform',
              }}
              onMouseEnter={() => handleImageZoomIn(index)}
              onMouseLeave={() => handleImageZoomOut(index)}
              // Touch support
              onTouchStart={() => handleImageZoomIn(index)}
              onTouchEnd={() => handleImageZoomOut(index)}
            >
              {/* Card content */}
              <div
                className="relative overflow-hidden rounded-lg bg-dark-gray shadow-sm"
                style={{
                  aspectRatio: '4/5',
                  minHeight: 'clamp(220px, 40vw, 380px)',
                }}
              >
                {/* Hanya img yang zoom, bukan seluruh card */}
                <img
                  ref={(el) => { imgRefs.current[index] = el; }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{
                    willChange: 'transform',
                    transformOrigin: 'center center',
                  }}
                />

                {/* Overlay — sedikit lebih gelap saat hover untuk kontras teks */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-300"
                  style={{ opacity: hoveredIndex === index ? 0.95 : 0.9 }}
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-5">
                  <p className="text-[10px] sm:text-xs text-white/60 mb-1 group-hover:text-highlight transition-colors duration-300 tracking-wide">
                    {project.category}
                  </p>
                  <h3 className="text-sm sm:text-base lg:text-xl text-white font-medium tracking-tight leading-snug">
                    {project.title}
                  </h3>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-highlight transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-highlight/5 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-black/5 translate-x-1/3" />
    </section>
  );
}