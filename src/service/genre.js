import http from '../utils/http';

class GenreService {
  static getAll = () => http.get('/genres');

  static getById = (genreId) => http.get(`/genres/${genreId}`);

  static create = (newGenre) => http.post('/genres', newGenre);

  static update = (genreId, updateGenre) => http.put(`/genres/${genreId}`, updateGenre);

  static delete = (genreId) => http.delete(`/genres/${genreId}`);
}

export default GenreService;
