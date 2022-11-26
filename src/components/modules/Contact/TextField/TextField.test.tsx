import { render, screen } from '../../../../../test-utils';
import TextField, { TextFieldOptions } from './';

const mockRegister = jest.fn((email) => {
  return Promise.resolve({ email });
});

const OPTIONS = {
  label: 'email',
  labelText: 'Your email',
};
describe('TextField', () => {
  describe('Is in the document', () => {
    beforeEach(() => {
      render(
        <TextField
          register={mockRegister as any}
          errors={{}}
          options={OPTIONS as TextFieldOptions}
          placeholder="Email*"
        />,
      );
    });
    it('Renders correctly', () => {
      const placeholderNode = screen.getByLabelText('Your email');
      expect(placeholderNode).toBeInTheDocument();
    });
    it('It renders an aria-labelledby attribute', () => {
      const placeholderNode = screen.getByLabelText('Your email');
      expect(placeholderNode).toHaveAttribute('aria-labelledby');
    });
  });
});

// describe('Error handling', () => {
//   const errors = { email: { message: 'Error message', type: 'required' } };
//   beforeEach(() => {
//     render(
//       <TextField
//         register={mockRegister as any}
//         errors={errors}
//         options={OPTIONS as TextFieldOptions}
//         placeholder="Email*"
//       />,
//     );
//   });
//   it('Shows error message', () => {
//     const error = screen.getByRole('alert');
//     expect(error).toBeInTheDocument();
//   });
// });
