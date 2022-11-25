import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import { fetchAllTags } from '../../../redux/slices/tag';

import ReviewCreate from '../../../components/ReviewCreate';

function NewReviewPage() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((_state) => _state.user);

  if (!isLogin) {
    return <Navigate to="/" />;
  }

  dispatch(fetchAllTags());

  return (
    <Container maxWidth="largeLaptop">
      {isLogin ? <ReviewCreate /> : <h1>Please login to create review</h1>}
    </Container>
  );
}

export default NewReviewPage;
