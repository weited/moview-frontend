import React from 'react';
import MovieGallery from '../../components/MovieGallery/MovieGallery';
import Category from '../../components/Category/Category';
import MovieSwiper from '../../components/MovieSwiper/MovieSwiper';

function HomePage() {
  return (
    <>
      <Category />
      <MovieSwiper />
      <MovieGallery />
    </>
  );
}

export default HomePage;
