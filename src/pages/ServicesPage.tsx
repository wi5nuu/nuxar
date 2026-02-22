import { useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { servicesConfig } from '../config';

export function ServicesPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, duration: 0.8, ease: 'power3.out' });
        gsap.from(contentRef.current, { y: 30, duration: 0.8, delay: 0.3, ease: 'power2.out' });
    }, []);

    return (
        <PageLayout breadcrumbs={[{ label: 'Layanan' }]}>
            <SEOHead
                title="Layanan NUXAR PERFUMERY | Konsultasi Aroma & Pengiriman Bekasi"
                description="Layanan premium NUXAR PERFUMERY Bekasi: Konsultasi aroma gratis, tester eceran, gift wrapping eksklusif, dan pengiriman instan area Jababeka & sekitarnya."
                keywords="layanan parfum eceran bekasi, konsultasi parfum jababeka, pengiriman parfum cepat bekasi, tester parfum gratis, nuxar services"
                canonical="/layanan"
            />

            <section className="pt-8 pb-16 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 text-center relative z-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 border border-highlight/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                            <Sparkles className="h-3 w-3" /> Elite Services · 2026
                        </div>
                        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white uppercase italic">
                            Layanan <span className="text-highlight">Eksklusif</span>
                        </h1>
                        <p className="text-white/80 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                            {servicesConfig.subtitle}
                        </p>
                    </div>

                    <div ref={contentRef} className="grid md:grid-cols-2 gap-12 relative z-20">
                        {servicesConfig.services.map((service) => (
                            <div key={service.id} className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-highlight/50 transition-all duration-500">
                                <div className="flex items-start gap-6">
                                    <div className="text-h2 font-light text-white/20 group-hover:text-highlight transition-colors">
                                        [{service.id}]
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-highlight transition-colors">
                                            {service.title}
                                        </h2>
                                        <p className="text-white/70 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <div className="rounded-2xl overflow-hidden aspect-video">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
