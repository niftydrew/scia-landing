'use client';

import { motion } from 'framer-motion';
import { Tag } from '../ui/tag';

const useCases = [
  {
    title: 'Spot Trading',
    description: 'Maximize profits through real-time market analysis and precise entry/exit points',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
  },
  {
    title: 'Grid Trading',
    description: 'Automate buy and sell orders across multiple price levels for optimal returns',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    title: 'DCA Strategy',
    description: 'Reduce market volatility impact through automated dollar-cost averaging',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  }
];

export function UseCases() {
  return (
    <section
      id='use-cases'
      className='py-20 sm:py-32'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%]'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className='lg:text-center'
        >
          <Tag size='lg'>Use Cases</Tag>
          <h2 className='mt-6 text-4xl font-medium tracking-tight text-foreground sm:text-5xl'>
            Versatile Trading Strategies
          </h2>
          <p className='mt-4 text-lg text-foreground/60'>
            Deploy our AI agents across different trading scenarios for optimal
            performance
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-16 sm:mt-20 lg:mt-24'
        >
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className='flex flex-col p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:bg-white/10 transition-colors'
              >
                <div className='p-3 bg-accent/10 rounded-2xl w-fit'>
                  {useCase.icon}
                </div>
                <h3 className='mt-6 text-lg font-semibold text-foreground'>
                  {useCase.title}
                </h3>
                <p className='mt-2 text-base text-foreground/60'>
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
