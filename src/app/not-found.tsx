import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8 p-12 bg-white rounded-3xl shadow-2xl border border-gray-100">
        <div className="relative">
          <h1 className="text-9xl font-black text-gray-100 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-24 h-24 bg-brand-blue rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                <span className="text-4xl text-white font-bold">!</span>
             </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-brand-blue">Route Not Protected</h2>
          <p className="text-gray-500 text-sm">
            The resource you are looking for has been moved or is outside the Kavach perimeter.
          </p>
        </div>

        <div className="pt-4 flex flex-col space-y-3">
          <Link 
            href="/" 
            className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Return to Safe Zone
          </Link>
          <Link 
            href="/services/gst" 
            className="text-brand-blue font-bold text-sm hover:underline"
          >
            Contact GST Department Helpdesk
          </Link>
        </div>
      </div>
    </div>
  );
}
