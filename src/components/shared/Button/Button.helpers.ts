import { CSSProperties } from 'react';
import { ButtonVariantsType } from './Button.types';

export const STYLES: Record<ButtonVariantsType, CSSProperties> = {
  primary: {
    background: 'var(--primary)',
    color: 'var(--white)',
    border: '1px solid var(--primary)'
  },
  outline: {
    background: 'var(--white)',
    color: 'var(--primary)',
    border: '1px solid var(--primary)'
  }
};
