import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import movieReducer from './slices/movie';

const reducer = combineReducers({
  count: counterReducer,
  movie: movieReducer,
});

const store = configureStore({
  reducer,
});

export default store;
