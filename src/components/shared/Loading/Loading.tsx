import BouncingDots from './BouncingDots';
import { ILoadingProps, LoadingsTypes } from './Loading.types';

const loading: LoadingsTypes = {
  'bouncing-dots': <BouncingDots />
};

const Loading = ({ variant = 'bouncing-dots' }: ILoadingProps) => {
  const LoadingElement = loading[variant];

  return LoadingElement;
};

export default Loading;
