import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { LoginCredentials } from '../../../../../interfaces';
import Input from '../../../../../common/components/Input';
import {
  AuthFormContainer,
  AuthForm,
  FormButtonContainer,
  BackgroundImage,
} from '../../styles';
import { FormLinkButton, SubmitButton } from '../../../../../common/styled/buttons';
import { Link } from 'react-router-dom';
import { SIGN_UP_PATH } from '../../../../../common/constants';

interface Props {
  handleLogin: (LoginCredentials: LoginCredentials) => void;
}

const LoginForm: React.FC<Props> = ({ handleLogin }) => {
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const initialValues: LoginCredentials = {
    email: '',
    password: '',
  };

  return (
    <AuthFormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnChange
        validateOnBlur
        onSubmit={(values: LoginCredentials, actions) => {
          console.log(typeof handleLogin);

          handleLogin(values);
        }}
      >
        {({
          handleSubmit,
          touched,
          isValid,
          values,
          errors,
          handleChange,
          handleBlur,
        }) => {
          console.log({ touched, isValid });
          return (
            <AuthForm onSubmit={handleSubmit}>
              <h3>Login</h3>
              <Input
                type="email"
                name="email"
                placeholder="Enter email"
                isValid={touched.email && !errors.email}
                isTouched={touched.email}
                value={values.email}
                error={errors.email}
                id="login-email"
                onChange={handleChange}
                onBlur={handleBlur}
                margin="2.5rem auto"
              />

              <Input
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                id="login-password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password}
                isValid={touched.password && !errors.password}
                isTouched={touched.password}
                margin="2.5rem auto"
              />

              <FormButtonContainer>
                <FormLinkButton
                  color="transparent"
                  as={Link}
                  to={`/${SIGN_UP_PATH}`}
                  margin="1rem 0"
                >
                  Don't have account? Sign up.
                </FormLinkButton>

                <SubmitButton
                  type="submit"
                  color="secondary"
                  disabled={!isValid}
                >
                  Submit
                </SubmitButton>
              </FormButtonContainer>
            </AuthForm>
          );
        }}
      </Formik>
      <BackgroundImage imgUrl="login-back.jpg" />
    </AuthFormContainer>
  );
};

export default LoginForm;
