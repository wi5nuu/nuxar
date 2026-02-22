import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { Plus, Sparkles } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { faqConfig } from '../config';

export function FAQPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, duration: 0.8, ease: 'power3.out' });
        gsap.from(contentRef.current, { y: 30, duration: 0.8, delay: 0.3, ease: 'power2.out' });
    }, []);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <PageLayout breadcrumbs={[{ label: 'FAQ' }]}>
            <SEOHead
                title="FAQ NUXAR PERFUMERY | Info Produk, Pemesanan & Pengiriman Bekasi"
                description="Pusat bantuan NUXAR PERFUMERY. Informasi lengkap mengenai keaslian parfum eceran, ketahanan aroma, cara pemesanan via WhatsApp, dan durasi pengiriman ke Bekasi & Jababeka."
                keywords="faq parfum nuxar bekasi, pusat bantuan nuxar jababeka, cara pesan parfum nuxar, keaslian parfum eceran nuxar, pengiriman parfum bekasi"
                canonical="/faq"
            />

            <section className="pt-8 pb-16 px-6 lg:px-16">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center relative z-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 border border-highlight/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                            <Sparkles className="h-3 w-3" /> Knowledge Base · 2026
                        </div>
                        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white uppercase italic">
                            Common <span className="text-highlight">Questions</span>
                        </h1>
                        <p className="text-white/80 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                            Pusat informasi lengkap mengenai produk, pemesanan, dan pengiriman kami.
                        </p>
                    </div>

                    <div ref={contentRef} className="space-y-4 relative z-20">
                        {faqConfig.faqs.map((faq, index) => (
                            <div key={index} className="border-b border-white/10 last:border-0 pb-4">
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full py-6 flex items-center justify-between text-left group"
                                >
                                    <h3 className={`text-xl lg:text-2xl text-white transition-colors ${openIndex === index ? 'text-highlight' : 'group-hover:text-white/80'}`}>
                                        {faq.question}
                                    </h3>
                                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all ${openIndex === index ? 'bg-highlight border-highlight rotate-45' : 'group-hover:border-white/40'}`}>
                                        <Plus className="w-5 h-5 text-white" />
                                    </div>
                                </button>
                                <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-lg text-white/70 leading-relaxed pb-6">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
                        <h3 className="text-2xl font-bold text-white mb-4">Masih Butuh Bantuan?</h3>
                        <p className="text-white/70 mb-8">Tim kami siap menjawab pertanyaan spesifik Anda seputar aroma dan pesanan.</p>
                        <a href="/kontak" className="inline-block px-8 py-4 bg-highlight text-black rounded-full font-bold hover:opacity-90 transition-opacity">
                            Hubungi Tim Support
                        </a>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
