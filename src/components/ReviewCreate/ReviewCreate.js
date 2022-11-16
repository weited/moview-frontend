import React from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import MovieSlimCard from './MovieSlimCard';

const Container = styled.div`
  /* display: flex; */
  margin: 20px 0;
  padding: 40px;
  /* justify-content: center; */
  background-color: #ffffff;
  border-radius: 16px;
`;

function ReviewCreate() {
  return (
    <>
      <Container>
        <MovieSlimCard />
      </Container>
      <Container>
        <Editor />
      </Container>
    </>
  );
}

export default ReviewCreate;
