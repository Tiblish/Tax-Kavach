import Link from 'next/link';

interface EmptyStateProps {
  title: string;
  message: string;
  actionLabel?: string;
  actionHref?: string;
  icon?: string;
}

export const EmptyState = ({ 
  title, 
  message, 
  actionLabel = "Back to Home", 
  actionHref = "/",
  icon = "📂" 
}: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white/50 backdrop-blur-sm rounded-3xl border-2 border-dashed border-gray-200">
      <div className="text-6xl mb-6 grayscale opacity-50">{icon}</div>
      <h3 className="text-xl font-bold text-brand-blue mb-2">{title}</h3>
      <p className="text-gray-500 text-sm max-w-xs mb-8">{message}</p>
      <Link 
        href={actionHref}
        className="px-6 py-3 bg-brand-blue text-white rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-pulse space-y-4">
    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
    <div className="h-8 bg-gray-100 rounded w-3/4"></div>
    <div className="h-20 bg-gray-50 rounded w-full"></div>
    <div className="flex justify-between items-center pt-4">
       <div className="h-4 bg-gray-100 rounded w-1/3"></div>
       <div className="h-8 bg-gray-200 rounded-full w-24"></div>
    </div>
  </div>
);
