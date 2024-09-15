import { useState } from 'react';

const useBooleanState = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(false);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  };
};

export default useBooleanState;
