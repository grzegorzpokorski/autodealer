import type { TypedDocumentString } from "@/generated/graphql";
import { invariant } from "@/utils/invariant";

const endpoint = process.env.HYGRAPH_URL;
invariant(endpoint, "There is no HYGRAPH_URL provided in .env file!");

type GraphQlError = {
  message: string;
};
type GraphQlErrorRespone<T> = { data: T } | { errors: readonly GraphQlError[] };

export async function fetcher<Result, Variables>({
  query,
  variables,
  headers,
  cache = "default",
}: {
  query: TypedDocumentString<Result, Variables>;
  variables: Variables;
  headers?: HeadersInit;
  cache?: RequestCache;
}): Promise<Result> {
  invariant(endpoint, "There is no HYGRAPH_URL provided in .env file!");

  const result = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      query: query.toString(),
      ...(variables && { variables }),
    }),
    cache,
    next: { revalidate: false },
  });

  const body = (await result.json()) as GraphQlErrorRespone<Result>;

  if ("errors" in body) {
    throw body.errors[0];
  }

  return body.data;
}
