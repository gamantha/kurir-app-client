import React from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import { StackNavigator, StackRouter } from 'react-navigation';
import Swiper from 'react-native-swiper';
import Expo from 'expo';
import { connect } from 'react-redux';

import Register from '../userRegistration';
import Home from '../home';
import store from '../../store';
import { connectWithStore } from '../../helpers/utils';

const styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  headline: {
    color: '#424242',
    fontSize: 24,
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#d7283b',
    padding: 10,
    borderRadius: 20,
    width: 150,
  },
  nextText: {
    color: '#ffffff',
    padding: 2,
  },
  imageMargin: {
    marginBottom: 30,
  },
  body: {
    color: '#424242',
    fontSize: 14,
    marginBottom: 25,
    textAlign: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
};

class OnboardingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
    };
  }
  componentDidMount() {
    Expo.SecureStore.getItemAsync('token').then((data) => {
      this.setState({ token: data });
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.token) {
      return <Home />;
    }
    return (
      <Swiper style={styles.wrapper} activeDotColor="#d7283b" loop={false} ref="swiper">
        <View style={styles.slide1}>
          <Image style={styles.imageMargin} source={require('../../assets/images/splash-1.png')} />
          <Text style={styles.headline}>Find a Traveler</Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum divisit ineleganter; Sed
            fortuna fortis.
          </Text>
          <TouchableOpacity
            onPress={() => this.refs.swiper.scrollBy(1)}
            style={styles.button}
            title="Test"
            color="#841584"
          >
            <Text style={styles.nextText}> NEXT </Text>
          </TouchableOpacity>
          <Button onPress={() => navigate('Register')} color="#424242" title="Skip" />
        </View>
        <View style={styles.slide2}>
          <Image style={styles.imageMargin} source={require('../../assets/images/splash-2.png')} />
          <Text style={styles.headline}>Hand off the Item</Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum divisit ineleganter; Sed
            fortuna fortis.
          </Text>
          <TouchableOpacity
            onPress={() => this.refs.swiper.scrollBy(1)}
            style={styles.button}
            title="Test"
            color="#841584"
          >
            <Text style={styles.nextText}> NEXT </Text>
          </TouchableOpacity>
          <Button onPress={() => navigate('Register')} color="#424242" title="Skip" />
        </View>
        <View style={styles.slide3}>
          <Image style={styles.imageMargin} source={require('../../assets/images/splash-3.png')} />
          <Text style={styles.headline}>Track the Package</Text>
          <Text style={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Primum divisit ineleganter; Sed
            fortuna fortis.
          </Text>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={styles.button}
            title="Test"
            color="#841584"
          >
            <Text style={styles.nextText}>REGISTER</Text>
          </TouchableOpacity>
          <Button onPress={() => navigate('Login')} color="#424242" title="Or login" />
        </View>
      </Swiper>
    );
  }
}

// const OnboardingStack = StackRouter(
//   {
//     Onboarding: { screen: OnboardingComponent },
//     Register: { screen: Register },
//   },
//   {
//     initialRouteName: 'Onboarding',
//   },
// );

// const OnboardingStack = StackNavigator(
//   {
//     Onboarding: { screen: OnboardingComponent },
//     Register: { screen: Register },
//   },
//   { initialRouteName: 'Onboarding' },
// );

export default connectWithStore(store, OnboardingComponent, null, null);
// export default OnboardingComponent;
