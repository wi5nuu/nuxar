// ============================================================================
// Site Configuration
// ============================================================================

export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "NUXAR - Parfum Eceran Mahasiswa",
  description: "NUXAR adalah toko parfum eceran eksklusif khusus untuk mahasiswa President University. Temukan aroma signaturemu dengan harga terjangkau.",
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
  logo: string;
  items: NavItem[];
}

export const navigationConfig: NavigationConfig = {
  logo: "NUXAR",
  items: [
    { label: "Produk", href: "#works" },
    { label: "Katalog Aroma", href: "#katalog" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#contact" },
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
  subtitle: "Parfum Eceran untuk Mahasiswa President University",
  backgroundImage: "/hero-main.jpg",
  servicesLabel: "Eceran | Original | Terjangkau",
  copyright: "© 2025 NUXAR",
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
  titleLine1: "Kami hadir untuk membuat parfum berkualitas",
  titleLine2: "terjangkau bagi setiap mahasiswa President University.",
  description: "NUXAR didirikan dengan visi sederhana: setiap mahasiswa berhak tampil percaya diri dengan aroma yang sesuai kepribadiannya. Kami menyediakan parfum original dalam kemasan eceran dengan harga yang ramah kantong mahasiswa.",
  image1: "/about-1.jpg",
  image1Alt: "Koleksi parfum NUXAR",
  image2: "/about-2.jpg",
  image2Alt: "Botol parfum premium",
  authorImage: "/founder.jpg",
  authorName: "Tim NUXAR",
  authorBio: "Dari mahasiswa, untuk mahasiswa. Kami memahami kebutuhanmu.",
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
  title: "Koleksi Parfum",
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
      title: "Woody Amber", 
      category: "Woody", 
      image: "/product-2.jpg" 
    },
    { 
      id: 3, 
      title: "Citrus Fresh", 
      category: "Citrus", 
      image: "/product-3.jpg" 
    },
    { 
      id: 4, 
      title: "Oriental Oud", 
      category: "Oriental", 
      image: "/product-4.jpg" 
    },
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
      description: "Coba aroma sebelum membeli dengan tester gratis di kampus President University", 
      image: "/service-1.jpg" 
    },
    { 
      id: "02", 
      title: "Gift Wrapping", 
      description: "Layanan pembungkus hadiah eksklusif untuk hadiah spesial", 
      image: "/service-2.jpg" 
    },
    { 
      id: "03", 
      title: "Konsultasi Aroma", 
      description: "Tim kami siap membantu menemukan aroma yang paling cocok untukmu", 
      image: "/service-3.jpg" 
    },
    { 
      id: "04", 
      title: "Delivery Kampus", 
      description: "Pengantaran gratis ke area kampus President University", 
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
      title: "Mahasiswa Teknik", 
      quote: "NUXAR benar-benar memahami kebutuhan mahasiswa. Parfum original dengan harga yang sangat terjangkau. Sekarang aku bisa tampil percaya diri setiap hari!", 
      image: "/testimonial-1.jpg" 
    },
    { 
      id: 2, 
      name: "Ahmad Fauzi", 
      title: "Mahasiswa Bisnis", 
      quote: "Pelayanan delivery kampusnya sangat membantu. Tinggal pesan, dan parfum sampai ke kelas. Recommended banget buat teman-teman President University!", 
      image: "/testimonial-2.jpg" 
    },
    { 
      id: 3, 
      name: "Rina Susanti", 
      title: "Mahasiswa Hukum", 
      quote: "Tester gratisnya membuatku bisa mencoba berbagai aroma sebelum memutuskan. Pelayanannya ramah dan sangat profesional.", 
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
}

export interface PricingSize {
  id: string;
  size: string;
  tagline: string;
  tiers: PricingTier[];
}

export interface PricingConfig {
  title: string;
  subtitle: string;
  ctaButtonText: string;
  sizes: PricingSize[];
}

export const pricingConfig: PricingConfig = {
  title: "Ukuran & Harga",
  subtitle: "Pilihan ukuran yang sesuai kebutuhan dan budget mahasiswa.",
  ctaButtonText: "Pesan via WhatsApp",
  sizes: [
    {
      id: "30ml",
      size: "30ml",
      tagline: "Hemat & Praktis",
      tiers: [
        { name: "Premium", price: 64000 },
        { name: "Sedang", price: 50000 },
        { name: "Standar", price: 35000 },
      ],
    },
    {
      id: "50ml",
      size: "50ml",
      tagline: "Paling Favorit Mahasiswa",
      tiers: [
        { name: "Premium", price: 125000 },
        { name: "Sedang", price: 100000 },
        { name: "Standar", price: 70000 },
      ],
    },
    {
      id: "100ml",
      size: "100ml",
      tagline: "Best Value (Lebih Awet)",
      tiers: [
        { name: "Premium", price: 250000 },
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
      answer: "Ya, semua parfum yang kami jual adalah 100% original. Kami mendapatkan parfum dari distributor resmi dan memecahnya menjadi kemasan eceran yang lebih terjangkau." 
    },
    { 
      question: "Bagaimana cara memesan parfum?", 
      answer: "Kamu bisa memesan melalui WhatsApp, Instagram, atau datang langsung ke booth kami di area kampus President University. Kami juga menerima pesanan online dengan delivery ke kampus." 
    },
    { 
      question: "Apakah bisa mencoba aroma dulu?", 
      answer: "Tentu! Kami menyediakan tester gratis untuk semua aroma. Kamu bisa mencoba sebelum memutuskan untuk membeli." 
    },
    { 
      question: "Berapa lama ketahanan parfumnya?", 
      answer: "Ketahanan parfum bervariasi tergantung jenis aroma dan aktivitas. Umumnya parfum original bisa tahan 4-8 jam. Kami bisa merekomendasikan aroma yang sesuai dengan kebutuhanmu." 
    },
    { 
      question: "Apakah ada garansi?", 
      answer: "Kami memberikan garansi kepuasan. Jika kamu tidak puas dengan pembelianmu, hubungi kami dalam 3 hari untuk solusi terbaik." 
    },
    { 
      question: "Area delivery mencakup mana saja?", 
      answer: "Kami melayani delivery gratis ke seluruh area kampus President University, termasuk asrama dan area sekitar kampus." 
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
      date: "10 Feb 2025", 
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
};

// ============================================================================
// Footer Configuration
// ============================================================================

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
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
    { label: "Beranda", href: "#hero" },
    { label: "Produk", href: "#works" },
    { label: "Katalog Aroma", href: "#katalog" },
    { label: "Tentang", href: "#about" },
    { label: "Layanan", href: "#services" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#contact" },
  ],
  navLinks2: [
    { label: "WhatsApp", href: "https://wa.me/6281394882490", icon: "MessageCircle" },
    { label: "Ashar Grosir Parfum", href: "https://www.ashargrosirparfum.com", icon: "ExternalLink" },
  ],
  ctaText: "Pesan Sekarang",
  ctaHref: "#contact",
  copyright: "© 2025 NUXAR. Dibuat dengan untuk mahasiswa President University.",
  tagline: "Dari Mahasiswa, Untuk Mahasiswa",
};
