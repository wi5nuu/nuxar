import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Users, Target, Heart, Award, Sparkles } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { aboutConfig } from '../config';

export function AboutPage() {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.from(headingRef.current, { y: 40, duration: 0.8, ease: 'power3.out' });
        gsap.from(statsRef.current, { y: 30, duration: 0.8, delay: 0.3, ease: 'power2.out' });
    }, []);

    const stats = [
        { icon: Award, label: 'Aroma Pilihan', value: '69+' },
        { icon: Users, label: 'Pelanggan Puas', value: '1000+' },
        { icon: Heart, label: 'Rating Kepuasan', value: '4.9/5' },
        { icon: Target, label: 'Tahun Berpengalaman', value: '3+' },
    ];

    return (
        <PageLayout breadcrumbs={[{ label: 'Tentang Kami' }]}>
            <SEOHead
                title="Tentang NUXAR PERFUMERY | Brand Parfum Eceran Premium di Bekasi"
                description="Berawal dari Jababeka - Bekasi, NUXAR PERFUMERY hadir sebagai brand parfum eceran premium nomor 1 di Indonesia. Kami menyediakan parfum original berkualitas tinggi dengan harga mahasiswa dan pekerja."
                keywords="profil nuxar perfumery, parfum eceran premium bekasi, brand parfum lokal bekasi, parfum original jababeka, sejarah nuxar perfumery"
                canonical="/tentang-kami"
            />

            {/* Hero */}
            <section className="pt-8 pb-16 px-6 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8 text-left relative z-20">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 border border-highlight/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                            <Sparkles className="h-3 w-3" /> Our Legacy · 2026
                        </div>
                        <h1 ref={headingRef} className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-4 text-white uppercase italic">
                            NUXAR <span className="text-highlight">Story</span>
                        </h1>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
                        <div>
                            <p className="text-white text-lg leading-relaxed mb-6">
                                {aboutConfig.description}
                            </p>
                            <p className="text-white leading-relaxed mb-8">
                                Kami percaya bahwa aroma mewah bukan hak eksklusif kalangan tertentu. Dengan konsep eceran premium,
                                NUXAR hadir untuk memastikan setiap orang dapat memiliki parfum signature-nya sendiri —
                                tanpa harus mengorbankan kualitas atau menguras dompet.
                            </p>
                            <div className="flex gap-4">
                                <Link to="/katalog" className="px-6 py-3 bg-highlight text-black rounded-full font-bold hover:opacity-90 transition-opacity">
                                    Lihat Koleksi
                                </Link>
                                <Link
                                    to="/kontak"
                                    className="px-6 py-3 border border-white/30 rounded-full text-white font-medium hover:border-white transition-colors"
                                >
                                    Hubungi Kami
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                                <img src={aboutConfig.image1} alt={aboutConfig.image1Alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                                <img src={aboutConfig.image2} alt={aboutConfig.image2Alt} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 px-6 lg:px-16 bg-white/5 border-y border-white/10 relative z-20">
                <div className="max-w-6xl mx-auto">
                    <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <div className="w-12 h-12 rounded-2xl bg-highlight/15 flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="text-highlight" size={24} />
                                </div>
                                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-sm text-white/80">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="py-16 px-6 lg:px-16 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center text-white">Tim Kami</h2>
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-highlight/30">
                            <img src={aboutConfig.authorImage} alt={aboutConfig.authorName} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1 text-white">{aboutConfig.authorName}</h3>
                            <p className="text-white/80 mb-4">{aboutConfig.authorBio}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 px-6 lg:px-16 bg-white/5 border-t border-white/10 relative z-20">
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Visi', text: 'Menjadi brand parfum eceran nomor 1 di Indonesia yang membuat aroma mewah bisa dijangkau semua kalangan.' },
                        { title: 'Misi', text: 'Menyediakan parfum original berkualitas tinggi dalam kemasan eceran premium dengan harga yang terjangkau.' },
                        { title: 'Nilai', text: 'Kualitas tanpa kompromi, transparansi, dan kepuasan pelanggan adalah pondasi setiap keputusan kami.' },
                    ].map((item) => (
                        <div key={item.title} className="p-6 rounded-2xl bg-white/10 border border-white/20">
                            <div className="w-8 h-1 bg-highlight rounded mb-4" />
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-white/90 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
}
