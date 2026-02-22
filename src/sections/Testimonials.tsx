import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import { testimonialsConfig } from '../config';
import type { TestimonialItem } from '../config';

gsap.registerPlugin(ScrollTrigger);

function TestimonialCard({ testimonial, index }: { testimonial: TestimonialItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageError, setImageError] = useState(false);

  const initials = testimonial.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div
      ref={cardRef}
      className="relative bg-dark-gray/50 backdrop-blur-sm p-8 lg:p-10 group hover:bg-dark-gray/70 transition-colors duration-300 preserve-3d"
      style={{
        transform: `rotateY(${(index - 1) * 5}deg)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform, box-shadow',
      }}
    >
      {/* Quote mark */}
      <Quote className="quote-mark absolute top-6 right-6 w-12 h-12 text-white opacity-10" />

      {/* Quote text */}
      <p className="text-body-lg text-white/95 leading-relaxed mb-8 relative z-10">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="avatar w-14 h-14 rounded-full overflow-hidden border-2 border-highlight/30 flex-shrink-0 bg-highlight/10 flex items-center justify-center">
          {!imageError ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="text-highlight font-bold text-sm">
              {initials}
            </span>
          )}
        </div>

        {/* Info */}
        <div>
          <h3 className="text-body text-white font-medium">
            {testimonial.name}
          </h3>
          <p className="text-body-sm text-white/80">
            {testimonial.title}
          </p>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-highlight/5 to-transparent" />
      </div>
    </div>
  );
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  if (!testimonialsConfig.title || testimonialsConfig.testimonials.length === 0) return null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Entry animation
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();

        // Title letter expand
        tl.fromTo(
          titleRef.current,
          { letterSpacing: '10px', opacity: 0 },
          { letterSpacing: '0px', opacity: 1, duration: 0.8, ease: 'expo.out' }
        );

        // Cards rise animation handled within cards via container selector
        const cards = section.querySelectorAll('.preserve-3d');
        cards.forEach((card, i) => {
          tl.fromTo(
            card,
            { y: 100, z: -50, rotateX: 15, opacity: 0 },
            { y: 0, z: 0, rotateX: 0, opacity: 1, duration: 1, ease: 'expo.out' },
            `-=${0.8 - i * (0.8 / cards.length)}`
          );
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

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-dark-gray to-black overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      <div className="container-full">
        <h2
          ref={titleRef}
          className="text-h1 lg:text-display-xl text-white font-medium text-center mb-20"
        >
          {testimonialsConfig.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonialsConfig.testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
