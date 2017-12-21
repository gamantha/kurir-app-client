import { NavigationActions } from 'react-navigation';
import initialNavState from '../components/navigator/actions';
import * as actionType from '../actions/constants';
import { AppNavigator } from '../components/navigator/';

// const initialState = {
//   tes: false,
// };

// const navReducer = (state, action) => {
//   const newState = AppNavigator.router.getStateForAction(action, state);
//   return newState || state;
// };

const nav = () => (state = initialNavState, { type, payload }) => {
  let nextState;
  switch (type) {
    case actionType.REGISTER_ROUTE:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Register' }),
        state,
      );
      break;
    default:
      return nextState || state;
  }
};

export default nav;
