import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artworks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artworks' }),
  schema: z.object({
    title: z.string(),
    technique: z.string(),
    dimensions: z.string(),
    image: z.string(),
    thumbZone: z.enum(['top', 'center', 'bottom']).optional().default('center'),
    year: z.string().optional(),
    order: z.number(),
    exhibition: z.string().optional(),
  }),
});

export const collections = { artworks };
