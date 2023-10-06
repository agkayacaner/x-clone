import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '~/layouts/main';
import Home from '~/pages/home';
import NotFound from '~/pages/not-found';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'explore',
        element: 'keşfet',
      },
      {
        path: 'notifications',
        element: 'bildirimler',
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
