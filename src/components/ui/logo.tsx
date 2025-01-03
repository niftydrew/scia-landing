import Image from 'next/image'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href='/'>
      <Image
        src='/brand/logo.svg'
        alt='Scia Logo'
        width={70}
        height={36}
        className='h-9 w-auto'
      />
    </Link>
  )
}
