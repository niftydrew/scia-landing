'use client';

import { Tag } from '../ui/tag';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AnimatedLines } from '../ui/animated-lines';

const agents = [
  {
    name: 'Jack',
    title: 'The Data Detective',
    role: 'The Data Detective',
    responsibilities: [
      '24/7 Market Data Collection',
      'Anomaly Detection',
      'Data Quality Control',
    ],
    image: '/assets/jack.png',
  },
  {
    name: 'Emma',
    title: 'The Technical Wizard',
    role: 'The Technical Wizard',
    responsibilities: ['Pattern Analysis', 'Trading Signals', 'Trend Tracking'],
    image: '/assets/emma.png',
  },
  {
    name: 'Noah',
    title: 'The Sentiment Sage',
    role: 'The Sentiment Sage',
    responsibilities: [
      'Social Sentiment',
      'News Analysis',
      'Market Psychology',
    ],
    image: '/assets/noah.png',
  },
  {
    name: 'Sophia',
    title: 'The Quality Guardian',
    role: 'The Quality Guardian',
    responsibilities: [
      'Data Validation',
      'System Integrity',
      'Signal Filtering',
    ],
    image: '/assets/sophia.png',
  },
  {
    name: 'Ethan',
    title: 'The Analysis Auditor',
    role: 'The Analysis Auditor',
    responsibilities: [
      'Analysis Verification',
      'Performance Metrics',
      'Output Validation',
    ],
    image: '/assets/ethan.png',
  },
  {
    name: 'Olivia',
    title: 'The Prediction Maven',
    role: 'The Prediction Maven',
    responsibilities: [
      'Price Forecasting',
      'Trend Analysis',
      'Strategy Creation',
    ],
    image: '/assets/oilvia.png',
  },
  {
    name: 'Liam',
    title: 'The Risk Protector',
    role: 'The Risk Protector',
    responsibilities: [
      'Risk Assessment',
      'Position Sizing',
      'Portfolio Safety',
    ],
    image: '/assets/liam.png',
  },
  {
    name: 'Ava',
    title: 'The System Orchestrator',
    role: 'The System Orchestrator',
    responsibilities: [
      'System Coordination',
      'Performance Tuning',
      'Operation Flow',
    ],
    image: '/assets/ava.png',
  },
  {
    name: 'Mason',
    title: 'The History Keeper',
    role: 'The History Keeper',
    responsibilities: [
      'Record Keeping',
      'Accuracy Tracking',
      'Result Analysis',
    ],
    image: '/assets/mason.png',
  },
  {
    name: 'Zoe',
    title: 'The Communications Expert',
    role: 'The Communications Expert',
    responsibilities: [
      'Signal Delivery',
      'Alert Generation',
      'Insight Sharing',
    ],
    image: '/assets/zoe.png',
  },
];

export function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Create progress transforms for all 10 agents with longer visibility and less overlap
  const progress1 = useTransform(
    scrollYProgress,
    [0, 0.02, 0.08, 0.1],
    [1, 1, 1, 0]
  );
  const progress2 = useTransform(
    scrollYProgress,
    [0.1, 0.12, 0.18, 0.2],
    [0, 1, 1, 0]
  );
  const progress3 = useTransform(
    scrollYProgress,
    [0.2, 0.22, 0.28, 0.3],
    [0, 1, 1, 0]
  );
  const progress4 = useTransform(
    scrollYProgress,
    [0.3, 0.32, 0.38, 0.4],
    [0, 1, 1, 0]
  );
  const progress5 = useTransform(
    scrollYProgress,
    [0.4, 0.42, 0.48, 0.5],
    [0, 1, 1, 0]
  );
  const progress6 = useTransform(
    scrollYProgress,
    [0.5, 0.52, 0.58, 0.6],
    [0, 1, 1, 0]
  );
  const progress7 = useTransform(
    scrollYProgress,
    [0.6, 0.62, 0.68, 0.7],
    [0, 1, 1, 0]
  );
  const progress8 = useTransform(
    scrollYProgress,
    [0.7, 0.72, 0.78, 0.8],
    [0, 1, 1, 0]
  );
  const progress9 = useTransform(
    scrollYProgress,
    [0.8, 0.82, 0.88, 0.9],
    [0, 1, 1, 0]
  );
  const progress10 = useTransform(
    scrollYProgress,
    [0.9, 0.92, 0.98, 1],
    [0, 1, 1, 1]
  );

  const progressArray = [
    progress1,
    progress2,
    progress3,
    progress4,
    progress5,
    progress6,
    progress7,
    progress8,
    progress9,
    progress10,
  ];

  return (
    <div
      ref={containerRef}
      className='relative h-[1000vh]'
    >
      <AnimatedLines />
      <div className='sticky top-0 h-[40vh] sm:h-[60vh] mb-[40vh] sm:mb-[20vh] flex items-center justify-center'>
        <div className='w-full max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='text-center mb-12'>
            <Tag size='lg'>Meet The Team</Tag>
            <p className='mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl'>
              Our AI Dream Team
            </p>
          </div>

          <div className='flex flex-col justify-center gap-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto'>
            <div className='w-full max-w-2xl mx-auto'>
              <div className='relative h-full'>
                {agents.map((agent, agentIndex) => (
                  <motion.div
                    key={agent.name}
                    className='absolute top-0 left-0 w-full'
                    style={{ opacity: progressArray[agentIndex] }}
                  >
                    {/* Glow Effect */}
                    <div className='absolute -inset-20 rounded-[3rem] bg-gradient-to-r from-sciaprimary/30 via-sciaprimary/20 to-sciaprimary/30 blur-[64px] -z-10' />
                    
                    <div className='relative aspect-[3/4] sm:aspect-video rounded-2xl overflow-hidden'>
                      <Image
                        src={agent.image}
                        alt={`${agent.name} - ${agent.title}`}
                        fill
                        className='object-cover'
                        quality={90}
                        priority={agentIndex === 0}
                      />
                      {/* Gradient Overlay */}
                      <div className='absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent' />

                      {/* Content Overlay */}
                      <div className='absolute inset-0 flex flex-col justify-end p-6'>
                        <div className='text-left'>
                          <h3 className='text-2xl font-medium text-white'>
                            {agent.name}
                          </h3>
                          <p className='text-accent mt-1'>{agent.role}</p>
                          <div className='mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3'>
                            {agent.responsibilities.map(
                              (responsibility, idx) => (
                                <div
                                  key={idx}
                                  className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-3 h-8 sm:h-10 flex items-center justify-center text-center group hover:bg-white/10 transition-colors'
                                >
                                  <span className='text-foreground/90 text-sm truncate'>
                                    {responsibility}
                                  </span>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
