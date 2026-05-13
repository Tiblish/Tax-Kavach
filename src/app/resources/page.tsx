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
    <main className="min-h-screen bg-warm-100 selection:bg-brand-crimson/10 selection:text-brand-crimson-dark">
      <Navbar />
      
      {/* Header — Authority & Insights */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="opacity-0 animate-slide-up stagger-1 inline-flex items-center px-5 py-2 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 border border-brand-crimson/10">
            Expert Analysis
          </div>
          <h1 className="opacity-0 animate-slide-up stagger-2 text-5xl lg:text-7xl xl:text-8xl font-black text-brand-navy tracking-tight mb-8 font-heading">
            Intellectual <span className="text-brand-crimson">Capital.</span>
          </h1>
          <p className="opacity-0 animate-slide-up stagger-3 text-body-lg lg:text-xl text-warm-600 font-bold max-w-2xl mx-auto mb-16 leading-relaxed">
            Professional insights and forensic strategies for India&apos;s complex tax landscape.
          </p>

          {/* Filter Bar — Elite Tabs */}
          <div className="opacity-0 animate-slide-up stagger-4 flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 min-h-[48px] border-2 shadow-sm ${
                  activeCategory === cat 
                  ? 'bg-brand-navy text-white border-brand-navy shadow-elevation-2 scale-105' 
                  : 'bg-white text-warm-500 border-warm-200 hover:border-brand-crimson hover:text-brand-crimson hover:shadow-md'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid — Staggered Entrance */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-[2.5rem] border border-warm-200/50 overflow-hidden shadow-elevation-1">
                  <div className="aspect-[16/10] skeleton"></div>
                  <div className="p-10 space-y-5">
                    <div className="h-2 skeleton w-1/4"></div>
                    <div className="h-8 skeleton w-3/4"></div>
                    <div className="h-4 skeleton w-full"></div>
                    <div className="h-4 skeleton w-2/3"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post, idx) => (
                <Link key={post.id} href={`/resources/${post.slug || post.id}`} className={`opacity-0 animate-slide-up stagger-${(idx % 3) + 1} group`}>
                  <article className="h-full flex flex-col bg-white rounded-[2.5rem] border border-warm-200/50 overflow-hidden shadow-elevation-1 hover:shadow-elevation-hero transition-all duration-500 card-premium !p-0">
                    <div className="aspect-[16/10] bg-warm-50 relative overflow-hidden">
                      {post.imageUrl ? (
                        <Image src={post.imageUrl} alt={post.title || 'Tax insight article'} fill className="object-cover group-hover:scale-110 transition-transform duration-1000" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-crimson/[0.03] to-brand-navy/[0.05] text-brand-crimson/10">
                          <svg className="w-20 h-20 opacity-20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                        </div>
                      )}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-brand-navy text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-2xl backdrop-blur-md">
                        {post.category}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow relative">
                      <h2 className="text-2xl font-black text-brand-navy mb-5 leading-tight font-heading group-hover:text-brand-crimson transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-warm-600 font-bold line-clamp-3 mb-10 flex-grow text-body leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        {post.metaDescription || "Expert insights on modern tax compliance and litigation strategies from the Tax Kavach team."}
                      </p>
                      <div className="pt-8 border-t border-warm-100 flex items-center text-[10px] font-black text-brand-crimson uppercase tracking-[0.3em]">
                        Analyze Full Insight 
                        <svg className="w-4 h-4 ml-3 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-warm-200 shadow-elevation-1 opacity-0 animate-slide-up">
              <div className="text-6xl mb-6 grayscale opacity-20">📰</div>
              <p className="text-brand-navy font-black text-2xl font-heading mb-2">No Insights Available</p>
              <p className="text-warm-500 font-bold uppercase tracking-widest text-[10px]">Strategic content is being drafted.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
