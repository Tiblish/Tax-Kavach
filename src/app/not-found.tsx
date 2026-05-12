import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6 p-10 lg:p-12 bg-white rounded-3xl shadow-elevation-2 border border-slate-100/80">
        <div className="relative">
          <h1 className="text-8xl font-black text-slate-100 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-brand-blue rounded-2xl flex items-center justify-center shadow-elevation-1 transform -rotate-12">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
             </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-brand-blue">Route Not Protected</h2>
          <p className="text-brand-steel text-sm leading-relaxed">
            The resource you are looking for has been moved or is outside the Kavach perimeter.
          </p>
        </div>

        <div className="pt-4 flex flex-col space-y-3">
          <Link 
            href="/" 
            className="btn-primary !w-full justify-center"
          >
            Return to Safe Zone
          </Link>
          <Link 
            href="/services/gst" 
            className="text-brand-blue font-bold text-sm hover:text-brand-blue-dark transition-colors py-2"
          >
            Contact GST Department Helpdesk
          </Link>
        </div>
      </div>
    </div>
  );
}
