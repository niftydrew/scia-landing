import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Tag } from '@/components/ui/tag';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

interface FeatureCardProps {
  title: string;
  description: string;
  tag: string;
  splineScene: string;
  className?: string;
  delay?: number;
  colSpan?: string;
}

const FeatureCard = ({
  title,
  description,
  tag,
  splineScene,
  className = '',
  delay = 0,
  colSpan,
}: FeatureCardProps) => (
  <motion.div
    variants={cardVariants}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ delay }}
    className={colSpan}
  >
    <div
      className={`flex flex-col overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/10 ${className}`}
    >
      <div className='w-full h-64 flex justify-start items-start relative overflow-hidden'>
        <Spline scene={splineScene} />
      </div>
      <div className='p-6'>
        <Tag>{tag}</Tag>
        <p className='mt-2 text-lg font-medium tracking-tight text-foreground'>
          {title}
        </p>
        <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const features = [
  {
    tag: 'Intelligence',
    title: 'AI Dream Team',
    description:
      'Specialized agents like JACK (Data Detective), EMMA (Technical Wizard), and NOAH (Sentiment Sage) working in perfect harmony',
    splineScene: 'https://prod.spline.design/u752EVMdwPo2y2xm/scene.splinecode',
    className: 'max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full',
    colSpan: 'sm:col-span-2 lg:col-span-4',
    delay: 0,
  },
  {
    tag: 'Integrations',
    title: 'Comprehensive Analysis',
    description:
      'Multi-source data integration, pattern recognition, and sentiment analysis.',
    splineScene: 'https://prod.spline.design/tap3U3d34t7wJRKa/scene.splinecode',
    className: 'lg:rounded-tr-[2rem]',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.2,
  },
  {
    tag: 'Performance',
    title: 'Real-Time Processing',
    description:
      'Enterprise-grade infrastructure for lightning-fast market analysis and signals.',
    splineScene: 'https://prod.spline.design/PNrAqUl6CHwR1Bja/scene.splinecode',
    className: 'lg:rounded-bl-[2rem]',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.4,
  },
  {
    tag: 'Growth',
    title: 'Performance Optimization',
    description:
      'Continuous learning from performance data to improve strategy accuracy.',
    splineScene: 'https://prod.spline.design/6TStQo4ksADA-mHF/scene.splinecode',
    className: 'md:rounded-bl-[2rem] lg:rounded-bl-lg',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.6,
  },
  {
    tag: 'Security',
    title: 'Risk Intelligence',
    description:
      'Dedicated risk management through LIAM, the Risk Protector agent.',
    splineScene: 'https://prod.spline.design/TBTl3TYUCjjs0Yjq/scene.splinecode',
    className: 'max-md:rounded-b-[2rem] md:rounded-br-[2rem]',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.8,
  },
];

export function Features() {
  return (
    <div
      id='features'
      className='py-24 sm:py-32 mt-32'
    >
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%]'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
          }}
          className='text-3xl font-medium tracking-tight text-center sm:text-5xl sm:max-w-[600px] mx-auto text-foreground sm:leading-tight'
        >
          Unleash the Power of AI-Driven Trading
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: 'easeOut',
            delay: 0.2,
          }}
          className='mt-6 text-lg text-center text-foreground/60 max-w-[600px] mx-auto'
        >
          Experience the future of crypto trading with our advanced AI agents
          working in harmony to deliver precise, real-time market insights.
        </motion.p>
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6'>
          {features.map((feature) => (
            <FeatureCard
              key={feature.tag}
              {...feature}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
