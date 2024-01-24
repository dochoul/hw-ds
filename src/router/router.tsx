import { createHashRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Buttons from '../pages/Buttons';

const Router = () => {
  const router = createHashRouter([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/buttons',
      element: <Buttons />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
