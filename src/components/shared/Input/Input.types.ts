import React from 'react';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  hasError?: boolean;
  visuallyHidden?: boolean;
}
