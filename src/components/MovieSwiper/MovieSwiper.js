import React from 'react';
import styled from 'styled-components';

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
  const movies = [
    {
      movieName: 'The Imitation Game',
      moviePoster:
        'https://resizing.flixster.com/BkFrnkz1SCXdNNuaYHVaFkFv6IA=/206x305/v2/https://flxt.tmsimg.com/assets/p10771057_p_v12_au.jpg',
      movieRate: '9.0',
    },
    {
      movieName: 'The Shawshank Redemption',
      moviePoster:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
      movieRate: '8.4',
    },
    {
      movieName: 'V for Vendetta',
      moviePoster:
        'https://www.themoviedb.org/t/p/w440_and_h660_face/vEkIweJt73FBH8286DBoAIIctp5.jpg',
      movieRate: '7.3',
    },
    {
      movieName: 'Whiplash',
      moviePoster: 'https://flxt.tmsimg.com/assets/p10488558_p_v12_ai.jpg',
      movieRate: '9.4',
    },
  ];
  return (
    <Container>
      <SwiperBox>
        {movies.map((movie) => (
          <SwiperCard>
            <img width="100%" height="auto" alt="movie poster" src={movie.moviePoster} />
            {movie.movieName}
            <br />
            {movie.movieRate}
          </SwiperCard>
        ))}
      </SwiperBox>
    </Container>
  );
}
export default MovieSwiper;
