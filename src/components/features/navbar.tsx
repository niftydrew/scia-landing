'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
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

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
