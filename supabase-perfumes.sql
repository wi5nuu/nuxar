-- =============================================================================
-- NUXAR: Tabel & data katalog parfum untuk Supabase
-- =============================================================================
-- Cara pakai:
-- 1. Buka Supabase Dashboard → SQL Editor
-- 2. Paste script ini dan jalankan
-- 3. Di project, buat file .env isi:
--    VITE_SUPABASE_URL=https://xxx.supabase.co
--    VITE_SUPABASE_ANON_KEY=your-anon-key
-- 4. Di KatalogAroma bisa pakai fetchPerfumesFromSupabase() (lihat src/lib/supabase.ts)
-- =============================================================================

-- Tabel perfumes
create table if not exists public.perfumes (
  id text primary key,
  name text not null,
  original text not null,
  category text not null check (category in ('cowok', 'cewek')),
  "order" smallint not null default 0,
  created_at timestamptz default now()
);

-- Supaya bisa dibaca dari frontend (anon)
alter table public.perfumes enable row level security;

create policy "Allow public read"
  on public.perfumes for select
  using (true);

-- Seed: Aroma Cowok
insert into public.perfumes (id, name, original, category, "order") values
('cowok-1', 'Dunhill Blue', 'Dunhill Desire Blue (Alfred Dunhill)', 'cowok', 1),
('cowok-2', '212 Man', '212 Men (Carolina Herrera)', 'cowok', 2),
('cowok-3', 'Libre', 'Libre (Yves Saint Laurent)', 'cowok', 3),
('cowok-4', 'Jaguar Vision', 'Jaguar Vision (Jaguar Fragrances)', 'cowok', 4),
('cowok-5', 'Aigner Black', 'Black (Etienne Aigner)', 'cowok', 5),
('cowok-6', 'Cool Water Men', 'Cool Water for Men (Davidoff)', 'cowok', 6),
('cowok-7', 'Dior Sauvage', 'Sauvage (Dior)', 'cowok', 7),
('cowok-8', 'Pramugari', 'Singapore Airlines Cabin Crew Fragrance', 'cowok', 8),
('cowok-9', 'Lacoste Sport', 'Essential Sport (Lacoste)', 'cowok', 9),
('cowok-10', 'Raffi Ahmad', 'RA Eau de Parfum (Raffi Ahmad)', 'cowok', 10),
('cowok-11', 'Black Opium', 'Black Opium (Yves Saint Laurent)', 'cowok', 11),
('cowok-12', 'One Million', '1 Million (Paco Rabanne)', 'cowok', 12),
('cowok-13', 'Creed Aventus', 'Aventus (Creed)', 'cowok', 13),
('cowok-14', 'Baccarat', 'Baccarat Rouge 540 (Maison Francis Kurkdjian)', 'cowok', 14),
('cowok-15', 'Bulgari Extreme', 'Bvlgari Pour Homme Extreme (Bvlgari)', 'cowok', 15),
('cowok-16', 'Bulgari Aqua', 'Bvlgari Aqva Pour Homme (Bvlgari)', 'cowok', 16),
('cowok-17', 'One Direction', 'Our Moment (One Direction)', 'cowok', 17),
('cowok-18', 'Versace Eros', 'Eros (Versace)', 'cowok', 18),
('cowok-19', '212 Sexy Man', '212 Sexy Men (Carolina Herrera)', 'cowok', 19),
('cowok-20', 'Mercedes Benz', 'Mercedes-Benz Man (Mercedes-Benz)', 'cowok', 20),
('cowok-21', 'HMNS Orgasm', 'HMNS Orgasm (HMNS Perfume)', 'cowok', 21),
('cowok-22', 'Mont Blanc Legend', 'Legend (Montblanc)', 'cowok', 22),
('cowok-23', 'Marc Jacobs', 'Marc Jacobs Men (Marc Jacobs)', 'cowok', 23),
('cowok-24', 'Aigner Blue', 'Blue Emotion (Etienne Aigner)', 'cowok', 24),
('cowok-25', 'Light Blue', 'Light Blue Pour Homme (Dolce & Gabbana)', 'cowok', 25),
('cowok-26', 'Polo Sport', 'Polo Sport (Ralph Lauren)', 'cowok', 26),
('cowok-27', 'My Way', 'My Way (Giorgio Armani)', 'cowok', 27),
('cowok-28', 'Kenzo Batang', 'Kenzo Homme (Kenzo)', 'cowok', 28),
('cowok-29', 'Le Labo Santal', 'Santal 33 (Le Labo)', 'cowok', 29),
('cowok-30', 'Narciso Rodriguez', 'For Him (Narciso Rodriguez)', 'cowok', 30),
('cowok-31', 'Velvet Blue', 'Inspired Niche Blend', 'cowok', 31),
('cowok-32', 'Attar Mewah', 'Arabian Attar / Al-Rehab Attar', 'cowok', 32),
('cowok-33', 'Kenzo Daun', 'Kenzo Pour Homme (Kenzo Green/Marine)', 'cowok', 33),
('cowok-34', 'Xerjoff Erba Pura', 'Erba Pura (Xerjoff)', 'cowok', 34);

-- Seed: Aroma Cewek
insert into public.perfumes (id, name, original, category, "order") values
('cewek-1', 'Scandalous', 'Scandalous (Victoria''s Secret)', 'cewek', 1),
('cewek-2', 'Romantic Wish', 'Romantic Wish (Anna Sui)', 'cewek', 2),
('cewek-3', 'Chloe Rose', 'Roses de Chloé (Chloé)', 'cewek', 3),
('cewek-4', 'Cool Water Woman', 'Cool Water Woman (Davidoff)', 'cewek', 4),
('cewek-5', 'Candy Baby', 'Candy Baby (Victoria''s Secret)', 'cewek', 5),
('cewek-6', 'Lovely', 'Lovely (Sarah Jessica Parker)', 'cewek', 6),
('cewek-7', 'Bombshell', 'Bombshell (Victoria''s Secret)', 'cewek', 7),
('cewek-8', 'Pink Chiffon', 'Pink Chiffon (Bath & Body Works)', 'cewek', 8),
('cewek-9', 'Avril Lavigne', 'Forbidden Rose (Avril Lavigne)', 'cewek', 9),
('cewek-10', 'Mancera Rosa', 'Roses Vanille (Mancera)', 'cewek', 10),
('cewek-11', 'VS Very Sexy', 'Very Sexy (Victoria''s Secret)', 'cewek', 11),
('cewek-12', 'Angel Heart', 'Angel Inspired Perfume', 'cewek', 12),
('cewek-13', 'Vanilla Lace', 'Vanilla Lace (Victoria''s Secret)', 'cewek', 13),
('cewek-14', 'Bulgari Crystal', 'Omnia Crystalline (Bvlgari)', 'cewek', 14),
('cewek-15', 'Nagita Slavina', 'Nagita Slavina Celebrity Perfume', 'cewek', 15),
('cewek-16', 'Soft', 'Soft (Al-Rehab)', 'cewek', 16),
('cewek-17', 'Love Sarah', 'Love (Sarah Jessica Parker)', 'cewek', 17),
('cewek-18', 'Olla Ramlan', 'Olla Ramlan Celebrity Perfume', 'cewek', 18),
('cewek-19', 'Zara Orchid', 'Orchid (ZARA)', 'cewek', 19),
('cewek-20', 'Terre Hermes', 'Terre d''Hermès (Hermès)', 'cewek', 20),
('cewek-21', 'Hermes Twilly', 'Twilly d''Hermès (Hermès)', 'cewek', 21),
('cewek-22', 'Incanto Shine', 'Incanto Shine (Salvatore Ferragamo)', 'cewek', 22),
('cewek-23', 'Selena Gomez', 'Selena Gomez Eau de Parfum', 'cewek', 23),
('cewek-24', 'Bubble Gum', 'Sweet Bubblegum Candy Type', 'cewek', 24),
('cewek-25', 'Zwitsal Baby', 'Zwitsal Baby Cologne', 'cewek', 25),
('cewek-26', 'Lux', 'Lux Soft Touch', 'cewek', 26),
('cewek-27', 'J.Lo Still', 'Still (Jennifer Lopez)', 'cewek', 27),
('cewek-28', 'Paris Hilton', 'Paris Hilton for Women', 'cewek', 28),
('cewek-29', 'Paris Heiress', 'Heiress (Paris Hilton)', 'cewek', 29),
('cewek-30', 'Taylor Swift', 'Wonderstruck (Taylor Swift)', 'cewek', 30),
('cewek-31', 'Jo Malone Pear', 'English Pear & Freesia (Jo Malone London)', 'cewek', 31),
('cewek-32', 'Aqua Kiss', 'Aqua Kiss (Victoria''s Secret)', 'cewek', 32),
('cewek-33', 'Miss Dior Blooming', 'Miss Dior Blooming Bouquet (Dior)', 'cewek', 33),
('cewek-34', 'Gucci Flora', 'Flora Gorgeous Gardenia (Gucci)', 'cewek', 34),
('cewek-35', 'Anna Sui Dream', 'Secret Wish / Dream Series (Anna Sui)', 'cewek', 35);
