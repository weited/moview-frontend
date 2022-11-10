import React from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useSelector } from 'react-redux';
import { selectCurrentReview } from '../../../redux/slices/review';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 380px 40px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const Title = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.25;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const SubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

const Tag = styled.a`
  font-size: 18px;
  font-weight: 700;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;
const IconGroup = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
  }
`;

// TO DO: tags should come from redux and backend
const TAG_LIST = ['Tag1', 'Tag2', 'Tag3', 'Tag4'];

function ReviewTitle() {
  const review = useSelector(selectCurrentReview);
  const { title } = review || {};

  return (
    <Container>
      <Title> {title}</Title>
      <SubTitle>
        <Grid>
          {TAG_LIST.map((tag) => (
            <Tag key={tag}>#{tag} </Tag>
          ))}
        </Grid>

        <IconGroup>
          <FavoriteIcon sx={{ fontSize: { sm: 15, lg: 30 }, color: 'red' }} />
          20
          <StarIcon sx={{ fontSize: { sm: 15, lg: 30 }, color: 'yellow', marginLeft: '10px' }} />
          30
        </IconGroup>
      </SubTitle>
    </Container>
  );
}

export default ReviewTitle;
