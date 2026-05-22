import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        lens: z.string(),
        language: z.string(),
        pillar: z.string().optional(),
        originalLanguage: z.string().optional(),
    })
});

const works = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/works' }),
    schema: z.object({
        titleEn: z.string(),
        titleEs: z.string(),
        descriptionEn: z.string(),
        descriptionEs: z.string(),
        categoryEn: z.string(),
        categoryEs: z.string(),
        behanceUrlEn: z.string().url(),
        behanceUrlEs: z.string().url(),
        image: z.string().url().optional(),
        order: z.number(),
        cluster: z.enum(['alpha', 'beta', 'gamma']),
        featured: z.boolean().default(false),
        featuredOrder: z.number().optional(),
        featuredSpan: z.string().optional(),
    })
});

export const collections = { blog, works };
