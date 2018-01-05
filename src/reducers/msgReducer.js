import * as actionType from '../actions/constants';

const initialState = {
  loginMsg: null,
  forgotPassMsg: {
    isLoading: false,
    msg: null,
    isSuccess: false,
  },
  checkVerifCodeMsg: {
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

const showLoadingInCheckVerifCodeForgotPass = (state) => {
  const newState = {
    ...state,
    checkVerifCodeMsg: {
      ...state.checkVerifCodeMsg,
      isLoading: true,
    },
  };
  return newState;
};

const msgFromCheckVerifCodeForgotPassSuccess = (state, payload) => {
  const newState = {
    ...state,
    checkVerifCodeMsg: {
      isLoading: false,
      msg: payload,
      isSuccess: true,
    },
  };
  return newState;
};

const msgFromCheckVerifCodeForgotPassErr = (state, payload) => {
  const newState = {
    ...state,
    checkVerifCodeMsg: {
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
    case actionType.SHOW_LOADING_IN_CHECK_VERIF_CODE_FORGOT_PASS:
      return showLoadingInCheckVerifCodeForgotPass(state);
    case actionType.CHECK_VERI_CODE_FORGOT_PASS_SUCCESS:
      return msgFromCheckVerifCodeForgotPassSuccess(state);
    case actionType.CHECK_VERI_CODE_FORGOT_PASS_ERR:
      return msgFromCheckVerifCodeForgotPassErr(state);
    default:
      return state;
  }
};

export default msgReducer;
