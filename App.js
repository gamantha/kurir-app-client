import './src/reactoron-config';
import Reactotron from 'reactotron-react-native';
import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import { connect, Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/store';

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
