import Api from './api';

export default {
  post: ({ payload }) => Api.post('/api/user/login', payload)
};
