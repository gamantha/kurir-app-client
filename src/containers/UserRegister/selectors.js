import { createSelector } from 'reselect';

/**
 * Subscribe to userRegister main reducer
 *
 * see './src/reducers/index.js'
 * @return Object
 */
export const selectUserRegistrationReducer = () => (state) => state.get('userRegister');

/**
 * Getter for isLoading object state in reducer
 * @return {object}
 */
export const getIsLoading = () =>
  createSelector(selectUserRegistrationReducer(), (state) => state.get('isLoading'));

/**
 * Getter for username object state in reducer
 * @return {object}
 */
export const getUsername = () =>
  createSelector(selectUserRegistrationReducer(), (state) => state.get('username'));

/**
 * Getter for email object state in reducer
 * @return {object}
 */
export const getEmail = () =>
  createSelector(selectUserRegistrationReducer(), (state) => state.get('email'));

/**
 * Getter for password object state in reducer
 * @return {object}
 */
export const getPassword = () =>
  createSelector(selectUserRegistrationReducer(), (state) => state.get('password'));

/**
 * Getter for repassword object state in reducer
 * @return {object}
 */
export const getRepassword = () =>
  createSelector(selectUserRegistrationReducer(), (state) => state.get('repassword'));

/**
 * Getter for registeredUser data state in reducer
 * @return {object}
 */
export const getRegisterUser = () =>
  createSelector(selectUserRegistrationReducer(), (state) => state.get('registeredUser'));
