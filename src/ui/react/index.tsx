import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
} from 'react-router-dom';

import { AppRoutes } from './routes';

const router = createBrowserRouter(AppRoutes as unknown as RouteObject[]);

export default () => {
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement!); // eslint-disable-line @typescript-eslint/no-non-null-assertion
  root.render(
    // <ChakraProvider>
      <RouterProvider router={router} />
    // </ChakraProvider>
  );
};