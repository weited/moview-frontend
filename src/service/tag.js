import http from '../utils/http';

class TagService {
  static getAll = () => http.get('/tags');

  static getById = (tagId) => http.get(`/tags/${tagId}`);

  static create = (newTag) => http.post('/tags/createTags', newTag);

  static update = (tagId, updateTag) => http.put(`/tags/${tagId}`, updateTag);

  static delete = (tagId) => http.delete(`/tags/${tagId}`);

  static getHotTags = () => http.get('/tagconnectionpost/tags');

  static getHotTagsByMovieId = (movieId) => http.get(`/tagconnectionpost/tags/${movieId}`);

  static getTagsByUserId = (userId) => http.get(`/tags/user/${userId}`);
}

export default TagService;
