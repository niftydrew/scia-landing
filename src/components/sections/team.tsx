'use client';

import { Tag } from '../ui/tag';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className='relative min-h-[200vh]'
    >
      <div className='sticky top-0 min-h-screen flex items-center justify-center bg-background overflow-hidden'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <h2 className='text-base font-normal text-accent tracking-tight'>
              Meet The Team
            </h2>
            <p className='mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl'>
              Our AI Dream Team
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto'>
            {/* Left Column - 1/3 width */}
            <div className='h-full flex flex-col justify-center'>
              <div className='space-y-6'>
                <h3 className='text-3xl font-medium'>Emma</h3>
                <Tag>Technical Wizard</Tag>
                <ul className='space-y-4'>
                  <li className='text-foreground/50 flex'>
                    <span className='text-accent mr-2'>◆</span>
                    Market Research Expert
                  </li>
                  <li className='text-foreground/50 flex'>
                    <span className='text-accent mr-2'>◆</span>
                    Pattern Analysis
                  </li>
                  <li className='text-foreground/50 flex'>
                    <span className='text-accent mr-2'>◆</span>
                    Trading Strategy
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - 2/3 width */}
            <div className='lg:col-span-2'>
              <div className='grid grid-cols-3 gap-4'>
                {[
                  '/assets/emma1.png',
                  '/assets/emma1.png',
                  '/assets/emma1.png',
                ].map((src, index) => (
                  <div
                    key={index}
                    className='relative aspect-[3/4] rounded-3xl overflow-hidden group bg-accent/10'
                  >
                    {/* Normal image */}
                    <Image
                      src={src}
                      alt={`AI Team Member ${index + 1}`}
                      fill
                      className='object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out'
                      sizes='(max-width: 768px) 100vw, 33vw'
                      priority={index === 0}
                    />
                    {/* Luminosity image */}
                    <Image
                      src={src}
                      alt={`AI Team Member ${index + 1} Luminosity`}
                      fill
                      className='object-cover opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out mix-blend-luminosity'
                      sizes='(max-width: 768px) 100vw, 33vw'
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
