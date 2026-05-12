"use client";

import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

interface Course {
  id?: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  order?: number;
}

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const q = query(collection(db, "courses"), orderBy("order", "asc"));
        const querySnapshot = await getDocs(q);
        const fetched: Course[] = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Course));
        setCourses(fetched);
      } catch (err) {
        console.error("Error fetching courses:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-3xl p-10 border border-slate-100/80 shadow-elevation-1 space-y-4">
            <div className="h-6 skeleton w-1/3"></div>
            <div className="h-8 skeleton w-2/3"></div>
            <div className="h-16 skeleton w-full"></div>
            <div className="h-px bg-slate-100 my-4"></div>
            <div className="flex justify-between">
              <div className="h-4 skeleton w-1/4"></div>
              <div className="h-4 skeleton w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Fallback static modules if Firestore is empty
  const displayCourses = courses.length > 0 ? courses : [
    {
      title: "The Beginner's Shield",
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {displayCourses.map((course, idx) => (
        <div key={idx} className="group bg-white p-8 lg:p-10 rounded-3xl border border-slate-100/80 shadow-elevation-1 card-interactive flex flex-col">
          <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em] mb-4 bg-brand-blue/5 px-3 py-1.5 rounded-full w-fit">
            {course.level}
          </div>
          <h3 className="text-xl font-bold text-brand-blue mb-3 leading-tight group-hover:text-brand-blue-dark transition-colors">{course.title}</h3>
          <p className="text-brand-grey font-medium mb-8 flex-grow text-body leading-relaxed">
            {course.description}
          </p>
          <div className="pt-5 border-t border-slate-100 flex justify-between items-center">
            <span className="text-xs font-bold text-brand-steel uppercase tracking-widest">{course.duration}</span>
            <button className="text-brand-blue font-bold text-xs uppercase tracking-widest hover:text-brand-blue-dark transition-colors min-h-[44px] min-w-[44px] flex items-center">
              View Syllabus
              <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
