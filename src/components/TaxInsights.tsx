"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  id: string;
  title?: string;
  slug?: string;
  category?: string;
  imageUrl?: string;
  content?: string;
}

const TaxInsights = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(3));
        const querySnapshot = await getDocs(q);
        const fetchedPosts: Post[] = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Post));
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
    // Skeleton loader with shimmer animation
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-3xl border border-slate-100/80 overflow-hidden shadow-elevation-1">
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
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="group flex flex-col h-full">
            <div className="aspect-[16/10] bg-slate-100 rounded-2xl overflow-hidden mb-6 relative shadow-elevation-1 group-hover:shadow-elevation-2 transition-all duration-500">
              {post.imageUrl ? (
                <Image 
                  src={post.imageUrl} 
                  alt={post.title || 'Tax insight article'} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 flex items-center justify-center text-brand-blue/20">
                  <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
                  </svg>
                </div>
              )}
              <div className="absolute top-4 left-4 bg-brand-blue text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] shadow-lg">
                {post.category || 'Article'}
              </div>
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-brand-blue-dark transition-colors line-clamp-2 leading-tight">
              {post.title}
            </h3>
            <p className="text-brand-grey font-medium line-clamp-3 mb-5 flex-grow text-body leading-relaxed">
              {post.content}
            </p>
            <Link href={`/resources/${post.slug}`} className="inline-flex items-center text-brand-blue text-sm font-bold uppercase tracking-widest hover:gap-3 gap-1 transition-all duration-300">
              Read Analysis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))
      ) : (
        <div className="col-span-3 text-center py-16 bg-white rounded-3xl border-2 border-dashed border-slate-200 shadow-elevation-1">
          <div className="text-5xl mb-4 grayscale opacity-30">📊</div>
          <p className="text-brand-grey font-bold">Latest tax insights are being updated.</p>
          <p className="text-brand-steel text-sm mt-1">Check back shortly for expert analysis.</p>
        </div>
      )}
    </div>
  );
};

export default TaxInsights;
