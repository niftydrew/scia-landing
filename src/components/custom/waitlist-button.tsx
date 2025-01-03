import { Button } from '@/components/ui/button';

interface WaitlistButtonProps {
  className?: string;
}

export function WaitlistButton({ className }: WaitlistButtonProps) {
  return (
    <Button
      variant='default'
      className={`bg-[#7FEC7F] hover:bg-[#7FEC7F]/80 text-black font-medium text-base tracking-tight rounded-lg flex items-center gap-1.5 py-1.5 pr-1.5 pl-4 h-[40px] ${className}`}
    >
      Join waitlist
      <span className='bg-black text-white text-xs rounded-sm w-7 h-7 flex items-center justify-center'>
        W
      </span>
    </Button>
  );
}
