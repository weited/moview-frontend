import http from '../utils/http';

class MovieService {
  static getAll = () => http.get('/movies');

  static getById = (movieId) => http.get(`/movies/${movieId}`);

  static getByGenreId = (genreId) => http.get(`/movies/genre/${genreId}`);

  static create = (newMovie) => http.post('/movies', newMovie);

  static update = (movieId, updateMovie) => http.put(`/movies/${movieId}`, updateMovie);

  static delete = (movieId) => http.delete(`/movies/${movieId}`);
}

export default MovieService;
