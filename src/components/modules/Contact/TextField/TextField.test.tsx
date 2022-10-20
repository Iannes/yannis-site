import { render, screen } from '../../../../../test-utils';
import TextField, { TextFieldOptions } from './';

const mockRegister = jest.fn((email) => {
  return Promise.resolve({ email });
});

const OPTIONS = {
  label: 'email',
  labeltext: 'Your email',
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
          errorMessage="Error message"
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

describe('Error handling', () => {
  beforeEach(() => {
    render(
      <TextField
        register={mockRegister as any}
        errors={{ email: { type: 'required' } }}
        options={OPTIONS as TextFieldOptions}
        placeholder="Email*"
        errorMessage="Error message"
      />,
    );
  });
  it('Shows error message', () => {
    const error = screen.getByRole('alert');
    expect(error).toBeInTheDocument();
  });
});
