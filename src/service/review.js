import http from '../utils/http';

class ReviewService {
  constructor(title, contents) {
    this.title = title;
    this.contents = contents;
  }

  static getAll = () => http.get('/posts');

  static getById = (reviewId) => http.get(`/posts/${reviewId}`);

  static create = (newReview) => http.post('/posts', newReview);

  static updateTitleAndContents(reviewId) {
    return http.patch(`/posts/${reviewId}`, { title: this.title, contents: this.contents });
  }

  static delete = (reviewId) => http.delete(`/posts/${reviewId}`);

  static reactions = (reviewId) => http.get(`/posts/${reviewId}/reactions`);

  static likeReview = (reviewId) => http.post(`/posts/${reviewId}/like`);

  static dislikeReview = (reviewId) => http.delete(`/posts/${reviewId}/dislike`);
}

export default ReviewService;
