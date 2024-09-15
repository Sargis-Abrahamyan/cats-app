import { GET_CATEGORY } from '../constants';

const categoryInitialState = {
  // get category
  category: [],
};

export const categoryReducer = (state = categoryInitialState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        category: payload,
      };
    default:
      return state;
  }
};
