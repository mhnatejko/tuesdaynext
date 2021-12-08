import { customRender, screen } from '../test-utils';
// import { render, screen } from '@testing-library/react'
import Page from '../pages/page';

describe('test', () => {
  it('should test', () => {
    customRender(<Page />);

    expect(screen.queryByText('page')).toBeInTheDocument();
  });
});
