import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Router, Scene, Actions } from 'react-native-router-flux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import UserRegister from './src/containers/UserRegister';
// import SendPackagePage from './src/components/sendPackagePage';
import UserLogin from './src/containers/UserLogin';
import Onboarding from './src/components/Onboarding';
import OnEnterOnboarding from './src/components/Onboarding/onEnter';
import ForgotPassword from './src/containers/ForgotPassword';
import Profile from './src/containers/Profile';
// import VerifCodeInput from './src/components/verifCode';
// import AppWithNavigationState from './src/navigators';

const RouterWithRedux = connect()(Router);

class App extends Component {
  onBackPress = () => {
    if (Actions.state.index === 0) {
      return false;
    }
    Actions.pop();
    return true;
  };
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux backAndroidHandler={this.onBackPress}>
          <Scene key="root" hideNavBar>
            <Scene
              key="onboarding"
              component={Onboarding}
              title="onboarding"
              initial
              onEnter={OnEnterOnboarding}
            />
            <Scene key="userRegister" component={UserRegister} title="register" type="reset" />
            <Scene key="userLogin" component={UserLogin} title="userLogin" type="reset" />
            <Scene key="forgotPassword" component={ForgotPassword} title="forgotPassword" />
            <Scene key="profile" component={Profile} title="profile" />
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

export default App;
