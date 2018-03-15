import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { connect, Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

import UserRegister from './src/containers/UserRegister';
// import SendPackagePage from './src/components/sendPackagePage';
import UserLogin from './src/containers/UserLogin';
import Onboarding from './src/components/Onboarding';
import ForgotPassword from './src/containers/ForgotPassword';
import ChangePassword from './src/components/changePassword';
import EditProfile from './src/components/EditProfile';

import { Kurir } from './src/routes';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <SafeAreaView style={{ flex: 1 }}>
                    <Kurir />
                </SafeAreaView>
            </Provider>
        );
    }
}

export default App;
