/**
 * Data katalog aroma parfum NUXAR
 * Bisa diganti dengan fetch dari Supabase (lihat src/lib/supabase.ts)
 */

export type PerfumeCategory = 'cowok' | 'cewek';

export interface PerfumeItem {
  id: string;
  name: string;
  brand?: string;
  fullName: string;
  year?: number;
  gender?: 'pria' | 'wanita' | 'unisex';
  category: string;
  concentration?: string;
  notes?: {
    top?: string[];
    middle?: string[];
    base?: string[];
  };
  karakter?: string;
  penggunaan?: string;
  description?: string;
  is_official?: boolean;
  note?: string;
  order: number;
}

const aromaCowok: Omit<PerfumeItem, 'category'>[] = [
  { id: 'cowok-1', name: 'Dunhill Blue', fullName: 'Dunhill Desire Blue (Alfred Dunhill)', order: 1 },
  { id: 'cowok-2', name: '212 Man', fullName: '212 Men (Carolina Herrera)', order: 2 },
  { id: 'cowok-3', name: 'Libre', fullName: 'Libre (Yves Saint Laurent)', order: 3 },
  { id: 'cowok-4', name: 'Jaguar Vision', fullName: 'Jaguar Vision (Jaguar Fragrances)', order: 4 },
  { id: 'cowok-5', name: 'Aigner Black', fullName: 'Black (Etienne Aigner)', order: 5 },
  { id: 'cowok-6', name: 'Cool Water Men', fullName: 'Cool Water for Men (Davidoff)', order: 6 },
  { id: 'cowok-7', name: 'Dior Sauvage', fullName: 'Sauvage (Dior)', order: 7 },
  { id: 'cowok-8', name: 'Pramugari', fullName: 'Singapore Airlines Cabin Crew Fragrance', order: 8 },
  { id: 'cowok-9', name: 'Lacoste Sport', fullName: 'Essential Sport (Lacoste)', order: 9 },
  { id: 'cowok-10', name: 'Raffi Ahmad', fullName: 'RA Eau de Parfum (Raffi Ahmad)', order: 10 },
  { id: 'cowok-11', name: 'Black Opium', fullName: 'Black Opium (Yves Saint Laurent)', order: 11 },
  { id: 'cowok-12', name: 'One Million', fullName: '1 Million (Paco Rabanne)', order: 12 },
  { id: 'cowok-13', name: 'Creed Aventus', fullName: 'Aventus (Creed)', order: 13 },
  { id: 'cowok-14', name: 'Baccarat', fullName: 'Baccarat Rouge 540 (Maison Francis Kurkdjian)', order: 14 },
  { id: 'cowok-15', name: 'Bulgari Extreme', fullName: 'Bvlgari Pour Homme Extreme (Bvlgari)', order: 15 },
  { id: 'cowok-16', name: 'Bulgari Aqua', fullName: 'Bvlgari Aqva Pour Homme (Bvlgari)', order: 16 },
  { id: 'cowok-17', name: 'One Direction', fullName: 'Our Moment (One Direction)', order: 17 },
  { id: 'cowok-18', name: 'Versace Eros', fullName: 'Eros (Versace)', order: 18 },
  { id: 'cowok-19', name: '212 Sexy Man', fullName: '212 Sexy Men (Carolina Herrera)', order: 19 },
  { id: 'cowok-20', name: 'Mercedes Benz', fullName: 'Mercedes-Benz Man (Mercedes-Benz)', order: 20 },
  { id: 'cowok-21', name: 'HMNS Orgasm', fullName: 'HMNS Orgasm (HMNS Perfume)', order: 21 },
  { id: 'cowok-22', name: 'Mont Blanc Legend', fullName: 'Legend (Montblanc)', order: 22 },
  { id: 'cowok-23', name: 'Marc Jacobs', fullName: 'Marc Jacobs Men (Marc Jacobs)', order: 23 },
  { id: 'cowok-24', name: 'Aigner Blue', fullName: 'Blue Emotion (Etienne Aigner)', order: 24 },
  { id: 'cowok-25', name: 'Light Blue', fullName: 'Light Blue Pour Homme (Dolce & Gabbana)', order: 25 },
  { id: 'cowok-26', name: 'Polo Sport', fullName: 'Polo Sport (Ralph Lauren)', order: 26 },
  { id: 'cowok-27', name: 'My Way', fullName: 'My Way (Giorgio Armani)', order: 27 },
  { id: 'cowok-28', name: 'Kenzo Batang', fullName: 'Kenzo Homme (Kenzo)', order: 28 },
  { id: 'cowok-29', name: 'Le Labo Santal', fullName: 'Santal 33 (Le Labo)', order: 29 },
  { id: 'cowok-30', name: 'Narciso Rodriguez', fullName: 'For Him (Narciso Rodriguez)', order: 30 },
  { id: 'cowok-31', name: 'Velvet Blue', fullName: 'Inspired Niche Blend', order: 31 },
  { id: 'cowok-32', name: 'Attar Mewah', fullName: 'Arabian Attar / Al-Rehab Attar', order: 32 },
  { id: 'cowok-33', name: 'Kenzo Daun', fullName: 'Kenzo Pour Homme (Kenzo Green/Marine)', order: 33 },
  { id: 'cowok-34', name: 'Xerjoff Erba Pura', fullName: 'Erba Pura (Xerjoff)', order: 34 },
];

const aromaCewek: Omit<PerfumeItem, 'category'>[] = [
  { id: 'cewek-1', name: 'Scandalous', fullName: 'Scandalous (Victoria\'s Secret)', order: 1 },
  { id: 'cewek-2', name: 'Romantic Wish', fullName: 'Romantic Wish (Anna Sui)', order: 2 },
  { id: 'cewek-3', name: 'Chloe Rose', fullName: 'Roses de Chloé (Chloé)', order: 3 },
  { id: 'cewek-4', name: 'Cool Water Woman', fullName: 'Cool Water Woman (Davidoff)', order: 4 },
  { id: 'cewek-5', name: 'Candy Baby', fullName: 'Candy Baby (Victoria\'s Secret)', order: 5 },
  { id: 'cewek-6', name: 'Lovely', fullName: 'Lovely (Sarah Jessica Parker)', order: 6 },
  { id: 'cewek-7', name: 'Bombshell', fullName: 'Bombshell (Victoria\'s Secret)', order: 7 },
  { id: 'cewek-8', name: 'Pink Chiffon', fullName: 'Pink Chiffon (Bath & Body Works)', order: 8 },
  { id: 'cewek-9', name: 'Avril Lavigne', fullName: 'Forbidden Rose (Avril Lavigne)', order: 9 },
  { id: 'cewek-10', name: 'Mancera Rosa', fullName: 'Roses Vanille (Mancera)', order: 10 },
  { id: 'cewek-11', name: 'VS Very Sexy', fullName: 'Very Sexy (Victoria\'s Secret)', order: 11 },
  { id: 'cewek-12', name: 'Angel Heart', fullName: 'Angel Inspired Perfume', order: 12 },
  { id: 'cewek-13', name: 'Vanilla Lace', fullName: 'Vanilla Lace (Victoria\'s Secret)', order: 13 },
  { id: 'cewek-14', name: 'Bulgari Crystal', fullName: 'Omnia Crystalline (Bvlgari)', order: 14 },
  { id: 'cewek-15', name: 'Nagita Slavina', fullName: 'Nagita Slavina Celebrity Perfume', order: 15 },
  { id: 'cewek-16', name: 'Soft', fullName: 'Soft (Al-Rehab)', order: 16 },
  { id: 'cewek-17', name: 'Love Sarah', fullName: 'Love (Sarah Jessica Parker)', order: 17 },
  { id: 'cewek-18', name: 'Olla Ramlan', fullName: 'Olla Ramlan Celebrity Perfume', order: 18 },
  { id: 'cewek-19', name: 'Zara Orchid', fullName: 'Orchid (ZARA)', order: 19 },
  { id: 'cewek-20', name: 'Terre Hermes', fullName: 'Terre d\'Hermès (Hermès)', order: 20 },
  { id: 'cewek-21', name: 'Hermes Twilly', fullName: 'Twilly d\'Hermès (Hermès)', order: 21 },
  { id: 'cewek-22', name: 'Incanto Shine', fullName: 'Incanto Shine (Salvatore Ferragamo)', order: 22 },
  { id: 'cewek-23', name: 'Selena Gomez', fullName: 'Selena Gomez Eau de Parfum', order: 23 },
  { id: 'cewek-24', name: 'Bubble Gum', fullName: 'Sweet Bubblegum Candy Type', order: 24 },
  { id: 'cewek-25', name: 'Zwitsal Baby', fullName: 'Zwitsal Baby Cologne', order: 25 },
  { id: 'cewek-26', name: 'Lux', fullName: 'Lux Soft Touch', order: 26 },
  { id: 'cewek-27', name: 'J.Lo Still', fullName: 'Still (Jennifer Lopez)', order: 27 },
  { id: 'cewek-28', name: 'Paris Hilton', fullName: 'Paris Hilton for Women', order: 28 },
  { id: 'cewek-29', name: 'Paris Heiress', fullName: 'Heiress (Paris Hilton)', order: 29 },
  { id: 'cewek-30', name: 'Taylor Swift', fullName: 'Wonderstruck (Taylor Swift)', order: 30 },
  { id: 'cewek-31', name: 'Jo Malone Pear', fullName: 'English Pear & Freesia (Jo Malone London)', order: 31 },
  { id: 'cewek-32', name: 'Aqua Kiss', fullName: 'Aqua Kiss (Victoria\'s Secret)', order: 32 },
  { id: 'cewek-33', name: 'Miss Dior Blooming', fullName: 'Miss Dior Blooming Bouquet (Dior)', order: 33 },
  { id: 'cewek-34', name: 'Gucci Flora', fullName: 'Flora Gorgeous Gardenia (Gucci)', order: 34 },
  { id: 'cewek-35', name: 'Anna Sui Dream', fullName: 'Secret Wish / Dream Series (Anna Sui)', order: 35 },
];

export const perfumesCowok: PerfumeItem[] = aromaCowok.map((p) => ({
  ...p,
  category: 'cowok' as const,
}));

export const perfumesCewek: PerfumeItem[] = aromaCewek.map((p) => ({
  ...p,
  category: 'cewek' as const,
}));

export const allPerfumes: PerfumeItem[] = [...perfumesCowok, ...perfumesCewek];

export const perfumeCatalogConfig = {
  title: 'Katalog Aroma',
  subtitle: 'Pilihan parfum original dalam kemasan eceran. Temukan aroma yang cocok untukmu.',
  tabCowok: 'Aroma Cowok',
  tabCewek: 'Aroma Cewek',
  countCowok: perfumesCowok.length,
  countCewek: perfumesCewek.length,
};
