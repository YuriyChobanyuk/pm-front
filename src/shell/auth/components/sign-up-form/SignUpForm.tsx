import React from 'react';
import { Form, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import classes from '../../auth.module.scss';
import { SignUpCredentials } from '../../../../interfaces/auth.interface';
import { Formik, Field } from 'formik';

interface Props {
  handleSingUp: (signUpCredentials: SignUpCredentials) => void;
}

const SignUpForm: React.FC<Props> = ({ handleSingUp }) => {
  const PASSWORD_REG_EXP = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

  const validationSchema = Yup.object({
    name: Yup.string().trim().min(2).max(50).required(),
    email: Yup.string().trim().max(50).email().required(),
    password: Yup.string()
      .test({
        name: 'password-validation',
        test: (value: string) => PASSWORD_REG_EXP.test(value),
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
    <div className={classes.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values: SignUpCredentials, actions) => {
          console.log(values);

          return handleSingUp(values);
        }}
      >
        {({ handleSubmit, touched, isValid, errors }) => (
          <Form className={classes.form} onSubmit={handleSubmit}>
            <h3 className="text-center mb-3">Sign Up</h3>

            <Form.Group controlId="sighUpName">
              <Form.Label>Name</Form.Label>
              <Field
                type="text"
                name="name"
                as={Form.Control}
                placeholder="Enter name"
                isValid={touched.name && !errors.name}
                isInvalid={!!(touched.name && errors.name)}
              />

              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="signUpEmail">
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

            <Form.Group controlId="signUpPassword">
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
              Already have account? Login!
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

export default SignUpForm;
