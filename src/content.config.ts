import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Reads Markdown written by Pages CMS under src/content/blog/.
// Names match the existing .pages.yml fields used in our experiment.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string().nullish(),
    pubDate: z.coerce.date().optional(),
    author: z.string().nullish(),
    featuredImage: z.string().nullish(),
  }),
});

export const collections = { blog };
