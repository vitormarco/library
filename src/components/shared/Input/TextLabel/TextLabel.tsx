import VisuallyHidden from '../../VisuallyHidden';
import styles from './TextLabel.module.css';
import { ITextLabelProps } from './TextLabel.types';

const TextLabel = ({ visuallyHidden, children }: ITextLabelProps) => {
  if (visuallyHidden) {
    return (
      <div className={styles['wrapper-label']}>
        <VisuallyHidden>{children}</VisuallyHidden>
      </div>
    );
  }

  return children;
};

export default TextLabel;
