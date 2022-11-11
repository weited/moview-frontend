import React from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import MovieSlimCard from './MovieSlimCard';

const Container = styled.div`
  display: flex;
  padding: 40px 0;
  /* justify-content: center; */
`;

function ReviewCreate() {
  return (
    <>
      <Container>
        <MovieSlimCard />
      </Container>
      <Editor />
    </>
  );
}

export default ReviewCreate;
