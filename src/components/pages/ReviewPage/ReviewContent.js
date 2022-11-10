import React from 'react';
import { styled } from '@mui/material/styles';
import MuiDivider from '@mui/material/Divider';
import Comment from '../../Comment/Comment';
import ReviewDetail from './ReviewDetail';

const Container = styled('div')`
  border-radius: 10px;
`;

const Divider = styled(MuiDivider)({
  margin: '60px 0',
});

function ReviewContent() {
  return (
    <Container>
      <ReviewDetail />
      <Divider variant="middle" />
      <Comment />
    </Container>
  );
}

export default ReviewContent;
