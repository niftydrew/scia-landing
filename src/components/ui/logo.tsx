import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src='/brand/scia.png'
      alt='Scia Logo'
      width={300}
      height={60}
      className='h-8 w-auto'
    />
  );
}
