'use client';

import { ApolloProvider } from '@apollo/client';
import createApolloClient from '../../apollo-client';

export function ApolloProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={createApolloClient()}>{children}</ApolloProvider>
  );
}
