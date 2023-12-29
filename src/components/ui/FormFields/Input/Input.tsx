'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { Input } from '@/components/shared/Input';
import styles from './Input.module.css';
import { IFormInputProps } from './Input.types';

const FormInputBase: React.ForwardRefRenderFunction<HTMLInputElement, IFormInputProps> = (
  { labelText, name, ...rest },
  ref
) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={styles.wrapper}>
            <Input {...rest} {...field} labelText={labelText} hasError={!!error} ref={ref} />
            <ErrorMessage message={error?.message} />
          </div>
        );
      }}
    />
  );
};

export const FormInput = React.forwardRef(FormInputBase);
