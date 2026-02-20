import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  perfumesCowok as localCowok,
  perfumesCewek as localCewek,
  type PerfumeItem,
} from '@/data/perfumes';
import { PerfumeSideDetail } from '@/components/PerfumeSideDetail';
import { fetchPerfumesFromSupabase, SUPABASE_ENABLED } from '@/lib/supabase';

function PerfumeCard({ item, index, onOpenDetail, isActive }: { item: PerfumeItem; index: number; onOpenDetail: (i: PerfumeItem) => void, isActive: boolean }) {
  const imageIndex = (index % 8) + 1;

  return (
    <div
      onClick={() => onOpenDetail(item)}
      className={`group cursor-pointer relative overflow-hidden rounded-xl transition-all duration-500 border ${isActive ? 'border-highlight ring-2 ring-highlight/20 shadow-2xl' : 'border-black/5 hover:border-highlight/30'
        } bg-white hover:shadow-xl hover:-translate-y-1`}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img
          src={item.image || `/product-${imageIndex}.jpg`}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        <div className="absolute top-2 left-2">
          <span className="px-1.5 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/10 text-[7px] font-bold text-white uppercase tracking-tighter">
            {item.category === 'cowok' ? 'Men' : 'Women'}
          </span>
        </div>

        <div className="absolute bottom-2 left-2 right-2 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-[7px] font-black text-highlight uppercase tracking-[0.1em] mb-0.5">Premium</p>
          <h3 className="text-[10px] md:text-xs font-bold text-white leading-tight line-clamp-1">{item.name}</h3>
          <p className="text-[8px] text-white/60 line-clamp-1 italic">{item.character.mainImpression}</p>
        </div>
      </div>
    </div>
  );
}

export function KatalogAroma() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [activeTab, setActiveTab] = useState('cowok');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPerfume, setSelectedPerfume] = useState<PerfumeItem | null>(null);
  const [mobilePage, setMobilePage] = useState(1);
  const [perfumes, setPerfumes] = useState({ cowok: localCowok, cewek: localCewek });
  const [loading, setLoading] = useState(SUPABASE_ENABLED);
  const itemsPerMobilePage = 8;

  const filteredCowok = useMemo(() =>
    perfumes.cowok.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.fullName.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, perfumes.cowok]
  );

  const filteredCewek = useMemo(() =>
    perfumes.cewek.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.fullName.toLowerCase().includes(searchQuery.toLowerCase())),
    [searchQuery, perfumes.cewek]
  );

  useEffect(() => {
    if (SUPABASE_ENABLED) {
      fetchPerfumesFromSupabase().then(data => {
        if (data) {
          setPerfumes(data);
        }
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        if (titleRef.current) {
          const chars = titleRef.current.querySelectorAll('.char');
          tl.fromTo(chars, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.02, ease: 'power2.out' });
        }
        tl.fromTo(subtitleRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.2');
      },
      once: true,
    });
  }, []);

  const brandingTitle = "Premium Perfume Catalog";
  const titleChars = brandingTitle.split('');

  return (
    <section ref={sectionRef} id="katalog" className="relative py-12 sm:py-20 bg-[#fafafa] overflow-hidden">
      <div className="container-full relative z-10 w-full px-4 md:px-8">
        <Tabs value={activeTab} onValueChange={(val) => { setActiveTab(val); setMobilePage(1); }} className="w-full">
          {/* Header Branding & Controls */}
          <header className="mb-10 lg:mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
              <div className="max-w-2xl text-center md:text-left">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/[0.03] border border-black/[0.1] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-black/70">
                  Premium Collection · 2026
                </div>
                <h2 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl text-black font-black mb-4 tracking-tighter uppercase italic italic-shadow">
                  {titleChars.map((char, i) => (
                    <span key={i} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                  ))}
                </h2>
                <p ref={subtitleRef} className="text-sm md:text-base text-black/70 max-w-lg font-medium leading-relaxed">
                  Explore our archive of 60+ premium aromas with deep bio-data visualization.
                  Find the perfect match for your signature personality.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                <div className="relative w-full sm:w-64 lg:w-80">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-black/30" />
                  <Input
                    type="search"
                    placeholder="Search by scent..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-12 rounded-xl border-black/10 bg-white pl-12 text-xs text-black placeholder:text-black/50 shadow-sm focus-visible:ring-highlight/20"
                  />
                </div>

                <TabsList className="h-12 w-full sm:w-fit grid grid-cols-2 rounded-xl border border-black/10 bg-white p-1 shadow-sm">
                  <TabsTrigger value="cowok" className="rounded-lg px-6 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all data-[state=active]:bg-highlight data-[state=active]:text-black text-black/70 data-[state=active]:opacity-100">
                    Men ({perfumes.cowok.length})
                  </TabsTrigger>
                  <TabsTrigger value="cewek" className="rounded-lg px-6 py-1.5 text-[10px] font-black uppercase tracking-widest transition-all data-[state=active]:bg-highlight data-[state=active]:text-black text-black/70 data-[state=active]:opacity-100">
                    Women ({perfumes.cewek.length})
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-8 relative items-start">
            {/* Main Content Area */}
            <div className={`flex-1 transition-all duration-500 ease-in-out ${selectedPerfume ? 'lg:w-2/3' : 'w-full'}`}>
              <TabsContent value="cowok" className="mt-0 outline-none">
                {loading ? (
                  <div className="py-20 text-center text-black/20 italic">Membuka lembaran aroma maskulin...</div>
                ) : (
                  <div className={`grid gap-3 sm:gap-4 transition-all duration-500 ${selectedPerfume ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8'}`}>
                    {filteredCowok.slice(
                      typeof window !== 'undefined' && window.innerWidth < 640 ? (mobilePage - 1) * itemsPerMobilePage : 0,
                      typeof window !== 'undefined' && window.innerWidth < 640 ? mobilePage * itemsPerMobilePage : undefined
                    ).map((item, i) => (
                      <PerfumeCard
                        key={item.id}
                        item={item}
                        index={i}
                        onOpenDetail={setSelectedPerfume}
                        isActive={selectedPerfume?.id === item.id}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile Numeric Pagination */}
                {typeof window !== 'undefined' && window.innerWidth < 640 && filteredCowok.length > itemsPerMobilePage && (
                  <div className="flex flex-wrap justify-center gap-2 mt-8 sm:hidden">
                    {Array.from({ length: Math.ceil(filteredCowok.length / itemsPerMobilePage) }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setMobilePage(i + 1);
                          const el = document.getElementById('katalog');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${mobilePage === i + 1
                          ? 'bg-highlight text-black'
                          : 'bg-black/5 text-black/40 hover:bg-black/10'
                          }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="cewek" className="mt-0 outline-none">
                {loading ? (
                  <div className="py-20 text-center text-black/20 italic">Membuka koleksi aroma elegan...</div>
                ) : (
                  <div className={`grid gap-3 sm:gap-4 transition-all duration-500 ${selectedPerfume ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5' : 'grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-8'}`}>
                    {filteredCewek.slice(
                      typeof window !== 'undefined' && window.innerWidth < 640 ? (mobilePage - 1) * itemsPerMobilePage : 0,
                      typeof window !== 'undefined' && window.innerWidth < 640 ? mobilePage * itemsPerMobilePage : undefined
                    ).map((item, i) => (
                      <PerfumeCard
                        key={item.id}
                        item={item}
                        index={i}
                        onOpenDetail={setSelectedPerfume}
                        isActive={selectedPerfume?.id === item.id}
                      />
                    ))}
                  </div>
                )}

                {/* Mobile Numeric Pagination */}
                {typeof window !== 'undefined' && window.innerWidth < 640 && filteredCewek.length > itemsPerMobilePage && (
                  <div className="flex flex-wrap justify-center gap-2 mt-8 sm:hidden">
                    {Array.from({ length: Math.ceil(filteredCewek.length / itemsPerMobilePage) }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setMobilePage(i + 1);
                          const el = document.getElementById('katalog');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`w-10 h-10 rounded-xl text-[10px] font-black transition-all ${mobilePage === i + 1
                          ? 'bg-highlight text-black'
                          : 'bg-black/5 text-black/40 hover:bg-black/10'
                          }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
              </TabsContent>
            </div>

            {/* Side Panel Detail (Desktop) */}
            {selectedPerfume && (
              <div className="hidden lg:block w-[37.5%] sticky top-28 h-auto rounded-[32px] overflow-hidden border border-black/5 shadow-xl bg-white">
                <PerfumeSideDetail
                  perfume={selectedPerfume}
                  onClose={() => setSelectedPerfume(null)}
                />
              </div>
            )}
          </div>
        </Tabs>

        {/* Mobile Detailed Overlay (Slide up) */}
        {selectedPerfume && (
          <div className="lg:hidden fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="absolute bottom-32 left-4 right-4 h-auto max-h-[75vh] bg-white rounded-[32px] overflow-hidden shadow-2xl animate-in slide-in-from-bottom duration-500">
              <PerfumeSideDetail
                perfume={selectedPerfume}
                onClose={() => setSelectedPerfume(null)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Decorative Accents */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-highlight/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-black/[0.02] blur-[120px]" />
    </section>
  );
}

