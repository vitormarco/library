import React, { useRef } from 'react';
import { getInputClasses } from './Input.helpers';
import styles from './Input.module.css';
import { IInputProps } from './Input.types';
import TextLabel from './TextLabel';

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { labelText, hasError = false, visuallyHidden = false, ...rest },
  ref
) => {
  const inputRef = useRef<HTMLInputElement | null>();

  return (
    <label className={styles.wrapper} htmlFor={rest.name}>
      <TextLabel visuallyHidden={visuallyHidden}>{labelText}</TextLabel>
      <input
        className={getInputClasses(hasError, styles)}
        id={rest.name}
        ref={(element) => {
          if (ref) {
            if (typeof ref === 'function') ref(element);
            inputRef.current = element;
          }
        }}
        {...rest}
      />
    </label>
  );
};

export const Input = React.forwardRef(InputBase);
