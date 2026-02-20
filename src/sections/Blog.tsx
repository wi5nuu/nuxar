import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Clock, Calendar, Share2, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { blogConfig } from '../config';
import type { BlogPost } from '../config';
import { fetchBlogsFromSupabase, SUPABASE_ENABLED } from '../lib/supabase';

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = '6281394882490';

function ShareButtons({ post, url }: { post: BlogPost; url: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Baca artikel ini: ${post.title}\n${url}`);
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/20">
      <span className="text-body-sm text-white/60 flex items-center gap-2">
        <Share2 className="w-4 h-4" /> Bagikan:
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopyLink}
        className="rounded-lg border-white/30 bg-transparent text-white hover:bg-white/10"
      >
        {copied ? 'Tersalin!' : 'Salin Link'}
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={handleWhatsApp}
        className="rounded-lg border-white/30 bg-transparent text-white hover:bg-white/10 flex items-center gap-2"
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </Button>
    </div>
  );
}

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const postsRef = useRef<(HTMLElement | null)[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const triggersRef = useRef<ScrollTrigger[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState(blogConfig.posts);
  const [loading, setLoading] = useState(SUPABASE_ENABLED);

  if (!blogConfig.title || blogConfig.posts.length === 0) return null;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      onEnter: () => {
        const tl = gsap.timeline();
        if (titleRef.current) {
          const text = titleRef.current.textContent || '';
          titleRef.current.textContent = '';
          titleRef.current.style.opacity = '1';
          text.split('').forEach((char, i) => {
            setTimeout(() => {
              if (titleRef.current) titleRef.current.textContent += char;
            }, i * 60);
          });
        }
        tl.fromTo(descRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.8);
        postsRef.current.forEach((post, i) => {
          if (post) {
            const image = post.querySelector('.post-image');
            const content = post.querySelector('.post-content');
            tl.fromTo(image, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' }, { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 1, ease: 'expo.out' }, 1 + i * 0.2);
            tl.fromTo(content, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.6');
          }
        });
        tl.fromTo(buttonRef.current, { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, '-=0.3');
      },
      once: true,
    });
    triggersRef.current.push(trigger);
    return () => triggersRef.current.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    if (SUPABASE_ENABLED) {
      fetchBlogsFromSupabase().then(data => {
        if (data && data.length > 0) {
          setPosts(data as any);
        }
        setLoading(false);
      }).catch(() => setLoading(false));
    }
  }, []);

  const getArticleUrl = (post: BlogPost) =>
    typeof window !== 'undefined' ? `${window.location.origin}${window.location.pathname}#blog-${post.slug}` : '';

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-black overflow-hidden"
    >
      <div className="container-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <h2 ref={titleRef} className="text-h1 lg:text-display-xl text-white font-medium mb-4 opacity-0">
              {blogConfig.title}
            </h2>
            <p ref={descRef} className="text-body-lg text-white/90 max-w-xl">{blogConfig.subtitle}</p>
          </div>
          <button
            ref={buttonRef}
            onClick={() => setSelectedPost(blogConfig.posts[0])}
            className="hidden lg:flex items-center gap-2 text-body text-white/60 hover:text-white transition-colors duration-300 mt-8 lg:mt-0 group"
          >
            {blogConfig.allPostsLabel}
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {loading ? (
            <div className="col-span-full py-20 text-center text-white/20 italic">Membuka lembaran artikel baru...</div>
          ) : (
            posts.slice(0, 2).map((post, index) => (
              <article
                key={post.id}
                ref={(el) => { postsRef.current[index] = el; }}
                id={`blog-${post.slug}`}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="post-image relative aspect-[16/9] overflow-hidden mb-6 rounded-lg">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded">
                    <span className="text-body-sm text-white">{post.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-highlight/0 group-hover:bg-highlight/10 transition-colors duration-300" />
                </div>
                <div className="post-content">
                  <div className="flex items-center gap-6 mb-4 text-body-sm text-white/80">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {blogConfig.readTimePrefix}{post.readTime}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-h4 lg:text-h3 text-white font-bold mb-3 group-hover:text-highlight transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-body text-white/90 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-4 text-body-sm text-white/70 group-hover:text-white transition-colors duration-300">
                    {blogConfig.readMoreLabel}
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-black border-white/20 text-white">
          {selectedPost && (
            <>
              <DialogHeader>
                <DialogTitle className="text-h4 text-white">{selectedPost.title}</DialogTitle>
                <div className="flex items-center gap-4 text-body-sm text-white/50 mt-2">
                  <span>{selectedPost.date}</span>
                  <span>{blogConfig.readTimePrefix}{selectedPost.readTime}</span>
                  <span>{selectedPost.category}</span>
                </div>
              </DialogHeader>
              <div className="mt-4 prose prose-invert max-w-none">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-auto rounded-lg mb-6 object-cover max-h-[280px]" />
                <p className="text-body text-white/80 leading-relaxed whitespace-pre-line">{selectedPost.content}</p>
              </div>
              <ShareButtons post={selectedPost} url={getArticleUrl(selectedPost)} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section >
  );
}
