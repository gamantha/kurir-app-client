import Api from './api';

export default {
  post: (email) => Api.post('/api/mail/send-forgot-password-verif-code', email)
};
