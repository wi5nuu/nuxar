/**
 * Data katalog aroma parfum NUXAR
 * Bisa diganti dengan fetch dari Supabase (lihat src/lib/supabase.ts)
 */

export type PerfumeCategory = 'cowok' | 'cewek';

export interface PerfumeItem {
  id: string;
  name: string;
  original: string;
  category: PerfumeCategory;
  order: number;
}

const aromaCowok: Omit<PerfumeItem, 'category'>[] = [
  { id: 'cowok-1', name: 'Dunhill Blue', original: 'Dunhill Desire Blue (Alfred Dunhill)', order: 1 },
  { id: 'cowok-2', name: '212 Man', original: '212 Men (Carolina Herrera)', order: 2 },
  { id: 'cowok-3', name: 'Libre', original: 'Libre (Yves Saint Laurent)', order: 3 },
  { id: 'cowok-4', name: 'Jaguar Vision', original: 'Jaguar Vision (Jaguar Fragrances)', order: 4 },
  { id: 'cowok-5', name: 'Aigner Black', original: 'Black (Etienne Aigner)', order: 5 },
  { id: 'cowok-6', name: 'Cool Water Men', original: 'Cool Water for Men (Davidoff)', order: 6 },
  { id: 'cowok-7', name: 'Dior Sauvage', original: 'Sauvage (Dior)', order: 7 },
  { id: 'cowok-8', name: 'Pramugari', original: 'Singapore Airlines Cabin Crew Fragrance', order: 8 },
  { id: 'cowok-9', name: 'Lacoste Sport', original: 'Essential Sport (Lacoste)', order: 9 },
  { id: 'cowok-10', name: 'Raffi Ahmad', original: 'RA Eau de Parfum (Raffi Ahmad)', order: 10 },
  { id: 'cowok-11', name: 'Black Opium', original: 'Black Opium (Yves Saint Laurent)', order: 11 },
  { id: 'cowok-12', name: 'One Million', original: '1 Million (Paco Rabanne)', order: 12 },
  { id: 'cowok-13', name: 'Creed Aventus', original: 'Aventus (Creed)', order: 13 },
  { id: 'cowok-14', name: 'Baccarat', original: 'Baccarat Rouge 540 (Maison Francis Kurkdjian)', order: 14 },
  { id: 'cowok-15', name: 'Bulgari Extreme', original: 'Bvlgari Pour Homme Extreme (Bvlgari)', order: 15 },
  { id: 'cowok-16', name: 'Bulgari Aqua', original: 'Bvlgari Aqva Pour Homme (Bvlgari)', order: 16 },
  { id: 'cowok-17', name: 'One Direction', original: 'Our Moment (One Direction)', order: 17 },
  { id: 'cowok-18', name: 'Versace Eros', original: 'Eros (Versace)', order: 18 },
  { id: 'cowok-19', name: '212 Sexy Man', original: '212 Sexy Men (Carolina Herrera)', order: 19 },
  { id: 'cowok-20', name: 'Mercedes Benz', original: 'Mercedes-Benz Man (Mercedes-Benz)', order: 20 },
  { id: 'cowok-21', name: 'HMNS Orgasm', original: 'HMNS Orgasm (HMNS Perfume)', order: 21 },
  { id: 'cowok-22', name: 'Mont Blanc Legend', original: 'Legend (Montblanc)', order: 22 },
  { id: 'cowok-23', name: 'Marc Jacobs', original: 'Marc Jacobs Men (Marc Jacobs)', order: 23 },
  { id: 'cowok-24', name: 'Aigner Blue', original: 'Blue Emotion (Etienne Aigner)', order: 24 },
  { id: 'cowok-25', name: 'Light Blue', original: 'Light Blue Pour Homme (Dolce & Gabbana)', order: 25 },
  { id: 'cowok-26', name: 'Polo Sport', original: 'Polo Sport (Ralph Lauren)', order: 26 },
  { id: 'cowok-27', name: 'My Way', original: 'My Way (Giorgio Armani)', order: 27 },
  { id: 'cowok-28', name: 'Kenzo Batang', original: 'Kenzo Homme (Kenzo)', order: 28 },
  { id: 'cowok-29', name: 'Le Labo Santal', original: 'Santal 33 (Le Labo)', order: 29 },
  { id: 'cowok-30', name: 'Narciso Rodriguez', original: 'For Him (Narciso Rodriguez)', order: 30 },
  { id: 'cowok-31', name: 'Velvet Blue', original: 'Inspired Niche Blend', order: 31 },
  { id: 'cowok-32', name: 'Attar Mewah', original: 'Arabian Attar / Al-Rehab Attar', order: 32 },
  { id: 'cowok-33', name: 'Kenzo Daun', original: 'Kenzo Pour Homme (Kenzo Green/Marine)', order: 33 },
  { id: 'cowok-34', name: 'Xerjoff Erba Pura', original: 'Erba Pura (Xerjoff)', order: 34 },
];

const aromaCewek: Omit<PerfumeItem, 'category'>[] = [
  { id: 'cewek-1', name: 'Scandalous', original: 'Scandalous (Victoria\'s Secret)', order: 1 },
  { id: 'cewek-2', name: 'Romantic Wish', original: 'Romantic Wish (Anna Sui)', order: 2 },
  { id: 'cewek-3', name: 'Chloe Rose', original: 'Roses de Chloé (Chloé)', order: 3 },
  { id: 'cewek-4', name: 'Cool Water Woman', original: 'Cool Water Woman (Davidoff)', order: 4 },
  { id: 'cewek-5', name: 'Candy Baby', original: 'Candy Baby (Victoria\'s Secret)', order: 5 },
  { id: 'cewek-6', name: 'Lovely', original: 'Lovely (Sarah Jessica Parker)', order: 6 },
  { id: 'cewek-7', name: 'Bombshell', original: 'Bombshell (Victoria\'s Secret)', order: 7 },
  { id: 'cewek-8', name: 'Pink Chiffon', original: 'Pink Chiffon (Bath & Body Works)', order: 8 },
  { id: 'cewek-9', name: 'Avril Lavigne', original: 'Forbidden Rose (Avril Lavigne)', order: 9 },
  { id: 'cewek-10', name: 'Mancera Rosa', original: 'Roses Vanille (Mancera)', order: 10 },
  { id: 'cewek-11', name: 'VS Very Sexy', original: 'Very Sexy (Victoria\'s Secret)', order: 11 },
  { id: 'cewek-12', name: 'Angel Heart', original: 'Angel Inspired Perfume', order: 12 },
  { id: 'cewek-13', name: 'Vanilla Lace', original: 'Vanilla Lace (Victoria\'s Secret)', order: 13 },
  { id: 'cewek-14', name: 'Bulgari Crystal', original: 'Omnia Crystalline (Bvlgari)', order: 14 },
  { id: 'cewek-15', name: 'Nagita Slavina', original: 'Nagita Slavina Celebrity Perfume', order: 15 },
  { id: 'cewek-16', name: 'Soft', original: 'Soft (Al-Rehab)', order: 16 },
  { id: 'cewek-17', name: 'Love Sarah', original: 'Love (Sarah Jessica Parker)', order: 17 },
  { id: 'cewek-18', name: 'Olla Ramlan', original: 'Olla Ramlan Celebrity Perfume', order: 18 },
  { id: 'cewek-19', name: 'Zara Orchid', original: 'Orchid (ZARA)', order: 19 },
  { id: 'cewek-20', name: 'Terre Hermes', original: 'Terre d\'Hermès (Hermès)', order: 20 },
  { id: 'cewek-21', name: 'Hermes Twilly', original: 'Twilly d\'Hermès (Hermès)', order: 21 },
  { id: 'cewek-22', name: 'Incanto Shine', original: 'Incanto Shine (Salvatore Ferragamo)', order: 22 },
  { id: 'cewek-23', name: 'Selena Gomez', original: 'Selena Gomez Eau de Parfum', order: 23 },
  { id: 'cewek-24', name: 'Bubble Gum', original: 'Sweet Bubblegum Candy Type', order: 24 },
  { id: 'cewek-25', name: 'Zwitsal Baby', original: 'Zwitsal Baby Cologne', order: 25 },
  { id: 'cewek-26', name: 'Lux', original: 'Lux Soft Touch', order: 26 },
  { id: 'cewek-27', name: 'J.Lo Still', original: 'Still (Jennifer Lopez)', order: 27 },
  { id: 'cewek-28', name: 'Paris Hilton', original: 'Paris Hilton for Women', order: 28 },
  { id: 'cewek-29', name: 'Paris Heiress', original: 'Heiress (Paris Hilton)', order: 29 },
  { id: 'cewek-30', name: 'Taylor Swift', original: 'Wonderstruck (Taylor Swift)', order: 30 },
  { id: 'cewek-31', name: 'Jo Malone Pear', original: 'English Pear & Freesia (Jo Malone London)', order: 31 },
  { id: 'cewek-32', name: 'Aqua Kiss', original: 'Aqua Kiss (Victoria\'s Secret)', order: 32 },
  { id: 'cewek-33', name: 'Miss Dior Blooming', original: 'Miss Dior Blooming Bouquet (Dior)', order: 33 },
  { id: 'cewek-34', name: 'Gucci Flora', original: 'Flora Gorgeous Gardenia (Gucci)', order: 34 },
  { id: 'cewek-35', name: 'Anna Sui Dream', original: 'Secret Wish / Dream Series (Anna Sui)', order: 35 },
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
