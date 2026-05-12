import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, DocumentData } from 'firebase/firestore';

export function useFirestore<T = DocumentData>(collectionName: string, sortBy: string = 'createdAt') {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, collectionName), orderBy(sortBy, 'desc'));

    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const results = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as T[];
        setData(results);
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError("Failed to fetch secure archives.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [collectionName, sortBy]);

  return { data, loading, error };
}
