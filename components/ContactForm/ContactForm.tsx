'use client';
import styles from '@components/ContactForm/ContactForm.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  return (
    <div className={styles.form}>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validate={values => {
          const errors: Partial<ContactFormValues> = {};
          if (!values.name) {
            errors.name = 'Please enter a name';
          }
          if (!values.subject) {
            errors.subject = 'Please enter a subject';
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
        onSubmit={async (values, { resetForm, setStatus }) => {
          // If onSubmit is async, Formik automatically sets isSubmitting to false once it resolves
          try {
            const res = await fetch('/api/contact', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            });
            if (!res.ok) {
              throw new Error(`Error sending message: ${res.status}`);
            }
            resetForm({ values: { name: '', email: '', subject: '', message: '' } });
            setStatus({ success: 'Email successfully sent' });
          } catch (error) {
            console.error(error);
            setStatus({ error: 'There was an error sending the message. Please try again later.' });
            throw error;
          }
        }}
      >
        {({ errors, touched, status, isSubmitting }) => (
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" className={`${touched.name && errors.name && styles.error}`} />
            <ErrorMessage name="name" component="div" className={styles.errorMessage} />
            <label htmlFor="email">Email Address</label>
            <Field type="email" name="email" className={`${touched.email && errors.email && styles.error}`} />
            <ErrorMessage name="email" component="div" className={styles.errorMessage} />
            <label htmlFor="subject">Subject</label>
            <Field name="subject" type="text" className={`${touched.subject && errors.subject && styles.error}`} />
            <ErrorMessage name="subject" component="div" className={styles.errorMessage} />
            <label htmlFor="message">Message</label>
            <Field name="message" as="textarea" className={`${touched.message && errors.message && styles.error}`} />
            <ErrorMessage name="message" component="div" className={styles.errorMessage} />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {status?.success && <p className={styles.successStatus}>{status.success}</p>}
            {status?.error && <p className={styles.errorStatus}>{status.error}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ContactForm };
