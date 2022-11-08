import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ReviewService from '../../service/review';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  reviewList: [],
  review: {},
  status: IDLE, // 'idle' | FETCH_LOADING | FETCH_SUCCEEDED | FETCH_FAILED
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
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.reviewList = action.payload;
      })
      .addCase(fetchAllReviews.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchReviewById.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchReviewById.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.review = action.payload;
      })
      .addCase(fetchReviewById.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectReview = (state) => state.review.reviewList;

export default reviewSlice.reducer;
