import React, { useEffect } from 'react';
import styled from 'styled-components';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StarIcon from '@mui/icons-material/Star';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentReview } from '../../../redux/slices/review';
import { updateMovieId } from '../../../redux/slices/movie';
import ReviewService from '../../../service/review';

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

function ReviewTitle({ isLiked, setIsLiked }) {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.user);
  const review = useSelector(selectCurrentReview);
  const { id, title, tagList, movie, likesCount } = review || {};

  useEffect(() => {
    if (movie) {
      dispatch(updateMovieId(movie.id));
    }
    return () => dispatch(updateMovieId(null));
  }, [review]);

  const handleLike = async () => {
    if (!isLogin) {
      // eslint-disable-next-line no-alert
      alert('Please login');
      return;
    }
    if (isLiked) {
      try {
        const { status } = await ReviewService.dislikeReview(id);
        if (status === 204) {
          setIsLiked(false);
        }
      } catch (e) {
        // TODO
      }
    } else {
      try {
        const { status } = await ReviewService.likeReview(id);
        if (status === 201) {
          setIsLiked(true);
        }
      } catch (e) {
        // TODO
      }
    }
  };

  return (
    <Container>
      <Title> {title}</Title>
      <SubTitle>
        <Grid>{tagList && tagList.map((tag) => <Tag key={tag.id}>#{tag.name} </Tag>)}</Grid>
        {isLiked == null ? null : (
          <IconGroup>
            <IconButton onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon sx={{ fontSize: { sm: 15, lg: 30 }, color: 'red' }} />
              ) : (
                <FavoriteBorderIcon sx={{ fontSize: { sm: 15, lg: 30 } }} />
              )}
            </IconButton>
            {likesCount}
            {/* <StarIcon sx={{ fontSize: { sm: 15, lg: 30 }, color: 'yellow', marginLeft: '10px' }} />
            30 */}
          </IconGroup>
        )}
      </SubTitle>
    </Container>
  );
}

export default ReviewTitle;
