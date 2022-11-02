import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import Root from '../layout/Root';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound404 from '../pages/NotFound404/NotFound404';
import Review from '../pages/Review/Review';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/review/:id" element={<Review />} />
      </Route>
      <Route path="/login" element={<Login />}>
        <Route path=":id" element={<Login />} />
        <Route path=":id/:token" element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/movie/:movieId" element={<MovieDetails />} />
      <Route path="/*" element={<NotFound404 />} />
    </>
  )
);

export default router;
