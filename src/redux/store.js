import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import movieReducer from './slices/movie';
import reviewReducer from './slices/review';
import commentReducer from './slices/comment';

const reducer = combineReducers({
  count: counterReducer,
  movie: movieReducer,
  comment: commentReducer,
  review: reviewReducer,
});

const store = configureStore({
  reducer,
});

export default store;
