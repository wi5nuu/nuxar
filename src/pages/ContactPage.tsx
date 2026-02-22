import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MessageCircle, Instagram, Linkedin, Sparkles } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { Contact } from '../sections/Contact';

export function ContactPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, duration: 0.8, ease: 'power3.out' });
    }, []);

    const channels = [
        {
            icon: MessageCircle,
            label: 'WhatsApp',
            value: '+62 813-9488-2490',
            href: 'https://wa.me/6281394882490?text=Halo NUXAR, saya ingin bertanya',
            color: 'text-green-400',
            bg: 'bg-green-500/10',
        },
        {
            icon: Instagram,
            label: 'Instagram',
            value: '@nuxar_perfumery',
            href: 'https://instagram.com/nuxar_perfumery',
            color: 'text-pink-400',
            bg: 'bg-pink-500/10',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Nuxar Perfumery',
            href: 'https://linkedin.com/company/nuxar-perfumery',
            color: 'text-blue-400',
            bg: 'bg-blue-500/10',
        },
    ];

    return (
        <PageLayout breadcrumbs={[{ label: 'Kontak' }]}>
            <SEOHead
                title="Hubungi NUXAR PERFUMERY | Konsultasi Aroma & Pemesanan WhatsApp"
                description="Butuh bantuan memilih aroma? Hubungi tim NUXAR PERFUMERY via WhatsApp untuk konsultasi gratis dan pemesanan cepat. Ikuti kami juga di Instagram @nuxar_perfumery untuk update promo terbaru."
                keywords="hubungi nuxar bekasi, nomor whatsapp nuxar perfumery, pemesanan parfum eceran, konsultasi parfum gratis, lokasi nuxar jababeka"
                canonical="/kontak"
            />

            {/* Hero */}
            <section className="pt-8 pb-8 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-12 relative z-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 border border-highlight/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                            <Sparkles className="h-3 w-3" /> Let's Connect · 2026
                        </div>
                        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white uppercase italic">
                            Say <span className="text-highlight">Hello</span>
                        </h1>
                        <p className="text-white/80 text-xs md:text-sm max-w-lg leading-relaxed">
                            Punya pertanyaan soal parfum? Mau order? Tim NUXAR siap membantu lewat berbagai saluran.
                        </p>
                    </div>

                    {/* Contact Channels */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {channels.map((ch) => (
                            <a
                                key={ch.label}
                                href={ch.href}
                                target="_blank" rel="noopener noreferrer"
                                className={`p-6 rounded-2xl ${ch.bg} border border-white/10 hover:border-white/30 transition-all duration-300 group flex items-start gap-4`}
                            >
                                <div className={`w-12 h-12 rounded-xl ${ch.bg} border border-current/20 flex items-center justify-center flex-shrink-0 ${ch.color}`}>
                                    <ch.icon size={24} />
                                </div>
                                <div>
                                    <div className={`text-sm font-semibold ${ch.color} mb-1`}>{ch.label}</div>
                                    <div className="text-white font-medium group-hover:text-highlight transition-colors">{ch.value}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <Contact />
        </PageLayout>
    );
}
