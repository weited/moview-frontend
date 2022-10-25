import React from 'react';
import MovieGallery from '../../components/MovieGallery/MovieGallery';
import Category from '../../components/Category/Category';
import MovieSwiper from '../../components/MovieSwiper/MovieSwiper';
import PopularReview from '../../components/PopularReview/PopularReview';

function HomePage() {
  return (
    <>
      <Category />
      <MovieSwiper />
      <MovieGallery />
      <PopularReview />
    </>
  );
}

export default HomePage;
