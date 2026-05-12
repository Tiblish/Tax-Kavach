"use client";

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface InquiryFormProps {
  defaultService?: string;
  type?: 'consultancy' | 'training';
}

const InquiryForm = ({ defaultService = 'GST Audit Readiness', type = 'consultancy', initialMessage = '' }: { defaultService?: string; type?: 'consultancy' | 'training'; initialMessage?: string }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: defaultService, message: initialMessage });
  
  // Update message if initialMessage changes (e.g. from Notice Decoder)
  useEffect(() => {
    if (initialMessage) {
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
    } catch (err) {
      setStatus('Error sending inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-gray-100">
      <h2 className="text-3xl font-black text-brand-blue mb-2 uppercase tracking-tight">
        {type === 'training' ? 'Enroll in the Academy' : 'Request a Compliance Audit'}
      </h2>
      <p className="text-brand-grey font-medium mb-10">
        {type === 'training' ? 'Expert-led practical training designed for professionals.' : 'Get expert representation and litigation-proof strategies.'}
      </p>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input 
          type="text" placeholder="Full Name" required
          value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue font-medium"
        />
        <input 
          type="email" placeholder="Email Address" required
          value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue font-medium"
        />
        <input 
          type="tel" placeholder="Phone Number" required
          value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})}
          className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue font-medium"
        />
        
        {type === 'training' ? (
          <select 
            value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue font-medium"
          >
            <option value="Beginner Shield">The Beginner’s Shield</option>
            <option value="Advanced Strategist">The Advanced Strategist</option>
            <option value="Litigation Masterclass">The Litigation Masterclass</option>
          </select>
        ) : (
          <select 
            value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
            className="p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue font-medium"
          >
            <option>GST Audit Readiness</option>
            <option>Litigation Support</option>
            <option>GST Registration & Returns</option>
            <option>Forensic Reconciliation</option>
            <option>Income Tax Consultation</option>
          </select>
        )}

        <textarea 
          placeholder={type === 'training' ? "Any specific areas you'd like to focus on during your training?" : "How can our GST experts assist you?"}
          className="md:col-span-2 p-4 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-brand-blue font-medium"
          rows={4}
          value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
        
        <button 
          disabled={loading}
          className="md:col-span-2 bg-brand-blue text-white py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:bg-blue-900 transition-all shadow-xl shadow-blue-100"
        >
          {loading ? 'Processing...' : type === 'training' ? 'Apply for Enrollment' : 'Book My Free Health Check'}
        </button>
        {status && <p className="md:col-span-2 text-center font-bold text-brand-blue mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default InquiryForm;
