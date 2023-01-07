'use client';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => (
  <div>
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validate={values => {
        const errors: Partial<ContactFormValues> = {};
        if (!values.name) {
          errors.name = 'Please enter a name';
        }
        if (!values.message) {
          errors.message = 'Please enter a message';
        }
        if (!values.email) {
          errors.email = 'Please enter an email';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor="email">Email Address</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" className="form-textarea" />
          <ErrorMessage name="message" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export { ContactForm };
