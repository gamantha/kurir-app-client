import * as actionType from '../actions/constants';

const initialState = {
  userData: {
    name: null,
  },
};

const userTryToRegister = (state, payload) => {
  console.log(payload);
};

const loginUser = (state, payload) => {
  console.log(payload);
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionType.REGISTER_USER:
      return userTryToRegister(state, payload);
    case actionType.LOGIN_USER:
      return loginUser(state, payload);
    default:
      return state;
  }
};

export default userReducer;
