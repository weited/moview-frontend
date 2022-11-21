import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectGenreMovies, filterByGenre, selectMovie } from '../../redux/slices/movie';

const Container = styled.div(
  ({ theme }) => `
    padding: 10px 0 40px 0;
    background-color: ${theme.colors.background_grey};
    display: flex;
    justify-content: center;
    `
);
const SwiperBox = styled.div(
  ({ theme }) => `
    padding: 15px;
    border-radius: 25px;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.background_purple};
    @media (min-width:${theme.breakpoints.largeLaptop}) {
      padding: 30px;
  `
);
const SwiperCard = styled.div(
  ({ theme }) => `
      padding: 5px;
      border-radius: 20px;
      display: flex;
      width: 20%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: ${theme.colors.text_light_grey};
      background-color: ${theme.colors.background_light_purple};
      border: 1px solid ${theme.colors.background_grey};
      :hover {
        border: 2px solid ${theme.colors.background_light_grey};
      }
      @media (min-width:${theme.breakpoints.largeLaptop}) {
          padding: 20px;
  `
);
function MovieSwiper() {
  const fetchedMovies = useSelector(selectMovie);
  const movieList = useSelector(selectGenreMovies);
  const currentGenre = useSelector((state) => state.movie.currentGenre);

  const targetMovies = [
    'The Imitation Game',
    'The Shawshank Redemption',
    'Inception',
    'The Godfather',
  ];

  const movies =
    currentGenre === 'All'
      ? movieList.filter((m) => targetMovies.includes(m.name))
      : movieList.slice(0, 4);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterByGenre(currentGenre));
  }, [fetchedMovies]);

  return (
    <Container>
      <SwiperBox>
        {movies.map((movie) => (
          <SwiperCard key={movie.id} onClick={() => navigate(`movie/${movie.id}`)}>
            <img width="100%" height="auto" alt="movie poster" src={movie.posterImgUrl} />
            {movie.name}
            <br />
            {movie.rating}
          </SwiperCard>
        ))}
      </SwiperBox>
    </Container>
  );
}
export default MovieSwiper;
