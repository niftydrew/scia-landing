import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  PiCoinsDuotone,
  PiArchiveDuotone,
  PiReceiptDuotone,
} from 'react-icons/pi';

interface UtilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const UtilityCard = ({ title, description, icon }: UtilityCardProps) => (
  <div className='flex flex-col items-start px-8 pt-16 pb-8 rounded-2xl bg-accent/10 ring-1 ring-accent/10'>
    <div className='absolute inset-0 rounded-[3rem] bg-gradient-to-r from-sciaprimary/30 via-sciaprimary/20 to-sciaprimary/30 sm:blur-[64px] -z-10 hidden sm:block opacity-45' />

    <div className='p-3 rounded-full bg-accent/10'>{icon}</div>
    <h3 className='mt-4 text-lg font-medium'>{title}</h3>
    <p className='mt-2 text-sm text-foreground/60'>{description}</p>
  </div>
);

const TokenSection = () => {
  const utilities = [
    {
      title: 'Passive Earning',
      description:
        'Stake $SCIA to earn a share of 20% revenue from platform fees and subscriptions.',
      icon: <PiCoinsDuotone className='w-6 h-6 text-accent' />,
    },
    {
      title: 'Governance',
      description:
        'Stake $SCIA to make proposals and vote on important decisions related to the development, expansion and growth of SCIA',
      icon: <PiArchiveDuotone className='w-6 h-6 text-accent' />,
    },
    {
      title: 'Subscription',
      description:
        'Pay subscriptions with $SCIA to unlock premium features and exclusive access at a 10% discount.',
      icon: <PiReceiptDuotone className='w-6 h-6 text-accent' />,
    },
  ];

  return (
    <section className='relative pt-10 pb-32 '>
      {/* Gradient Overlay */}

      <div className='container relative mx-auto'>
        <div className='mx-auto max-w-2xl text-center relative z-20 px-4'>
          <h2 className='text-3xl font-medium tracking-tight text-foreground sm:text-5xl'>
            $SCIA Token
          </h2>
          <p className='mt-4 text-lg/8 text-foreground/60'>
            The Scia ecosystem is powered by the $SCIA token, a decentralized
            and community-driven token that serves as the backbone of our
            infrastructure, community, and governance.
          </p>
        </div>

        <div className='flex justify-center items-center overflow-hidden h-[400px]'>
          <div className='relative flex items-center justify-center scale-[0.8] lg:scale-100'>
            {/* Orbits */}
            <motion.div
              className='absolute w-[360px] h-[360px] flex items-center justify-center'
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <Image
                src='/token/orbit-1.svg'
                alt='Orbit 1'
                fill
                className='object-contain'
              />
            </motion.div>

            <motion.div
              className='absolute w-[560px] h-[560px] flex items-center justify-center'
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
              <Image
                src='/token/orbit-2.svg'
                alt='Orbit 2'
                fill
                className='object-contain'
              />
            </motion.div>

            <motion.div
              className='absolute w-[760px] h-[760px] flex items-center justify-center'
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              <Image
                src='/token/orbit-3.svg'
                alt='Orbit 3'
                fill
                className='object-contain'
              />
            </motion.div>

            {/* SCIA Coin */}
            <motion.div
              className='relative mt-16 w-[30rem] h-[30rem] z-40'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src='/token/scia-coin.png'
                alt='SCIA Token'
                fill
                className='object-contain'
                quality={100}
              />
            </motion.div>
          </div>
        </div>

        {/* Utility Cards */}
        <div className='relative z-20 max-w-5xl mx-auto px-4 '>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {utilities.map((utility) => (
              <UtilityCard
                key={utility.title}
                {...utility}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenSection;
