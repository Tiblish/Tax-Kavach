"use client";

import { useEffect, useState, useMemo } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string;
  title?: string;
  slug?: string;
  category?: string;
  imageUrl?: string;
  metaDescription?: string;
  content?: string;
  createdAt?: unknown;
}

const ResourcesPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'GST Insights', 'Income Tax Tips', 'Departmental Updates'];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetched: Post[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post));
        setPosts(fetched);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Derived state — no useEffect needed, avoids cascading renders
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return posts;
    return posts.filter(p => p.category === activeCategory);
  }, [activeCategory, posts]);

  return (
    <main className="min-h-screen bg-warm-100">
      <Navbar />
      
      {/* Header — warm palette */}
      <section className="pt-32 pb-16 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1.5 bg-brand-crimson/[0.06] text-brand-crimson text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
            Expert Analysis
          </div>
          <h1 className="text-heading-lg lg:text-display font-black text-brand-navy uppercase tracking-tight mb-4">
            Tax Kavach <span className="text-warm-500">Resources</span>
          </h1>
          <p className="text-body-lg text-warm-600 font-medium max-w-2xl mx-auto mb-10">
            Professional insights, regulatory updates, and expert strategies for a complex tax landscape.
          </p>

          {/* Filter Bar — crimson active state */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 min-h-[44px] ${
                  activeCategory === cat 
                  ? 'bg-brand-crimson text-white shadow-elevation-1' 
                  : 'bg-warm-100 text-warm-600 border border-warm-300 hover:border-brand-crimson hover:text-brand-crimson'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-20 relative">
        <div className="section-divider"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-3xl border border-warm-200/80 overflow-hidden shadow-elevation-1">
                  <div className="aspect-[16/10] skeleton"></div>
                  <div className="p-8 space-y-4">
                    <div className="h-3 skeleton w-1/4"></div>
                    <div className="h-6 skeleton w-3/4"></div>
                    <div className="h-4 skeleton w-full"></div>
                    <div className="h-4 skeleton w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/resources/${post.slug || post.id}`} className="group">
                  <article className="h-full flex flex-col bg-white rounded-3xl border border-warm-200/80 overflow-hidden shadow-elevation-1 card-interactive">
                    <div className="aspect-[16/10] bg-warm-100 relative overflow-hidden">
                      {post.imageUrl ? (
                        <Image src={post.imageUrl} alt={post.title || 'Tax insight article'} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-crimson/5 to-brand-navy/10 text-brand-crimson/15">
                          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                        </div>
                      )}
                      <div className="absolute top-4 left-4 px-3 py-1.5 bg-brand-crimson text-white text-[10px] font-bold uppercase tracking-[0.15em] rounded-lg shadow-lg">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h2 className="text-xl font-bold text-brand-navy mb-3 leading-tight group-hover:text-brand-crimson transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-warm-600 font-medium line-clamp-3 mb-6 flex-grow text-body leading-relaxed">
                        {post.metaDescription || "Expert insights on modern tax compliance and litigation strategies from the Tax Kavach team."}
                      </p>
                      <div className="pt-5 border-t border-warm-200 flex items-center text-xs font-bold text-brand-crimson uppercase tracking-widest">
                        Read Full Insight 
                        <svg className="w-3.5 h-3.5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-warm-300 shadow-elevation-1">
              <div className="text-5xl mb-4 grayscale opacity-30">📰</div>
              <p className="text-warm-700 font-bold text-lg">No articles found in this category yet.</p>
              <p className="text-warm-500 text-sm mt-1">Stay tuned for expert insights!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
