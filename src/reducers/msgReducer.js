import * as actionType from '../actions/constants';

const initialState = {
  loginMsg: null,
};

const msgFromLoginUser = (state, payload) => {
  const newState = {
    ...state,
    loginMsg: payload,
  };
  return newState;
};

const msgReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.LOGIN_USER:
      return msgFromLoginUser(state, payload);
    default:
      return state;
  }
};

export default msgReducer;
