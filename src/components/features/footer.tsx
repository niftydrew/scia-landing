'use client';

import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { navigationItems, socialItems } from '@/config/navigation';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-accent/5 backdrop-blur-2xl border-t border-accent/10 mt-20'>
      <div className='mx-auto max-w-[1024px] pt-16 pb-8 px-4'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Logo and Description */}
          <div className='col-span-1 md:col-span-2'>
            <div aria-label="SCIA Logo">
              <Logo />
            </div>
            <p className='mt-4 text-foreground/50 text-sm max-w-[300px]'>
              Stay on top of the market, make informed trading decisions, and
              take your trading to the next level with SCIA AI.
            </p>
          </div>

          {/* Navigation Links */}
          <div className='col-span-1'>
            <h3 className='font-semibold mb-4'>Links</h3>
            <ul className='space-y-2'>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-sm text-foreground/50 hover:text-foreground transition-colors'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className='col-span-1'>
            <h3 className='font-semibold mb-4'>Socials</h3>
            <ul className='space-y-2'>
              {socialItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    target={item.isExternal ? '_blank' : undefined}
                    rel={item.isExternal ? 'noopener noreferrer' : undefined}
                    className='text-sm text-foreground/50 hover:text-foreground transition-colors'
                  >
                    <span className='flex items-center gap-2'>
                      {item.label}
                      <Image
                        src={item.icon}
                        alt='X Logo'
                        width={16}
                        height={16}
                        className='opacity-50 hover:opacity-80 transition-all'
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 pt-8 border-t border-background/10'>
          <p className='text-center text-sm text-foreground/50'>
            {currentYear} SCIA AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;