import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetCategory } from '../service/categoryService';
import { GetCats } from '../service/catsService';
import { setResetCats, setCategory, setLoading, setCats } from '../store/actions';

export const useGetData = () => {
  const dispatch = useDispatch();
  const { categoryId, catsData } = useSelector((state) => state);
  const { category_ids } = categoryId;
  const { loading } = catsData;

  const Get_Data = useCallback(async () => {
    dispatch(setLoading(true)); // Start by setting loading to true
    try {
      const category = await GetCategory(); // Fetch category
      const cats = await GetCats(category_ids); // Fetch cats

      dispatch(setResetCats()); // Clear previous cats
      dispatch(setCategory(category)); // Update category in state
      dispatch(setCats(cats)); // Update cats in state
    } catch (error) {
      console.error('Error fetching data:', error); // Log the error
    } finally {
      dispatch(setLoading(false)); // Ensure loading is set to false after the operation
    }
  }, [category_ids, dispatch]);

  useEffect(() => {
    Get_Data();
  }, [Get_Data]);

  return {
    loading,
    category_ids,
  };
};
