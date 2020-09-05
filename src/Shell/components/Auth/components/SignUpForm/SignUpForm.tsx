import React, { memo } from 'react';
import * as Yup from 'yup';

import { SignUpCredentials } from '../../../../../interfaces';
import { Formik } from 'formik';
import {
  AuthFormContainer,
  AuthForm,
  BackgroundImage,
  FormButtonSignUpContainer,
} from '../../styles';
import FormInput from '../../../../../common/components/Input';
import { FormLinkButton, SubmitButton } from '../../../../../common/styled/buttons';
import { Link } from 'react-router-dom';
import {
  LOGIN_PATH,
  SIGN_IN_FORM_IMAGE,
  PASSWORD_REG_EXP,
} from '../../../../../common/constants';

interface Props {
  handleSingUp: (signUpCredentials: SignUpCredentials) => void;
}

const SignUpForm: React.FC<Props> = ({ handleSingUp }) => {
  const validationSchema = Yup.object({
    name: Yup.string().trim().min(2).max(50).required(),
    email: Yup.string().trim().max(50).email().required(),
    password: Yup.string()
      .test({
        name: 'password-validation',
        test: (value: any) => PASSWORD_REG_EXP.test(value),
        message: `password should contain at least one Uppercase symbol and one digit`,
        exclusive: true,
      })
      .min(8)
      .max(50)
      .required(),
  });

  const initialValues: SignUpCredentials = {
    email: '',
    password: '',
    name: '',
  };

  return (
    <AuthFormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: SignUpCredentials, actions) => {
          console.log(values);

          return handleSingUp(values);
        }}
      >
        {({
          handleSubmit,
          touched,
          values,
          handleChange,
          handleBlur,
          isValid,
          errors,
        }) => (
          <AuthForm onSubmit={handleSubmit}>
            <h3>Sign Up</h3>

            <FormInput
              type="text"
              name="name"
              placeholder="Enter name"
              isValid={touched.name && !errors.name}
              isTouched={touched.name}
              value={values.name}
              error={errors.name}
              id="sign-up-name"
              onChange={handleChange}
              onBlur={handleBlur}
              margin="2.5rem auto"
            />

            <FormInput
              type="email"
              name="email"
              placeholder="Enter email"
              isValid={touched.email && !errors.email}
              isTouched={touched.email}
              value={values.email}
              error={errors.email}
              id="sign-up-email"
              onChange={handleChange}
              onBlur={handleBlur}
              margin="2.5rem auto"
            />

            <FormInput
              type="password"
              placeholder="Password"
              name="password"
              value={values.password}
              id="sign-up-password"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.password}
              isValid={touched.password && !errors.password}
              isTouched={touched.password}
              margin="2.5rem auto"
            />

            <FormButtonSignUpContainer>
              <FormLinkButton
                to={`/${LOGIN_PATH}`}
                as={Link}
                color="transparent"
                margin="1rem"
              >
                Already have account? Login!
              </FormLinkButton>

              <SubmitButton
                type="submit"
                color="success"
                disabled={!isValid}
                margin="0"
              >
                Submit
              </SubmitButton>
            </FormButtonSignUpContainer>
          </AuthForm>
        )}
      </Formik>
      <BackgroundImage imgUrl={SIGN_IN_FORM_IMAGE} />
    </AuthFormContainer>
  );
};

export default memo(SignUpForm);
