import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById } from '../../../redux/slices/movie';
import Container from './MovieAndAuthorContainer';

const MovieContainer = Container;

function MovieCard({ movieId }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      await dispatch(fetchMovieById(movieId)).unwrap();
    }
    fetchData();
  }, []);

  // TO DO: display movieInfo into this component
  // eslint-disable-next-line no-unused-vars
  const movieInfo = useSelector((state) => state.movie.movie);

  return <MovieContainer>This is MovieCard</MovieContainer>;
}

MovieCard.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default MovieCard;
