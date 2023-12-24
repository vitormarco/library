import { getInputClasses } from './Input.helpers';
import styles from './Input.module.css';
import { IInputProps } from './Input.types';

const Input = ({ labelText, hasError = false, ...rest }: IInputProps) => {
  return (
    <label className={styles.wrapper} htmlFor={rest.name}>
      {labelText}
      <input className={getInputClasses(hasError, styles)} {...rest} />
    </label>
  );
};

export default Input;
