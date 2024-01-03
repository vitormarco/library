import styles from './Card.module.css';
import { ICardProps } from './Card.types';

const Card = ({ children, className = '', style }: ICardProps) => {
  return (
    <article data-testid="card" style={style} className={[styles.card, className].join(' ')}>
      {children}
    </article>
  );
};

export default Card;
