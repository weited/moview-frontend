import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Grid,
  Typography,
  Container as MuiContainer,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import TableRowsIcon from '@mui/icons-material/TableRows';
import GridViewIcon from '@mui/icons-material/GridView';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllReviews, selectReview } from '../../redux/slices/review';

const Section = styled('section')({
  width: '70%',
  height: '100%',
});

const Heading = styled(Typography)({
  paddingLeft: '5em',
  display: 'flex',
  justifyContent: 'space-between',
});

const Container = styled(MuiContainer)(({ theme }) => ({
  marginLeft: '10%',
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

const Card1 = styled(MuiCard)(() => ({
  height: '300px',
  display: 'flex',
  flexDirection: 'row',
  cursor: 'pointer',
  backgroundColor: '#e2e2e2',
}));

const Card2 = styled(MuiCard)(() => ({
  height: '220px',
  display: 'flex',
  cursor: 'pointer',
}));

const CardMedia1 = styled(MuiCardMedia)(() => ({
  width: '40%',
  height: 'auto',
}));

const CardMedia2 = styled(MuiCardMedia)(() => ({
  width: '20%',
  height: 'auto',
}));

const CardContent = styled(MuiCardContent)(() => ({
  flexGrow: 1,
  width: '75%',
}));

const CardActions1 = styled(MuiCardActions)(() => ({
  alignSelf: 'flex-end',
  justifyContent: 'center',
}));

const CardActions2 = styled(MuiCardActions)(() => ({
  alignSelf: 'flex-end',
  display: 'inline',
}));

const View = styled('span')(() => ({}));

export default function PopularReview() {
  const navigate = useNavigate();
  const [shouldDisplayList, setShouldDisplayList] = useState(false);
  const onListClicked = useCallback(() => {
    setShouldDisplayList(true);
  }, [setShouldDisplayList]);
  const dispatch = useDispatch();
  const reviewList = useSelector(selectReview);

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, []);

  const onGridClicked = useCallback(() => {
    setShouldDisplayList(false);
  }, [setShouldDisplayList]);
  const isGridViewDisabled = shouldDisplayList === false;
  const isListViewDisabled = shouldDisplayList === true;
  return (
    <Section>
      <Heading variant="h4">
        Popular Reviews
        <View>
          <IconButton
            aria-label="display as grids"
            onClick={onGridClicked}
            disabled={isGridViewDisabled}
          >
            <GridViewIcon />
          </IconButton>
          <IconButton
            aria-label="display as slices"
            onClick={onListClicked}
            disabled={isListViewDisabled}
          >
            <TableRowsIcon />
          </IconButton>
          <Button>Sort By</Button>
        </View>
      </Heading>
      {shouldDisplayList === false ? (
        <Container maxWidth="80%">
          <Grid container spacing={4}>
            {reviewList.map((review) => (
              <Grid item key={review.id} xs={12} sm={6} md={6}>
                <Card1 onClick={() => navigate('/review/1')}>
                  <CardMedia1 image={review.movie.posterImgUrl} title="Image title" />
                  <CardContent>
                    <Typography variant="h5">{review.movie.name}</Typography>
                    <br />
                    <Typography variant="h6">Review Author: {review.author.username}</Typography>
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
                    <CardActions1>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="star">
                        <StarIcon sx={{ fontSize: 28 }} />
                      </IconButton>
                      <Typography variant="body2" color="text.secondary">
                        {review.updatedTime}
                      </Typography>
                    </CardActions1>
                  </CardContent>
                </Card1>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}

      {shouldDisplayList === true ? (
        <Container maxWidth="md">
          <Grid container spacing={2}>
            {reviewList.map((review) => (
              <Grid item key={review.id} xs={12} sm={6} md={12}>
                <Card2 onClick={() => navigate('/review/1')}>
                  <CardMedia2 image={review.movie.posterImgUrl} title="Image title" />
                  <CardContent>
                    <Typography>
                      <Typography variant="h5" display="inline">
                        {review.movie.name}
                      </Typography>
                      <CardActions2>
                        <IconButton aria-label="add to favorites">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="star">
                          <StarIcon sx={{ fontSize: 28 }} />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" display="inline">
                          {review.updatedTime}
                        </Typography>
                      </CardActions2>
                    </Typography>
                    <br />
                    <Typography variant="h6">Review Author: {review.author.username}</Typography>
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
                  </CardContent>
                </Card2>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
    </Section>
  );
}
