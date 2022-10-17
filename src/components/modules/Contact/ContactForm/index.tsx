import * as React from 'react';
import cx from 'classnames';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const [state, handleSubmit] = React.useState(process.env.NEXT_PUBLIC_FORM as any);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
        recaptcha: '',
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Full name field is required'),
        email: Yup.string().email('Invalid email').required('Email field is required'),
        message: Yup.string().required('Message field is required'),
      })}
      onSubmit={async ({ name, email, message }, { setSubmitting, resetForm, setFieldError }) => {
        try {
          handleSubmit({
            name,
            email,
            message,
          });

          setTimeout(() => resetForm(), 4000);
        } catch (err) {
          alert('Something went wrong, please try again!');
        } finally {
          if (state.errors) {
            state.errors.forEach((error: any) => {
              setFieldError(error.field || 'email', error.message);
            });
          }
          setSubmitting(false);
        }
      }}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form name="contact-form" action="/success" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="relative mb-4">
            <FastField
              type="text"
              name="name"
              component="input"
              aria-label="name"
              placeholder="Full name*"
              className={cx('input', {
                'input-error': touched.name && errors.name,
              })}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="name" />
          </div>
          <div className="relative mb-4">
            <FastField
              id="email"
              aria-label="email"
              component="input"
              type="email"
              name="email"
              placeholder="Email*"
              className={cx('input', {
                'input-error': touched.email && errors.email,
              })}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="email" />
          </div>
          <div className="relative mb-4">
            <FastField
              component="textarea"
              aria-label="message"
              id="message"
              rows="8"
              type="text"
              name="message"
              placeholder="Message*"
              className={cx('input', {
                'input-error': touched.message && errors.message,
              })}
            />
            <ErrorMessage className="text-red-600 block mt-1" component="span" name="message" />
          </div>
          <div className="text-left">
            <button type="submit" className="button button-secondary" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
