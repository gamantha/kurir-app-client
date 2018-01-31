import Api from './api';

export default {
  post: (email) => Api.post('/api/mail/sent-forgot-pass-code', email)
};
