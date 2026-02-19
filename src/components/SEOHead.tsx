import { useEffect } from 'react';

interface SEOHeadProps {
    title: string;
    description: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    robots?: string;
}

const BASE_DOMAIN = 'https://nuxarperfumery.my.id';

export function SEOHead({ title, description, keywords, canonical, ogImage, robots }: SEOHeadProps) {
    useEffect(() => {
        // Title
        document.title = title;

        // Helper to set/update meta tag
        const setMeta = (selector: string, attr: string, value: string) => {
            let el = document.querySelector<HTMLMetaElement>(selector);
            if (!el) {
                el = document.createElement('meta');
                if (attr === 'name') el.name = selector.replace('meta[name="', '').replace('"]', '');
                if (attr === 'property') el.setAttribute('property', selector.replace('meta[property="', '').replace('"]', ''));
                document.head.appendChild(el);
            }
            el.content = value;
        };

        setMeta('meta[name="description"]', 'name', description);
        if (keywords) setMeta('meta[name="keywords"]', 'name', keywords);
        if (robots) setMeta('meta[name="robots"]', 'name', robots);

        const canonicalUrl = canonical ? `${BASE_DOMAIN}${canonical}` : BASE_DOMAIN;
        let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
        if (!canonicalEl) {
            canonicalEl = document.createElement('link');
            canonicalEl.rel = 'canonical';
            document.head.appendChild(canonicalEl);
        }
        canonicalEl.href = canonicalUrl;

        // OG Tags
        setMeta('meta[property="og:title"]', 'property', title);
        setMeta('meta[property="og:description"]', 'property', description);
        setMeta('meta[property="og:url"]', 'property', canonicalUrl);
        if (ogImage) setMeta('meta[property="og:image"]', 'property', ogImage);

        return () => {
            // Restore default on unmount
            document.title = 'NUXAR PERFUMERY | Parfum Eceran Premium Original Terbaik di Indonesia';
        };
    }, [title, description, keywords, canonical, ogImage]);

    return null;
}
