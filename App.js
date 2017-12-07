import React from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/store';

import UserOnboarding from './src/components/userOnboarding';

const App = () => (
  <Provider store={store}>
    <Container>
      <UserOnboarding />
    </Container>
  </Provider>
);

export default App;

