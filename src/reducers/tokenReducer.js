/**
 * This is special reducer for access token only
 */
import SInfo from 'react-native-sensitive-info';
import { fromJS } from 'immutable';
// import { createSelector } from 'reselect';

export const ACCESS_TOKEN = 'src/reducers/tokenReducer/ACCESS_TOKEN';

/**
 * TODO Change this to redux-persist reducer later
 */
export function saveTokenData({ accessToken, refreshToken }) {
  SInfo.setItem('accessToken', accessToken, {});
  SInfo.setItem('refreshToken', refreshToken, {});
}

const initialState = fromJS({
  tokenData: {}
});

export default function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case ACCESS_TOKEN:
      return state.set('tokenData', action.payload);
    default:
      return state;
  }
}

// const selectTokenReducer = () => (state) => state.get('token');
//
// export const getTokenData = () =>
//   createSelector(selectTokenReducer(), (state) => state.get('tokenData').toJS());
