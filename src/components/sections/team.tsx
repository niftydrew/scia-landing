'use client';

import { Tag } from '../ui/tag';
import Image from 'next/image';

export function Team() {
  return (
    <section className='flex flex-col justify-center items-center py-24 sm:py-32 bg-background'>
      <div className='container px-4 sm:px-6'>
        <div className='text-center'>
          <h2 className='text-base font-normal text-accent tracking-tight'>
            Meet The Team
          </h2>
          <p className='mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl'>
            Our AI Dream Team
          </p>
          <p className='mt-6 text-lg/8 text-foreground/50 max-w-xl mx-auto'>
            Powered by cutting-edge artificial intelligence, our team of
            specialized AI agents works tirelessly to analyze markets and
            provide actionable insights.
          </p>
        </div>

        <div className='max-w-[1024px] mx-auto grid grid-cols-1 lg:grid-cols-3 py-36 px-20'>
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
              <div className='relative aspect-[3/4] rounded-3xl overflow-hidden group bg-accent/10'>
                <Image
                  src='/assets/emma.png'
                  alt='AI Team Member 1'
                  fill
                  className='object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-[mix-blend-mode] duration-700 ease-in-out'
                  sizes='(max-width: 768px) 100vw, 33vw'
                  priority
                />
              </div>
              <div className='relative aspect-[3/4] rounded-3xl overflow-hidden group bg-accent/10'>
                <Image
                  src='/assets/jack.png'
                  alt='AI Team Member 2'
                  fill
                  className='object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-[mix-blend-mode] duration-700 ease-in-out'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              </div>
              <div className='relative aspect-[3/4] rounded-3xl overflow-hidden group bg-accent/10'>
                <Image
                  src='/assets/emma.png'
                  alt='AI Team Member 3'
                  fill
                  className='object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-[mix-blend-mode] duration-700 ease-in-out'
                  sizes='(max-width: 768px) 100vw, 33vw'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
