import { getCollection, type CollectionEntry } from 'astro:content';
import type { ArticleType } from '../content.config';

export type { ArticleType };
export type ArticleEntry = CollectionEntry<'articles'>;

export type ArticleListItem = {
  slug: string;
  title: string;
  subtitle?: string;
  description?: string;
  date: Date;
  type: ArticleType;
  topics?: string[];
  readingTime?: number | string;
  featured?: boolean;
};

const TYPE_LABELS: Record<ArticleType, string> = {
  brief: 'Brief',
  'research-note': 'Research Note',
  essay: 'Essay',
  'field-map': 'Field Map',
};

export function formatArticleType(type: ArticleType): string {
  return TYPE_LABELS[type];
}

export function toListItem(entry: ArticleEntry): ArticleListItem {
  return {
    slug: getArticleSlug(entry),
    title: entry.data.title,
    subtitle: entry.data.subtitle,
    description: entry.data.description,
    date: entry.data.date,
    type: entry.data.type,
    topics: entry.data.topics,
    readingTime: entry.data.readingTime,
    featured: entry.data.featured,
  };
}

export function getArticleHref(article: ArticleListItem): string {
  return resolveArticlePath(article.slug, article.type);
}

const TYPE_ROUTE_SEGMENT: Record<ArticleType, string> = {
  brief: 'briefs',
  'research-note': 'research-notes',
  essay: 'essays',
  'field-map': 'field-maps',
};

export function getArticleSlug(entry: ArticleEntry): string {
  return entry.data.slug ?? entry.id;
}

export function sortByDate(entries: ArticleEntry[]): ArticleEntry[] {
  return [...entries].sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export async function getArticles(): Promise<ArticleEntry[]> {
  const entries = await getCollection('articles');
  return sortByDate(entries);
}

export async function getByType(type: ArticleType): Promise<ArticleEntry[]> {
  const entries = await getArticles();
  return entries.filter((entry) => entry.data.type === type);
}

export function topicMatchesSlug(topic: string, slug: string): boolean {
  const normalized = slug.toLowerCase();
  const slugified = slugifyTopic(topic);
  return slugified === normalized || slugified.includes(normalized);
}

export async function getByTopic(topicSlug: string): Promise<ArticleEntry[]> {
  const entries = await getArticles();
  return entries.filter((entry) =>
    entry.data.topics.some((t) => topicMatchesSlug(t, topicSlug)),
  );
}

export async function countArticlesByTopic(slug: string): Promise<number> {
  const entries = await getArticles();
  return entries.filter((entry) =>
    entry.data.topics.some((t) => topicMatchesSlug(t, slug)),
  ).length;
}

export async function getFeatured(): Promise<ArticleEntry[]> {
  const entries = await getArticles();
  return entries.filter((entry) => entry.data.featured);
}

export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function getReadingTimeLabel(
  readingTime: number | string | undefined,
): string {
  if (readingTime === undefined || readingTime === '') return '';
  const minutes =
    typeof readingTime === 'number'
      ? readingTime
      : parseInt(String(readingTime).replace(/\D/g, ''), 10);
  if (!minutes || Number.isNaN(minutes)) return String(readingTime);
  return `${minutes} min read`;
}

export function resolveArticlePath(slug: string, type: ArticleType): string {
  const segment = TYPE_ROUTE_SEGMENT[type];
  return `/${segment}/${slug}`;
}

export function getArticlePath(entry: ArticleEntry): string {
  return resolveArticlePath(getArticleSlug(entry), entry.data.type);
}

export function slugifyTopic(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export async function getRelated(
  entry: ArticleEntry,
  limit = 3,
): Promise<ArticleEntry[]> {
  const all = await getArticles();
  const bySlug = new Map(all.map((a) => [getArticleSlug(a), a]));

  const related: ArticleEntry[] = [];
  for (const slug of entry.data.related) {
    const match = bySlug.get(slug);
    if (match && match.id !== entry.id) {
      related.push(match);
    }
    if (related.length >= limit) return related;
  }

  if (related.length < limit && entry.data.topics.length > 0) {
    const topicSet = new Set(entry.data.topics.map((t) => t.toLowerCase()));
    for (const candidate of all) {
      if (candidate.id === entry.id) continue;
      if (related.some((r) => r.id === candidate.id)) continue;
      const sharesTopic = candidate.data.topics.some((t) =>
        topicSet.has(t.toLowerCase()),
      );
      if (sharesTopic) related.push(candidate);
      if (related.length >= limit) break;
    }
  }

  return related;
}
