export interface PerfumeItem {
  id: string;
  name: string;
  brand?: string;
  fullName: string;
  category: 'cowok' | 'cewek';
  order: number;
  note?: string;

  // 🔹 Fragrance Profile
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };

  // 🔹 Aroma Character
  character: {
    mainImpression: string;
    family: string;
    intensity: 'Mild' | 'Moderate' | 'Strong' | 'Very Strong';
    sweetness: number; // 1-5
    freshness: number; // 1-5
  };

  // 🔹 Scent Personality
  personality: {
    vibe: string;
    scale: 'Masculine' | 'Feminine' | 'Unisex';
    uniqueness: number; // 1-5
  };

  // 🔹 Best For
  bestFor: {
    occasion: string;
    time: 'Day' | 'Night' | 'Anytime' | 'Day/Night';
    weather: 'Summer' | 'Winter' | 'Spring' | 'Autumn' | 'Any' | 'Cool';
    ageRange: string;
  };

  // 🔹 Performance
  performance: {
    longevity: string;
    projection: string;
    sillage: string;
    complimentFactor: number; // 1-5
  };

  // 🔹 Additional Info
  additional: {
    concentration: 'EDP' | 'EDT' | 'Extrait' | 'EDC';
    style: string;
    situation: string;
  };

  description: string;
  karakter?: string;
  penggunaan?: string;
  is_official?: boolean;
}

const aromaCowokBase: Omit<PerfumeItem, 'category'>[] = [
  {
    id: 'cowok-1', name: 'Dunhill Blue', fullName: 'Dunhill Desire Blue', order: 1,
    notes: { top: ['Litchi', 'Mandarin Orange', 'Lotus', 'Bergamot'], middle: ['Sea Notes', 'Orange', 'Brazilian Rosewood'], base: ['Tonka Bean', 'Amber', 'Musk', 'Benzoin'] },
    character: { mainImpression: 'Segar & Akuatik', family: 'Aromatic Fruity', intensity: 'Moderate', sweetness: 2, freshness: 5 },
    personality: { vibe: 'Relaxed & Confident', scale: 'Masculine', uniqueness: 3 },
    bestFor: { occasion: 'Casual, Outdoor', time: 'Day', weather: 'Summer', ageRange: '18 - 45' },
    performance: { longevity: '7-9 Hours', projection: 'Moderate', sillage: 'Intimate', complimentFactor: 4 },
    additional: { concentration: 'EDP', style: 'Modern Fresh', situation: 'Daily work or beach trip' },
    description: 'Aroma laut yang segar dipadukan dengan sentuhan buah tropis.'
  },
  {
    id: 'cowok-2', name: '212 Man', fullName: '212 Men by Carolina Herrera', order: 2,
    notes: { top: ['Green Notes', 'Spices', 'Lavender', 'Bergamot'], middle: ['Ginger', 'Gardenia', 'Violet', 'Sage'], base: ['Musk', 'Sandalwood', 'Incense', 'Guaiac Wood'] },
    character: { mainImpression: 'Modern & Urban', family: 'Woody Floral Musk', intensity: 'Strong', sweetness: 1, freshness: 4 },
    personality: { vibe: 'Professional & Radiant', scale: 'Masculine', uniqueness: 4 },
    bestFor: { occasion: 'Business Meeting, Office', time: 'Day', weather: 'Spring', ageRange: '25 - 50' },
    performance: { longevity: '8-10 Hours', projection: 'Strong', sillage: 'Radiant', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Metropolitan', situation: 'Formal office settings' },
    description: 'Aroma modern yang menangkap semangat kota New York.'
  },
  {
    id: 'cowok-3', name: 'Libre', fullName: 'Libre (YSL) Inspired', order: 3,
    notes: { top: ['Lavender', 'Mandarin Orange', 'Black Currant'], middle: ['Orange Blossom', 'Jasmine'], base: ['Madagascar Vanilla', 'Musk', 'Cedar'] },
    character: { mainImpression: 'Elegan & Berani', family: 'Amber Fougere', intensity: 'Strong', sweetness: 4, freshness: 2 },
    personality: { vibe: 'Luxury & Bold', scale: 'Unisex', uniqueness: 5 },
    bestFor: { occasion: 'Formal Dinner, Party', time: 'Night', weather: 'Winter', ageRange: 'All Ages' },
    performance: { longevity: '10-12 Hours', projection: 'Strong', sillage: 'Heavy', complimentFactor: 5 },
    additional: { concentration: 'Extrait', style: 'Couture', situation: 'Special evening events' },
    description: 'Kebebasan dalam botol. Perpaduan lavender dari Perancis dengan sentuhan vanilla.'
  },
  {
    id: 'cowok-4', name: 'Dior Sauvage', fullName: 'Christian Dior Sauvage', order: 4,
    notes: { top: ['Calabrian Bergamot', 'Pepper'], middle: ['Sichuan Pepper', 'Lavender', 'Vetiver'], base: ['Ambroxan', 'Cedar', 'Labdanum'] },
    character: { mainImpression: 'Raw & Noble', family: 'Aromatic Fougere', intensity: 'Very Strong', sweetness: 2, freshness: 4 },
    personality: { vibe: 'Alpha & Adventurous', scale: 'Masculine', uniqueness: 4 },
    bestFor: { occasion: 'Date Night, All Occasions', time: 'Anytime', weather: 'Any', ageRange: '20 - 45' },
    performance: { longevity: '10+ Hours', projection: 'Huge', sillage: 'Radiant', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Signature Scent', situation: 'When you want to be noticed' },
    description: 'Aroma yang sangat populer dengan ledakan Bergamot dan Ambroxan.'
  },
  {
    id: 'cowok-5', name: 'Creed Aventus', fullName: 'Creed Aventus', order: 5,
    notes: { top: ['Pineapple', 'Bergamot', 'Black Currant'], middle: ['Birch', 'Patchouli', 'Rose'], base: ['Musk', 'Oak Moss', 'Vanilla'] },
    character: { mainImpression: 'Powerful & Successful', family: 'Fruity Chypre', intensity: 'Strong', sweetness: 3, freshness: 3 },
    personality: { vibe: 'Leadership & Prestige', scale: 'Masculine', uniqueness: 5 },
    bestFor: { occasion: 'Achievement, Wedding', time: 'Anytime', weather: 'Any', ageRange: '28+' },
    performance: { longevity: '8-10 Hours', projection: 'Excellent', sillage: 'Memorable', complimentFactor: 5 },
    additional: { concentration: 'Extrait', style: 'Iconic Royal', situation: 'Elite social gatherings' },
    description: 'Dikenal sebagai aroma para pemimpin. Kombinasi nanas segar dan kayu smoky.'
  },
  {
    id: 'cowok-6', name: 'Acqua di Gio', fullName: 'Giorgio Armani Acqua di Gio', order: 6,
    notes: { top: ['Lime', 'Lemon', 'Bergamot', 'Jasmine'], middle: ['Sea Notes', 'Peach', 'Freeseia'], base: ['White Musk', 'Cedar', 'Oakmoss'] },
    character: { mainImpression: 'Fresh & Iconic', family: 'Aromatic Aquatic', intensity: 'Moderate', sweetness: 1, freshness: 5 },
    personality: { vibe: 'Classic & Clean', scale: 'Masculine', uniqueness: 3 },
    bestFor: { occasion: 'Office, Daily', time: 'Day', weather: 'Summer', ageRange: 'All Ages' },
    performance: { longevity: '6-8 Hours', projection: 'Moderate', sillage: 'Clean', complimentFactor: 4 },
    additional: { concentration: 'EDP', style: 'Mediterranean', situation: 'Sunny days by the water' },
    description: 'Definisi aroma segar laut yang abadi.'
  },
  {
    id: 'cowok-7', name: 'Baccarat Rouge', fullName: 'MFK Baccarat Rouge 540', order: 7,
    notes: { top: ['Saffron', 'Jasmine'], middle: ['Amberwood', 'Ambergris'], base: ['Fir Resin', 'Cedar'] },
    character: { mainImpression: 'Sweet & Woody', family: 'Amber Floral', intensity: 'Strong', sweetness: 5, freshness: 1 },
    personality: { vibe: 'Opulent & Enigmatic', scale: 'Unisex', uniqueness: 5 },
    bestFor: { occasion: 'Events, Red Carpet', time: 'Anytime', weather: 'Cool', ageRange: '25+' },
    performance: { longevity: '12+ Hours', projection: 'Huge', sillage: 'Enchanting', complimentFactor: 5 },
    additional: { concentration: 'Extrait', style: 'Niche Masterpiece', situation: 'Formal luxury events' },
    description: 'Aroma kristal yang bercahaya dan sangat mewah.'
  },
  {
    id: 'cowok-8', name: 'Invictus', fullName: 'Paco Rabanne Invictus', order: 8,
    notes: { top: ['Sea Notes', 'Grapefruit', 'Mandarin Orange'], middle: ['Bay Leaf', 'Jasmine'], base: ['Ambergris', 'Guaiac Wood', 'Oakmoss'] },
    character: { mainImpression: 'Sporty & Energetic', family: 'Woody Aquatic', intensity: 'Strong', sweetness: 3, freshness: 4 },
    personality: { vibe: 'Victory & Dynamic', scale: 'Masculine', uniqueness: 4 },
    bestFor: { occasion: 'Gym, Casual Hangout', time: 'Day', weather: 'Any', ageRange: '15-35' },
    performance: { longevity: '8-10 Hours', projection: 'Strong', sillage: 'Youthful', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Vibrant Sport', situation: 'Active social life' },
    description: 'Aroma trofi kemenangan bagi pria yang dinamis.'
  },
  {
    id: 'cowok-9', name: 'Eros', fullName: 'Versace Eros', order: 9,
    notes: { top: ['Mint', 'Green Apple', 'Lemon'], middle: ['Tonka Bean', 'Ambroxan', 'Geranium'], base: ['Madagascar Vanilla', 'Virginian Cedar', 'Vetiver'] },
    character: { mainImpression: 'Seductive & Vibrant', family: 'Aromatic Fougere', intensity: 'Very Strong', sweetness: 4, freshness: 3 },
    personality: { vibe: 'Playful & Magnetic', scale: 'Masculine', uniqueness: 4 },
    bestFor: { occasion: 'Clubbing, Night Out', time: 'Night', weather: 'Any', ageRange: '18-40' },
    performance: { longevity: '10-12 Hours', projection: 'Beast Mode', sillage: 'Noticeable', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Italian Glamour', situation: 'Parties and loud environments' },
    description: 'Aroma cinta dan gairah yang membara.'
  },
  {
    id: 'cowok-10', name: 'Bleu de Chanel', fullName: 'Bleu de Chanel Parfum', order: 10,
    notes: { top: ['Lemon Zest', 'Bergamot', 'Mint', 'Artemisia'], middle: ['Lavender', 'Pineapple', 'Geranium', 'Green Notes'], base: ['Sandalwood', 'Cedar', 'Amberwood', 'Tonka Bean'] },
    character: { mainImpression: 'Clean & Luxurious', family: 'Woody Aromatic', intensity: 'Strong', sweetness: 2, freshness: 3 },
    personality: { vibe: 'Sophisticated & Deep', scale: 'Masculine', uniqueness: 4 },
    bestFor: { occasion: 'Black Tie, Executive', time: 'Anytime', weather: 'Any', ageRange: '25+' },
    performance: { longevity: '8-10 Hours', projection: 'Moderate', sillage: 'Sophisticated', complimentFactor: 5 },
    additional: { concentration: 'Extrait', style: 'Modern Classic', situation: 'High-stakes meetings' },
    description: 'Warna biru yang melambangkan kebebasan dan kemewahan pria.'
  }
];

// Replicating/Expanding for more items... (Simulating 30+ items)
for (let i = 11; i <= 35; i++) {
  aromaCowokBase.push({
    ...aromaCowokBase[i % 10],
    id: `cowok-${i}`,
    name: `${aromaCowokBase[i % 10].name} Gold Edition`,
    order: i,
    description: `Varian eksklusif dengan sentuhan aroma yang lebih mendalam dan intens.`
  });
}

const aromaCewekBase: Omit<PerfumeItem, 'category'>[] = [
  {
    id: 'cewek-1', name: 'Scandalous', fullName: 'Victoria\'s Secret Scandalous', order: 1,
    notes: { top: ['Raspberry liqueur'], middle: ['Black Peony'], base: ['Praline'] },
    character: { mainImpression: 'Sexy & Sweet', family: 'Floral Fruity', intensity: 'Moderate', sweetness: 5, freshness: 2 },
    personality: { vibe: 'Provocative & Glamour', scale: 'Feminine', uniqueness: 4 },
    bestFor: { occasion: 'Date Night, Romantic', time: 'Night', weather: 'Any', ageRange: '20 - 40' },
    performance: { longevity: '6-8 Hours', projection: 'Moderate', sillage: 'Intimate', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Seductive', situation: 'Intimate dinners' },
    description: 'Aroma mewah yang memikat dengan sentuhan Raspberry.'
  },
  {
    id: 'cewek-2', name: 'Bombshell', fullName: 'Victoria\'s Secret Bombshell', order: 2,
    notes: { top: ['Passionfruit', 'Grapefruit', 'Pineapple'], middle: ['Peony', 'Vanilla Orchid'], base: ['Musk', 'Woody Notes'] },
    character: { mainImpression: 'Fresh & Confident', family: 'Floral Fruity', intensity: 'Moderate', sweetness: 4, freshness: 4 },
    personality: { vibe: 'Cheerful & Radiant', scale: 'Feminine', uniqueness: 3 },
    bestFor: { occasion: 'Daily Travel, Social', time: 'Day', weather: 'Summer', ageRange: '15 - 35' },
    performance: { longevity: '7-9 Hours', projection: 'Moderate', sillage: 'Noticeable', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Iconic Girly', situation: 'Tropical and bright days' },
    description: 'Aroma paling laris dengan buah markisa yang ceria.'
  },
  {
    id: 'cewek-3', name: 'Selena Gomez', fullName: 'Selena Gomez Eau de Parfum Inspired', order: 3,
    notes: { top: ['Orange', 'Pineapple', 'Raspberry'], middle: ['Freesia', 'Cosmos Flower'], base: ['Vanilla', 'Coconut', 'Amber'] },
    character: { mainImpression: 'Sweet Chocolate & Berry', family: 'Floral Fruity Gourmand', intensity: 'Moderate', sweetness: 5, freshness: 3 },
    personality: { vibe: 'Youthful & Playful', scale: 'Feminine', uniqueness: 4 },
    bestFor: { occasion: 'Casual Outing', time: 'Anytime', weather: 'Any', ageRange: '15 - 30' },
    performance: { longevity: '6-8 Hours', projection: 'Moderate', sillage: 'Soft', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Sweet Pop', situation: 'Hanging out with friends' },
    description: 'Manis buah beri dengan sentuhan cokelat di akhir.'
  },
  {
    id: 'cewek-4', name: 'Black Opium', fullName: 'YSL Black Opium', order: 4,
    notes: { top: ['Pear', 'Pink Pepper', 'Orange Blossom'], middle: ['Coffee', 'Jasmine', 'Bitter Almond'], base: ['Vanilla', 'Patchouli', 'Cedar'] },
    character: { mainImpression: 'Addictive & Dark', family: 'Amber Vanilla', intensity: 'Strong', sweetness: 4, freshness: 1 },
    personality: { vibe: 'Mysterious & Rock', scale: 'Feminine', uniqueness: 5 },
    bestFor: { occasion: 'Night Events, Party', time: 'Night', weather: 'Winter', ageRange: '20+' },
    performance: { longevity: '8-10 Hours', projection: 'Strong', sillage: 'Legendary', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Edgy Luxury', situation: 'Nightclubs or winter evenings' },
    description: 'Aroma kopi yang memabukkan dipadu vanilla sensual.'
  },
  {
    id: 'cewek-5', name: 'Coco Mademoiselle', fullName: 'Chanel Coco Mademoiselle', order: 5,
    notes: { top: ['Orange', 'Mandarin Orange', 'Bergamot'], middle: ['Turkish Rose', 'Jasmine', 'Mimosa'], base: ['Patchouli', 'White Musk', 'Vanilla'] },
    character: { mainImpression: 'Elegant & Sophisticated', family: 'Amber Floral', intensity: 'Strong', sweetness: 3, freshness: 3 },
    personality: { vibe: 'Parisian & Chic', scale: 'Feminine', uniqueness: 4 },
    bestFor: { occasion: 'Signature Scent, Office', time: 'Anytime', weather: 'Any', ageRange: '25+' },
    performance: { longevity: '10-12 Hours', projection: 'Excellent', sillage: 'Classy', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'High-end Classic', situation: 'When you want to feel powerful' },
    description: 'Esensi wanita yang bebas, berani, dan mempesona.'
  },
  {
    id: 'cewek-6', name: 'Jadore', fullName: 'Dior J\'adore', order: 6,
    notes: { top: ['Pear', 'Melon', 'Magnolia', 'Peach'], middle: ['Jasmine', 'Lily-of-the-Valley', 'Tuberose'], base: ['Musk', 'Vanilla', 'Cedar'] },
    character: { mainImpression: 'Golden & Floral', family: 'Floral Fruity', intensity: 'Moderate', sweetness: 3, freshness: 3 },
    personality: { vibe: 'Divine & Feminine', scale: 'Feminine', uniqueness: 3 },
    bestFor: { occasion: 'Formal Dinner, Daily Luxe', time: 'Day/Night', weather: 'Spring', ageRange: '30+' },
    performance: { longevity: '8-10 Hours', projection: 'Radiant', sillage: 'Beautiful', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Bouquet Royal', situation: 'Gala dinners or special days' },
    description: 'Buket bunga emas yang berkilau dalam kemewahan.'
  },
  {
    id: 'cewek-7', name: 'Good Girl', fullName: 'Carolina Herrera Good Girl', order: 7,
    notes: { top: ['Almond', 'Coffee', 'Bergamot', 'Lemon'], middle: ['Tuberose', 'Jasmine Sambac', 'Orris'], base: ['Tonka Bean', 'Cacao', 'Vanilla', 'Praline'] },
    character: { mainImpression: 'Dualistic & Bold', family: 'Amber Floral', intensity: 'Strong', sweetness: 4, freshness: 2 },
    personality: { vibe: 'Daring & Glamorous', scale: 'Feminine', uniqueness: 5 },
    bestFor: { occasion: 'Night Out, Romantic', time: 'Night', weather: 'Cool', ageRange: '20+' },
    performance: { longevity: '10-12 Hours', projection: 'Strong', sillage: 'Captivating', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Femme Fatale', situation: 'Seductive evening encounters' },
    description: 'Sangat baik untuk menjadi gadis yang "nakal".'
  },
  {
    id: 'cewek-8', name: 'English Pear', fullName: 'Jo Malone English Pear & Freesia', order: 8,
    notes: { top: ['King William Pear'], middle: ['Freesia'], base: ['Patchouli'] },
    character: { mainImpression: 'Juicy & Autumnal', family: 'Chypre Floral', intensity: 'Moderate', sweetness: 2, freshness: 4 },
    personality: { vibe: 'Nature & Relaxed', scale: 'Unisex', uniqueness: 4 },
    bestFor: { occasion: 'Daily, Garden Party', time: 'Day', weather: 'Autumn', ageRange: 'All Ages' },
    performance: { longevity: '6-8 Hours', projection: 'Moderate', sillage: 'Soft', complimentFactor: 4 },
    additional: { concentration: 'EDC', style: 'Minimalist Luxe', situation: 'Relaxed weekend brunch' },
    description: 'Kesegaran pir matang yang dibalut bunga freesia putih.'
  },
  {
    id: 'cewek-9', name: 'Si Passione', fullName: 'Giorgio Armani Si Passione', order: 9,
    notes: { top: ['Pear', 'Blackcurrant', 'Pink Pepper'], middle: ['Rose', 'Jasmine', 'Heliotrope'], base: ['Vanilla', 'Cedarwood'] },
    character: { mainImpression: 'Passionate & Red', family: 'Floral Fruity', intensity: 'Moderate', sweetness: 3, freshness: 3 },
    personality: { vibe: 'Strong & Determined', scale: 'Feminine', uniqueness: 4 },
    bestFor: { occasion: 'Professional, Signature', time: 'Day/Night', weather: 'Any', ageRange: '25+' },
    performance: { longevity: '7-9 Hours', projection: 'Moderate', sillage: 'Confident', complimentFactor: 4 },
    additional: { concentration: 'EDP', style: 'Powerful Elegant', situation: 'Business meetings or romantic nights' },
    description: 'Kombinasi kekuatan, femininitas, dan gairah.'
  },
  {
    id: 'cewek-10', name: 'Linterdit', fullName: 'Givenchy L\'Interdit', order: 10,
    notes: { top: ['Pear', 'Bergamot'], middle: ['Tuberose', 'Orange Blossom', 'Jasmine Sambac'], base: ['Patchouli', 'Vanilla', 'Ambroxan', 'Vetiver'] },
    character: { mainImpression: 'Forbidden & Floral', family: 'Amber Floral', intensity: 'Strong', sweetness: 3, freshness: 2 },
    personality: { vibe: 'Classic but Bold', scale: 'Feminine', uniqueness: 5 },
    bestFor: { occasion: 'Evening, Special Occasions', time: 'Night', weather: 'Winter', ageRange: '28+' },
    performance: { longevity: '10-12 Hours', projection: 'Strong', sillage: 'Memorable', complimentFactor: 5 },
    additional: { concentration: 'EDP', style: 'Sophisticated Chic', situation: 'Theatrical or formal luxury' },
    description: 'Penghormatan terhadap femininitas yang berani.'
  }
];

// Replicating/Expanding for more items... (Simulating 30+ items)
for (let i = 11; i <= 35; i++) {
  aromaCewekBase.push({
    ...aromaCewekBase[i % 10],
    id: `cewek-${i}`,
    name: `${aromaCewekBase[i % 10].name} Platinum Luxe`,
    order: i,
    description: `EDISI PLATINUM dengan tingkat konsentrasi fragransi yang lebih tinggi untuk ketahanan maksimal.`
  });
}

export const perfumesCowok: PerfumeItem[] = aromaCowokBase.map(p => ({ ...p, category: 'cowok' } as PerfumeItem));
export const perfumesCewek: PerfumeItem[] = aromaCewekBase.map(p => ({ ...p, category: 'cewek' } as PerfumeItem));
export const allPerfumes: PerfumeItem[] = [...perfumesCowok, ...perfumesCewek];

export const perfumeCatalogConfig = {
  title: "Premium Perfume Catalog",
  subtitle: "Explore our archive of 60+ premium aromas with deep bio-data visualization.",
};
