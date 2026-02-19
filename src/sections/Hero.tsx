import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heroConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);
  const [, setLoaded] = useState(false);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!heroConfig.title) return null;

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      imageRef.current,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8, ease: 'expo.out' }
    );

    if (titleRef.current) {
      const chars = titleRef.current.querySelectorAll('.char');
      tl.fromTo(
        chars,
        { rotateY: -90, y: 60, opacity: 0 },
        {
          rotateY: 0,
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        },
        '-=1.4'
      );
    }

    tl.fromTo(
      subtitleRef.current,
      { filter: 'blur(20px)', opacity: 0 },
      { filter: 'blur(0px)', opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    );

    tl.fromTo(
      servicesRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: 'expo.out' },
      '-=0.4'
    );

    tl.fromTo(
      lineRef.current,
      { height: 0 },
      { height: 200, duration: 1.5, ease: 'expo.inOut' },
      '-=0.8'
    );

    tl.fromTo(
      copyrightRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=1'
    );

    setLoaded(true);

    const trigger1 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '50% top',
      scrub: 1,
      onUpdate: (self) => {
        if (imageRef.current) {
          gsap.set(imageRef.current, {
            y: `${self.progress * 45}%`,
            opacity: 1 - self.progress * 0.65,
          });
        }
      },
    });
    triggersRef.current.push(trigger1);

    const trigger2 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '30% top',
      scrub: 1,
      onUpdate: (self) => {
        if (titleRef.current) {
          gsap.set(titleRef.current, {
            rotateX: -15 * self.progress,
            z: -100 * self.progress,
          });
        }
      },
    });
    triggersRef.current.push(trigger2);

    const trigger3 = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: '10% top',
      end: '40% top',
      scrub: 1,
      onUpdate: (self) => {
        if (subtitleRef.current) {
          gsap.set(subtitleRef.current, {
            opacity: 1 - self.progress,
            y: -30 * self.progress,
          });
        }
      },
    });
    triggersRef.current.push(trigger3);

    return () => {
      tl.kill();
      triggersRef.current.forEach((t) => t.kill());
      triggersRef.current = [];
    };
  }, []);

  const titleChars = heroConfig.title.split('');

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden perspective-container"
      style={{ perspective: '1200px' }}
    >
      {/* Main background image — murni tanpa overlay/filter/efek warna */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0"
        style={{ willChange: 'transform, opacity' }}
      >
        <img
          src={heroConfig.backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
        />
      </div>

      {/* Content container */}
      <div
        className="container-full relative z-20 h-full flex flex-col justify-center items-center"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Main title */}
        <h1
          ref={titleRef}
          className="text-[clamp(2.5rem,7vw,5rem)] font-medium text-white tracking-tight mb-4 preserve-3d text-center leading-[0.95]"
          style={{ willChange: 'transform' }}
        >
          {titleChars.map((char, i) => (
            <span key={i} className="char inline-block">
              {char}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-[clamp(1rem,2vw,1.5rem)] font-extralight text-white/80 tracking-widest"
          style={{ willChange: 'filter, opacity' }}
        >
          {heroConfig.subtitle}
        </p>

        {/* Decorative accent line */}
        <div
          className="absolute left-1/2 bottom-32 w-px bg-highlight z-30"
          ref={lineRef}
          style={{
            transform: 'translateX(-50%)',
            willChange: 'height',
          }}
        />
      </div>

      {/* Services label - vertical left */}
      <div
        ref={servicesRef}
        className="absolute left-4 sm:left-6 md:left-8 bottom-24 sm:bottom-32 z-30 flex flex-col items-center gap-4"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="text-body-sm text-white/60 tracking-widest">
          {heroConfig.servicesLabel}
        </span>
      </div>

      {/* Copyright - bottom right */}
      <div
        ref={copyrightRef}
        className="absolute right-4 sm:right-6 md:right-8 bottom-4 sm:bottom-8 z-30"
      >
        <span className="text-body-sm text-white/40">{heroConfig.copyright}</span>
      </div>
    </section>
  );
}