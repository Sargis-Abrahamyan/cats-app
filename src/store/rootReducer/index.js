import { combineReducers } from 'redux';
//imports reducers
import { categoryReducer } from './categoryReducer';
import { catsReducer } from './catsReducer';
import { categoryIdReducer } from './categoryIdReducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
  catsData: catsReducer, // Cats and loading combined under `catsData`
  categoryId: categoryIdReducer,
});
