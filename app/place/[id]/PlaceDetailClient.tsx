'use client';

import { useState, useEffect } from 'react';
import { Heart, MapPin, ArrowLeft, Star, Calendar, Clock, CheckSquare, Plus, Trash2, Edit2, Save, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { places } from '@/lib/places';
import { supabase } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';

interface TripPlan {
  id?: string;
  place_id: number;
  notes?: string;
  planned_start_date?: string;
  planned_end_date?: string;
  budget_estimate?: number;
  priority?: 'must-see' | 'maybe' | 'backup';
  checklist: { text: string; done: boolean }[];
  loved: boolean;
}

interface PlaceDetailClientProps {
  id: number;
}

export default function PlaceDetailClient({ id }: PlaceDetailClientProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisited, setIsVisited] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [tripPlan, setTripPlan] = useState<TripPlan | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newTodo, setNewTodo] = useState('');
  const [notes, setNotes] = useState('');
  const [startDate, setStartDate] = useState('');
  const [budget, setBudget] = useState('');

  const place = places.find(p => p.id === id);

  useEffect(() => {
    checkUser();
    loadData();
  }, [id]);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const loadData = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    // Load favorites and visited from localStorage (works for both auth and non-auth)
    const fav = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
    const vis = JSON.parse(localStorage.getItem('nepal-visited') || '[]');
    setIsFavorite(fav.includes(id));
    setIsVisited(vis.includes(id));

    if (user) {
      // Fetch trip plan from Supabase
      const { data: plan } = await supabase
        .from('trip_plans')
        .select('*')
        .eq('place_id', id)
        .eq('user_id', user.id)
        .single();
      
      if (plan) {
        setTripPlan({
          ...plan,
          checklist: plan.checklist || []
        });
        setNotes(plan.notes || '');
        setStartDate(plan.planned_start_date || '');
        setBudget(plan.budget_estimate?.toString() || '');
      }
    } else {
      // Load from localStorage for non-authenticated users
      const savedPlans = JSON.parse(localStorage.getItem('nepal-trip-plans') || '{}');
      const plan = savedPlans[id];
      if (plan) {
        setTripPlan({
          place_id: id,
          ...plan,
          checklist: plan.checklist || []
        });
        setNotes(plan.notes || '');
        setStartDate(plan.planned_start_date || '');
        setBudget(plan.budget_estimate?.toString() || '');
      }
    }
  };

  const saveTripPlan = async () => {
    const updates = {
      notes,
      planned_start_date: startDate || undefined,
      budget_estimate: budget ? parseFloat(budget) : undefined,
      checklist: tripPlan?.checklist || []
    };

    if (user) {
      if (tripPlan?.id) {
        await supabase
          .from('trip_plans')
          .update(updates)
          .eq('id', tripPlan.id);
      } else {
        await supabase
          .from('trip_plans')
          .insert({
            place_id: id,
            user_id: user.id,
            loved: isFavorite,
            ...updates
          });
      }
    } else {
      // Save to localStorage
      const savedPlans = JSON.parse(localStorage.getItem('nepal-trip-plans') || '{}');
      savedPlans[id] = {
        ...savedPlans[id],
        ...updates,
        place_id: id
      };
      localStorage.setItem('nepal-trip-plans', JSON.stringify(savedPlans));
    }

    setTripPlan(prev => prev ? { ...prev, ...updates } : { place_id: id, loved: isFavorite, ...updates });
    setIsEditing(false);
  };

  const toggleFavorite = async () => {
    const newFavState = !isFavorite;
    setIsFavorite(newFavState);

    // Update localStorage
    const fav = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
    const newFav = newFavState ? [...fav, id] : fav.filter((f: number) => f !== id);
    localStorage.setItem('nepal-favorites', JSON.stringify(newFav));

    if (user) {
      if (newFavState) {
        await supabase.from('trip_plans').upsert({
          place_id: id,
          user_id: user.id,
          loved: true,
          checklist: tripPlan?.checklist || []
        });
      } else {
        await supabase
          .from('trip_plans')
          .delete()
          .eq('place_id', id)
          .eq('user_id', user.id);
      }
    }
  };

  const toggleVisited = () => {
    const newVisState = !isVisited;
    setIsVisited(newVisState);
    const vis = JSON.parse(localStorage.getItem('nepal-visited') || '[]');
    const newVis = newVisState ? [...vis, id] : vis.filter((v: number) => v !== id);
    localStorage.setItem('nepal-visited', JSON.stringify(newVis));
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;
    const updatedChecklist = [...(tripPlan?.checklist || []), { text: newTodo, done: false }];
    setTripPlan(prev => prev ? { ...prev, checklist: updatedChecklist } : { place_id: id, checklist: updatedChecklist, loved: isFavorite });
    setNewTodo('');
  };

  const toggleTodo = (index: number) => {
    const updatedChecklist = (tripPlan?.checklist || []).map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    setTripPlan(prev => prev ? { ...prev, checklist: updatedChecklist } : { place_id: id, checklist: updatedChecklist, loved: isFavorite });
  };

  const removeTodo = (index: number) => {
    const updatedChecklist = (tripPlan?.checklist || []).filter((_, i) => i !== index);
    setTripPlan(prev => prev ? { ...prev, checklist: updatedChecklist } : { place_id: id, checklist: updatedChecklist, loved: isFavorite });
  };

  const saveTodos = async () => {
    if (user && tripPlan?.id) {
      await supabase
        .from('trip_plans')
        .update({ checklist: tripPlan.checklist })
        .eq('id', tripPlan.id);
    } else if (!user) {
      const savedPlans = JSON.parse(localStorage.getItem('nepal-trip-plans') || '{}');
      savedPlans[id] = {
        ...savedPlans[id],
        checklist: tripPlan?.checklist || [],
        place_id: id
      };
      localStorage.setItem('nepal-trip-plans', JSON.stringify(savedPlans));
    }
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

  const hasPlan = tripPlan && (tripPlan.notes || tripPlan.checklist.length > 0 || tripPlan.planned_start_date || tripPlan.budget_estimate);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/my-trip" className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
            Back to My Trip
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

        {/* My Trip Plan Section */}
        <section className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CheckSquare className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-bold text-white">My Trip Plan</h2>
            </div>
            <button
              onClick={() => isEditing ? saveTripPlan() : setIsEditing(true)}
              className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-lg transition"
            >
              {isEditing ? <Save className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
              {isEditing ? 'Save Plan' : 'Edit Plan'}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Notes */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Personal Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Add your thoughts, tips, plans..."
                    rows={3}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Dates & Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Visit Date
                    </label>
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                      Budget (USD)
                    </label>
                    <input
                      type="number"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      placeholder="Estimated budget"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500"
                    />
                  </div>
                </div>

                {/* Add Todo */}
                <div>
                  <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                    <CheckSquare className="w-4 h-4" />
                    Add Todo Item
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                      placeholder="What do you need to do?"
                      className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500"
                    />
                    <button
                      onClick={addTodo}
                      className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Current Todos */}
                {tripPlan?.checklist && tripPlan.checklist.length > 0 && (
                  <div className="space-y-2">
                    {tripPlan.checklist.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                        <button
                          onClick={() => toggleTodo(index)}
                          className={`w-5 h-5 rounded border flex items-center justify-center transition ${
                            item.done ? 'bg-green-500 border-green-500' : 'border-white/20'
                          }`}
                        >
                          {item.done && <CheckSquare className="w-3 h-3 text-white" />}
                        </button>
                        <span className={`flex-1 ${item.done ? 'line-through text-gray-500' : 'text-white'}`}>
                          {item.text}
                        </span>
                        <button
                          onClick={() => removeTodo(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full py-2 text-gray-400 hover:text-white transition"
                >
                  Cancel
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {hasPlan ? (
                  <div className="space-y-4">
                    {(startDate || budget) && (
                      <div className="flex flex-wrap gap-4 text-sm">
                        {startDate && (
                          <span className="flex items-center gap-2 text-gray-300">
                            <Calendar className="w-4 h-4 text-cyan-400" />
                            {startDate}
                          </span>
                        )}
                        {budget && (
                          <span className="flex items-center gap-2 text-gray-300">
                            Budget: ${budget}
                          </span>
                        )}
                      </div>
                    )}

                    {notes && (
                      <div className="bg-white/5 rounded-lg p-3">
                        <p className="text-gray-300 text-sm">{notes}</p>
                      </div>
                    )}

                    {tripPlan?.checklist && tripPlan.checklist.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm text-gray-400 mb-2">Todo List</p>
                        {tripPlan.checklist.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3"
                          >
                            <button
                              onClick={() => { toggleTodo(index); saveTodos(); }}
                              className={`w-5 h-5 rounded border flex items-center justify-center transition ${
                                item.done ? 'bg-green-500 border-green-500' : 'border-white/20'
                              }`}
                            >
                              {item.done && <CheckSquare className="w-3 h-3 text-white" />}
                            </button>
                            <span className={`${item.done ? 'line-through text-gray-500' : 'text-gray-300'}`}>
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    No plans yet. Click "Edit Plan" to add notes, dates, budget, and todos.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

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
