import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

export function NavLink({
  href,
  children,
  className,
  isExternal,
}: NavLinkProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateActive = () => {
      if (href.startsWith('#')) {
        setIsActive(window.location.hash === href);
      }
    };

    updateActive();
    window.addEventListener('hashchange', updateActive);
    return () => window.removeEventListener('hashchange', updateActive);
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.location.hash = href;
      }
    }
  };

  const linkClass = `transition-colors px-4 py-2 text-base ${
    isActive ? 'text-foreground' : 'text-foreground/50 hover:text-foreground'
  } ${className}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${linkClass} inline-flex items-center gap-1`}
      >
        {children}
        <ExternalLink className='w-4 h-4' />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={linkClass}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
