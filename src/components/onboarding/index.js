import React from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import { StackNavigator, StackRouter } from 'react-navigation';
import Swiper from 'react-native-swiper';

import Register from '../userRegistration';

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
  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props);
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
          <Button onPress={() => console.log('test')} color="#424242" title="Skip" />
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
          <Button onPress={() => console.log('test')} color="#424242" title="Skip" />
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
          <Button onPress={() => console.log('login')} color="#424242" title="Or login" />
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

export default OnboardingComponent;
