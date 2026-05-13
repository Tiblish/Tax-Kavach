import { useState, useRef, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const InquiryForm = ({ defaultService = 'GST Audit Readiness', type = 'consultancy', initialMessage = '' }: { defaultService?: string; type?: 'consultancy' | 'training'; initialMessage?: string }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: defaultService, message: initialMessage });
  const prevMessageRef = useRef(initialMessage);
  
  useEffect(() => {
    if (initialMessage && initialMessage !== prevMessageRef.current) {
      prevMessageRef.current = initialMessage;
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }, [initialMessage]);

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "leads"), {
        ...formData,
        createdAt: serverTimestamp(),
        type: type,
        source: type === 'training' ? 'Training Academy' : 'Consultancy Service'
      });
      setStatus('Success! Our team will contact you regarding enrollment/consultation.');
      setFormData({ name: '', email: '', phone: '', service: defaultService, message: '' });
    } catch (error) {
      console.error(error);
      setStatus('Error sending inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "p-4 bg-warm-50 border-2 border-warm-200 rounded-2xl outline-none focus:border-brand-crimson focus:ring-4 focus:ring-brand-crimson/10 font-bold text-warm-800 transition-all duration-300 min-h-[56px] text-sm placeholder:text-warm-400 placeholder:font-medium";

  return (
    <div className="opacity-0 animate-slide-up bg-surface p-8 md:p-14 rounded-[3rem] shadow-elevation-2 border border-border-subtle relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-crimson/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="mb-12 relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 bg-brand-crimson/[0.08] text-brand-crimson text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
          {type === 'training' ? '🎓 Academy Enrollment' : '🛡️ Expert Consultancy'}
        </div>
        <h2 className="text-4xl font-black text-brand-navy tracking-tight font-heading mb-4">
          {type === 'training' ? 'Enroll in the Academy' : 'Request a Compliance Audit'}
        </h2>
        <p className="text-warm-600 font-medium text-body-lg leading-relaxed max-w-2xl">
          {type === 'training' 
            ? 'Master the complexities of modern taxation with hands-on training from departmental veterans.' 
            : 'Get expert representation and litigation-proof strategies from specialists with 10+ years of experience.'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="opacity-0 animate-slide-up stagger-1 space-y-2">
          <label htmlFor="name" className="text-[10px] font-black text-warm-500 uppercase tracking-widest ml-1">Full Name</label>
          <input 
            id="name"
            type="text" placeholder="e.g. Rahul Sharma" required
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={inputClasses + " w-full"}
          />
        </div>
        <div className="opacity-0 animate-slide-up stagger-1 space-y-2">
          <label htmlFor="email" className="text-[10px] font-black text-warm-500 uppercase tracking-widest ml-1">Email Address</label>
          <input 
            id="email"
            type="email" placeholder="you@company.com" required
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={inputClasses + " w-full"}
          />
        </div>
        <div className="opacity-0 animate-slide-up stagger-2 space-y-2">
          <label htmlFor="phone" className="text-[10px] font-black text-warm-500 uppercase tracking-widest ml-1">Phone Number</label>
          <input 
            id="phone"
            type="tel" placeholder="+91 98XXX XXXXX" required
            value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={inputClasses + " w-full"}
          />
        </div>
        
        <div className="opacity-0 animate-slide-up stagger-2 space-y-2">
          <label htmlFor="service" className="text-[10px] font-black text-warm-500 uppercase tracking-widest ml-1">
            {type === 'training' ? 'Select Your Course' : 'Select Service'}
          </label>
          {type === 'training' ? (
            <select 
              id="service"
              value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
              className={inputClasses + " w-full cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%239C9488%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"}
            >
              <option value="Beginner Shield">The Beginner&apos;s Shield</option>
              <option value="Advanced Strategist">The Advanced Strategist</option>
              <option value="Litigation Masterclass">The Litigation Masterclass</option>
            </select>
          ) : (
            <select 
              id="service"
              value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
              className={inputClasses + " w-full cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%239C9488%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_1rem_center] bg-no-repeat"}
            >
              <option>GST Audit Readiness</option>
              <option>Litigation Support</option>
              <option>GST Registration & Returns</option>
              <option>Forensic Reconciliation</option>
              <option>Income Tax Consultation</option>
            </select>
          )}
        </div>

        <div className="opacity-0 animate-slide-up stagger-3 md:col-span-2 space-y-2">
          <label htmlFor="message" className="text-[10px] font-black text-warm-500 uppercase tracking-widest ml-1">
            {type === 'training' ? 'Focus Areas / Questions' : 'Describe Your Situation'}
          </label>
          <textarea 
            id="message"
            placeholder={type === 'training' ? "Any specific areas you'd like to focus on during your training?" : "Describe your situation briefly — our experts will follow up."}
            className={inputClasses + " w-full min-h-[120px] resize-none"}
            rows={4}
            value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
        
        <button 
          disabled={loading}
          className="opacity-0 animate-slide-up stagger-4 md:col-span-2 btn-primary !py-5 !text-base shadow-elevation-2 hover:shadow-elevation-3 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              {type === 'training' ? 'Submit Enrollment Application' : 'Book My Free Health Check'}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          )}
        </button>

        {status && (
          <div className={`opacity-0 animate-slide-up md:col-span-2 text-center font-bold p-6 rounded-2xl text-sm border-2 ${status.includes('Success') ? 'bg-emerald-50 text-emerald-700 border-emerald-100 shadow-sm' : 'bg-red-50 text-red-700 border-red-100 shadow-sm'}`}>
            <span className="flex items-center justify-center gap-3">
              {status.includes('Success') && (
                <span className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 animate-bounce">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
              )}
              {status}
            </span>
          </div>
        )}
      </form>
    </div>
  );
};

export default InquiryForm;
