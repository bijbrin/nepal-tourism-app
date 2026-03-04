import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types
export interface Place {
  id: number;
  name: string;
  category: string;
  location: string;
  description: string;
  how_to_reach: string;
  duration: string;
  best_season: string;
  rating: number;
  highlights: string[];
  image_url?: string;
  external_links?: {
    title: string;
    url: string;
  }[];
}

export interface TripPlan {
  id: string;
  user_id: string;
  place_id: number;
  loved: boolean;
  visited: boolean;
  notes?: string;
  planned_start_date?: string;
  planned_end_date?: string;
  budget_estimate?: number;
  priority?: 'must-see' | 'maybe' | 'backup';
  custom_links?: {
    title: string;
    url: string;
  }[];
  checklist?: {
    text: string;
    done: boolean;
  }[];
  created_at: string;
  updated_at: string;
  place?: Place;
}
