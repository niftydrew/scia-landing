import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

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
  imageURL: string;
  className?: string;
  delay?: number;
  colSpan?: string;
  metric?: string;
  href: string;
}

const FeatureCard = ({
  title,
  description,
  imageURL,
  className = '',
  delay = 0,
  colSpan,
  metric,
  href,
}: FeatureCardProps) => (
  <motion.div
    variants={cardVariants}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    transition={{ delay }}
    className={`${colSpan} h-[400px]`}
  >
    <div
      className={`flex ${
        colSpan?.includes('col-span-6') ? 'md:flex-row' : 'flex-col'
      } overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/20 shadow-[inset_0_0_30px_rgba(165,180,252,0.1)] ${className} h-full`}
    >
      <div
        className={`${
          colSpan?.includes('col-span-6') ? 'md:w-4/6 hidden md:flex' : 'w-full'
        } h-full flex justify-center items-center relative overflow-hidden bg-accent/5`}
      >
        <Image
          src={imageURL}
          alt={title}
          width={1000}
          height={1000}
          priority
          className='p-12 mix-blend-luminosity'
          quality={100}
          objectFit='contain'
          objectPosition='center'
        />
      </div>
      <div
        className={`${
          colSpan?.includes('col-span-6') ? 'md:w-2/6' : 'w-full'
        } p-6 flex flex-col justify-end h-full`}
      >
        <div className='flex flex-col items-start gap-6'>
          {metric && (
            <p className='text-8xl font-medium tracking-tight text-accent/60'>
              {metric}
              <span className='text-accent/60 text-6xl'>+</span>
            </p>
          )}
          <div>
            <p className='text-lg font-medium tracking-tight text-foreground'>
              {title}
            </p>
            <p className='mt-2 max-w-lg text-sm/6 text-foreground/60'>
              {description}
            </p>
          </div>
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 inline-flex items-center px-3 py-1.5 text-sm border border-accent/20 rounded-full bg-accent/10 font-medium text-foreground/60 hover:bg-accent/20 transition-colors'
          >
            Learn More
            <MoveRight className='w-5 h-5 ml-2' />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const features = [
  {
    title: 'Specialized Agents Network',
    description:
      'AI agents trained on specific facets of trading to work in harmony, delivering precise, well-optimized, and verified trading insights autonomously.',
    imageURL: `/illustrations/agents.png`,
    className:
      'max-lg:rounded-t-[2rem] lg:rounded-tr-[2rem] lg:rounded-tl-[2rem] w-full',
    colSpan: 'sm:col-span-2 lg:col-span-6',
    delay: 0,
    metric: '10',
    href: 'https://scia.gitbook.io/litepaper/ai-agents',
  },
  {
    title: 'Advanced Machine Learning',
    description:
      'Deep learning networks trained on vast market data and real-time performance data.',
    imageURL: `/illustrations/machine.png`,
    className: 'lg:rounded-bl-[2rem]',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.4,
    href: 'https://scia.gitbook.io/litepaper/technical-details#advanced-machine-learning',
  },
  {
    title: 'Real-Time Processing',
    description:
      'Highly performant cloud infrastructure for processing vast amounts of market data in real-time.',
    imageURL: `/illustrations/rtp.png`,
    className: 'md:rounded-bl-[2rem] lg:rounded-bl-lg',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.6,
    href: 'https://scia.gitbook.io/litepaper/technical-details#real-time-processing',
  },
  {
    title: 'Security & Reliability',
    description:
      'Enterprise-grade security, advanced encryption, and 24/7 system monitoring, ensuring the highest level of reliability.',
    imageURL: `/illustrations/security.png`,
    className: 'max-md:rounded-b-[2rem] md:rounded-br-[2rem]',
    colSpan: 'sm:col-span-1 lg:col-span-2',
    delay: 0.8,
    href: 'https://scia.gitbook.io/litepaper/technical-details#security-and-reliability',
  },
];

export function Features() {
  return (
    <section className='relative py-20'>
      <div
        id='features'
        className='py-24 sm:py-32 mt-32'
      >
        <div className='mx-auto max-w-[1024px] relative px-4'>
          <div className='absolute inset-0 rounded-[3rem] bg-gradient-to-r from-sciaprimary/30 via-sciaprimary/20 to-sciaprimary/30 sm:blur-[64px] -z-10 hidden sm:block ' />

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
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
