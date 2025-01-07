'use client';

import { Tag } from '../ui/tag';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const agents = [
  {
    name: 'Jack',
    title: 'The Data Detective',
    role: 'Chief Intelligence Officer',
    responsibilities: [
      '24/7 Market Data Collection',
      'Anomaly Detection',
      'Data Quality Control',
    ],
    images: ['/assets/jack1.png', '/assets/emma1.png', '/assets/jack1.png'],
  },
  {
    name: 'Emma',
    title: 'The Technical Wizard',
    role: 'Head of Market Research',
    responsibilities: ['Pattern Analysis', 'Trading Signals', 'Trend Tracking'],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Noah',
    title: 'The Sentiment Sage',
    role: 'Chief Insights Strategist',
    responsibilities: [
      'Social Sentiment',
      'News Analysis',
      'Market Psychology',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Sophia',
    title: 'The Quality Guardian',
    role: 'Quality Assurance Manager',
    responsibilities: [
      'Data Validation',
      'System Integrity',
      'Signal Filtering',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Ethan',
    title: 'The Analysis Auditor',
    role: 'Chief Validation Officer',
    responsibilities: [
      'Analysis Verification',
      'Performance Metrics',
      'Output Validation',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Olivia',
    title: 'The Prediction Maven',
    role: 'Head of Predictive Analytics',
    responsibilities: [
      'Price Forecasting',
      'Trend Analysis',
      'Strategy Creation',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Liam',
    title: 'The Risk Protector',
    role: 'Chief Risk Officer',
    responsibilities: [
      'Risk Assessment',
      'Position Sizing',
      'Portfolio Safety',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Ava',
    title: 'The System Orchestrator',
    role: 'Chief Executive Strategist',
    responsibilities: [
      'System Coordination',
      'Performance Tuning',
      'Operation Flow',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Mason',
    title: 'The History Keeper',
    role: 'Performance Tracking Manager',
    responsibilities: [
      'Record Keeping',
      'Accuracy Tracking',
      'Result Analysis',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
  },
  {
    name: 'Zoe',
    title: 'The Communications Expert',
    role: 'Head of External Communications',
    responsibilities: [
      'Signal Delivery',
      'Alert Generation',
      'Insight Sharing',
    ],
    images: ['/assets/emma1.png', '/assets/emma1.png', '/assets/emma1.png'],
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
      className='relative min-h-[1000vh]'
    >
      <div className='sticky top-[-20vh] min-h-screen flex items-center justify-center bg-background '>
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
            <div className='h-full flex flex-col justify-center relative'>
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  className='absolute top-0 left-0 w-full'
                  style={{ opacity: progressArray[index] }}
                >
                  <div className='space-y-6'>
                    <h3 className='text-3xl font-medium'>{agent.name}</h3>
                    <Tag>{agent.role}</Tag>
                    <ul className='space-y-4 mb-8'>
                      {agent.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className='text-foreground/50 flex'
                        >
                          <span className='text-accent mr-2'>◆</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    {/* Progress bar */}
                    <motion.div className='w-32 h-1 bg-accent/20 rounded-full overflow-hidden'>
                      <motion.div
                        className='h-full bg-accent rounded-full'
                        style={{
                          scaleX: scrollYProgress,
                          transformOrigin: 'left',
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - 2/3 width */}
            <div className='lg:col-span-2'>
              <div className='grid grid-cols-3 gap-4 relative'>
                {agents.map((agent, agentIndex) => (
                  <motion.div
                    key={agent.name}
                    className='absolute top-0 left-0 w-full grid grid-cols-3 gap-4'
                    style={{ opacity: progressArray[agentIndex] }}
                  >
                    {agent.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className='relative aspect-[3/4] rounded-3xl overflow-hidden bg-accent/10'
                      >
                        <Image
                          src={image}
                          alt={`${agent.name} - ${agent.title} ${
                            imageIndex + 1
                          }`}
                          fill
                          className='object-cover'
                          sizes='(max-width: 768px) 100vw, 33vw'
                          priority={imageIndex === 0}
                        />
                      </div>
                    ))}
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
