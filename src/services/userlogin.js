import Api from './api';

export default {
  post: (data) => Api.post('/api/user/login', data)
};
