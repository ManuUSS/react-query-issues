import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { router } from './router';

//! Remover enable css source maps
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={ client }>
      <RouterProvider router={ router } />
    </QueryClientProvider>
  </React.StrictMode>
)
