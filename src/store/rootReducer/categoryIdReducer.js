import { SET_CATEGORY_ID } from '../constants';

const categoryIdInitialState = {
  // get and change Category_Ids
  category_ids: 1,
};

export const categoryIdReducer = (state = categoryIdInitialState, { payload, type }) => {
  switch (type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        category_ids: payload,
      };
    default:
      return state;
  }
};
