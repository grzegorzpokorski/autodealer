import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    HYGRAPH_URL: z.string().url(),
    OFFERS_PER_PAGE: z.coerce.number().int().min(1).optional().default(6),
    INDEX_SITE: z
      .preprocess((v) => v === "true" || v === "1", z.boolean())
      .optional()
      .default(false),
    OPTIMIZE_IMAGES: z
      .enum(["true", "false"])
      .transform((val) => (val === "true" ? true : false)),
  },
  client: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXT_PUBLIC_SITE_NAME: z.string(),
    NEXT_PUBLIC_SITE_DESCRIPTION: z.string().min(1),
    NEXT_PUBLIC_SITE_NAME_FIRST_PART: z.string().min(1),
    NEXT_PUBLIC_SITE_NAME_SECOND_PART: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    HYGRAPH_URL: process.env.HYGRAPH_URL,
    OFFERS_PER_PAGE: process.env.OFFERS_PER_PAGE,
    INDEX_SITE: process.env.INDEX_SITE,
    OPTIMIZE_IMAGES: process.env.OPTIMIZE_IMAGES,

    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_SITE_NAME_FIRST_PART:
      process.env.NEXT_PUBLIC_SITE_NAME_FIRST_PART,
    NEXT_PUBLIC_SITE_NAME_SECOND_PART:
      process.env.NEXT_PUBLIC_SITE_NAME_SECOND_PART,
    NEXT_PUBLIC_SITE_DESCRIPTION: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  },
});
