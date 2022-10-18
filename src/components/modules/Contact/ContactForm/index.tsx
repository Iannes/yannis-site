import * as React from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type FormData = {
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
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
    </form>
  );
};

export default ContactForm;
