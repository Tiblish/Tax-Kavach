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
    <div 
      className="bg-brand-crimson/[0.03] border-b border-brand-crimson/[0.08] py-3.5 overflow-hidden whitespace-nowrap relative group"
      role="region" 
      aria-label="GST Latest Updates Ticker"
      aria-live="polite"
    >
      <div className="flex items-center">
        {/* Label — Premium Glassmorphism */}
        <div className="absolute left-0 z-10 bg-white/80 backdrop-blur-md px-6 py-2 border-r border-brand-crimson/10 text-[10px] font-black uppercase tracking-[0.25em] text-brand-crimson flex items-center gap-3 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
          </span>
          Latest GST Alerts
        </div>
        
        {/* Marquee with better spacing */}
        <div className="animate-marquee flex gap-16 pl-64 group-hover:[animation-play-state:paused] transition-all">
          {updates.map((msg, i) => (
            <span key={i} className="text-[11px] font-bold text-warm-600 flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-brand-crimson/20 rounded-full"></span>
              {msg}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {updates.map((msg, i) => (
            <span key={`dup-${i}`} className="text-[11px] font-bold text-warm-600 flex items-center gap-4">
              <span className="w-1.5 h-1.5 bg-brand-crimson/20 rounded-full"></span>
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GSTTicker;
