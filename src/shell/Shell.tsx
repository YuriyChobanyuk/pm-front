import React, { FC, ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSelector } from './auth/ducks/selectors';
import TopNavigation from './components/top-nav/TopNavigation';
import { Switch, Redirect, Route } from 'react-router-dom';
import LoginForm from './auth/components/login-form/LoginForm';
import SignUpForm from './auth/components/sign-up-form/SignUpForm';
import Auth from './auth/Auth';

interface Props {
  children: ReactNode;
}

export const Shell: FC<Props> = ({ children }) => {
  // on app init try to get access token from local storage and parse it
  // if success write decoded user to redux store
  const user = useSelector(userDataSelector);
  const dispatch = useDispatch();

  return (
    <div className="h-100">
      <TopNavigation user={user} />
      <Switch>
        <Auth />
        {children}
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};
