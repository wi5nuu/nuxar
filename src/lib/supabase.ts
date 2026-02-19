import { createClient } from '@supabase/supabase-js';
import type { PerfumeItem } from '@/data/perfumes';

const supabaseUrl = import.meta.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY ?? '';

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

export interface BlogPostRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  read_time: string;
  date: string;
  image: string;
  category: string;
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
    category: (r.gender === 'wanita' ? 'cewek' : 'cowok') as 'cowok' | 'cewek',
    order: r.display_order,
    note: r.note ?? undefined,
    notes: {
      top: r.notes?.top ?? [],
      middle: r.notes?.middle ?? [],
      base: r.notes?.base ?? [],
    },
    character: {
      mainImpression: r.karakter || 'Unknown',
      family: 'Unknown',
      intensity: 'Moderate',
      sweetness: 3,
      freshness: 3,
    },
    personality: {
      vibe: 'Unknown',
      scale: r.gender === 'pria' ? 'Masculine' : r.gender === 'wanita' ? 'Feminine' : 'Unisex',
      uniqueness: 3,
    },
    bestFor: {
      occasion: r.penggunaan || 'Daily',
      time: 'Anytime',
      weather: 'Any',
      ageRange: 'All Ages',
    },
    performance: {
      longevity: '6-8 Hours',
      projection: 'Moderate',
      sillage: 'Moderate',
      complimentFactor: 3,
    },
    additional: {
      concentration: (r.concentration as any) || 'EDP',
      style: 'Casual',
      situation: r.penggunaan || 'General',
    },
    description: r.description || 'Aroma yang sangat berkesan.',
    karakter: r.karakter ?? undefined,
    penggunaan: r.penggunaan ?? undefined,
    is_official: r.is_official,
  });

  const cowok = rows
    .filter((r) => r.gender === 'pria' || r.gender === 'unisex')
    .map(mapRowToItem);

  const cewek = rows
    .filter((r) => r.gender === 'wanita')
    .map(mapRowToItem);

  return { cowok, cewek };
}

/**
 * Ambil data blog dari Supabase.
 */
export async function fetchBlogsFromSupabase() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase blogs error:', error);
    return null;
  }

  return (data ?? []).map((r: BlogPostRow) => ({
    id: r.id,
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    content: r.content,
    readTime: r.read_time,
    date: r.date,
    image: r.image,
    category: r.category,
  }));
}
