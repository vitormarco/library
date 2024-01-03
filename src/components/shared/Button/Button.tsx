import Loading from '../Loading';
import { STYLES } from './Button.helpers';
import cssStyle from './Button.module.css';
import { IButtonProps, variants } from './Button.types';

const BaseButton = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  className,
  style,
  ...rest
}: IButtonProps) => (
  <button
    {...rest}
    className={className}
    style={style}
    onClick={onClick}
    disabled={disabled || loading}
  >
    {children}
  </button>
);

const Button = ({
  children,
  onClick,
  disabled = false,
  variant = 'primary',
  loading = false,
  className,
  style,
  ...rest
}: IButtonProps) => {
  const variantStyles = STYLES[variant];
  const styles = {
    '--background': variantStyles.background,
    '--color': variantStyles.color,
    '--border': variantStyles.border,
    ...style
  } as React.CSSProperties;

  if (loading) {
    return (
      <BaseButton
        {...rest}
        disabled={loading}
        style={styles}
        className={[cssStyle.button, className].join(' ')}
      >
        <Loading variant="bouncing-dots" />
      </BaseButton>
    );
  }

  return (
    <BaseButton
      {...rest}
      onClick={onClick}
      disabled={disabled}
      style={styles}
      className={[cssStyle.button, className].join(' ')}
    >
      {children}
    </BaseButton>
  );
};

Button.variants = variants;

export default Button;
