import { render, screen } from '@/utils/tests';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should be able render a ErrorMessage', () => {
    render(<ErrorMessage message="Must be valid e-mail." />);

    expect(
      screen.getByText('Must be valid e-mail', {
        exact: false
      })
    ).toBeTruthy();
  });

  it('not should be render when message is empty.', () => {
    render(<ErrorMessage />);

    const element = document.querySelector('span');

    expect(element).toBeNull();
  });
});
