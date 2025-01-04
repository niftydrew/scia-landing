'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Logo } from '@/components/ui/logo';
import Link from 'next/link';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';
import { MobileMenu } from '@/components/custom/mobile-menu';
import { navigationItems } from '@/config/navigation';

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
      className='fixed top-0 left-0 right-0 z-50'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%] h-[60px] mt-4 rounded-2xl bg-accent/10 backdrop-blur-lg border border-accent/10'>
        <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-between h-full pl-4 pr-2'>
          {/* Logo */}
          <div className='flex-shrink-0 col-span-1'>
            <Link href='/'>
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
          <div className='hidden md:flex justify-end col-span-1'>
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
