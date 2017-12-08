import React from 'react';
import { Container } from 'native-base';
import { Provider } from 'react-redux';

import store from './src/store';

import UserRegistration from './src/components/userRegistration';

const App = () => (
  <Provider store={store}>
    <Container>
      <UserRegistration />
    </Container>
  </Provider>
);

export default App;
