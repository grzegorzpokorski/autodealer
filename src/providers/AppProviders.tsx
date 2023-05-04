"use client";

import type { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

type Props = {
  children: ReactNode;
};

export const AppProviders = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
