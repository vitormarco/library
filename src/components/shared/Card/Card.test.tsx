import { render, screen } from '@/utils/tests';
import Card from './Card';

describe('Card Component', () => {
  const mockProps = {
    children: <div>Card Content</div>,
    className: 'custom-class',
    style: { backgroundColor: 'blue' }
  };

  it('renders the Card component with correct props', () => {
    render(<Card {...mockProps} />);

    expect(screen.getByText('Card Content')).toBeInTheDocument();

    expect(screen.getByTestId('card')).toHaveClass('custom-class');

    expect(screen.getByTestId('card')).toHaveStyle({
      backgroundColor: 'blue'
    });
  });
});
