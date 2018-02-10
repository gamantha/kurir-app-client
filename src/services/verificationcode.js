import Api from './api';

export default {
    post: data => Api.post('/api/mail/check-forgot-code', data)
};
