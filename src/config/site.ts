export const siteConfig = {
  name: 'Frontier Manual',
  tagline: 'Frontier AI, research, and technology — explained with depth and restraint.',
  description:
    'A text-first publication on frontier AI, world models, evaluation, compute, interpretability, safety, and the systems shaping what comes next. For technical readers who want clarity without hype.',
  url: import.meta.env.SITE_URL ?? 'https://example.com',
  subscribePath: '/subscribe',
  searchPath: '/search',
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
  { label: 'Subscribe', href: '/subscribe' },
  { label: 'Search', href: '/search' },
] as const;

export const footerLinks = [
  ...navItems,
  { label: 'RSS', href: '/rss.xml' },
  { label: 'Contact', href: '/about#contact' },
] as const;

export function getAnalyticsScript(domain: string = siteConfig.analyticsDomain): string {
  if (!domain) return '';
  return `<script defer data-domain="${domain}" src="https://plausible.io/js/script.js"></script>`;
}
