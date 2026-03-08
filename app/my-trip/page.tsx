'use client';

import { useState, useEffect } from 'react';
import { Heart, MapPin, ArrowLeft, Loader2, Calendar, DollarSign, Edit2 } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase, TripPlan } from '@/lib/supabase';
import { User } from '@supabase/supabase-js';
import { places as localPlaces } from '@/lib/places';
import TripPlanEditor from '@/components/TripPlanEditor';

export default function MyTrip() {
  const [plans, setPlans] = useState<TripPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [editingPlan, setEditingPlan] = useState<TripPlan | null>(null);

  useEffect(() => {
    checkUser();
    loadPlans();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
  };

  const loadPlans = async () => {
    setLoading(true);
    
    // Get user
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      // Fetch from Supabase
      const { data: tripPlans, error } = await supabase
        .from('trip_plans')
        .select('*')
        .eq('user_id', user.id)
        .eq('loved', true);
      
      if (!error && tripPlans) {
        // Merge with place data
        const mergedPlans = tripPlans.map((plan: TripPlan) => ({
          ...plan,
          place: localPlaces.find(p => p.id === plan.place_id)
        }));
        setPlans(mergedPlans);
      }
    } else {
      // Use localStorage for non-logged in users
      const favs = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
      const localPlans = favs.map((id: number) => ({
        place_id: id,
        place: localPlaces.find(p => p.id === id),
        loved: true,
        visited: false
      }));
      setPlans(localPlans);
    }
    
    setLoading(false);
  };

  const updatePlan = async (planId: string, updates: Partial<TripPlan>) => {
    if (!user) {
      // Save to localStorage for non-logged in users
      const savedPlans = JSON.parse(localStorage.getItem('nepal-trip-plans') || '{}');
      savedPlans[planId] = { ...savedPlans[planId], ...updates };
      localStorage.setItem('nepal-trip-plans', JSON.stringify(savedPlans));
      setEditingPlan(null);
      return;
    }

    const { error } = await supabase
      .from('trip_plans')
      .update(updates)
      .eq('id', planId);

    if (!error) {
      setPlans(plans.map(p => p.id === planId ? { ...p, ...updates } : p));
      setEditingPlan(null);
    }
  };

  const removeFavorite = async (placeId: number) => {
    if (user) {
      await supabase
        .from('trip_plans')
        .delete()
        .eq('place_id', placeId)
        .eq('user_id', user.id);
    }
    
    // Update localStorage
    const favs = JSON.parse(localStorage.getItem('nepal-favorites') || '[]');
    const newFavs = favs.filter((id: number) => id !== placeId);
    localStorage.setItem('nepal-favorites', JSON.stringify(newFavs));
    
    setPlans(plans.filter(p => p.place_id !== placeId));
  };

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
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-300 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
              Back to Places
            </Link>
            
            <h1 className="text-xl font-bold text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500 fill-current" />
              My Trip ({plans.length})
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {!user && (
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 mb-6">
            <p className="text-yellow-200 text-sm">
              💡 <Link href="/auth" className="underline">Sign in</Link> to save your trip plans to the cloud and access them anywhere.
            </p>
          </div>
        )}

        {plans.length === 0 ? (
          <div className="text-center py-12 bg-white/5 rounded-2xl">
            <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">No places loved yet.</p>
            <Link href="/" className="text-cyan-400 hover:underline mt-2 inline-block">
              Explore places →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.place_id || index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition"
              >
                <div className="flex items-start justify-between">
                  <Link href={`/place/${plan.place_id}`} className="flex items-center gap-4 flex-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-lg flex items-center justify-center text-2xl">
                      🏔️
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-white">{plan.place?.name}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {plan.place?.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {plan.planned_start_date || 'No date set'}
                        </span>
                        
                        {plan.priority && (
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            plan.priority === 'must-see' ? 'bg-red-500/20 text-red-300' :
                            plan.priority === 'maybe' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-gray-500/20 text-gray-300'
                          }`}>
                            {plan.priority}
                          </span>
                        )}
                      </div>
                      
                      {plan.notes && (
                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">{plan.notes}</p>
                      )}
                    </div>
                  </Link>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditingPlan(plan)}
                      className="p-2 text-gray-400 hover:text-cyan-400 transition"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => removeFavorite(plan.place_id)}
                      className="p-2 text-gray-400 hover:text-red-400 transition"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Edit Modal */}
      <AnimatePresence>
        {editingPlan && editingPlan.place && (
          <TripPlanEditor
            plan={editingPlan}
            place={editingPlan.place}
            onUpdate={(updates) => updatePlan(editingPlan.id, updates)}
            onClose={() => setEditingPlan(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
