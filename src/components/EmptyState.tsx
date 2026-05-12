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
    <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-3xl border-2 border-dashed border-warm-300 shadow-elevation-1">
      <div className="text-5xl mb-5 grayscale opacity-40">{icon}</div>
      <h3 className="text-xl font-bold text-brand-navy mb-2">{title}</h3>
      <p className="text-warm-500 text-sm max-w-xs mb-8 leading-relaxed">{message}</p>
      <Link 
        href={actionHref}
        className="btn-primary !text-sm"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export const CardSkeleton = () => (
  <div className="bg-white rounded-3xl p-6 shadow-elevation-1 border border-warm-200/80 space-y-4">
    <div className="h-4 skeleton w-1/4"></div>
    <div className="h-8 skeleton w-3/4"></div>
    <div className="h-20 skeleton w-full"></div>
    <div className="flex justify-between items-center pt-4">
       <div className="h-4 skeleton w-1/3"></div>
       <div className="h-8 skeleton rounded-full w-24"></div>
    </div>
  </div>
);
