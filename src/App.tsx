import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { worker } from './mocks/browser';

import Router from './pages/Router';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}
