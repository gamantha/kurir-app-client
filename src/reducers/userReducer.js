import * as actionType from '../actions/constants';

const initialState = {
  userData: {
    name: null,
  },
  userOnLoginPage: false,
  isLoggedIn: false,
};

const userTryToRegister = (state, payload) => {
  console.log(payload);
};

const loginUser = (state) => {
  const newState = {
    ...state,
    isLoggedIn: true,
  };
  return newState;
};

const userClickLoginLabel = (state) => {
  const newState = {
    ...state,
    userOnLoginPage: true,
  };
  return newState;
};

const userClickRegisterLabel = (state) => {
  const newState = {
    ...state,
    userOnLoginPage: false,
  };
  return newState;
};

const userClickLogoutLabel = (state) => {
  const newState = {
    ...state,
    isLoggedIn: false,
  };
  return newState;
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.REGISTER_USER:
      return userTryToRegister(state, payload);
    case actionType.LOGIN_USER:
      return loginUser(state, payload);
    case actionType.USER_CLICK_LOGIN_LABEL:
      return userClickLoginLabel(state, payload);
    case actionType.USER_CLICK_REGISTER_LABEL:
      return userClickRegisterLabel(state, payload);
    case actionType.USER_CLICK_LOGOUT_LABEL:
      return userClickLogoutLabel(state, payload);
    default:
      return state;
  }
};

export default userReducer;
