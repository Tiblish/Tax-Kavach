"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';

const GSTTicker = () => {
  const [updates, setUpdates] = useState<any[]>([]);

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
    <div className="bg-brand-blue/5 border-b border-brand-blue/10 py-3 overflow-hidden whitespace-nowrap relative">
      <div className="flex items-center">
        <div className="absolute left-0 z-10 bg-white/80 backdrop-blur-sm px-4 py-1 border-r border-brand-blue/10 text-[10px] font-black uppercase tracking-widest text-brand-blue">
          Latest GST Alerts
        </div>
        <div className="animate-marquee flex gap-12 pl-48">
          {updates.map((msg, i) => (
            <span key={i} className="text-xs font-bold text-brand-grey flex items-center">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              {msg}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {updates.map((msg, i) => (
            <span key={`dup-${i}`} className="text-xs font-bold text-brand-grey flex items-center">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3 animate-pulse"></span>
              {msg}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default GSTTicker;
