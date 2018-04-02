import Api from './api';

export default {
    getAirPort: query => Api.get(`/api/airport?name=${query}&iso_country=ID`),
    createItem: payload => Api.get(`/api/item`, null, payload)
};
