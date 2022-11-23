import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import MovieCard from '../../components/pages/ReviewPage/MovieCard';
import AuthorCard from '../../components/pages/ReviewPage/AuthorCard';
import ReviewContent from '../../components/pages/ReviewPage/ReviewContent';
import ReviewTitle from '../../components/pages/ReviewPage/ReviewTitle';
import { fetchReviewById } from '../../redux/slices/review';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background_lightest_grey};
  display: flex;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const CenterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin: 0 20px;
  padding-bottom: 40px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  width: 100%;
  align-items: flex-start;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
function Review() {
  const { reviewId } = useParams();
  const dispatch = useDispatch();
  dispatch(fetchReviewById(reviewId));

  return (
    <Container>
      <CenterWrapper>
        <ReviewTitle />
        <Content>
          <MovieCard movieId={1} />
          <ReviewContent />
          <AuthorCard userId={1} />
        </Content>
      </CenterWrapper>
    </Container>
  );
}

export default Review;
