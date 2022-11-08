import http from '../utils/http';

class UserService {
  constructor(email, username, firstName, lastName, password, profileImgUrl) {
    this.email = email;
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.profileImgUrl = profileImgUrl;
  }

  static getAll = () => http.get('/users');

  static getById = (userId) => http.get(`/users/${userId}`);

  static login = ({ email, password }) => http.post('/users/login', { email, password });

  static register = (newUser) => http.post('/users/register', newUser);

  static delete = (userId) => http.delete(`/users/${userId}`);
}

export default UserService;
