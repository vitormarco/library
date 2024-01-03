import React from 'react';
import { render, fireEvent, screen } from '@/utils/tests';
import CloseButton from './CloseButton';
import useAccessibilityAction from './CloseButton.hooks';

describe('CloseButton Component', () => {
  const mockProps = {
    onClose: jest.fn(),
    children: 'Close'
  };

  it('renders the CloseButton component with correct props', () => {
    render(<CloseButton {...mockProps} />);

    expect(screen.getByText('Close')).toBeInTheDocument();

    const svgElement = screen.getByTestId('close-button').querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('calls onClose when the button is clicked', () => {
    render(<CloseButton {...mockProps} />);

    fireEvent.click(screen.getByText('Close'));

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('calls handleCloseByKey when a key is pressed', () => {
    render(<CloseButton {...mockProps} />);

    fireEvent.keyDown(screen.getByTestId('close-button'), { key: 'Enter' });

    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('calls onClose when Enter key is pressed', () => {
    const onCloseMock = jest.fn();

    const { handleCloseByKey } = useAccessibilityAction(onCloseMock);

    const mockEvent = new KeyboardEvent('keydown', { key: 'Enter' });

    handleCloseByKey()(mockEvent);

    expect(onCloseMock).toHaveBeenCalled();
  });

  it('does not call onClose for other keys', () => {
    const onCloseMock = jest.fn();

    const { handleCloseByKey } = useAccessibilityAction(onCloseMock);

    const mockEvent = new KeyboardEvent('keydown', { key: 'Escape' });

    handleCloseByKey()(mockEvent);

    expect(onCloseMock).not.toHaveBeenCalled();
  });
});
