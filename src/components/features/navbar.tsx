'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navigationItems = [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/docs', label: 'Docs' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 60], [1, 0]);
  const translateY = useTransform(scrollY, [0, 60], [0, -20]);

  return (
    <motion.nav
      style={{
        opacity,
        y: translateY,
      }}
      className='fixed top-0 left-0 right-0 z-50'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%] h-[60px] mt-4 rounded-2xl bg-[#7FEC7F]/5 backdrop-blur-lg border border-[#7FEC7F]/10'>
        <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-between h-full pl-4 pr-2'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/'>
              <Image
                src='/brand/logo-dark.png'
                alt='Scia Logo'
                width={70}
                height={36}
                className='h-8 w-auto'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center justify-center'>
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Waitlist Button */}
          <div className='hidden md:flex justify-end'>
            <WaitlistButton />
          </div>

          {/* Mobile menu button */}
          <div className='flex md:hidden relative justify-end'>
            <Button
              variant='default'
              size='icon'
              className='bg-[#7FEC7F] w-10 h-10 text-black focus-visible:ring-0 focus-visible:ring-offset-0 rounded-lg hover:bg-[#7FEC7F] active:bg-[#7FEC7F] active:scale-100'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </Button>

            {/* Mobile menu panel */}
            {isMenuOpen && (
              <div className='absolute top-[calc(100%+1rem)] right-[-0.5rem] w-fit rounded-xl bg-[#000803] backdrop-blur-lg border border-[#7FEC7F]/10 p-2 z-50'>
                <div className='space-y-1'>
                  {navigationItems.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      className='block px-3 py-2 text-sm hover:bg-[#7FEC7F]/10 rounded-lg transition-colors'
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  <div className='pt-1'>
                    <WaitlistButton className='justify-center text-sm ' />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
