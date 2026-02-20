// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "NUXAR PERFUMERY | Parfum Eceran Premium untuk Setiap Momen Berhargamu",
  description: "NUXAR PERFUMERY menghadirkan parfum eceran premium yang dirancang untuk menemani setiap momen berhargamu. Aroma mewah, tahan lama, dan terjangkau untuk mahasiswa, pekerja, hingga traveler.",
  language: "id",
};

// ============================================================================
// Navigation Configuration
// ============================================================================

export interface NavItem {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logoImage: string;
  brandName: string;
  brandTagline: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  // path ke folder PUBLIC (bukan src)
  logoImage: "/logo-nuxar.png",

  // teks brand
  brandName: "NUXAR",
  brandTagline: "PERFUMERY",

  items: [
    { label: "Produk", href: "/produk" },
    { label: "Katalog", href: "/katalog" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Blog", href: "/blog" },
    { label: "Layanan", href: "/#services" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/kontak" },
  ],
};


// ============================================================================
// Hero Section Configuration
// ============================================================================

export interface HeroConfig {
  title: string;
  subtitle: string;
  backgroundImage: string;
  servicesLabel: string;
  copyright: string;
}

export const heroConfig: HeroConfig = {
  title: "NUXAR",
  subtitle: "Parfum Eceran Premium untuk Setiap Momen Berhargamu",
  backgroundImage: "/hero-main.png",
  servicesLabel: "Eceran | Original | Premium",
  copyright: "© 2026 NUXAR PERFUMERY",
};

// ============================================================================
// About Section Configuration
// ============================================================================

export interface AboutConfig {
  titleLine1: string;
  titleLine2: string;
  description: string;
  image1: string;
  image1Alt: string;
  image2: string;
  image2Alt: string;
  authorImage: string;
  authorName: string;
  authorBio: string;
}

export const aboutConfig: AboutConfig = {
  titleLine1: "Aroma Mewah Kini Lebih Dekat",
  titleLine2: "Untuk Mahasiswa, Pekerja, dan Travelers.",
  description: "NUXAR PERFUMERY hadir untuk memberikan akses ke aroma mewah tanpa kompromi. Koleksi parfum original eceran kami dirancang untuk menunjang kepercayaan dirimu di kampus, kantor, saat healing ke mall, hingga petualangan ke luar negeri.",
  image1: "/6botol.jpg",
  image1Alt: "Koleksi parfum premium NUXAR PERFUMERY",
  image2: "/5botol.jpg",
  image2Alt: "Varian parfum original eceran terbaik",
  authorImage: "/founder.jpg",
  authorName: "Tim NUXAR PERFUMERY",
  authorBio: "Kami kurasi setiap aroma agar sesuai dengan gaya hidup dinamis Anda.",
};

// ============================================================================
// Works Section Configuration
// ============================================================================

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface WorksConfig {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}

export const worksConfig: WorksConfig = {
  title: "Koleksi",
  subtitle: "Pilihan aroma terbaik untuk setiap momen dan kepribadianmu.",
  projects: [
    {
      id: 1,
      title: "Rose Elegance",
      category: "Floral",
      image: "/product-1.jpg"
    },
    {
      id: 2,
      title: "Sandal Noir",
      category: "Woody",
      image: "/product-2.jpg"
    },
    {
      id: 3,
      title: "Citrus Radiance",
      category: "Citrus",
      image: "/product-3.jpg"
    },
    {
      id: 4,
      title: "Amber Royale",
      category: "Oriental",
      image: "/product-4.jpg"
    },
    {
      id: 5,
      title: "Velvet Blossom",
      category: "Floral",
      image: "/product-5.jpg"
    },
    {
      id: 6,
      title: "Golden Indulgence",
      category: "Gourmand",
      image: "/product-6.jpg"
    },
    {
      id: 7,
      title: "Ocean Breeze",
      category: "Aquatic",
      image: "/product-7.jpg"
    },
    {
      id: 8,
      title: "Imperial Fusion",
      category: "Woody Oriental",
      image: "/product-8.jpg"
    }
  ],
};


// ============================================================================
// Services Section Configuration
// ============================================================================

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  title: "Layanan Kami",
  subtitle: "Pengalaman berbelanja parfum yang mudah dan menyenangkan.",
  services: [
    {
      id: "01",
      title: "Tester Gratis",
      description: "Coba berbagai aroma sebelum membeli untuk memastikan kecocokan dengan aktivitas harian Anda.",
      image: "/service-1.jpg"
    },
    {
      id: "02",
      title: "Gift Wrapping",
      description: "Layanan pembungkus hadiah eksklusif untuk kado spesial orang tersayang.",
      image: "/service-2.jpg"
    },
    {
      id: "03",
      title: "Konsultasi Aroma",
      description: "Tim ahli kami siap membantu mencarikan aroma yang pas untuk kantor, kuliah, atau hangout.",
      image: "/service-3.jpg"
    },
    {
      id: "04",
      title: "Pengiriman Cepat",
      description: "Layanan pengiriman andalan agar parfum Anda sampai tepat waktu di lokasi manapun.",
      image: "/service-4.jpg"
    },
  ],
};

// ============================================================================
// Testimonials Section Configuration
// ============================================================================

export interface TestimonialItem {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface TestimonialsConfig {
  title: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  title: "Kata Mereka",
  testimonials: [
    {
      id: 1,
      name: "Dewi Anggraini",
      title: "Pekerja di JABABEKA",
      quote: "Awal kenal NUXAR karena teman kantor rekomendasi. Sekarang jadi andalan aku buat daily use ke kantor. Wanginya tahan lama dan bikin percaya diri sepanjang hari!",
      image: "/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Ahmad Fauzi",
      title: "Mahasiswa President University",
      quote: "Sebagai mahasiswa yang aktif di organisasi kampus, aku butuh parfum yang bisa diandalkan untuk berbagai acara. NUXAR selalu jadi pilihan karena kualitasnya yang premium tapi harganya tetap terjangkau.",
      image: "/testimonial-2.jpg"
    },
    {
      id: 3,
      name: "Widya Putri",
      title: "influencer & Traveler",
      quote: "NUXAR jadi teman setia aku selama traveling. Aku suka banget karena bisa bawa parfum favorit tanpa harus bawa botol besar. Wanginya juga tahan lama, cocok banget buat aktivitas seharian di luar rumah!",
      image: "/testimonial-3.jpg"
    },
  ],
};

// ============================================================================
// Pricing Section Configuration
// ============================================================================

export interface PricingTier {
  name: string;
  price: number;
  originalPrice?: number;
}

export interface PricingSize {
  id: string;
  size: string;
  tagline: string;
  tiers: PricingTier[];
  isRecommended?: boolean;
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  sizes: PricingSize[];
}

export const pricingConfig: PricingConfig = {
  title: "Ukuran & Harga",
  subtitle: "Pilihan ukuran fleksibel sesuai budget harian maupun traveling.",
  ctaButtonText: "Pesan via WhatsApp",
  sizes: [
    {
      id: "30ml",
      size: "30ml",
      tagline: "Sempurna untuk Traveling & Mall",
      isRecommended: true,
      tiers: [
        { name: "Premium", price: 65000 },
      ],
    },
    {
      id: "50ml",
      size: "50ml",
      tagline: "Pas untuk Kuliah & Kerja",
      tiers: [
        { name: "Premium", price: 125000, originalPrice: 150000 },
        { name: "Sedang", price: 100000 },
        { name: "Standar", price: 70000 },
      ],
    },
    {
      id: "100ml",
      size: "100ml",
      tagline: "Stok Bulanan Paling Hemat",
      tiers: [
        { name: "Premium", price: 250000, originalPrice: 300000 },
        { name: "Sedang", price: 200000 },
        { name: "Standar", price: 140000 },
      ],
    },
  ],
};

// ============================================================================
// FAQ Section Configuration
// ============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title: string;
  faqs: FAQItem[];
}

export const faqConfig: FAQConfig = {
  title: "Pertanyaan Umum",
  faqs: [
    {
      question: "Apakah parfum di NUXAR original?",
      answer: "Ya, semua parfum yang kami jual adalah 100% original. Kami mendapatkan parfum dari distributor resmi dan memecahnya menjadi kemasan eceran premium yang lebih terjangkau."
    },
    {
      question: "Bagaimana cara memesan parfum?",
      answer: "Anda bisa memesan langsung melalui WhatsApp atau Instagram resmi kami. Kami melayani pengiriman ke seluruh Indonesia dengan packing aman."
    },
    {
      question: "Apakah bisa mencoba aroma dulu?",
      answer: "Tentu! Kami menyediakan tester untuk semua aroma agar Anda bisa menemukan yang paling cocok sebelum membeli kemasan yang lebih besar."
    },
    {
      question: "Berapa lama ketahanan parfumnya?",
      answer: "Ketahanan parfum bervariasi tergantung jenis aroma. Umumnya parfum original kami tahan 6-12 jam, sangat pas untuk menemani aktivitas harian Anda."
    },
    {
      question: "Apakah ada garansi?",
      answer: "Kami memberikan garansi kepuasan pelanggan. Jika ada kendala dengan produk yang Anda terima, silakan hubungi kami dalam 3 hari untuk solusi terbaik."
    },
    {
      question: "Area pengiriman mencakup mana saja?",
      answer: "Kami melayani pengiriman ke seluruh wilayah Indonesia untuk memastikan Anda bisa tetap tampil wangi di mana pun Anda berada."
    },
  ],
};

// ============================================================================
// Blog Section Configuration
// ============================================================================

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  image: string;
  category: string;
}

export interface BlogConfig {
  title: string;
  subtitle: string;
  allPostsLabel: string;
  readMoreLabel: string;
  readTimePrefix: string;
  posts: BlogPost[];
}

export const blogConfig: BlogConfig = {
  title: "Tips & Artikel",
  subtitle: "Pelajari cara memilih dan menggunakan parfum dengan tepat.",
  allPostsLabel: "Lihat Semua",
  readMoreLabel: "Baca Selengkapnya",
  readTimePrefix: "Baca ",
  posts: [
    {
      id: 1,
      slug: "cara-memilih-parfum-sesuai-kepribadian",
      title: "Cara Memilih Parfum Sesuai Kepribadian",
      excerpt: "Temukan aroma yang paling cocok dengan karakter dan gaya hidupmu. Dari floral yang feminin hingga woody yang maskulin.",
      content: "Memilih parfum yang tepat bisa meningkatkan percaya dirimu. Parfum floral cocok untuk kepribadian feminin dan romantis. Woody dan musk cocok untuk yang maskulin dan tegas. Citrus segar untuk kepribadian ceria. Coba beberapa aroma di NUXAR sebelum memutuskan—kami menyediakan tester gratis.",
      readTime: "5 menit",
      date: "10 Feb 2026",
      image: "/blog-1.jpg",
      category: "Tips"
    },
    {
      id: 2,
      slug: "rahasia-parfum-tahan-lama",
      title: "Rahasia Membuat Parfum Tahan Lama",
      excerpt: "Pelajari teknik spray yang benar dan titik-titik tubuh terbaik untuk memaksimalkan ketahanan aroma parfum favoritmu.",
      content: "Untuk membuat parfum tahan lama, spray di titik nadi: pergelangan tangan, leher, belakang telinga. Jangan menggosok setelah spray—biarkan meresap. Simpan parfum di tempat sejuk dan jauh dari sinar matahari. Parfum original NUXAR tahan 4-8 jam tergantung aktivitas.",
      readTime: "4 menit",
      date: "5 Feb 2025",
      image: "/blog-2.jpg",
      category: "Tips"
    },
  ],
};

// ============================================================================
// Contact Section Configuration
// ============================================================================

export interface ContactFormOption {
  value: string;
  label: string;
}

export interface ContactConfig {
  title: string;
  subtitle: string;
  nameLabel: string;
  emailLabel: string;
  whatsappLabel: string;
  productLabel: string;
  productPlaceholder: string;
  productOptions: ContactFormOption[];
  messageLabel: string;
  submitButtonText: string;
  image: string;
  whatsappNumber: string;
  turnstileSiteKey: string;
}

export const contactConfig: ContactConfig = {
  title: "Hubungi Kami",
  subtitle: "Punya pertanyaan atau ingin memesan? Kami siap membantu!",
  nameLabel: "Nama *",
  emailLabel: "Email *",
  whatsappLabel: "WhatsApp *",
  productLabel: "Produk",
  productPlaceholder: "Pilih produk...",
  productOptions: [
    { value: "30ml", label: "30ml - Hemat & Praktis" },
    { value: "50ml", label: "50ml - Paling Favorit" },
    { value: "100ml", label: "100ml - Best Value" },
    { value: "lainnya", label: "Lainnya / Konsultasi" },
  ],
  messageLabel: "Pesan",
  submitButtonText: "Kirim ke WhatsApp",
  image: "/contact.jpg",
  whatsappNumber: "6281394882490",
  turnstileSiteKey: import.meta.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "0x4AAAAAACf_YUB-76i94BFo",
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
  isPage?: boolean;
}

export interface FooterConfig {
  marqueeText: string;
  marqueeHighlightChars: string[];
  navLinks1: FooterLink[];
  navLinks2: FooterLink[];
  ctaText: string;
  ctaHref: string;
  copyright: string;
  tagline: string;
}

export const footerConfig: FooterConfig = {
  marqueeText: "Temukan Aroma Signaturemu Bersama NUXAR",
  marqueeHighlightChars: ["N", "U", "X", "A", "R"],
  navLinks1: [
    { label: "Beranda", href: "/" },
    { label: "Produk", href: "/produk" },
    { label: "Katalog", href: "/katalog" },
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Layanan", href: "/#services" },
    { label: "FAQ", href: "/#faq" },
    { label: "Kontak", href: "/kontak" },
  ],
  navLinks2: [
    { label: "WhatsApp", href: "https://wa.me/6281394882490", icon: "MessageCircle" },
    { label: "Facebook", href: "https://www.facebook.com/nuxarperfumery", icon: "Facebook" },
    { label: "Ashar Grosir Parfum", href: "https://www.ashargrosirparfum.com", icon: "ExternalLink" },
  ],
  ctaText: "Pesan Sekarang",
  ctaHref: "#contact",
  copyright: "© 2026 NUXAR. Solusi parfum premium untuk setiap kalangan.",
  tagline: "Aroma Signature untuk Setiap Momen",
};
