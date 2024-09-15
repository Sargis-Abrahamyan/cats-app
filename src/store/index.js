import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Middleware for handling async actions
import { rootReducer } from './rootReducer'; // Import the combined reducers

// Create the Redux store
export const store = createStore(
  rootReducer, // Root reducer containing combined reducers
  applyMiddleware(thunk), // Applying middleware for async actions
);
