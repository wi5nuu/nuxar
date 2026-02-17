import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles } from 'lucide-react';
import { getAIKnowledgeBase } from '../lib/ai-knowledge';
import { fetchPerfumesFromSupabase, SUPABASE_ENABLED } from '../lib/supabase';
import { allPerfumes as localPerfumes, type PerfumeItem } from '../data/perfumes';
import { getRandomSuggestions, getSystemResponse, getContextualSuggestions, type AISuggestion } from '../lib/ai-suggestions';

interface Message {
    role: 'user' | 'bot';
    content: string;
}

export function AIChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [showGreeting, setShowGreeting] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [perfumes, setPerfumes] = useState<PerfumeItem[]>(localPerfumes);
    const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);

    const chatRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Initial suggestions
    useEffect(() => {
        setSuggestions(getRandomSuggestions(4));
    }, []);

    // Timed greeting bubble (15s show, 10s hide)
    useEffect(() => {
        let timer: any;
        const cycle = () => {
            if (!isOpen) {
                setShowGreeting(true);
                timer = setTimeout(() => {
                    setShowGreeting(false);
                    timer = setTimeout(cycle, 10000); // 10s hide
                }, 15000); // 15s show
            }
        };

        timer = setTimeout(cycle, 5000); // Initial delay

        return () => clearTimeout(timer);
    }, [isOpen]);

    // Fetch Supabase data on mount
    useEffect(() => {
        if (SUPABASE_ENABLED) {
            fetchPerfumesFromSupabase().then(data => {
                if (data) {
                    setPerfumes([...data.cowok, ...data.cewek]);
                }
            });
        }
    }, []);

    // External trigger listener (for mobile nav)
    useEffect(() => {
        const handleOpenChat = () => {
            setIsOpen(true);
            setShowGreeting(false);
            if (messages.length === 0) {
                setMessages([{ role: 'bot', content: 'Halo Kak, selamat datang di website Official Store NUXAR PERFUMERY. Pasti mau bertanya tentang parfum ya? Silakan saja Kak, kami siap membantu dengan senang hati!' }]);
            }
        };
        window.addEventListener('open-nuxar-chat', handleOpenChat);
        return () => window.removeEventListener('open-nuxar-chat', handleOpenChat);
    }, [messages.length]);

    // Handle scroll to bottom
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setShowGreeting(false);
        if (!isOpen && messages.length === 0) {
            setMessages([{ role: 'bot', content: 'Halo Kak, selamat datang di website Official Store NUXAR PERFUMERY. Pasti mau bertanya tentang parfum ya? Silakan saja Kak, kami siap membantu dengan senang hati!' }]);
        }
        if (!isOpen) {
            setSuggestions(getRandomSuggestions(4));
        }
    };

    const handleSend = async (customMsg?: string) => {
        const userMsg = customMsg || input.trim();
        if (!userMsg || isTyping) return;

        if (!customMsg) setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setIsTyping(true);

        // 1. Cek Local Suggestions (Token Saver)
        const localStaticResponse = getSystemResponse(userMsg);
        if (localStaticResponse) {
            setTimeout(() => {
                setMessages(prev => [...prev, { role: 'bot', content: localStaticResponse }]);
                setIsTyping(false);
                setSuggestions(getContextualSuggestions(userMsg));
            }, 600);
            return;
        }

        // 2. Cek Dynamic Local Database & Config
        const lowerCaseMsg = userMsg.toLowerCase();

        // Handler Harga (Price)
        const isAskingPrice = lowerCaseMsg.includes('harga') || lowerCaseMsg.includes('biaya') || lowerCaseMsg.includes('price') || lowerCaseMsg.includes('bayar');
        if (isAskingPrice) {
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: 'bot',
                    content: "Tentu Kak! Harga kami sangat bersahabat:\n" +
                        "- 30ml: Rp35.000 - Rp64.000\n" +
                        "- 50ml: Rp70.000 - Rp125.000\n" +
                        "- 100ml: Rp140.000 - Rp250.000\n" +
                        "Tergantung kualitas (Premium/Original). Ada ukuran yang Kakak minati?"
                }]);
                setIsTyping(false);
                setSuggestions(getContextualSuggestions(userMsg));
            }, 600);
            return;
        }

        const isAskingDetail = lowerCaseMsg.includes('tampilkan') || lowerCaseMsg.includes('deskripsi') || lowerCaseMsg.includes('detail');
        // Hanya trigger rekomendasi jika user bertanya secara UMUM. Jika user bertanya aroma spesifik (misal: wangi bunga), biarkan AI yang jawab.
        const isBroadRecommendation = (lowerCaseMsg.includes('rekomendasi') || lowerCaseMsg.includes('rekomendasikan') || lowerCaseMsg.includes('saran') || (lowerCaseMsg.includes('parfum') && lowerCaseMsg.includes('bagus'))) && !lowerCaseMsg.includes('aroma') && !lowerCaseMsg.includes('wangi') && !lowerCaseMsg.includes('bau');

        if (isBroadRecommendation && !isAskingDetail) {
            const bestSellers = perfumes.filter(p => p.order <= 3).map(p => p.name).join(', ');
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: 'bot',
                    content: `Tentu Kak! Rekomendasi best-seller kami adalah ${bestSellers}. Semuanya sangat diminati. Atau Kakak sedang cari aroma spesifik seperti segar, manis, atau kayu?`
                }]);
                setIsTyping(false);
                setSuggestions(getContextualSuggestions(userMsg));
            }, 600);
            return;
        }

        if (isAskingDetail) {
            const matchedPerfume = perfumes.find(p =>
                lowerCaseMsg.includes(p.name.toLowerCase()) ||
                lowerCaseMsg.includes(p.fullName.toLowerCase())
            );
            if (matchedPerfume) {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        role: 'bot',
                        content: `Tentu Kak, ini detail untuk ${matchedPerfume.name}: ${matchedPerfume.description || matchedPerfume.karakter || 'Aroma yang sangat berkesan.'} Karakter: ${matchedPerfume.karakter || 'Mewah'}. Cocok untuk ${matchedPerfume.penggunaan || 'harian'}.`
                    }]);
                    setIsTyping(false);
                }, 600);
                return;
            }
        }

        // 3. Call AI API (Gemini) - Only for general conversation
        try {
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            if (!apiKey) {
                setMessages(prev => [...prev, { role: 'bot', content: 'Maaf ya Kak, layanan AI kami sedang tidak tersedia saat ini. Kakak bisa klik pertanyaan di bawah ini atau langsung hubungi WhatsApp kami untuk respon cepat!' }]);
                setIsTyping(false);
                return;
            }

            const knowledge = getAIKnowledgeBase(perfumes);
            const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contents: [{
                        parts: [{ text: `${knowledge}\n\nUSER: ${userMsg}\nAI (MAKSIMAL 1-2 KALIMAT PENDEK, RAMAH):` }]
                    }],
                    generationConfig: {
                        maxOutputTokens: 100,
                        temperature: 0.7
                    }
                })
            });

            if (response.status === 429) {
                setMessages(prev => [...prev, { role: 'bot', content: 'Maaf ya Kak, kuota pertanyaan AI kami sedang penuh. Kakak bisa coba klik pertanyaan di bawah ini atau tanya langsung via WhatsApp kami saja ya!' }]);
                setIsTyping(false);
                return;
            }

            if (!response.ok) {
                throw new Error('API Error');
            }

            const data = await response.json();
            const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Maaf, saya tidak mengerti. Bisa diulang?';

            setMessages(prev => [...prev, { role: 'bot', content: botReply.trim() }]);
            setSuggestions(getContextualSuggestions(userMsg));
        } catch (error) {
            setMessages(prev => [...prev, { role: 'bot', content: 'Maaf ya Kak, kami tidak bisa menjawab pertanyaan tersebut saat ini. Silakan pilih salah satu pertanyaan di bawah ini atau hubungi kami via WhatsApp ya kak!' }]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">
            {/* Greeting Bubble */}
            {showGreeting && !isOpen && (
                <div
                    className="pointer-events-auto relative px-4 py-2 bg-white rounded-2xl shadow-xl border border-black/5 text-sm font-medium text-black animate-in fade-in slide-in-from-bottom-2 duration-500 mb-20 md:mb-0 mr-4 md:mr-0"
                >
                    Mau cari aroma apa kak?
                    <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white border-r border-b border-black/5 rotate-45" />
                </div>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div
                    ref={chatRef}
                    className="pointer-events-auto flex flex-col w-[320px] sm:w-[380px] h-[550px] bg-white rounded-3xl shadow-2xl border border-black/5 overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-300"
                >
                    {/* Header */}
                    <div className="p-4 bg-black text-white flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                                <Bot className="w-5 h-5 text-black" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold tracking-tight">NUXAR Assistant</h4>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                    <span className="text-[10px] text-white/60 font-medium uppercase tracking-[0.1em]">Online</span>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Messages & Suggestions Area */}
                    <div
                        ref={scrollRef}
                        className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#fafafa]"
                    >
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed ${msg.role === 'user'
                                        ? 'bg-black text-white rounded-tr-none'
                                        : 'bg-white border border-black/5 text-black shadow-sm rounded-tl-none'
                                        }`}
                                >
                                    {msg.content}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white border border-black/5 px-4 py-3 rounded-2xl rounded-tl-none shadow-sm space-x-1 flex">
                                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce" />
                                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce [animation-delay:0.2s]" />
                                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce [animation-delay:0.4s]" />
                                </div>
                            </div>
                        )}

                        {/* Suggestions Area */}
                        {!isTyping && suggestions.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {suggestions.map((s, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleSend(s.text)}
                                        className="px-3 py-1.5 bg-white border border-black/10 rounded-full text-[11px] font-medium text-black/60 hover:bg-black hover:text-white hover:border-black transition-all active:scale-95"
                                    >
                                        {s.text}
                                    </button>
                                ))}
                                <button
                                    onClick={() => setSuggestions(getRandomSuggestions(4))}
                                    className="p-1.5 text-black/20 hover:text-highlight transition-colors flex items-center justify-center h-8"
                                    title="Lainnya"
                                >
                                    <Sparkles className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="p-4 bg-white border-t border-black/5">
                        <form
                            onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                            className="relative"
                        >
                            <input
                                type="text"
                                placeholder="Tanya soal parfum..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                className="w-full pl-4 pr-12 py-3 bg-black/[0.03] border-none rounded-2xl text-sm text-black placeholder:text-black/40 focus:ring-1 focus:ring-black transition-all"
                            />
                            <button
                                type="submit"
                                disabled={isTyping}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black text-white rounded-xl hover:bg-highlight transition-all disabled:opacity-50"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                        <p className="mt-2 text-[10px] text-center text-black/30 flex items-center justify-center gap-1">
                            Version <Sparkles className="w-3 h-3" /> AI Brain Overhaul 4.0
                        </p>
                    </div>
                </div>
            )}

            {/* Floating Button - Hidden on Mobile */}
            <button
                onClick={toggleChat}
                className="pointer-events-auto hidden md:flex group relative w-14 h-14 rounded-full bg-black shadow-2xl items-center justify-center overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95 active:rotate-12"
            >
                <div className="absolute inset-0 bg-gradient-to-tr from-highlight/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {isOpen ? (
                    <X className="w-6 h-6 text-white" />
                ) : (
                    <MessageCircle className="w-6 h-6 text-white fill-white group-hover:animate-bounce" />
                )}
            </button>
        </div>
    );
}
