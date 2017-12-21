import React from 'react';
import PropTypes from 'prop-types';
import Label from 'native-base';
import { connect } from 'react-redux';
import { StackRouter, addNavigationHelpers, StackNavigator } from 'react-navigation';

import Register from '../userRegistration';
import Onboarding from '../onboarding';

export const AppNavigator = StackNavigator(
  {
    Onboarding: { screen: Onboarding },
    Register: { screen: Register },
  },
  {
    initialRouteName: 'Onboarding',
    headerMode: 'none',
  },
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({
//   navReducer: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);
