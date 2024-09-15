import { GET_CATS, RESET_CATS, SET_LOADING } from '../constants';

const catsInitialState = {
  // get cats
  cats: [],
  //loading when change data
  loading: true,
};

export const catsReducer = (state = catsInitialState, { type, payload }) => {
  switch (type) {
    case GET_CATS:
      return {
        ...state,
        cats: [...state.cats, ...payload],
      };
    case RESET_CATS: {
      return {
        ...state,
        cats: [],
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    default:
      return state;
  }
};
