export const siteConfig = {
  name: 'Frontier Manual',
  tagline:
    'A publication on frontier AI, research culture, and the systems behind technical progress.',
  description:
    'Essays, briefs, and notes on AI research, compute, evaluation, and the people building the field.',
  heroImage: '/images/brief-hero.jpg',
  url: import.meta.env.SITE_URL ?? 'https://example.com',
  subscribePath: '/subscribe',
  searchPath: '/search',
  rssPath: '/rss.xml',
  contactPath: '/about#contact',
  contactEmail: 'hello@example.com',
  newsletterEmbedUrl: import.meta.env.NEWSLETTER_EMBED_URL ?? '',
  analyticsDomain: import.meta.env.PLAUSIBLE_DOMAIN ?? '',
  topics: [
    'agi',
    'world-models',
    'energy-based-models',
    'evaluation',
    'compute',
    'interpretability',
    'ai-safety',
    'open-source-ai',
    'india-ai',
    'data-efficient-ai',
  ] as const,
} as const;

export type SiteTopicSlug = (typeof siteConfig.topics)[number];

export const site = siteConfig;

export const navItems = [
  { label: 'Briefs', href: '/briefs' },
  { label: 'Research Notes', href: '/research-notes' },
  { label: 'Essays', href: '/essays' },
  { label: 'Field Maps', href: '/field-maps' },
  { label: 'Topics', href: '/topics' },
  { label: 'Start Here', href: '/start-here' },
  { label: 'About', href: '/about' },
] as const;

export const footerColumns = [
  {
    links: [
      { label: 'Briefs', href: '/briefs' },
      { label: 'Research Notes', href: '/research-notes' },
      { label: 'Essays', href: '/essays' },
    ],
  },
  {
    links: [
      { label: 'Field Maps', href: '/field-maps' },
      { label: 'Topics', href: '/topics' },
      { label: 'Start Here', href: '/start-here' },
    ],
  },
  {
    links: [
      { label: 'About', href: '/about' },
      { label: 'Subscribe', href: '/subscribe' },
      { label: 'RSS', href: '/rss.xml' },
      { label: 'Contact', href: '/about#contact' },
    ],
  },
] as const;

export function getAnalyticsScript(domain: string = siteConfig.analyticsDomain): string {
  if (!domain) return '';
  return `<script defer data-domain="${domain}" src="https://plausible.io/js/script.js"></script>`;
}
