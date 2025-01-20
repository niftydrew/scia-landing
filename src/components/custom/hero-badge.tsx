interface HeroBadgeProps {
  className?: string;
}

export function HeroBadge({ className }: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-background/30 border border-background/10 backdrop-blur-sm px-4 py-2 ${className}`}
    >
      <span className='flex h-2 w-2 rounded-full bg-sciaprimary animate-pulse-scia' />
      <span className='text-sm text-foreground/60 tracking-tight'>
        Introducing SCIA AI - Phase 1 Development
      </span>
    </div>
  );
}
