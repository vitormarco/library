const useAccessibilityAction = (onClose: () => void) => {
  const handleCloseByKey = () => (event: KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        onClose();
        break;
      default:
        break;
    }
  };

  return { handleCloseByKey };
};

export default useAccessibilityAction;
