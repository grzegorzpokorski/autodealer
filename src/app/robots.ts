import { baseUrl } from "@/lib/constants";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    host: baseUrl,
  };
}
