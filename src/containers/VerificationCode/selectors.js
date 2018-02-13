import { createSelector } from 'reselect';

/**
 * Subscribe to verificationCode main reducer
 *
 * see './src/reducers/index.js'
 * @return {Object}
 */
export const selectVerificationCodeReducer = () => state =>
    state.get('verificationCode');

/**
 * Getter for isLoading object state in reducer
 * @return {object}
 */
export const getCode = () =>
    createSelector(selectVerificationCodeReducer(), state => state.get('code'));

/**
 * Getter for isLoading object state in reducer
 * @return {object}
 */
export const getIsLoading = () =>
    createSelector(selectVerificationCodeReducer(), state =>
        state.get('isLoading')
    );

/**
 * Getter for verificationSuccess object state in reducer
 * @return {object}
 */
export const getMessage = () =>
    createSelector(selectVerificationCodeReducer(), state =>
        state.get('statusMessage').toJS()
    );
