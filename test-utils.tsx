import * as React from 'react';
import { render, RenderOptions } from '@testing-library/react';

type Props = {
  children: JSX.Element;
};

const AllProviders: React.FC<Props> = ({ children }) => {
  return children;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return <AllProviders>{children}</AllProviders>;
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';
export { customRender as render };
