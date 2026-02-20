import { useEffect, useState } from 'react';
import { type PerfumeItem } from '@/data/perfumes';
import {
    Wind,
    Zap,
    Sparkles,
    ShoppingBag,
    CheckCircle2,
    X,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';
import { contactConfig } from '@/config';

interface PerfumeSideDetailProps {
    perfume: PerfumeItem | null;
    onClose: () => void;
}

export function PerfumeSideDetail({ perfume, onClose }: PerfumeSideDetailProps) {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        if (perfume && (window as any).ttq) {
            (window as any).ttq.track('ViewContent', {
                contents: [{
                    content_id: perfume.id,
                    content_name: perfume.name,
                    content_type: 'product',
                    content_category: perfume.category,
                }],
                value: 65000,
                currency: 'IDR'
            });
        }
    }, [perfume]);

    if (!perfume) return null;

    const handleOrder = () => {
        if ((window as any).ttq) {
            (window as any).ttq.track('Contact', {
                contents: [{
                    content_id: perfume.id,
                    content_name: perfume.name,
                }],
                value: 65000,
                currency: 'IDR'
            });
        }
        const message = `Halo NUXAR, saya ingin pesan Premium ${perfume.name} (${perfume.additional.concentration}). Mohon info stoknya.`;
        window.open(`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="h-full flex flex-col bg-white border-l border-black/5 animate-in slide-in-from-right duration-500 overflow-hidden shadow-2xl relative">
            {/* Header Image - Lengthened to h-48 */}
            <div className="relative h-48 shrink-0">
                <img
                    src={perfume.image || `/product-${(perfume.order % 8) + 1}.jpg`}
                    alt={perfume.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/40 transition-all z-20"
                >
                    <X size={14} />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="inline-block px-1.5 py-0.5 rounded-full bg-highlight text-black text-[7px] font-black uppercase tracking-wider mb-0.5">
                        2026 Collection
                    </span>
                    <h2 className="text-xl font-black tracking-tighter leading-none">{perfume.name}</h2>
                    <p className="text-white text-[8px] italic mt-0.5 font-medium line-clamp-1">{perfume.fullName}</p>
                </div>
            </div>

            {/* Content for Desktop (Legacy Vertical) / Mobile (Slide) */}
            <div className="flex-1 lg:p-4 p-4 space-y-4 overflow-hidden relative">

                {/* Mobile Slide Controls */}
                <div className="lg:hidden flex items-center justify-between mb-2">
                    <button
                        onClick={() => setActiveSlide(0)}
                        className={`flex-1 h-0.5 rounded-full transition-all ${activeSlide === 0 ? 'bg-black' : 'bg-black/10'}`}
                    />
                    <div className="mx-2 text-[8px] font-black uppercase text-black">Slide {activeSlide + 1}/2</div>
                    <button
                        onClick={() => setActiveSlide(1)}
                        className={`flex-1 h-0.5 rounded-full transition-all ${activeSlide === 1 ? 'bg-black' : 'bg-black/10'}`}
                    />
                </div>

                {/* Slide 1 Content */}
                <div className={`transition-all duration-500 lg:block lg:opacity-100 lg:static lg:translate-x-0 ${activeSlide === 0 ? 'block opacity-100 translate-x-0' : 'hidden opacity-0 -translate-x-full'}`}>
                    <div className="space-y-4">
                        {/* Aroma Character Section */}
                        <section>
                            <div className="flex items-center gap-1.5 mb-2">
                                <Sparkles className="h-2.5 w-2.5 text-highlight" />
                                <h3 className="text-[8px] font-black uppercase tracking-widest text-black">Aroma Character</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="p-2 bg-gray-50 rounded-lg border border-black/5">
                                    <p className="text-[7px] font-bold text-black uppercase mb-0.5">Impression</p>
                                    <p className="text-[10px] font-black leading-tight line-clamp-1 text-black">{perfume.character.mainImpression}</p>
                                </div>
                                <div className="p-2 bg-gray-50 rounded-lg border border-black/5">
                                    <p className="text-[7px] font-bold text-black uppercase mb-0.5">Family</p>
                                    <p className="text-[10px] font-black leading-tight line-clamp-1 text-black">{perfume.character.family}</p>
                                </div>
                            </div>
                        </section>

                        {/* Fragrance Map */}
                        <section>
                            <div className="flex items-center gap-1.5 mb-2">
                                <Wind className="h-2.5 w-2.5 text-highlight" />
                                <h3 className="text-[8px] font-black uppercase tracking-widest text-black">Fragrance Map</h3>
                            </div>
                            <div className="space-y-1.5">
                                {(['top', 'middle', 'base'] as const).map((level) => (
                                    <div key={level} className="flex gap-2 items-center">
                                        <div className="w-8 shrink-0 text-[7px] font-black uppercase text-black">
                                            {level}
                                        </div>
                                        <div className="flex flex-wrap gap-1">
                                            {perfume.notes[level].map((note, idx) => (
                                                <span key={idx} className="px-1.5 py-0.5 bg-black/[0.03] border border-black/[0.08] rounded text-[8px] font-black text-black">
                                                    {note}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Performance Mini (Slide 1) */}
                        <section className="lg:hidden">
                            <div className="flex items-center gap-1.5 mb-2">
                                <Zap className="h-2.5 w-2.5 text-highlight" />
                                <h3 className="text-[8px] font-black uppercase tracking-widest text-black">Performance</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-3 p-3 bg-black/5 rounded-xl">
                                <div>
                                    <p className="text-[7px] font-bold text-black uppercase">Longevity</p>
                                    <p className="text-[10px] font-black text-black">{perfume.performance.longevity}</p>
                                </div>
                                <div>
                                    <p className="text-[7px] font-bold text-black uppercase">Intensity</p>
                                    <p className="text-[10px] font-black text-black">{perfume.character.intensity}</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setActiveSlide(1)}
                                className="w-full mt-3 py-2 text-[9px] font-black uppercase text-black/40 flex items-center justify-center gap-1 hover:text-black transition-colors"
                            >
                                Next to Details <ChevronRight size={10} />
                            </button>
                        </section>
                    </div>
                </div>

                {/* Slide 2 Content */}
                <div className={`transition-all duration-500 lg:block lg:opacity-100 lg:static lg:translate-x-0 ${activeSlide === 1 ? 'block opacity-100 translate-x-0' : 'hidden lg:mb-0 opacity-0 translate-x-full lg:translate-x-0'}`}>
                    <div className="space-y-4">
                        {/* Performance Slider (Full) - For Desktop or Slide 2 */}
                        <section>
                            <div className="flex items-center gap-1.5 mb-2">
                                <Zap className="h-2.5 w-2.5 text-highlight" />
                                <h3 className="text-[8px] font-black uppercase tracking-widest text-black">Performance Score</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <div className="flex justify-between items-center text-[7px] font-bold uppercase text-black">
                                        <span>Longevity</span>
                                        <span className="text-black">{perfume.performance.longevity}</span>
                                    </div>
                                    <div className="h-0.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-black rounded-full"
                                            style={{ width: `${(parseInt(perfume.performance.longevity) / 10) * 100}%` }}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-center text-[7px] font-bold uppercase text-black">
                                        <span>Intensity</span>
                                        <span className="text-black">{perfume.character.intensity}</span>
                                    </div>
                                    <div className="h-0.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-highlight rounded-full"
                                            style={{ width: `${perfume.character.intensity === 'Very Strong' ? 100 : perfume.character.intensity === 'Strong' ? 75 : 50}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Story Section */}
                        <section>
                            <div className="flex items-center gap-1.5 mb-1.5">
                                <div className="h-1 w-1 rounded-full bg-highlight" />
                                <h3 className="text-[8px] font-black uppercase tracking-widest text-black">The Story</h3>
                            </div>
                            <p className="text-[10px] text-black leading-relaxed font-bold bg-highlight/[0.03] p-3 rounded-xl border border-highlight/10 italic">
                                "{perfume.description}"
                            </p>
                        </section>

                        {/* Action Button & Badges */}
                        <div className="space-y-3 pt-2">
                            <button
                                onClick={handleOrder}
                                className="w-full py-3.5 bg-black text-white rounded-xl flex items-center justify-center gap-2 hover:bg-highlight hover:text-black transition-all group shadow-lg shadow-black/10"
                            >
                                <ShoppingBag className="h-4 w-4" />
                                <p className="text-[10px] font-black uppercase tracking-wide">Order via WhatsApp</p>
                            </button>

                            <div className="flex items-center justify-center gap-3 text-[7px] text-black font-black uppercase tracking-widest">
                                <div className="flex items-center gap-0.5"><CheckCircle2 className="h-2.5 w-2.5 text-green-500" /> Original Quality</div>
                                <div className="flex items-center gap-0.5"><CheckCircle2 className="h-2.5 w-2.5 text-green-500" /> Fast Shipping</div>
                            </div>

                            <button
                                onClick={() => setActiveSlide(0)}
                                className="lg:hidden w-full py-1 text-[8px] font-black uppercase text-black/20 flex items-center justify-center gap-1"
                            >
                                <ChevronLeft size={10} /> Back to Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
