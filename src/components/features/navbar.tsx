'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/ui/logo';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';
import { MobileMenu } from '@/components/custom/mobile-menu';
import { navigationItems } from '@/config/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 60], [1, 0]);
  const translateY = useTransform(scrollY, [0, 60], [0, -20]);

  return (
    <motion.nav
      style={{
        opacity,
        y: translateY,
      }}
      className='fixed top-0 left-0 right-0 z-10'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%] h-[60px] mt-4 rounded-2xl bg-background/60 backdrop-blur-2xl border border-background/10'>
        <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-between h-full pl-4 pr-2'>
          {/* Logo */}
          <div className='flex-shrink-0 col-span-1'>
            <Link
              href='/'
              onClick={(e) => {
                e.preventDefault();
                window.history.replaceState(null, '', '/');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // Wait for scroll to complete before reload
                setTimeout(() => window.location.reload(), 500);
              }}
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center justify-center col-span-2'>
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                isExternal={'isExternal' in item ? item.isExternal : undefined}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Waitlist Button */}
          <div className='hidden md:flex items-center gap-4 justify-end col-span-1'>
            <Link href='/x.com/scia_ai'>
              <Image
                src='/logos/X.svg'
                alt='X Logo'
                width={24}
                height={24}
                className='hover:opacity-80 transition-all'
              />
            </Link>
            <Link href='https://t.me/sciaofficial' className='mr-2'>
              <Image
                src='/logos/telegram.svg'
                alt='Telegram Logo'
                width={24}
                height={24}
                className=' hover:opacity-80 transition-all'
              />
            </Link>
            <WaitlistButton />
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
