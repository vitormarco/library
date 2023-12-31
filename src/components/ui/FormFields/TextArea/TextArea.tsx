'use client';

import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@/components/shared/ErrorMessage';
import { TextArea } from '@/components/shared/TextArea';
import styles from './TextArea.module.css';
import { IFormTextAreaProps } from './TextArea.types';

const FormTextAreaBase: React.ForwardRefRenderFunction<HTMLTextAreaElement, IFormTextAreaProps> = (
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
            <TextArea {...rest} {...field} labelText={labelText} hasError={!!error} ref={ref} />
            <ErrorMessage message={error?.message} />
          </div>
        );
      }}
    />
  );
};

export const FormTextArea = React.forwardRef(FormTextAreaBase);
