import * as React from 'react';
import { usePostFormData, FormData } from '../../../../hooks/usePostFormData';

const ContactForm = () => {
  const [formValues, setFormValues] = React.useState<FormData | undefined>(undefined);
  const { success, formSubmissionError, errors, register, handleSubmit, getValues } = usePostFormData(formValues);

  const onSubmit = () => {
    const values = getValues();
    if (values) {
      setFormValues(values);
    }
    return;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="contact-form" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="relative mb-4">
        {/* <label htmlFor="name">Your Name:</label> <br /> */}
        <input
          aria-invalid={errors.name ? 'true' : 'false'}
          {...register('name')}
          type="text"
          name="name"
          id="name"
          className="input"
          placeholder="Full name*"
        />
        {errors.name?.type === 'required' && (
          <div className="text-red-600 block mt-1" role="alert">
            Name is required
          </div>
        )}
      </div>
      <div className="relative mb-4">
        {/* <label htmlFor="email">Your Email:</label> <br /> */}
        <input
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register('email')}
          type="email"
          name="email"
          id="email"
          className="input"
          placeholder="Email*"
        />
        {errors.email?.type === 'required' && (
          <div className="text-red-600 block mt-1" role="alert">
            Email is required
          </div>
        )}
      </div>
      <div className="relative mb-4">
        {/* <label htmlFor="message">Message</label> <br /> */}
        <textarea
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message')}
          name="message"
          id="message"
          className="input"
          placeholder="Message*"
        ></textarea>
        {errors.message?.type === 'required' && (
          <div className="text-red-600 block mt-1" role="alert">
            Message is required
          </div>
        )}
      </div>
      <div className="text-left">
        <button type="submit" className="button button-secondary">
          Submit
        </button>
      </div>
      {success && (
        <div className="text-green-600 block mt-1">
          Thank you for your message&#x21; I will get back to you within the next 24 hours.
        </div>
      )}
      {formSubmissionError && <div className="text-red-600 block mt-1">Form was not sent. Please try again :/</div>}
    </form>
  );
};

export default ContactForm;
