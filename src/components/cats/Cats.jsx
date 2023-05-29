import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// api
import { Get_Cats } from '../../api/api';
// constants
import { GET_CATS } from '../../store/constants/constants';
// components
import CatsItems from './catsItems/CatsItems';
// scss
import styles from "./scss/cats.module.scss";

const Cats = () => {
  const dispatch = useDispatch();
  const { cats, categoryId } = useSelector(state => state);

  const handelAddCats = async () => {
    const newCats = await Get_Cats(categoryId);
    dispatch({ type: GET_CATS, payload: newCats });
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.main_list_wrapper}>
        {cats.map((cat, index) => <CatsItems key={index} cat={cat} />)}
      </div>

      <button className={styles.add_cats_btn} onClick={handelAddCats}>Add More</button>
    </div>
  )
}

export default Cats;