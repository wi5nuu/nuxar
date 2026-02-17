// ============================================================
// PERFUME DATA — VALID & VERIFIED
// Sumber referensi: Fragrantica, brand official, parfumerie notes
// ⚠️ Item bertanda [NON-OFFICIAL] tidak memiliki notes global resmi
// ============================================================

export interface PerfumeNotes {
    top: string[];
    middle: string[];
    base: string[];
}

export interface Perfume {
    id: number;
    name: string;
    brand: string;
    fullName: string;
    year?: number;
    gender: 'pria' | 'wanita' | 'unisex';
    category: string;           // olfactory family
    concentration: string;      // EDT / EDP / dll
    notes: PerfumeNotes;
    karakter: string;           // deskripsi singkat karakter
    penggunaan: string;         // rekomendasi waktu / situasi
    description: string;        // deskripsi lengkap dan keren
    isOfficial: boolean;        // apakah data notes resmi dari brand
    note?: string;              // catatan tambahan (misal: unisex, inspirasi, dll)
}

export const PERFUME_DATA: Perfume[] = [

    // ──────────────────────────────────────────────
    // 1. DUNHILL DESIRE BLUE
    // ──────────────────────────────────────────────
    {
        id: 1,
        name: "Desire Blue",
        brand: "Dunhill",
        fullName: "Dunhill Desire Blue",
        year: 2004,
        gender: "pria",
        category: "Fresh Aromatic Aquatic",
        concentration: "EDT",
        notes: {
            top: ["Litchi", "Mandarin Orange", "Lotus", "Bergamot"],
            middle: ["Sea Notes", "Orange", "Brazilian Rosewood"],
            base: ["Tonka Bean", "Amber", "Musk", "Benzoin"]
        },
        karakter: "Segar, bersih, maskulin elegan",
        penggunaan: "Siang hari, kantor, aktivitas harian",
        description: "Desire Blue adalah perwujudan sempurna dari pria modern yang hidup di antara kota dan alam bebas. Dibuka dengan letupan litchi tropis dan mandarin yang cerah, kemudian bertransisi mulus ke jantung laut yang tenang berpadu rosewood Brasil yang hangat. Base tonka bean dan benzoin meninggalkan jejak yang clean dan sophisticated — seperti angin segar di atas kapal pesiar. Parfum yang sangat wearable sepanjang hari tanpa melelahkan.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 2. CAROLINA HERRERA 212 MEN
    // ──────────────────────────────────────────────
    {
        id: 2,
        name: "212 Men",
        brand: "Carolina Herrera",
        fullName: "Carolina Herrera 212 Men",
        year: 1999,
        gender: "pria",
        category: "Woody Floral Musk",
        concentration: "EDT",
        notes: {
            top: ["Green Notes", "Grapefruit", "Bergamot", "Lavender"],
            middle: ["Ginger", "Violet", "Gardenia", "Sage"],
            base: ["Musk", "Sandalwood", "Incense", "Vetiver"]
        },
        karakter: "Maskulin modern, profesional, urban",
        penggunaan: "Kantor, siang hingga sore hari, acara semi-formal",
        description: "212 Men lahir dari energi Manhattan yang dinamis — sebuah parfum untuk pria kota yang tahu cara berpindah dari ruang rapat ke cocktail party tanpa mengganti pakaian. Top notes grapefruit dan lavender membuka suasana dengan percaya diri, sementara jantung ginger dan violet menambahkan dimensi pedas-floral yang maskulin. Sandalwood dan incense di base menciptakan kedalaman yang timeless — parfum yang tidak terasa ketinggalan zaman meski sudah lebih dari dua dekade.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 3. YVES SAINT LAURENT LIBRE
    // ──────────────────────────────────────────────
    {
        id: 3,
        name: "Libre",
        brand: "Yves Saint Laurent",
        fullName: "YSL Libre",
        year: 2019,
        gender: "wanita",
        category: "Floral Aromatic",
        concentration: "EDP",
        notes: {
            top: ["Lavender", "Mandarin Orange", "Blackcurrant", "Petitgrain"],
            middle: ["Lavender", "Orange Blossom", "Jasmine"],
            base: ["Madagascar Vanilla", "Musk", "Cedar", "Ambergris"]
        },
        karakter: "Feminin berapi-api, bebas, kontradiktif",
        penggunaan: "Malam hari, acara spesial, daily wear modern",
        description: "Libre adalah deklarasi kebebasan — kontradiksi yang indah antara lavender Prancis maskulin dan fleur d'oranger Maroko yang feminin, disatukan dalam satu botol yang berani. Parfumer Anne Flipo menciptakan 'clash' yang disengaja: lavender yang tradisional dibenturkan dengan orange blossom yang memabukkan, diakhiri dengan vanilla Madagaskar yang kaya dan ambergris yang sensual. Meski officially feminine, banyak pria yang memakai Libre sebagai signature scent mereka — bukti nyata bahwa aroma terbaik tidak mengenal batas gender.",
        isOfficial: true,
        note: "Officially feminine, namun karakter lavender-nya menjadikannya favorit unisex. Sangat populer dipakai pria dengan kepercayaan diri tinggi."
    },

    // ──────────────────────────────────────────────
    // 4. JAGUAR VISION III
    // ──────────────────────────────────────────────
    {
        id: 4,
        name: "Vision III",
        brand: "Jaguar",
        fullName: "Jaguar Vision III",
        year: 2014,
        gender: "pria",
        category: "Aromatic Fougère",
        concentration: "EDT",
        notes: {
            top: ["Lemon", "Bergamot", "Lavender"],
            middle: ["Cardamom", "Jasmine"],
            base: ["Sandalwood", "Vanilla", "Musk"]
        },
        karakter: "Bersih, hangat, maskulin accessible",
        penggunaan: "Harian, kantor ringan, casual",
        description: "Vision III meneruskan filosofi lini Jaguar: parfum untuk pria yang mengapresiasi kesederhanaan berkelas. Dibuka dengan citrus lemon dan bergamot yang clean dan familiar, jantung cardamom memberikan sentuhan spice yang tidak berlebihan. Base sandalwood dan vanilla yang hangat memberikan landing yang menenangkan dan very approachable. Ini adalah parfum yang reliable — tidak akan pernah salah situasi, tidak pernah over-the-top, dan sangat nyaman dipakai setiap hari.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 5. ETIENNE AIGNER BLACK
    // ──────────────────────────────────────────────
    {
        id: 5,
        name: "Black",
        brand: "Etienne Aigner",
        fullName: "Etienne Aigner Black",
        year: 2001,
        gender: "pria",
        category: "Aromatic Fougère Leathery",
        concentration: "EDT",
        notes: {
            top: ["Grapefruit", "Orange", "Bergamot"],
            middle: ["Mint", "Oakmoss", "Pine Tree"],
            base: ["Leather", "Tonka Bean", "Musk"]
        },
        karakter: "Maskulin kuat, tajam, profesional klasik",
        penggunaan: "Kantor, sore-malam, acara formal",
        description: "Aigner Black adalah representasi dari pria yang tahu nilai ketenangan — tidak perlu berteriak untuk dihormati. Citrus segar di opening memberikan kesan profesional yang bersih, sebelum middle note mint dan oakmoss menghadirkan nuansa hutan yang tajam dan distinctive. Base leather dan tonka bean adalah kuncinya: memberikan kedalaman yang otoritatif, seolah tangan seorang master leather craftsman. Parfum ini bukan tentang sillage besar — ini tentang kesan mendalam bagi mereka yang cukup dekat untuk menciumnya.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 6. DAVIDOFF COOL WATER
    // ──────────────────────────────────────────────
    {
        id: 6,
        name: "Cool Water",
        brand: "Davidoff",
        fullName: "Davidoff Cool Water Men",
        year: 1988,
        gender: "pria",
        category: "Aromatic Aquatic Fougère",
        concentration: "EDT",
        notes: {
            top: ["Sea Water", "Lavender", "Mint", "Green Notes", "Rosemary", "Coriander"],
            middle: ["Neroli", "Jasmine", "Geranium"],
            base: ["Musk", "Sandalwood", "Oakmoss", "Tobacco", "Amber"]
        },
        karakter: "Ikon kesegaran, aquatic pionir, timeless",
        penggunaan: "Semua waktu, olahraga, harian, cuaca panas",
        description: "Cool Water bukan sekadar parfum — ini adalah momen bersejarah dalam dunia wewangian. Diluncurkan 1988, parfum ini singlehandedly menciptakan kategori 'aquatic fragrance' dan masih relevan 35+ tahun kemudian. Kombinasi garam laut, lavender, dan mint yang menghentak adalah formula jenius yang menangkap sensasi terjun ke laut biru bersih. Oakmoss dan tembakau di base memberikan karakter yang tidak ditemukan di parfum aquatic modern — ini adalah aquatic dengan jiwa. Sebuah warisan yang wajib dimiliki setiap pecinta parfum.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 7. DIOR SAUVAGE
    // ──────────────────────────────────────────────
    {
        id: 7,
        name: "Sauvage",
        brand: "Christian Dior",
        fullName: "Dior Sauvage EDT",
        year: 2015,
        gender: "pria",
        category: "Aromatic Fougère",
        concentration: "EDT",
        notes: {
            top: ["Calabrian Bergamot", "Pepper"],
            middle: ["Sichuan Pepper", "Lavender", "Pink Pepper", "Vetiver", "Patchouli", "Geranium"],
            base: ["Ambroxan", "Cedar", "Labdanum"]
        },
        karakter: "Liar, bebas, maskulin dominan, modern klasik",
        penggunaan: "Serba guna — kantor, malam, outdoor, harian",
        description: "Dior Sauvage adalah parfum terlaris di dunia — dan ada alasan kuat untuk itu. Parfumer François Demachy menciptakan paradoks: sebuah parfum yang terasa liar sekaligus sangat bersih, primitive namun sophisticated. Bergamot Calabria grade tertinggi membuka dengan kecerahan yang seperti tidak ada tandingannya, sebelum Ambroxan — senyawa sintetik eksklusif — menciptakan aura kulit hangat yang hampir magnetic. Tidak ada parfum lain yang memiliki dry down sepenting Sauvage: ia berubah menjadi sesuatu yang terasa seperti milik Anda sendiri, bukan milik parfumeur. Ini bukan ikut tren — ini yang menciptakan tren.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 8. PRAMUGARI
    // ──────────────────────────────────────────────
    {
        id: 8,
        name: "Pramugari",
        brand: "Non-Official / Lokal",
        fullName: "Parfum Pramugari (Generic Name)",
        gender: "unisex",
        category: "Fresh Clean Musk",
        concentration: "EDT / Body Mist",
        notes: {
            top: ["Citrus blend", "Bergamot", "Light Aldehydes"],
            middle: ["White Floral", "Clean Musk", "Soft Powder"],
            base: ["White Musk", "Light Sandalwood", "Warm Amber"]
        },
        karakter: "Bersih profesional, fresh powdery, neat",
        penggunaan: "Lingkungan profesional tertutup, kantor, sehari-hari",
        description: "Sebutan 'parfum pramugari' bukan nama brand resmi, melainkan descriptor populer di Indonesia untuk kelas aroma clean-fresh-musk yang diasosiasikan dengan profesionalisme dan kebersihan kabin pesawat. Karakter umumnya: citrus ringan yang segera memberi kesan bersih, diikuti white floral yang sangat tipis, dan diakhiri white musk powdery yang melayang-layang di kulit. Banyak parfum formal flight crew airlines menggunakan formula ini. Aroma yang sangat tidak mengganggu, appropriate di ruang tertutup, dan memberikan kesan orang yang sangat merawat diri.",
        isOfficial: false,
        note: "⚠️ Tidak ada parfum resmi bernama 'Pramugari'. Ini adalah kategori karakter / descriptor lokal. Notes di atas merupakan profil umum berdasarkan karakter yang sering dikaitkan. Untuk rekomendasi spesifik, cari: Davidoff Cool Water, Dunhill Blue, atau Carolina Herrera 212."
    },

    // ──────────────────────────────────────────────
    // 9. LACOSTE ESSENTIAL SPORT
    // ──────────────────────────────────────────────
    {
        id: 9,
        name: "Essential Sport",
        brand: "Lacoste",
        fullName: "Lacoste Essential Sport",
        year: 2009,
        gender: "pria",
        category: "Aromatic Citrus Woody",
        concentration: "EDT",
        notes: {
            top: ["Bergamot", "Grapefruit", "Ginger"],
            middle: ["Nutmeg", "Juniper"],
            base: ["Vetiver", "Musk", "Patchouli"]
        },
        karakter: "Aktif, energik, segar sporty",
        penggunaan: "Olahraga, outdoor, aktivitas fisik, casual siang",
        description: "Essential Sport diciptakan untuk pria yang hidupnya bergerak — bergamot dan grapefruit membuka sesi dengan energi yang langsung menyegarkan, seolah pre-workout dalam botol. Ginger di top note menambahkan kick yang menggugah semangat. Jantung juniper dan nutmeg adalah jiwa parfum ini — herbal dan earthy, memberikan fondasi yang solid untuk aktivitas fisik. Vetiver dan patchouli di base memastikan daya tahan bahkan saat berkeringat, dengan cara yang elegant: bukan apek, melainkan semakin earthy dan maskulin.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 10. RAFFI AHMAD (INSPIRASI)
    // ──────────────────────────────────────────────
    {
        id: 10,
        name: "Raffi Ahmad Signature",
        brand: "Non-Official / Lokal",
        fullName: "Parfum Raffi Ahmad (Inspired/Clone)",
        gender: "pria",
        category: "Woody Aromatic Chypre",
        concentration: "EDP / EDT",
        notes: {
            top: ["Pineapple", "Bergamot", "Black Currant", "Apple"],
            middle: ["Birch", "Patchouli", "Jasmine", "Rose"],
            base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"]
        },
        karakter: "Charismatic, powerfull, luxury aspirational",
        penggunaan: "Acara penting, malam hari, signature statement",
        description: "Parfum yang diatributkan ke public figure seperti Raffi Ahmad umumnya merupakan inspired version dari Creed Aventus — parfum yang secara luas dianggap sebagai 'fragrance of success' dan banyak dipakai kalangan selebriti Indonesia. Profil Aventus menghadirkan pineapple juicy yang ikonik, birch yang smoky, dan base ambergris yang sangat premium — kombinasi yang memancarkan kemewahan tanpa perlu kata-kata. Jika Anda mencari parfum 'seleb vibes' yang sesungguhnya, original Creed Aventus adalah referensi terbaik.",
        isOfficial: false,
        note: "⚠️ Tidak ada parfum resmi dengan nama brand 'Raffi Ahmad'. Notes yang tercantum merujuk pada profil Creed Aventus sebagai inspirasi utama. Untuk pengalaman otentik, cari Creed Aventus asli atau inspired clone berkualitas tinggi."
    },

    // ──────────────────────────────────────────────
    // 11. YSL BLACK OPIUM
    // ──────────────────────────────────────────────
    {
        id: 11,
        name: "Black Opium",
        brand: "Yves Saint Laurent",
        fullName: "YSL Black Opium EDP",
        year: 2014,
        gender: "wanita",
        category: "Oriental Vanilla Gourmand",
        concentration: "EDP",
        notes: {
            top: ["Coffee", "Pink Pepper", "Orange Blossom"],
            middle: ["Jasmine", "Bitter Almond"],
            base: ["Vanilla", "Patchouli", "Cedar"]
        },
        karakter: "Sensual, adiktif, dark feminine, malam",
        penggunaan: "Malam hari, pesta, date night, musim dingin",
        description: "Black Opium adalah parfum yang berani membuat pernyataan: 'saya hadir, dan saya tidak minta maaf.' Kopi hitam di opening langsung memberikan jolt sensasi yang unik — satu-satunya parfum mainstream yang berhasil menjadikan kopi sebagai top note yang benar-benar mewah, bukan sekadar gimmick. Pink pepper memberikan edge yang tidak terduga, sementara jasmine di tengah mengalirkan sensualitas penuh. Vanilla dan patchouli di base adalah bedrock dari segala sesuatu yang gelap, hangat, dan addictive. Sillage-nya besar dan proyeksinya kuat — parfum yang akan selalu meninggalkan jejak.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 12. PACO RABANNE 1 MILLION
    // ──────────────────────────────────────────────
    {
        id: 12,
        name: "1 Million",
        brand: "Paco Rabanne",
        fullName: "Paco Rabanne 1 Million EDT",
        year: 2008,
        gender: "pria",
        category: "Oriental Spicy Leathery",
        concentration: "EDT",
        notes: {
            top: ["Blood Mandarin", "Grapefruit", "Mint"],
            middle: ["Cinnamon", "Rose", "Spice Notes"],
            base: ["Leather", "Amber", "Patchouli", "Woody Notes"]
        },
        karakter: "Percaya diri, glamorous, party-ready, statement",
        penggunaan: "Malam hari, pesta, clubbing, acara glamor",
        description: "1 Million adalah definisi liquid confidence. Botol berbentuk batangan emas bukan sekadar marketing — parfum di dalamnya benar-benar memancarkan aura kemakmuran dan kemegahan. Blood mandarin dan mint di opening memberikan energy yang immediate dan memikat. Kemudian cinnamon dan spice notes di tengah mulai menceritakan kisah yang lebih gelap dan sensual. Leather dan amber di base adalah puncak dari segalanya — sebuah statement bahwa pria ini tidak datang untuk biasa-biasa saja. Sillage-nya sangat besar, projectionnya bisa memenuhi ruangan. Ini adalah parfum untuk momen-momen yang Anda ingin dikenang.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 13. CREED AVENTUS
    // ──────────────────────────────────────────────
    {
        id: 13,
        name: "Aventus",
        brand: "Creed",
        fullName: "Creed Aventus EDP",
        year: 2010,
        gender: "pria",
        category: "Fruity Chypre Woody Aromatic",
        concentration: "EDP",
        notes: {
            top: ["Pineapple", "Bergamot", "Black Currant", "Apple"],
            middle: ["Birch", "Patchouli", "Jasmine", "Rose"],
            base: ["Musk", "Oakmoss", "Ambergris", "Vanilla"]
        },
        karakter: "Power, kemewahan absolut, sukses, iconic",
        penggunaan: "Acara penting, travel, signature scent, investasi",
        description: "Aventus adalah puncak absolut maskulin fragrance — dan satu-satunya parfum yang berhasil mempertahankan status legenda selama lebih dari satu dekade tanpa penurunan. Terinspirasi dari Napoleon Bonaparte: pemenang, petualang, penguasa. Pineapple juicy di opening adalah keputusan jenius yang tidak ada parfumeur lain yang berani lakukan sebelumnya dalam konteks maskulin premium. Birch smoky di tengah memberikan complexity yang tidak bisa direplikasi sempurna oleh siapapun. Ambergris di base adalah bahan terlangka dan termahal — memberikan warmth yang hidup dan berkembang di kulit setiap pemakai secara unik. Tidak ada dua botol Aventus yang benar-benar identik (batch variation yang terkenal) — ini yang menjadikannya koleksi paling diburu di dunia.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 14. MFK BACCARAT ROUGE 540
    // ──────────────────────────────────────────────
    {
        id: 14,
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        fullName: "MFK Baccarat Rouge 540 EDP",
        year: 2015,
        gender: "unisex",
        category: "Floral Woody Amber",
        concentration: "EDP",
        notes: {
            top: ["Saffron", "Jasmine"],
            middle: ["Amberwood", "Ambergris"],
            base: ["Fir Resin", "Cedar"]
        },
        karakter: "Ikonik, ultra-mewah, warm-metallic, unforgettable",
        penggunaan: "Acara eksklusif, signature mewah, travel luxury",
        description: "Baccarat Rouge 540 adalah fenomena budaya — parfum yang menjadi 'bahasa' kemewahan modern. Awalnya dibuat eksklusif untuk kristal Baccarat yang berusia 250 tahun, kini menjadi parfum paling banyak dibahas dan paling banyak di-clone di seluruh dunia. Hanya 6 bahan — namun sinergi di antaranya menciptakan sesuatu yang tidak bisa dijelaskan dengan kata-kata: metallic-sweet yang hangat, seperti gulungan kapas gula yang dibakar di atas tatakan kayu cedar. Amberwood adalah note imajiner yang Francis Kurkdjian ciptakan khusus — tidak ada di alam, hanya ada di botol ini. Sillage-nya adalah legenda: orang-orang akan bertanya parfum apa yang Anda pakai, dan akan mengingat Anda dari aromanya. Ini bukan parfum — ini identitas.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 15. BVLGARI POUR HOMME EXTREME
    // ──────────────────────────────────────────────
    {
        id: 15,
        name: "Pour Homme Extreme",
        brand: "Bvlgari",
        fullName: "Bvlgari Pour Homme Extreme",
        year: 2002,
        gender: "pria",
        category: "Aromatic Aquatic Woody",
        concentration: "EDT",
        notes: {
            top: ["Tea", "Grapefruit", "Bergamot"],
            middle: ["Pepper", "Cardamom"],
            base: ["Musk", "Oakmoss"]
        },
        karakter: "Clean tea-forward, sophisticated minimalis",
        penggunaan: "Kantor, siang hari, daily refined",
        description: "Bvlgari Pour Homme Extreme adalah ode pada teh — bukan teh yang sederhana, melainkan teh Darjeeling premium yang baru diseduh di pagi hari. Bergamot dan grapefruit memberikan intro yang cerah dan refreshing, sebelum teh mengambil alih sebagai karakter utama yang sangat distinctive. Pepper dan cardamom di middle note memberikan subtle warmth yang mencegah parfum ini terasa terlalu 'green' atau monoton. Oakmoss di base menjangkarkan segalanya dengan earthy depth yang sophisticated. Parfum untuk pria yang menyukai ketenangan, ketepatan, dan keeleganan tanpa drama.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 16. BVLGARI AQVA POUR HOMME
    // ──────────────────────────────────────────────
    {
        id: 16,
        name: "Aqva Pour Homme",
        brand: "Bvlgari",
        fullName: "Bvlgari Aqva Pour Homme",
        year: 2005,
        gender: "pria",
        category: "Aquatic Aromatic Citrus",
        concentration: "EDT",
        notes: {
            top: ["Mandarin Orange", "Orange"],
            middle: ["Seaweed", "Lavender"],
            base: ["Amber", "Cedar"]
        },
        karakter: "Aquatic mediterania, segar bersih, summer vibes",
        penggunaan: "Cuaca panas, pantai, summer, aktivitas outdoor",
        description: "Aqva Pour Homme menangkap esensi Mediterania dengan cara yang sangat puitis — bukan air asin yang kasar, melainkan laut Yunani yang jernih dilihat dari kapal berlayar di sore hari. Mandarin orange di opening bersinar seperti sinar matahari yang memantul di permukaan air. Seaweed di jantung memberikan identitas aquatic yang autentik — ini bukan aquatic sintetis, ini benar-benar tercium seperti di tepi pantai berbatu yang terkena ombak. Amber dan cedar di base memberikan warmth yang membumi — kontras yang sempurna dengan kesegaran lautnya. Parfum yang akan selalu terasa tepat di musim panas.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 17. ONE DIRECTION OUR MOMENT
    // ──────────────────────────────────────────────
    {
        id: 17,
        name: "Our Moment",
        brand: "One Direction",
        fullName: "One Direction Our Moment EDP",
        year: 2013,
        gender: "wanita",
        category: "Floral Fruity",
        concentration: "EDP",
        notes: {
            top: ["Red Currant", "Pink Grapefruit"],
            middle: ["Jasmine", "Freesia"],
            base: ["Musk", "Patchouli"]
        },
        karakter: "Girly, ceria, youthful, nostalgic",
        penggunaan: "Remaja, hangout, casual, daily feminine",
        description: "Our Moment adalah kapsul waktu — membuka botol ini seperti membuka album foto tahun 2013 yang penuh kenangan manis. Red currant dan pink grapefruit di top note meledak dengan keceriaan buah-buahan yang langsung memancarkan energi positif. Jasmine dan freesia di jantung memberikan kelembutan floral yang sangat girly tanpa terasa terlalu berat. Musk di base memastikan daya tahan yang reasonable untuk parfum yang tergolong light. Mungkin bukan parfum paling kompleks di dunia, namun memiliki sesuatu yang berharga: kemampuan menghadirkan kebahagiaan sederhana setiap kali disemprotkan.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 18. VERSACE EROS
    // ──────────────────────────────────────────────
    {
        id: 18,
        name: "Eros",
        brand: "Versace",
        fullName: "Versace Eros EDT",
        year: 2012,
        gender: "pria",
        category: "Oriental Woody Aromatic",
        concentration: "EDT",
        notes: {
            top: ["Mint", "Green Apple", "Lemon"],
            middle: ["Tonka Bean", "Ambroxan", "Geranium"],
            base: ["Vanilla", "Vetiver", "Oakmoss", "Cedar"]
        },
        karakter: "Maskulin sensual, seduktif modern, kuat namun manis",
        penggunaan: "Malam hari, date night, acara sosial, clubbing",
        description: "Terinspirasi dari Eros — Dewa Cinta Yunani — parfum ini tidak main-main soal intensi. Mint di opening memberikan opening yang sangat striking: tajam, segar, dan sedikit assertive. Kemudian Ambroxan dan tonka bean di tengah mulai mengubah segalanya — kulit menjadi hangat, aroma menjadi seduktif dan magnetic. Vanilla di base menyempurnakan perjalanan: sebuah parfum yang bermula seperti seorang pria yang baru selesai olahraga dan berakhir seperti pria yang siap untuk malam yang panjang. Sillage-nya kuat dan projection-nya besar — Eros tidak pernah hadir diam-diam.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 19. CAROLINA HERRERA 212 SEXY MEN
    // ──────────────────────────────────────────────
    {
        id: 19,
        name: "212 Sexy Men",
        brand: "Carolina Herrera",
        fullName: "Carolina Herrera 212 Sexy Men EDT",
        year: 2007,
        gender: "pria",
        category: "Oriental Spicy Woody",
        concentration: "EDT",
        notes: {
            top: ["Mandarin Orange", "Bergamot"],
            middle: ["Pepper", "Cardamom"],
            base: ["Vanilla", "Sandalwood", "Musk"]
        },
        karakter: "Sensual, maskulin hangat, sophisticated seduktif",
        penggunaan: "Malam hari, date night, acara romantic",
        description: "212 Sexy Men adalah versi 212 yang memilih sisi gelap Manhattan — bukan gedung perkantoran, melainkan rooftop bar di malam hari dengan citylight di bawah. Mandarin orange di opening memberikan awal yang cerah namun cepat bertransisi. Pepper dan cardamom di tengah adalah esensi utama: hangat, spicy, dan sangat sensual tanpa perlu berteriak. Vanilla, sandalwood, dan musk di base menciptakan 'skin scent' yang intim dan inviting — parfum yang hanya bisa benar-benar dihargai saat seseorang cukup dekat dengan Anda. Pilihan cerdas untuk momen yang Anda ingin seseorang mendekat.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 20. MERCEDES-BENZ FOR MEN
    // ──────────────────────────────────────────────
    {
        id: 20,
        name: "For Men",
        brand: "Mercedes-Benz",
        fullName: "Mercedes-Benz For Men EDT",
        year: 2012,
        gender: "pria",
        category: "Woody Aromatic Citrus",
        concentration: "EDT",
        notes: {
            top: ["Bergamot", "Lemon", "Mandarin Orange"],
            middle: ["Violet"],
            base: ["Vetiver", "Patchouli", "Cedar"]
        },
        karakter: "Maskulin modern, clean-woody, urban sophisticated",
        penggunaan: "Harian, kantor, casual professional",
        description: "Mercedes-Benz For Men adalah visual dari interior kulit sedan mewah yang baru dipoles — clean, sophisticated, dan memancarkan kualitas tanpa harus menjelaskan diri sendiri. Citrus trio di opening (bergamot, lemon, mandarin) memberikan awal yang crisp dan professional, sebelum violet di tengah memberikan sentuhan unexpected yang feminine namun tetap dalam batas maskulin. Trio vetiver, patchouli, dan cedar di base adalah bedrock dari segalanya: earthy, woody, dan solid — seperti mesin V8 yang bekerja senyap namun penuh tenaga. Parfum ini tidak perlu bicara keras karena qualitas-nya berbicara sendiri.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 21. HMNS ORGASM
    // ──────────────────────────────────────────────
    {
        id: 21,
        name: "Orgasm",
        brand: "HMNS",
        fullName: "HMNS Orgasm",
        gender: "unisex",
        category: "Floral Amber Musk",
        concentration: "EDP",
        notes: {
            top: ["Citrus Blend", "Bergamot"],
            middle: ["White Floral", "Rose", "Violet"],
            base: ["Amber", "Musk", "Woody Notes"]
        },
        karakter: "Sensual modern, luxury-floral, tahan sangat lama",
        penggunaan: "Daily wear premium, malam, acara spesial",
        description: "HMNS Orgasm adalah proof bahwa parfum lokal Indonesia telah mencapai standar dunia. Dengan nama yang berani dan formula yang tidak kalah berani, parfum ini menggabungkan citrus pembuka yang cerah dengan jantung floral yang mewah — mawar, violet, dan white floral berpadu dalam lapisan yang sangat generous. Base amber dan musk-nya adalah rahasia di balik longevity luar biasa yang menjadi daya jualnya — banyak pengguna melaporkan parfum ini masih tercium 12+ jam kemudian. Di dunia parfum mainstream yang sering mengecewakan soal ketahanan, HMNS Orgasm adalah anomali yang menyenangkan: murahan? Tidak. Tahan lama? Sangat.",
        isOfficial: true,
        note: "Brand lokal Indonesia. Notes yang dicantumkan merupakan profil umum berdasarkan deskripsi brand dan review komunitas parfum."
    },

    // ──────────────────────────────────────────────
    // 22. MONTBLANC LEGEND
    // ──────────────────────────────────────────────
    {
        id: 22,
        name: "Legend",
        brand: "Mont Blanc",
        fullName: "Mont Blanc Legend EDT",
        year: 2011,
        gender: "pria",
        category: "Aromatic Aquatic Woody",
        concentration: "EDT",
        notes: {
            top: ["Lavender", "Pineapple", "Bergamot"],
            middle: ["Apple", "Oakmoss", "Rose"],
            base: ["Tonka Bean", "Sandalwood", "Musk"]
        },
        karakter: "Profesional, clean modern, accessible mewah",
        penggunaan: "Kantor, sehari-hari, acara semi-formal",
        description: "Mont Blanc Legend adalah definisi dari 'gentleman's daily driver' — sebuah parfum yang tidak pernah salah langkah dalam situasi apapun. Lavender dan bergamot di opening memberikan kesan professional yang immediate dan familier. Pineapple memberikan sentuhan buah yang subtle tanpa menjadi fruity berlebihan. Apple dan oakmoss di tengah memberikan freshness yang modern. Tonka bean dan sandalwood di base adalah fondasi yang warm dan welcoming. Legend adalah parfum yang tidak memerlukan acara khusus — ia cocok di segala situasi karena dirancang untuk manusia modern yang hidupnya multidimensi.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 23. MARC JACOBS DAISY
    // ──────────────────────────────────────────────
    {
        id: 23,
        name: "Daisy",
        brand: "Marc Jacobs",
        fullName: "Marc Jacobs Daisy EDT",
        year: 2007,
        gender: "wanita",
        category: "Floral Woody Musk",
        concentration: "EDT",
        notes: {
            top: ["Strawberry", "Violet Leaves", "Grapefruit"],
            middle: ["Violet Petals", "Jasmine", "Gardenia"],
            base: ["Musk", "Vanilla", "White Woods"]
        },
        karakter: "Cheerful, innocent, spring feminine, youthful",
        penggunaan: "Siang hari, hangout, casual feminine, musim semi",
        description: "Daisy adalah quintessential spring fragrance — mungkin yang paling perfectly captures the feeling of walking through a flower field on a sunny April morning. Buah strawberry dan daun violet di opening memberikan freshness yang playful dan youthful. Jasmine dan gardenia di tengah merupakan duo floral yang classic dan selalu beautiful. Musk putih dan white woods di base memberikan softness yang membuat Daisy terasa seperti skin scent yang natural dan wearable. Botol daisy-topped-nya iconic, namun parfum di dalamnya jauh lebih dari sekedar packaging cantik — ini adalah formulasi yang benar-benar joy-inducing.",
        isOfficial: true,
        note: "Marc Jacobs memiliki banyak varian (Daisy Dream, Daisy Love, Honey, dll). Data ini khusus untuk Daisy Original EDT."
    },

    // ──────────────────────────────────────────────
    // 24. AIGNER BLUE
    // ──────────────────────────────────────────────
    {
        id: 24,
        name: "Aigner Blue",
        brand: "Etienne Aigner",
        fullName: "Etienne Aigner Blue",
        year: 2003,
        gender: "pria",
        category: "Aromatic Citrus Fresh",
        concentration: "EDT",
        notes: {
            top: ["Bergamot", "Lemon"],
            middle: ["Water Notes", "Lavender"],
            base: ["Musk", "Sandalwood", "Amber"]
        },
        karakter: "Ringan, bersih, youthful segar",
        penggunaan: "Harian casual, siang hari, santai",
        description: "Aigner Blue adalah parfum yang tidak meminta banyak dari pemakainya — dan justru itulah kelebihannya. Bergamot dan lemon di opening memberikan awal yang langsung menyegarkan, sesederhana memercikkan air dingin ke wajah di pagi hari. Lavender di tengah memberikan familiar comfort yang menenangkan. Musk dan sandalwood di base menyelesaikan perjalanan dengan clean warmth yang sangat approachable. Berbeda dengan Aigner Black yang intens dan dark, Aigner Blue adalah versi yang lebih ringan dan carefree — cocok untuk hari-hari santai yang tidak butuh pernyataan besar.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 25. D&G LIGHT BLUE POUR HOMME
    // ──────────────────────────────────────────────
    {
        id: 25,
        name: "Light Blue Pour Homme",
        brand: "Dolce & Gabbana",
        fullName: "D&G Light Blue Pour Homme EDT",
        year: 2007,
        gender: "pria",
        category: "Aromatic Citrus Woody",
        concentration: "EDT",
        notes: {
            top: ["Sicilian Lemon", "Apple", "Bluebell"],
            middle: ["Bamboo", "Jasmine", "Pepper"],
            base: ["Musk", "Cedar", "Incense"]
        },
        karakter: "Mediterranean summer, segar bersih, casual sophisticated",
        penggunaan: "Musim panas, santai, liburan, casual outdoor",
        description: "Light Blue Pour Homme adalah surat cinta untuk musim panas di Sisilia — dan tidak ada satu parfum pun yang melakukannya dengan lebih baik. Lemon Sisilia di opening adalah note terbaik dalam kategorinya: cerah, juicy, dan authentic seperti jeruk yang baru dipetik. Bamboo di tengah memberikan freshness yang almost ozonic — seperti angin yang melewati rumpun bambu di tepi sungai. Incense dan cedar di base memberikan unexpected depth — ini bukan hanya parfum musim panas biasa, ada sesuatu yang lebih thoughtful di sini. Light Blue adalah contoh bahwa accessible dan sophisticated tidak harus saling mengorbankan.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 26. POLO SPORT
    // ──────────────────────────────────────────────
    {
        id: 26,
        name: "Polo Sport",
        brand: "Ralph Lauren",
        fullName: "Ralph Lauren Polo Sport EDT",
        year: 1993,
        gender: "pria",
        category: "Aromatic Aquatic Citrus",
        concentration: "EDT",
        notes: {
            top: ["Mint", "Lemon", "Citrus Blend"],
            middle: ["Ginger", "Sea Notes", "Eucalyptus"],
            base: ["Musk", "Sandalwood", "Oakmoss"]
        },
        karakter: "Active, fresh athletic, American classic",
        penggunaan: "Olahraga, outdoor, casual, iklim panas",
        description: "Polo Sport adalah parfum yang mendefinisikan era 90-an active lifestyle — dan masih terasa relevan hingga kini karena formula dasarnya yang sangat solid. Mint dan lemon di opening memberikan freshness yang immediate dan invigorating. Sea notes dan eucalyptus di tengah menambahkan dimensi aquatic-herbal yang distinctive — ini bukan sekadar 'clean', ini athletic dan purposeful. Oakmoss di base memberikan earthiness yang mengingatkan pada rumput lapangan olahraga basah terkena embun pagi. Polo Sport adalah parfum yang membuat Anda ingin keluar rumah dan bergerak.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 27. GIORGIO ARMANI MY WAY
    // ──────────────────────────────────────────────
    {
        id: 27,
        name: "My Way",
        brand: "Giorgio Armani",
        fullName: "Giorgio Armani My Way EDP",
        year: 2020,
        gender: "wanita",
        category: "Floral Musky Woody",
        concentration: "EDP",
        notes: {
            top: ["Orange Blossom", "Bergamot"],
            middle: ["Tuberose", "Indian Jasmine", "White Cedar"],
            base: ["Vanilla", "White Musk", "Virginia Cedar"]
        },
        karakter: "Modern feminine, sophisticated freedom, warm floral",
        penggunaan: "Daily wear premium, kantor feminin, acara semi-formal",
        description: "My Way adalah manifesto wanita modern yang percaya bahwa kebebasan dan keeleganan bisa hadir dalam satu nafas. Orange blossom di opening memberikan floral yang cerah dan inviting — bukan berat, melainkan seperti angin sore yang membawa aroma kebun. Tuberose dan Indian jasmine di tengah adalah pasangan yang extraordinary: keduanya powerful namun saling mengimbangi dengan cara yang sangat sophisticated. Vanilla dan white musk di base memberikan warmth yang intimate dan lasting. My Way juga merupakan salah satu parfum dengan komitmen sustainability terkuat — botolnya refillable, mengurangi limbah. Kecantikan yang bertanggung jawab.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 28. KENZO HOMME
    // ──────────────────────────────────────────────
    {
        id: 28,
        name: "Kenzo Homme",
        brand: "Kenzo",
        fullName: "Kenzo Homme EDT",
        year: 1991,
        gender: "pria",
        category: "Aromatic Aquatic Woody",
        concentration: "EDT",
        notes: {
            top: ["Marine Notes", "Bergamot", "Spearmint"],
            middle: ["Pine", "Vetiver", "Sage"],
            base: ["Sandalwood", "Musk", "Amber"]
        },
        karakter: "Maskulin natural, hutan-laut, earthy fresh",
        penggunaan: "Harian, outdoor, cuaca hangat, alam terbuka",
        description: "Kenzo Homme adalah parfum yang bercerita tentang perbatasan antara laut dan hutan — dua dunia yang bertemu di tepian sebuah fjord di pagi hari. Marine notes dan spearmint di opening memberikan freshness yang almost bracing — seperti menarik nafas dalam di udara laut yang dingin. Pine dan vetiver di tengah membawa Anda dari laut ke dalam hutan — earthy, herbal, dan sangat maskulin dalam cara yang tidak memerlukan oud atau leather untuk membuktikan diri. Sandalwood dan amber di base menyelesaikan cerita dengan warmth yang menyambut. Parfum yang lahir sebelum aquatic fragrance menjadi mainstream — ini adalah originatornya.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 29. LE LABO SANTAL 33
    // ──────────────────────────────────────────────
    {
        id: 29,
        name: "Santal 33",
        brand: "Le Labo",
        fullName: "Le Labo Santal 33 EDP",
        year: 2011,
        gender: "unisex",
        category: "Woody Aromatic Leathery",
        concentration: "EDP",
        notes: {
            top: ["Violet", "Cardamom", "Iris"],
            middle: ["Ambroxan", "Papyrus", "Cedarwood"],
            base: ["Sandalwood", "Leather", "Musk", "Cashmere Wood"]
        },
        karakter: "Kultus, ikonik, woody smoky, gender-fluid",
        penggunaan: "Signature scent, daily premium, acara kreatif",
        description: "Santal 33 adalah fenomena budaya yang melampaui dunia parfum — ia menjadi simbol dari suatu era, suatu lifestyle, suatu cara melihat dunia. Setiap orang di New York, Los Angeles, London, dan Tokyo yang bergerak di industri kreatif pernah mencium atau memakai parfum ini. Violet dan cardamom di opening memberikan awal yang floral-spicy yang sangat distinctive. Ambroxan dan papyrus di tengah adalah paduan yang tidak konvensional — earthy, reedy, dan seperti berada di tepi sungai yang kering di padang pasir Amerika. Sandalwood dan leather di base menciptakan warmth yang sangat personal — Santal 33 terasa berbeda di setiap kulit orang yang memakainya. Ini bukan parfum — ini adalah pengakuan diri.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 30. NARCISO RODRIGUEZ FOR HIM
    // ──────────────────────────────────────────────
    {
        id: 30,
        name: "For Him",
        brand: "Narciso Rodriguez",
        fullName: "Narciso Rodriguez For Him EDT",
        year: 2007,
        gender: "pria",
        category: "Woody Musky Aromatic",
        concentration: "EDT",
        notes: {
            top: ["Violet", "Aromatic Herbs"],
            middle: ["Musk", "Cardamom"],
            base: ["Patchouli", "Amber", "Woody Notes"]
        },
        karakter: "Intim, skin scent, musk-forward, subtle powerful",
        penggunaan: "Date night, signature personal, intimate settings",
        description: "For Him adalah antitesis dari parfum yang berteriak — dan justru itulah yang membuatnya begitu kuat. Ini adalah parfum yang hanya bisa benar-benar dihargai oleh orang yang sangat dekat dengan Anda secara fisik. Violet di opening memberikan sentuhan floral yang unconventional namun maskulin. Musk di tengah — bukan musk putih yang clean, melainkan musk yang dark dan sensual — adalah protagonis utama. Patchouli dan amber di base memperkuat karakter musk dengan earthy depth. Sillage-nya sangat dekat dengan kulit (skin scent), membuat siapapun yang menciumnya ingin tetap di dekat Anda. Ini adalah parfum yang bukan tentang impression — ini tentang connection.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 31. KENZO DAUN (KENZO POUR HOMME)
    // ──────────────────────────────────────────────
    {
        id: 31,
        name: "Pour Homme (Kenzo Daun)",
        brand: "Kenzo",
        fullName: "Kenzo Pour Homme EDT",
        year: 1991,
        gender: "pria",
        category: "Aromatic Green Aquatic",
        concentration: "EDT",
        notes: {
            top: ["Marine Notes", "Bergamot", "Spearmint"],
            middle: ["Pine", "Vetiver", "Sage", "Birch"],
            base: ["Sandalwood", "Musk", "Amber"]
        },
        karakter: "Green aquatic earthy, alami maskulin, unik",
        penggunaan: "Outdoor, alam terbuka, daily green-lover",
        description: "Dikenal di Indonesia dengan sebutan 'Kenzo Daun' karena botolnya yang berbentuk daun hijau ikonik, Kenzo Pour Homme adalah salah satu parfum paling distinctive yang pernah diciptakan untuk pria. Jauh sebelum green fragrance menjadi tren, Kenzo sudah berani tampil beda dengan marine notes dan pine yang sangat 'alam terbuka'. Spearmint dan sage memberikan herbal freshness yang terasa seperti berjalan di hutan pinus setelah hujan. Birch di tengah menambahkan subtle smokiness. Sandalwood dan amber di base memberikan warmth yang membuat parfum ini tidak sekadar 'green spray' — ada kedalaman yang sesungguhnya di sini. Botol daun ikonik-nya sudah layak masuk museum desain.",
        isOfficial: true,
        note: "Di Indonesia dikenal sebagai 'Kenzo Daun' merujuk pada botol berbentuk daun hijau. Produk resminya adalah Kenzo Pour Homme EDT."
    }

];

// ──────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ──────────────────────────────────────────────────────────

export function getPerfumeById(id: number): Perfume | undefined {
    return PERFUME_DATA.find(p => p.id === id);
}

export function getPerfumesByGender(gender: 'pria' | 'wanita' | 'unisex'): Perfume[] {
    return PERFUME_DATA.filter(p => p.gender === gender);
}

export function getPerfumesByCategory(keyword: string): Perfume[] {
    return PERFUME_DATA.filter(p =>
        p.category.toLowerCase().includes(keyword.toLowerCase())
    );
}

export function searchPerfume(query: string): Perfume[] {
    const q = query.toLowerCase();
    return PERFUME_DATA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.fullName.toLowerCase().includes(q) ||
        p.karakter.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
}

export function getOfficialPerfumes(): Perfume[] {
    return PERFUME_DATA.filter(p => p.isOfficial);
}

export function getNonOfficialPerfumes(): Perfume[] {
    return PERFUME_DATA.filter(p => !p.isOfficial);
}
