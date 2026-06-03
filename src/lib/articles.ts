import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

export function articlePath(article: Article): string {
  const slug = article.id.replace(/\.mdx?$/, '');
  switch (article.data.type) {
    case 'brief':
      return `/briefs/${slug}`;
    case 'research-note':
      return `/research-notes/${slug}`;
    case 'essay':
      return `/essays/${slug}`;
    case 'field-map':
      return `/field-maps/${slug}`;
  }
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function formatShortDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function typeLabel(type: Article['data']['type']): string {
  const labels: Record<Article['data']['type'], string> = {
    brief: 'Brief',
    'research-note': 'Research Note',
    essay: 'Essay',
    'field-map': 'Field Map',
  };
  return labels[type];
}

export function typeLabelUpper(type: Article['data']['type']): string {
  return typeLabel(type).toUpperCase();
}

export function summaryList(summary: string | string[]): string[] {
  return Array.isArray(summary) ? summary : [summary];
}

export async function getArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getByType(type: Article['data']['type']): Promise<Article[]> {
  return (await getArticles()).filter((a) => a.data.type === type);
}

export async function getFeatured(): Promise<Article | undefined> {
  const all = await getArticles();
  return all.find((a) => a.data.featured) ?? all[0];
}

export async function getRelated(slugs: string[]): Promise<Article[]> {
  const all = await getArticles();
  return slugs
    .map((s) => all.find((a) => a.id.replace(/\.mdx?$/, '') === s))
    .filter((a): a is Article => Boolean(a));
}

export function topicSlug(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/\s*&\s*/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
