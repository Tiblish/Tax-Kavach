"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const CourseList = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const q = query(collection(db, "courses"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const fetched = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setCourses(fetched);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) return <div className="text-center py-10 font-bold text-brand-blue italic">Loading Academy Modules...</div>;

  // Fallback static modules if Firestore is empty
  const displayCourses = courses.length > 0 ? courses : [
    {
      title: "The Beginner’s Shield",
      description: "Foundation of GST, Registration, and Basic Returns.",
      level: "Basic to Intermediate",
      duration: "4 Weeks"
    },
    {
      title: "The Advanced Strategist",
      description: "Forensic Audit, GSTR-9/9C, and Scrutiny Response.",
      level: "Intermediate to Advanced",
      duration: "6 Weeks"
    },
    {
      title: "The Litigation Masterclass",
      description: "Drafting appeals and handling departmental inquiries.",
      level: "Expert / Professional",
      duration: "8 Weeks"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {displayCourses.map((course, idx) => (
        <div key={idx} className="group bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
          <div className="text-xs font-black text-brand-blue uppercase tracking-[0.2em] mb-4 bg-blue-50 px-3 py-1 rounded w-fit">
            {course.level}
          </div>
          <h3 className="text-2xl font-bold text-brand-blue mb-4 leading-tight group-hover:text-blue-700">{course.title}</h3>
          <p className="text-brand-grey font-medium mb-8 flex-grow leading-relaxed">
            {course.description}
          </p>
          <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
            <span className="text-xs font-bold text-brand-grey uppercase tracking-widest">{course.duration}</span>
            <button className="text-brand-blue font-black text-xs uppercase tracking-widest hover:underline">
              View Syllabus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
