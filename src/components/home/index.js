import React from 'react';
import StepIndicator from 'react-native-step-indicator';
import { StyleSheet, View } from 'react-native';
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

import Expo from 'expo';

import { connect } from 'react-redux';

import { DrawerNavigator } from 'react-navigation';

import { connectWithStore } from '../../helpers/utils';
import store from '../../store';
import SenderForm from '../senderForm';
import Profile from '../profile';
import UserLogin from '../userLogin';

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#4aae4f',
  separatorUnFinishedColor: '#a4d4a5',
  stepIndicatorFinishedColor: '#4aae4f',
  stepIndicatorUnFinishedColor: '#a4d4a5',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical: 50,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator
            customStyles={firstIndicatorStyles}
            currentPosition={this.state.currentPage}
          />
        </View>
        <Label
          onPress={() => {
            Expo.SecureStore.deleteItemAsync('token').then((a) => {
              console.log(a);
            });
          }}
        >
          Log out
        </Label>
      </View>

      // <Container>
      //   <Header>
      //     <Body>
      //       <Title>Homepage</Title>
      //     </Body>
      //   </Header>
      //   <Content>
      //     <SenderForm />
      //   </Content>
      // </Container>
    );
  }
}

const RootDrawer = DrawerNavigator({
  Home: {
    screen: Home,
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

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

export default connectWithStore(store, RootDrawer, mapStateToProps, null);
// export default connect(mapStateToProps, null)(RootDrawer);
