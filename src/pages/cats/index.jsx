import useCats from './hooks/useCats';
import Button from '../../components/common/button';
import CatsItems from './catsItems/CatsItems';
import styles from './cats.module.scss';

const Cats = () => {
  const { cats, handelAddCats } = useCats();

  return (
    <div className={styles.main_container}>
      <div className={styles.main_list_wrapper}>
        {cats.map(({ id, url }) => {
          return <CatsItems key={id} imageUrl={url} />;
        })}
      </div>
      <Button buttonText='Add More' onClick={handelAddCats} />
    </div>
  );
};

export default Cats;
