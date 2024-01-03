'use client';

import { useForceShow } from './VisuallyHidden.hooks';
import styles from './VisuallyHidden.module.css';
import { IVisuallyHiddenProps } from './VisuallyHidden.types';

const VisuallyHidden = ({ children }: IVisuallyHiddenProps) => {
  const forceShow = useForceShow();

  if (forceShow) {
    return children;
  }

  return <div className={styles.wrapper}>{children}</div>;
};

export default VisuallyHidden;
