import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { MessageCircle, Instagram, Linkedin } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { Contact } from '../sections/Contact';

export function ContactPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' });
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
                title="Kontak NUXAR PERFUMERY – WhatsApp, Instagram, LinkedIn"
                description="Hubungi NUXAR PERFUMERY untuk pemesanan parfum eceran, konsultasi aroma, atau pertanyaan lainnya. Tersedia via WhatsApp, Instagram @nuxar_perfumery, dan LinkedIn."
                keywords="kontak nuxar perfumery, pesan parfum eceran, whatsapp nuxar, instagram nuxar perfumery, konsultasi parfum"
                canonical="/kontak"
            />

            {/* Hero */}
            <section className="pt-8 pb-8 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <h1 ref={headingRef} className="text-4xl lg:text-6xl font-bold tracking-tight mb-4">
                        Hubungi <span className="text-highlight">Kami</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mb-12">
                        Punya pertanyaan soal parfum? Mau order? Tim NUXAR siap membantu lewat berbagai saluran.
                    </p>

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
