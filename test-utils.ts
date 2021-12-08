import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const customRender = (ui: any, options?: RenderOptions): RenderResult =>
  render(ui, {
    ...options,
  });

export * from '@testing-library/react';
export {
  customRender,
  userEvent,
  // screen
};
