import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { IoIosReturnLeft } from 'react-icons/io';

interface SubmitButtonProps {
  className?: string;
  loading?: boolean;
}

export function SubmitButton({ className, loading }: SubmitButtonProps) {
  return (
    <Button
      type='submit'
      variant='default'
      size='sm'
      disabled={loading}
      className={`bg-[#7FEC7F] hover:bg-[#7FEC7F]/80 text-black font-medium text-base tracking-tight rounded-lg flex items-center gap-1.5 py-1.5 pr-1.5 pl-4 h-[40px] ${className}`}
    >
      <>
        Submit
        <span className='bg-black text-white text-xs rounded-sm w-7 h-7 flex items-center justify-center'>
          {loading ? (
            <Loader2 className='h-4 w-4 animate-spin' />
          ) : (
            <IoIosReturnLeft className='h-4 w-4' />
          )}
        </span>
      </>
    </Button>
  );
}
