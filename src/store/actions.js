import { GET_CATEGORY, GET_CATS, SET_CATEGORY_ID, SET_LOADING, RESET_CATS } from './constants';

export const setCategory = (category) => ({
  type: GET_CATEGORY,
  payload: category,
});

export const setCats = (cats) => ({
  type: GET_CATS,
  payload: cats,
});

export const setCategoryId = (id) => ({
  type: SET_CATEGORY_ID,
  payload: id,
});

export const setLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading,
});

export const setResetCats = () => ({
  type: RESET_CATS,
});
