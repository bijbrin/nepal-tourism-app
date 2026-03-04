// Script to seed all 100 places to Supabase
// Run: npx ts-node scripts/seed-places.ts

import { createClient } from '@supabase/supabase-js';
import { places } from '../lib/places.ts';
import * as dotenv from 'dotenv';

// Load env vars
dotenv.config();

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

console.log('URL:', supabaseUrl ? 'Found' : 'Missing');
console.log('Key:', supabaseKey ? 'Found' : 'Missing');

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedPlaces() {
  console.log('Seeding places to Supabase...');
  
  // Transform places data to match database schema
  const placesData = places.map(place => ({
    id: place.id,
    name: place.name,
    category: place.category,
    location: place.location,
    description: place.description,
    how_to_reach: place.howToReach,
    duration: place.duration,
    best_season: place.bestSeason,
    rating: place.rating,
    highlights: place.highlights,
    // Add some sample external links
    external_links: [
      { title: 'Wikipedia', url: `https://en.wikipedia.org/wiki/${encodeURIComponent(place.name.replace(/\s+/g, '_'))}` },
      { title: 'Google Maps', url: `https://www.google.com/maps/search/${encodeURIComponent(place.name + ' Nepal')}` },
    ]
  }));

  const { data, error } = await supabase
    .from('places')
    .upsert(placesData, { onConflict: 'id' });

  if (error) {
    console.error('Error seeding places:', error);
    process.exit(1);
  }

  console.log(`✅ Successfully seeded ${placesData.length} places!`);
}

seedPlaces();
