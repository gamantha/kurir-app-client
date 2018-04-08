import Api from './api';

export default {
    getCode: email => Api.post('/api/user/password/send-code', email),
    checkCode: payload => Api.post('/api/user/password/check-code', payload),
    newPassword: password =>
        Api.post('/api/user/password/change?forgotpassword=true', password)
};
