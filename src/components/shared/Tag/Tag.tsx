import styles from './Tag.module.css';
import { ITagsProps } from './Tag.types';

const Tag = ({ children, ...rest }: ITagsProps) => (
  <span
    {...rest}
    style={
      {
        '--background': 'var(--white)',
        '--color': 'var(--black)',
        '--border-color': 'var(--black)',
        ...rest.style
      } as React.CSSProperties
    }
    className={[styles.tag, rest.className].join(' ')}
  >
    {children}
  </span>
);

export default Tag;
