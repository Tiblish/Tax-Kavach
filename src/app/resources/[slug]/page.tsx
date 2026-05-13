"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import Navbar from '@/components/Navbar';
import InquiryForm from '@/components/InquiryForm';
import Link from 'next/link';
import Image from 'next/image';

interface Post {
  title: string;
  category: string;
  content: string;
  imageUrl?: string;
  createdAt?: { toDate: () => Date };
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const q = query(collection(db, "posts"), where("slug", "==", slug), limit(1));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          setPost(querySnapshot.docs[0].data() as Post);
        } else {
          // Fallback to searching by ID if slug not found
          await getDocs(query(collection(db, "posts"), limit(1))); // Just a placeholder for ID logic
          setPost(null);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-black text-brand-blue uppercase tracking-widest italic">Decrypting Insight...</div>;
  
  if (!post) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-light p-4">
      <h1 className="text-4xl font-black text-brand-blue mb-4">Resource Not Found</h1>
      <Link href="/resources" className="text-brand-blue font-bold underline">Return to Knowledge Library</Link>
    </div>
  );

  return (
    <main className="min-h-screen bg-white selection:bg-brand-crimson/10 selection:text-brand-crimson-dark">
      <Navbar />
      
      {/* Blog Header — Elite Deep Surface */}
      <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 bg-warm-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '48px 48px' }}></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="mb-10 flex flex-wrap items-center gap-6 opacity-0 animate-slide-up stagger-1">
             <span className="px-5 py-2 bg-brand-navy text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-lg">
                {post.category}
             </span>
             <span className="text-warm-500 text-[10px] font-black uppercase tracking-[0.3em]">
               {post.createdAt?.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
             </span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-black text-brand-navy leading-[1.05] tracking-tight mb-12 font-heading opacity-0 animate-slide-up stagger-2">
            {post.title}
          </h1>
          {post.imageUrl && (
            <div className="opacity-0 animate-slide-up stagger-3 relative w-full h-[300px] lg:h-[500px] rounded-[3rem] overflow-hidden shadow-elevation-hero border-8 border-white">
               <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 to-transparent"></div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:grid lg:grid-cols-12 lg:gap-24">
              
              {/* Post Content */}
              <article className="lg:col-span-8 opacity-0 animate-slide-up stagger-2">
                 <div className="prose prose-xl prose-slate max-w-none 
                    prose-headings:text-brand-navy prose-headings:font-black prose-headings:font-heading prose-headings:tracking-tight
                    prose-p:text-warm-700 prose-p:font-bold prose-p:leading-relaxed
                    prose-strong:text-brand-navy prose-strong:font-black
                    prose-a:text-brand-crimson prose-a:font-black prose-a:no-underline hover:prose-a:underline transition-all
                 ">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                 </div>

                 {/* Bottom Lead Capture */}
                 <div className="mt-32 pt-24 border-t border-warm-100">
                    <div className="text-center mb-16">
                       <h2 className="text-4xl lg:text-5xl font-black text-brand-navy font-heading tracking-tight mb-4">Secure Your <span className="text-brand-crimson">Compliance</span></h2>
                       <p className="text-warm-600 font-bold">Connect with our departmental experts for a forensic evaluation.</p>
                    </div>
                    <InquiryForm defaultService={post.category.includes('GST') ? 'GST Audit Readiness' : 'Income Tax Consultation'} />
                 </div>
              </article>

              {/* Sticky Sidebar — Elite Premium Cards */}
              <aside className="lg:col-span-4 mt-24 lg:mt-0">
                 <div className="sticky top-32 space-y-10">
                    
                    {/* CTA Box 1 — Departmental Edge */}
                    <div className="bg-brand-navy p-10 lg:p-12 rounded-[3rem] text-white shadow-elevation-hero relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                       <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-crimson to-brand-accent"></div>
                       
                       <h3 className="text-2xl lg:text-3xl font-black mb-6 font-heading tracking-tight leading-tight">
                         Facing an <br /><span className="text-brand-crimson">Audit?</span>
                       </h3>
                       <p className="text-white/60 font-bold mb-10 leading-relaxed text-lg">
                         Preemptively secure your files with our forensic departmental health check.
                       </p>
                       <Link href="/services/gst" className="block text-center bg-brand-crimson text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-crimson-dark transition-all shadow-xl hover:-translate-y-1">
                         Book Compliance Check
                       </Link>
                    </div>

                    {/* CTA Box 2 — Training Academy */}
                    <div className="bg-warm-100 p-10 lg:p-12 rounded-[3rem] border border-warm-200 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-12 h-12 bg-brand-crimson/[0.05] -mr-6 -mt-6 rounded-full"></div>
                       <h3 className="text-2xl lg:text-3xl font-black text-brand-navy mb-6 font-heading tracking-tight leading-tight">
                         Master the <br /><span className="text-brand-crimson">Logic.</span>
                       </h3>
                       <p className="text-warm-500 font-bold mb-10 leading-relaxed text-lg">
                         Master the logic behind the law with our expert-led certification courses.
                       </p>
                       <Link href="/training" className="block text-center bg-brand-navy text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-brand-navy-dark transition-all shadow-lg hover:-translate-y-1">
                         Explore Academy
                       </Link>
                    </div>

                    {/* Share Box — Minimalist */}
                    <div className="px-6 text-center lg:text-left">
                       <p className="text-[10px] font-black text-warm-400 uppercase tracking-[0.4em] mb-6">Share this forensic insight</p>
                       <div className="flex justify-center lg:justify-start gap-5">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-12 h-12 bg-warm-100 text-brand-navy rounded-2xl hover:bg-brand-navy hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1">
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                            </div>
                          ))}
                       </div>
                    </div>

                 </div>
              </aside>

           </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPostPage;
