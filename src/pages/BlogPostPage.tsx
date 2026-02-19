import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { blogConfig } from '../config';
import { fetchBlogsFromSupabase, SUPABASE_ENABLED } from '../lib/supabase';

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<any>(blogConfig.posts.find(p => p.slug === slug));
    const [loading, setLoading] = useState(!post && SUPABASE_ENABLED);

    useEffect(() => {
        if (!post && SUPABASE_ENABLED) {
            fetchBlogsFromSupabase().then(blogs => {
                if (blogs) {
                    const found = blogs.find(p => p.slug === slug);
                    if (found) setPost(found);
                }
                setLoading(false);
            }).catch(() => setLoading(false));
        }
    }, [slug, post]);

    if (loading) {
        return (
            <PageLayout breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Memuat...' }]}>
                <div className="min-h-[50vh] flex items-center justify-center">
                    <div className="text-white/40 italic">Membuka lembaran artikel...</div>
                </div>
            </PageLayout>
        );
    }

    if (!post) {
        return (
            <PageLayout breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: 'Artikel tidak ditemukan' }]}>
                <SEOHead title="Artikel Tidak Ditemukan | NUXAR PERFUMERY" description="Artikel yang Anda cari tidak tersedia." canonical="/blog" />
                <div className="min-h-[50vh] flex items-center justify-center px-6">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
                        <p className="text-white/60 mb-6">Artikel yang Anda cari tidak tersedia.</p>
                        <Link to="/blog" className="px-6 py-3 bg-highlight text-black rounded-full font-bold">Kembali ke Blog</Link>
                    </div>
                </div>
            </PageLayout>
        );
    }

    return (
        <PageLayout breadcrumbs={[{ label: 'Blog', href: '/blog' }, { label: post.title }]}>
            <SEOHead
                title={`${post.title} | NUXAR PERFUMERY Blog`}
                description={post.excerpt}
                keywords={`${post.category.toLowerCase()}, tips parfum, parfum eceran original, nuxar perfumery, ${post.title.toLowerCase()}`}
                canonical={`/blog/${post.slug}`}
                ogImage={post.image}
            />

            <article className="pt-8 pb-16 px-6 lg:px-16">
                <div className="max-w-3xl mx-auto">
                    {/* Back link */}
                    <Link to="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-8 text-sm">
                        <ArrowLeft size={16} /> Semua Artikel
                    </Link>

                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-xs text-highlight font-semibold uppercase tracking-widest bg-highlight/10 px-3 py-1 rounded-full">
                            {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                            <Clock size={12} /> {post.readTime}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-white/40">
                            <Calendar size={12} /> {post.date}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl lg:text-5xl font-bold tracking-tight mb-8 leading-tight">
                        {post.title}
                    </h1>

                    {/* Hero Image */}
                    <div className="aspect-video rounded-3xl overflow-hidden mb-10">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
                        <div className="text-white/70 leading-relaxed space-y-4">
                            {post.content.split('. ').map((sentence: string, i: number) => (
                                sentence.trim() && <p key={i}>{sentence.trim()}{!sentence.endsWith('.') ? '.' : ''}</p>
                            ))}
                        </div>
                    </div>

                    {/* Share */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                        <p className="text-white/50 text-sm">Bagikan artikel ini:</p>
                        <div className="flex gap-3">
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + post.excerpt + ' | NUXAR PERFUMERY')}`}
                                target="_blank" rel="noopener noreferrer"
                                className="p-2 rounded-full bg-white/10 hover:bg-highlight/20 transition-colors"
                            >
                                <Share2 size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Related / CTA */}
                    <div className="mt-12 p-8 rounded-3xl bg-highlight/5 border border-highlight/20">
                        <h2 className="text-xl font-bold mb-2">Mau Coba Parfum Terbaik?</h2>
                        <p className="text-white/60 mb-4 text-sm">Temukan aroma yang cocok dengan kepribadianmu di NUXAR PERFUMERY.</p>
                        <div className="flex gap-3">
                            <Link to="/produk" className="flex items-center gap-2 px-8 py-3 bg-highlight text-black rounded-full font-bold hover:opacity-90 transition-opacity">
                                Lihat Koleksi
                            </Link>
                            <a
                                href="https://wa.me/6281394882490?text=Halo NUXAR, saya mau konsultasi parfum setelah baca artikel"
                                target="_blank" rel="noopener noreferrer"
                                className="px-5 py-2.5 border border-white/30 text-white rounded-full font-bold text-sm hover:border-white transition-colors"
                            >
                                WhatsApp Kami
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </PageLayout>
    );
}
