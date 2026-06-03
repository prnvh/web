export const siteConfig = {
  name: 'Frontier Manual',
  tagline:
    'A publication on frontier AI, research culture, and the systems behind technical progress.',
  description:
    'Essays, briefs, and notes on AI research, compute, evaluation, and the people building the field.',
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

/** Primary nav — one row, short labels */
export const navItems = [
  { label: 'Briefs', href: '/briefs' },
  { label: 'Notes', href: '/research-notes' },
  { label: 'Essays', href: '/essays' },
  { label: 'Maps', href: '/field-maps' },
  { label: 'Topics', href: '/topics' },
  { label: 'Start Here', href: '/start-here' },
  { label: 'About', href: '/about' },
] as const;

/** Footer: each link once */
export const footerLinks = [
  { label: 'Briefs', href: '/briefs' },
  { label: 'Notes', href: '/research-notes' },
  { label: 'Essays', href: '/essays' },
  { label: 'Maps', href: '/field-maps' },
  { label: 'Topics', href: '/topics' },
  { label: 'Start Here', href: '/start-here' },
  { label: 'About', href: '/about' },
  { label: 'Subscribe', href: '/subscribe' },
  { label: 'Search', href: '/search' },
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Contact', href: '/about#contact' },
] as const;

export function getAnalyticsScript(domain: string = siteConfig.analyticsDomain): string {
  if (!domain) return '';
  return `<script defer data-domain="${domain}" src="https://plausible.io/js/script.js"></script>`;
}
