import * as actionType from '../actions/constants';

const initialState = {
  loginMsg: null,
  forgotPassMsg: null,
};

const msgFromLoginUser = (state, payload) => {
  const newState = {
    ...state,
    loginMsg: payload,
  };
  return newState;
};

const msgFromSendEmailForgotPass = (state, payload) => {
  console.log(payload);
  const newState = {
    ...state,
    forgotPassMsg: payload,
  };
  return newState;
};

const msgReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_USER:
      return msgFromLoginUser(state, payload);
    case actionType.SEND_FORGOT_PASS_VERIF_CODE:
      return msgFromSendEmailForgotPass(state, payload);
    default:
      return state;
  }
};

export default msgReducer;
