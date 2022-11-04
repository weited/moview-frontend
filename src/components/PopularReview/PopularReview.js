import React from 'react';
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
  [theme.breakpoints.up('Laptop')]: {
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

const cards = [
  {
    img: 'https://i.ytimg.com/vi/qHy1f0yzPVI/movieposter_en.jpg',
    desc: 'The Imitation Game',
    author: 'Akinlabi Omo-Oso',
    time: '22:30',
    date: '10/10/2022',
    comment:
      'I have watched this awesome movie four times! The characters have become like old friends, thanks to Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorem fugiat autem, quo beatae ad? Nemo voluptas eos, blanditiis debitis neque adipisci error corporis esse, illo impedit similique fugit at?',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg',
    desc: 'Inception',
    author: 'Tom Charity',
    time: '15:30',
    date: '12/10/2022',
    comment:
      "I hate my dreams. They're so ... infantile.\" Heaven knows what artist Laurie Anderson would make of Christopher Nolan's first film since ...t artist Laurie Anderson would make of Christopher Nolan's first film since",
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    desc: 'The Godfather',
    author: 'James Luxford',
    time: '27:20',
    date: '09/10/2022',
    comment:
      ' Even half a century since its release, it shouldn’t be difficult to convince you why The Godfather is worth catching this weekend for its anniversary...',
  },
  {
    img: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    desc: "Schindler's list",
    author: 'Keith Garlington',
    time: '02:50',
    date: '17/10/2022',
    comment:
      'Many movies have looked at the Jewish Holocaust from a variety of different angles. There have been films... ',
  },
];

export default function PopularReview() {
  const navigate = useNavigate();

  return (
    <Section>
      <Container>
        <Heading variant="h3">Popular Reviews</Heading>
      </Container>
      <Container maxWidth="desktop">
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card} desktop={6} largeLaptop={10} sm={10} Laptop={12}>
              <Card onClick={() => navigate('/review/1')}>
                <CardMedia image={card.img} title="Image title" />
                <CardContent>
                  <Typography>{card.desc}</Typography>
                  <br />
                  <Typography>Review Author: {card.author}</Typography>
                  <br />
                  <Typography
                    sx={{
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                    }}
                  >
                    Comment: {card.comment}
                  </Typography>
                  <CardActions>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="star">
                      <StarIcon sx={{ fontSize: 28 }} />
                    </IconButton>
                    <Typography variant="body2" color="text.secondary">
                      {card.time} {card.date}
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
