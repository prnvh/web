export const site = {
  name: 'Frontier Manual',
  tagline:
    'A publication on frontier AI, research culture, and the systems behind technical progress.',
  description:
    'Frontier AI, research analysis, and technical news for readers who want depth without hype.',
  url: 'https://frontiermanual.com',
  author: 'Frontier Manual',
  newsletter: {
    headline: 'Get the weekly note.',
    subtext:
      'One clear briefing on frontier AI, research, and technology every week or two.',
    privacy: 'No spam. Unsubscribe anytime.',
  },
} as const;

export const navLinks = [
  { href: '/briefs', label: 'Briefs' },
  { href: '/research-notes', label: 'Research Notes' },
  { href: '/essays', label: 'Essays' },
  { href: '/field-maps', label: 'Field Maps' },
  { href: '/topics', label: 'Topics' },
  { href: '/start-here', label: 'Start Here' },
  { href: '/about', label: 'About' },
] as const;
