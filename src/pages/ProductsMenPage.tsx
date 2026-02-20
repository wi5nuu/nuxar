import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { worksConfig } from '../config';
import { fetchPerfumesFromSupabase, SUPABASE_ENABLED } from '../lib/supabase';
import type { PerfumeItem } from '../data/perfumes';

gsap.registerPlugin(ScrollTrigger);

const PRIA_KATEGORI = ['Woody', 'Oriental', 'Aquatic', 'Woody Oriental', 'Citrus'];

export function ProductsMenPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const [products, setProducts] = useState<PerfumeItem[]>([]);
    const [loading, setLoading] = useState(SUPABASE_ENABLED);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, opacity: 0, duration: 0.8, ease: 'power3.out' });

        if (SUPABASE_ENABLED) {
            fetchPerfumesFromSupabase().then(data => {
                if (data && data.cowok.length > 0) {
                    setProducts(data.cowok);
                } else {
                    // Fallback to worksConfig filtered
                    const localPria = worksConfig.projects
                        .filter(p => PRIA_KATEGORI.includes(p.category))
                        .map(p => ({
                            id: String(p.id),
                            name: p.title,
                            fullName: p.title,
                            category: p.category,
                            gender: 'pria'
                        } as any));
                    setProducts(localPria);
                }
                setLoading(false);
            }).catch(() => {
                const localPria = worksConfig.projects
                    .filter(p => PRIA_KATEGORI.includes(p.category))
                    .map(p => ({
                        id: String(p.id),
                        name: p.title,
                        fullName: p.title,
                        category: p.category,
                        gender: 'pria'
                    } as any));
                setProducts(localPria);
                setLoading(false);
            });
        }
    }, []);

    useEffect(() => {
        if (products.length > 0) {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    y: 50, opacity: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
                    scrollTrigger: { trigger: card, start: 'top 90%', once: true },
                });
            });
        }
    }, [products]);

    return (
        <PageLayout breadcrumbs={[{ label: 'Produk', href: '/product' }, { label: 'Pria' }]}>
            <SEOHead
                title="Parfum Pria Eceran Original | NUXAR PERFUMERY – Woody, Oriental, Aquatic"
                description="Koleksi parfum pria eceran original NUXAR. Aroma Woody, Oriental, Aquatic, Citrus yang maskulin dan tahan lama. Harga mulai Rp35.000. Cocok untuk kantor, kuliah, dan traveling."
                keywords="parfum pria eceran, parfum cowok original, parfum pria murah, parfum woody eceran, parfum oriental pria, parfum aquatic eceran, nuxar pria"
                canonical="/product/pria"
            />

            <section className="pt-8 pb-16 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    {/* Gender filter tabs */}
                    <div className="flex gap-3 mb-8">
                        <Link to="/product" className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 hover:border-white/50 text-sm transition-colors">
                            Semua
                        </Link>
                        <Link to="/product/pria" className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-sm font-semibold">
                            Pria ♂
                        </Link>
                        <Link to="/product/wanita" className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 hover:border-white/50 text-sm transition-colors">
                            Wanita ♀
                        </Link>
                    </div>

                    <h1 ref={headingRef} className="text-4xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
                        Parfum <span className="text-highlight">Pria</span> Eceran
                    </h1>
                    <p className="text-white/90 text-lg max-w-2xl mb-10">
                        Aroma maskulin pilihan untuk pria aktif — dari Woody yang elegan, Oriental yang eksotis,
                        hingga Aquatic yang segar. Semua original, semua premium.
                    </p>

                    {/* Product Grid */}
                    {loading ? (
                        <div className="py-20 text-center text-white/40">Menyiapkan aroma maskulin terbaik...</div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                            {products.map((product, i) => (
                                <div
                                    key={product.id}
                                    ref={(el) => { if (el) cardsRef.current[i] = el; }}
                                    className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
                                >
                                    <div className="aspect-[3/4] overflow-hidden">
                                        <img
                                            src={product.image || `/product-${((i + 1) % 8) || 8}.jpg`}
                                            alt={`${product.name} - Parfum Premium Original`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider bg-blue-400/10 px-2 py-0.5 rounded">
                                                Premium
                                            </span>
                                            <span className="text-[10px] text-white/40 uppercase tracking-tighter">
                                                {product.note || 'Ready Stock'}
                                            </span>
                                        </div>
                                        <h3 className="text-sm font-bold text-white mb-1 group-hover:text-highlight transition-colors line-clamp-1">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-white/50 mb-3">Rp65.000</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tips Section */}
                    <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10">
                        <h2 className="text-2xl font-bold mb-4 text-white">Tips Memilih Parfum Pria</h2>
                        <ul className="space-y-3 text-white/70">
                            <li className="flex gap-3"><span className="text-highlight font-bold">01.</span> <span><strong>Woody/Musk</strong> — Cocok untuk kantor dan acara formal. Aroma tahan 6-10 jam.</span></li>
                            <li className="flex gap-3"><span className="text-highlight font-bold">02.</span> <span><strong>Aquatic/Citrus</strong> — Segar untuk aktivitas outdoor dan olahraga.</span></li>
                            <li className="flex gap-3"><span className="text-highlight font-bold">03.</span> <span><strong>Oriental</strong> — Maskulin dan eksotis untuk malam dan kencan.</span></li>
                        </ul>
                        <a
                            href="https://wa.me/6281394882490?text=Halo NUXAR, minta rekomendasi parfum pria dong"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-highlight text-black rounded-full font-bold hover:opacity-90 transition-opacity"
                        >
                            <ShoppingBag size={18} /> Konsultasi Gratis via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
