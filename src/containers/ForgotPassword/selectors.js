import { createSelector } from 'reselect';

/**
 * Subscribe to main reducer with key forgotpassword
 *
 * @return object
 */
export const selectForgotPasswordReducer = () => (state) => state.get('forgotPassword');

/**
 * Getter for showLoading in reducer.
 *
 * @return object
 */
export const getShowLoading = () =>
  createSelector(selectForgotPasswordReducer(), (state) => state.get('showLoading'));

/**
 * Getter for message in reducer.
 *
 * @return object
 */
export const getStatus = () =>
  createSelector(selectForgotPasswordReducer(), (state) => state.get('status'));

/**
 * Getter for message in reducer.
 *
 * @return object
 */
export const getEmail = () =>
  createSelector(selectForgotPasswordReducer(), (state) => state.get('email'));

/**
 * Getter for isSuccess in reducer.
 *
 * @return object
 */
export const getMessage = () =>
  createSelector(selectForgotPasswordReducer(), (state) => state.get('message'));
