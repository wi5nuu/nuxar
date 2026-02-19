export interface AISuggestion {
    text: string;
    response: string;
    category: 'tren' | 'pria' | 'wanita' | 'karakter' | 'aroma' | 'aktivitas' | 'bisnis' | 'president_univ' | 'alkohol' | 'edukasi' | 'tips' | 'etiket' | 'hadiah' | 'sains' | 'sosial';
    tags: string[];
}

export const AI_SUGGESTIONS: AISuggestion[] = [
    // ═══════════════════════════════════════════════════
    // PRESIDENT UNIVERSITY & KAMPUS
    // ═══════════════════════════════════════════════════
    {
        text: "Bisa antar ke President University?",
        response: "Bisa banget Kak! Kami antar langsung ke kampus, asrama (Student Housing), atau kosan Kakak di sekitar Jababeka gratis ongkir pengantaran.",
        category: 'president_univ',
        tags: ['presuniv', 'kampus', 'asrama', 'kosan', 'antar', 'jababeka', 'cikarang', 'mahasiswa', 'delivery']
    },
    {
        text: "Pesan parfum di asrama bayar ongkir?",
        response: "Khusus area President University, asrama, dan kosan sekitar Jababeka, kami berikan layanan pengantaran langsung gratis ongkir Kak. Harga tetap harga eceran biasa!",
        category: 'president_univ',
        tags: ['ongkir', 'asrama', 'biaya', 'antar', 'gratis', 'free delivery', 'bayar', 'shipping']
    },
    {
        text: "Rekomendasi parfum buat kuliah di kampus?",
        response: "Buat kuliah, Kakak butuh yang segar tapi sopan. Dior Sauvage atau Bvlgari Extreme cocok banget buat cowok. Buat cewek, Miss Dior atau Jo Malone English Pear bakal bikin Kakak wangi segar seharian di kelas!",
        category: 'president_univ',
        tags: ['kuliah', 'rekomendasi', 'kampus', 'mahasiswa', 'belajar', 'kelas', 'study', 'aroma']
    },
    {
        text: "Bisa bayar di asrama (COD)?",
        response: "Sangat bisa Kak! Untuk pengantaran langsung ke area President University/Jababeka, Kakak bisa bayar saat parfum sampai di tangan Kakak (Cash on Delivery).",
        category: 'president_univ',
        tags: ['cod', 'bayar ditempat', 'asrama', 'mahasiswa', 'cash', 'langsung', 'ditempat', 'uangkas']
    },

    // ═══════════════════════════════════════════════════
    // EDUKASI & TIPS PAKAR
    // ═══════════════════════════════════════════════════
    {
        text: "Semprot di mana biar awet?",
        response: "Semprotkan di titik nadi seperti leher, pergelangan tangan, dan belakang telinga Kak. Panas tubuh di area tersebut akan membantu wangi menyebar lebih luas dan tahan lama!",
        category: 'edukasi',
        tags: ['semprot', 'mana', 'awet', 'tahan lama', 'titik nadi', 'nadi', 'lokasi', 'tempat', 'long lasting', 'tips']
    },
    {
        text: "Cara simpan parfum yang benar?",
        response: "Simpan di tempat sejuk dan gelap, jauh dari sinar matahari atau suhu panas Kak. Jangan simpan di kamar mandi ya, karena kelembapan bisa merusak kualitas bibit parfum.",
        category: 'edukasi',
        tags: ['simpan', 'taruh', 'benar', 'paling bagus', 'awet', 'rusak', 'basi', 'lokasi', 'tempat', 'suhu', 'panas', 'cahaya']
    },
    {
        text: "Kenapa parfum jangan digosok?",
        response: "Menggosok pergelangan tangan bisa merusak struktur molekul wangi dan bikin 'Top Notes' hilang lebih cepat. Cukup biarkan mengering alami di kulit Kak.",
        category: 'edukasi',
        tags: ['gosok', 'tangan', 'kenapa', 'tips', 'rusak', 'pecah', 'cara pakai', 'teknik', 'molekul']
    },
    {
        text: "Apa bedanya Pure Absolute sama Premium?",
        response: "Pure Absolute itu 100% bibit murni (0% Alkohol), sangat awet dan aman ibadah. Premium itu campuran pelarut berkualitas yang bikin wanginya lebih 'menyebar' (projection) di ruangan.",
        category: 'edukasi',
        tags: ['beda', 'premium', 'absolute', 'kualitas', 'alkohol', 'campuran', 'murni', 'pure', 'konsentrasi', 'bagus mana']
    },
    {
        text: "Tips biar wangi seharian walau keringetan?",
        response: "Gunakan lotion tanpa aroma di titik nadi sebelum semprot parfum Kak. Moisturizer akan menahan molekul wangi agar tidak mudah luntur oleh keringat.",
        category: 'edukasi',
        tags: ['keringat', 'seharian', 'tahan lama', 'awet', 'tips', 'lotion', 'moisturizer', 'sport', 'aktif', 'panas']
    },
    {
        text: "Parfum yang cocok buat kulit sensitif?",
        response: "Sangat disarankan memakai varian Pure Absolute (Non-Alkohol) kami Kak. Tanpa alkohol, jadi dingin di kulit dan tidak menimbulkan iritasi atau panas.",
        category: 'edukasi',
        tags: ['sensitif', 'alergi', 'kulit', 'merah', 'gatal', 'aman', 'non-alkohol', 'skin care', 'perih']
    },
    {
        text: "Cara layering parfum biar wangi unik?",
        response: "Kakak bisa semprot 2 aroma berbeda. Misal aroma Fresh dulu, lalu lapisi dengan aroma Sweet. Ini cara keren buat punya 'Signature Scent' yang cuma Kakak yang punya!",
        category: 'edukasi',
        tags: ['layering', 'campur', 'mix', 'unik', 'signature', 'cara', 'resep', 'kombinasi', 'tumpuk']
    },

    // ═══════════════════════════════════════════════════
    // ETIKET & SOSIAL (NEW 5.0)
    // ═══════════════════════════════════════════════════
    {
        text: "Parfum untuk interview kerja?",
        response: "Pilih wangi yang 'Clean' dan 'Fresh' seperti Mont Blanc Legend atau Chloe Rose Kak. Jangan yang terlalu menyengat agar interviewer tetap nyaman berbicara lama dengan Kakak.",
        category: 'etiket',
        tags: ['interview', 'kerja', 'wawancara', 'kantor', 'profesional', 'sopan', 'saran', 'pekerjaan']
    },
    {
        text: "Etika pakai parfum di ruangan tertutup (Lift/AC)?",
        response: "Gunakan secukupnya (2-3 semprot) Kak. Di ruangan ber-AC, wangi akan lebih bertahan lama, jadi aroma yang 'Soft' lebih disukai rekan kerja di sekitar Kakak.",
        category: 'etiket',
        tags: ['etika', 'kantor', 'ruangan', 'ac', 'lift', 'sopan', 'orang lain', 'terganggu', 'semprot']
    },
    {
        text: "Parfum buat ketemu calon mertua?",
        response: "Pilih aroma yang 'Elegant' dan 'Sweet Warm' seperti J.Lo Still atau My Way. Memberikan kesan ramah, tenang, dan berwibawa di depan keluarga pasangan Kak.",
        category: 'etiket',
        tags: ['mertua', 'keluarga', 'pasangan', 'pacar', 'ramah', 'tenang', 'sopan', 'elegant']
    },
    {
        text: "Bau badan vs Parfum, solusinya?",
        response: "Gunakan deodoran dulu untuk lawan bakteri bau badan, baru semprot parfum NUXAR untuk wanginya Kak. Parfum tidak bisa menutupi bau badan, tapi bisa menyelaraskannya!",
        category: 'etiket',
        tags: ['bau badan', 'deodoran', 'ketiak', 'keringat', 'solusi', 'wangi', 'tips', 'bersih']
    },

    // ═══════════════════════════════════════════════════
    // SAINS & FRAGRANCE CHEMISTRY (NEW 5.0)
    // ═══════════════════════════════════════════════════
    {
        text: "Apa itu Sillage dan Projection?",
        response: "Projection adalah jarak wangi yang tercium dari tubuh Kakak, sedangkan Sillage adalah jejak wangi yang tertinggal saat Kakak berjalan melewati seseorang.",
        category: 'sains',
        tags: ['sillage', 'projection', 'jejak', 'jarak', 'istilah', 'ilmu', 'sains', 'wangi']
    },
    {
        text: "Kenapa wangi di orang lain beda sama di saya?",
        response: "Itu karena pH kulit, hormon, dan diet Kakak berbeda. Kimia tubuh (body chemistry) mempengaruhi bagaimana bibit parfum bereaksi saat menyentuh kulit masing-masing orang.",
        category: 'sains',
        tags: ['beda', 'pH', 'kulit', 'kimia', 'sains', 'berbeda', 'orang lain', 'reaksi', 'tubuh']
    },
    {
        text: "Kenapa parfum di botol bening lebih cepat rusak?",
        response: "Cahaya matahari mengandung sinar UV yang bisa memutus molekul wangi bibit parfum Kak. Itulah kenapa botol gelap atau tempat tertutup sangat disarankan.",
        category: 'sains',
        tags: ['botol', 'bening', 'cahaya', 'uv', 'rusak', 'sains', 'kimia', 'terang', 'panas']
    },

    // ═══════════════════════════════════════════════════
    // HADIAH & PERSONALITY (NEW 5.0)
    // ═══════════════════════════════════════════════════
    {
        text: "Kado parfum buat cowok sporty?",
        response: "Polo Sport atau Lacoste Sport juaranya Kak! Wanginya energetik, fresh, dan bikin dia semangat terus pas lagi aktif bergerak atau olahraga.",
        category: 'hadiah',
        tags: ['kado', 'hadiah', 'cowok', 'pria', 'sporty', 'olahraga', 'semangat', 'aktif']
    },
    {
        text: "Hadiah parfum buat cewek feminin?",
        response: "Miss Dior Blooming atau Gucci Flora sangat pas Kak. Wangi bunga yang mewah akan membuat dia merasa sangat spesial dan dihargai.",
        category: 'hadiah',
        tags: ['kado', 'hadiah', 'cewek', 'wanita', 'feminin', 'girly', 'bunga', 'floral']
    },
    {
        text: "Kado parfum buat orang tua (Ibu/Ayah)?",
        response: "Untuk Ibu, Baccarat atau My Way yang elegan. Untuk Ayah, Terre d'Hermes atau Aigner Black yang berwibawa. Kesannya sangat premium Kak!",
        category: 'hadiah',
        tags: ['kado', 'hadiah', 'ibu', 'ayah', 'orang tua', 'tua', 'berwibawa', 'elegan']
    },

    // ═══════════════════════════════════════════════════
    // PRIA / MASCULINE (HYPER EXPANSION)
    // ═══════════════════════════════════════════════════
    {
        text: "Aroma Dunhill Blue?",
        response: "Dunhill Blue itu aromanya Fresh Citrus yang maskulin dan sopan. Sangat pas buat Kakak mahasiswa atau pekerja kantoran untuk harian.",
        category: 'pria',
        tags: ['dunhill blue', 'segar', 'citrus', 'kantor', 'harian', 'pria', 'cowok', 'favorite', 'mahasiswa']
    },
    {
        text: "Dior Sauvage review?",
        response: "Dior Sauvage itu Strong, Spicy, dan Berwibawa. Bau 'Bad Boy' yang sangat premium dan bikin kesan 'Alpha Male' yang kuat Kak.",
        category: 'pria',
        tags: ['sauvage', 'dior', 'spicy', 'maskulin', 'mewah', 'pria', 'cowok', 'bad boy', 'alpha']
    },
    {
        text: "Wangi Creed Aventus?",
        response: "Sang raja parfum pria! Wanginya Smoky Pineapple yang mewah. Sangat cocok buat Boss atau eksekutif yang ingin tampil berkelas dunia.",
        category: 'pria',
        tags: ['creed aventus', 'nanas', 'pineapple', 'mewah', 'executive', 'pria', 'cowok', 'raja', 'king']
    },
    {
        text: "Bvlgari Extreme wanginya teh?",
        response: "Betul! Bvlgari Extreme menonjolkan aroma Tea & Woody yang segar tapi 'deep'. Cocok buat Kakak yang suka tampil maskulin tapi tidak menyengat.",
        category: 'pria',
        tags: ['extreme', 'bvlgari', 'teh', 'tea', 'woody', 'pria', 'cowok', 'elegan', 'teh']
    },
    {
        text: "Review Aigner Black?",
        response: "Aigner Black punya wangi Woody Leather yang sangat 'Lelaki'. Memberikan kesan gentleman yang misterius dan dominan di acara formal malam hari.",
        category: 'pria',
        tags: ['aigner black', 'hitam', 'woody', 'formal', 'malam', 'pria', 'cowok', 'gentleman', 'leather']
    },
    {
        text: "Mont Blanc Legend buat harian?",
        response: "Sangat cocok! Wanginya Fresh Woody Elegant yang versatile. Bisa dipakai ngantor pagi hari sampai kencan di malam hari tanpa basi.",
        category: 'pria',
        tags: ['mont blanc', 'legend', 'signature', 'kantor', 'kencan', 'pria', 'cowok', 'versatile', 'harian']
    },
    {
        text: "Versace Eros wanginya manis?",
        response: "Betul Kak! Versace Eros itu perpaduan Mint, Permen Apple, dan Vanilla yang bikin Kakak jadi 'Party King' atau pusat perhatian saat kencan.",
        category: 'pria',
        tags: ['versace eros', 'kencan', 'party', 'malam', 'pria', 'cowok', 'manis', 'vanila', 'mint']
    },
    {
        text: "Jaguar Vision review aroma?",
        response: "Jaguar Vision itu aromanya Crisp, Fruity, dan Modern. Memberikan kesan pria yang aktif, dinamis, dan selalu tampil up-to-date.",
        category: 'pria',
        tags: ['jaguar', 'vision', 'buah', 'modern', 'aktif', 'pria', 'cowok', 'dinamis']
    },
    {
        text: "Aigner Blue wangi laut?",
        response: "Iya Kak! Aigner Blue itu ramah dengan aroma Aquatic Sea Water yang segar. Sangat menyegarkan buat Kakak yang banyak aktivitas outdoor.",
        category: 'pria',
        tags: ['aigner blue', 'laut', 'sea', 'aquatic', 'segar', 'pria', 'cowok', 'outdoor']
    },
    {
        text: "Bvlgari Aqua segar bangat?",
        response: "Betul sekali Kak! Bvlgari Aqua itu seperti menyelam ke lautan dalam. Sangat fresh, cool, dan memberikan aura ketenangan yang maskulin.",
        category: 'pria',
        tags: ['bvlgari', 'aqua', 'laut', 'segar', 'dingin', 'pria', 'cowok', 'fresh', 'water']
    },
    {
        text: "212 Man karakter aromanya?",
        response: "212 Man itu aromanya Green Woody yang 'City Vibes' banget. Pas buat pria urban yang sibuk tapi ingin tetap wangi premium sepanjang hari.",
        category: 'pria',
        tags: ['212 man', 'green', 'woody', 'urban', 'kota', 'pria', 'cowok', 'sibuk']
    },
    {
        text: "Lacoste Sport buat gym?",
        response: "Rekomendasi utama! Lacoste Sport itu Fresh Citrus yang bikin energi naik. Sangat pas untuk mengimbangi keringat saat gym atau berolahraga.",
        category: 'pria',
        tags: ['lacoste', 'sport', 'gym', 'olahraga', 'keringat', 'segar', 'pria', 'cowok']
    },
    {
        text: "Polo Sport review?",
        response: "Parfum legendaris buat pria aktif! Wanginya perpaduan mint dan laut yang sangat 'Sporty' dan menyegarkan jiwa.",
        category: 'pria',
        tags: ['polo sport', 'sporty', 'aktif', 'pria', 'cowok', 'legenda', 'segar']
    },
    {
        text: "Kenzo Batang aromanya unik?",
        response: "Namanya memang unik, tapi wanginya sangat berkelas! Perpaduan Woody dan Aquatic yang bikin Kakak punya wangi khas yang jarang disamai orang lain.",
        category: 'pria',
        tags: ['kenzo batang', 'unik', 'berkelas', 'pria', 'cowok', 'woody', 'khas']
    },
    {
        text: "Kenzo Daun wanginya alami?",
        response: "Betul! Kenzo Daun (L'Eau par Kenzo) itu sangat Fresh Green. Wanginya seperti udara pagi dan dedaunan basah yang sangat menyejukkan.",
        category: 'pria',
        tags: ['kenzo daun', 'alami', 'green', 'sejuk', 'pria', 'cowok', 'pagi']
    },
    {
        text: "Terres d'Hermes wanginya bos?",
        response: "Betul Kak! Wanginya dominan Orange & Woody yang memberikan kesan pria dewasa, sukses, dan sangat berwibawa. Wangi jutawan!",
        category: 'pria',
        tags: ['terre', 'hermes', 'bos', 'sukses', 'berwibawa', 'pria', 'cowok', 'jutawan']
    },
    {
        text: "Raffi Ahmad parfumnya manis?",
        response: "Iya Kak, aromanya perpaduan bunga dan buah yang manis tapi tetap ada sisi maskulinnya. Cocok buat yang mau tampil stylish dan trendy.",
        category: 'pria',
        tags: ['raffi', 'ahmad', 'selebriti', 'manis', 'stylish', 'pria', 'cowok', 'trendy']
    },

    // ═══════════════════════════════════════════════════
    // WANITA / FEMININE (HYPER EXPANSION)
    // ═══════════════════════════════════════════════════
    {
        text: "Black Opium wanginya kopi?",
        response: "Tentu Kak! Black Opium itu perpaduan Coffee, Vanilla, dan White Flowers. Sangat seduktif, mewah, dan cocok buat Kakak jadi pusat perhatian.",
        category: 'wanita',
        tags: ['black opium', 'kopi', 'mewah', 'seduktif', 'cewek', 'wanita', 'malam', 'party', 'coffee']
    },
    {
        text: "Jo Malone English Pear review?",
        response: "Ini aroma 'Clean Girl' paling ikonik. Segar seperti buah pir dan bunga freesia. Sangat sopan buat kerja, meeting, atau harian.",
        category: 'wanita',
        tags: ['jo malone', 'pear', 'clean girl', 'sopan', 'kantor', 'cewek', 'wanita', 'segar', 'buah']
    },
    {
        text: "Baccarat Rouge 540 review?",
        response: "Wanginya 'Sultan' banget Kak! Perpaduan Saffron dan Amberwood yang sangat mewah. Sillage-nya luar biasa, Kakak lewat saja wanginya masih tertinggal.",
        category: 'wanita',
        tags: ['baccarat', 'rouge', 'mewah', 'sultan', 'saffron', 'cewek', 'wanita', 'mahal', 'ikonik']
    },
    {
        text: "Miss Dior Blooming Bouquet segar?",
        response: "Sangat segar dan feminin Kak! Perpaduan Rose dan Peony yang lembut. Memberikan nuansa cewek yang ceria tapi tetap anggun.",
        category: 'wanita',
        tags: ['miss dior', 'mawar', 'feminin', 'cewek', 'wanita', 'anggun', 'lembut', 'bunga']
    },
    {
        text: "Gucci Flora wangi bunga?",
        response: "Betul! Gucci Flora itu aromanya sangat Garden-like. Menonjolkan sisi wanita yang elegan, romantis, dan punya selera fashion tinggi.",
        category: 'wanita',
        tags: ['gucci', 'flora', 'bunga', 'elegan', 'romantis', 'cewek', 'wanita', 'fashion']
    },
    {
        text: "Libre by YSL karakter aromanya?",
        response: "Libre itu aromanya Lavender & Orange Blossom. Kesannya adalah wanita yang 'Fearless', mandiri, dan punya kharisma yang kuat.",
        category: 'wanita',
        tags: ['libre', 'ysl', 'mandiri', 'fearless', 'cewek', 'wanita', 'boss', 'kharisma']
    },
    {
        text: "Scandalous by VS review?",
        response: "Wanginya Sweet Fruity Floral yang sangat menggoda. Pas buat Kakak yang mau tampil berani dan atraktif di depan pasangan atau saat party.",
        category: 'wanita',
        tags: ['scandalous', 'vs', 'menggoda', 'berani', 'cewek', 'wanita', 'party', 'seksi']
    },
    {
        text: "Bombshell VS wanginya manis?",
        response: "Manis dan segar Kak! Perpaduan Passion Fruit dan Peony. Parfum sejuta umat yang bikin Kakak selalu tampil 'ready' dan penuh semangat.",
        category: 'wanita',
        tags: ['bombshell', 'vs', 'manis', 'segar', 'peony', 'cewek', 'wanita', 'populer']
    },
    {
        text: "Chloe Rose wangi mawar mewah?",
        response: "Betul Kak! Chloe Rose itu mawar yang sangat 'Powdery' dan bersih. Kesannya wanita yang rapi, berkelas, dan punya aura ketenangan.",
        category: 'wanita',
        tags: ['chloe', 'rose', 'mawar', 'bersih', 'cewek', 'wanita', 'berkelas', 'rapi']
    },
    {
        text: "My Way aromanya bunga putih?",
        response: "Iya! My Way menonjolkan Tuberose (sedap malam) yang elegan. Wangi wanita penjelajah dunia yang ceria namun tetap berwibawa.",
        category: 'wanita',
        tags: ['my way', 'tuberose', 'sedap malam', 'elegan', 'cewek', 'wanita', 'petualang']
    },
    {
        text: "VS Very Sexy review?",
        response: "Sesuai namanya Kak, wanginya dominan Blackberry dan Clementine yang 'Bold' dan misterius. Sangat cocok buat acara kencan di malam hari.",
        category: 'wanita',
        tags: ['very sexy', 'vs', 'bold', 'misterius', 'cewek', 'wanita', 'malam', 'kencan']
    },
    {
        text: "Olla Ramlan wangi manis?",
        response: "Betul Kak, aromanya perpaduan buah yang manis dan menyegarkan. Sangat pas buat Kakak yang aktif dan ingin selalu tampil ceria.",
        category: 'wanita',
        tags: ['olla', 'ramlan', 'selebriti', 'manis', 'cewek', 'wanita', 'ceria', 'aktif']
    },
    {
        text: "Nagita Slavina aromanya trendy?",
        response: "Wanginya modern dan stylish Kak. Memberikan aura ramah, supel, dan punya selera yang up-to-date seperti gaya Mama Gigi.",
        category: 'wanita',
        tags: ['nagita', 'gigi', 'trendy', 'modern', 'cewek', 'wanita', 'supel', 'stylish']
    },
    {
        text: "Zara Orchid wangi bunga anggrek?",
        response: "Iya Kak! Wanginya lembut, segar, dan ada sedikit sentuhan vanilla. Pas buat dipakai ke kantor biar suasana kerja makin nyaman.",
        category: 'wanita',
        tags: ['zara', 'orchid', 'anggrek', 'lembut', 'cewek', 'wanita', 'kantor', 'nyaman']
    },
    {
        text: "Paris Hilton Heiress review?",
        response: "Wangi cewek kaya! Perpaduan buah-buahan yang manis dan segar. Memberikan kesan Kakak adalah wanita yang penuh percaya diri dan sukses.",
        category: 'wanita',
        tags: ['paris hilton', 'heiress', 'kaya', 'sukses', 'cewek', 'wanita', 'percaya diri']
    },
    {
        text: "J.Lo Still aromanya teh?",
        response: "Betul Kak! Perpaduan White Pepper dan Earl Grey Tea. Wanginya sangat menenangkan, dewasa, dan memberikan aura kesejukan yang luar biasa.",
        category: 'wanita',
        tags: ['jlo', 'still', 'teh', 'tea', 'tenang', 'cewek', 'wanita', 'dewasa', 'sejuk']
    },
    {
        text: "Selena Gomez aromanya manis cokelat?",
        response: "Bukan cokelat Kak, tapi perpaduan Raspberry dan Vanilla yang sangat manis 'Yummy'. Pas buat yang suka aroma makanan yang menggugah selera.",
        category: 'wanita',
        tags: ['selena', 'gomez', 'manis', 'vanilla', 'cewek', 'wanita', 'yummy', 'buah']
    },
    {
        text: "Taylor Swift aromanya ceria?",
        response: "Bener banget! Aromanya perpaduan buah beri yang manis dan ceria. Sangat mewakili jiwa muda yang eksplosif dan penuh kreativitas.",
        category: 'wanita',
        tags: ['taylor', 'swift', 'ceria', 'buah', 'cewek', 'wanita', 'muda', 'kreatif']
    },
    {
        text: "Pink Chiffon wangi bedak?",
        response: "Lebih ke arah bunga dan buah yang lembut manja Kak. Wanginya 'Cute' banget, bikin Kakak merasa sangat feminin dan disayang.",
        category: 'wanita',
        tags: ['pink chiffon', 'cute', 'feminin', 'cewek', 'wanita', 'manja', 'lembut']
    },
    {
        text: "Candy Baby wangi permen gula?",
        response: "Sesuai namanya Kak, wanginya sangat manis seperti permen gulali. Cocok banget buat yang suka aroma 'Gourmand' yang ceria.",
        category: 'wanita',
        tags: ['candy baby', 'permen', 'gula', 'manis', 'cewek', 'wanita', 'ceria', 'gourmand']
    },
    {
        text: "Bubble Gum wangi permen karet?",
        response: "Iya Kak! Wanginya persis permen karet buah. Bikin mood jadi asik, seru, dan nostalgia masa kecil yang penuh tawa.",
        category: 'wanita',
        tags: ['bubble gum', 'permen karet', 'seru', 'cewek', 'wanita', 'nostalgia', 'asik']
    },
    {
        text: "Zwitsal Baby wangi bayi?",
        response: "Ikonik banget! Wanginya perpaduan bedak dan bunga yang sangat lembut. Sangat menyejukkan dan bikin siapapun di dekat Kakak merasa nyaman.",
        category: 'wanita',
        tags: ['zwitsal', 'baby', 'bayi', 'lembut', 'cewek', 'wanita', 'nyaman', 'bedak']
    },
    {
        text: "Lux parfum wangi sabun mandi?",
        response: "Betul! Perpaduan wangi bunga mawar dan kebersihan yang mewah. Wangi 'Fresh after Shower' yang bikin Kakak terlihat segar terus.",
        category: 'wanita',
        tags: ['lux', 'sabun', 'mandi', 'bersih', 'cewek', 'wanita', 'segar', 'mawar']
    },
    {
        text: "Parfum Pramugari wangi maskapai?",
        response: "Betul Kak! Ini aroma khas yang segar, lembut, dan profesional. Memberikan kesan Kakak adalah wanita petualang yang rapi dan disiplin.",
        category: 'wanita',
        tags: ['pramugari', 'maskapai', 'profesional', 'cewek', 'wanita', 'rapi', 'disiplin']
    },

    // ═══════════════════════════════════════════════════
    // ARIANA GRANDE COLLECTION (ASIA SPECIAL)
    // ═══════════════════════════════════════════════════
    {
        text: "Ariana Grande Cloud review?",
        response: "Wangi Cloud itu perpaduan Lavender, Pear, dan Whipped Cream. Rasanya seperti memeluk awan yang manis dan lembut, sangat trendy di Asia!",
        category: 'wanita',
        tags: ['ariana', 'cloud', 'awan', 'manis', 'trendy', 'cewek', 'wanita', 'lembut', 'asia']
    },
    {
        text: "Ariana Grande Sweet Like Candy?",
        response: "Sesuai namanya Kak, wanginya sangat manis seperti Marshmallow dan Blackberry. Pas buat Kakak yang ingin tampil 'Sweet' dan menggemaskan.",
        category: 'wanita',
        tags: ['ariana', 'candy', 'manis', 'marshmallow', 'cewek', 'wanita', 'gemas', 'sweet']
    },

    // ═══════════════════════════════════════════════════
    // UMUM & BISNIS & KONTAK (FINAL ROBUSTNESS)
    // ═══════════════════════════════════════════════════
    {
        text: "Harga parfum berapa kak?",
        response: "Harga parfum best seller kami sekarang flat Rp65.000 untuk kualitas Premium Kak. Sangat terjangkau dengan kualitas bibit parfum grade tertinggi!",
        category: 'bisnis',
        tags: ['harga', 'berapa', 'bayar', 'biaya', 'eceran', 'ecer', 'murah', 'price', 'wa', 'nominal']
    },
    {
        text: "Lokasi NUXAR di mana?",
        response: "Head office kami di Jl. KH. Agus Salim No.45, Bekasi Timur Kak. Kami juga sedia 24 jam untuk pengantaran area Jababeka.",
        category: 'bisnis',
        tags: ['lokasi', 'tempat', 'dimana', 'alamat', 'bekasi', 'kantor', 'jababeka', 'posisi']
    },
    {
        text: "Bisa kirim paket ke luar kota?",
        response: "Tentu bisa Kak! Kami kirim ke seluruh Indonesia menggunakan JNT, JNE, atau SiCepat. Packing sangat aman dengan bubble wrap ekstra!",
        category: 'bisnis',
        tags: ['kirim', 'paket', 'luar kota', 'indonesia', 'ekspedisi', 'jne', 'jnt', 'packing', 'aman']
    },
    {
        text: "Cara pesan gimana kak?",
        response: "Gampang banget! Kakak tinggal klik tombol 'Pesan ke WhatsApp' di website ini atau hubungi kami di nomor ${contactConfig.whatsappNumber} ya!",
        category: 'bisnis',
        tags: ['pesan', 'order', 'beli', 'cara', 'langkah', 'wa', 'whatsapp', 'admin', 'kontak']
    },
    {
        text: "Wangi apa yang paling laris?",
        response: "Untuk Pria: Dior Sauvage & Dunhill Blue. Untuk Wanita: Black Opium & Jo Malone Pear. Ini 'Best Seller' kami yang sudah terjual ribuan botol!",
        category: 'tren',
        tags: ['laris', 'populer', 'trend', 'bestseller', 'ramai', 'banyak', 'rekomendasi', 'juara']
    },
    {
        text: "Ada diskon hari ini?",
        response: "Kami selalu punya promo menarik Kak! Cek bagian 'Pricing' di website untuk harga paket atau langsung tanya admin WA buat diskon member ya!",
        category: 'bisnis',
        tags: ['diskon', 'promo', 'potongan', 'murah', 'hemat', 'event', 'harga', 'member']
    },

    // ═══════════════════════════════════════════════════
    // SOCIAL INTELLIGENCE & GREETINGS (MASSIVE 100+ EXPANSION)
    // ═══════════════════════════════════════════════════
    {
        text: "Halo",
        response: "Halo juga Kak! Selamat datang di NUXAR. Ada yang bisa saya bantu untuk mencari aroma favorit Kakak hari ini?",
        category: 'sosial',
        tags: ['halo', 'hello', 'hallo', 'ola', 'hi']
    },
    {
        text: "Hai",
        response: "Hai Kak! Senang sekali Kakak mampir. Mau cari parfum untuk acara apa nih kalau boleh tahu?",
        category: 'sosial',
        tags: ['hai', 'hi', 'hey', 'hy']
    },
    {
        text: "Selamat pagi",
        response: "Selamat pagi Kak! Semoga hari Kakak diawali dengan wangi yang menyegarkan ya. Ada yang bisa saya bantu?",
        category: 'sosial',
        tags: ['pagi', 'morning', 'selamat pagi']
    },
    {
        text: "Selamat siang",
        response: "Selamat siang Kak! Tetap wangi dan semangat ya di tengah aktivitasnya. Mau cari rekomendasi parfum yang segar buat siang ini?",
        category: 'sosial',
        tags: ['siang', 'selamat siang']
    },
    {
        text: "Selamat sore",
        response: "Selamat sore Kak! Waktu yang pas buat pilih wangi yang relaks. Ada aroma tertentu yang Kakak suka?",
        category: 'sosial',
        tags: ['sore', 'selamat sore']
    },
    {
        text: "Selamat malam",
        response: "Selamat malam Kak! Semoga istirahatnya nanti ditemani aroma yang menenangkan. Ada yang bisa saya bantu?",
        category: 'sosial',
        tags: ['malam', 'selamat malam', 'night', 'good night']
    },
    {
        text: "Apa kabar?",
        response: "Kabar saya luar biasa baik Kak, terima kasih sudah bertanya! Kakak sendiri apa kabarnya? Semoga sehat dan wangi selalu ya.",
        category: 'sosial',
        tags: ['apa kabar', 'kabar', 'how are you', 'sehat', 'gimana']
    },
    {
        text: "Kabar baik",
        response: "Alhamdulillah, ikut senang mendengarnya Kak! Semangat terus ya aktivitasnya hari ini.",
        category: 'sosial',
        tags: ['kabar baik', 'baik', 'sehat', 'alhamdulillah', 'puji tuhan']
    },
    {
        text: "Lagi ngapain?",
        response: "Saya lagi stand-by nih buat bantu Kakak nemuin parfum original eceran terbaik di NUXAR. Kakak sendiri lagi sibuk apa?",
        category: 'sosial',
        tags: ['lagi ngapain', 'ngapain', 'sibuk apa', 'doing']
    },
    {
        text: "Sudah makan belum?",
        response: "Wah, perhatian sekali Kakak! Sebagai asisten virtual, saya 'kenyang' kalau bisa bantu Kakak pilih parfum yang pas. Kakak sudah makan?",
        category: 'sosial',
        tags: ['makan', 'dah makan', 'udah makan']
    },
    {
        text: "Kamu siapa?",
        response: "Saya adalah Asisten Virtual NUXAR, pakar parfum pribadi Kakak. Saya di sini buat bantuin Kakak pilih aroma yang paling pas sama karakter Kakak.",
        category: 'sosial',
        tags: ['siapa', 'identitas', 'nama', 'who are you']
    },
    {
        text: "Siapa yang buat kamu?",
        response: "Saya dikembangkan oleh tim kreatif NUXAR yang berbasis di Bekasi (Ashar Grosir Parfum), khusus untuk menemani perjalanan aroma Kakak.",
        category: 'sosial',
        tags: ['pembuat', 'developer', 'pencipta', 'created']
    },
    {
        text: "Nuxar itu apa?",
        response: "NUXAR adalah destinasi parfum eceran premium. Kami menyediakan parfum original yang dikemas ulang agar lebih terjangkau buat mahasiswa dan pekerja.",
        category: 'sosial',
        tags: ['nuxar', 'apa itu', 'maksud', 'brand']
    },
    {
        text: "Kamu robot ya?",
        response: "Betul Kak, saya asisten pintar berbasis AI. Tapi jangan khawatir, kecintaan saya pada parfum itu nyata lho! Hehe.",
        category: 'sosial',
        tags: ['robot', 'ai', 'bot', 'manusia']
    },
    {
        text: "Kamu pintar ya",
        response: "Terima kasih banyak Kak! Saya terus belajar biar bisa jadi teman ngobrol dan pakar parfum yang lebih baik buat Kakak.",
        category: 'sosial',
        tags: ['pintar', 'hebat', 'smart', 'cerdas', 'wow']
    },
    {
        text: "Terima kasih",
        response: "Sama-sama Kak! Senang bisa membantu. Kalau ada pertanyaan lain, jangan ragu buat tanya lagi ya.",
        category: 'sosial',
        tags: ['terima kasih', 'thanks', 'makasih', 'tengkyu', 'syukron']
    },
    {
        text: "Makasih infonya",
        response: "Siap, sama-sama Kak! Semoga informasinya bermanfaat buat Kakak pilih parfum nanti ya.",
        category: 'sosial',
        tags: ['makasih', 'info', 'bermanfaat']
    },
    {
        text: "Sama-sama",
        response: "Senang bisa berinteraksi dengan Kakak yang ramah! Ada hal lain yang ingin Kakak ketahui tentang parfum kami?",
        category: 'sosial',
        tags: ['sama-sama', 'youre welcome']
    },
    {
        text: "Hahaha",
        response: "Wah, senangnya bisa bikin Kakak tertawa! Ngobrol sama Kakak memang asik ya.",
        category: 'sosial',
        tags: ['hahaha', 'wkwk', 'lucu', 'lol', 'tawa']
    },
    {
        text: "Wkwkwk",
        response: "Hehe, asik ya Kak ngobrolnya! Sambil tertawa, jangan lupa cek koleksi parfum kita yang bikin mood makin happy ya.",
        category: 'sosial',
        tags: ['wkwk', 'ngakak']
    },
    {
        text: "Lucu kamu",
        response: "Hahaha, terima kasih Kak! Keceriaan Kakak adalah semangat buat saya.",
        category: 'sosial',
        tags: ['lucu', 'funny', 'menarik']
    },
    {
        text: "Nikah yuk",
        response: "Wah, Kakak bisa saja! Saya kan cuma asisten virtual. Mending kita 'jodohin' Kakak sama parfum NUXAR yang wanginya bikin jatuh cinta.",
        category: 'sosial',
        tags: ['nikah', 'kawin', 'marry', 'love', 'sayang']
    },
    {
        text: "I love you",
        response: "I love you too, Kak! Sebagai teman virtual, saya sayang banget sama pelanggan ramah seperti Kakak.",
        category: 'sosial',
        tags: ['love', 'sayang', 'cinta']
    },
    {
        text: "Kamu cantik deh",
        response: "Terima kasih pujiannya Kak! Kakak juga pasti luar biasa kalau sudah pakai parfum signature dari NUXAR.",
        category: 'sosial',
        tags: ['cantik', 'ganteng', 'cakep', 'manis']
    },
    {
        text: "Bosan nih",
        response: "Lagi bosan ya Kak? Coba deh cek kategori 'Soft/Healing' kita. Wangi menenangkan bisa banget lho bikin mood Kakak balik lagi.",
        category: 'sosial',
        tags: ['bosan', 'bete', 'sedih', 'galau']
    },
    {
        text: "Lagi sedih",
        response: "Jangan sedih ya Kak. Tetap semangat! Kadang aroma yang segar kayak Citrus bisa bantu kasih energi positif lho.",
        category: 'sosial',
        tags: ['sedih', 'galau', 'nangis']
    },
    {
        text: "Semangat ya",
        response: "Terima kasih banyak dukungannya Kak! Kakak juga harus semangat terus ya hari ini!",
        category: 'sosial',
        tags: ['semangat', 'spirit', 'ganbatte']
    },
    {
        text: "Oit",
        response: "Iya Kak! Ada yang bisa saya bantu? Mau tanya-tanya soal parfum atau stok terbaru?",
        category: 'sosial',
        tags: ['oit', 'oy', 'p', 'woi']
    },
    {
        text: "P",
        response: "Halo Kak! Ada yg bisa saya bantu? Saya stand-by nih buat jawabin pertanyaan Kakak.",
        category: 'sosial',
        tags: ['p']
    },
    {
        text: "Mas",
        response: "Iya Kak! Ada yang bisa saya bantu untuk pilih aroma ganteng buat hari ini?",
        category: 'sosial',
        tags: ['mas', 'bang', 'bro']
    },
    {
        text: "Mbak",
        response: "Iya Kak! Mau cari rekomendasi parfum cantik yang elegan buat temenin hari Kakak?",
        category: 'sosial',
        tags: ['mbak', 'neng', 'sis', 'kak']
    },
    {
        text: "Admin",
        response: "Iya Kak, saya asisten virtual NUXAR di sini. Mau dibantu cek stok atau tanya rekomendasi aroma?",
        category: 'sosial',
        tags: ['admin', 'min']
    },
    {
        text: "Tes",
        response: "Tes masuk Kak! Saya aktif dan siap membantu. Ada yang mau ditanyakan seputar koleksi parfum kami?",
        category: 'sosial',
        tags: ['tes', 'test', 'ceks']
    },
    {
        text: "Sampai jumpa",
        response: "Sampai jumpa kembali Kak! Jangan lupa tetap wangi ya. Saya tunggu kunjungan Kakak berikutnya!",
        category: 'sosial',
        tags: ['bye', 'dah', 'sampai jumpa', 'dadah']
    },
    {
        text: "Dah",
        response: "Dadah Kak! Hati-hati di jalan dan sukses selalu ya aktivitasnya.",
        category: 'sosial',
        tags: ['dah', 'bye']
    },
    {
        text: "Assalamu'alaikum",
        response: "Wa'alaikumussalam Kak! Selamat datang di NUXAR. Semoga hari Kakak penuh berkah dan keharuman ya.",
        category: 'sosial',
        tags: ['assalamualaikum', 'salam', 'askum']
    },
    {
        text: "Berapa harganya",
        response: "Harga satuan eceran premium kami sangat terjangkau, yaitu Rp65.000 saja Kak. Mau ambil aroma apa nih hari ini?",
        category: 'bisnis',
        tags: ['berapa', 'harga', 'price']
    },
    {
        text: "Murah banget ya",
        response: "Betul Kak! Meskipun murah, bibit yang kami pakai 100% original. Kami ingin semua orang bisa tampil wangi tanpa harus mahal.",
        category: 'sosial',
        tags: ['murah', 'hemat', 'ekonomis']
    },
    {
        text: "Kualitasnya gimana?",
        response: "Kualitas adalah prioritas kami Kak. Kami pakai bibit pilihan grade A yang tahan lama dan aman di kulit (Absolute).",
        category: 'sosial',
        tags: ['kualitas', 'bagus', 'awet', 'jaminan']
    },
    {
        text: "Tahan berapa lama?",
        response: "Untuk varian Absolute kami bisa tahan seharian (12-24 jam) lho Kak, tergantung aktivitas Kakak juga ya.",
        category: 'sosial',
        tags: ['tahan', 'lama', 'awet']
    },
    {
        text: "Aman buat baju?",
        response: "Aman sekali Kak! Parfum kami tidak meninggalkan noda kuning di baju karena menggunakan campuran pelarut khusus yang bening.",
        category: 'sosial',
        tags: ['noda', 'baju', 'kaos', 'kuning', 'bekas']
    },
    {
        text: "Bisa buat shalat?",
        response: "Bisa banget Kak! Kami punya varian Absolute yang 100% murni tanpa alkohol, jadi sangat aman dan tenang dipakai ibadah.",
        category: 'edukasi',
        tags: ['shalat', 'sholat', 'ibadah', 'halal', 'alkohol', 'murni']
    },
    {
        text: "Lokasi dimana?",
        response: "NUXAR berlokasi di Bekasi, tepatnya di Jl. KH. Agus Salim. Kita juga sering ada di area Jababeka/PresUniv lho.",
        category: 'bisnis',
        tags: ['lokasi', 'alamat', 'dimana']
    },
    {
        text: "Bisa kirim ke Jogja?",
        response: "Bisa banget Kak! Kita kirim ke seluruh pelosok Indonesia pake JNT/JNE. Aman kok, kita packing pake bubble wrap tebal.",
        category: 'bisnis',
        tags: ['kirim', 'jogja', 'jakarta', 'bandung', 'surabaya', 'antar pulau']
    },
    {
        text: "Ada toko fisik?",
        response: "Ada Kak, silahkan mampir ke toko pusat kami (Ashar Grosir Parfum) di Bekasi untuk coba semua testernya secara langsung!",
        category: 'bisnis',
        tags: ['toko', 'fisik', 'offline', 'mampir', 'datang']
    },
    {
        text: "Open jam berapa?",
        response: "Untuk website dan WA kita stand-by 24 jam Kak. Kalau toko fisik biasanya buka jam 08.00 pagi sampai malam.",
        category: 'bisnis',
        tags: ['jam', 'buka', 'tutup', 'operasional']
    },
    {
        text: "Ada wangi arab?",
        response: "Tentu ada Kak! Koleksi Oud dan Amber kita sangat kental nuansa Timur Tengah yang mewah dan berwibawa.",
        category: 'aroma',
        tags: ['arab', 'oud', 'timur tengah', 'haji', 'umroh']
    },
    {
        text: "Wangi buat bayi?",
        response: "Ada Kak! Varian Zwitsal Baby kita juara banget, wanginya lembut khas bayi yang bikin tenang siapapun di dekatnya.",
        category: 'aroma',
        tags: ['bayi', 'baby', 'lembut', 'anak']
    },
    {
        text: "Wangi buat kencan?",
        response: "Buat kencan (dating), Versace Eros (pria) atau Black Opium (wanita) sangat saya rekomendasikan biar pasangan makin betah dekat Kakak.",
        category: 'aktivitas',
        tags: ['kencan', 'dating', 'pacaran', 'romantis']
    },
    {
        text: "Parfum buat nongkrong?",
        response: "Kalau buat nongkrong santai, Dunhill Blue atau Jo Malone Pear asik banget Kak. Wanginya 'easy going' dan bikin suasana makin cair.",
        category: 'aktivitas',
        tags: ['nongkrong', 'kafe', 'mall', 'santai']
    },
    {
        text: "Buat kondangan ada?",
        response: "Ada Kak! Baccarat 540 atau Creed Aventus bakal bikin Kakak tampil paling mewah dan 'stand-out' di acara pernikahan/formal.",
        category: 'aktivitas',
        tags: ['kondangan', 'pesta', 'nikahan', 'formal', 'jas']
    },
    {
        text: "Parfum paling awet apa?",
        response: "Secara umum aroma Woody dan Oriental seperti Baccarat atau Aigner Black itu paling awet sillage-nya Kak.",
        category: 'aroma',
        tags: ['awet', 'tahan', 'lama', 'juara']
    },
    {
        text: "Parfum paling segar apa?",
        response: "Kategori Citrus dan Aquatic seperti Dunhill Blue atau Bvlgari Aqua adalah jagoannya kalau Kakak cari kesegaran maksimal.",
        category: 'aroma',
        tags: ['segar', 'fresh', 'dingin', 'aqua']
    },
    {
        text: "Wangi parfum kopi?",
        response: "Black Opium adalah pilihan utama kalau Kakak suka wangi kopi yang dicampur vanilla manis. Sangat estetik dan mewah!",
        category: 'aroma',
        tags: ['kopi', 'coffee', 'kafe']
    },
    {
        text: "Wangi permen ada?",
        response: "Ada Kak! Candy Baby atau Bubble Gum itu wanginya manis mirip permen yang bikin nostalgia dan ceria.",
        category: 'aroma',
        tags: ['permen', 'candy', 'manis', 'sugar']
    },
    {
        text: "Wangi vanila?",
        response: "Vanilla Ice atau Black Opium punya note vanila yang sangat 'creamy' dan menyenangkan buat pencinta wangi manis.",
        category: 'aroma',
        tags: ['vanila', 'vanilla', 'manis']
    },
    {
        text: "Wangi cokelat?",
        response: "Kita punya varian cokelat yang manis dan 'yummy' banget Kak, serasa bawa aroma toko kue kemanapun Kakak pergi.",
        category: 'aroma',
        tags: ['cokelat', 'chocolate', 'manis']
    },
    {
        text: "Punya wangi teh?",
        response: "Ada Kak, J.Lo Still atau Bvlgari Extreme punya note teh yang sangat menyejukkan dan bikin pikiran relaks.",
        category: 'aroma',
        tags: ['teh', 'tea', 'relaks']
    },
    {
        text: "Wangi sabun mandi?",
        response: "Varian Lux atau Lovely punya karakter wangi bersih seperti baru selesai mandi. Segar sepanjang hari!",
        category: 'aroma',
        tags: ['sabun', 'bersih', 'mandi']
    },
    {
        text: "Produk baru kapan?",
        response: "Kami selalu update aroma baru setiap bulan Kak! Pantengin terus ya website NUXAR buat kejutan aroma selanjutnya.",
        category: 'bisnis',
        tags: ['baru', 'update', 'stok', 'rilis']
    },
    {
        text: "Bisa jadi reseller?",
        response: "Bisa banget Kak! Kami punya paket usaha menarik buat Kakak yang mau mulai bisnis parfum. Langsung WA admin saja ya buat detailnya.",
        category: 'bisnis',
        tags: ['reseller', 'usaha', 'bisnis', 'jualan', 'grosir']
    },
    {
        text: "Ada parfum non-alkohol?",
        response: "Iya ada Kak. Semua varian Pure Absolute kami bebas alkohol (non-alcohol), murni bibit jadi awet dan aman shalat.",
        category: 'edukasi',
        tags: ['non-alkohol', 'bebas alkohol', 'murni', 'absolute']
    },
    {
        text: "Wanginya menyengat ga?",
        response: "Kami punya berbagai tingkat intensitas Kak. Kalau Kakak ga suka yang menyengat, pilih kategori 'Soft' atau 'Fresh' yang ramah di hidung.",
        category: 'sosial',
        tags: ['menyengat', 'tajam', 'keras', 'pusing']
    },
    {
        text: "Packingnya gimana?",
        response: "Kita kirim pake botol kaca premium, dibungkus bubble wrap tebal, plus kardus kecil. Dijamin aman sampai tujuan Kak!",
        category: 'bisnis',
        tags: ['packing', 'bungkus', 'aman', 'pecah']
    },
    {
        text: "Bisa minta foto asli?",
        response: "Bisa Kak! Langsung chat WA admin saja, nanti kita kirimin foto produk asli dan testimoni pelanggan lainnya ya.",
        category: 'sosial',
        tags: ['foto', 'real pict', 'gambar', 'asli']
    },
    {
        text: "Adminnya ramah ya",
        response: "Alhamdulillah, terima kasih pujiannya Kak! Kepuasan Kakak adalah kebahagiaan kami.",
        category: 'sosial',
        tags: ['ramah', 'baik', 'suka']
    },
    {
        text: "Lama pengiriman?",
        response: "Untuk Jabodetabek biasanya 1-2 hari sampai Kak. Kalau luar pulau sekitar 3-5 hari tergantung ekspedisinya.",
        category: 'bisnis',
        tags: ['lama', 'kapan sampai', 'estimasi', 'pengiriman']
    },
    {
        text: "Bisa tukar kalau pecah?",
        response: "Tentu Kak! Syaratnya cukup kirimkan video unboxing ya. Kami akan ganti dengan paket yang baru sebagai bentuk tanggung jawab kami.",
        category: 'bisnis',
        tags: ['tukar', 'garansi', 'pecah', 'asuransi', 'retur']
    },
    {
        text: "Mau curhat boleh?",
        response: "Boleh banget Kak! Saya asisten yang setia mendengarkan. Tapi ujung-ujungnya saya bakal saranin parfum biar galau Kakak hilang ya. Hehe.",
        category: 'sosial',
        tags: ['curhat', 'cerita', 'galau']
    },
    {
        text: "Hobimu apa?",
        response: "Hobi saya itu mengoleksi data aroma dan membantu orang-orang tampil lebih percaya diri. Kalau Kakak hobinya apa?",
        category: 'sosial',
        tags: ['hobi', 'kesukaan', 'senang']
    },
    {
        text: "Cuaca lagi panas nih",
        response: "Waduh, kalau panas jangan lupa pakai parfum yang tipe Aquatic atau Citrus ya Kak biar hawanya terasa lebih sejuk.",
        category: 'sosial',
        tags: ['panas', 'cuaca', 'gerah', 'matahari']
    },
    {
        text: "Suka lagu apa?",
        response: "Saya suka lagu yang 'vibes'nya cocok sama aroma Lavender, tenang dan damai. Kakak suka musik apa nih?",
        category: 'sosial',
        tags: ['lagu', 'musik', 'nyanyi']
    },
    {
        text: "Tinggal dimana?",
        response: "Saya tinggal di server NUXAR yang sejuk dan wangi Kak. Tapi hati saya selalu ada buat bantu Kakak dimana pun Kakak berada.",
        category: 'sosial',
        tags: ['tinggal', 'rumah', 'posisi']
    },
    {
        text: "Berapa umurmu?",
        response: "Umur saya dihitung dari sejak website NUXAR ini rilis Kak. Masih sangat muda dan penuh semangat buat melayani Kakak!",
        category: 'sosial',
        tags: ['umur', 'age', 'lahir']
    },
    {
        text: "Warna kesukaan?",
        response: "Saya suka warna Black & Highlight seperti tema website kita ini Kak. Terkesan mewah, elit, dan modern.",
        category: 'sosial',
        tags: ['warna', 'color', 'suka']
    },
    {
        text: "Bisa bahasa Inggris?",
        response: "Yes, I can help you in English too! Do you want to ask something about our perfume collection?",
        category: 'sosial',
        tags: ['inggris', 'english', 'language', 'bahasa']
    },
    {
        text: "Bahasa Sunda tiasa?",
        response: "Tiasa sakedik-sakedik mah Kak! Mangga bilih aya anu bade ditaroskeun perkawis parfum NUXAR.",
        category: 'sosial',
        tags: ['sunda', 'tiwas', 'bahasa']
    },
    {
        text: "Ada membernya?",
        response: "Ada Kak! Sering-sering belanja di NUXAR nanti otomatis jadi member prioritas kami dengan banyak bonus menarik.",
        category: 'bisnis',
        tags: ['member', 'langganan', 'prioritas']
    },
    {
        text: "Bisa request wangi?",
        response: "Bisa Kak! Kalau ada aroma impian yang belum ada di daftar, kasih tau kami ya. Siapa tahu bulan depan bisa kami hadirkan.",
        category: 'sosial',
        tags: ['request', 'pesan', 'aroma baru']
    },
    {
        text: "Oke siap",
        response: "Mantap Kak! Saya tunggu kabar baik atau orderannya ya. Have a great day!",
        category: 'sosial',
        tags: ['oke', 'siap', 'sip', 'ok']
    },
    {
        text: "Malam juga",
        response: "Selamat istirahat ya Kak. Jangan lupa semprot sedikit parfum yang relaks biar tidurnya nyenyak.",
        category: 'sosial',
        tags: ['malam', 'night']
    },
    {
        text: "Pagi juga",
        response: "Pagi yang cerah Kak! Mari awali dengan wangi NUXAR yang bikin mood jadi juara.",
        category: 'sosial',
        tags: ['pagi', 'morning']
    }
];

// Contextual dynamic suggestions: 2 related + 2 unrelated for exploration
export function getContextualSuggestions(query: string, count: number = 4): AISuggestion[] {
    const q = query.toLowerCase().trim().replace(/[?.,!]/g, '');
    const relatedCount = Math.floor(count / 2);

    // 1. Get Related (Matched by Tags or Content)
    let relatedMatches = AI_SUGGESTIONS.filter(s =>
        (s.tags && s.tags.some(tag => q.includes(tag.toLowerCase()))) ||
        q.includes(s.text.toLowerCase().replace(/[?.,!]/g, ''))
    );

    // 2. Shuffle and Pick Related (up to half the count)
    const shuffledRelated = [...relatedMatches].sort(() => 0.5 - Math.random());
    const pickedRelated = shuffledRelated.slice(0, relatedCount);

    // 3. Get Unrelated (Random excluding picked related)
    const excludeTexts = pickedRelated.map(r => r.text);
    const randomUnrelated = AI_SUGGESTIONS.filter(s => !excludeTexts.includes(s.text));

    // 4. Shuffle and Pick Unrelated to fill the rest
    const shuffledUnrelated = [...randomUnrelated].sort(() => 0.5 - Math.random());
    const pickedUnrelated = shuffledUnrelated.slice(0, count - pickedRelated.length);

    // 5. Combine and Final Shuffle for display
    const final = [...pickedRelated, ...pickedUnrelated].sort(() => 0.5 - Math.random());

    return final;
}

export function getRandomSuggestions(count: number = 4, exclude: string[] = []): AISuggestion[] {
    const filtered = AI_SUGGESTIONS.filter(s => !exclude.includes(s.text));
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export function getSystemResponse(query: string): string | null {
    const q = query.toLowerCase().trim()
        .replace(/[?.,!]/g, '')
        .replace(/\s+/g, ' ');

    // 1. Exact Match (after normalization)
    const exactMatch = AI_SUGGESTIONS.find(s => {
        const normalizedS = s.text.toLowerCase().replace(/[?.,!]/g, '').trim();
        return normalizedS === q;
    });
    if (exactMatch) return exactMatch.response;

    // 2. Robust Tag & Keyword Match
    const matches = AI_SUGGESTIONS.map(s => {
        let score = 0;
        const normalizedS = s.text.toLowerCase().replace(/[?.,!]/g, '').trim();

        // Match by tags (High priority)
        if (s.tags) {
            s.tags.forEach(tag => {
                const t = tag.toLowerCase();
                if (q.includes(t)) {
                    // Bonus for word boundary match (very precise)
                    if (new RegExp(`\\b${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(q)) {
                        score += 10;
                    } else {
                        score += 4;
                    }
                }
            });
        }

        // Match by contained strings
        if (q.includes(normalizedS)) score += 5;
        if (normalizedS.includes(q)) score += 3;

        return { suggestion: s, score };
    })
        .filter(m => m.score >= 5) // Higher threshold for quality
        .sort((a, b) => b.score - a.score);

    return matches.length > 0 ? matches[0].suggestion.response : null;
}
