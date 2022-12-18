import { addSlashPrefixToString } from 'helpers';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface Props {
  defaultChildPath: string;
  path: string;
}

const RedirectComponent = ({ defaultChildPath, path }: Props) => {
  const { pathname } = useLocation();
  return pathname === addSlashPrefixToString(path) ? (
    Navigate({
      to: defaultChildPath,
    })
  ) : (
    <Outlet />
  );
};
export default RedirectComponent;
