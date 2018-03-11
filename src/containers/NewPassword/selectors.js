import { createSelector } from 'reselect';

/**
 * Subscribe to userLogin main reducer
 *
 * see './src/reducers/index.js'
 * @return Object
 */
export const selectNewPasswordReducer = () => state => state.get('newPassword');

/**
 * Getter for password object state in reducer
 * @return {object}
 */

export const getNewPasswordField = () =>
    createSelector (selectNewPasswordReducer(), state=>
        state.get('newPasswordField').toJS()
    );

export const getTextInputFocus = () =>
    createSelector ( selectNewPasswordReducer(), state=>
        state.get('inputTextFocus').toJS()
    );

export const getIsLoadingPassword = () =>
    createSelector ( selectNewPasswordReducer (), state =>
        state.get('isLoadingNewPassword').toJS()
    );

export const getNewPasswordSuccess = () =>
    createSelector ( selectNewPasswordReducer (), state =>
        state.get('newPasswordSuccess').toJS()
    );

export const getNewPasswordError = () =>
    createSelector ( selectNewPasswordReducer (), state =>
        state.get('newPasswordError').toJS()
    );