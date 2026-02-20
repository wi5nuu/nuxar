import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Home, Search } from 'lucide-react';

export function NotFoundPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const messageRef = useRef<HTMLParagraphElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const circle1Ref = useRef<HTMLDivElement>(null);
    const circle2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Entry animations
        tl.fromTo(circle1Ref.current,
            { scale: 0, opacity: 0, x: -100 },
            { scale: 1, opacity: 0.1, x: 0, duration: 1.5, ease: 'power3.out' }
        );
        tl.fromTo(circle2Ref.current,
            { scale: 0, opacity: 0, x: 100 },
            { scale: 1, opacity: 0.05, x: 0, duration: 1.5, ease: 'power3.out' },
            '-=1.2'
        );

        tl.fromTo(titleRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.8'
        );

        tl.fromTo(messageRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.6'
        );

        tl.fromTo(buttonsRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
            '-=0.4'
        );

        // Floating animation for circles
        gsap.to(circle1Ref.current, {
            y: 30,
            x: 20,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

        gsap.to(circle2Ref.current, {
            y: -40,
            x: -30,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });

    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div ref={circle1Ref} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-highlight rounded-full blur-[120px] opacity-10" />
                <div ref={circle2Ref} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[100px] opacity-5" />
                <div className="noise-overlay opacity-30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl">

                <h1 ref={titleRef} className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter italic italic-shadow mb-4">
                    404
                </h1>

                <p ref={messageRef} className="text-xl md:text-2xl font-light text-white/60 mb-12 leading-relaxed">
                    Ups! Sepertinya aroma yang Anda cari telah <span className="text-white font-bold">menguap di udara</span>. Mari kembali ke peradaban.
                </p>

                <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl hover:bg-highlight hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <Home size={16} /> Back to Sanctuary
                    </Link>
                    <Link
                        to="/katalog"
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
                    >
                        <Search size={16} /> Explore Catalog
                    </Link>
                </div>
            </div>

            {/* Decorative bottom corner */}
            <div className="absolute bottom-12 left-12 hidden md:block">
                <p className="text-[10px] text-white/20 font-black uppercase tracking-[0.4em] rotate-180 [writing-mode:vertical-lr]">
                    NUXAR PERFUMERY · ARCHIVE 2026
                </p>
            </div>
        </div>
    );
}
