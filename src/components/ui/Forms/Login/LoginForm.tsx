'use client';

import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Button from '@/components/shared/Button';
import Card from '@/components/shared/Card';
import { FormInput } from '@/components/ui/FormFields';
import routes from '@/utils/routes';
import { zodResolver } from '@hookform/resolvers/zod';
import useOnlyRenderPageIsNotAuthenticated from './Login.hooks';
import styles from './Login.module.css';
import LoginFormSchema from './Login.schemas';
import { ILoginProps, LoginInputTypes } from './Login.types';

const LoginForm = ({ session }: ILoginProps) => {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(LoginFormSchema),
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: ''
    }
  });
  useOnlyRenderPageIsNotAuthenticated({ session });

  const onSubmit: SubmitHandler<LoginInputTypes> = async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    });

    if (res?.error || res?.status !== 200) {
      return toast('Usuário não econtrado');
    }

    return router.push(routes.library);
  };

  return (
    <FormProvider {...methods}>
      <Card>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <h2 className={styles.title}>Login</h2>
          <FormInput labelText="E-mail" {...methods.register('email')} />
          <FormInput labelText="Senha" type="password" {...methods.register('password')} />
          <Button type="submit">Entrar</Button>
        </form>
      </Card>
    </FormProvider>
  );
};

export default LoginForm;
