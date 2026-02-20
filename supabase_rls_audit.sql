-- NUXAR Supabase Security Audit & RLS Configuration
-- Prosedur untuk memastikan data hanya bisa dibaca oleh publik dan hanya bisa diubah oleh Admin.

-- 1. AKTIFKAN RLS PADA SEMUA TABEL UTAMA
ALTER TABLE perfumes ENABLE ROW LEVEL SECURITY;
ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

-- 2. KEBIJAKAN UNTUK TABEL 'perfumes'
-- DROP policy IF EXISTS "Allow public read-only access" ON perfumes;
CREATE POLICY "Allow public read-only access" ON perfumes
FOR SELECT 
USING (true); -- Siapa pun bisa melihat produk

-- 3. KEBIJAKAN UNTUK TABEL 'blogs'
-- DROP policy IF EXISTS "Allow public read-only access" ON blogs;
CREATE POLICY "Allow public read-only access" ON blogs
FOR SELECT 
USING (true); -- Siapa pun bisa membaca blog

-- 4. KEBIJAKAN UNTUK ADMIN (Opsional, jika menggunakan Supabase Auth)
-- Hanya user dengan role 'authenticated' yang bisa melakukan INSERT/UPDATE/DELETE.
-- Biasanya dibatasi lagi ke email spesifik admin.
CREATE POLICY "Allow admin to modify perfumes" ON perfumes
FOR ALL 
TO authenticated
USING (auth.jwt() ->> 'email' = 'admin@nuxar.com')
WITH CHECK (auth.jwt() ->> 'email' = 'admin@nuxar.com');

-- 5. VERIFIKASI STATUS RLS
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public';

-- INSTRUKSI:
-- Salin dan jalankan kode di atas pada 'SQL Editor' di Dashboard Supabase Kakak.
-- Ganti 'admin@nuxar.com' dengan email admin Kakak yang terdaftar di Supabase Auth.
