import React from 'react';
import PropTypes from 'prop-types';
import { Container, Label, Root } from 'native-base';
import { Provider, connect } from 'react-redux';
import {
  StackRouter,
  NavigationActions,
  StackNavigator,
  addNavigationHelpers,
} from 'react-navigation';
import Expo from 'expo';

import store from './src/store';

import Register from './src/components/userRegistration';
import Home from './src/components/home';
import Login from './src/components/userLogin';
import Onboarding from './src/components/onboarding';
import AppWithNavigationState from './src/components/navigator';

let token = null;

// export const AppNavigator = StackNavigator(
//   {
//     Onboarding: { screen: Onboarding },
//     Register: { screen: Register },
//   },
//   { initialRouteName: 'Onboarding' },
// );

// const AppWithNavigationState = ({ dispatch, nav }) => (
//   <Provider store={store}>
//       <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
//   </Provider>
// );

// AppWithNavigationState.propTypes = {
//   dispatch: PropTypes.func.isRequired,
//   nav: PropTypes.object.isRequired,
// };

// const mapStateToProps = state => ({
//   nav: state.nav,
// });

// export default connect(mapStateToProps)(AppWithNavigationState);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const getToken = async () => {
      try {
        const result = Expo.SecureStore.getItemAsync('token');
        return result.data;
      } catch (err) {
        return err;
      }
    };
    token = getToken();
  }

  render() {
    // if (!token) {
    //   return (
    //     <Provider store={store}>
    //       <Container>
    //         <Onboarding />
    //       </Container>
    //     </Provider>
    //   );
    // }
    return (
      <Provider store={store}>
        <Container>
          <Root>
            <AppNavigator navigation={this.props.navigation} />
            <Register navigation={this.props.navigation} />
          </Root>
        </Container>
      </Provider>
    );
    // return (
    //   <Provider store={store}>
    //     <Login />
    //   </Provider>
    // );
  }
}

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Onboarding: { screen: Onboarding },
    Register: { screen: Register },
    Login: { screen: Login },
  },
  { initialRouteName: 'Onboarding', headerMode: 'none' },
);

export default AppNavigator;
