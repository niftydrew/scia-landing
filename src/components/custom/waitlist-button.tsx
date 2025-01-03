'use client';

import { Button } from '@/components/ui/button';
import { scrollToWaitlist } from '@/lib/utils/scroll';
import { useEffect } from 'react';

interface WaitlistButtonProps {
  className?: string;
}

export function WaitlistButton({ className }: WaitlistButtonProps) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Only trigger if we're not in an input field
      const isInputField = e.target instanceof HTMLInputElement || 
                          e.target instanceof HTMLTextAreaElement;
      
      if (!isInputField && e.key.toLowerCase() === 'w') {
        e.preventDefault();
        scrollToWaitlist();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <Button
      variant='default'
      className={`bg-[#7FEC7F] hover:bg-[#7FEC7F]/80 text-black font-medium text-base tracking-tight rounded-lg flex items-center gap-1.5 py-1.5 pr-1.5 pl-4 h-[40px] ${className}`}
      onClick={scrollToWaitlist}
    >
      Join waitlist
      <span className='bg-black text-white text-xs rounded-sm w-7 h-7 flex items-center justify-center'>
        W
      </span>
    </Button>
  );
}
