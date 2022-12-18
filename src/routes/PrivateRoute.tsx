import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from 'stores/hook';

const PrivateRoute = () => {
  const auth = useAppSelector((state: any) => state.auth.isAuthenticated);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
