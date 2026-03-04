// Seed places to Supabase
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://erbbaryfxeutklfqvfmz.supabase.co';
const supabaseKey = 'sb_publishable_JNa0CZmf9iogdrOPQ14QhQ_UOaMA5kY';

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample of places data (first 10 for testing)
const placesData = [
  {
    id: 1,
    name: "Kathmandu Durbar Square",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "The historic heart of Kathmandu featuring ancient palaces, temples, and courtyards. The square showcases traditional Newari architecture and was the royal palace complex of the Malla and Shah kings.",
    how_to_reach: "Located in central Kathmandu, easily accessible by taxi, bus, or walking from Thamel (20 mins).",
    duration: "2-4 hours",
    best_season: "October to April",
    rating: 4.5,
    highlights: ["Kumari Ghar (Living Goddess)", "Taleju Temple", "Kal Bhairav", "Kasthamandap"],
    external_links: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Kathmandu_Durbar_Square" },
      { title: "Google Maps", url: "https://www.google.com/maps/search/Kathmandu+Durbar+Square+Nepal" }
    ]
  },
  {
    id: 2,
    name: "Pashupatinath Temple",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River. A major pilgrimage site attracting thousands of devotees from around the world.",
    how_to_reach: "5 km east of Kathmandu city center. Accessible by taxi, local bus, or hired vehicle.",
    duration: "2-3 hours",
    best_season: "Year-round, especially during Shivaratri (February/March)",
    rating: 4.6,
    highlights: ["Main Temple Complex", "Evening Aarti", "Cremation Ghats", "Sadhus"],
    external_links: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Pashupatinath_Temple" },
      { title: "Google Maps", url: "https://www.google.com/maps/search/Pashupatinath+Temple+Nepal" }
    ]
  },
  {
    id: 3,
    name: "Boudhanath Stupa",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "One of the largest spherical stupas in Nepal and a major center of Tibetan Buddhism. The stupa features the iconic all-seeing eyes of Buddha on all four sides.",
    how_to_reach: "Located 8 km from central Kathmandu. Accessible by taxi, local bus, or walking from nearby areas.",
    duration: "1-2 hours",
    best_season: "Year-round",
    rating: 4.8,
    highlights: ["Giant Stupa with Buddha Eyes", "Prayer Wheels", "Tibetan Monasteries", "Rooftop Cafes"],
    external_links: [
      { title: "Wikipedia", url: "https://en.wikipedia.org/wiki/Boudhanath" },
      { title: "Google Maps", url: "https://www.google.com/maps/search/Boudhanath+Stupa+Nepal" }
    ]
  }
];

async function seedPlaces() {
  console.log('Seeding places...');

  const { data, error } = await supabase
    .from('places')
    .upsert(placesData, { onConflict: 'id' });

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('✅ Seeded', placesData.length, 'places!');
}

seedPlaces();
