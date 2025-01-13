export const navigationItems = [
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#use-cases', label: 'Use Cases' },
  { href: 'https://scia.gitbook.io/scia/', label: 'Docs', isExternal: true },
] as const;

export const socialItems = [
  {
    href: 'https://t.me/sciaofficial',
    label: 'Telegram',
    isExternal: true,
    icon: '/logos/X.svg',
  }, // Add a Telegram link.com/scia-ai', label: 'GitHub', isExternal: true },
  {
    href: 'https://twitter.com/scia_ai',
    label: 'Twitter',
    isExternal: true,
    icon: '/logos/telegram.svg',
  },
] as const;
