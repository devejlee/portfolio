'use client';
import styles from '@components/ContactForm/ContactForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => (
  <div className={styles.form}>
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
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className={`${touched.name && errors.name && styles.error}`} />
          <ErrorMessage name="name" component="div" className={styles.errorMessage} />
          <label htmlFor="email">Email Address</label>
          <Field type="email" name="email" className={`${touched.email && errors.email && styles.error}`} />
          <ErrorMessage name="email" component="div" className={styles.errorMessage} />
          <label htmlFor="message">Message</label>
          <Field name="message" as="textarea" className={`${touched.message && errors.message && styles.error}`} />
          <ErrorMessage name="message" component="div" className={styles.errorMessage} />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export { ContactForm };
