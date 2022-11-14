import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ReviewService from '../../service/review';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  reviewList: [],
  currentReview: null,
  status: IDLE,
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
  reducers: {
    findById: (state, { payload }) => {
      state.currentReview = state.reviewList.find(({ id }) => id === +payload) || null;
    },
    cleanCurrent: (state) => {
      state.currentReview = null;
    },
  },
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
        state.currentReview = action.payload;
      })
      .addCase(fetchReviewById.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const { findById, cleanCurrent } = reviewSlice.actions;

export const selectReview = (state) => state.review.reviewList;
export const selectCurrentReview = (state) => state.review.currentReview;

export default reviewSlice.reducer;
