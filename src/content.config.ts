import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['reels', 'shorts', 'podcast', 'social', 'eventos', 'otros']),
    client: z.string(),
    duration: z.string(),
    image: z.string(),
    description: z.string(),
    featured: z.boolean().default(false),
    url: z.string().url().optional(),
    year: z.string().optional(),
    software: z.string().optional(),
  }),
});

export const collections = { videos };
