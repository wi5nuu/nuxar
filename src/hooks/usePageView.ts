import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
    }
}

/**
 * Hook to track page views in Google Analytics 4.
 * Essential for SPAs where browser-level navigation doesn't trigger a full reload.
 */
export function usePageView() {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            window.gtag('config', 'G-2BE50L0120', {
                page_path: location.pathname + location.search,
                page_location: window.location.href,
            });
        }
    }, [location]);
}
