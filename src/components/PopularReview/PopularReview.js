import React, { useEffect } from 'react';
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Grid,
  Typography,
  Container as MuiContainer,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReviews, selectReview } from '../../redux/slices/review';

const Section = styled('section')({
  width: '70%',
  height: '100%',
});

const Heading = styled(Typography)({
  fontWeight: '300',
});

const Container = styled(MuiContainer)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(5),
  [theme.breakpoints.up('laptop')]: {
    maxWidth: '537px',
  },
  [theme.breakpoints.up('largeLaptop')]: {
    maxWidth: '716px',
  },
  [theme.breakpoints.up('desktop')]: {
    maxWidth: '1008px',
  },
}));

const Card = styled(MuiCard)(() => ({
  height: '250px',
  display: 'flex',
  flexDirection: 'row',
  cursor: 'pointer',
  backgroundColor: '#e2e2e2',
}));

const CardMedia = styled(MuiCardMedia)(() => ({
  width: '35%',
}));

const CardContent = styled(MuiCardContent)(() => ({
  flexGrow: 1,
  width: '300px',
}));

const CardActions = styled(MuiCardActions)(() => ({
  alignSelf: 'flex-end',
  justifyContent: 'center',
}));

export default function PopularReview() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reviewList = useSelector(selectReview);

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, []);

  return (
    <Section>
      <Container>
        <Heading variant="h3">Popular Reviews</Heading>
      </Container>
      <Container maxWidth="desktop">
        <Grid container spacing={3}>
          {reviewList.length > 0 &&
            reviewList.map((review) => (
              <Grid item key={review.id} desktop={6} largeLaptop={10} sm={10} laptop={12}>
                <Card onClick={() => navigate('/review/1')}>
                  <CardMedia image={review.movie.posterImgUrl} title="Image title" />
                  <CardContent>
                    <Typography>{review.movie.name}</Typography>
                    <br />
                    <Typography>Review Author: {review.author.username}</Typography>
                    <br />
                    <Typography
                      sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                      }}
                    >
                      Comment: {review.contents}
                    </Typography>
                    <CardActions>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="star">
                        <StarIcon sx={{ fontSize: 28 }} />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {review.updatedTime}
                      </Typography>
                    </CardActions>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Section>
  );
}
