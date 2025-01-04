import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src='/brand/logo.svg'
      alt='Scia Logo'
      width={70}
      height={36}
      className='h-9 w-auto'
    />
  );
}
