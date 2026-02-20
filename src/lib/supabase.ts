import { createClient } from '@supabase/supabase-js';
import type { PerfumeItem } from '@/data/perfumes';
import { redis } from './redis';

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
  gender: 'pria' | 'wanita' | 'unisex';
  category: string;
  notes: any | null;
  character: any | null;
  personality: any | null;
  best_for: any | null;
  performance: any | null;
  additional: any | null;
  description: string | null;
  image_url: string | null;
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

  // 1. Check Redis Cache First
  const CACHE_KEY = 'perfumes_data';
  const cachedData = await redis.get(CACHE_KEY);
  if (cachedData) {
    console.log('[Phase 3] Using Redis Cache for Perfumes');
    return cachedData;
  }

  // 2. Fetch from Supabase if not cached
  console.log('[Phase 3] Redis Cache Miss - Fetching from Supabase');
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
    category: (r.category === 'cewek' ? 'cewek' : 'cowok') as 'cowok' | 'cewek',
    order: r.display_order,
    notes: {
      top: r.notes?.top ?? [],
      middle: r.notes?.middle ?? [],
      base: r.notes?.base ?? [],
    },
    character: {
      mainImpression: r.character?.mainImpression || 'Unknown',
      family: r.character?.family || 'Unknown',
      intensity: r.character?.intensity || 'Moderate',
      sweetness: r.character?.sweetness || 3,
      freshness: r.character?.freshness || 3,
    },
    personality: {
      vibe: r.personality?.vibe || 'Unknown',
      scale: r.personality?.scale || (r.gender === 'pria' ? 'Masculine' : 'Feminine'),
      uniqueness: r.personality?.uniqueness || 3,
    },
    bestFor: {
      occasion: r.best_for?.occasion || 'Daily',
      time: r.best_for?.time || 'Anytime',
      weather: r.best_for?.weather || 'Any',
      ageRange: r.best_for?.ageRange || 'All Ages',
    },
    performance: {
      longevity: r.performance?.longevity || '6-8 Hours',
      projection: r.performance?.projection || 'Moderate',
      sillage: r.performance?.sillage || 'Moderate',
      complimentFactor: r.performance?.complimentFactor || 3,
    },
    additional: {
      concentration: r.additional?.concentration || 'EDP',
      style: r.additional?.style || 'Casual',
      situation: r.additional?.situation || 'General',
    },
    description: r.description || 'Aroma yang sangat berkesan.',
    image: r.image_url || undefined,
    karakter: r.character?.mainImpression,
    penggunaan: r.best_for?.occasion,
    is_official: false,
  });

  const cowok = rows
    .filter((r) => r.gender === 'pria' || r.gender === 'unisex')
    .map(mapRowToItem);

  const cewek = rows
    .filter((r) => r.gender === 'wanita')
    .map(mapRowToItem);

  const result = { cowok, cewek };

  // 3. Store in Redis (24 Hours TTL)
  await redis.set(CACHE_KEY, result, 86400);

  return result;
}

/**
 * Ambil data blog dari Supabase.
 */
export async function fetchBlogsFromSupabase() {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('blogs')
    .select('id, slug, title, excerpt, content, read_time, date, image, category, created_at')
    .order('created_at', { ascending: false, nullsFirst: false });

  if (error) {
    console.error('Supabase blogs error:', error);
    return null;
  }

  if (!data || data.length === 0) return null;

  return data.map((r: BlogPostRow) => ({
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
