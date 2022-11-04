import React from 'react';
import Category from '../../components/Category/Category';
import MovieSwiper from '../../components/MovieSwiper/MovieSwiper';
import PopularReview from '../../components/PopularReview/PopularReview';

function HomePage() {
  return (
    <>
      <Category />
      <MovieSwiper />
      <PopularReview />
    </>
  );
}

export default HomePage;
