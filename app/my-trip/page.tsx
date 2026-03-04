'use client';

import { useState, useEffect } from 'react';
import { Heart, MapPin, ArrowLeft, Trash2, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { places } from '@/lib/places';

export default function MyTrip() {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [visited, setVisited] = useState<number[]>([]);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
    const vis = JSON.parse(localStorage.getItem('nepal-visited') || '[]');
    setFavorites(fav);
    setVisited(vis);
  }, []);

  const removeFavorite = (id: number) => {
    const newFav = favorites.filter(f => f !== id);
    setFavorites(newFav);
    localStorage.setItem('nepal-favorites', JSON.stringify(newFav));
  };

  const favoritePlaces = places.filter(p => favorites.includes(p.id));
  const visitedPlaces = places.filter(p => visited.includes(p.id));

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
              Back to Places
            </Link>
            
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
              My Trip
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">{favorites.length}</div>
            <div className="text-gray-300">Places Loved ❤️</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">{visited.length}</div>
            <div className="text-gray-300">Places Visited ✓</div>
          </div>
        </div>

        {/* Loved Places */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Heart className="w-6 h-6 text-pink-500 fill-current" />
            Your Wishlist
          </h2>

          {favoritePlaces.length === 0 ? (
            <div className="text-center py-12 bg-white/5 rounded-2xl">
              <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No places loved yet.</p>
              <Link href="/" className="text-cyan-400 hover:underline mt-2 inline-block">
                Explore places →
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {favoritePlaces.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-xl p-4 flex items-center justify-between group hover:bg-white/10 transition"
                >
                  <Link href={`/place/${place.id}`} className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center text-2xl">
                      🏔️
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-white group-hover:text-cyan-400 transition">{place.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {place.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {place.duration}
                        </span>
                      </div>
                    </div>
                  </Link>

                  <button
                    onClick={() => removeFavorite(place.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* Visited Places */}
        {visitedPlaces.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              ✓ Visited
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {visitedPlaces.map(place => (
                <Link
                  key={place.id}
                  href={`/place/${place.id}`}
                  className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 hover:bg-green-500/20 transition"
                >
                  <h3 className="font-bold text-white">{place.name}</h3>
                  <p className="text-gray-400 text-sm">{place.location}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
