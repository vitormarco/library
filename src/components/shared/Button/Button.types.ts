export type ButtonVariantsType = 'primary' | 'outline';

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariantsType;
  loading?: boolean;
}

export const variants: Record<ButtonVariantsType, ButtonVariantsType> = {
  outline: 'outline',
  primary: 'primary'
};
