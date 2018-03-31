import { createSelector } from 'reselect';
import { toObject } from "../../helpers/utils";

/**
 * Subscribe to userLogin main reducer
 *
 * see './src/reducers/index.js'
 * @return Object
 */
export const selectUserLoginReducer = () => state => state['userLogin'];

/**
 * Getter for password object state in reducer
 * @return {object}
 */
export const getLoginInputField = () =>
    createSelector(selectUserLoginReducer(), state =>
        toObject(state['loginInputField'])
    );

/**
 * Getter for isLoadingUserLogin object state in reducer
 * @return {object}
 */
export const getIsLoadingUser = () =>
    createSelector(selectUserLoginReducer(), state =>
        state['isLoadingUserLogin']
    );

/**
 * Getter for loginData object state in reducer
 * @return {object}
 */
export const getLoginData = () =>
    createSelector(selectUserLoginReducer(), state => state['success']);

export const getTextInputFocus = () =>
    createSelector(selectUserLoginReducer(), state =>
        toObject(state['inputTextFocus'])
    );

export const getErrorMessage = () =>
    createSelector(selectUserLoginReducer(), state =>
        state['errorMessage']
    );
