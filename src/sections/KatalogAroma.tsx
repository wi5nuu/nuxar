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

gsap.registerPlugin(ScrollTrigger);

const ITEMS_PER_PAGE_MOBILE = 10;

function filterPerfumes(items: PerfumeItem[], query: string): PerfumeItem[] {
  if (!query.trim()) return items;
  const q = query.trim().toLowerCase();
  return items.filter(
    (p) =>
      p.name.toLowerCase().includes(q) || p.original.toLowerCase().includes(q)
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

function PerfumeCard({ item }: { item: PerfumeItem }) {
  return (
    <div
      className="group flex items-start gap-4 rounded-xl border border-black/8 bg-gradient-to-br from-white to-black/[0.02] p-4 transition-all duration-300 hover:border-black/15 hover:shadow-lg hover:shadow-black/5 md:p-5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black/5 text-sm font-semibold text-black/60 transition-colors group-hover:bg-highlight/10 group-hover:text-highlight">
        {item.order}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-black transition-colors group-hover:text-highlight">
          {item.name}
        </h3>
        <p className="mt-0.5 text-sm text-black/55">{item.original}</p>
      </div>
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
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-[#fafafa] overflow-hidden"
    >
      <div className="w-full max-w-[min(100%,1920px)] mx-auto">
        <header className="mb-10 lg:mb-14">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight">
            <Sparkles className="h-4 w-4" />
            Trend 2026 · Best Seller
          </div>
          <h2
            ref={titleRef}
            className="text-xl sm:text-2xl md:text-h1 lg:text-display-xl text-black font-semibold mb-3 tracking-tight"
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
              className="h-11 rounded-xl border-black/10 bg-white pl-10 shadow-sm placeholder:text-black/40 focus-visible:ring-2 focus-visible:ring-highlight/20"
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
                <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  {paginatedCowok.map((item) => (
                    <li key={item.id}>
                      <PerfumeCard item={item} />
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
                <ul className="grid gap-4 sm:grid-cols-2 lg:gap-5">
                  {paginatedCewek.map((item) => (
                    <li key={item.id}>
                      <PerfumeCard item={item} />
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
