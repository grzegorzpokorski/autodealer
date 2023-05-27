import { z } from "zod";

const envSchema = z
  .object({
    HYGRAPH_URL: z.string().url(),
    INDEX_SITE: z.coerce.boolean(),
    SITE_NAME: z.string(),
    SITE_NAME_FIRST_PART: z.string().min(1),
    SITE_NAME_SECOND_PART: z.string().min(1),
    SITE_DESCRIPTION: z.string().min(1),
    OFFERS_PER_PAGE: z.coerce.number().int().min(1),
  })
  .required();

export const env = envSchema.parse({
  HYGRAPH_URL: process.env.HYGRAPH_URL,
  INDEX_SITE: process.env.INDEX_SITE,
  SITE_NAME: process.env.SITE_NAME,
  SITE_NAME_FIRST_PART: process.env.SITE_NAME_FIRST_PART,
  SITE_NAME_SECOND_PART: process.env.SITE_NAME_SECOND_PART,
  SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
  OFFERS_PER_PAGE: process.env.OFFERS_PER_PAGE,
});
