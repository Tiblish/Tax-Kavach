"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const ResourcesPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'GST Insights', 'Income Tax Tips', 'Departmental Updates'];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(fetched);
        setFilteredPosts(fetched);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(p => p.category === activeCategory));
    }
  }, [activeCategory, posts]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-40 pb-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-black text-brand-blue uppercase tracking-tighter mb-6">
            Tax Kavach <span className="text-brand-grey">Resources</span>
          </h1>
          <p className="text-xl text-brand-grey font-medium max-w-2xl mx-auto mb-12">
            Professional insights, regulatory updates, and expert strategies for a complex tax landscape.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                  ? 'bg-brand-blue text-white shadow-xl' 
                  : 'bg-white text-brand-grey border border-gray-200 hover:border-brand-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-20 font-black text-brand-blue italic text-2xl">Accessing Archives...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post) => (
                <Link key={post.id} href={`/resources/${post.slug || post.id}`} className="group">
                  <article className="h-full flex flex-col bg-white rounded-[40px] border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-[16/10] bg-gray-100 relative overflow-hidden">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-brand-blue/5 text-brand-blue/10">
                          <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                        </div>
                      )}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-10 flex flex-col flex-grow">
                      <h2 className="text-2xl font-bold text-brand-blue mb-4 leading-tight group-hover:text-blue-700 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-brand-grey font-medium line-clamp-3 mb-8 flex-grow">
                        {post.metaDescription || "Expert insights on modern tax compliance and litigation strategies from the Tax Kavach team."}
                      </p>
                      <div className="pt-6 border-t border-gray-50 flex items-center text-xs font-black text-brand-blue uppercase tracking-widest">
                        Read Full Insight 
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20 text-brand-grey font-bold">
              No articles found in this category yet. Stay tuned!
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ResourcesPage;
