import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectGenre, filterByGenre } from '../../redux/slices/movie';

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
  ({ theme, active }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-weight: 600;
  padding: 3px 6px;
  white-space: nowrap;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${active && theme.colors.category_highlight_grey};
  :hover {
    border-radius: 10px;
    background-color: ${theme.colors.category_highlight_grey};
  }`
);

function Category() {
  const dispatch = useDispatch();
  const genreList = useSelector(selectGenre);
  const currentGenre = useSelector((state) => state.movie.currentGenre);

  // TODO: 临时放置9个风格 第十个风格暂时没有电影 是空的
  const genres = [{ name: 'All' }, ...genreList].slice(0, 9);

  const handleClick = (genreName) => {
    dispatch(filterByGenre(genreName));
  };

  return (
    <Container>
      <CategoryBar>
        {genres.map((genre) => (
          <CategoryItem
            key={genre.name}
            active={genre.name === currentGenre}
            onClick={() => handleClick(genre.name)}
          >
            {genre.name}
          </CategoryItem>
        ))}
      </CategoryBar>
    </Container>
  );
}

export default Category;
