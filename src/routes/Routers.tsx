import RedirectComponent from 'components/common/RedirectComponent';
import { addSlashPrefixToString } from 'helpers';
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';
import {
  CatalogPath,
  HomePath,
  InventoryPath,
  loginSuffix,
  notFoundPageSuffix,
  FilmPath,
  WorkShopPath,
} from './routes-conts';

const HomePage = React.lazy(() => import('pages'));
const LoginPage = React.lazy(() => import('pages/Login'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const FilmPage = React.lazy(()=> import('pages/Film'))
const CatalogPage = React.lazy(() => import('pages/Catalog'));
const WorkshopPage = React.lazy(() => import('pages/Workshop'));
const InventoryPage = React.lazy(() => import('pages/Inventory'));

const Routers = () => {
  const routes = [
    {
      element: <PrivateRoute />,
      children: [
        {
          path: HomePath,
          element: <HomePage />,
        },
        {
          path: FilmPath,
          element: <FilmPage />,
        },
        {
          path: CatalogPath,
          element: <CatalogPage />,
        },
        {
          path: WorkShopPath,
          element: <WorkshopPage />,
        },
        {
          path: InventoryPath,
          element: <InventoryPage />,
        },
      ],
    },
    {
      element: <AuthRoute />,
      children: [{ path: addSlashPrefixToString(loginSuffix), element: <LoginPage /> }],
    },
    { path: addSlashPrefixToString(notFoundPageSuffix), element: <NotFoundPage /> },
    {
      path: '*',
      element: <Navigate to={addSlashPrefixToString(notFoundPageSuffix)} />,
    },
  ];
  const elements = useRoutes(routes);
  return elements;
};

export default Routers;
