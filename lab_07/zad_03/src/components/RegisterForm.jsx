import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function RegisterForm({ submitRegister }) {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        nationality: '',
        gender: '',
        acceptTerms: false,
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Name is required';
        }
        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address format';
        }
        if (!values.password) {
          errors.password = 'Password is required';
        } else if (values.password.length < 6) {
          errors.password = 'Password requires minimum 6 characters';
        }
        if (!values.nationality) {
          errors.nationality = 'Nationality is required';
        }
        if (!values.gender) {
          errors.gender = 'Gender is required';
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          submitRegister(values);
          setSubmitting(false);
        }, 300);
      }}
    >
      {({ isSubmitting, handleReset }) => (
        <Form className='container'>
          <h2>Register new account</h2>
          <div>
            <Field type='text' name='name' placeholder='Name' />
            <ErrorMessage name='name' component='div' className='error' />
          </div>

          <div>
            <Field type='email' name='email' placeholder='E-mail' />
            <ErrorMessage name='email' component='div' className='error' />
          </div>

          <div>
            <Field type='password' name='password' placeholder='Password' />
            <ErrorMessage name='password' component='div' className='error' />
          </div>

          <div>
            <Field type='text' name='nationality' placeholder='Nationality' />
            <ErrorMessage
              name='nationality'
              component='div'
              className='error'
            />
          </div>

          <div className='gender-choice'>
            <label>
              <Field type='radio' name='gender' value='Male' />
              Male
            </label>
            <label>
              <Field type='radio' name='gender' value='Female' />
              Female
            </label>
          </div>
          <ErrorMessage name='gender' component='div' className='error' />

          <div className='checkbox'>
            <label>
              <Field type='checkbox' name='agreeTerms' />I accept terms &
              conditions
            </label>
          </div>

          <button type='submit' disabled={isSubmitting}>
            Register
          </button>

          <button onClick={handleReset}>Reset</button>
        </Form>
      )}
    </Formik>
  );
}

export default RegisterForm;
