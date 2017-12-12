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

import { connect } from 'react-redux';

import Expo from 'expo';

import { DrawerNavigator } from 'react-navigation';

import SenderForm from '../senderForm';
import Profile from '../profile';
import UserLogin from '../userLogin';

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
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile',
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

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

export default connect(mapStateToProps, null)(RootDrawer);
