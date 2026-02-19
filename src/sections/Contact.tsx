import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send } from 'lucide-react';
import { contactConfig } from '../config';

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const inputsRef = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    product: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  useEffect(() => {
    let widgetId: string | null = null;

    // Function to render turnstile
    const renderTurnstile = () => {
      // @ts-ignore
      if (window.turnstile && !widgetId) {
        const container = document.getElementById('turnstile-container');
        if (container) {
          container.innerHTML = ''; // Clear container to avoid double widgets in React Strict Mode
          // @ts-ignore
          widgetId = window.turnstile.render('#turnstile-container', {
            sitekey: contactConfig.turnstileSiteKey,
            callback: (token: string) => {
              setTurnstileToken(token);
            },
            'expired-callback': () => {
              setTurnstileToken(null);
            },
          });
        }
      }
    };

    // Try rendering immediately
    renderTurnstile();

    // If turnstile script isn't loaded yet, it might not be available
    // We can also listen for the script load if needed, but usually useEffect is late enough
    const timer = setInterval(() => {

      if (window.turnstile && !widgetId) {
        renderTurnstile();
        clearInterval(timer);
      }
    }, 500);

    return () => {
      clearInterval(timer);
      // @ts-ignore
      if (widgetId && window.turnstile) {
        // @ts-ignore
        window.turnstile.remove(widgetId);
      }
    };
  }, []);

  if (!contactConfig.title) return null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        tl.fromTo(dividerRef.current, { height: 0 }, { height: '100%', duration: 1.2, ease: 'expo.inOut' });
        tl.fromTo(formRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }, '-=0.8');
        tl.fromTo(imageRef.current, { scale: 1.1, clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }, { scale: 1, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1, ease: 'expo.out' }, '-=0.6');
        if (titleRef.current) {
          const chars = titleRef.current.querySelectorAll('.char');
          tl.fromTo(chars, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.03, ease: 'power2.out' }, '-=0.7');
        }
        tl.fromTo(subtitleRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.5');
        inputsRef.current.forEach((input, i) => {
          if (input) tl.fromTo(input, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, `-=${0.4 - i * 0.1}`);
        });
        tl.fromTo(buttonRef.current, { scale: 0 }, { scale: 1, duration: 0.6, ease: 'elastic.out(1, 0.5)' }, '-=0.3');
      },
      once: true,
    });
    triggersRef.current.push(trigger);
    const parallaxTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        if (imageRef.current) gsap.set(imageRef.current, { y: -30 + self.progress * 60 });
      },
    });
    triggersRef.current.push(parallaxTrigger);
    return () => triggersRef.current.forEach((t) => t.kill());
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, whatsapp, product, message } = formData;
    const productLabel = contactConfig.productOptions.find((o) => o.value === product)?.label || product || '-';
    const text = [
      `*Pesan dari Website NUXAR PERFUMERY*`,
      ``,
      `Nama: ${name}`,
      `Email: ${email}`,
      `WhatsApp: ${whatsapp}`,
      `Produk: ${productLabel}`,
      ``,
      `Pesan:`,
      message || '-',
    ].join('\n');
    const url = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass = "w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors duration-300";

  const FormField = ({
    name,
    label,
    children,
    index,
  }: {
    name: string;
    label: string;
    children: React.ReactNode;
    index: number;
  }) => (
    <div
      ref={(el) => { inputsRef.current[index] = el; }}
      className="relative"
    >
      <label className={`absolute left-0 transition-all duration-200 ${focusedField === name || formData[name as keyof typeof formData] ? '-top-6 text-body-sm text-white' : 'top-3 text-body text-white/50'}`}>
        {label}
      </label>
      {children}
      <div className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-300 ${focusedField === name ? 'w-full' : 'w-0'}`} />
    </div>
  );

  const titleChars = contactConfig.title.split('');

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black overflow-hidden"
    >
      <div className="container-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 relative">
          <div ref={dividerRef} className="hidden lg:block absolute left-1/2 top-0 w-px bg-white/20" style={{ transform: 'rotate(12deg) translateX(-50%)', transformOrigin: 'top center', willChange: 'height' }} />

          <form ref={formRef} onSubmit={handleSubmit} className="relative z-10">
            <h2 ref={titleRef} className="text-h2 lg:text-h1 text-white font-medium mb-4">
              {titleChars.map((char, i) => (
                <span key={i} className="char inline-block">{char}</span>
              ))}
            </h2>
            <p ref={subtitleRef} className="text-body-lg text-white/60 mb-12">{contactConfig.subtitle}</p>

            <div className="space-y-8">
              <FormField name="name" label={contactConfig.nameLabel} index={0}>
                <input type="text" name="name" id="contact-name" value={formData.name} onChange={handleInputChange} maxLength={100} onFocus={() => setFocusedField('name')} onBlur={() => setFocusedField(null)} className={inputClass} required aria-label={contactConfig.nameLabel} />
              </FormField>
              <FormField name="email" label={contactConfig.emailLabel} index={1}>
                <input type="email" name="email" id="contact-email" value={formData.email} onChange={handleInputChange} maxLength={150} onFocus={() => setFocusedField('email')} onBlur={() => setFocusedField(null)} className={inputClass} required aria-label={contactConfig.emailLabel} />
              </FormField>
              <FormField name="whatsapp" label={contactConfig.whatsappLabel} index={2}>
                <input type="tel" name="whatsapp" id="contact-whatsapp" value={formData.whatsapp} onChange={handleInputChange} maxLength={20} placeholder="08xxxxxxxxxx" onFocus={() => setFocusedField('whatsapp')} onBlur={() => setFocusedField(null)} className={inputClass} required aria-label={contactConfig.whatsappLabel} />
              </FormField>
              <FormField name="product" label={contactConfig.productLabel} index={3}>
                <select name="product" id="contact-product" value={formData.product} onChange={handleInputChange} onFocus={() => setFocusedField('product')} onBlur={() => setFocusedField(null)} className={`${inputClass} appearance-none cursor-pointer`} aria-label={contactConfig.productLabel}>
                  <option value="" className="bg-black">{contactConfig.productPlaceholder}</option>
                  {contactConfig.productOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-black">{opt.label}</option>
                  ))}
                </select>
              </FormField>
              <FormField name="message" label={contactConfig.messageLabel} index={4}>
                <textarea name="message" id="contact-message" value={formData.message} onChange={handleInputChange} maxLength={2000} rows={4} onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)} className={`${inputClass} resize-none`} aria-label={contactConfig.messageLabel} />
              </FormField>
            </div>

            {/* Turnstile Widget */}
            <div id="turnstile-container" className="mt-8"></div>

            <button
              ref={buttonRef}
              type="submit"
              disabled={!turnstileToken}
              className={`mt-12 px-10 py-4 bg-white text-black text-body font-medium flex items-center gap-3 transition-colors duration-300 relative overflow-hidden group ${!turnstileToken ? 'opacity-50 cursor-not-allowed' : 'hover:bg-highlight hover:text-white cursor-pointer'}`}
            >
              <span className="relative z-10">{contactConfig.submitButtonText}</span>
              <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-highlight transform -translate-x-full group-hover:translate-x-0 transition-transform duration-400 ease-luxury

" />
            </button>
          </form>

          <div ref={imageRef} className="relative aspect-[2/3] lg:aspect-auto overflow-hidden" style={{ willChange: 'transform, clip-path' }}>
            <img src={contactConfig.image} alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-highlight/20" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-white/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
