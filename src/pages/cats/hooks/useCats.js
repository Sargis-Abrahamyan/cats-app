import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCats } from '../../../service/catsService';
import { GET_CATS } from '../../../store/constants';

const useCats = () => {
  const dispatch = useDispatch();
  const { catsData, categoryId } = useSelector((state) => state);
  const { category_ids } = categoryId;
  const { cats } = catsData;

  const handelAddCats = useCallback(async () => {
    const newCats = await GetCats(category_ids, 1);
    dispatch({ type: GET_CATS, payload: newCats });
  }, [category_ids, dispatch]);

  return {
    handelAddCats,
    cats,
  };
};

export default useCats;
