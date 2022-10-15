import React from 'react';
import styled from 'styled-components';
import Comment from '../../../components/page/Review/Comment';
import ReviewDetail from '../../../components/page/Review/ReviewDetail';

const Container = styled.div`
  flex-grow: 1;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

function ReviewContent() {
  return (
    <Container>
      <ReviewDetail />
      <Comment />
    </Container>
  );
}

export default ReviewContent;
