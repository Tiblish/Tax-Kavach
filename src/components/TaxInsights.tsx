"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import Link from 'next/link';

const TaxInsights = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(3));
        const querySnapshot = await getDocs(q);
        const fetchedPosts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts from Firestore:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-brand-grey font-bold italic">Loading Insights...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="group flex flex-col h-full">
            <div className="aspect-[16/10] bg-gray-100 rounded-3xl overflow-hidden mb-8 relative shadow-sm group-hover:shadow-xl transition-all duration-500">
              {post.imageUrl ? (
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full bg-brand-blue/5 flex items-center justify-center text-brand-blue/20">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
                  </svg>
                </div>
              )}
              <div className="absolute top-6 left-6 bg-brand-blue text-white px-4 py-1 rounded-md text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                {post.category || 'Article'}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4 group-hover:text-blue-800 transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-brand-grey font-medium line-clamp-3 mb-6 flex-grow leading-relaxed">
              {post.content}
            </p>
            <Link href={`/resources/${post.slug}`} className="text-brand-blue text-sm font-black uppercase tracking-widest flex items-center group-hover:gap-2 transition-all">
              Read Analysis
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))
      ) : (
        <div className="col-span-3 text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-brand-grey font-bold italic">Latest tax insights are being updated. Check back shortly.</p>
        </div>
      )}
    </div>
  );
};

export default TaxInsights;
