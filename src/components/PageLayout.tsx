import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from '../sections/Footer';
import { CustomCursor } from './CustomCursor';
import { ParticleField } from './ParticleField';
import { AIChatBot } from './AIChatBot';
import { ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageLayoutProps {
    children: React.ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export function PageLayout({ children, breadcrumbs }: PageLayoutProps) {
    useEffect(() => {
        window.scrollTo(0, 0);
        setTimeout(() => ScrollTrigger.refresh(), 100);
    }, []);

    return (
        <div className="relative min-h-screen w-full min-w-0 bg-black text-white overflow-x-hidden">
            <div className="noise-overlay" />
            <CustomCursor />
            <ParticleField />
            <Navigation />

            {/* Breadcrumb */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <div className="pt-20 lg:pt-28 pb-2 px-6 lg:px-16">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/40">
                        <Link to="/" className="hover:text-white/70 transition-colors">Beranda</Link>
                        {breadcrumbs.map((crumb, idx) => (
                            <span key={idx} className="flex items-center gap-2">
                                <ChevronRight size={14} />
                                {crumb.href ? (
                                    <Link to={crumb.href} className="hover:text-white/70 transition-colors">{crumb.label}</Link>
                                ) : (
                                    <span className="text-white/70">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                </div>
            )}

            <main id="main-content" className="w-full min-w-0 overflow-x-hidden" tabIndex={-1}>
                {children}
            </main>

            <Footer />
            <AIChatBot />
        </div>
    );
}
