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
  original: string;
  category: 'cowok' | 'cewek';
  order: number;
  created_at?: string;
}

/**
 * Ambil data parfum dari Supabase.
 * Gunakan ini di komponen jika ingin data dari database (set VITE_SUPABASE_* di .env).
 */
export async function fetchPerfumesFromSupabase(): Promise<{
  cowok: PerfumeItem[];
  cewek: PerfumeItem[];
} | null> {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('perfumes')
    .select('id, name, original, category, order')
    .order('order', { ascending: true });

  if (error) {
    console.error('Supabase perfumes error:', error);
    return null;
  }

  const rows = (data ?? []) as PerfumeRow[];
  const cowok: PerfumeItem[] = rows
    .filter((r) => r.category === 'cowok')
    .map((r) => ({
      id: r.id,
      name: r.name,
      original: r.original,
      category: 'cowok',
      order: r.order,
    }));
  const cewek: PerfumeItem[] = rows
    .filter((r) => r.category === 'cewek')
    .map((r) => ({
      id: r.id,
      name: r.name,
      original: r.original,
      category: 'cewek',
      order: r.order,
    }));

  return { cowok, cewek };
}
