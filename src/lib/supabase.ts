import { createClient } from '@supabase/supabase-js';
import type { PerfumeItem } from '@/data/perfumes';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export const SUPABASE_ENABLED = Boolean(supabase);

/** Database row shape (sesuai tabel `perfumes`) */
export interface PerfumeRow {
  id: string;
  name: string;
  brand: string;
  full_name: string;
  year: number | null;
  gender: 'pria' | 'wanita' | 'unisex';
  category: string;
  concentration: string | null;
  notes: {
    top?: string[];
    middle?: string[];
    base?: string[];
  } | null;
  karakter: string | null;
  penggunaan: string | null;
  description: string | null;
  is_official: boolean;
  note: string | null;
  display_order: number;
  created_at?: string;
}

/**
 * Ambil data parfum dari Supabase dengan data lengkap.
 */
export async function fetchPerfumesFromSupabase(): Promise<{
  cowok: PerfumeItem[];
  cewek: PerfumeItem[];
} | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('perfumes')
    .select('*')
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Supabase perfumes error:', error);
    return null;
  }

  const rows = (data ?? []) as PerfumeRow[];

  const mapRowToItem = (r: PerfumeRow): PerfumeItem => ({
    id: String(r.id),
    name: r.name,
    brand: r.brand,
    fullName: r.full_name,
    year: r.year ?? undefined,
    gender: r.gender,
    category: r.category,
    concentration: r.concentration ?? undefined,
    notes: r.notes ?? undefined,
    karakter: r.karakter ?? undefined,
    penggunaan: r.penggunaan ?? undefined,
    description: r.description ?? undefined,
    is_official: r.is_official,
    note: r.note ?? undefined,
    order: r.display_order,
  });

  const cowok = rows
    .filter((r) => r.gender === 'pria' || r.gender === 'unisex')
    .map(mapRowToItem);

  const cewek = rows
    .filter((r) => r.gender === 'wanita')
    .map(mapRowToItem);

  return { cowok, cewek };
}
