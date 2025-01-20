'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import { useRef } from 'react';

const sections = [
  {
    tag: 'Our Story',
    title: 'Challenges',
    content:
      'Majority of traders face an overwhelming flood of data from countless sources. The challenge lies in sifting through the noise, managing emotional biases, and streamlining relevant information to make optimal decisions.',
    image: '/illustrations/challenge.png',
  },
  {
    tag: 'Vision',
    title: 'Vision',
    content:
      'We envision a future where AI transforms the trading landscape by empowering traders with clear, actionable insights. Our goal is to bridge the gap between complex market data and strategic decision-making, making successful trading accessible to all.',
    image: '/illustrations/vision.png',
  },
  {
    tag: 'Solution',
    title: 'Solution',
    content:
      'Chat with SCIA AI—an innovative AI-powered trading companion that combines advanced machine learning with emotional intelligence. Our system processes vast market data while understanding and counteracting common behavioral biases in trading.',
    image: '/illustrations/solution.png',
  },
  {
    tag: 'Innovation',
    title: 'Approach',
    content:
      'By leveraging state-of-the-art AI technology, we analyze complex market patterns, sentiment data, and trading behaviors in real-time. This in-depth analysis provides traders with clear, actionable insights for better decision-making.',
    image: '/illustrations/approach.png',
  },
  {
    tag: 'Impact',
    title: 'Impact',
    content:
      'Our mission is to make efficient trading accessible to traders of all levels through AI-powered solution stack. With SCIA AI, we are building the future of trading where technology and human insight combine to create optimal trading outcomes.',
    image: '/illustrations/future.png',
  },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const progress1 = useTransform(
    scrollYProgress,
    [0, 0.05, 0.15, 0.2],
    [1, 1, 1, 0]
  );
  const progress2 = useTransform(
    scrollYProgress,
    [0.15, 0.2, 0.35, 0.4],
    [0, 1, 1, 0]
  );
  const progress3 = useTransform(
    scrollYProgress,
    [0.35, 0.4, 0.55, 0.6],
    [0, 1, 1, 0]
  );
  const progress4 = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.75, 0.8],
    [0, 1, 1, 0]
  );
  const progress5 = useTransform(
    scrollYProgress,
    [0.75, 0.8, 0.95, 1],
    [0, 1, 1, 1]
  );

  const progressArray = [progress1, progress2, progress3, progress4, progress5];

  return (
    <section
      id='about'
      className='relative py-20'
    >
      <div
        ref={containerRef}
        className='relative h-[200vh] sm:h-[300vh]'
      >
        <div className='sticky top-40 sm:top-24 h-[40vh] mb-36 sm:h-[60vh] flex flex-col justify-center items-center'>
          <div className='mx-auto max-w-[1024px] w-full grid grid-cols-1 px-4 sm:px-6'>
            <div className='flex flex-col items-center text-center max-w-2xl mx-auto'>
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  style={{
                    opacity: progressArray[index],
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    width: '100%',
                    pointerEvents: 'none',
                  }}
                >
                  <motion.h2 className='text-base/7 font-normal text-accent tracking-tight'>
                    
                  </motion.h2>
                  <motion.p className='mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl px-4 sm:px-0'>
                    {section.title}
                  </motion.p>
                  <motion.p className='mt-6 text-lg/8 text-foreground/50 max-w-xl mx-auto px-4 sm:px-0'>
                    {section.content}
                  </motion.p>
                  <motion.div
                    style={{
                      opacity: progressArray[index],
                    }}
                    className='relative w-full aspect-[16/9] max-w-2xl mx-auto'
                  >
                    <Image
                      src={section.image}
                      alt={`${section.title} illustration`}
                      fill
                      className='object-contain rounded-2xl'
                      priority
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
