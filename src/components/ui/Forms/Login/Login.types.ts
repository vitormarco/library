import { Session } from 'next-auth';

export type LoginInputTypes = {
  email: string;
  password: string;
};

export interface ILoginProps {
  session?: Session | null;
}

export interface IUseOnlyRenderPageIsNotAuthenticatedProps {
  session?: Session | null;
}
