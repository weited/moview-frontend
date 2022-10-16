import React from 'react';
import styled from 'styled-components';

const Container = styled.div(
  ({ theme }) => `
    @media (min-width:${theme.breakpoints.largeLaptop}) {
  }
    `
);

function ReviewDetail() {
  return <Container>ReviewDetail</Container>;
}

export default ReviewDetail;
