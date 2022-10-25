import React from 'react';
import styled from 'styled-components';
// import { useParams} from 'react-router-dom';
// import { useEffect, useState } from 'react';

const Container = styled.div(
  ({ theme }) => `
    padding: 20px 20px 0 20px;
    background-color: ${theme.colors.background_grey};
    display: flex;
    justify-content: center;
    `
);

const CategoryBar = styled.div(
  ({ theme }) => `
    align-content: center;
    display: flex;
    flex-direction: row;
    width: 60%;
    gap: 5px;
    padding: 1px;
    justify-content: space-around;
    @media (min-width:${theme.breakpoints.largeLaptop}) {
      gap: 20px;
      padding: 5px;
    `
);

const CategoryItem = styled.div(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 600;
  padding: 3px 6px;
  :hover {
    border-radius: 10px;
    background-color: ${theme.colors.category_highlight_grey};
  }`
);

function Category() {
  const genres = [
    'All',
    'Action',
    'Comedy',
    'Drama',
    'Fantasy',
    'Mystery',
    'Sci-Fi',
    'Animation',
    'Thriller',
  ];

  return (
    <div>
      <Container>
        <CategoryBar>
          {genres.map((genre) => (
            <CategoryItem>{genre}</CategoryItem>
          ))}
        </CategoryBar>
      </Container>
    </div>
  );
}

export default Category;
