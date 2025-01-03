import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { NavLink } from './nav-link';
import { WaitlistButton } from './waitlist-button';
import { navigationItems } from '@/config/navigation';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  return (
    <div className={`flex md:hidden relative justify-end ${className}`}>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='default'
            size='icon'
            className='bg-[#7FEC7F] w-10 h-10 text-black focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg hover:bg-[#7FEC7F] active:bg-[#7FEC7F] active:scale-100'
          >
            <Menu className='h-6 w-6' />
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-[70%] bg-[#000803] border-[#7FEC7F]/10 flex flex-col'
        >
          <SheetHeader className='mb-6'>
            <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
            <div className='h-1.5 w-12 rounded-full bg-[#7FEC7F]/20 mx-auto' />
          </SheetHeader>
          <div className='flex-1'>
            <div className='space-y-1'>
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  className='block px-3 py-2 hover:bg-[#7FEC7F]/10 rounded-lg transition-colors'
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className='pt-6 pb-2'>
            <WaitlistButton className='justify-center w-full' />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
