import { createSelector } from 'reselect';

/**
 * Subscribe to userRegister main reducer
 *
 * see './src/reducers/index.js'
 * @return Object
 */
export const selectUserRegistrationReducer = () => state =>
    state.get('userRegister');

/**
 * Getter for isLoading object state in reducer
 * @return {object}
 */
export const getIsLoading = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state.get('isLoading')
    );

export const getErrorMessage = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state.get('errorMessage')
    );
/**
 * Getter for inputFields object state in reducer
 * @return {object}
 */
export const getInputFields = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state.get('inputFields').toJS()
    );

/**
 * Getter for inputFieldvalidation object state in reducer
 * @return {object}
 */
export const getInputFieldValidation = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state.get('inputFieldValidations').toJS()
    );

/**
 * Getter for registeredUser data state in reducer
 * @return {object}
 */
export const getRegisterUser = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state.get('registeredUser').toJS()
    );
