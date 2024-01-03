import { FiX } from 'react-icons/fi';
import useAccessibilityAction from './CloseButton.hooks';
import styles from './CloseButton.module.css';
import { ICloseButtonProps } from './CloseButton.types';

const CloseButton = ({ children, onClose }: ICloseButtonProps) => {
  const { handleCloseByKey } = useAccessibilityAction(onClose);

  return (
    <button
      onClick={onClose}
      onKeyDown={handleCloseByKey}
      className={styles['close-button']}
      data-testid="close-button"
    >
      <FiX />
      {children}
    </button>
  );
};

export default CloseButton;
