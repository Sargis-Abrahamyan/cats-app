import styles from './image.module.scss';

const Image = ({ src, alt, loading = 'lazy', className }) => {
  return <img src={src} alt={alt} className={`${className} ${styles.image}`} loading={loading} />;
};

export default Image;
