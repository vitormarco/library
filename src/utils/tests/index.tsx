import roboto from '@/styles/font';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

const customRender = (ui: React.ReactElement, options: RenderOptions = {}): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <html lang="en" className={roboto.className}>
        <body>{children}</body>
      </html>
    ),
    ...options
  });

export * from '@testing-library/react';
export { customRender as render };
export { default as userEvent } from '@testing-library/user-event';
