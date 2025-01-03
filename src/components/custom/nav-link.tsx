import Link from 'next/link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`text-white/50 hover:text-white transition-colors px-4 py-2 text-base ${className}`}
    >
      {children}
    </Link>
  );
}
