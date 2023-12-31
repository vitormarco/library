import React from 'react';
import TextLabel from '../TextLabel';
import styles from './TextArea.module.css';
import { ITextAreaProps } from './TextArea.types';

const TextAreaBase: React.ForwardRefRenderFunction<HTMLTextAreaElement, ITextAreaProps> = (
  { labelText, hasError = false, visuallyHidden = false, ...rest },
  ref
) => {
  const textAreaRef = React.useRef<HTMLTextAreaElement | null>();

  return (
    <label htmlFor={rest.name} className={styles.wrapper}>
      <TextLabel visuallyHidden={visuallyHidden}>{labelText}</TextLabel>
      <textarea
        className={[styles['text-area'], hasError ? styles.error : ''].join(' ')}
        id={rest.name}
        ref={(element) => {
          if (ref) {
            if (typeof ref === 'function') ref(element);
            textAreaRef.current = element;
          }
        }}
        {...rest}
      />
    </label>
  );
};

export const TextArea = React.forwardRef(TextAreaBase);
