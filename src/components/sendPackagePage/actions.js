/* eslint-disable */
import axios from 'axios';
import { DEV_API_URL_LOCALHOST } from 'react-native-dotenv';
import * as actionTypes from '../../actions/constants';

export const sendPackageData = requestBody => dispatch => {
    dispatch({
        type: actionTypes.SHOW_LOADING_IN_SEND_PACKAGE_FORM
    });
    axios
        .post(`${DEV_API_URL_LOCALHOST}/api/item/create`, requestBody)
        .then(res => {
            if (res.data.ok) {
                dispatch({
                    type: actionTypes.SEND_PACKAGE_FORM_SUCCESS,
                    dispatch: res.data.msg
                });
            } else {
                dispatch({
                    type: actionTypes.SEND_PACKAGE_FORM_ERR,
                    dispatch: res.data.msg
                });
            }
        });
};

export const test = () => {};
