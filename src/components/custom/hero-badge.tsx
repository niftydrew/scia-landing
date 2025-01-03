interface HeroBadgeProps {
  className?: string;
}

export function HeroBadge({ className }: HeroBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full bg-[#7FEC7F]/5 border border-[#7FEC7F]/10 backdrop-blur-sm px-4 py-2 ${className}`}
    >
      <span className='flex h-2 w-2 rounded-full bg-[#7FEC7F] animate-pulse-scia' />
      <span className='text-sm text-white/60 tracking-tight'>
        Introducing Scia - Now in private beta
      </span>
    </div>
  );
}
