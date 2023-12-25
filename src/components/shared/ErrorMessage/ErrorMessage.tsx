import styles from './ErrorMessage.module.css';
import { IErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage = ({ message }: IErrorMessageProps) => {
  if (!message) return null;

  return <span className={styles.message}>{message}</span>;
};

export default ErrorMessage;
