import { createSelector } from 'reselect';
import { toObject } from "../../helpers/utils";

/**
 * Subscribe to userRegister main reducer
 *
 * see './src/reducers/index.js'
 * @return Object
 */
export const selectUserRegistrationReducer = () => state =>
    state['userRegister'];

/**
 * Getter for isLoading object state in reducer
 * @return {object}
 */
export const getIsLoading = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state['isLoading']
    );

export const getErrorMessage = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state['errorMessage']
    );
/**
 * Getter for inputFields object state in reducer
 * @return {object}
 */
export const getInputFields = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        toObject(state['inputFields'])
    );

/**
 * Getter for inputFieldvalidation object state in reducer
 * @return {object}
 */
export const getInputFieldValidation = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        toObject(state['inputFieldValidations'])
    );

/**
 * Getter for registeredUser data state in reducer
 * @return {object}
 */
export const getRegisterUser = () =>
    createSelector(selectUserRegistrationReducer(), state =>
        state['registeredUser']
    );
