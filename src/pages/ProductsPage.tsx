import { ArrowUpRight } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { worksConfig, contactConfig } from '../config';


export function ProductsPage() {
    return (
        <PageLayout breadcrumbs={[{ label: 'Produk' }]}>
            <SEOHead
                title="Koleksi Parfum Unggulan | NUXAR PERFUMERY"
                description="Pilihan aroma terbaik untuk setiap momen dan kepribadianmu. Temukan signature scent harianmu di sini."
                keywords="koleksi parfum nuxar, parfum pilihan, best seller nuxar"
                canonical="/produk"
            />

            <section className="pt-2 pb-20 px-4 md:px-8 lg:px-16 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-4">
                        {worksConfig.title}
                    </h1>
                    <p className="text-white/60 text-base md:text-lg max-w-2xl mb-8">
                        {worksConfig.subtitle}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8">
                        {worksConfig.projects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-highlight/40 transition-all duration-500 cursor-pointer"
                                onClick={() => window.open(`https://wa.me/${contactConfig.whatsappNumber}?text=Halo NUXAR, saya tertarik dengan koleksi ${project.title}.`, '_blank')}
                            >
                                <div className="aspect-[4/5] overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                    <div className="absolute top-4 right-4 translate-x-2 -translate-y-2 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center text-black">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 md:p-6">
                                    <span className="text-[8px] md:text-[10px] text-highlight font-black uppercase tracking-widest">{project.category}</span>
                                    <h3 className="text-sm md:text-lg font-bold text-white mt-1 group-hover:text-highlight transition-colors">{project.title}</h3>
                                    <p className="text-[10px] md:text-xs text-white/40 mt-1 md:mt-2">Rp65.000 (Premium)</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Simple CTA */}
                    <div className="mt-16 text-center">
                        <p className="text-white/40 text-xs mb-6 uppercase tracking-[0.2em]">Masih belum menemukan yang cocok?</p>
                        <a
                            href="/katalog"
                            className="inline-flex items-center gap-2 text-sm md:text-xl font-bold text-white hover:text-highlight border-b-2 border-highlight pb-1 transition-all"
                        >
                            Lihat 60+ Aroma di Katalog Lengkap <ArrowUpRight size={20} className="md:w-6 md:h-6" />
                        </a>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
