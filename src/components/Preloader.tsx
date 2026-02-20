import { useEffect, useState, useRef } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(true);
    const progressRef = useRef(0);
    const animFrameRef = useRef<number | null>(null);
    const completedRef = useRef(false);

    useEffect(() => {
        const assets = [
            '/logo-nuxar.webp',
            '/hero-main.webp',
            '/6botol.webp',
            '/5botol.webp',
            '/product-1.webp',
            '/product-2.webp',
            '/product-3.webp',
            '/product-4.webp'
        ];

        let loadedCount = 0;
        const totalAssets = assets.length;
        const startTime = performance.now();
        const minDuration = 800; // Minimum duration reduced for better performance

        const updateProgress = () => {
            const timeElapsed = performance.now() - startTime;
            const timeProgress = Math.min((timeElapsed / minDuration) * 100, 100);
            const loadProgress = (loadedCount / totalAssets) * 100;

            // Real progress is the minimum of time-based (for smoothness) and load-based
            const currentProgress = Math.min(timeProgress, loadProgress);

            if (currentProgress > progressRef.current) {
                progressRef.current = currentProgress;
                setProgress(Math.floor(currentProgress));
            }

            if (currentProgress < 100) {
                animFrameRef.current = requestAnimationFrame(updateProgress);
            } else {
                finalize();
            }
        };

        const finalize = () => {
            if (completedRef.current) return;
            completedRef.current = true;

            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

            setProgress(100);

            // Fade out
            setTimeout(() => {
                setVisible(false);
                setTimeout(onComplete, 600);
            }, 600);
        };

        // Start preloading
        assets.forEach(src => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
            };
            img.onerror = () => {
                loadedCount++; // Count as "processed" even if error to avoid getting stuck
            };
            img.src = src;
        });

        animFrameRef.current = requestAnimationFrame(updateProgress);

        // Safety fallback
        window.addEventListener('load', () => {
            // If window load fires, we can speed up or jump to 100 if images are also done
            // But usually the Image objects are safer for specific assets
        });

        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
        };
    }, [onComplete]);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                backgroundColor: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.6s ease, visibility 0.6s ease',
                opacity: visible ? 1 : 0,
                visibility: visible ? 'visible' : 'hidden',
                pointerEvents: visible ? 'all' : 'none',
            }}
        >
            {/* Background subtle gradient */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at center, #0d0d0d 0%, #000 70%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Logo */}
            <div
                style={{
                    position: 'relative',
                    marginBottom: '3rem',
                    animation: 'preloaderFadeIn 0.8s ease forwards',
                }}
            >
                <img
                    src="/logo-nuxar.webp"
                    alt="Logo"
                    style={{
                        width: '160px',
                        height: 'auto',
                        objectFit: 'contain',
                        filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.15))',
                    }}
                    onError={(e) => {
                        // Fallback text if logo not found
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                            const fallback = document.createElement('div');
                            fallback.textContent = 'NUXAR';
                            fallback.style.cssText =
                                'color:#fff;font-size:2.5rem;font-weight:700;letter-spacing:0.3em;';
                            parent.appendChild(fallback);
                        }
                    }}
                />
            </div>

            {/* Progress container */}
            <div
                style={{
                    position: 'relative',
                    width: '280px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    animation: 'preloaderFadeIn 0.8s ease 0.2s both',
                }}
            >
                {/* Percentage */}
                <div
                    style={{
                        color: '#fff',
                        fontSize: '3.5rem',
                        fontWeight: '700',
                        fontVariantNumeric: 'tabular-nums',
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        fontFamily: 'monospace',
                    }}
                >
                    {String(progress).padStart(3, '0')}
                    <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>%</span>
                </div>

                {/* Progress bar track */}
                <div
                    style={{
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'rgba(255,255,255,0.12)',
                        borderRadius: '2px',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        style={{
                            height: '100%',
                            width: `${progress}%`,
                            backgroundColor: '#fff',
                            borderRadius: '2px',
                            transition: 'width 0.05s linear',
                            boxShadow: '0 0 12px rgba(255,255,255,0.6)',
                        }}
                    />
                </div>

                {/* Status text */}
                <div
                    style={{
                        color: 'rgba(255,255,255,0.4)',
                        fontSize: '0.7rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontFamily: 'monospace',
                    }}
                >
                    {progress < 100 ? 'Memuat...' : 'Selamat Datang'}
                </div>
            </div>

            <style>{`
        @keyframes preloaderFadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}