import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Skeleton from '@mui/material/Skeleton';
import Editor from './Editor';
import MovieSlimCard from './MovieSlimCard';
import MovieService from '../../service/movie';

const Container = styled.div`
  /* display: flex; */
  margin: 20px 0;
  padding: 40px;
  /* justify-content: center; */
  background-color: #ffffff;
  border-radius: 16px;
`;

function ReviewCreate() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieById = async () => {
      const { data } = await MovieService.getById(movieId);
      setMovie(data);
      setLoading(false);
    };
    fetchMovieById();
  }, []);

  return (
    <>
      <Container>
        {loading && <Skeleton variant="rounded" width={890} height={230} />}
        {movie && <MovieSlimCard movie={movie} />}
      </Container>
      <Container>
        {loading && <Skeleton variant="rounded" width={890} height={540} />}
        {movie && <Editor movie={movie} />}
      </Container>
    </>
  );
}

export default ReviewCreate;
