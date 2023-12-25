import { render, screen } from '@/utils/tests';
import { Input } from './Input';

describe('Input', () => {
  it('should be able render a Input', () => {
    const ref = jest.fn();
    render(<Input labelText="E-mail" ref={ref} />);

    expect(screen.getByLabelText('E-mail', { exact: false })).toBeTruthy();
  });

  it('should be able to render input with error', () => {
    render(<Input labelText="E-mail" hasError />);

    expect(screen.getByLabelText('E-mail').className).toContain('error');
  });
});
