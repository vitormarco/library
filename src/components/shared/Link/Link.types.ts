import { LinkProps } from 'next/link';

export interface ILinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}
