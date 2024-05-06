import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

import { MainLayout } from '../layouts';

const LazyHome = lazy(() => import('../pages/home'));

const InitRoutes = () =>
  useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <LazyHome />,
        },
      ],
    },
  ]);

export { InitRoutes };
