import React from 'react';
import {RouteProps} from "react-router";
import { useSelector } from 'react-redux';
import { isAdminSelector } from '../../ducks';
import PrivateRoute from "../PrivateRoute";

const AdminRoute: React.FC<RouteProps> = ({...props}) => {
  const isAdmin = useSelector(isAdminSelector);
  return <PrivateRoute isAuthenticated={isAdmin} {...props} />
}

export default AdminRoute;
