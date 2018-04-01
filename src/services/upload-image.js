import Api from './api';

export default {
    post: payload => Api.post('api/user/upload-img', null, payload),
    kurirRequest: payload => Api.post('api/proposal', payload)
};
