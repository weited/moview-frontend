import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieService from '../../service/movie';
import GenreService from '../../service/genre';

const initialState = {
  movieList: [],
  genreMovieList: [],
  movie: {},
  genreList: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
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
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAllMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieList = action.payload;
        state.genreMovieList = action.payload;
      })
      .addCase(fetchAllMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchAllGenres.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchAllGenres.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.genreList = action.payload;
      })
      .addCase(fetchAllGenres.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMovieByGenreId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovieByGenreId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movie = action.payload;
      })
      .addCase(fetchMovieByGenreId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { filterByGenre } = movieSlice.actions;

export const selectMovie = (state) => state.movie.movieList;
export const selectGenre = (state) => state.movie.genreList;

export default movieSlice.reducer;
