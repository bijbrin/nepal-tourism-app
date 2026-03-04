'use client';

import { useState, useEffect } from 'react';
import { Heart, Check, MapPin, Search, Filter } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Simplified data for demo - full data would be imported
const places = [
  { id: 1, name: "Everest Base Camp Trek", category: ["trekking"], location: "Solukhumbu", rating: 4.8, description: "World's most famous trek to the base of Mount Everest" },
  { id: 2, name: "Annapurna Base Camp Trek", category: ["trekking"], location: "Kaski", rating: 4.7, description: "Classic trek to the heart of Annapurna sanctuary" },
  { id: 3, name: "Pokhara", category: ["nature", "adventure"], location: "Kaski", rating: 4.9, description: "Tourism capital with lakes and mountains" },
  { id: 4, name: "Boudhanath Stupa", category: ["cultural"], location: "Kathmandu", rating: 4.6, description: "Largest stupa in Nepal, Tibetan Buddhism center" },
  { id: 5, name: "Chitwan National Park", category: ["nature"], location: "Chitwan", rating: 4.5, description: "Famous for rhinos, tigers, and elephant safaris" },
  { id: 6, name: "Pashupatinath Temple", category: ["cultural", "religious"], location: "Kathmandu", rating: 4.6, description: "Holiest Hindu temple dedicated to Lord Shiva" },
  // Add more as needed
];

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [visited, setVisited] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fav = localStorage.getItem('nepal-favorites');
    const vis = localStorage.getItem('nepal-visited');
    if (fav) setFavorites(JSON.parse(fav));
    if (vis) setVisited(JSON.parse(vis));
  }, []);

  const toggleFavorite = (id: number) => {
    const newFavs = favorites.includes(id) 
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('nepal-favorites', JSON.stringify(newFavs));
  };

  const toggleVisited = (id: number) => {
    const newVis = visited.includes(id)
      ? visited.filter(v => v !== id)
      : [...visited, id];
    setVisited(newVis);
    localStorage.setItem('nepal-visited', JSON.stringify(newVis));
  };

  const filteredPlaces = places.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase()) ||
                         place.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || place.category.includes(filter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                🏔️ Nepal Tourism
              </Link>
              <p className="text-sm text-gray-400">Discover 100 Amazing Places</p>
            </div>
            
            <Link 
              href="/my-trip"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium hover:opacity-90 transition"
            >
              <Heart className="w-4 h-4" />
              My Trip ({favorites.length})
            </Link>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search places..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
              />
            </div>
            
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="all" className="bg-slate-800">All Categories</option>
              <option value="trekking" className="bg-slate-800">Trekking</option>
              <option value="cultural" className="bg-slate-800">Cultural</option>
              <option value="nature" className="bg-slate-800">Nature</option>
              <option value="adventure" className="bg-slate-800">Adventure</option>
              <option value="religious" className="bg-slate-800">Religious</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place, index) => (
            <motion.div
              key={place.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl">{getEmoji(place.category[0])}</span>
              </div>

              <div className="p-5">
                {/* Category Badge */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {place.category.map(cat => (
                    <span key={cat} className="px-2 py-1 text-xs bg-white/10 rounded-full text-cyan-300">
                      {cat}
                    </span>
                  ))}
                </div>

                <Link href={`/place/${place.id}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">
                    {place.name}
                  </h3>
                </Link>

                <div className="flex items-center gap-1 text-gray-400 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {place.location}
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {place.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-medium">{place.rating}</span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleFavorite(place.id)}
                      className={`p-2 rounded-full transition ${
                        favorites.includes(place.id)
                          ? 'bg-pink-500 text-white'
                          : 'bg-white/10 text-gray-400 hover:bg-pink-500/20'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(place.id) ? 'fill-current' : ''}`} />
                    </button>

                    <button
                      onClick={() => toggleVisited(place.id)}
                      className={`p-2 rounded-full transition ${
                        visited.includes(place.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-white/10 text-gray-400 hover:bg-green-500/20'
                      }`}
                    >
                      <Check className={`w-5 h-5 ${visited.includes(place.id) ? 'stroke-[3]' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No places found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}

function getEmoji(category: string): string {
  const emojis: Record<string, string> = {
    trekking: '🥾',
    cultural: '🏛️',
    nature: '🌿',
    adventure: '🎿',
    religious: '🙏',
  };
  return emojis[category] || '🏔️';
}
