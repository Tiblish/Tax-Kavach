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
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-40 pb-20 bg-brand-light border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8 flex items-center gap-4">
             <span className="px-4 py-2 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                {post.category}
             </span>
             <span className="text-brand-grey text-xs font-bold uppercase tracking-widest">
               {post.createdAt?.toDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
             </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-brand-blue leading-[1.1] tracking-tight mb-8">
            {post.title}
          </h1>
          {post.imageUrl && (
            <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl mb-12">
               <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
            </div>
          )}
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="lg:grid lg:grid-cols-12 lg:gap-20">
              
              {/* Post Content */}
              <article className="lg:col-span-8">
                 <div className="prose prose-xl prose-slate max-w-none 
                    prose-headings:text-brand-blue prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight
                    prose-p:text-brand-grey prose-p:font-medium prose-p:leading-relaxed
                    prose-strong:text-brand-blue prose-strong:font-black
                    prose-a:text-brand-blue prose-a:font-bold prose-a:underline
                 ">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                 </div>

                 {/* Bottom Lead Capture */}
                 <div className="mt-24">
                    <InquiryForm defaultService={post.category.includes('GST') ? 'GST Audit Readiness' : 'Income Tax Consultation'} />
                 </div>
              </article>

              {/* Sticky Sidebar */}
              <aside className="lg:col-span-4 mt-16 lg:mt-0">
                 <div className="sticky top-32 space-y-8">
                    
                    {/* CTA Box 1 */}
                    <div className="bg-brand-blue p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -mr-12 -mt-12 rounded-full"></div>
                       <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight">
                         Facing an Audit?
                       </h3>
                       <p className="text-white/70 font-medium mb-8 leading-relaxed">
                         Don&apos;t wait for the notice. Get a preemptive health check from our departmental experts.
                       </p>
                       <Link href="/services/gst" className="block text-center bg-white text-brand-blue py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all">
                         Book Compliance Check
                       </Link>
                    </div>

                    {/* CTA Box 2 */}
                    <div className="bg-slate-100 p-10 rounded-[40px] border border-gray-200">
                       <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase tracking-tight leading-tight">
                         Become a Tax Strategist
                       </h3>
                       <p className="text-brand-grey font-medium mb-8 leading-relaxed">
                         Master the logic behind the law with our expert-led certification courses.
                       </p>
                       <Link href="/training" className="block text-center bg-brand-blue text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-900 transition-all">
                         Explore Academy
                       </Link>
                    </div>

                    {/* Share Box */}
                    <div className="px-10">
                       <p className="text-xs font-black text-brand-grey uppercase tracking-widest mb-4">Share this insight</p>
                       <div className="flex gap-4">
                          {[1,2,3].map(i => (
                            <div key={i} className="w-10 h-10 bg-gray-100 rounded-lg hover:bg-brand-blue hover:text-white transition-colors cursor-pointer flex items-center justify-center">
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
