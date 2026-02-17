import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { pricingConfig, contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

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

  const handleOrder = (size: string, tier: string, price: number, originalPrice?: number) => {
    const discountInfo = originalPrice ? ` (Diskon dari Rp ${originalPrice.toLocaleString('id-ID')})` : '';
    const msg = encodeURIComponent(`Halo NUXAR PERFUMERY, saya ingin pesan parfum:\n- Ukuran: ${size}\n- Tier: ${tier}\n- Harga: Rp ${price.toLocaleString('id-ID')}${discountInfo}\n\nTerima kasih!`);
    window.open(`https://wa.me/${contactConfig.whatsappNumber}?text=${msg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black overflow-hidden"
    >
      <div className="container-full relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 ref={titleRef} className="text-h1 lg:text-display-xl text-white font-medium mb-4">
            {pricingConfig.title}
          </h2>
          <p ref={subtitleRef} className="text-body-lg text-white/60 max-w-2xl mx-auto">
            {pricingConfig.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
          {sizes.map((size, index) => (
            <div
              key={size.id}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`relative p-6 lg:p-8 rounded-2xl transition-all duration-500 group focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight touch-manipulation border ${size.isRecommended
                ? 'bg-gradient-to-b from-white/[0.08] to-transparent border-highlight/50 shadow-[0_0_30px_rgba(255,255,255,0.02)] sm:scale-105 z-10'
                : 'bg-white/[0.03] border-white/5 hover:border-white/10'
                }`}
              tabIndex={0}
            >
              {size.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-highlight text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 rounded-full flex items-center gap-1.5 shadow-lg shadow-highlight/20 whitespace-nowrap">
                  Paling Recommended
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-h4 text-white font-semibold">{size.size}</h3>
                <p className="text-body-sm text-white/50 mt-1">{size.tagline}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {size.tiers.map((tier) => (
                  <li key={tier.name} className="flex items-center justify-between">
                    <span className="text-body text-white/80">{tier.name}</span>
                    <div className="flex flex-col items-end">
                      {tier.originalPrice && (
                        <span className="text-[10px] text-white/30 line-through">
                          Rp {tier.originalPrice.toLocaleString('id-ID')}
                        </span>
                      )}
                      <span className="text-body font-semibold text-white tabular-nums">
                        Rp {tier.price.toLocaleString('id-ID')}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => handleOrder(size.size, size.tiers[0].name, size.tiers[0].price, size.tiers[0].originalPrice)}
                className={`w-full py-3 text-body font-medium rounded-xl transition-all duration-300 active:scale-95 touch-manipulation ${size.isRecommended
                  ? 'bg-white text-black hover:bg-highlight hover:text-white'
                  : 'bg-white/10 text-white hover:bg-white hover:text-black'
                  }`}
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
