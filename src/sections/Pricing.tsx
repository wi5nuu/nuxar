import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pricingConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = '6281394882490';

export function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  if (!pricingConfig.title || pricingConfig.sizes.length === 0) return null;

  const sizes = pricingConfig.sizes;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        tl.fromTo(titleRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'expo.out' });
        tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.4');
        cardsRef.current.forEach((card, i) => {
          if (card) {
            tl.fromTo(card, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, `-=${0.5 - i * 0.1}`);
          }
        });
      },
      once: true,
    });
    return () => trigger.kill();
  }, []);

  const handleOrder = (size: string, tier: string, price: number) => {
    const msg = encodeURIComponent(`Halo NUXAR PERFUMERY, saya ingin pesan parfum:\n- Ukuran: ${size}\n- Tier: ${tier}\n- Harga: Rp ${price.toLocaleString('id-ID')}\n\nTerima kasih!`);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black overflow-hidden"
    >
      <div className="w-full max-w-[min(100%,1920px)] mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 ref={titleRef} className="text-h1 lg:text-display-xl text-white font-medium mb-4">
            {pricingConfig.title}
          </h2>
          <p ref={subtitleRef} className="text-body-lg text-white/60 max-w-2xl mx-auto">
            {pricingConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {sizes.map((size, index) => (
            <div
              key={size.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="relative bg-dark-gray/80 backdrop-blur-sm p-6 lg:p-8 rounded-xl transition-all duration-300 hover:bg-dark-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-black touch-manipulation"
              tabIndex={0}
            >
              <div className="mb-6">
                <h3 className="text-h4 text-white font-semibold">{size.size}</h3>
                <p className="text-body-sm text-white/50 mt-1">{size.tagline}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {size.tiers.map((tier) => (
                  <li key={tier.name} className="flex items-center justify-between">
                    <span className="text-body text-white/80">{tier.name}</span>
                    <span className="text-body font-semibold text-white tabular-nums">
                      Rp {(tier.price / 1000).toFixed(0)}rb
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleOrder(size.size, size.tiers[1].name, size.tiers[1].price)}
                className="w-full py-3 text-body font-medium bg-highlight text-white rounded-lg hover:bg-highlight/90 transition-colors duration-200 touch-manipulation"
              >
                {pricingConfig.ctaButtonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
