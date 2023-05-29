import { GET_CATEGORY, GET_CATS, SET_CATEGORY_ID, SET_LOADING } from "../constants/constants";

const initialState = {
    categoryId: 1,
    category: [],
    cats: [],
    loading: true
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CATEGORY: {
            return {
                ...state,
                category: payload
            }
        }
        case GET_CATS: {
            return {
                ...state,
                cats: [...state.cats, ...payload]
            }
        }
        case SET_CATEGORY_ID: {
            return {
                ...state,
                categoryId: [payload],
                cats: []
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: payload
            }
        }
        
        default: return state;
    }
}
