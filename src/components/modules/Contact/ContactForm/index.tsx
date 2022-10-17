import * as React from 'react';
import cx from 'classnames';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';

type FormType = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [state, setState] = React.useState(process.env.NEXT_PUBLIC_FORM as string);

  const handleSubmit = () => {};

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
      onSubmit={handleSubmit}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
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
          {/* {values.name && values.email && values.message && process.env.NODE_ENV !== 'development' && (
            <div className="relative mb-4">
              <FastField
                component={Recaptcha}
                sitekey={process.env.NEXT_PUBLIC_PORTFOLIO_RECAPTCHA_KEY}
                name="recaptcha"
                onChange={(value: string) => setFieldValue('recaptcha', value)}
              />
              <ErrorMessage className="text-red-600 block mt-1" component="span" name="recaptcha" />
            </div>
          )}
          {state.succeeded && (
            <div className="relative mb-4">
              <div className="text-center">
                <h4 className="font-normal">Your message has been successfully sent, I will get back to you ASAP!</h4>
              </div>
            </div>
          )} */}
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
