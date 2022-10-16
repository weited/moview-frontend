import React from 'react';
import styled from 'styled-components';
import Comment from '../../Comment/Comment';
import ReviewDetail from './ReviewDetail';

const Container = styled.div`
  width: 55%;
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
