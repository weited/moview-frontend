import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import TagService from '../../service/tag';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  tagList: [],
  currentTag: null,
  status: IDLE,
  error: null,
};

export const fetchAllTags = createAsyncThunk('tag/fetchAllTags', async () => {
  const res = await TagService.getAll();
  return res.data;
});

export const tagSlice = createSlice({
  name: 'tag',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTags.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchAllTags.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.tagList = action.payload;
      })
      .addCase(fetchAllTags.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const selectTags = (state) => state.tag.tagList;

export default tagSlice.reducer;
