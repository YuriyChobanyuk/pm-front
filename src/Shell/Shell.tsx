import React, { FC, ReactNode, useEffect } from 'react';
import { connect } from 'react-redux';
import TopNavigation from './components/TopNavigation';
import { Switch, Route } from 'react-router-dom';
import { LoginForm, SignUpForm } from './components/Auth';
import { LoginCredentials, SignUpCredentials, IUser } from '../interfaces';
import {
  loginUserAction,
  signUpUserAction,
  refreshUserAction,
  logoutUserAction,
  userDataSelector,
  setUserAction,
  userLoadingSelector,
} from './components/Auth/ducks';
import { RootState } from '../rootReducer';
import localStorageService from '../services/localStorage.service';
import { LOGIN_PATH, SIGN_UP_PATH } from '../common/constants';
import styled from 'styled-components';

interface Props {
  user: IUser | null;
  dispatchLogin: (loginCredentials: LoginCredentials) => void;
  dispatchSignUp: (singUpCredentials: SignUpCredentials) => void;
  dispatchSetUser: (userData: IUser) => void;
  dispatchRefresh: () => void;
  dispatchLogout: () => void;
  children: ReactNode;
  userIsLoading: boolean;
}

const Shell: FC<Props> = ({
  children,
  user,
  dispatchLogin,
  dispatchSignUp,
  dispatchLogout,
  dispatchRefresh,
  dispatchSetUser,
  userIsLoading,
}) => {
  // on app init try to get access token from local storage and parse it
  // if success write decoded user to redux store
  useEffect(() => {
    const tokenPayload = localStorageService.getTokenPayload();
    if (tokenPayload && !user) {
      const { name, role, userId } = tokenPayload;
      dispatchSetUser({ name, role, id: userId });
    }
  }, [user, dispatchRefresh, dispatchSetUser]);

  // TODO change to better loader
  if (!user || userIsLoading) {
    return <div>loading</div>;
  }

  const AppContainer = styled.div`
    min-height: 100%;
  `;

  return (
    <AppContainer>
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
    </AppContainer>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: userDataSelector(state),
  userIsLoading: userLoadingSelector(state),
});

const mapDispatchToProps = {
  dispatchLogin: loginUserAction,
  dispatchSignUp: signUpUserAction,
  dispatchRefresh: refreshUserAction,
  dispatchLogout: logoutUserAction,
  dispatchSetUser: setUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shell);
