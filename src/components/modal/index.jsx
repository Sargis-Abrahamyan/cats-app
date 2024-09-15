import Button from '../common/button';
import styles from './modal.module.scss';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    isOpen && (
      <div className={styles.modal_overlay} onClick={onClose}>
        <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
          <div className={styles.content}>{children}</div>
          <div className={styles.buttonCloseBlock}>
            <Button buttonText='X' onClick={onClose} variant='small' />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
