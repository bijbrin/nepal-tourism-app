'use client';

import { useState, useEffect } from 'react';
import { Heart, Check, MapPin, Search, Filter, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { places as localPlaces } from '@/lib/places';

export default function Home() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [visited, setVisited] = useState<number[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkUser();
    loadFavorites();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
  };

  const loadFavorites = async () => {
    // Try localStorage first for offline
    const localFav = localStorage.getItem('nepal-favorites');
    const localVis = localStorage.getItem('nepal-visited');
    if (localFav) setFavorites(JSON.parse(localFav));
    if (localVis) setVisited(JSON.parse(localVis));

    // If logged in, sync with Supabase
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: plans } = await supabase
        .from('trip_plans')
        .select('place_id, loved, visited')
        .eq('user_id', user.id);
      
      if (plans) {
        const favs = plans.filter(p => p.loved).map(p => p.place_id);
        const vis = plans.filter(p => p.visited).map(p => p.place_id);
        setFavorites(favs);
        setVisited(vis);
        localStorage.setItem('nepal-favorites', JSON.stringify(favs));
        localStorage.setItem('nepal-visited', JSON.stringify(vis));
      }
    }
  };

  const toggleFavorite = async (id: number) => {
    const newFavs = favorites.includes(id) 
      ? favorites.filter(f => f !== id)
      : [...favorites, id];
    setFavorites(newFavs);
    localStorage.setItem('nepal-favorites', JSON.stringify(newFavs));

    // Save to Supabase if logged in
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: existing } = await supabase
        .from('trip_plans')
        .select('id')
        .eq('user_id', user.id)
        .eq('place_id', id)
        .single();

      if (existing) {
        await supabase
          .from('trip_plans')
          .update({ loved: !favorites.includes(id) })
          .eq('id', existing.id);
      } else {
        await supabase
          .from('trip_plans')
          .insert({
            user_id: user.id,
            place_id: id,
            loved: true,
            visited: visited.includes(id)
          });
      }
    }
  };

  const toggleVisited = async (id: number) => {
    const newVis = visited.includes(id)
      ? visited.filter(v => v !== id)
      : [...visited, id];
    setVisited(newVis);
    localStorage.setItem('nepal-visited', JSON.stringify(newVis));

    // Save to Supabase if logged in
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: existing } = await supabase
        .from('trip_plans')
        .select('id')
        .eq('user_id', user.id)
        .eq('place_id', id)
        .single();

      if (existing) {
        await supabase
          .from('trip_plans')
          .update({ visited: !visited.includes(id) })
          .eq('id', existing.id);
      } else {
        await supabase
          .from('trip_plans')
          .insert({
            user_id: user.id,
            place_id: id,
            loved: favorites.includes(id),
            visited: true
          });
      }
    }
  };

  const filteredPlaces = localPlaces.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase()) ||
                         place.description.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || place.category.toLowerCase().includes(filter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
      </div>
    );
  }

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
            
            <div className="flex items-center gap-3">
              {user ? (
                <span className="text-sm text-gray-400">{user.email}</span>
              ) : (
                <Link 
                  href="/auth"
                  className="text-sm text-cyan-400 hover:underline"
                >
                  Sign In
                </Link>
              )}
              <Link 
                href="/my-trip"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-medium hover:opacity-90 transition"
              >
                <Heart className="w-4 h-4" />
                My Trip ({favorites.length})
              </Link>
            </div>
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
              transition={{ delay: index * 0.02 }}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl">{getEmoji(place.category)}</span>
              </div>

              <div className="p-5">
                {/* Category Badge */}
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="px-2 py-1 text-xs bg-white/10 rounded-full text-cyan-300">
                    {place.category}
                  </span>
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
    'UNESCO World Heritage Site': '🏛️',
    'Trekking Destination': '🥾',
    'Lake': '💧',
    'National Park': '🦁',
    'Cultural Site': '🏮',
    'Adventure Sports': '🪂',
    'Hill Station': '🌄',
    'Religious Site': '🙏',
    'Cave': '🕳️',
    'Off-the-Beaten-Path': '🗺️',
  };
  return emojis[category] || '🏔️';
}
