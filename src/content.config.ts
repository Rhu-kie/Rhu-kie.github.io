import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    order: z.number(),
    kind: z.string(),
    title: z.string(),
    blurb: z.string(),
    stack: z.string(),
    externalUrl: z.string().url(),
    eyebrow: z.string(),
    meta: z.array(z.object({ k: z.string(), v: z.string() })),
    phases: z.array(z.object({ k: z.string(), title: z.string(), body: z.string() })),
    outcomes: z.array(z.object({ v: z.string(), k: z.string() })),
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writeups" }),
  schema: z.object({
    date: z.string(),
    category: z.string(),
    minutes: z.number(),
    title: z.string(),
    deck: z.string(),
    changes: z.array(z.object({ n: z.string(), title: z.string(), body: z.string() })),
    stats: z.array(z.object({ v: z.string(), k: z.string() })),
    order: z.number(),
  }),
});

export const collections = { work, writeups };
