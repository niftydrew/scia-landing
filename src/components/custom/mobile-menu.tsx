import { Button } from '@/components/ui/button';
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
            className='bg-transparent border-0 shadow-none w-auto h-auto p-2 text-foreground focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg hover:bg-transparent active:bg-transparent'
          >
            <div className="flex flex-col gap-2">
              <div className="w-6 h-0.5 bg-current rounded-full"></div>
              <div className="w-6 h-0.5 bg-current rounded-full"></div>
            </div>
          </Button>
        </SheetTrigger>
        <SheetContent
          side='right'
          className='w-[70%] bg-background border-sciaprimary/10 flex flex-col'
        >
          <SheetHeader className='mb-6'>
            <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
            <div className='h-1.5 w-12 rounded-full bg-sciaprimary/20 mx-auto' />
          </SheetHeader>
          <div className='flex-1'>
            <div className='space-y-1'>
              {navigationItems.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  isExternal={'isExternal' in item ? item.isExternal : undefined}
                  className='block px-3 py-2 hover:bg-sciaprimary/10 rounded-lg transition-colors'
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
