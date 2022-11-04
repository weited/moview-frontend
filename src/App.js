import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import router from './routers/Routers';
import { fetchAllGenres, fetchAllMovies } from './redux/slices/movie';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGenres());
    dispatch(fetchAllMovies());
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
