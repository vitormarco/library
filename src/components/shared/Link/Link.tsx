import NextLink from 'next/link';
import { ILinkProps } from './Link.types';

const Link = ({ href, children, ...rest }: ILinkProps) => (
  <NextLink href={href} {...rest}>
    {children}
  </NextLink>
);

export default Link;
