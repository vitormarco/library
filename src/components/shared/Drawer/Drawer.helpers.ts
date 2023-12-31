import { Variants } from 'framer-motion';

export const drawerVariants: Variants = {
  hidden: {
    x: '100dvw',
    transition: {
      duration: 0.6,
      type: 'tween',
      ease: [0, 0, 0.4, 1]
    }
  },
  visible: {
    x: '0px',
    transition: {
      duration: 0.6,
      type: 'tween',
      ease: [0, 0, 0.4, 1]
    }
  }
};

export const handleCloseOnKey = (event: KeyboardEvent) => (onClose: () => void) => {
  switch (event.key) {
    case 'Escape':
      onClose();
      break;

    default:
      break;
  }
};

export const handleClickOutside =
  (event: MouseEvent) => (onClose: () => void, ref: React.RefObject<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return;

    if (!(ref.current && !ref.current?.contains(event.target))) {
      return;
    }

    return onClose();
  };
