import { Link } from 'react-router-dom';
import useCategory from './useCategory';
import styles from './category.module.scss';

const Category = () => {
  const { category, isActiveLink, handelChangeCategory } = useCategory();

  return (
    <ul className={styles.list_block}>
      {category.length !== 0 &&
        category.map(({ id, name }) => (
          <li key={id} className={styles.list_items} onClick={() => handelChangeCategory(id)}>
            <Link to={name} className={isActiveLink(`/${name}`, styles.active)}>
              {name}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Category;
