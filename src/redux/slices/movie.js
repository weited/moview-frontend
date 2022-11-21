import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieService from '../../service/movie';
import GenreService from '../../service/genre';
import { IDLE, FETCH_LOADING, FETCH_SUCCEEDED, FETCH_FAILED } from '../../constants/fetchStatus';

const initialState = {
  movieList: [],
  genreMovieList: [],
  currentGenre: 'All',
  movie: {},
  genreList: [],
  status: IDLE,
  error: null,
};

export const fetchAllMovies = createAsyncThunk('movie/fetchAllMovies', async () => {
  const res = await MovieService.getAll();
  return res.data;
});

export const fetchMovieById = createAsyncThunk('movie/fetchMovieById', async (movieId) => {
  const res = await MovieService.getById(movieId);
  return res.data;
});

export const fetchAllGenres = createAsyncThunk('movie/fetchAllGenres', async () => {
  const res = await GenreService.getAll();
  return res.data;
});
export const fetchMovieByGenreId = createAsyncThunk(
  'movie/fetchMovieByGenreId',
  async (genreId) => {
    const res = await MovieService.getByGenreId(genreId);
    return res.data;
  }
);

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    filterByGenre: (state, { payload }) => {
      state.currentGenre = payload;
      if (payload === 'All') {
        state.genreMovieList = [...state.movieList];
      } else {
        state.genreMovieList = state.movieList.filter((movie) => movie.genre.name === payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllMovies.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.movieList = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchAllGenres.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchAllGenres.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.genreList = action.payload;
      })
      .addCase(fetchAllGenres.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      })
      .addCase(fetchMovieByGenreId.pending, (state) => {
        state.status = FETCH_LOADING;
        state.error = null;
      })
      .addCase(fetchMovieByGenreId.fulfilled, (state, action) => {
        state.status = FETCH_SUCCEEDED;
        state.movie = action.payload;
      })
      .addCase(fetchMovieByGenreId.rejected, (state, action) => {
        state.status = FETCH_FAILED;
        state.error = action.error.message;
      });
  },
});

export const { filterByGenre, changeGenre } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movieList;
export const selectGenre = (state) => state.movie.genreList;
export const selectGenreMovies = (state) => state.movie.genreMovieList;

export default movieSlice.reducer;
