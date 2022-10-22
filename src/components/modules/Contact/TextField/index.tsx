import * as React from 'react';
import { FieldErrorsImpl, UseFormRegister, FieldValues } from 'react-hook-form';
import ErrorMessage from 'components/modules/ErrorMessage';

type Props = {
  register: UseFormRegister<FieldValues>;
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
};

export type TextFieldOptions = {
  label: 'name' | 'email' | 'message';
  labelText: string;
};

const TextField: React.FC<Props> = ({ register, errors, options, placeholder }) => {
  const { label, labelText } = options;
  const ariaLabelledBy = `${label}-label`;
  return (
    <div className="relative mb-4">
      <label id={ariaLabelledBy} className="invisible" htmlFor={label as unknown as string}>
        {labelText}
      </label>
      <input
        {...register(label)}
        aria-labelledby={ariaLabelledBy}
        aria-invalid={errors[label] ? 'true' : 'false'}
        type={label}
        name={label}
        id={label}
        className="input dark:bg-gray-200 dark:caret-gray-900 dark:text-gray-900"
        placeholder={placeholder}
      />
      <ErrorMessage errors={errors} label={label} />
    </div>
  );
};

export default TextField;
