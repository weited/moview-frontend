import React from 'react';
import { styled } from '@mui/material/styles';
import MovieGallery from '../../components/MovieGallery/MovieGallery';

const Main = styled('main')({
  height: '100%',
  paddingTop: '40px',
});

function HomePage() {
  return (
    <Main>
      <MovieGallery />
    </Main>
  );
}

export default HomePage;
