import Api from './api';

export default {
    post: ({ payload }) => Api.post('/api/user/login', payload),
    fbLogin: data => Api.post('/api/facebook/login', data),
    googleLogin: data => Api.post('/api/google/login', data),
    refresh: data => Api.post('/api/user/refreshtoken', data)
};
