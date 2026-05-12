"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const GSTTicker = () => {
  const [updates, setUpdates] = useState<string[]>([]);

  useEffect(() => {
    const q = query(collection(db, "latest_updates"), orderBy("createdAt", "desc"), limit(5));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const news = snapshot.docs.map(doc => doc.data().message);
      setUpdates(news);
    });
    return () => unsubscribe();
  }, []);

  if (updates.length === 0) return null;

  return (
    <div className="bg-brand-crimson/[0.04] border-b border-brand-crimson/[0.08] py-3 overflow-hidden whitespace-nowrap relative">
      <div className="flex items-center">
        {/* Label with surface nesting — white panel on tinted background */}
        <div className="absolute left-0 z-10 bg-white/90 backdrop-blur-sm px-4 py-1.5 border-r border-brand-crimson/10 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-crimson flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-crimson rounded-full animate-pulse"></span>
          Latest GST Alerts
        </div>
        <div className="animate-marquee flex gap-12 pl-48">
          {updates.map((msg, i) => (
            <span key={i} className="text-xs font-semibold text-warm-600 flex items-center">
              <span className="w-1 h-1 bg-brand-crimson/30 rounded-full mr-3"></span>
              {msg}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {updates.map((msg, i) => (
            <span key={`dup-${i}`} className="text-xs font-semibold text-warm-600 flex items-center">
              <span className="w-1 h-1 bg-brand-crimson/30 rounded-full mr-3"></span>
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GSTTicker;
