import Image from 'next/image';
import { Tag } from '../ui/tag';
import Spline from '@splinetool/react-spline';

export function Features() {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        <div className='text-center mb-12'>
          <Tag size='lg'>Deploy faster</Tag>
          <h2 className='mt-6 text-4xl font-medium tracking-tight text-pretty text-foreground sm:text-5xl max-w-2xl mx-auto'>
            Everything you need to deploy your app
          </h2>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2 max-w-[1024px] mx-auto relative'>
          <div className='absolute -inset-16 rounded-[3rem] bg-gradient-to-r from-sciaprimary/20 via-sciaprimary/10 to-sciaprimary/20 blur-[48px] -z-10 hidden sm:block' />
          <div className='flex p-px lg:col-span-4'>
            <div className='overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 w-full'></div>
          </div>
          <div className='flex p-px lg:col-span-2'>
            <div className='overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 w-full'></div>
          </div>
          <div className='flex p-px lg:col-span-2'>
            <div className='overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/15 w-full'>
              <Image
                alt=''
                src='/illustrations/feature2.png'
                className='h-80 object-cover object-left'
                width={368}
                height={368}
                quality={100}
              />
            </div>
          </div>
          <div className='flex p-px lg:col-span-4 h-full'>
            <div className='rounded-xl bg-white/10 ring-1 ring-white/15 w-full'>
              <Spline scene='https://prod.spline.design/u752EVMdwPo2y2xm/scene.splinecode' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
