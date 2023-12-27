import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import routes from '@/utils/routes';
import { IUseOnlyRenderPageIsNotAuthenticatedProps } from './Login.types';

const useOnlyRenderPageIsNotAuthenticated = ({
  session
}: IUseOnlyRenderPageIsNotAuthenticatedProps) => {
  const router = useRouter();

  useEffect(() => {
    const verifySession = () => {
      if (session) {
        return router.push(routes.library);
      }

      return router.forward();
    };

    verifySession();
  }, [router, session]);
};

export default useOnlyRenderPageIsNotAuthenticated;
