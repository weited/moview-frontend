import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieService from '../../service/movie';

const initialState = {
  movieList: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchAllMovies = createAsyncThunk('movie/fetchAllMovies', async () => {
  const res = await MovieService.getAll();
  return res.data;
});

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieList = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectMovie = (state) => state.movie.movieList;

export default movieSlice.reducer;
