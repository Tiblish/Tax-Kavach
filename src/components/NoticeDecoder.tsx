"use client";

import { useState } from 'react';

const noticeData: Record<string, any> = {
  "ASMT-10": {
    perspective: "The department has noticed discrepancies between your GSTR-1, 3B, and GSTR-2B. They are giving you an opportunity to explain before issuing a formal demand.",
    docs: ["GSTR-2B Reconciliation Statement", "Invoices for disputed ITC", "Detailed response explaining mathematical differences"],
    severity: "Medium - Time Sensitive"
  },
  "SCN for ITC Reversal": {
    perspective: "A Show Cause Notice usually implies the department believes you've claimed ITC from a non-existent or defaulted supplier. The burden of proof is now on you.",
    docs: ["Proof of Payment to Supplier", "E-way Bill & Transport receipts", "Bank Statements showing GST payment"],
    severity: "High - Requires Litigation Support"
  },
  "GSTR-9/9C Discrepancy": {
    perspective: "Your Annual Return doesn't match the monthly filings. The department suspects revenue leakage or incorrect credit carry-forward.",
    docs: ["Audited Financial Statements", "GSTR-9/9C Workpapers", "Reconciliation of Turnover with Form 26AS"],
    severity: "Moderate - Audit Readiness"
  }
};

const NoticeDecoder = ({ onSelect }: { onSelect: (notice: string) => void }) => {
  const [selected, setSelected] = useState("");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div className="bg-white p-10 lg:p-16 rounded-[50px] shadow-2xl border border-gray-100">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-2 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.2em] rounded mb-4">
          Emergency Audit Support
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-brand-blue uppercase tracking-tight">
          Decode Your GST Notice
        </h2>
        <p className="text-brand-grey font-medium mt-2">Received a letter? Select the notice type to see the departmental logic.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        <select 
          onChange={handleSelect}
          className="w-full p-5 bg-gray-50 border-2 border-gray-100 rounded-2xl outline-none focus:border-brand-blue font-bold text-brand-blue text-lg mb-10 transition-all cursor-pointer"
        >
          <option value="">-- Select Your Notice Type --</option>
          {Object.keys(noticeData).map(k => <option key={k} value={k}>{k}</option>)}
        </select>

        {selected && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="p-8 bg-blue-50 rounded-[30px] border border-blue-100">
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-widest mb-4 flex items-center">
                   <span className="w-2 h-2 bg-brand-blue rounded-full mr-2"></span>
                   The Departmental Perspective
                </h4>
                <p className="text-brand-blue font-semibold text-lg leading-relaxed">
                  "{noticeData[selected].perspective}"
                </p>
             </div>

             <div>
                <h4 className="text-xs font-black text-brand-grey uppercase tracking-widest mb-6">
                  Top 3 Documents Required Immediately
                </h4>
                <div className="grid grid-cols-1 gap-4">
                   {noticeData[selected].docs.map((doc: string, i: number) => (
                     <div key={i} className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                        <span className="w-6 h-6 bg-brand-blue text-white text-[10px] flex items-center justify-center rounded-full mr-4 font-black">
                          {i+1}
                        </span>
                        <span className="font-bold text-brand-grey">{doc}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="pt-6">
                <button 
                  onClick={() => onSelect(selected)}
                  className="w-full bg-brand-blue text-white py-6 rounded-2xl font-black text-lg uppercase tracking-[0.1em] hover:bg-blue-900 transition-all shadow-2xl shadow-blue-100"
                >
                   Get Expert Help with this {selected}
                </button>
                <p className="text-center text-[10px] font-black text-red-500 uppercase tracking-widest mt-6">
                  Severity: {noticeData[selected].severity}
                </p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeDecoder;
