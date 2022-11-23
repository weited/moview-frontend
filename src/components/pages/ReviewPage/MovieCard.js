/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieById } from '../../../redux/slices/movie';
import Container from './MovieAndAuthorContainer';
import OtherReviews from '../../ReviewColumn/OtherReviews';

const MovieContainer = Container;

function MovieCard() {
  const dispatch = useDispatch();

  return (
    <MovieContainer>
      <OtherReviews />
    </MovieContainer>
  );
}

// MovieCard.propTypes = {
//   movieId: PropTypes.number.isRequired,
// };

export default MovieCard;
