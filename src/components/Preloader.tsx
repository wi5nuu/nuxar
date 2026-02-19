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
        // Simulate smooth progress up to 90% while page loads
        const startTime = performance.now();
        const fakeDuration = 2500; // ms to reach ~90%

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const fakeProgress = Math.min((elapsed / fakeDuration) * 90, 90);
            if (fakeProgress > progressRef.current) {
                progressRef.current = fakeProgress;
                setProgress(Math.floor(fakeProgress));
            }
            if (fakeProgress < 90) {
                animFrameRef.current = requestAnimationFrame(tick);
            }
        };

        animFrameRef.current = requestAnimationFrame(tick);

        const finalize = () => {
            if (completedRef.current) return;
            completedRef.current = true;

            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

            // Animate to 100%
            const start = progressRef.current;
            const startTime2 = performance.now();
            const fillDuration = 400;

            const fill = (now: number) => {
                const t = Math.min((now - startTime2) / fillDuration, 1);
                const val = start + (100 - start) * t;
                progressRef.current = val;
                setProgress(Math.floor(val));
                if (t < 1) {
                    requestAnimationFrame(fill);
                } else {
                    // Fade out
                    setTimeout(() => {
                        setVisible(false);
                        setTimeout(onComplete, 600);
                    }, 400);
                }
            };

            requestAnimationFrame(fill);
        };

        window.addEventListener('load', finalize);

        // Fallback: if load already fired or takes too long
        if (document.readyState === 'complete') {
            setTimeout(finalize, 200);
        }

        return () => {
            window.removeEventListener('load', finalize);
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
                    src="/logo-nuxar.png"
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