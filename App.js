import React from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/store';

import Home from './src/components/home';
import Onboarding from './src/components/onboarding';

const App = () => (
  <Provider store={store}>
    <Container>
      <Onboarding />
    </Container>
  </Provider>
);

export default App;
