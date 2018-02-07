import { createSelector } from 'reselect';

/**
 * Subscribe to userLogin main reducer
 *
 * see './src/reducers/index.js'
 * @return Object
 */
export const selectUserLoginReducer = () => (state) => state.get('userLogin');

/**
 * Getter for password object state in reducer
 * @return {object}
 */
export const getLoginInputField = () =>
  createSelector(selectUserLoginReducer(), (state) => state.get('loginInputField').toJS());

/**
 * Getter for isLoadingUserLogin object state in reducer
 * @return {object}
 */
export const getIsLoadingUser = () =>
  createSelector(selectUserLoginReducer(), (state) => state.get('isLoadingUserLogin'));

/**
 * Getter for loginData object state in reducer
 * @return {object}
 */
export const getLoginData = () =>
  createSelector(selectUserLoginReducer(), (state) => state.get('loginData'));

export const getErrorMessage = () =>
  createSelector(selectUserLoginReducer(), (state) => state.get('errorMessage'));
