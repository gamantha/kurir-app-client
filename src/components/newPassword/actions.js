import axios from 'axios';

import * as actionTypes from '../../actions/constants';

export const changeUserPassword = (requestBody) => (dispatch) => {
  dispatch({
    type: actionTypes.SHOW_LOADING_IN_NEW_PASSWORD_INPUT
  });
  axios.post(`/api/mail/change-password`, requestBody).then((res) => {
    if (res.data.ok) {
      dispatch({
        type: actionTypes.CHANGE_USER_PASSWORD_SUCCESS,
        payload: res.data.msg
      });
    } else {
      dispatch({
        type: actionTypes.CHANGE_USER_PASSWORD_ERR,
        payload: res.data.msg
      });
    }
  });
};

export const test = () => {};
