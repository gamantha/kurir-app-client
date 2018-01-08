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

import Swiper from 'react-native-swiper';

import { View, StyleSheet } from 'react-native';

import StepIndicator from 'react-native-step-indicator';

import Expo from 'expo';

import { DrawerNavigator } from 'react-navigation';

import { connectWithStore } from '../../helpers/utils';
import store from '../../store';
import Profile from '../profile';

const styles = StyleSheet.create({
  wrapper: {},
  pageOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageFour: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageFive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

const Form1 = () => (
  <Form>
    <Label>Step 1 of 5 - Sender Details</Label>
    <Label>City</Label>
    <Item rounded>
      <Input />
    </Item>
    <Label>Sender Name</Label>
    <Item rounded>
      <Input />
    </Item>
    <Label>Address</Label>
    <Item rounded>
      <Input />
    </Item>
    <Label>Phone Number</Label>
    <Item rounded>
      <Input />
    </Item>
    <Button rounded primary>
      <Text>Next</Text>
    </Button>
  </Form>
);

const SendItemForms = props => (
  <Swiper
    style={styles.wrapper}
    onIndexChanged={props.onIndexChanged}
    loop={false}
    showsPagination={false}
  >
    <View style={styles.pageOne}>
      <Form1 />
    </View>
    <View style={styles.pageTwo}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.pageThree}>
      <Text style={styles.text}>And simple</Text>
    </View>
    <View style={styles.pageFour}>
      <Text style={styles.text}>And simple</Text>
    </View>
    <View style={styles.pageFive}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
);

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
  currentStepLabelColor: '#fe7013',
};

class SendPackage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0,
    };
  }

  render() {
    return (
      <Container>
        <Header />
        <View style={{ marginVertical: 50 }}>
          <StepIndicator customStyles={indicatorStyles} currentPosition={this.state.currentPage} />
        </View>
        <SendItemForms onIndexChanged={idx => this.setState({ currentPage: idx })} />
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
      drawerLabel: 'Send Package',
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
