import http from '../utils/http';

class CommentService {
  static getAll = () => http.get('/comments');

  static getById = (commentId) => http.get(`/comments/${commentId}`);

  static getByPostId = (postId) => http.get(`/comments/post/${postId}`);

  static create = (newComment) => http.post('/comments', newComment);

  static update = (commentId, updateComment) => http.patch(`/comments/${commentId}`, updateComment);

  static delete = (commentId) => http.delete(`/comments/${commentId}`);
}

export default CommentService;
