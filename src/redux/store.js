import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import movieReducer from './slices/movie';
import reviewReducer from './slices/review';
import commentReducer from './slices/comment';
import userReducer from './slices/user';

const reducer = combineReducers({
  count: counterReducer,
  movie: movieReducer,
  comment: commentReducer,
  review: reviewReducer,
  user: userReducer,
});

const store = configureStore({
  reducer,
});

export default store;
