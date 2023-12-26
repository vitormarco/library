import { render, screen } from '@/utils/tests';
import Button from './Button';

describe('Button', () => {
  it('should be able render a Button', () => {
    render(<Button>Click me!</Button>);

    expect(screen.getByText('Click me!')).toBeTruthy();
  });

  it('should be able render loading button', () => {
    render(<Button loading={true}>Click me!</Button>);
    expect(document.querySelectorAll('span')).toHaveLength(3);
  });
});
