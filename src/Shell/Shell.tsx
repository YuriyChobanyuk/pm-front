import React, { FC, ReactNode, useEffect } from 'react';
import { connect } from 'react-redux';
import TopNavigation from './components/TopNavigation';
import { Switch, Route } from 'react-router-dom';
import { LoginForm, SignUpForm } from './components/Auth';
import {
  LoginCredentials,
  SignUpCredentials,
} from '../interfaces/auth.interface';
import {
  loginUserAction,
  signUpUserAction,
  refreshUserAction,
  logoutUserAction,
  userDataSelector
} from './components/Auth/ducks';
import { RootState } from '../rootReducer';
import { IUser } from '../interfaces/user.interface';
import localStorageService from '../services/localStorage.service';
import { LOGIN_PATH, SIGN_UP_PATH } from '../common/constants';

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
    <div style={{ height: '100%' }}>
      <TopNavigation user={user} logoutUser={dispatchLogout} />
      <Switch>
        <Route path={`/${LOGIN_PATH}`}>
          <LoginForm handleLogin={dispatchLogin} />
        </Route>
        <Route path={`/${SIGN_UP_PATH}`}>
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
