import React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Unstable_Grid2';
import MuiContainer from '@mui/material/Container';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import MovieCard from './MovieCard';

const Section = styled('section')({
  height: '100%',
});

const Grid = styled(MuiGrid)({
  flexGrow: 1,
});

const Container = styled(MuiContainer)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  [theme.breakpoints.up('largeLaptop')]: {
    maxWidth: '980px',
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1140px',
  },
  [theme.breakpoints.up('desktop')]: {
    maxWidth: '1400px',
  },
}));

const Heading = styled(Typography)({
  fontWeight: 700,
  marginBottom: '20px',
});

function MovieGallery() {
  const { movieList, status } = useSelector((state) => state.movie);

  return (
    <Section>
      <Container>
        <Heading variant="h2" component="h2">
          Popular Movies
        </Heading>
      </Container>
      <Container maxWidth="desktop">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container wrap="wrap">
            {(status === 'loading' ? Array.from(new Array(12)) : movieList)
              .slice(0, 12)
              .map((movie, index) => (
                <Grid key={movie?.id || index} flexGrow="1" mobile={6} laptop={3} lg={2} xs={2}>
                  <Box sx={{ mb: 5, px: '5px' }}>
                    {movie ? (
                      <MovieCard movie={movie} />
                    ) : (
                      <>
                        <Skeleton animation="wave" variant="rectangular" width={210} height={300} />
                        <Skeleton
                          animation="wave"
                          variant="rounded"
                          width={210}
                          height={60}
                          sx={{ mt: 1 }}
                        />
                      </>
                    )}
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default MovieGallery;
