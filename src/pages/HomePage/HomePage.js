import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from '../../components/Category/Category';
import MovieSwiper from '../../components/MovieSwiper/MovieSwiper';
import PopularReview from '../../components/PopularReview/PopularReview';
import TrendingTag from '../../components/TrendingTag/TrendingTag';
import TagService from '../../service/tag';

const Main = styled('main')({
  height: '100%',
});

const TrendingTagAndReview = styled.div`
  display: flex;
`;

function HomePage() {
  const [TrendingTags, setTrendingTags] = useState([]);
  useEffect(() => {
    async function getTags() {
      try {
        const tags = await TagService.getHotTags();
        setTrendingTags(tags.data);
      } catch {
        // do nothing
      }
    }
    getTags();
  }, []);

  return (
    <Main>
      <Category />
      <MovieSwiper />
      <TrendingTagAndReview>
        <PopularReview />
        <TrendingTag
          tag1={TrendingTags[0] && TrendingTags[0].name}
          tag2={TrendingTags[1] && TrendingTags[1].name}
          tag3={TrendingTags[2] && TrendingTags[2].name}
          tag4={TrendingTags[3] && TrendingTags[3].name}
          tag5={TrendingTags[4] && TrendingTags[4].name}
          tag6={TrendingTags[5] && TrendingTags[5].name}
        />
      </TrendingTagAndReview>
    </Main>
  );
}

export default HomePage;
