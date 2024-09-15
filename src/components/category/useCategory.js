import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryId, setLoading } from '../../store/actions';
import { useCallback } from 'react';

const useCategory = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const {
    category: { category },
    categoryId: { category_ids },
  } = useSelector((state) => state);
  const isActiveLink = (path, active) => (path === pathname ? active : null);

  const handelChangeCategory = useCallback(
    (id) => {
      if (id === category_ids) return; // Don't fetch if the same category is clicked;
      dispatch(setCategoryId(id));
      dispatch(setLoading(true)); // You can trigger re-fetch here
    },
    [dispatch, category_ids], // Ensure selectedCategoryId is a dependency
  );

  return {
    handelChangeCategory,
    category,
    isActiveLink,
  };
};

export default useCategory;
