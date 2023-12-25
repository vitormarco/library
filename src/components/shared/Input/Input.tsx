import React, { useRef } from 'react';
import { getInputClasses } from './Input.helpers';
import styles from './Input.module.css';
import { IInputProps } from './Input.types';

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { labelText, hasError = false, ...rest },
  ref
) => {
  const inputRef = useRef<HTMLInputElement | null>();

  return (
    <label className={styles.wrapper} htmlFor={rest.name}>
      {labelText}
      <input
        className={getInputClasses(hasError, styles)}
        {...rest}
        ref={(element) => {
          if (ref) {
            if (typeof ref === 'function') ref(element);
            inputRef.current = element;
          }
        }}
      />
    </label>
  );
};

export const Input = React.forwardRef(InputBase);
