export interface AISuggestion {
    text: string;
    response: string;
    category: 'tren' | 'pria' | 'wanita' | 'karakter' | 'aroma' | 'aktivitas' | 'bisnis' | 'president_univ' | 'alkohol' | 'edukasi' | 'tips' | 'etiket' | 'hadiah' | 'sains';
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
        response: "Harga kami mulai Rp35.000 untuk 30ml Kak. Sangat terjangkau dengan kualitas bibit parfum grade tertinggi di kelasnya!",
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
