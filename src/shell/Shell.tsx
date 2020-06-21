import React, { FC, ReactNode, useEffect } from 'react';
import { connect } from 'react-redux';
import { userDataSelector } from './auth/ducks/selectors';
import TopNavigation from './components/top-nav/TopNavigation';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './auth/components/login-form/LoginForm';
import SignUpForm from './auth/components/sign-up-form/SignUpForm';
import {
  LoginCredentials,
  SignUpCredentials,
} from '../interfaces/auth.interface';
import {
  loginUserAction,
  signUpUserAction,
  refreshUserAction,
  logoutUserAction,
} from './auth/ducks/actions';
import { RootState } from '../rootReducer';
import { IUser } from '../interfaces/user.interface';
import localStorageService from '../services/localStorage.service';

interface Props {
  user: IUser | null;
  dispatchLogin: (loginCredentials: LoginCredentials) => void;
  dispatchSignUp: (singUpCredentials: SignUpCredentials) => void;
  dispatchRefresh: () => void;
  dispatchLogout: () => void;
  children: ReactNode;
}

const Shell: FC<Props> = ({
  children,
  user,
  dispatchLogin,
  dispatchSignUp,
  dispatchLogout,
  dispatchRefresh,
}) => {
  // on app init try to get access token from local storage and parse it
  // if success write decoded user to redux store
  useEffect(() => {
    const accessToken = localStorageService.getAccessToken();
    if (!user && accessToken) {
      dispatchRefresh();
    }
  }, [user, dispatchRefresh]);

  return (
    <div style={{ minHeight: '100%' }}>
      <TopNavigation user={user} logoutUser={dispatchLogout} />
      <Switch>
        <Route path="/login">
          <LoginForm handleLogin={dispatchLogin} />
        </Route>
        <Route path="/signup">
          <SignUpForm handleSingUp={dispatchSignUp} />
        </Route>
        {children}
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: userDataSelector(state),
});

const mapDispatchToProps = {
  dispatchLogin: loginUserAction,
  dispatchSignUp: signUpUserAction,
  dispatchRefresh: refreshUserAction,
  dispatchLogout: logoutUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shell);
