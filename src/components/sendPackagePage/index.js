/* eslint-disable */
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
  Title
} from 'native-base';

import { View } from 'react-native';

import StepIndicator from 'react-native-step-indicator';

import Expo from 'expo';

import { DrawerNavigator } from 'react-navigation';

import { connectWithStore } from '../../helpers/utils';
import store from '../../store';
import Profile from '../profile';
import SendItemForms from './forms';

const indicatorStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
};

class SendPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <View style={{ marginVertical: 50 }}>
          <StepIndicator customStyles={indicatorStyles} currentPosition={this.state.currentPage} />
        </View>
        <SendItemForms onIndexChanged={(idx) => this.setState({ currentPage: idx })} />
        <Label
          onPress={() => {
            Expo.SecureStore.deleteItemAsync('token').then((a) => {
              console.log(a);
            });
          }}
        >
          Log out
        </Label>
      </Container>
    );
  }
}

const RootDrawer = DrawerNavigator({
  SendPackage: {
    screen: SendPackage,
    navigationOptions: {
      drawerLabel: 'Send Package'
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      drawerLabel: 'Profile'
    }
  }
});

const mapStateToProps = (state) => ({
  userReducer: state.userReducer,
  msgReducer: state.msgReducer
});

export default connectWithStore(store, RootDrawer, mapStateToProps, null);
