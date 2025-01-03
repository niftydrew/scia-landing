import Image from 'next/image';

export function Features() {
  return (
    <div className=' py-24 sm:py-32'>
      <div className='mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-base/7 font-normal text-accent tracking-tight'>
          All the features you need
        </h2>
        <p className='mt-2 max-w-lg text-4xl font-normal tracking-tight text-pretty text-foreground sm:text-5xl'>
          Stay ahead of the market with Scia
        </p>
        <div className='mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2'>
          <div className='flex p-px lg:col-span-4'>
            <div className='flex flex-col overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/10 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem] w-full'>
              <video
                autoPlay
                muted
                loop
                playsInline
                className='h-80 w-full object-cover flex-shrink-0'
              >
                <source
                  src='/assets/illustration-02.mp4'
                  type='video/mp4'
                />
              </video>
              <div className='p-10'>
                <h3 className='text-sm/4 font-semibold text-gray-400'>
                  Releases
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-white'>
                  AI Dream Team
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-400'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  gravida justo et nulla efficitur, maximus egestas sem
                  pellentesque.
                </p>
              </div>
            </div>
          </div>
          <div className='flex p-px lg:col-span-2'>
            <div className='overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/10 lg:rounded-tr-[2rem]'>
              <Image
                alt='Integrations illustration'
                src='/assets/bento-02.jpg'
                width={900}
                height={600}
                className='h-80 object-cover'
              />
              <div className='p-10'>
                <h3 className='text-sm/4 font-semibold text-gray-400'>
                  Integrations
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-white'>
                  Comprehensive Analysis
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-400'>
                  Curabitur auctor, ex quis auctor venenatis, eros arcu rhoncus
                  massa.
                </p>
              </div>
            </div>
          </div>
          <div className='flex p-px lg:col-span-2'>
            <div className='overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/10 lg:rounded-bl-[2rem]'>
              <Image
                alt='Integrations illustration'
                src='/'
                width={900}
                height={600}
                className='h-80 object-cover'
              />
              <div className='p-10'>
                <h3 className='text-sm/4 font-semibold text-gray-400'>
                  Security
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-white'>
                  Real-Time Processing
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-400'>
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia.
                </p>
              </div>
            </div>
          </div>

          <div className='flex p-px lg:col-span-2'>
            <div className='overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/10 max-lg:rounded-b-[2rem] '>
              <Image
                alt='Integrations illustration'
                src='/'
                width={900}
                height={600}
                className='h-80 object-cover'
              />
              <div className='p-10'>
                <h3 className='text-sm/4 font-semibold text-gray-400'>
                  Performance
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-white'>
                  Risk Intelligence
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-400'>
                  Sed congue eros non finibus molestie. Vestibulum euismod augue
                  vel commodo vulputate. Maecenas at augue sed elit dictum
                  vulputate.
                </p>
              </div>
            </div>
          </div>
          <div className='flex p-px lg:col-span-2'>
            <div className='overflow-hidden rounded-lg bg-accent/10 ring-1 ring-accent/10 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]'>
              <Image
                alt='Integrations illustration'
                src='/'
                width={900}
                height={600}
                className='h-80 object-cover'
              />
              <div className='p-10'>
                <h3 className='text-sm/4 font-semibold text-gray-400'>
                  Performance
                </h3>
                <p className='mt-2 text-lg font-medium tracking-tight text-white'>
                  Risk Intelligence
                </p>
                <p className='mt-2 max-w-lg text-sm/6 text-gray-400'>
                  Sed congue eros non finibus molestie. Vestibulum euismod augue
                  vel commodo vulputate. Maecenas at augue sed elit dictum
                  vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
