import React from 'react';
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';

import classes from '../../auth.module.scss';
import { Link } from 'react-router-dom';
import { LoginCredentials } from '../../../../interfaces/auth.interface';

interface Props {
  handleLogin: (LoginCredentials: LoginCredentials) => void;
}

const LoginForm: React.FC<Props> = ({ handleLogin }) => {
  const validationSchema = Yup.object({
    email: Yup.string().required(),
    password: Yup.string().required(),
  });

  const initialValues: LoginCredentials = {
    email: '',
    password: '',
  };

  return (
    <div className={classes.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: LoginCredentials, actions) => {
          console.log(typeof handleLogin);

          handleLogin(values);
        }}
      >
        {({ handleSubmit, touched, isValid, errors }) => (
          <Form className={classes.form} onSubmit={handleSubmit}>
            <h3 className="text-center mb-3">Login</h3>
            <Form.Group controlId="loginEmail">
              <Form.Label>Email address</Form.Label>
              <Field
                type="email"
                name="email"
                as={Form.Control}
                placeholder="Enter email"
                isValid={touched.email && !errors.email}
                isInvalid={!!(touched.email && errors.email)}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Field
                type="password"
                placeholder="Password"
                name="password"
                as={Form.Control}
                isValid={touched.password && !errors.password}
                isInvalid={!!(touched.password && errors.password)}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Link to="/signup" className="d-block mb-3">
              Don't have account? Sign up.
            </Link>

            <Button variant="primary" type="submit" disabled={!isValid}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
