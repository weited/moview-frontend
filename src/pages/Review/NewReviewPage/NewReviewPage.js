import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';

import ReviewCreate from '../../../components/ReviewCreate';

function NewReviewPage() {
  console.log('start');
  console.log(useLocation());

  const { state } = useLocation();

  const { movie } = state || {};

  console.log(movie);

  return (
    <Container maxWidth="largeLaptop">
      {(movie && <ReviewCreate />) || <p>Please create review from movie page</p>}
    </Container>
  );
}

export default NewReviewPage;
