import * as React from 'react';
import { FieldErrorsImpl } from 'react-hook-form';

type ErrorMessageProps = {
  errors: Partial<FieldErrorsImpl<{ name: string; email: string; message: string }>>;
  label: 'name' | 'email' | 'message';
};

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors, label }) => {
  return typeof errors?.message !== 'undefined' && errors[label]?.type === 'required' ? (
    <div className="text-red-600 block mt-1" role="alert">
      {errors?.[label]?.message as React.ReactNode}
    </div>
  ) : null;
};

export default ErrorMessage;
