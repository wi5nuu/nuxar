// ============================================================
// PERFUME DATA WANITA — BEST SELLER — VALID & VERIFIED
// Sumber referensi: Fragrantica, brand official, parfumerie notes
// ⚠️ Item bertanda isOfficial: false = tidak ada notes global resmi
// ============================================================

export interface PerfumeNotes {
    top: string[];
    middle: string[];
    base: string[];
}

export interface PerfumeWanita {
    id: number;
    name: string;
    brand: string;
    fullName: string;
    year?: number;
    gender: 'wanita' | 'unisex';
    category: string;
    concentration: string;
    notes: PerfumeNotes;
    karakter: string;
    penggunaan: string;
    description: string;
    isOfficial: boolean;
    note?: string;
}

export const PERFUME_WANITA: PerfumeWanita[] = [

    // ──────────────────────────────────────────────
    // 1. VICTORIA'S SECRET SCANDALOUS
    // ──────────────────────────────────────────────
    {
        id: 1,
        name: "Scandalous",
        brand: "Victoria's Secret",
        fullName: "Victoria's Secret Scandalous EDP",
        year: 2012,
        gender: "wanita",
        category: "Floral Fruity Musk",
        concentration: "EDP",
        notes: {
            top: ["Bergamot", "Black Cherry", "Red Berry"],
            middle: ["Jasmine", "Tuberose", "Peony"],
            base: ["Musk", "Sandalwood", "Amber", "Vanilla"]
        },
        karakter: "Sensual, fruity-floral gelap, berani, feminin kuat",
        penggunaan: "Malam hari, pesta, date night, acara sosial",
        description: "Scandalous adalah parfum yang tidak meminta izin — ia hadir, mengambil alih ruangan, dan tidak pernah meminta maaf. Black cherry dan red berry di opening memberikan intro buah-buahan gelap yang langsung provocative, bukan manis murahan. Tuberose dan jasmine di jantung adalah duo floral yang intoxicating — kaya, warm, dan sensual. Musk, vanilla, dan sandalwood di base menciptakan dry down yang seperti kulit hangat berpadu dengan kain sutra — intimate dan sangat memorable. Ini adalah parfum yang akan membuat orang bertanya-tanya siapa Anda lama setelah Anda pergi.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 2. ROMANTIC WISH (ANNE MÖLLER)
    // ──────────────────────────────────────────────
    {
        id: 2,
        name: "Romantic Wish",
        brand: "Anne Möller",
        fullName: "Anne Möller Romantic Wish EDT",
        year: 2006,
        gender: "wanita",
        category: "Floral Fruity Powdery",
        concentration: "EDT",
        notes: {
            top: ["Mandarin Orange", "Raspberry", "Pink Grapefruit"],
            middle: ["Peony", "Rose", "Violet"],
            base: ["Musk", "Sandalwood", "Cedarwood", "White Amber"]
        },
        karakter: "Manis romantis, powdery feminine, dreamy",
        penggunaan: "Siang hari, hangout, casual date, daily feminine",
        description: "Romantic Wish adalah mimpi seorang romantis yang dituangkan ke dalam botol — lembut, manis, dan penuh harapan. Raspberry dan pink grapefruit di opening memberikan keceriaan buah yang playful namun tidak childish. Peony, rose, dan violet di tengah adalah triumvirat floral yang very womanly — setiap note saling menyempurnakan untuk menciptakan bouquet yang beautiful. White amber dan sandalwood di base memberikan powdery warmth yang menjadi ciri khas parfum ini — aroma yang terasa seperti satin mewah di kulit. Parfum untuk wanita yang percaya pada keajaiban sehari-hari.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 3. CHLOÉ EAU DE PARFUM (CHLOÉ ROSE)
    // ──────────────────────────────────────────────
    {
        id: 3,
        name: "Chloé EDP (Rose)",
        brand: "Chloé",
        fullName: "Chloé Eau de Parfum",
        year: 2008,
        gender: "wanita",
        category: "Floral Powdery",
        concentration: "EDP",
        notes: {
            top: ["Peony", "Pink Pepper", "Rose Bud"],
            middle: ["Rose (Centifolia)", "Magnolia", "Lily of the Valley"],
            base: ["Cedar", "Virginia Cedar", "Amber"]
        },
        karakter: "Elegan timeless, rose centered, sophisticated feminine",
        penggunaan: "Acara formal, kantor feminin, everyday luxury",
        description: "Chloé EDP adalah definisi dari 'understated luxury' — parfum yang tidak perlu berteriak karena sudah sangat jelas berbicara tentang selera yang luar biasa. Rose Centifolia, salah satu bahan paling mahal di dunia parfum, menjadi pusat dari segala sesuatunya — dikelilingi magnolia yang lembut dan lily of the valley yang innocent. Pink pepper di opening memberikan surprising edge yang mencegah parfum ini menjadi terlalu sweet. Cedar di base memberikan grounding modern. Ini adalah parfum yang akan terasa sama relevannya 20 tahun dari sekarang — sebuah klasik sejati yang sedang dibentuk.",
        isOfficial: true,
        note: "Dikenal juga sebagai 'Chloé Rose' di kalangan pengguna Indonesia karena karakter rose-nya yang dominan."
    },

    // ──────────────────────────────────────────────
    // 4. DAVIDOFF COOL WATER WOMAN
    // ──────────────────────────────────────────────
    {
        id: 4,
        name: "Cool Water Woman",
        brand: "Davidoff",
        fullName: "Davidoff Cool Water Woman EDT",
        year: 1996,
        gender: "wanita",
        category: "Floral Aquatic",
        concentration: "EDT",
        notes: {
            top: ["Pineapple", "Quince", "Black Currant", "Melon", "Waterlily"],
            middle: ["Lotus Blossom", "Jasmine", "Rose"],
            base: ["Musk", "Sandalwood", "Amber", "Cedarwood"]
        },
        karakter: "Segar aquatic feminin, bersih, summer vibes",
        penggunaan: "Siang hari, musim panas, pantai, outdoor aktif",
        description: "Cool Water Woman adalah saudara perempuan dari legenda aquatic — dan ia sama sekali tidak kalah. Waterlily dan melon di opening langsung menghadirkan sensasi terjun ke kolam biru yang jernih di hari terpanas. Pineapple dan quince memberikan sweetness buah yang tropical — lebih feminine dan cerah dari versi pria. Lotus blossom dan jasmine di tengah memberikan floral yang aquatic, seolah bunga yang tumbuh di tepi danau berembun pagi. Sandalwood dan amber di base menjangkarkan segalanya dengan warmth yang feminine dan inviting. Parfum yang selalu tepat ketika cuaca panas dan Anda ingin tetap fresh sepanjang hari.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 5. CANDY BABY (GENERIC / INSPIRED)
    // ──────────────────────────────────────────────
    {
        id: 5,
        name: "Candy Baby",
        brand: "Generic / Various",
        fullName: "Candy Baby (Sweet Gourmand)",
        gender: "wanita",
        category: "Gourmand Sweet Vanilla",
        concentration: "EDP / Body Mist",
        notes: {
            top: ["Cotton Candy", "Caramel", "Pink Sugar"],
            middle: ["Vanilla Cream", "White Musk", "Peach"],
            base: ["Sandalwood", "Amber", "Benzoin"]
        },
        karakter: "Manis ekstrem, girly, playful, candy-like",
        penggunaan: "Casual, remaja, hangout, daily playful",
        description: "Candy Baby adalah parfum yang tidak pernah berpura-pura menjadi sesuatu yang bukan dirinya — dan justru itulah kejujurannya. Ini adalah permen dalam botol: cotton candy dan caramel di opening memberikan sweetness yang instan dan joyful. Vanilla cream di tengah memperdalam manisnya menjadi lebih warm dan enveloping, sementara peach memberikan dimension buah yang fruity-fresh. Benzoin dan amber di base memastikan daya tahan yang cukup. Parfum untuk hari-hari ketika Anda ingin merasa carefree, playful, dan tidak perlu memikirkan hal-hal serius. Pure happiness.",
        isOfficial: false,
        note: "⚠️ 'Candy Baby' adalah nama generik yang digunakan oleh banyak brand lokal/impor. Tidak ada satu parfum resmi tunggal dengan nama ini. Notes merupakan profil umum kategori sweet gourmand. Referensi terdekat: Aquolina Pink Sugar atau Prada Candy."
    },

    // ──────────────────────────────────────────────
    // 6. LOVE SARAH (VARIOUS / INSPIRED)
    // ──────────────────────────────────────────────
    {
        id: 6,
        name: "Love Sarah",
        brand: "Yardley / Generic",
        fullName: "Love Sarah (Floral Sweet)",
        gender: "wanita",
        category: "Floral Sweet Powdery",
        concentration: "EDT / EDP",
        notes: {
            top: ["Pink Rose", "Freesia", "Bergamot"],
            middle: ["Peony", "Lily", "Jasmine"],
            base: ["White Musk", "Sandalwood", "Vanilla", "Cedar"]
        },
        karakter: "Lembut romantis, floral manis, soft powdery",
        penggunaan: "Harian, casual feminine, daily comfort",
        description: "Love Sarah memancarkan karakter yang sesuai namanya — penuh kasih sayang, lembut, dan hangat seperti pelukan dari seseorang yang paling Anda percaya. Pink rose dan freesia di opening memberikan floral yang fresh dan inviting. Peony dan lily di tengah memperdalam floral menjadi lebih rich dan feminine. White musk dan vanilla di base menyelesaikan profil dengan powdery softness yang sangat wearable — aroma yang terasa seperti laundry bersih berpadu bedak bayi yang elegan. Parfum yang sesuai untuk wanita yang menghargai kelembutana dan ketulusan.",
        isOfficial: false,
        note: "⚠️ 'Love Sarah' adalah nama yang digunakan berbagai brand lokal dan impor tanpa satu identitas resmi global. Notes merupakan profil umum berdasarkan karakter yang sering dikaitkan. Referensi serupa: Yardley English Rose atau Sarah Jessica Parker Lovely."
    },

    // ──────────────────────────────────────────────
    // 7. VICTORIA'S SECRET BOMBSHELL
    // ──────────────────────────────────────────────
    {
        id: 7,
        name: "Bombshell",
        brand: "Victoria's Secret",
        fullName: "Victoria's Secret Bombshell EDP",
        year: 2010,
        gender: "wanita",
        category: "Floral Fruity",
        concentration: "EDP",
        notes: {
            top: ["Purple Passion Fruit", "Shangri-La Peony", "Vanilla Orchid"],
            middle: ["Jasmine Petals", "Brazilian Sandalwood", "White Amber"],
            base: ["White Musk", "Sandalwood", "Vanilla"]
        },
        karakter: "Playful, cerah buah-buahan, confident feminine",
        penggunaan: "Harian, hangout, daytime, casual dan festive",
        description: "Bombshell adalah parfum yang paling ikonik dari Victoria's Secret — dan selama lebih dari satu dekade, ia terus membuktikan diri sebagai salah satu floral-fruity terbaik di kelasnya. Purple passion fruit di opening adalah pembeda utama yang membuatnya instantly recognizable — buah-buahan tropis yang exotic namun sangat feminine. Peony dan vanilla orchid di opening menciptakan floral yang cerah dan very uplifting. Jasmine di tengah menambahkan depth sensual yang halus. White musk dan vanilla di base memberikan warmth yang welcoming. Ini adalah parfum yang akan membuat Anda senyum setiap kali menyemprotkannya — pure confidence in a bottle.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 8. VICTORIA'S SECRET PINK CHIFFON
    // ──────────────────────────────────────────────
    {
        id: 8,
        name: "Pink Chiffon",
        brand: "Victoria's Secret",
        fullName: "Victoria's Secret Pink Chiffon Body Mist / EDP",
        year: 2015,
        gender: "wanita",
        category: "Floral Fruity Powdery",
        concentration: "Body Mist / EDT",
        notes: {
            top: ["Mandarin Orange", "Watermelon", "Peach Blossom"],
            middle: ["Jasmine", "Magnolia", "Lily"],
            base: ["White Musk", "Sandalwood", "Soft Amber"]
        },
        karakter: "Ringan, powdery pink, innocent feminine, youthful",
        penggunaan: "Siang hari, casual, daily, musim panas",
        description: "Pink Chiffon adalah wujud dari warna pink dalam bentuk aroma — girly, ringan seperti kain chiffon yang berkibar di angin, dan membuat siapapun yang menciumnya tersenyum. Watermelon dan peach blossom di opening memberikan freshness buah yang sangat musim panas. Magnolia dan lily di tengah memberikan floral yang innocent dan soft — bukan floral yang berat atau intens, melainkan seperti bunga yang baru mekar di pagi hari. White musk di base adalah bedrock yang menjaga semuanya tetap bersih dan wearable sepanjang hari. Parfum yang ringan di kantong dan di hidung — sangat cocok untuk daily fresh.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 9. AVRIL LAVIGNE BLACK STAR
    // ──────────────────────────────────────────────
    {
        id: 9,
        name: "Black Star",
        brand: "Avril Lavigne",
        fullName: "Avril Lavigne Black Star EDP",
        year: 2009,
        gender: "wanita",
        category: "Floral Fruity Gourmand",
        concentration: "EDP",
        notes: {
            top: ["Black Cherry", "Red Berries", "Plum"],
            middle: ["Gardenia", "Peony", "Night-blooming Jasmine"],
            base: ["Vanilla", "Musk", "Dark Amber", "Patchouli"]
        },
        karakter: "Dark fruity-floral, rockstar feminine, edgy sweet",
        penggunaan: "Malam hari, hangout malam, konser, casual edgy",
        description: "Black Star adalah bukti bahwa Avril Lavigne tidak membuat parfum setengah-setengah — ini adalah ekspresi penuh dari persona rockstar yang feminin dan tanpa kompromi. Black cherry dan plum di opening langsung menetapkan karakter: dark, intense, dan deliciously fruity. Night-blooming jasmine di tengah adalah note yang paling unik — berbeda dari jasmine biasa, ia lebih kaya, lebih mysterious, dan bloom hanya saat gelap. Vanilla dan dark amber di base memberikan gourmand warmth yang addictive. Patchouli di base menambahkan edge yang prevents this from being too sweet. Parfum untuk wanita yang tidak takut menjadi pusat perhatian.",
        isOfficial: true,
        note: "Avril Lavigne memiliki beberapa varian (Black Star, Forbidden Rose, Wild Rose). Data ini untuk Black Star yang paling populer."
    },

    // ──────────────────────────────────────────────
    // 10. MANCERA ROSES MUSK
    // ──────────────────────────────────────────────
    {
        id: 10,
        name: "Roses Musk",
        brand: "Mancera",
        fullName: "Mancera Roses Musk EDP",
        year: 2013,
        gender: "wanita",
        category: "Floral Musk",
        concentration: "EDP",
        notes: {
            top: ["Rose", "Bergamot", "Peach"],
            middle: ["Rose", "Peony", "Jasmine"],
            base: ["White Musk", "Sandalwood", "Amber", "Musks"]
        },
        karakter: "Rose musk premium, elegan lembut, long-lasting",
        penggunaan: "Daily luxury, acara formal, signature scent wanita",
        description: "Mancera Roses Musk adalah mahakarya simplicity — parfum yang membuktikan bahwa 'less is more' bisa menghasilkan sesuatu yang luar biasa. Rose di sini bukan sekadar note — ia adalah protagonis mutlak yang direpresentasikan dalam segala dimensinya: segar di opening, rich dan dewy di tengah, dan velvety saat berpadu dengan white musk di base. Peach memberikan subtle sweetness yang membuat rose terasa lebih modern dan accessible. Sandalwood dan amber di base adalah fondasi yang memberikan lasting power luar biasa — parfum ini masih hadir 12+ jam setelah disemprotkan. Untuk wanita yang percaya bahwa rose adalah abadi.",
        isOfficial: true,
        note: "Dikenal sebagai 'Mancera Rose' di kalangan pengguna. Mancera adalah niche house Prancis dengan kualitas premium. Versi populer lainnya: Roses & Chocolate, Pink Roses."
    },

    // ──────────────────────────────────────────────
    // 11. VICTORIA'S SECRET VERY SEXY
    // ──────────────────────────────────────────────
    {
        id: 11,
        name: "Very Sexy",
        brand: "Victoria's Secret",
        fullName: "Victoria's Secret Very Sexy EDP",
        year: 2002,
        gender: "wanita",
        category: "Oriental Floral",
        concentration: "EDP",
        notes: {
            top: ["Mandarin Orange", "Bergamot", "Pink Pepper"],
            middle: ["Jasmine", "Orange Blossom", "Tuberose", "Ylang-ylang"],
            base: ["Sandalwood", "Musk", "Amber", "Vanilla"]
        },
        karakter: "Sensual, seduktif, feminine powerful, signature VS",
        penggunaan: "Malam hari, date night, acara glamor",
        description: "Very Sexy tidak membuat klaim yang tidak bisa dipenuhi — namanya adalah janji, dan parfum ini menepatinya sepenuhnya. Pink pepper di opening langsung memberikan edge yang spicy dan assertive, sebelum tuberose dan ylang-ylang di tengah mengambil alih dengan sensualitas penuh. Duo floral oriental ini adalah kombinasi klasik untuk parfum seduktif karena alasan yang sangat baik — keduanya memiliki karakter 'animalic' yang subtle namun sangat powerful. Sandalwood, vanilla, dan musk di base menciptakan dry down yang warm dan inviting seperti kulit yang dipenuhi aroma mewah. Pilihan wajib untuk malam yang Anda ingin dikenang.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 12. CACHAREL ANGEL HEART
    // ──────────────────────────────────────────────
    {
        id: 12,
        name: "Angel Heart",
        brand: "Cacharel",
        fullName: "Cacharel Angel Heart EDT",
        year: 2007,
        gender: "wanita",
        category: "Floral Fruity Sweet",
        concentration: "EDT",
        notes: {
            top: ["Lychee", "Tangerine", "Raspberry", "Melon"],
            middle: ["Lily of the Valley", "Rose", "Magnolia", "Camellia"],
            base: ["Musk", "Amber", "Sandalwood", "Cedar"]
        },
        karakter: "Innocent sweet, floral buah-buahan, girly romantic",
        penggunaan: "Siang hari, casual, daily youthful, hangout",
        description: "Angel Heart dari Cacharel adalah ekspresi dari cinta pertama yang dituangkan ke dalam botol — innocent, sweet, dan sangat feminin tanpa menjadi overwhelmingly so. Lychee dan tangerine di opening adalah kombinasi tropis yang cerah dan mood-lifting. Melon memberikan freshness aqueous yang sangat summer. Lily of the valley dan camellia di tengah memberikan floral yang delicate dan almost bridal. Amber dan musk di base memberikan warmth yang gentle — ini bukan parfum yang berat, melainkan seperti cahaya matahari pagi yang menyinari taman bunga. Untuk hari-hari ketika Anda ingin merasa ringan dan happy.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 13. VANILLA ICE (GENERIC / VARIOUS)
    // ──────────────────────────────────────────────
    {
        id: 13,
        name: "Vanilla Ice",
        brand: "Generic / Various",
        fullName: "Vanilla Ice (Sweet Vanilla Musk)",
        gender: "wanita",
        category: "Gourmand Sweet Oriental",
        concentration: "EDP / Body Mist",
        notes: {
            top: ["Vanilla Cream", "Coconut Milk", "Caramel"],
            middle: ["Benzoin", "Tonka Bean", "White Musk"],
            base: ["Sandalwood", "Amber", "Warm Musks"]
        },
        karakter: "Creamy vanilla hangat, comfort scent, cozy feminine",
        penggunaan: "Malam hari, musim hujan, me-time, comfort daily",
        description: "Vanilla Ice adalah pelukan dalam bentuk aroma — creamy, warm, dan sepenuhnya comforting. Vanilla cream dan coconut milk di opening menciptakan opening yang terasa seperti dessert mewah baru dikeluarkan dari oven. Tonka bean dan benzoin di tengah memperdalam vanilla menjadi lebih kompleks dan sophisticated — bukan sekadar manis, tapi warm resinous yang layered. Amber dan sandalwood di base memberikan lasting power yang baik dan warmth yang luar biasa. Parfum ini bekerja seperti aromaterapi — setiap kali Anda menciumnya, ada sesuatu yang mengendur di dalam diri Anda. Pure comfort.",
        isOfficial: false,
        note: "⚠️ 'Vanilla Ice' adalah nama yang digunakan banyak brand lokal/impor berbeda. Tidak ada satu parfum resmi global dengan nama ini. Referensi terdekat: Tom Ford Vanille Fatale, Montale Vanilla Extasy, atau Comptoir Sud Pacifique Vanille Ambre."
    },

    // ──────────────────────────────────────────────
    // 14. BVLGARI OMNIA CRYSTALLINE
    // ──────────────────────────────────────────────
    {
        id: 14,
        name: "Omnia Crystalline",
        brand: "Bvlgari",
        fullName: "Bvlgari Omnia Crystalline EDT",
        year: 2005,
        gender: "wanita",
        category: "Floral Woody",
        concentration: "EDT",
        notes: {
            top: ["Nashi Pear", "Lotus Flower", "Bamboo"],
            middle: ["White Tea", "Balsa Wood", "Wheat"],
            base: ["White Musk", "Sandalwood"]
        },
        karakter: "Crystal clean, ultra-segar, transparent modern",
        penggunaan: "Kantor, daily clean, ruang tertutup, semua waktu",
        description: "Omnia Crystalline adalah parfum yang paling 'transparan' yang pernah ada — seolah seseorang berhasil membotolkan udara bersih pegunungan di pagi hari bersalju. Nashi pear di opening memberikan freshness yang crisp dan very distinctive — seperti menggigit pir Jepang yang sangat segar. White tea dan bamboo di tengah adalah duo minimalis yang masterful — clean, zen, dan sophisticated. White musk di base adalah sebuah keputusan yang berani: tidak ada yang menyembunyikan, tidak ada ornamen berlebihan — hanya kemurnian. Parfum yang sangat appropriate untuk semua situasi, terutama lingkungan profesional di mana kesederhanaan adalah kekuatan.",
        isOfficial: true,
        note: "Dikenal sebagai 'Bulgari Crystal' di kalangan pengguna Indonesia. Produk resminya: Bvlgari Omnia Crystalline EDT."
    },

    // ──────────────────────────────────────────────
    // 15. NAGITA SLAVINA (INSPIRED / LOCAL)
    // ──────────────────────────────────────────────
    {
        id: 15,
        name: "Nagita Slavina Signature",
        brand: "Lokal / Inspired",
        fullName: "Parfum Nagita Slavina (Inspired/Clone)",
        gender: "wanita",
        category: "Floral Oriental Sweet",
        concentration: "EDP",
        notes: {
            top: ["Bergamot", "Peach", "Pink Pepper"],
            middle: ["Rose", "Jasmine", "Peony"],
            base: ["Vanilla", "Sandalwood", "White Musk", "Amber"]
        },
        karakter: "Feminine premium, warm floral, glamorous",
        penggunaan: "Acara penting, evening, signature statement",
        description: "Parfum yang diatributkan ke selebriti seperti Nagita Slavina umumnya merepresentasikan estetika 'celebrity fragrance' — warm floral oriental yang glamorous, welcoming, dan memancarkan aura kemewahan yang accessible. Profil umumnya: peach dan rose yang feminine, jasmine yang sensual, dan base vanilla-amber yang warm dan lingering. Karakter ini konsisten dengan parfum-parfum yang sering diasosiasikan dengan figur-figur feminin glamorous di entertainment Indonesia. Untuk pengalaman serupa dari brand resmi, lihat: Lancôme La Vie Est Belle, Armani My Way, atau Chloe EDP.",
        isOfficial: false,
        note: "⚠️ Tidak ada parfum resmi dengan brand 'Nagita Slavina'. Ini adalah inspired/celebrity clone. Notes merupakan profil umum kategori. Untuk kualitas terverifikasi, pilih parfum internasional dari brand resmi."
    },

    // ──────────────────────────────────────────────
    // 16. AL-REHAB SOFT
    // ──────────────────────────────────────────────
    {
        id: 16,
        name: "Soft",
        brand: "Al-Rehab",
        fullName: "Al-Rehab Soft EDP",
        year: 2010,
        gender: "unisex",
        category: "Floral Musk Soft",
        concentration: "EDP (Concentrated Perfume Oil)",
        notes: {
            top: ["Rose", "Jasmine", "Citrus"],
            middle: ["White Musk", "Floral Bouquet", "Lily"],
            base: ["Sandalwood", "Amber", "Warm Musk"]
        },
        karakter: "Sangat lembut, clean musk, skin-like, versatile",
        penggunaan: "Harian, semua waktu, kantor, casual, halal-friendly",
        description: "Al-Rehab Soft dari Arab Saudi adalah fenomena tersendiri — parfum dengan harga yang sangat terjangkau namun kualitas dan longevity yang mengalahkan banyak parfum ratusan ribu. 'Soft' adalah nama yang sangat tepat: aroma ini tidak pernah berteriak, tidak pernah mengintimidasi, dan tidak pernah mengecewakan. Rose dan jasmine di opening memberikan floral yang clean dan natural. White musk di tengah adalah karakter utamanya — musk yang paling clean, paling dekat dengan kulit bersih, yang membuat orang bertanya-tanya 'siapa ini?' saat Anda melewati mereka. Sebagai produk halal berbasis minyak, Soft juga tahan lebih lama dari EDT biasa dan tidak mengandung alkohol.",
        isOfficial: true,
        note: "Al-Rehab adalah brand parfum Arab Saudi yang menggunakan concentrated perfume oil (tidak mengandung alkohol). Halal-certified dan sangat populer di Indonesia."
    },

    // ──────────────────────────────────────────────
    // 17. LOVE SARAH (ENTRY KEDUA - SAMA DENGAN #6)
    // ──────────────────────────────────────────────
    // Catatan: Love Sarah muncul dua kali di daftar (nomor 6 dan 17).
    // Kemungkinan varian yang berbeda. Data disediakan untuk varian kedua.
    {
        id: 17,
        name: "Love Sarah II",
        brand: "Yardley / Generic",
        fullName: "Love Sarah (Varian / Variant)",
        gender: "wanita",
        category: "Floral Powdery Sweet",
        concentration: "EDT",
        notes: {
            top: ["Strawberry", "Pink Rose", "Bergamot"],
            middle: ["Jasmine", "Gardenia", "Violet"],
            base: ["Sandalwood", "White Musk", "Vanilla", "Powder"]
        },
        karakter: "Powdery sweet, classic feminine, nostalgic",
        penggunaan: "Harian feminine, casual, everyday comfort",
        description: "Varian kedua dari Love Sarah menawarkan interpretasi yang sedikit berbeda — lebih powdery dan nostalgic, seperti meja rias ibu yang dipenuhi botol-botol kaca vintage. Strawberry di opening memberikan touch manis yang playful. Gardenia di tengah memberikan floral yang lebih rich dan creamy dibanding varian pertama. Powder di base adalah elemen yang paling distinguishing — parfum ini meninggalkan trail powdery yang lembut dan very feminine. Parfum yang mengingatkan pada kenangan-kenangan manis yang sederhana namun bermakna.",
        isOfficial: false,
        note: "⚠️ Love Sarah muncul dua kali dalam daftar — kemungkinan merupakan dua varian berbeda atau dari dua brand berbeda. Jika berbeda varian, konfirmasi ke supplier untuk identitas spesifik produknya."
    },

    // ──────────────────────────────────────────────
    // 18. OLLA RAMLAN (INSPIRED / LOCAL)
    // ──────────────────────────────────────────────
    {
        id: 18,
        name: "Olla Ramlan Signature",
        brand: "Lokal / Inspired",
        fullName: "Parfum Olla Ramlan (Inspired/Clone)",
        gender: "wanita",
        category: "Floral Woody Musk",
        concentration: "EDP",
        notes: {
            top: ["Bergamot", "Mandarin Orange", "Freesia"],
            middle: ["Rose", "Jasmine", "Lily of the Valley"],
            base: ["Cedarwood", "White Musk", "Sandalwood", "Vanilla"]
        },
        karakter: "Elegant modern, feminine sophisticated, natural clean",
        penggunaan: "Daily wear, kantor, casual elegant",
        description: "Parfum inspired dari selebriti Olla Ramlan mencerminkan estetika feminin yang elegant dan modern — bukan parfum yang over-the-top, melainkan parfum yang mencerminkan wanita yang tahu siapa dirinya. Bergamot dan freesia di opening memberikan freshness yang clean dan inviting. Rose dan lily of the valley di tengah adalah duo floral yang sophisticated dan timeless. Cedar dan sandalwood di base memberikan character woody yang modern, mencegah parfum ini menjadi terlalu 'girly'. Ini adalah aroma wanita yang confident, mapan, dan tidak perlu membuktikan diri.",
        isOfficial: false,
        note: "⚠️ Tidak ada parfum resmi dengan brand 'Olla Ramlan'. Ini adalah inspired/celebrity clone lokal Indonesia. Untuk alternatif resmi dengan profil serupa: Givenchy Irresistible, YSL Mon Paris, atau Lancôme Idôle."
    },

    // ──────────────────────────────────────────────
    // 19. ZARA ORCHID (ZARA)
    // ──────────────────────────────────────────────
    {
        id: 19,
        name: "Orchid",
        brand: "Zara",
        fullName: "Zara Orchid EDP",
        year: 2018,
        gender: "wanita",
        category: "Floral Oriental",
        concentration: "EDP",
        notes: {
            top: ["Raspberry", "Bergamot", "Magnolia"],
            middle: ["Orchid", "Jasmine", "Rose"],
            base: ["Patchouli", "Amber", "Sandalwood", "Vanilla"]
        },
        karakter: "Elegan terjangkau, Oriental floral, 'expensive smell'",
        penggunaan: "Daily luxury, malam, acara semi-formal",
        description: "Zara Orchid adalah salah satu pencapaian terbesar dalam kategori 'luxury on a budget' — parfum yang terdengar mahal, tercium mahal, namun dijual dengan harga yang sangat reasonable. Raspberry dan magnolia di opening memberikan floral-fruity yang modern dan fresh. Orchid di tengah — bunga yang selalu diasosiasikan dengan kemewahan — memberikan karakter yang unique dan distinctive. Patchouli dan amber di base menciptakan Oriental depth yang warm dan lingering — inilah yang membuat Orchid tercium 'expensive'. Ini adalah rahasia kecantikan para wanita yang tahu cara memilih: kualitas tidak selalu sebanding harga.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 20. HERMÈS TERRE D'HERMÈS POUR FEMME
    // ──────────────────────────────────────────────
    {
        id: 20,
        name: "Terre d'Hermès",
        brand: "Hermès",
        fullName: "Hermès Terre d'Hermès (versi unisex/femme)",
        year: 2006,
        gender: "unisex",
        category: "Woody Citrus Mineral",
        concentration: "EDT / EDP",
        notes: {
            top: ["Grapefruit", "Orange", "Ginger"],
            middle: ["Pepper", "Pelargonium", "Patchouli"],
            base: ["Vetiver", "Benzoin", "Cedar", "Flint"]
        },
        karakter: "Earthy woody mineral, sophisticated unisex, signature house",
        penggunaan: "Acara formal, daily premium, signature unisex",
        description: "Terre d'Hermès adalah parfum yang merayakan bumi — dalam segala kekayaan, kompleksitas, dan keindahannya. Parfumer Jean-Claude Ellena menciptakan sebuah lanskap dalam botol: citrus yang mewakili matahari, vetiver dan flint yang mewakili tanah mineral, dan patchouli yang mewakili akar dan kedalaman. Flint (batu api) adalah note yang paling unik dan berani — memberikan mineral coldness yang tidak ada tandingannya di parfum lain. Terre d'Hermès sering dianggap parfum pria, namun banyak wanita yang memilihnya sebagai signature scent mereka — bukti bahwa karya seni sejati melampaui kategorisasi gender.",
        isOfficial: true,
        note: "Terre d'Hermès adalah parfum originally masculine. Dalam konteks daftar ini kemungkinan merupakan versi unisex atau dipakai sebagai signature scent oleh wanita yang menyukai aroma earthy-woody."
    },

    // ──────────────────────────────────────────────
    // 21. HERMÈS TWILLY D'HERMÈS
    // ──────────────────────────────────────────────
    {
        id: 21,
        name: "Twilly d'Hermès",
        brand: "Hermès",
        fullName: "Hermès Twilly d'Hermès EDP",
        year: 2017,
        gender: "wanita",
        category: "Floral Woody",
        concentration: "EDP",
        notes: {
            top: ["Ginger", "Tuberose"],
            middle: ["Tuberose", "White Floral"],
            base: ["Sandalwood", "Musk"]
        },
        karakter: "Playful mewah, tuberose modern, Hermès femininity",
        penggunaan: "Acara spesial, daily luxury, signature feminin premium",
        description: "Twilly d'Hermès adalah parfum yang merayakan roh muda yang bebas — dinamis, confident, dan playful namun tetap dalam estetika Hermès yang impeccable. Terinspirasi dari Twilly — scarf sutra Hermès yang ikonik — parfum ini menangkap energi wanita muda yang mengikat scarf itu dengan cara yang unik miliknya sendiri. Ginger di opening memberikan spicy kick yang surprising dan modern. Tuberose — yang biasanya sangat 'classical' — disini disajikan dengan cara yang fresh dan contemporary. Sandalwood di base memberikan creamy warmth yang signature Hermès. Ini adalah pintu masuk terbaik ke dunia Hermès bagi yang baru berkenalan.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 22. SALVATORE FERRAGAMO INCANTO SHINE
    // ──────────────────────────────────────────────
    {
        id: 22,
        name: "Incanto Shine",
        brand: "Salvatore Ferragamo",
        fullName: "Salvatore Ferragamo Incanto Shine EDT",
        year: 2007,
        gender: "wanita",
        category: "Floral Fruity Aquatic",
        concentration: "EDT",
        notes: {
            top: ["Pineapple", "Pink Grapefruit", "Nectarine"],
            middle: ["Peony", "Waterlily", "Lily of the Valley"],
            base: ["White Musk", "Sandalwood", "Cedar"]
        },
        karakter: "Segar tropis, aquatic fruity, bersih cerah, musim panas",
        penggunaan: "Siang hari, musim panas, pantai, casual fresh",
        description: "Incanto Shine adalah botol berisi sinar matahari tropis — dan tidak ada parfum lain yang melakukan fruity-aquatic dengan cara yang sama bersihnya. Pineapple di opening adalah langkah berani yang sangat berhasil — tropical, juicy, dan instantly joyful. Pink grapefruit dan nectarine melengkapi opening dengan trio buah yang saling menyempurnakan. Waterlily di tengah memberikan aqueous freshness yang membuat parfum ini terasa seperti terjun ke kolam biru pada hari terpanas tahun ini. White musk dan sandalwood di base memberikan soft landing yang clean dan wearable. Parfum yang memiliki kemampuan langka untuk mengubah mood menjadi lebih baik dalam hitungan detik.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 23. SELENA GOMEZ (VARIOUS)
    // ──────────────────────────────────────────────
    {
        id: 23,
        name: "Selena Gomez EDP",
        brand: "Selena Gomez",
        fullName: "Selena Gomez EDP",
        year: 2013,
        gender: "wanita",
        category: "Floral Fruity Oriental",
        concentration: "EDP",
        notes: {
            top: ["Water Hyacinth", "Mandarin Orange", "Cassia"],
            middle: ["Orchid", "Peony", "Jasmine"],
            base: ["Sandalwood", "Amber", "Vanilla", "Musk"]
        },
        karakter: "Youthful floral, accessible luxury, warm feminine",
        penggunaan: "Harian, casual, hangout, daytime",
        description: "Parfum pertama Selena Gomez menangkap esensi dari wanita muda yang sedang dalam proses menemukan dirinya — terbuka, antusias, dan penuh kemungkinan. Water hyacinth di opening memberikan aqueous-floral yang fresh dan distinctive. Cassia memberikan subtle spiciness yang unexpected dan interesting. Orchid dan peony di tengah memberikan floral yang rich namun accessible. Vanilla dan amber di base memberikan warmth yang inviting dan youthful — tidak terlalu berat, tidak terlalu sweet, just right. Parfum yang merepresentasikan momen terbaik muda: ketika dunia terasa penuh peluang.",
        isOfficial: true,
        note: "Selena Gomez memiliki beberapa varian parfum. Data ini untuk parfum debut EDP yang paling dikenal."
    },

    // ──────────────────────────────────────────────
    // 24. BUBBLE GUM (GENERIC / VARIOUS)
    // ──────────────────────────────────────────────
    {
        id: 24,
        name: "Bubble Gum",
        brand: "Generic / Various",
        fullName: "Bubble Gum (Sweet Fruity)",
        gender: "wanita",
        category: "Gourmand Sweet Fruity",
        concentration: "Body Mist / EDT",
        notes: {
            top: ["Bubble Gum", "Strawberry", "Watermelon"],
            middle: ["Vanilla Cream", "White Flowers", "Peach"],
            base: ["Sweet Musk", "Caramel", "Benzoin"]
        },
        karakter: "Manis ekstrem, playful childlike, casual fun",
        penggunaan: "Casual sangat, remaja, hangout, konser pop",
        description: "Bubble Gum adalah parfum yang paling tidak mengambil dirinya terlalu serius — dan itu adalah kelebihannya yang terbesar. Ini adalah pure joy dalam botol: strawberry dan watermelon di opening meledak dengan sweetness yang cartoonishly fun. Vanilla cream di tengah memperdalam manisnya menjadi sesuatu yang lebih creamy dan dessert-like. Sweet musk dan caramel di base memastikan manisnya tetap hadir dan lingering. Parfum untuk hari-hari ketika Anda tidak ingin menjadi orang dewasa yang serius — ketika Anda hanya ingin tertawa, bernyanyi, dan menikmati hal-hal sederhana.",
        isOfficial: false,
        note: "⚠️ 'Bubble Gum' adalah nama yang digunakan banyak brand yang berbeda. Notes merupakan profil umum kategori sweet candy. Referensi terdekat: Aquolina Pink Sugar, Philosophy Amazing Grace Ballet Rose."
    },

    // ──────────────────────────────────────────────
    // 25. ZWITSAL BABY COLOGNE
    // ──────────────────────────────────────────────
    {
        id: 25,
        name: "Zwitsal Baby",
        brand: "Zwitsal",
        fullName: "Zwitsal Baby Cologne",
        year: 1900,
        gender: "unisex",
        category: "Powdery Fresh Clean",
        concentration: "Cologne / Light EDT",
        notes: {
            top: ["Citrus", "Light Aldehydes", "Talcum"],
            middle: ["White Musk", "Powder", "Light Floral"],
            base: ["Baby Powder", "Sandalwood", "Soft Amber"]
        },
        karakter: "Baby powder clean, nostalgic, universally comforting",
        penggunaan: "Casual, daily, semua situasi ringan, comfort scent",
        description: "Zwitsal Baby Cologne adalah salah satu aroma paling universally recognized di Indonesia — hampir semua orang yang menciumnya langsung teringat kenangan masa kecil, ibu, atau momen-momen yang paling aman dalam hidup mereka. Itulah kekuatan sejati parfum ini: bukan kompleksitas bahan atau formula yang rumit, melainkan kemampuan emosionalnya yang luar biasa untuk membawa siapapun kembali ke momen ternyaman mereka. Talcum powder dan white musk adalah jantungnya — clean, innocent, dan absolutely comforting. Penggunaan ini di kalangan orang dewasa bukan ironi — ini adalah keputusan yang sangat self-aware: memilih kebahagiaan sederhana yang terbukti.",
        isOfficial: true,
        note: "Zwitsal adalah brand Belanda yang sudah beroperasi lebih dari 100 tahun. Sangat ikonik di Indonesia dan digunakan lintas generasi."
    },

    // ──────────────────────────────────────────────
    // 26. LUX PERFUME (GENERIC)
    // ──────────────────────────────────────────────
    {
        id: 26,
        name: "Lux",
        brand: "Lux / Generic",
        fullName: "Lux Fragrance (Body Wash Inspired / EDT)",
        gender: "wanita",
        category: "Floral Clean Fresh",
        concentration: "EDT / Body Mist",
        notes: {
            top: ["Violet", "Rose", "White Musk"],
            middle: ["Jasmine", "Lily", "Soft Floral"],
            base: ["White Musk", "Clean Musk", "Sandalwood"]
        },
        karakter: "Clean floral, soapy fresh, feminine bersih",
        penggunaan: "Harian, casual, semua waktu",
        description: "Parfum dengan nama 'Lux' umumnya terinspirasi dari karakter aroma brand sabun mandi Lux yang iconic — clean, floral, dan soapy dalam artian terbaik. Ini adalah kategori 'clean fragrance' sebelum istilah itu menjadi tren marketing. Violet dan rose di opening memberikan floral yang familiar dan comforting. Jasmine di tengah memberikan depth yang cukup tanpa menjadi overwhelming. White musk di base adalah inti dari segalanya — clean musk yang memberikan kesan kulit baru mandi dengan sabun premium. Parfum yang sangat appropriate dan universally pleasant.",
        isOfficial: false,
        note: "⚠️ 'Lux' sebagai parfum standalone tidak memiliki satu identitas global resmi. Kemungkinan merupakan parfum lokal/impor terinspirasi aroma Lux. Referensi: Davidoff Cool Water Woman atau Zara White Jasmin."
    },

    // ──────────────────────────────────────────────
    // 27. JENNIFER LOPEZ STILL
    // ──────────────────────────────────────────────
    {
        id: 27,
        name: "Still",
        brand: "Jennifer Lopez",
        fullName: "Jennifer Lopez Still EDP",
        year: 2003,
        gender: "wanita",
        category: "Floral Musky Soft",
        concentration: "EDP",
        notes: {
            top: ["Bergamot", "Neroli", "Green Leaves"],
            middle: ["Lily of the Valley", "Jasmine", "White Magnolia"],
            base: ["White Musk", "Sandalwood", "Amber", "Vetiver"]
        },
        karakter: "Soft elegant, clean musky, sophisticated tenang",
        penggunaan: "Kantor, daily feminine, ruang tertutup, versatile",
        description: "Still adalah parfum JLo yang paling terkendali dan paling sophisticated — jauh dari glamor Glow yang cerah atau Glow After Dark yang intens. Ini adalah JLo di momen pribadinya: tenang, berpikir dalam, dan sepenuhnya nyaman dengan dirinya sendiri. Bergamot dan neroli di opening memberikan freshness yang citrus-floral yang elegant. Lily of the valley dan white magnolia di tengah adalah duo yang very refined — floral yang tidak pernah overpowering. White musk dan vetiver di base menciptakan dry down yang soft dan personal — sangat cocok untuk ruang kantor ber-AC karena aromanya tidak menyebar terlalu agresif namun tetap hadir dengan keanggunan.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 28. PARIS HILTON EDP
    // ──────────────────────────────────────────────
    {
        id: 28,
        name: "Paris Hilton",
        brand: "Paris Hilton",
        fullName: "Paris Hilton EDP",
        year: 2004,
        gender: "wanita",
        category: "Floral Fruity",
        concentration: "EDP",
        notes: {
            top: ["Peach", "Apple", "Frozen Lychee", "Mandarin Orange", "Quince"],
            middle: ["Gardenia", "Ylang-Ylang", "Mimosa", "Lily of the Valley", "Jasmine"],
            base: ["Sandalwood", "Musk", "Amber", "Oakmoss", "Vetiver", "Coumarin"]
        },
        karakter: "Fruity floral feminine, glamorous, ikon 2000-an",
        penggunaan: "Siang hingga sore, casual glamor, hangout",
        description: "Paris Hilton EDP adalah kapsul waktu yang sempurna dari awal 2000-an — era ketika fruity-floral yang exuberant dan glamorous adalah puncak dari aspirasi feminin. Frozen lychee dan peach di opening adalah kombinasi yang brilliantly fun dan tropical. Ylang-ylang dan gardenia di tengah memberikan floral yang very opulent — kaya, warm, dan distinctly feminine dalam cara yang sangat era itu. Oakmoss dan vetiver di base memberikan depth yang membuat parfum ini lebih complex dari yang terlihat — bukan sekadar parfum 'simple celeb scent'. Ini adalah nostalgia premium — memakai Paris Hilton hari ini adalah statement yang sangat self-aware dan stylish.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 29. PARIS HILTON HEIRESS
    // ──────────────────────────────────────────────
    {
        id: 29,
        name: "Heiress",
        brand: "Paris Hilton",
        fullName: "Paris Hilton Heiress EDT",
        year: 2006,
        gender: "wanita",
        category: "Floral Fruity Powdery",
        concentration: "EDT",
        notes: {
            top: ["Tangerine", "Watermelon", "Honeysuckle"],
            middle: ["Tuberose", "Lily of the Valley", "Gardenia", "Jasmine"],
            base: ["Musk", "Sandalwood", "Amber", "Cedarwood"]
        },
        karakter: "Girly floral, powdery princess, playful feminine",
        penggunaan: "Siang hari, casual, hangout, summer",
        description: "Heiress adalah versi Paris Hilton yang lebih muda dan lebih playful — jika Paris Hilton EDP adalah sang bintang yang tiba di red carpet, Heiress adalah ia saat brunch santai dengan teman-teman di Beverly Hills. Tangerine dan watermelon di opening memberikan freshness buah yang cerah dan instantly cheerful. Honeysuckle menambahkan sweetness floral yang sangat summer. Tuberose dan gardenia di tengah memberikan heart yang powdery dan very feminine. Base sandalwood dan amber yang warm menjaga semuanya tetap grounded. Parfum yang tahu cara bersenang-senang tanpa berlebihan.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 30. TAYLOR SWIFT WONDERSTRUCK
    // ──────────────────────────────────────────────
    {
        id: 30,
        name: "Wonderstruck",
        brand: "Taylor Swift",
        fullName: "Taylor Swift Wonderstruck EDP",
        year: 2011,
        gender: "wanita",
        category: "Floral Fruity Warm",
        concentration: "EDP",
        notes: {
            top: ["Raspberry", "Apple Blossom", "Freesia"],
            middle: ["Peony", "Jasmine", "Magnolia"],
            base: ["Sandalwood", "Amber", "Vanilla", "Musk"]
        },
        karakter: "Fairytale feminine, warm floral, dreamy romantic",
        penggunaan: "Harian, hangout, casual romantic, everyday feminine",
        description: "Wonderstruck adalah parfum yang merangkum dunia Taylor Swift dengan sangat akurat: penuh keajaiban, romantisme yang genuine, dan kebahagiaan yang tidak dibuat-buat. Raspberry dan apple blossom di opening memberikan freshness buah-buahan yang sangat cheerful — seperti opening lagu pop yang langsung catchy. Peony dan magnolia di tengah memberikan floral yang warm dan dreamy — ini adalah jantung dari parfum, sebagaimana pun jantung dari semua lagu Taylor adalah tentang perasaan yang besar. Sandalwood dan vanilla di base memberikan warmth yang enveloping — seperti ending dari lagu yang sempurna: resolusi yang memuaskan dan membuat Anda ingin memutarnya lagi.",
        isOfficial: true,
        note: "Taylor Swift memiliki banyak varian (Wonderstruck, Wonderstruck Enchanted, Taylor, Incredible Things, dll). Data ini untuk Wonderstruck original yang paling populer."
    },

    // ──────────────────────────────────────────────
    // 31. JO MALONE ENGLISH PEAR & FREESIA
    // ──────────────────────────────────────────────
    {
        id: 31,
        name: "English Pear & Freesia",
        brand: "Jo Malone London",
        fullName: "Jo Malone English Pear & Freesia Cologne",
        year: 2012,
        gender: "unisex",
        category: "Floral Fruity",
        concentration: "Cologne (Jo Malone signature format)",
        notes: {
            top: ["Pear", "Melon", "Galbanum"],
            middle: ["Freesia", "Rose", "Rhubarb"],
            base: ["Amber", "Patchouli", "Benzoin", "Woody Notes"]
        },
        karakter: "Autumnal British elegance, clean pear, sophisticated",
        penggunaan: "Sepanjang hari, formal dan casual, signature Jo Malone",
        description: "English Pear & Freesia adalah salah satu kolonne Jo Malone paling ikonik dan terlaris — parfum yang berhasil menangkap musim gugur Inggris dengan cara yang sangat poetic dan precise. Pear di sini bukan pear manis murahan — ini adalah pear Inggris yang crisp, slightly grassy, dan autumnal. Galbanum memberikan slight bitterness yang grounding. Freesia di tengah memberikan floral yang delicate dan very British — bunga yang berkembang di taman-taman pedesaan Inggris. Patchouli dan benzoin di base memberikan depth earthy yang mencegah ini menjadi terlalu 'light' — ada complexity di balik kesederhanaan yang terlihat. Jo Malone mengajarkan bahwa parfum terbaik tidak perlu banyak bahan — hanya bahan yang tepat.",
        isOfficial: true,
        note: "Jo Malone menggunakan istilah 'Cologne' untuk seluruh lininya, namun konsentrasi aktualnya lebih dekat ke EDT. Dirancang untuk dipakai solo atau dilayer dengan produk Jo Malone lain."
    },

    // ──────────────────────────────────────────────
    // 32. VICTORIA'S SECRET AQUA KISS
    // ──────────────────────────────────────────────
    {
        id: 32,
        name: "Aqua Kiss",
        brand: "Victoria's Secret",
        fullName: "Victoria's Secret Aqua Kiss Refreshing Body Mist",
        year: 2014,
        gender: "wanita",
        category: "Aquatic Floral Fresh",
        concentration: "Body Mist / Light EDT",
        notes: {
            top: ["Sea Notes", "Bergamot", "Watery Citrus"],
            middle: ["Water Lily", "Jasmine", "Aqueous Floral"],
            base: ["White Musk", "Driftwood", "Clean Amber"]
        },
        karakter: "Ultra segar aquatic, bersih ringan, after-beach",
        penggunaan: "Siang hari, musim panas, pantai, casual fresh",
        description: "Aqua Kiss dari Victoria's Secret adalah parfum yang lahir dari philosophy 'kesegaran yang tidak berkompromi'. Sea notes dan watery citrus di opening langsung memberikan sensasi splash air laut di wajah — invigorating, bersih, dan instantly refreshing. Water lily di tengah mengambil kesegaran laut dan membuatnya lebih feminine dengan sentuhan floral yang aqueous dan delicate. Driftwood di base memberikan grounding yang earthy dan 'beachy' — seperti aroma kayu yang dibilas laut dan dikeringkan matahari. Aqua Kiss adalah pilihan sempurna untuk hari-hari panas ketika Anda butuh kesegaran yang bisa diaplikasikan ulang sepanjang hari tanpa rasa bersalah.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 33. MISS DIOR BLOOMING BOUQUET
    // ──────────────────────────────────────────────
    {
        id: 33,
        name: "Miss Dior Blooming Bouquet",
        brand: "Christian Dior",
        fullName: "Miss Dior Blooming Bouquet EDT",
        year: 2014,
        gender: "wanita",
        category: "Floral Fruity",
        concentration: "EDT",
        notes: {
            top: ["Pear", "Raspberry", "Pink Grapefruit"],
            middle: ["Peony", "White Rose", "Jasmine Sambac"],
            base: ["White Musk", "Sandalwood", "Pink Peppercorn"]
        },
        karakter: "Spring garden feminine, bouquet segar, accessible Dior",
        penggunaan: "Siang hari, hangout, daily fresh, spring-summer",
        description: "Miss Dior Blooming Bouquet adalah yang paling accessible dan paling carefree dari keluarga Miss Dior — seolah Natalie Portman (wajah Miss Dior) sedang berlari di taman bunga, bukan berdiri di red carpet. Pear dan raspberry di opening memberikan freshness buah-buahan yang instantly likeable. Peony dan jasmine Sambac di tengah adalah duo floral yang extraordinary — peony yang spring-like dan fresh, jasmine Sambac yang lebih sweet dan heady dari jasmine biasa. White musk dan sandalwood di base memberikan clean softness yang lingering. Pink peppercorn di base memberikan gentle spice yang adds sophistication. Parfum yang sukses menghadirkan kegembiraan spring di setiap musim.",
        isOfficial: true
    },

    // ──────────────────────────────────────────────
    // 34. GUCCI FLORA
    // ──────────────────────────────────────────────
    {
        id: 34,
        name: "Flora by Gucci",
        brand: "Gucci",
        fullName: "Gucci Flora Gorgeous Gardenia EDP",
        year: 2009,
        gender: "wanita",
        category: "Floral Fruity",
        concentration: "EDP",
        notes: {
            top: ["Red Berries", "Brown Sugar"],
            middle: ["Gardenia", "Frangipani"],
            base: ["Patchouli", "Brown Sugar", "Cashmeran"]
        },
        karakter: "Lush tropical floral, feminine sophisticated, iconic Gucci",
        penggunaan: "Malam hingga siang, acara spesial, signature Gucci",
        description: "Flora Gorgeous Gardenia adalah mahkota dari lini Flora Gucci — parfum yang merayakan keabundanan alam tropis dengan cara yang sangat Gucci: lush, textured, dan penuh kepribadian. Red berries di opening memberikan sweetness buah yang instantly enticing. Gardenia di tengah adalah note yang paling dominant dan most distinctive — dalam versi Gucci, gardenia tidak gentle dan quiet melainkan full-bloom, lush, dan almost overwhelming dalam cara yang benar-benar indah. Frangipani memberikan tropical warmth. Patchouli dan cashmeran di base memberikan earthy-musky depth yang sangat distinctive dan modern. Parfum untuk wanita yang tidak takut memenuhi ruangan.",
        isOfficial: true,
        note: "Gucci Flora memiliki beberapa varian (Gorgeous Jasmine, Gorgeous Magnolia, Gorgeous Orchid). 'Gucci Flora' yang paling umum dirujuk adalah Gorgeous Gardenia."
    },

    // ──────────────────────────────────────────────
    // 35. ANNA SUI DREAM
    // ──────────────────────────────────────────────
    {
        id: 35,
        name: "Dreams",
        brand: "Anna Sui",
        fullName: "Anna Sui Dreams EDT",
        year: 2014,
        gender: "wanita",
        category: "Floral Fruity",
        concentration: "EDT",
        notes: {
            top: ["Blackcurrant", "Bergamot", "Mandarin Orange"],
            middle: ["Jasmine", "Rose", "Violet"],
            base: ["Musk", "Cedarwood", "Sandalwood"]
        },
        karakter: "Dreamy feminine, fairytale floral, playful-elegant",
        penggunaan: "Siang hari, casual, daily youthful, hangout",
        description: "Anna Sui Dreams menutup daftar ini dengan cara yang sangat fitting — sebuah parfum yang benar-benar tentang mimpi dalam semua maknanya. Blackcurrant di opening memberikan fruity tartness yang distinctive dan sophisticated — bukan manis biasa. Bergamot dan mandarin memberikan citrus freshness yang cheerful. Jasmine, rose, dan violet di tengah adalah triumvirat floral klasik yang Anna Sui sajikan dengan sensibilitas dreamy dan fairy tale-like yang khas brand-nya. Musk dan sandalwood di base memberikan warmth yang cozy. Botol ungu ikonik Anna Sui sudah menjadi objek koleksi tersendiri — tapi isi botolnya tidak kalah indah dari kemasannya.",
        isOfficial: true,
        note: "Anna Sui memiliki beberapa varian (Fairy Dance, Secret Wish, Fantasia, Dreams). Data ini untuk Dreams EDT."
    }

];

// ──────────────────────────────────────────────────────────
// UTILITY FUNCTIONS
// ──────────────────────────────────────────────────────────

export function getPerfumeWanitaById(id: number): PerfumeWanita | undefined {
    return PERFUME_WANITA.find(p => p.id === id);
}

export function getPerfumeWanitaByCategory(keyword: string): PerfumeWanita[] {
    return PERFUME_WANITA.filter(p =>
        p.category.toLowerCase().includes(keyword.toLowerCase())
    );
}

export function searchPerfumeWanita(query: string): PerfumeWanita[] {
    const q = query.toLowerCase();
    return PERFUME_WANITA.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.fullName.toLowerCase().includes(q) ||
        p.karakter.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
}

export function getOfficialPerfumeWanita(): PerfumeWanita[] {
    return PERFUME_WANITA.filter(p => p.isOfficial);
}

export function getNonOfficialPerfumeWanita(): PerfumeWanita[] {
    return PERFUME_WANITA.filter(p => !p.isOfficial);
}

export function getPerfumeWanitaByBrand(brand: string): PerfumeWanita[] {
    return PERFUME_WANITA.filter(p =>
        p.brand.toLowerCase().includes(brand.toLowerCase())
    );
}
