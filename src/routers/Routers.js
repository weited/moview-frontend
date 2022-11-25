import { createRoutesFromElements, createBrowserRouter, Route } from 'react-router-dom';
import Root from '../layout/Root';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import NotFound404 from '../pages/NotFound404/NotFound404';
import Review from '../pages/Review/Review';
import Movie from '../pages/Movie/Movie';
import NewReview from '../pages/Review/NewReviewPage';
import UserPage from '../pages/UserPage/UserPage';
import PersonalInfo from '../pages/PersonalDetail/PersonalInfo';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/review/:reviewId" element={<Review />} />
        <Route path="/movie/:movieId" element={<Movie />} />
        <Route path="/movie/:movieId/new-review" element={<NewReview />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/personal-info" element={<PersonalInfo />} />
      </Route>
      <Route path="/login" element={<Login />}>
        <Route path=":id" element={<Login />} />
        <Route path=":id/:token" element={<Login />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/404" element={<NotFound404 />} />
      <Route path="/*" element={<NotFound404 />} />
    </>
  )
);

export default router;
