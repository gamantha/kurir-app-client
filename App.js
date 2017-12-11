import React from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/store';

import UserRegistration from './src/components/userRegistration';
import Home from './src/components/home';

const App = () => (
  <Provider store={store}>
    <Container>
      <Home />
    </Container>
  </Provider>
);

export default App;
