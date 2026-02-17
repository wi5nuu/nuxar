import { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  perfumesCowok,
  perfumesCewek,
  perfumeCatalogConfig,
  type PerfumeItem,
} from '@/data/perfumes';
import { fetchPerfumesFromSupabase, SUPABASE_ENABLED } from '@/lib/supabase';
import { useIsMobile } from '@/hooks/use-mobile';
import { contactConfig } from '@/config';

gsap.registerPlugin(ScrollTrigger);

const ITEMS_PER_PAGE_MOBILE = 10;

function filterPerfumes(items: PerfumeItem[], query: string): PerfumeItem[] {
  if (!query.trim()) return items;
  const q = query.trim().toLowerCase();
  return items.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand?.toLowerCase().includes(q) ||
      p.fullName.toLowerCase().includes(q)
  );
}

function usePaginatedItems(
  items: PerfumeItem[],
  isMobile: boolean,
  page: number
) {
  return useMemo(() => {
    if (!isMobile) return items;
    const start = (page - 1) * ITEMS_PER_PAGE_MOBILE;
    return items.slice(start, start + ITEMS_PER_PAGE_MOBILE);
  }, [items, isMobile, page]);
}

interface PerfumeCardProps {
  item: PerfumeItem;
  isExpanded: boolean;
  onToggle: () => void;
}

function PerfumeCard({ item, isExpanded, onToggle }: PerfumeCardProps) {
  return (
    <div
      onClick={onToggle}
      className={`group cursor-pointer flex flex-col py-5 px-4 rounded-2xl transition-all duration-500 border-b border-black/[0.03] hover:bg-black/[0.02] ${isExpanded ? 'bg-white shadow-lg border-highlight/10 mb-4' : 'hover:border-highlight/20'
        }`}
    >
      <div className="flex items-center gap-6">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center text-[11px] font-bold tracking-tighter text-black/20 transition-colors group-hover:text-highlight/40">
          {String(item.order).padStart(2, '0')}.
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-[15px] font-semibold text-black/80 transition-colors group-hover:text-black tracking-tight">
              {item.name}
            </h3>
            {item.is_official && (
              <Sparkles className="h-3 w-3 text-highlight/40" />
            )}
          </div>
          <p className="text-[12px] text-black/40 group-hover:text-black/60 transition-colors">
            {item.brand} — {item.category}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
            <ChevronRight className={`w-4 h-4 text-black/20 ${isExpanded ? 'text-highlight' : ''}`} />
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="mt-6 pl-14 pr-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-500">
          <div className="h-px bg-black/[0.05] w-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 block mb-1">Full Name</span>
                <p className="text-sm text-black/70 font-medium">{item.fullName}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 block mb-1">Character</span>
                <p className="text-sm text-black/70">{item.karakter || '-'}</p>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 block mb-1">Best Use</span>
                <p className="text-sm text-black/70">{item.penggunaan || '-'}</p>
              </div>
            </div>

            <div className="space-y-3">
              {item.notes && (
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 block mb-1">Fragrance Notes</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.notes.top?.slice(0, 3).map((n, i) => (
                      <span key={i} className="px-2 py-0.5 bg-highlight/5 text-highlight text-[10px] rounded-md font-medium border border-highlight/10">
                        {n}
                      </span>
                    ))}
                    <span className="text-[10px] text-black/20 self-center">...</span>
                  </div>
                </div>
              )}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 block mb-1">Description</span>
                <p className="text-[13px] text-black/50 leading-relaxed italic">
                  "{item.description || 'Aroma khas yang memikat dari koleksi terbaik NUXAR.'}"
                </p>
              </div>
            </div>
          </div>

          {item.note && (
            <div className="p-3 bg-red-50/50 border border-highlight/5 rounded-xl">
              <p className="text-[11px] text-highlight/60 font-medium leading-relaxed">
                {item.note}
              </p>
            </div>
          )}

          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 text-[11px] rounded-full px-4 border-black/10 hover:bg-black hover:text-white transition-all"
              onClick={(e) => {
                e.stopPropagation();
                window.open(`https://wa.me/${contactConfig.whatsappNumber}?text=Halo NUXAR, saya tertarik dengan aroma ${item.name}`, '_blank');
              }}
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export function KatalogAroma() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [activeTab, setActiveTab] = useState('cowok');
  const [cowok, setCowok] = useState<PerfumeItem[]>(perfumesCowok);
  const [cewek, setCewek] = useState<PerfumeItem[]>(perfumesCewek);
  const [loading, setLoading] = useState(SUPABASE_ENABLED);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageCowok, setPageCowok] = useState(1);
  const [pageCewek, setPageCewek] = useState(1);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (!SUPABASE_ENABLED) return;
    let cancelled = false;
    setLoading(true);
    setError(false);
    fetchPerfumesFromSupabase()
      .then((data) => {
        if (cancelled || !data) return;
        setCowok(data.cowok);
        setCewek(data.cewek);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Reset page when search or tab changes
  useEffect(() => {
    setPageCowok(1);
    setPageCewek(1);
  }, [searchQuery, activeTab]);

  const filteredCowok = useMemo(
    () => filterPerfumes(cowok, searchQuery),
    [cowok, searchQuery]
  );
  const filteredCewek = useMemo(
    () => filterPerfumes(cewek, searchQuery),
    [cewek, searchQuery]
  );

  const paginatedCowok = usePaginatedItems(filteredCowok, isMobile, pageCowok);
  const paginatedCewek = usePaginatedItems(filteredCewek, isMobile, pageCewek);

  const totalPagesCowok = isMobile
    ? Math.max(1, Math.ceil(filteredCowok.length / ITEMS_PER_PAGE_MOBILE))
    : 1;
  const totalPagesCewek = isMobile
    ? Math.max(1, Math.ceil(filteredCewek.length / ITEMS_PER_PAGE_MOBILE))
    : 1;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        if (titleRef.current) {
          const chars = titleRef.current.querySelectorAll('.char');
          tl.fromTo(
            chars,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              stagger: 0.03,
              ease: 'power2.out',
            }
          );
        }
        tl.fromTo(
          subtitleRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
          '-=0.3'
        );
      },
      once: true,
    });

    return () => trigger.kill();
  }, []);

  const titleChars = perfumeCatalogConfig.title.split('');

  return (
    <section
      ref={sectionRef}
      id="katalog"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-[#fafafa] overflow-hidden"
    >
      <div className="container-full relative z-10 w-full">
        <header className="mb-10 lg:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/[0.03] border border-black/[0.05] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-black/40">
            Trend 2026 · Best Seller
          </div>
          <h2
            ref={titleRef}
            className="text-h2 text-black font-semibold mb-3 tracking-tight"
          >
            {titleChars.map((char, i) => (
              <span key={i} className="char inline-block">
                {char}
              </span>
            ))}
          </h2>
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base text-black/55 max-w-2xl"
          >
            {perfumeCatalogConfig.subtitle}
          </p>
        </header>

        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <TabsList className="h-11 w-full sm:w-auto grid grid-cols-2 rounded-xl border border-black/10 bg-white p-1 shadow-sm">
              <TabsTrigger
                value="cowok"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-md px-5 text-sm font-medium transition-all"
              >
                Cowok ({cowok.length})
              </TabsTrigger>
              <TabsTrigger
                value="cewek"
                className="rounded-lg data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow-md px-5 text-sm font-medium transition-all"
              >
                Cewek ({cewek.length})
              </TabsTrigger>
            </TabsList>

            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-black/40" />
              <Input
                type="search"
                placeholder="Cari aroma..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-11 rounded-xl border-black/10 bg-white pl-10 text-black shadow-sm placeholder:text-black/40 focus-visible:ring-2 focus-visible:ring-highlight/20"
                aria-label="Cari parfum"
              />
            </div>
          </div>

          {loading && (
            <p className="py-12 text-center text-black/50">Memuat katalog...</p>
          )}
          {error && (
            <p className="rounded-lg bg-red-50 py-4 text-center text-sm text-red-600">
              Gagal memuat dari database. Menampilkan data lokal.
            </p>
          )}

          <TabsContent value="cowok" className="mt-0 outline-none">
            {filteredCowok.length === 0 ? (
              <p className="py-16 text-center text-black/50">
                Tidak ada aroma yang cocok dengan pencarian.
              </p>
            ) : (
              <>
                <ul className="grid gap-x-12 sm:grid-cols-2">
                  {paginatedCowok.map((item) => (
                    <li key={item.id}>
                      <PerfumeCard
                        item={item}
                        isExpanded={expandedId === item.id}
                        onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      />
                    </li>
                  ))}
                </ul>
                {isMobile && totalPagesCowok > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPageCowok((p) => Math.max(1, p - 1))}
                      disabled={pageCowok <= 1}
                      className="rounded-lg border-black/15 bg-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Sebelumnya
                    </Button>
                    <span className="px-4 text-sm text-black/60">
                      Halaman {pageCowok} / {totalPagesCowok}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setPageCowok((p) => Math.min(totalPagesCowok, p + 1))
                      }
                      disabled={pageCowok >= totalPagesCowok}
                      className="rounded-lg border-black/15 bg-white"
                    >
                      Selanjutnya
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>

          <TabsContent value="cewek" className="mt-0 outline-none">
            {filteredCewek.length === 0 ? (
              <p className="py-16 text-center text-black/50">
                Tidak ada aroma yang cocok dengan pencarian.
              </p>
            ) : (
              <>
                <ul className="grid gap-x-12 sm:grid-cols-2">
                  {paginatedCewek.map((item) => (
                    <li key={item.id}>
                      <PerfumeCard
                        item={item}
                        isExpanded={expandedId === item.id}
                        onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
                      />
                    </li>
                  ))}
                </ul>
                {isMobile && totalPagesCewek > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPageCewek((p) => Math.max(1, p - 1))}
                      disabled={pageCewek <= 1}
                      className="rounded-lg border-black/15 bg-white"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Sebelumnya
                    </Button>
                    <span className="px-4 text-sm text-black/60">
                      Halaman {pageCewek} / {totalPagesCewek}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setPageCewek((p) => Math.min(totalPagesCewek, p + 1))
                      }
                      disabled={pageCewek >= totalPagesCewek}
                      className="rounded-lg border-black/15 bg-white"
                    >
                      Selanjutnya
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-highlight/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-black/[0.03] blur-3xl" />
    </section>
  );
}
