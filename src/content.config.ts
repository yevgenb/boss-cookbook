import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),
    status: z.enum(['draft', 'published']).default('published'),
  }),
});

export const collections = { recipes };
