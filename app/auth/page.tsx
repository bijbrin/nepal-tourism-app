'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { ArrowLeft, Loader2 } from 'lucide-react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) setMessage(error.message);
      else setMessage('Check your email for confirmation!');
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setMessage(error.message);
      else window.location.href = '/';
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white mb-2">
            {isSignUp ? 'Create Account' : 'Sign In'}
          </h1>
          <p className="text-gray-400 mb-6">
            {isSignUp ? 'Join Nepal Tourism to save your trips' : 'Welcome back to Nepal Tourism'}
          </p>

          {message && (
            <div className={`p-3 rounded-lg mb-4 text-sm ${
              message.includes('Check') ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'
            }`}>
              {message}
            </div>
          )}

          <form onSubmit={handleAuth} className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading && <Loader2 className="w-5 h-5 animate-spin" />}
              {isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-cyan-400 hover:underline"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
