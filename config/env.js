const config = require('./development').default;

const API_BASE_URL = config.DEV_API_URL_LOCALHOST;
// export const API_BASE_URL = config.DEV_API_URL_HEROKU;
export default API_BASE_URL;
