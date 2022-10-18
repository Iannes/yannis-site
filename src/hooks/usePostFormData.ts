import * as React from 'react'
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

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

export const usePostFormData = (values: FormData | undefined) => {

	
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

	const DEFAULT_VALUES = { 
		success: false, 
		formSubmissionError: false, 
		errors: {
			name: { type: "required" }, 
			email: { type: "required" }, 
			message: { type: "required" }, 
		}, 
		register, 
		handleSubmit, 
		getValues 
	}
	
	if(typeof values === 'undefined') return DEFAULT_VALUES;

	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: encode({
			...values,
			'form-name': 'contact-form',
		}),
	})
		.then(() => {
			reset();
			setSuccess(true);
			return;
		})
		.catch((error) => {
			console.log(error);
			setFormSubmissionError(true);
			return;
		});

		return {success, formSubmissionError, errors, register, handleSubmit, getValues}
}

function encode(data: FormData | undefined) {
	if(typeof data === 'undefined') return;
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key as keyof typeof data]))
    .join('&');
}