import Api from './api';

export default {
    post: email => Api.post('/api/user/password/send-code', email)
};
