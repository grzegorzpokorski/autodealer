import z from "zod";

const envSchema = z
  .object({
    HYGRAPH_URL: z.string().url(),
    INDEX_SITE: z.coerce.boolean(),
    SITE_NAME: z.string(),
    SITE_NAME_FIRST_PART: z.string(),
    SITE_NAME_SECOND_PART: z.string(),
    SITE_DESCRIPTION: z.string(),
    OFFERS_PER_PAGE: z.coerce.number().int(),
  })
  .required();

export const ENV = envSchema.parse(process.env);

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";
