import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    period: z.string(),
    location: z.string(),
    description: z.array(z.string()),
    technologies: z.array(z.string()),
  }),
});

export const collections = {
  'work': workCollection,
}; 