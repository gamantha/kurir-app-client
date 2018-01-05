import * as actionType from '../actions/constants';

const initialState = {
  loginMsg: null,
  forgotPassMsg: {
    isLoading: false,
    msg: null,
    isSuccess: false,
  },
};

const msgFromLoginUser = (state, payload) => {
  const newState = {
    ...state,
    loginMsg: payload,
  };
  return newState;
};

const showLoadingInSendVerifCodeForgotPass = (state) => {
  const newState = {
    ...state,
    forgotPassMsg: {
      ...state.forgotPassMsg,
      isLoading: true,
    },
  };
  return newState;
};

const msgFromSendEmailForgotPassSuccess = (state, payload) => {
  console.log(payload);
  const newState = {
    ...state,
    forgotPassMsg: {
      isLoading: false,
      msg: payload,
      isSuccess: true,
    },
  };
  return newState;
};

const msgFromSendEmailForgotPassErr = (state, payload) => {
  console.log(payload);
  const newState = {
    ...state,
    forgotPassMsg: {
      isLoading: false,
      msg: payload,
      isSuccess: false,
    },
  };
  return newState;
};

const msgReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_USER:
      return msgFromLoginUser(state, payload);
    case actionType.SEND_FORGOT_PASS_VERIF_CODE_SUCCESS:
      return msgFromSendEmailForgotPassSuccess(state, payload);
    case actionType.SEND_FORGOT_PASS_VERIF_CODE_ERR:
      return msgFromSendEmailForgotPassErr(state, payload);
    case actionType.SHOW_LOADING_IN_SEND_VERIF_CODE_FORGOT_PASS:
      return showLoadingInSendVerifCodeForgotPass(state);
    default:
      return state;
  }
};

export default msgReducer;
