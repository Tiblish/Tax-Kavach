"use client";

import { useState, useRef, useEffect } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const InquiryForm = ({ defaultService = 'GST Audit Readiness', type = 'consultancy', initialMessage = '' }: { defaultService?: string; type?: 'consultancy' | 'training'; initialMessage?: string }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: defaultService, message: initialMessage });
  const prevMessageRef = useRef(initialMessage);
  
  // Sync initialMessage prop without cascading setState in an effect.
  // We compare against a ref to only update when the prop genuinely changes.
  if (initialMessage !== prevMessageRef.current) {
    prevMessageRef.current = initialMessage;
    if (initialMessage) {
      setFormData(prev => ({ ...prev, message: initialMessage }));
    }
  }

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
    } catch (_error) {
      setStatus('Error sending inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = "p-4 bg-brand-light border-2 border-slate-200 rounded-xl outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 font-medium text-slate-800 transition-all duration-200 min-h-[52px] text-body placeholder:text-slate-400";

  return (
    <div className="bg-white p-8 md:p-14 rounded-4xl shadow-elevation-2 border border-slate-100/80">
      <div className="mb-8">
        <div className="inline-flex items-center px-4 py-1.5 bg-brand-blue/5 text-brand-blue text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4">
          {type === 'training' ? '🎓 Academy' : '🛡️ Consultancy'}
        </div>
        <h2 className="text-heading font-black text-brand-blue uppercase tracking-tight">
          {type === 'training' ? 'Enroll in the Academy' : 'Request a Compliance Audit'}
        </h2>
        <p className="text-brand-grey font-medium mt-2 text-body-lg">
          {type === 'training' ? 'Expert-led practical training designed for professionals.' : 'Get expert representation and litigation-proof strategies.'}
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-bold text-brand-grey uppercase tracking-wider">Full Name</label>
          <input 
            id="name"
            type="text" placeholder="e.g. Rahul Sharma" required
            value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
            className={inputClasses}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-bold text-brand-grey uppercase tracking-wider">Email Address</label>
          <input 
            id="email"
            type="email" placeholder="you@company.com" required
            value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
            className={inputClasses}
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-bold text-brand-grey uppercase tracking-wider">Phone Number</label>
          <input 
            id="phone"
            type="tel" placeholder="+91 98XXX XXXXX" required
            value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className={inputClasses}
          />
        </div>
        
        <div className="space-y-1.5">
          <label htmlFor="service" className="text-xs font-bold text-brand-grey uppercase tracking-wider">
            {type === 'training' ? 'Course' : 'Service'}
          </label>
          {type === 'training' ? (
            <select 
              id="service"
              value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
              className={inputClasses + " cursor-pointer"}
            >
              <option value="Beginner Shield">The Beginner&apos;s Shield</option>
              <option value="Advanced Strategist">The Advanced Strategist</option>
              <option value="Litigation Masterclass">The Litigation Masterclass</option>
            </select>
          ) : (
            <select 
              id="service"
              value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
              className={inputClasses + " cursor-pointer"}
            >
              <option>GST Audit Readiness</option>
              <option>Litigation Support</option>
              <option>GST Registration & Returns</option>
              <option>Forensic Reconciliation</option>
              <option>Income Tax Consultation</option>
            </select>
          )}
        </div>

        <div className="md:col-span-2 space-y-1.5">
          <label htmlFor="message" className="text-xs font-bold text-brand-grey uppercase tracking-wider">
            {type === 'training' ? 'Focus Areas' : 'How can we help?'}
          </label>
          <textarea 
            id="message"
            placeholder={type === 'training' ? "Any specific areas you'd like to focus on during your training?" : "Describe your situation briefly — our experts will follow up."}
            className={inputClasses + " md:col-span-2 resize-none"}
            rows={4}
            value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
        
        {/* Submit — full-width btn-primary for maximum affordance */}
        <button 
          disabled={loading}
          className="md:col-span-2 btn-primary !py-5 !text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : type === 'training' ? 'Apply for Enrollment' : 'Book My Free Health Check'}
        </button>
        {status && (
          <div className={`md:col-span-2 text-center font-bold p-4 rounded-xl text-sm ${status.includes('Success') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
            {status}
          </div>
        )}
      </form>
    </div>
  );
};

export default InquiryForm;
