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
      className={`bg-foreground hover:bg-foreground/80 text-background font-medium text-base tracking-tight rounded-lg flex items-center gap-1.5 px-4 md:pr-1.5 h-[40px] ${className}`}
      onClick={scrollToWaitlist}
    >
      Join waitlist
      <span className='hidden md:flex bg-background text-foreground text-xs rounded-sm w-7 h-7 items-center justify-center'>
        W
      </span>
    </Button>
  );
}
