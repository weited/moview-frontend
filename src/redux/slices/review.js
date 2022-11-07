import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ReviewService from '../../service/review';

const initialState = {
  reviewList: [],
  review: {},
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchAllReviews = createAsyncThunk('review/fetchAllReviews', async () => {
  const res = await ReviewService.getAll();
  return res.data;
});

export const fetchReviewById = createAsyncThunk('review/fetchReviewById', async (reviewId) => {
  const res = await ReviewService.getById(reviewId);
  return res.data;
});

export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllReviews.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reviewList = action.payload;
      })
      .addCase(fetchAllReviews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchReviewById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchReviewById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.review = action.payload;
      })
      .addCase(fetchReviewById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectReview = (state) => state.review.reviewList;

export default reviewSlice.reducer;
