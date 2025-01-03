'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { WaitlistButton } from '@/components/custom/waitlist-button';
import { NavLink } from '@/components/custom/nav-link';

const navigationItems = [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/docs', label: 'Docs' },
];

export function StickyNavbar() {
  const { scrollY } = useScroll();
  
  const headerBackgroundOpacity = useTransform(
    scrollY,
    [400, 500],
    ['rgba(127, 236, 127, 0.05)', 'rgba(127, 236, 127, 0.05)']
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
      className="fixed top-0 left-0 right-0 z-40 border-b border-[#7FEC7F]/10 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-[1024px] h-[60px] flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/brand/logo-dark.png"
              alt="Scia Logo"
              width={70}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center justify-center">
          {navigationItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Waitlist Button */}
        <div className="hidden md:block">
          <WaitlistButton />
        </div>
      </div>
    </motion.nav>
  );
}
