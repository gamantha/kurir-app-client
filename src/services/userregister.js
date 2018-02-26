import Api from './api';

export default {
    post: data => Api.post('/api/user/create', data),
    fbRegister: data => Api.post('/api/facebook/register', data)
};
