import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Clock, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { blogConfig } from '../config';
import { fetchBlogsFromSupabase, SUPABASE_ENABLED } from '../lib/supabase';

export function BlogPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    const [posts, setPosts] = useState(blogConfig.posts);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, duration: 0.8, ease: 'power3.out' });

        if (SUPABASE_ENABLED) {
            fetchBlogsFromSupabase().then(data => {
                if (data && data.length > 0) {
                    setPosts(data as any);
                }
                setLoading(false);
            }).catch(() => setLoading(false));
        }
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.from(card, {
                    y: 50, duration: 0.6, delay: i * 0.15, ease: 'power2.out',
                });
            });
        }
    }, [posts]);

    return (
        <PageLayout breadcrumbs={[{ label: 'Blog' }]}>
            <SEOHead
                title="Blog & Tips Parfum Premium Indonesia | NUXAR PERFUMERY"
                description="Panduan lengkap memilih parfum, cara agar wangi tahan lama, dan rahasia aroma premium. Baca artikel terbaru dari NUXAR PERFUMERY untuk meningkatkan rasa percaya diri Anda setiap hari."
                keywords="tips parfum premium, panduan memilih parfum, rahasia parfum tahan lama, nuxar blog, wawasan parfum indonesia, cara pakai parfum yang benar"
                canonical="/blog"
            />

            <section className="pt-8 pb-16 px-6 lg:px-16">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12 relative z-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 border border-highlight/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                            <Sparkles className="h-3 w-3" /> Scent Stories · 2026
                        </div>
                        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white uppercase italic">
                            Fragrance <span className="text-highlight">Insights</span>
                        </h1>
                        <p className="text-white/80 text-xs md:text-sm max-w-lg leading-relaxed">
                            Wawasan mendalam tentang dunia wewangian, tips perawatan parfum, dan panduan memilih aroma signature Anda.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 relative z-20">
                        {loading ? (
                            <div className="col-span-2 py-20 text-center text-white/40 italic">Mencari artikel menarik...</div>
                        ) : (
                            posts.map((post, i) => (
                                <div
                                    key={post.id}
                                    ref={(el) => { if (el) cardsRef.current[i] = el; }}
                                    className="group rounded-3xl overflow-hidden bg-white/10 border border-white/20 hover:border-highlight/50 transition-all duration-300"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-xs text-highlight font-semibold uppercase tracking-widest bg-highlight/10 px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                            <span className="flex items-center gap-1 text-[10px] text-white/80 uppercase tracking-tighter">
                                                <Calendar size={10} /> {post.date}
                                            </span>
                                            <span className="flex items-center gap-1 text-[10px] text-white/80 uppercase tracking-tighter">
                                                <Clock size={10} /> {post.readTime}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold mb-3 text-white group-hover:text-highlight transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-white text-sm leading-relaxed mb-5">{post.excerpt}</p>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-highlight group/btn transition-colors"
                                        >
                                            Baca Selengkapnya
                                            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* CTA Banner */}
                    <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-highlight/10 to-transparent border border-highlight/20 text-center">
                        <h2 className="text-2xl font-bold mb-2 text-white">Punya Pertanyaan Soal Parfum?</h2>
                        <p className="text-white/90 mb-6">Tim ahli NUXAR siap membantu Anda menemukan aroma signature yang tepat.</p>
                        <a
                            href="https://wa.me/6281394882490?text=Halo NUXAR, saya mau konsultasi parfum"
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-highlight text-black rounded-full font-bold hover:opacity-90 transition-opacity"
                        >
                            Konsultasi Gratis via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
