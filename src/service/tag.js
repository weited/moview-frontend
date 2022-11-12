import http from '../utils/http';

class TagService {
  static getHotTags = () => http.get('/tagconnectionpost/tags');

  static getHotTagsByMovieId = (movieId) => http.get(`/tagconnectionpost/tags/${movieId}`);

  static getTagsByUserId = (userId) => http.get(`/tags/user/${userId}`);
}

export default TagService;
