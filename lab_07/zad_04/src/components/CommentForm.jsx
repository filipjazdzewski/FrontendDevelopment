import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function CommentForm({ handleSubmitComment }) {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        body: '',
      }}
      validate={(values) => {
        const errors = {};

        if (!values.name) {
          errors.name = 'Name is required';
        } else if (values.name.length <= 1) {
          errors.name = 'Name is too short!';
        } else if (values.name.length >= 20) {
          errors.name = 'Name is too long!';
        }

        if (!values.email) {
          errors.email = 'Email is required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address format';
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        setTimeout(() => {
          handleSubmitComment(values);
          resetForm();
        }, 300);
      }}
    >
      {({ handleReset }) => (
        <Form className='container'>
          <h2>Write a Comment</h2>
          <div>
            <Field type='text' name='name' placeholder='Name' />
            <ErrorMessage name='name' component='div' className='error' />
          </div>

          <div>
            <Field type='email' name='email' placeholder='E-mail' />
            <ErrorMessage name='email' component='div' className='error' />
          </div>

          <div>
            <Field as='textarea' type='text' name='body' placeholder='Body' />
            <ErrorMessage name='body' component='div' className='error' />
          </div>

          <button type='submit'>Submit</button>

          <button onClick={handleReset}>Reset</button>
        </Form>
      )}
    </Formik>
  );
}

export default CommentForm;
