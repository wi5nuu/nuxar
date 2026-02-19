import { useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { type PerfumeItem } from '@/data/perfumes';
import {
    Wind,
    Zap,
    Clock,
    Target,
    Sparkles,
    User,
    ShoppingBag,
    Calendar,
    CloudSun,
    ShieldCheck,
    CheckCircle2
} from 'lucide-react';
import { contactConfig } from '@/config';

interface PerfumeDetailModalProps {
    perfume: PerfumeItem | null;
    isOpen: boolean;
    onClose: () => void;
}

export function PerfumeDetailModal({ perfume, isOpen, onClose }: PerfumeDetailModalProps) {
    useEffect(() => {
        if (isOpen && perfume && (window as any).ttq) {
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
    }, [isOpen, perfume]);

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
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white border-none rounded-3xl shadow-2xl h-[90vh] md:h-auto md:max-h-[85vh]">
                <div className="flex flex-col md:flex-row h-full">

                    {/* Left: Product Image & Basic Info */}
                    <div className="w-full md:w-2/5 relative bg-gray-100 min-h-[300px] md:min-h-full">
                        <img
                            src={`/product-${(perfume.order % 8) + 1}.jpg`}
                            alt={perfume.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute bottom-6 left-6 right-6 text-white text-shadow">
                            <span className="inline-block px-3 py-1 rounded-full bg-highlight/90 text-black text-[10px] font-bold uppercase tracking-wider mb-2">
                                Premium Collection
                            </span>
                            <h2 className="text-3xl font-black tracking-tight leading-tight">{perfume.name}</h2>
                            <p className="text-white/80 text-xs italic mt-1 font-medium">{perfume.fullName}</p>
                        </div>
                    </div>

                    {/* Right: Detailed Data */}
                    <div className="w-full md:w-3/5 overflow-y-auto p-6 md:p-8 bg-white">
                        <DialogHeader className="mb-6 flex flex-row items-center justify-between">
                            <div>
                                <DialogTitle className="text-xs font-black uppercase tracking-[0.2em] text-black/30 mb-1">Detailed Aroma Profile</DialogTitle>
                                <div className="flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full ${perfume.category === 'cowok' ? 'bg-blue-500' : 'bg-pink-500'}`} />
                                    <span className="text-[10px] font-bold uppercase text-black/60">{perfume.category === 'cowok' ? 'Men' : 'Women'} · {perfume.additional.concentration}</span>
                                </div>
                            </div>
                        </DialogHeader>

                        {/* Grid Stats */}
                        <div className="space-y-8">

                            {/* Main Character Section */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Sparkles className="h-4 w-4 text-highlight" />
                                    <h3 className="text-sm font-bold uppercase tracking-wider">Aroma Character</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded-2xl border border-black/5">
                                        <p className="text-[9px] font-bold text-black/40 uppercase mb-1">Impression</p>
                                        <p className="text-xs font-bold leading-tight">{perfume.character.mainImpression}</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-2xl border border-black/5">
                                        <p className="text-[9px] font-bold text-black/40 uppercase mb-1">Family</p>
                                        <p className="text-xs font-bold leading-tight">{perfume.character.family}</p>
                                    </div>
                                </div>
                            </section>

                            {/* Fragrance Map (Notes) */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Wind className="h-4 w-4 text-highlight" />
                                    <h3 className="text-sm font-bold uppercase tracking-wider">Fragrance Map</h3>
                                </div>
                                <div className="space-y-3">
                                    {['top', 'middle', 'base'].map((level) => (
                                        <div key={level} className="flex gap-3">
                                            <div className="w-16 shrink-0 text-[9px] font-black uppercase text-black/30 pt-1 leading-none">
                                                {level} Notes
                                            </div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {perfume.notes[level as keyof typeof perfume.notes].map((note, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 bg-black/[0.03] border border-black/[0.05] rounded-md text-[10px] font-medium text-black/70">
                                                        {note}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Performance Metrics */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Zap className="h-4 w-4 text-highlight" />
                                    <h3 className="text-sm font-bold uppercase tracking-wider">Performance Radar</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-[10px] font-bold uppercase text-black/40">
                                            <span>Longevity</span>
                                            <span className="text-black">{perfume.performance.longevity}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-black rounded-full transition-all duration-1000"
                                                style={{ width: `${(parseInt(perfume.performance.longevity) / 10) * 100}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-[10px] font-bold uppercase text-black/40">
                                            <span>Intensity</span>
                                            <span className="text-black">{perfume.character.intensity}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-highlight rounded-full transition-all duration-1000"
                                                style={{ width: `${perfume.character.intensity === 'Very Strong' ? 100 : perfume.character.intensity === 'Strong' ? 75 : 50}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-[10px] font-bold uppercase text-black/40">
                                            <span>Sillage</span>
                                            <span className="text-black">{perfume.performance.sillage}</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-black rounded-full transition-all duration-1000"
                                                style={{ width: `${perfume.performance.sillage === 'Heavy' ? 90 : perfume.performance.sillage === 'Moderate' ? 60 : 30}%` }}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <div className="flex justify-between items-center text-[10px] font-bold uppercase text-black/40">
                                            <span>Sweetness</span>
                                            <span className="text-black">{perfume.character.sweetness}/5</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden flex gap-1 bg-transparent">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <div key={s} className={`h-full flex-1 rounded-full ${s <= perfume.character.sweetness ? 'bg-black' : 'bg-gray-100'}`} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Best For Tags */}
                            <section>
                                <div className="flex items-center gap-2 mb-4">
                                    <Target className="h-4 w-4 text-highlight" />
                                    <h3 className="text-sm font-bold uppercase tracking-wider">Usage & Context</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <div className="px-3 py-1.5 bg-black text-white rounded-xl text-[10px] font-bold uppercase tracking-tight flex items-center gap-2">
                                        <Calendar className="h-3 w-3" />
                                        {perfume.bestFor.occasion}
                                    </div>
                                    <div className="px-3 py-1.5 bg-gray-100 text-black/70 rounded-xl text-[10px] font-bold uppercase tracking-tight flex items-center gap-2 border border-black/5">
                                        <Clock className="h-3 w-3" />
                                        {perfume.bestFor.time}
                                    </div>
                                    <div className="px-3 py-1.5 bg-gray-100 text-black/70 rounded-xl text-[10px] font-bold uppercase tracking-tight flex items-center gap-2 border border-black/5">
                                        <CloudSun className="h-3 w-3" />
                                        {perfume.bestFor.weather}
                                    </div>
                                    <div className="px-3 py-1.5 bg-highlight text-black rounded-xl text-[10px] font-bold uppercase tracking-tight flex items-center gap-2">
                                        <User className="h-3 w-3" />
                                        {perfume.bestFor.ageRange}
                                    </div>
                                </div>
                            </section>

                            {/* Action */}
                            <div className="pt-4 flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleOrder}
                                    className="flex-1 h-14 bg-black text-white hover:bg-black/90 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3 active:scale-[0.98] shadow-xl shadow-black/20"
                                >
                                    <ShoppingBag className="h-4 w-4 text-highlight" />
                                    Purchase Now · Rp65k
                                </button>
                                <button
                                    onClick={onClose}
                                    className="px-8 h-14 bg-gray-50 text-black/40 hover:text-black hover:bg-gray-100 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all"
                                >
                                    Close
                                </button>
                            </div>

                            {/* Trust Badge */}
                            <div className="flex items-center justify-center gap-4 py-4 border-t border-black/5 grayscale opacity-30 mt-4">
                                <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-tighter">
                                    <ShieldCheck className="h-3 w-3" /> Authentic Guarantee
                                </div>
                                <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-tighter">
                                    <CheckCircle2 className="h-3 w-3" /> Hand-Crafted Aroma
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
