'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/ui/logo';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';
import { MobileMenu } from '@/components/custom/mobile-menu';
import { navigationItems } from '@/config/navigation';
import Link from 'next/link';
import Image from 'next/image';

export function StickyNavbar() {
  const { scrollY } = useScroll();

  const headerBackgroundOpacity = useTransform(
    scrollY,
    [400, 500],
    ['rgba(165, 180, 252, 0.025)', 'rgba(165, 180, 252, 0.05)']
  );

  const opacity = useTransform(scrollY, [400, 500], [0, 1]);
  const translateY = useTransform(scrollY, [400, 500], [-20, 0]);

  return (
    <motion.nav
      style={{
        opacity,
        y: translateY,
        backgroundColor: headerBackgroundOpacity,
      }}
      className='fixed top-0 left-0 right-0 z-40 border-b border-accent/20 backdrop-blur-lg'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%] h-[60px] flex items-center justify-between px-4 pr-2'>
        {/* Logo */}
        <div className='flex-shrink-0'>
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
        <div className='hidden md:flex items-center justify-center'>
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
        {/* Desktop Waitlist Button */}
        <div className='hidden md:flex items-center gap-4 justify-end col-span-1'>
          <Link href='https://x.com/scia_ai'>
            <Image
              src='/logos/X.svg'
              alt='X Logo'
              width={24}
              height={24}
              className='hover:opacity-80 transition-all'
            />
          </Link>
          <Link
            href='https://t.me/sciaofficial'
            className='mr-2'
          >
            <Image
              src='/logos/telegram.svg'
              alt='Telegram Logo'
              width={24}
              height={24}
              className='hover:opacity-80 transition-all'
            />
          </Link>
          <WaitlistButton />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.nav>
  );
}
