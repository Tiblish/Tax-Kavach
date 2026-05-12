"use client";

import { useState, useEffect } from 'react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user } = useAuth();

  // If already logged in, redirect to admin
  useEffect(() => {
    if (user) {
      router.push('/admin');
    }
  }, [user, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin');
    } catch (err: any) {
      setError('Invalid credentials. Access denied for Master Admin role.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-brand-blue flex items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-md w-full z-10">
        <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
          
          <div className="text-center mb-10">
            <Link href="/" className="text-3xl font-black text-brand-blue tracking-tighter mb-2 inline-block uppercase">
              TAX KAVACH
            </Link>
            <h2 className="text-xl font-bold text-gray-800">Master Admin Portal</h2>
            <p className="text-brand-grey text-sm font-medium mt-2">Secure access for GST & Income Tax management.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Admin Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="admin@taxkavach.com"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Security Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-xs font-bold text-red-600 text-center">{error}</p>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-black text-lg uppercase tracking-tight hover:bg-blue-900 transition-all shadow-xl shadow-blue-100 disabled:bg-gray-400"
            >
              {loading ? 'Authenticating...' : 'Sign In as Admin'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <Link href="/" className="text-xs font-bold text-brand-grey hover:text-brand-blue uppercase tracking-widest">
              Return to Homepage
            </Link>
          </div>
        </div>
        
        <p className="text-white/40 text-[10px] text-center mt-8 uppercase font-black tracking-[0.3em]">
          End-to-End Encrypted Compliance System
        </p>
      </div>
    </main>
  );
}
