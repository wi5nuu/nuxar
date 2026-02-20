import { useEffect, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Sparkles } from 'lucide-react';
import { PageLayout } from '../components/PageLayout';
import { SEOHead } from '../components/SEOHead';
import { perfumesCowok, perfumesCewek, type PerfumeItem } from '../data/perfumes';
import { PerfumeSideDetail } from '../components/PerfumeSideDetail';

gsap.registerPlugin(ScrollTrigger);

function PerfumeGridCard({ item, index, onOpenDetail, isActive }: { item: PerfumeItem; index: number; onOpenDetail: (i: PerfumeItem) => void, isActive: boolean }) {
    const imageIndex = (index % 8) + 1;

    return (
        <div
            onClick={() => onOpenDetail(item)}
            className={`product-card group cursor-pointer relative overflow-hidden rounded-xl transition-all duration-500 border ${isActive ? 'border-highlight ring-2 ring-highlight/20 shadow-2xl' : 'border-white/10 bg-white/5 hover:border-highlight/30'
                } bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1`}
        >
            <div className="aspect-[3/4] overflow-hidden relative">
                <img
                    src={`/product-${imageIndex}.jpg`}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-2 left-2">
                    <span className="px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[7px] font-bold text-white uppercase tracking-tighter">
                        {item.category === 'cowok' ? 'Men' : 'Women'}
                    </span>
                </div>

                <div className="absolute bottom-2 left-2 right-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-500 text-left">
                    <p className="text-[7px] font-black text-highlight uppercase tracking-[0.1em] mb-0.5">Premium Scents</p>
                    <h3 className="text-[10px] md:text-xs font-bold text-white leading-tight line-clamp-1">{item.name}</h3>
                    <p className="text-[8px] text-white/80 line-clamp-1 italic">{item.character.mainImpression}</p>
                </div>
            </div>
        </div>
    );
}

export function KatalogPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [genderFilter, setGenderFilter] = useState<'Semua' | 'cowok' | 'cewek'>('Semua');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPerfume, setSelectedPerfume] = useState<PerfumeItem | null>(null);
    const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 40;

    const allProducts = useMemo(() => [...perfumesCowok, ...perfumesCewek], []);

    const filteredProducts = useMemo(() => allProducts.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.fullName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGender = genderFilter === 'Semua' || p.category === genderFilter;
        return matchesSearch && matchesGender;
    }), [allProducts, searchQuery, genderFilter]);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, genderFilter]);

    useEffect(() => {
        const cards = document.querySelectorAll('.product-card');
        if (cards.length > 0) {
            gsap.fromTo(cards,
                { y: 20, opacity: 0 },
                {
                    y: 0, opacity: 1, duration: 0.4, stagger: 0.02, ease: 'power2.out',
                    scrollTrigger: { trigger: cards[0], start: 'top 95%', once: true }
                }
            );
        }
    }, [currentItems]);

    return (
        <PageLayout breadcrumbs={[{ label: 'Produk', href: '/produk' }, { label: 'Katalog' }]}>
            <SEOHead
                title="Premium Aromas Catalog | NUXAR PERFUMERY"
                description="Explore our massive collection of 60+ premium aromas. Master-Detail design for deeper exploration."
                keywords="nuxar catalog, perfume list, premium scents, fragrance inventory"
                canonical="/katalog"
            />

            <section className="pt-6 pb-20 px-4 md:px-8 bg-black min-h-screen">
                <div className="max-w-[1500px] mx-auto">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="text-left">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-highlight/10 border border-highlight/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-highlight">
                                <Sparkles className="h-3 w-3" /> Premium Collection · 2026
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white uppercase italic">
                                Scent <span className="text-highlight">Inventory</span>
                            </h1>
                            <p className="text-white/80 text-xs md:text-sm max-w-lg leading-relaxed">
                                Our comprehensive library of <span className="text-white font-bold">{allProducts.length}+ distinctive personalities</span>.
                                Select an aroma to reveal its deep bio-data in the side panel.
                            </p>
                        </div>

                        {/* Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                            <div className="relative w-full sm:w-64">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 h-3.5 w-3.5" />
                                <input
                                    type="text"
                                    placeholder="Search by scent..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-[10px] text-white placeholder:text-white/20 focus:border-highlight/50 transition-all outline-none"
                                />
                            </div>
                            <div className="flex gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
                                {(['Semua', 'cowok', 'cewek'] as const).map((filter) => (
                                    <button
                                        key={filter}
                                        onClick={() => setGenderFilter(filter)}
                                        className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all border ${genderFilter === filter
                                            ? 'bg-highlight border-highlight text-black shadow-lg shadow-highlight/20'
                                            : 'bg-white/5 border-white/10 text-white/40 hover:border-white/20'
                                            }`}
                                    >
                                        {filter === 'Semua' ? 'All' : filter === 'cowok' ? 'Men' : 'Women'}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 relative items-start">

                        {/* Grid Area */}
                        <div className={`transition-all duration-500 ease-in-out ${selectedPerfume ? 'lg:w-[62.5%]' : 'w-full'}`}>
                            {currentItems.length === 0 ? (
                                <div className="py-32 text-center text-white/20 italic text-sm">No results found...</div>
                            ) : (
                                <div className={`grid gap-3 sm:gap-4 transition-all duration-500 ${selectedPerfume ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8'}`}>
                                    {currentItems.map((product, i) => (
                                        <PerfumeGridCard
                                            key={product.id}
                                            item={product}
                                            index={i + indexOfFirstItem}
                                            onOpenDetail={setSelectedPerfume}
                                            isActive={selectedPerfume?.id === product.id}
                                        />
                                    ))}
                                </div>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="mt-16 flex items-center justify-center gap-2">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => {
                                                setCurrentPage(i + 1);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${currentPage === i + 1
                                                ? 'bg-highlight text-black'
                                                : 'bg-white/5 text-white/30 hover:bg-white/10'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Desktop Side Panel */}
                        {selectedPerfume && (
                            <div className="hidden lg:block w-[37.5%] sticky top-28 h-auto rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-white">
                                <PerfumeSideDetail
                                    perfume={selectedPerfume}
                                    onClose={() => setSelectedPerfume(null)}
                                />
                            </div>
                        )}

                        {/* Mobile Overlay */}
                        {selectedPerfume && (
                            <div className="lg:hidden fixed inset-0 z-[100] bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
                                <div className="absolute bottom-32 left-4 right-4 h-auto max-h-[75vh] bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-500">
                                    <PerfumeSideDetail
                                        perfume={selectedPerfume}
                                        onClose={() => setSelectedPerfume(null)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </PageLayout>
    );
}
