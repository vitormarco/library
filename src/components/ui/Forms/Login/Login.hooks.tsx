import { useRouter } from 'next/navigation';
import routes from '@/utils/routes';
import { IUseOnlyRenderPageIsNotAuthenticatedProps } from './Login.types';

const useOnlyRenderPageIsNotAuthenticated = ({
  session
}: IUseOnlyRenderPageIsNotAuthenticatedProps) => {
  const router = useRouter();

  if (session) {
    return router.push(routes.library);
  }
};

export default useOnlyRenderPageIsNotAuthenticated;
