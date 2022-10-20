import * as React from 'react';
import { FormData } from '../ContactForm';
import { FieldErrorsImpl, UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<FormData>;
  errors: Partial<
    FieldErrorsImpl<{
      name: string;
      email: string;
      message: string;
      'form-name': string;
    }>
  >;
  options: TextFieldOptions;
  placeholder: string;
  errorMessage: string;
};

export type TextFieldOptions = {
  label: 'name' | 'email' | 'message';
  labeltext: string;
};

const TextField: React.FC<Props> = ({ register, errors, options, placeholder, errorMessage }) => {
  const { label, labeltext } = options;
  return (
    <div className="relative mb-4">
      <label id={`${label}-label`} className="invisible" htmlFor={label as unknown as string}>
        {labeltext}
      </label>{' '}
      <br />
      <input
        aria-labelledby={`${label}-label`}
        aria-invalid={errors[label] ? 'true' : 'false'}
        {...register(label)}
        type={label}
        name={label}
        id={label}
        className="input"
        placeholder={placeholder}
      />
      {errors[label]?.type === 'required' && (
        <div className="text-red-600 block mt-1" role="alert">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default TextField;
