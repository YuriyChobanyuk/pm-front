import React, { useCallback } from 'react';
import { Route } from 'react-router';
import LoginForm from './components/login-form/LoginForm';
import { useDispatch } from 'react-redux';
import { loginUserAction, signUpUserAction } from './ducks/actions';
import {
  LoginCredentials,
  SignUpCredentials,
} from '../../interfaces/auth.interface';
import SignUpForm from './components/sign-up-form/SignUpForm';

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = useCallback(
    (loginCredentials: LoginCredentials) => {
      dispatch(loginUserAction(loginCredentials));
    },
    [dispatch]
  );

  const handleSingUp = useCallback(
    (signUpCredentials: SignUpCredentials) => {
      dispatch(signUpUserAction(signUpCredentials));
    },
    [dispatch]
  );
  return (
    <>
      <Route path="/login">
        <LoginForm handleLogin={handleLogin} />
      </Route>
      <Route path="/signup">
        <SignUpForm handleSingUp={handleSingUp} />
      </Route>
    </>
  );
};

export default Auth;
