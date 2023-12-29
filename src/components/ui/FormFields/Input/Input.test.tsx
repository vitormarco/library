import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { render, screen } from '@/utils/tests';
import { FormInput } from './Input';

describe('FormInput', () => {
  it('should be able render a FormInput', () => {
    const TestInput = () => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <FormInput labelText="E-mail" name="email" />
        </FormProvider>
      );
    };
    render(<TestInput />);

    expect(screen.getByText('E-mail')).toBeTruthy();
  });

  it('should be able render message error', () => {
    const TestInputWithError = () => {
      const methods = useForm({
        defaultValues: {
          email: ''
        },
        errors: {
          email: {
            type: 'value',
            message: 'Must be a valid e-mail'
          }
        }
      });
      return (
        <FormProvider {...methods}>
          <FormInput labelText="E-mail" name="email" />
        </FormProvider>
      );
    };

    render(<TestInputWithError />);

    expect(screen.getByText('Must be a valid e-mail')).toBeTruthy();
  });
});
