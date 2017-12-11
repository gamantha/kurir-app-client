import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Title,
} from 'native-base';

import { DrawerNavigator } from 'react-navigation';

import SenderForm from '../senderForm';

const HomeScreen = () => (
  <Container>
    <Header>
      <Body>
        <Title>Homepage</Title>
      </Body>
    </Header>
    <Content>
      <SenderForm />
    </Content>
  </Container>
);

const RootDrawer = DrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      drawerLabel: 'Home',
    },
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeScreen />;
  }
}

export default RootDrawer;
