import { useState } from 'react';
import useBooleanState from '../../../hooks/useBooleanState';

const useCatsItems = () => {
  const [fullScreen, setFullScreen] = useState('');
  const { isOpen, onClose, onOpen } = useBooleanState();

  const handelOpen = (imageUrl) => {
    setFullScreen(imageUrl);
    onOpen();
  };

  return {
    handelOpen,
    fullScreen,
    isOpen,
    onClose,
  };
};

export default useCatsItems;
