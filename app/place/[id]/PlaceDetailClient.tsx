'use client';

import { useState, useEffect } from 'react';
import { Heart, MapPin, ArrowLeft, Star, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { places } from '@/lib/places';

interface PlaceDetailClientProps {
  id: number;
}

export default function PlaceDetailClient({ id }: PlaceDetailClientProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisited, setIsVisited] = useState(false);

  const place = places.find(p => p.id === id);

  useEffect(() => {
    const fav = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
    const vis = JSON.parse(localStorage.getItem('nepal-visited') || '[]');
    setIsFavorite(fav.includes(id));
    setIsVisited(vis.includes(id));
  }, [id]);

  const toggleFavorite = () => {
    const fav = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
    const newFav = fav.includes(id) ? fav.filter((f: number) => f !== id) : [...fav, id];
    localStorage.setItem('nepal-favorites', JSON.stringify(newFav));
    setIsFavorite(!isFavorite);
  };

  const toggleVisited = () => {
    const vis = JSON.parse(localStorage.getItem('nepal-visited') || '[]');
    const newVis = vis.includes(id) ? vis.filter((v: number) => v !== id) : [...vis, id];
    localStorage.setItem('nepal-visited', JSON.stringify(newVis));
    setIsVisited(!isVisited);
  };

  if (!place) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Place not found</h1>
          <Link href="/" className="text-cyan-400 hover:underline">← Back to home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
          
          <div className="flex gap-2">
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full transition ${
                isFavorite ? 'bg-pink-500 text-white' : 'bg-white/10 text-gray-400'
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Hero Image */}
        <div className="h-64 md:h-96 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-3xl flex items-center justify-center mb-8">
          <span className="text-8xl">🏔️</span>
        </div>

        {/* Title Section */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
              {place.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{place.name}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              {place.location}
            </div>
            
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              {place.rating}/5
            </div>
            
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              {place.duration}
            </div>
            
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-400" />
              {place.bestSeason}
            </div>
          </div>
        </div>

        {/* Description */}
        <section className="bg-white/5 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">About</h2>
          <p className="text-gray-300 leading-relaxed">{place.description}</p>
        </section>

        {/* How to Reach */}
        <section className="bg-white/5 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">How to Reach</h2>
          <p className="text-gray-300">{place.howToReach}</p>
        </section>

        {/* Highlights */}
        <section className="bg-white/5 rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-bold text-white mb-4">Highlights</h2>
          <ul className="space-y-2">
            {place.highlights.map((highlight, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={toggleFavorite}
            className={`flex-1 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
              isFavorite
                ? 'bg-pink-500 text-white'
                : 'bg-white/10 text-white hover:bg-pink-500/20'
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            {isFavorite ? 'Loved' : 'Love This Place'}
          </button>

          <button
            onClick={toggleVisited}
            className={`flex-1 py-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${
              isVisited
                ? 'bg-green-500 text-white'
                : 'bg-white/10 text-white hover:bg-green-500/20'
            }`}
          >
            {isVisited ? '✓ Visited' : 'Mark Visited'}
          </button>
        </div>
      </main>
    </div>
  );
}
