import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import router from './routers/Routers';
import { fetchAllGenres, fetchAllMovies } from './redux/slices/movie';
import { fetchAllReviews } from './redux/slices/review';

function App() {
  const dispatch = useDispatch();

  dispatch(fetchAllGenres());
  dispatch(fetchAllMovies());
  dispatch(fetchAllReviews());

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
