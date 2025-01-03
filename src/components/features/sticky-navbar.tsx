'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';
import { MobileMenu } from '@/components/custom/mobile-menu';
import { navigationItems } from '@/config/navigation';

export function StickyNavbar() {
  const { scrollY } = useScroll();

  const headerBackgroundOpacity = useTransform(
    scrollY,
    [400, 500],
    ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.9)']
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
      className='fixed top-0 left-0 right-0 z-40 border-b border-foreground/10 backdrop-blur-lg'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%] h-[60px] flex items-center justify-between px-4 pr-2'>
        {/* Logo */}
        <div className='flex-shrink-0'>
          <Link href='/'>
            <Logo />
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

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </motion.nav>
  );
}
