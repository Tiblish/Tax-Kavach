"use client";

import { useState, useEffect } from 'react';

interface NoticeInfo {
  perspective: string;
  docs: string[];
  severity: string;
}

const noticeData: Record<string, NoticeInfo> = {
  "ASMT-10": {
    perspective: "Discrepancy detected between GSTR-1, 3B, and 2B. Departmental algorithms have flagged potential input-output mismatch.",
    docs: ["GSTR-2B Reconciliation Statement", "Invoices for disputed ITC", "Mathematical variance explanation"],
    severity: "Medium - Time Sensitive"
  },
  "SCN for ITC Reversal": {
    perspective: "Supplier default detected. Burden of proof shifted to recipient for proof of actual movement of goods.",
    docs: ["Proof of Payment to Supplier", "E-way Bill & Transport receipts", "Bank Statements showing GST payment"],
    severity: "High - Requires Litigation Support"
  },
  "GSTR-9/9C Discrepancy": {
    perspective: "Annual vs. Monthly filing variance. Suspicion of revenue leakage or incorrect credit carry-forward.",
    docs: ["Audited Financial Statements", "GSTR-9/9C Workpapers", "Reconciliation with Form 26AS"],
    severity: "Moderate - Audit Readiness"
  }
};

const NoticeDecoder = ({ onSelect }: { onSelect: (notice: string) => void }) => {
  const [selected, setSelected] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  useEffect(() => {
    if (isScanning) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsScanning(false);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isScanning]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    if (value) {
      setScanProgress(0);
      setIsScanning(true);
    }
  };

  return (
    <div className="opacity-0 animate-slide-up bg-surface p-8 lg:p-14 rounded-[3.5rem] shadow-elevation-2 border border-border-subtle relative overflow-hidden selection:bg-brand-crimson/10">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #C0392B 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      {/* Scanning Overlay */}
      {isScanning && (
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-brand-crimson to-transparent absolute top-0 animate-scan shadow-[0_0_15px_rgba(192,57,43,0.5)]"></div>
          <div className="w-full h-full bg-brand-crimson/[0.02] backdrop-blur-[1px]"></div>
        </div>
      )}

      <div className="text-center mb-16 relative z-10">
        <div className="inline-flex items-center px-5 py-2 bg-brand-navy text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-full mb-8 gap-3 shadow-lg">
           <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-crimson opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-crimson"></span>
          </span>
          Forensic Lab v2.0 // DECODE_ENGINE
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-brand-navy tracking-tight font-heading mb-4">
          Notice <span className="text-brand-crimson">Decoding Lab</span>
        </h2>
        <p className="text-warm-600 font-bold text-lg max-w-xl mx-auto leading-relaxed opacity-80">
          Upload your departmental logic for forensic analysis and structural defense.
        </p>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="relative group mb-12">
          <div className="absolute -top-3 left-6 px-2 bg-surface text-[9px] font-black text-warm-400 uppercase tracking-[0.2em] z-20">Select Input Source</div>
          <select 
            onChange={handleSelect}
            className="w-full p-6 bg-warm-50 border-2 border-warm-200 rounded-3xl outline-none focus:border-brand-crimson focus:ring-8 focus:ring-brand-crimson/5 font-black text-brand-navy text-xl transition-all cursor-pointer min-h-[72px] appearance-none shadow-sm hover:shadow-elevation-1"
          >
            <option value="">— INITIALIZING_STREAM —</option>
            {Object.keys(noticeData).map(k => <option key={k} value={k}>{k}</option>)}
          </select>
          <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-warm-400 group-hover:text-brand-crimson transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {isScanning && (
          <div className="space-y-8 py-10">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-black text-brand-crimson uppercase tracking-[0.4em] animate-pulse">Decrypting_Departmental_Logic...</span>
              <span className="text-xs font-mono font-black text-brand-crimson">{scanProgress}%</span>
            </div>
            <div className="w-full h-3 bg-warm-200 rounded-full overflow-hidden p-0.5 border border-warm-300">
              <div 
                className="h-full bg-gradient-to-r from-brand-navy via-brand-crimson to-brand-accent rounded-full transition-all duration-300 ease-out"
                style={{ width: `${scanProgress}%` }}
              ></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-warm-100 p-4 rounded-2xl border border-warm-200 flex items-center gap-3">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                 <span className="text-[9px] font-mono font-bold text-warm-500 uppercase tracking-widest">SYS_INTEGRITY: OK</span>
              </div>
              <div className="bg-warm-100 p-4 rounded-2xl border border-warm-200 flex items-center gap-3">
                 <div className="w-2 h-2 bg-brand-crimson rounded-full animate-ping"></div>
                 <span className="text-[9px] font-mono font-bold text-warm-500 uppercase tracking-widest">TRACE_MODE: ON</span>
              </div>
            </div>
          </div>
        )}

        {selected && !isScanning && (
          <div className="space-y-12 animate-slide-up">
             {/* Perspective Card — Tech Shield Aesthetic */}
             <div className="relative group">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-brand-crimson rounded-tl-3xl opacity-20 group-hover:opacity-100 transition-all"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-brand-crimson rounded-br-3xl opacity-20 group-hover:opacity-100 transition-all"></div>
                
                <div className="p-10 lg:p-14 bg-brand-navy rounded-[3rem] text-white shadow-elevation-hero relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full -mr-32 -mt-32"></div>
                   <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-crimson via-brand-accent to-brand-crimson"></div>
                   
                   <h4 className="text-[10px] font-black text-brand-crimson-light uppercase tracking-[0.4em] mb-8 flex items-center">
                      <span className="w-3 h-3 bg-brand-crimson rounded-full mr-4 shadow-[0_0_10px_rgba(192,57,43,1)]"></span>
                      IDENTIFIED_LOGIC_CORE
                   </h4>
                   <p className="text-2xl lg:text-3xl font-black leading-tight font-heading tracking-tight italic text-white/95">
                     &ldquo;{noticeData[selected].perspective}&rdquo;
                   </p>
                </div>
             </div>

             {/* Documents Stack — Data Visualization Feel */}
             <div className="grid lg:grid-cols-12 gap-10">
                <div className="lg:col-span-12">
                   <h4 className="text-[10px] font-black text-warm-400 uppercase tracking-[0.4em] mb-8 ml-2 flex items-center">
                     REQUIRED_EVIDENCE_STACK
                     <span className="ml-4 flex-grow h-px bg-warm-200"></span>
                   </h4>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {noticeData[selected].docs.map((doc: string, i: number) => (
                        <div key={i} className="group flex items-center p-6 bg-surface rounded-2xl border border-border-subtle hover:border-brand-crimson/40 hover:shadow-elevation-1 transition-all duration-300">
                           <div className="w-10 h-10 bg-warm-50 text-brand-navy group-hover:bg-brand-navy group-hover:text-white text-[10px] flex items-center justify-center rounded-xl mr-5 font-black flex-shrink-0 transition-all shadow-sm">
                             0{i+1}
                           </div>
                           <span className="font-bold text-warm-800 text-sm tracking-tight">{doc}</span>
                        </div>
                      ))}
                   </div>
                </div>
             </div>

             {/* Final Response Action */}
             <div className="pt-8 border-t border-warm-100">
                <div className="flex flex-col md:flex-row items-center gap-6">
                   <button 
                     onClick={() => onSelect(selected)}
                     className="btn-primary flex-grow !py-6 !text-base shadow-elevation-2 hover:shadow-elevation-hero group !rounded-2xl"
                   >
                      <span className="flex items-center justify-center gap-3 font-black tracking-tight">
                        DEPLOY EXPERT DEFENSE FOR {selected}
                        <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                   </button>
                   <div className="flex items-center gap-4 px-8 py-5 bg-warm-100 rounded-2xl border border-warm-200">
                      <div className={`w-3 h-3 rounded-full ${noticeData[selected].severity.includes('High') ? 'bg-brand-crimson animate-pulse shadow-[0_0_10px_rgba(192,57,43,0.5)]' : 'bg-amber-500'}`}></div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black text-warm-400 uppercase tracking-widest">Risk_Level</span>
                        <span className={`text-xs font-black uppercase tracking-tight ${noticeData[selected].severity.includes('High') ? 'text-brand-crimson' : 'text-amber-700'}`}>
                          {noticeData[selected].severity.split(' - ')[0]}
                        </span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeDecoder;
