import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Features() {
  return (
    <div
      id='features'
      className='py-24 sm:py-32 gradient-dark'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%]'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className='text-base/7 font-normal text-accent tracking-tight'
        >
          All the features you need
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mt-2 max-w-lg text-3xl font-medium tracking-tight text-pretty text-foreground sm:text-4xl'
        >
          Stay ahead of the market with Scia
        </motion.p>
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6'>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='sm:col-span-2 lg:col-span-4'
          >
            <div className='flex flex-col overflow-hidden rounded-lg bg-background ring-1 ring-accent/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full'>
              <div className='w-full h-64 flex justify-start items-start relative'>
                <Spline scene='https://prod.spline.design/u752EVMdwPo2y2xm/scene.splinecode' />
              </div>
              <div className='p-6'>
                <h3 className='text-sm/4 font-semibold text-accent'>
                  Intelligence
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-foreground'>
                  AI Dream Team
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
                  Specialized agents like JACK (Data Detective), EMMA (Technical
                  Wizard), and NOAH (Sentiment Sage) working in perfect harmony
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='sm:col-span-1 lg:col-span-2'
          >
            <div className='flex flex-col overflow-hidden rounded-lg bg-background ring-1 ring-accent/10 lg:rounded-tr-[2rem]'>
              <div className='w-full h-64 flex justify-start items-start relative'>
                <Spline scene='https://prod.spline.design/tap3U3d34t7wJRKa/scene.splinecode' />
              </div>
              <div className='p-6'>
                <h3 className='text-sm/4 font-semibold text-accent'>
                  Integrations
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-foreground'>
                  Comprehensive Analysis
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
                  Multi-source data integration, pattern recognition, and
                  sentiment analysis.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className='sm:col-span-1 lg:col-span-2'
          >
            <div className='flex flex-col overflow-hidden rounded-lg bg-background ring-1 ring-accent/10 lg:rounded-bl-[2rem]'>
              <div className=' w-full h-64 flex justify-start items-start relative'>
                <Spline scene='https://prod.spline.design/PNrAqUl6CHwR1Bja/scene.splinecode' />
              </div>
              <div className='p-6'>
                <h3 className='text-sm/4 font-semibold text-accent'>
                  Performance
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-foreground'>
                  Real-Time Processing
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
                  Enterprise-grade infrastructure for lightning-fast market
                  analysis and signals.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className='sm:col-span-1 lg:col-span-2'
          >
            <div className='overflow-hidden rounded-lg bg-background ring-1 ring-accent/10 md:rounded-bl-[2rem] lg:rounded-bl-lg'>
              <div className=' w-full h-64 flex justify-start items-start relative'>
                <Spline scene='https://prod.spline.design/6TStQo4ksADA-mHF/scene.splinecode' />
              </div>
              <div className='p-6'>
                <h3 className='text-sm/4 font-semibold text-accent'>
                  Growth
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-foreground'>
                  Performance Optimization
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
                  Continuous learning from performance data to improve strategy accuracy.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className='sm:col-span-1 lg:col-span-2'
          >
            <div className='overflow-hidden rounded-lg bg-background ring-1 ring-accent/10 max-md:rounded-b-[2rem] md:rounded-br-[2rem]'>
              <div className=' w-full h-64 flex justify-start items-start relative'>
                <Spline scene='https://prod.spline.design/TBTl3TYUCjjs0Yjq/scene.splinecode' />
              </div>
              <div className='p-6'>
                <h3 className='text-sm/4 font-semibold text-accent'>
                  Security
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-foreground'>
                  Risk Intelligence
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
                  Dedicated risk management through LIAM, the Risk Protector
                  agent.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
