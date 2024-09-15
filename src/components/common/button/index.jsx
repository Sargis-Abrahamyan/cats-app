import styles from './button.module.scss';

const Button = ({ buttonText, variant, className, onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`${styles.button} ${styles[variant]} ${className}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
