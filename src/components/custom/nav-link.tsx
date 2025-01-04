import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
}

// Create a custom event for resetting nav links
const RESET_NAV_EVENT = 'resetNavLinks';

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

    const handleReset = () => {
      if (href.startsWith('#')) {
        setIsActive(false);
      }
    };

    updateActive();
    window.addEventListener('hashchange', updateActive);
    window.addEventListener(RESET_NAV_EVENT, handleReset);

    return () => {
      window.removeEventListener('hashchange', updateActive);
      window.removeEventListener(RESET_NAV_EVENT, handleReset);
    };
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(() => {
          window.location.hash = href;
        }, 500);
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
