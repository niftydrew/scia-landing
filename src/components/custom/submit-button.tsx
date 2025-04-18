import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

interface SubmitButtonProps {
  loading?: boolean;
  className?: string;
}

export function SubmitButton({ loading, className }: SubmitButtonProps) {
  return (
    <Button
      type='submit'
      variant='default'
      size='icon'
      disabled={loading}
      className={`bg-foreground hover:bg-foreground/80 text-black rounded-lg ${className}`}
    >
      {loading ? (
        <Loader2 className='h-4 w-4 animate-spin' />
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='w-4 h-4'
        >
          <path d='M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z' />
        </svg>
      )}
    </Button>
  );
}
