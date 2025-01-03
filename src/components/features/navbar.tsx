'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';
import { motion, useScroll, useTransform } from 'framer-motion';

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
      <div className='mx-auto w-[1024px] h-[60px] mt-4 rounded-2xl bg-[#7FEC7F]/5 backdrop-blur-lg border border-[#7FEC7F]/10'>
        <div className='grid grid-cols-3 items-center justify-between h-full pl-6 pr-2 py-2'>
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
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className='hidden md:flex items-center justify-end'>
            <WaitlistButton />
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-400 hover:text-white'
            >
              <span className='sr-only'>Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              ) : (
                <svg
                  className='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='md:hidden mx-auto w-[1024px] mt-2'>
          <div className='rounded-lg bg-black/90 backdrop-blur-lg border border-white/10 p-4 space-y-3'>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='block text-gray-300 hover:text-white transition-colors'
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant='default'
              className='w-full bg-[#4ADE80] hover:bg-[#22c55e] text-black'
            >
              Join waitlist
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
