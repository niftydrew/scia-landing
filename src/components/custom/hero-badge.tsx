interface HeroBadgeProps {
  className?: string;
}

export function HeroBadge({ className }: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-foreground/5 border border-foreground/5 backdrop-blur-sm px-4 py-2 ${className}`}
    >
      <span className='flex h-2 w-2 rounded-full bg-sciaprimary animate-pulse-scia' />
      <span className='text-sm text-foreground/60 tracking-tight'>
        Introducing Scia - Now in alpha
      </span>
    </div>
  );
}
