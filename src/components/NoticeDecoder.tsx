"use client";

import { useState } from 'react';

interface NoticeInfo {
  perspective: string;
  docs: string[];
  severity: string;
}

const noticeData: Record<string, NoticeInfo> = {
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
    <div className="bg-white p-8 lg:p-14 rounded-4xl shadow-elevation-2 border border-warm-200/80">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 bg-red-50 text-brand-crimson text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-4 gap-2">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          Emergency Audit Support
        </div>
        <h2 className="text-heading font-black text-brand-navy uppercase tracking-tight">
          Decode Your GST Notice
        </h2>
        <p className="text-warm-600 font-medium mt-2 text-body">Received a letter? Select the notice type to see the departmental logic.</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Select with clear affordance — visible border, large target */}
        <select 
          onChange={handleSelect}
          className="w-full p-4 bg-warm-50 border-2 border-warm-300 rounded-2xl outline-none focus:border-brand-crimson focus:ring-2 focus:ring-brand-crimson/20 font-bold text-brand-navy text-body-lg mb-8 transition-all cursor-pointer min-h-[56px] appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_16px_center] bg-no-repeat pr-12"
        >
          <option value="">— Select Your Notice Type —</option>
          {Object.keys(noticeData).map(k => <option key={k} value={k}>{k}</option>)}
        </select>

        {selected && (
          <div className="space-y-8 animate-fade-in-up">
             {/* Perspective card — warm tinted surface */}
             <div className="p-6 lg:p-8 bg-brand-crimson/[0.03] rounded-3xl border border-brand-crimson/10">
                <h4 className="text-xs font-bold text-brand-crimson uppercase tracking-widest mb-3 flex items-center">
                   <span className="w-2 h-2 bg-brand-crimson rounded-full mr-2"></span>
                   The Departmental Perspective
                </h4>
                <p className="text-brand-navy font-medium text-body-lg leading-relaxed italic">
                  &ldquo;{noticeData[selected].perspective}&rdquo;
                </p>
             </div>

             {/* Documents list with numbered badges */}
             <div>
                <h4 className="text-xs font-bold text-warm-600 uppercase tracking-widest mb-5">
                  Top 3 Documents Required Immediately
                </h4>
                <div className="grid grid-cols-1 gap-3">
                   {noticeData[selected].docs.map((doc: string, i: number) => (
                     <div key={i} className="flex items-center p-4 bg-warm-50 rounded-xl border border-warm-200 hover:border-brand-crimson/30 transition-colors">
                        <span className="w-7 h-7 bg-brand-crimson text-white text-[11px] flex items-center justify-center rounded-lg mr-4 font-bold flex-shrink-0">
                          {i+1}
                        </span>
                        <span className="font-semibold text-warm-700 text-body">{doc}</span>
                     </div>
                   ))}
                </div>
             </div>

             {/* CTA — btn-primary pattern for maximum affordance */}
             <div className="pt-4">
                <button 
                  onClick={() => onSelect(selected)}
                  className="btn-primary w-full !py-5 !text-base"
                >
                   Get Expert Help with this {selected}
                </button>
                <p className="text-center text-[10px] font-bold text-brand-crimson uppercase tracking-widest mt-5">
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
