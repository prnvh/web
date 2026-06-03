export const siteConfig = {
  name: 'Frontier Manual',
  tagline: 'Briefs, notes, and field maps on frontier AI and deep technology.',
  description:
    'A text-first publication: daily briefs on papers and releases, research notes on benchmarks and claims, essays on systems and policy, and field maps for readers entering a new area.',
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
  { label: 'Search', href: '/search' },
] as const;

export const footerLinks = [
  ...navItems,
  { label: 'Subscribe', href: siteConfig.subscribePath },
  { label: 'RSS', href: siteConfig.rssPath },
  { label: 'Contact', href: siteConfig.contactPath },
] as const;

export function getAnalyticsScript(domain: string = siteConfig.analyticsDomain): string {
  if (!domain) return '';
  return `<script defer data-domain="${domain}" src="https://plausible.io/js/script.js"></script>`;
}
