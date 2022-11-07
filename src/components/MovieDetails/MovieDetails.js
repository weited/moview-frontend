import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchAllMovies } from '../../redux/slices/movie';

function MovieDetails() {
  const { movieId } = useParams();
  const { movieList, status } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const Div = styled.div``;
  const H2 = styled.h2``;
  const H3 = styled.h3``;
  const H4 = styled.h4``;
  const Container = styled.div(
    ({ theme }) => `
      padding: 30px;
      background-color: ${theme.colors.background_white};
      display: flex;
      justify-content: center;
    `
  );

  const Card = styled.div(
    ({ theme }) => `
      border-radius: 10px;
      height: 70%;
      width: 60%;
      background-color: ${theme.colors.background_white};
      @media (min-width:${theme.breakpoints.largeLaptop}) {
        padding: 20px;
    `
  );

  const Information = styled.div(
    ({ theme }) => `
      display: flex;
      justify-content: space-around;
      color: ${theme.colors.background_black};
      padding: 20px 80px 10px;
      align-items: center;
    `
  );

  const Heading = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const Button = styled.button(
    ({ theme }) => `
      display: flex inline;
      align-items: center;
      background-color: ${theme.colors.background_purple};
      border: 0px;
      border-radius: 20px;
      width: 20%;
      height: 3%;
      padding: 5px;
      margin: 20px;
      color: white;
      cursor: pointer;
    `
  );

  const Image = styled.img`
    width: 170px;
    padding: 15px;
    border-radius: 10px;
  `;

  const Content = styled.div(
    ({ theme }) => `
      display: flex;
      color: ${theme.colors.background_black};
      margin: 20px;
      justify-content: center;
    `
  );

  const Introduction = styled.div(
    ({ theme }) => `
      background-color: ${theme.colors.background_light_grey};
      margin: 10px;
      padding: 10px 20px;
      border-radius: 20px;
      width: 70%;
      height: 350px;
    `
  );

  const Review = styled.div(
    ({ theme }) => `
      background-color: ${theme.colors.background_light_grey};
      padding: 10px;
      margin: 10px;
      width: 25%;
      border-radius: 6px;
    `
  );

  const Tags = styled.div(
    ({ theme }) => `
      background-color: ${theme.colors.background_grey};
      padding: 10px 20px;
      margin: 8px 0px;
      width: 100%;
      border-radius: 10px;
    `
  );
  const movie = movieList.find((movieItem) => {
    const result = movieItem.id === parseInt(movieId, 10);
    return result;
  });
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, []);
  if (status === 'loading') {
    return <>Loading...</>;
  }
  if (movie === undefined) {
    return <>Movie not found</>;
  }

  const { actor, description, director, genre, name, posterImgUrl, rating, year } = movie;
  return (
    <Container>
      <Card>
        <Information>
          <Image src={posterImgUrl} alt={name} />
          <Div>
            <Heading>
              <H2>{name}</H2>
              <H2>{rating}</H2>
              <Button>Create My Review</Button>
            </Heading>
            <H3>
              {genre.name} | {year}
            </H3>
            <H4>
              {director} | {actor}
            </H4>
          </Div>
        </Information>

        <Content>
          <Introduction>
            <H4>Introduction:</H4>
            {description}
          </Introduction>
          <Review>
            <Tags>Tag1</Tags>
            <Tags>Tag2</Tags>
            <Tags>Tag3</Tags>
            <Tags>Tag4</Tags>
            <Tags>Tag5</Tags>
            <Tags>Tag6</Tags>
          </Review>
        </Content>
      </Card>
    </Container>
  );
}

export default MovieDetails;
