import React, { memo } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { LOGIN_PATH } from '../../../../../common/constants';

interface Props extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<Props> = ({ isAuthenticated, ...rest }) => {
  const location = useLocation();
  return isAuthenticated ? (
    <Route {...rest} />
  ) : (
    <Redirect
      to={{
        pathname: `/${LOGIN_PATH}`,
        state: { from: location },
      }}
    />
  );
};

export default memo(PrivateRoute);
