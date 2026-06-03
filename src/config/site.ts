export const site = {
  name: 'Frontier Manual',
  tagline:
    'A publication on frontier AI, research culture, and the systems behind technical progress.',
  description:
    'Frontier AI, research analysis, and technical news for readers who want depth without hype.',
  url: 'https://frontiermanual.com',
  author: 'Frontier Manual',
  newsletter: {
    home: {
      headline: 'Get the weekly note.',
      subtext:
        'One clear briefing on frontier AI, research, and technology every week or two.',
    },
    article: {
      headline: 'The weekly note.',
      subtext:
        'One thoughtful email on frontier AI research, technical ideas, and the people building it.',
    },
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

/** Masthead dates shown in mockups (per page). */
export const mockupDates = {
  default: 'May 28, 2026',
  fieldMap: 'June 2, 2026',
} as const;
