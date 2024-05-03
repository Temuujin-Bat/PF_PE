import { useRoutes } from 'react-router-dom';
import { lazy } from 'react';

import { MainLayout } from '../layouts';

const LazyStores = lazy(() => import('../pages/stores'));

const InitRoutes = () => useRoutes([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/stores',
        element: (
          <LazyStores />
        ),
      },
    ],
  },
]);

export {
  InitRoutes,
};
