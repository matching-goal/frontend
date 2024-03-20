'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';

import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 3,
          retry: 0,
          refetchOnWindowFocus: false,
          refetchIntervalInBackground: false,
          refetchOnMount: false,
          refetchOnReconnect: false,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
