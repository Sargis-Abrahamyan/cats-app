import { GET_CATEGORY, GET_CATS, SET_CATEGORY_ID, SET_LOADING } from "../constants/constants";

export const actions_category = (category) => ({
  type: GET_CATEGORY,
  payload: category
})

export const actions_cats = (cats) => ({
  type: GET_CATS,
  payload: cats
})

export const actions_category_id = (id) => ({
  type: SET_CATEGORY_ID,
  payload: id
})

export const actionLoading = (loading) => ({
  type: SET_LOADING,
  payload: loading
})
