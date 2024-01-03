import { useEffect } from 'react';
import { handleClickOutside, handleCloseOnKey } from './Drawer.helpers';

const useAcessibilityDrawerActions = (
  onClose: () => void,
  drawerRef: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    document.addEventListener('keydown', (e) => handleCloseOnKey(e)(onClose), true);
    document.addEventListener('click', (e) => handleClickOutside(e)(onClose, drawerRef), true);

    return () => {
      document.removeEventListener('keydown', (e) => handleCloseOnKey(e)(onClose), true);
      document.removeEventListener('click', (e) => handleClickOutside(e)(onClose, drawerRef), true);
    };
  }, [onClose, drawerRef]);
};

export default useAcessibilityDrawerActions;
