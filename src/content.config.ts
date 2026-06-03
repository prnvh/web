import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const articleTypeEnum = z.enum([
  'brief',
  'research-note',
  'essay',
  'field-map',
]);

export type ArticleType = z.infer<typeof articleTypeEnum>;

const summarySchema = z.union([z.string(), z.array(z.string())]);

const sourceSchema = z.union([
  z.string(),
  z.object({
    title: z.string(),
    url: z.string().url().optional(),
    note: z.string().optional(),
  }),
]);

const paperInfoSchema = z.object({
  paperTitle: z.string(),
  authors: z.union([z.string(), z.array(z.string())]).optional(),
  institution: z.string().optional(),
  year: z.union([z.number(), z.string()]).optional(),
  link: z.string().url().optional(),
  status: z
    .enum(['paper', 'benchmark', 'blog', 'technical-report'])
    .optional(),
});

const orientationSchema = z.object({
  covers: z.string(),
  audience: z.string(),
  readFirst: z.union([z.string(), z.array(z.string())]),
});

const sectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    type: articleTypeEnum,
    author: z.string().optional(),
    tags: z.array(z.string()).default([]),
    topics: z.array(z.string()).default([]),
    summary: summarySchema.optional(),
    readingTime: z.union([z.number(), z.string()]).optional(),
    featured: z.boolean().default(false),
    slug: z.string().optional(),
    related: z.array(z.string()).default([]),
    sources: z.array(sourceSchema).optional(),
    paperInfo: paperInfoSchema.optional(),
    orientation: orientationSchema.optional(),
    sections: z.array(sectionSchema).optional(),
    heroImage: z.string().optional(),
    pullQuote: z
      .object({
        text: z.string(),
        attribution: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = {
  articles,
};
