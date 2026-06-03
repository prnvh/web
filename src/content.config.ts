import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const article = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string(),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  type: z.enum(['brief', 'research-note', 'essay', 'field-map']),
  author: z.string().default('Frontier Manual'),
  tags: z.array(z.string()).default([]),
  topics: z.array(z.string()).default([]),
  summary: z.union([z.string(), z.array(z.string())]),
  readingTime: z.string(),
  featured: z.boolean().default(false),
  slug: z.string().optional(),
  heroImage: z.string().optional(),
  pullQuote: z.string().optional(),
  pullQuoteAttribution: z.string().optional(),
  paper: z
    .object({
      title: z.string(),
      authors: z.string(),
      year: z.string(),
      source: z.string(),
      url: z.string().url().optional(),
    })
    .optional(),
  related: z.array(z.string()).default([]),
  sources: z
    .array(
      z.object({
        label: z.string(),
        title: z.string(),
        meta: z.string().optional(),
        url: z.string().url().optional(),
      }),
    )
    .default([]),
  furtherReading: z
    .array(
      z.object({
        type: z.string(),
        title: z.string(),
        meta: z.string(),
        url: z.string().url().optional(),
      }),
    )
    .default([]),
  mapSections: z
    .array(
      z.object({
        id: z.string(),
        number: z.string(),
        title: z.string(),
        description: z.string(),
        readingTime: z.string(),
      }),
    )
    .default([]),
  orientation: z.string().optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: article,
});

export const collections = { articles };
