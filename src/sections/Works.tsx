import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { worksConfig } from '../config';
import { fetchPerfumesFromSupabase, SUPABASE_ENABLED } from '../lib/supabase';

gsap.registerPlugin(ScrollTrigger);

export function Works() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [projects, setProjects] = useState(worksConfig.projects);
  const [loading, setLoading] = useState(SUPABASE_ENABLED);

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
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    if (SUPABASE_ENABLED) {
      fetchPerfumesFromSupabase().then(data => {
        if (data) {
          const all = [...data.cowok, ...data.cewek].slice(0, 8).map((p, idx) => ({
            id: p.id,
            title: p.name,
            category: p.category,
            image: p.image || `/product-${(idx % 8) + 1}.jpg`
          }));
          if (all.length > 0) setProjects(all as any);
        }
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, []);


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

      {/* Infinite Horizontal Carousel */}
      <div className="relative z-10 w-full overflow-hidden font-sans">
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 80s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}} />

        {loading ? (
          <div className="py-20 text-center text-black/20 italic">Menampilkan koleksi pilihan...</div>
        ) : (
          <div className="marquee-track flex gap-4 sm:gap-6 md:gap-8">
            {/* Double the projects to create seamless loop */}
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="relative group cursor-pointer shrink-0"
                style={{
                  width: 'clamp(200px, 30vw, 320px)',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
                onMouseEnter={() => { }}
                onMouseLeave={() => { }}
              >
                {/* Card content */}
                <div
                  className="relative overflow-hidden rounded-2xl bg-dark-gray shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2"
                  style={{
                    aspectRatio: '4/5',
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                    <p className="text-[9px] sm:text-[10px] text-highlight mb-1 font-black uppercase tracking-[0.2em]">
                      {project.category}
                    </p>
                    <h3 className="text-sm sm:text-base lg:text-lg text-white font-black tracking-tight leading-tight uppercase italic">
                      {project.title}
                    </h3>
                  </div>

                  {/* Arrow icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center shadow-lg">
                      <ArrowUpRight className="w-5 h-5 text-black" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative elements */}

      <div className="absolute top-20 left-0 w-32 h-32 bg-highlight/5 -translate-x-1/2" />
      <div className="absolute bottom-20 right-0 w-48 h-48 bg-black/5 translate-x-1/3" />
    </section>
  );
}