"use client";

import { useState, useEffect } from 'react';
import { db, storage } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Navbar from '@/components/Navbar';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('GST');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  // Security Guard: Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    }
  }, [user, authLoading, router]);

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-gray-50 text-brand-blue font-bold">Authenticating Master Admin...</div>;
  }

  if (!user) return null; // Prevent flicker before redirect

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Uploading...');

    try {
      let imageUrl = '';
      
      // 1. Upload Image to Firebase Storage
      if (image) {
        const storageRef = ref(storage, `blog-images/${Date.now()}_${image.name}`);
        const snapshot = await uploadBytes(storageRef, image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      // 2. Save Data to Firestore
      await addDoc(collection(db, "posts"), {
        title,
        content,
        category,
        imageUrl,
        createdAt: serverTimestamp(),
        slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
      });

      setStatus('Success! Post published.');
      setTitle('');
      setContent('');
      setImage(null);
    } catch (error: any) {
      console.error("Error adding document: ", error);
      setStatus(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-32 pb-20 px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h1 className="text-3xl font-black text-brand-blue mb-2 uppercase">Content Manager</h1>
          <p className="text-brand-grey mb-10 font-medium text-lg">Create and publish new tax insights directly to Firestore.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm font-black text-brand-blue uppercase tracking-widest mb-3">Article Title</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="e.g. New GST Amendments 2026"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-black text-brand-blue uppercase tracking-widest mb-3">Category</label>
                <select 
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                >
                  <option value="GST">GST Solutions</option>
                  <option value="Income Tax">Income Tax</option>
                  <option value="Training">Training Modules</option>
                  <option value="Updates">Latest Updates</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-black text-brand-blue uppercase tracking-widest mb-3">Featured Image</label>
                <input 
                  type="file" 
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all font-medium text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-black text-brand-blue uppercase tracking-widest mb-3">Content (Analysis)</label>
              <textarea 
                rows={8}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="Write your professional analysis here..."
                required
              ></textarea>
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-blue text-white py-5 rounded-2xl font-black text-lg uppercase tracking-tighter hover:bg-blue-900 transition-all shadow-xl shadow-blue-100 disabled:bg-gray-400"
              >
                {loading ? 'Publishing...' : 'Publish to Firestore'}
              </button>
              {status && (
                <p className={`mt-6 text-center font-bold ${status.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                  {status}
                </p>
              )}
            </div>
          </form>

          <hr className="my-16 border-gray-100" />

          <h2 className="text-3xl font-black text-brand-blue mb-2 uppercase">Quick GST Alerts (Ticker)</h2>
          <p className="text-brand-grey mb-10 font-medium text-lg">Send short messages to the scrolling ticker on the GST Services page.</p>

          <form onSubmit={async (e) => {
            e.preventDefault();
            const msg = (e.target as any).alert.value;
            setLoading(true);
            try {
              await addDoc(collection(db, "latest_updates"), {
                message: msg,
                createdAt: serverTimestamp()
              });
              (e.target as any).alert.value = '';
              setStatus('Alert published to ticker!');
            } catch (err: any) {
              setStatus(`Error: ${err.message}`);
            } finally {
              setLoading(false);
            }
          }} className="space-y-6">
            <div>
              <label className="block text-sm font-black text-brand-blue uppercase tracking-widest mb-3">Alert Message</label>
              <input 
                name="alert"
                type="text" 
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue outline-none transition-all font-medium"
                placeholder="e.g. New Deadline for GSTR-3B: 20th Oct 2026"
                required
              />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-grey text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg"
            >
              Push to Ticker
            </button>
          </form>

          <hr className="my-16 border-gray-100" />

          <h2 className="text-3xl font-black text-brand-blue mb-2 uppercase">Academy Modules</h2>
          <p className="text-brand-grey mb-10 font-medium text-lg">Manage the courses and curriculum displayed on the Training page.</p>

          <form onSubmit={async (e) => {
            e.preventDefault();
            const target = e.target as any;
            setLoading(true);
            try {
              await addDoc(collection(db, "courses"), {
                title: target.cTitle.value,
                level: target.cLevel.value,
                duration: target.cDuration.value,
                description: target.cDesc.value,
                order: parseInt(target.cOrder.value) || 0,
                createdAt: serverTimestamp()
              });
              target.reset();
              setStatus('Course module published!');
            } catch (err: any) {
              setStatus(`Error: ${err.message}`);
            } finally {
              setLoading(false);
            }
          }} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input name="cTitle" placeholder="Course Title" required className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
              <input name="cLevel" placeholder="Level (e.g. Intermediate)" required className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
              <input name="cDuration" placeholder="Duration (e.g. 6 Weeks)" required className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
              <input name="cOrder" type="number" placeholder="Display Order (0, 1, 2...)" className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none" />
            </div>
            <textarea name="cDesc" placeholder="Brief Curriculum Description" rows={3} required className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none"></textarea>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-brand-blue text-white py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all shadow-lg"
            >
              Add Course to Academy
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
