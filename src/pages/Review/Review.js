import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ReviewTitle from '../../components/pages/ReviewPage/ReviewTitle';
import MovieCard from '../../components/pages/ReviewPage/MovieCard';
import AuthorCard from '../../components/pages/ReviewPage/AuthorCard';
import ReviewContent from '../../components/pages/ReviewPage/ReviewContent';

const Container = styled.div`
  background-color: ${(props) => props.theme.palette.primary.background_light_yellow};
  min-height: 100vh;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
function Review() {
  // TO DO: use this id from path fetch post from backend
  // eslint-disable-next-line no-unused-vars
  const { reviewId } = useParams();

  return (
    <Container>
      <ReviewTitle title="This is a review" />
      <Content>
        <MovieCard movieId={1} />
        <ReviewContent />
        <AuthorCard userId={1} />
      </Content>
    </Container>
  );
}

export default Review;
