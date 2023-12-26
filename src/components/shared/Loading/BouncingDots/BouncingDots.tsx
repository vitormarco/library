import styles from './BouncingDots.module.css';

const BouncingDots = () => (
  <div className={styles['bouncing-dots-loader']}>
    <span className={styles.dot} />
    <span className={styles.dot} />
    <span className={styles.dot} />
  </div>
);

export default BouncingDots;
