import { useEffect, useState, useCallback } from 'react';

interface RamadanPopupProps {
    /** Delay in ms before popup first appears after loader finishes. Default: 500 */
    initialDelay?: number;
    /** How many seconds after closing before it reappears. Default: 30 */
    reappearAfterSeconds?: number;
}

export function RamadanPopup({
    initialDelay = 500,
    reappearAfterSeconds = 30,
}: RamadanPopupProps) {
    const [visible, setVisible] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);
    const timerRef = { current: null as ReturnType<typeof setTimeout> | null };

    const show = useCallback(() => {
        setVisible(true);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => setAnimateIn(true));
        });
    }, []);

    const close = useCallback(() => {
        setAnimateIn(false);
        setTimeout(() => {
            setVisible(false);
            // Schedule reappear
            timerRef.current = setTimeout(show, reappearAfterSeconds * 1000);
        }, 400);
    }, [show, reappearAfterSeconds]);

    useEffect(() => {
        const initialTimer = setTimeout(show, initialDelay);
        return () => {
            clearTimeout(initialTimer);
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [show, initialDelay]);

    if (!visible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                onClick={close}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 8888,
                    backgroundColor: 'rgba(0,0,0,0.75)',
                    backdropFilter: 'blur(4px)',
                    WebkitBackdropFilter: 'blur(4px)',
                    transition: 'opacity 0.4s ease',
                    opacity: animateIn ? 1 : 0,
                    cursor: 'pointer',
                }}
            />

            {/* Modal */}
            <div
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 8889,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    pointerEvents: 'none',
                }}
            >
                <div
                    style={{
                        position: 'relative',
                        pointerEvents: 'all',
                        // 4:5 aspect ratio container
                        width: 'min(90vw, min(80vh * 0.8, 400px))',
                        aspectRatio: '4 / 5',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 25px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.08)',
                        transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                        opacity: animateIn ? 1 : 0,
                        transform: animateIn ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(24px)',
                    }}
                >
                    {/* Promo image */}
                    <img
                        src="/promo-ramadhan.jpg"
                        alt="Promo Ramadhan"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />

                    {/* Close button */}
                    <button
                        onClick={close}
                        aria-label="Tutup popup"
                        style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            border: 'none',
                            backgroundColor: 'rgba(0,0,0,0.55)',
                            backdropFilter: 'blur(6px)',
                            WebkitBackdropFilter: 'blur(6px)',
                            color: '#fff',
                            fontSize: '1.1rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            lineHeight: 1,
                            transition: 'background-color 0.2s, transform 0.2s',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.8)';
                            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'rgba(0,0,0,0.55)';
                            (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)';
                        }}
                    >
                        ✕
                    </button>
                </div>
            </div>
        </>
    );
}