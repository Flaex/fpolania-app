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
        image: z.string().optional(),
        date: z.string(),
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
        behanceUrl: z.string().url(),
        image: z.string().optional(),
    })
});

export const collections = { blog, works };
