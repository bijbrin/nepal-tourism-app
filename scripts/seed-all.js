// Seed all 100 places to Supabase
const { createClient } = require('@supabase/supabase-js');
const { places } = require('../lib/places.ts');

const supabaseUrl = 'https://erbbaryfxeutklfqvfmz.supabase.co';
const supabaseKey = 'sb_publishable_JNa0CZmf9iogdrOPQ14QhQ_UOaMA5kY';

const supabase = createClient(supabaseUrl, supabaseKey);

async function seedAllPlaces() {
  console.log('Seeding all 100 places to Supabase...');
  
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
    external_links: [
      { title: 'Wikipedia', url: `https://en.wikipedia.org/wiki/${encodeURIComponent(place.name.replace(/\s+/g, '_'))}` },
      { title: 'Google Maps', url: `https://www.google.com/maps/search/${encodeURIComponent(place.name + ' Nepal')}` },
    ]
  }));

  // Insert in batches of 50
  const batchSize = 50;
  for (let i = 0; i < placesData.length; i += batchSize) {
    const batch = placesData.slice(i, i + batchSize);
    console.log(`Inserting batch ${i/batchSize + 1}... (${batch.length} places)`);
    
    const { data, error } = await supabase
      .from('places')
      .upsert(batch, { onConflict: 'id' });

    if (error) {
      console.error('Error seeding batch:', error);
      process.exit(1);
    }
  }

  console.log(`✅ Successfully seeded ${placesData.length} places!`);
}

seedAllPlaces().catch(console.error);
