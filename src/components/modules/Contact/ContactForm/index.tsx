import * as React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from 'components/modules/Contact/TextField';

export type FormData = {
  name: string;
  email: string;
  message: string;
  'form-name': string;
};

const schema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().required(),
  message: Yup.string().required(),
}).required();

function encode(data: FormData) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key as keyof typeof data]))
    .join('&');
}

const ContactForm = () => {
  const [success, setSuccess] = React.useState(false);
  const [formSubmissionError, setFormSubmissionError] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    const values = getValues();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        ...values,
        'form-name': 'contact-form',
      }),
    })
      .then((response) => {
        reset();
        setSuccess(true);
        return;
      })
      .catch((error) => {
        console.log(error);
        setFormSubmissionError(true);
        return;
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} name="contact-form" action="/success" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact-form" />
      <div className="relative mb-4">
        <TextField
          register={register as any}
          errors={errors}
          options={{ label: 'name', labelText: 'Your name' }}
          placeholder="Full name*"
        />
      </div>
      <div className="relative mb-4">
        <TextField
          register={register as any}
          errors={errors}
          options={{ label: 'email', labelText: 'Your email' }}
          placeholder="Email*"
        />
      </div>
      <div className="relative mb-4">
        <label className="invisible" htmlFor="message">
          Message
        </label>
        <textarea
          aria-invalid={errors.message ? 'true' : 'false'}
          {...register('message')}
          name="message"
          id="message"
          className="input dark:bg-gray-200 dark:caret-gray-900 dark:text-gray-900 autofill:bg-yellow-200"
          placeholder="Message*"
        />
        {errors.message?.type === 'required' && (
          <div className="text-red-600 block mt-1" role="alert">
            Message is required
          </div>
        )}
      </div>
      <div className="text-left">
        <button type="submit" className="button bg-green-900 hover:bg-green-600 duration-300 ease-in-out transition">
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
