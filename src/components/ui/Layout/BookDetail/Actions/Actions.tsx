import React from 'react';
import styles from './Actions.module.css';
import { IActionsProps } from './Actions.types';

const Actions = ({ children }: IActionsProps) => {
  return (
    <ul className={styles.wrapper}>
      {React.Children.toArray(children).map((child, index) => (
        <li key={`item_${index}`}>{child}</li>
      ))}
    </ul>
  );
};

export default Actions;
