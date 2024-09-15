import useCatsItems from '../hooks/useCatsItems';
import Modal from '../../../components/modal';
import Image from '../../../components/common/Image';
import styles from './catsItems.module.scss';

const CatsItems = ({ imageUrl }) => {
  const { handelOpen, fullScreen, isOpen, onClose } = useCatsItems();

  return (
    <>
      <div className={styles.cats_block} onClick={() => handelOpen(imageUrl)}>
        <Image src={imageUrl} alt='cats' />
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Image src={fullScreen} alt='fullScreen' />
      </Modal>
    </>
  );
};

export default CatsItems;
