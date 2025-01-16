import React from 'react';
import { PiGearSixDuotone } from 'react-icons/pi';

interface MaintenanceProps {
  title?: string;
  message?: string;
}

const Maintenance: React.FC<MaintenanceProps> = ({
  title = 'Under Maintenance',
  message = "We're currently working on improving this section to serve you better. Please check back soon for updates.",
}) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-4'>
      <div className='mx-auto max-w-[1024px] w-[95%] sm:w-[90%] flex flex-col items-center justify-center text-center'>
        <div className='flex flex-col items-center'>
          <PiGearSixDuotone className='h-32 w-32 text-accent mb-6' />
          <h1 className='text-3xl font-medium tracking-tight text-accent sm:text-7xl mb-4'>
            {title}
          </h1>
          <p className='text-xl text-accent/60 max-w-2xl'>{message}</p>
        </div>
      </div>
    </main>
  );
};

export default Maintenance;
