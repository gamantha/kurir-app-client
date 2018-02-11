import React from 'react';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import UserRegister from './containers/UserRegister';
import UserLogin from './containers/UserLogin';
import UserProfile from './containers/UserProfile';
import ForgotPassword from './containers/ForgotPassword';

export const Kurir = StackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            }
        },
        Onboard: {
            screen: Onboarding,
            navigationOptions: {
                header: null
            }
        },
        Register: {
            screen: UserRegister,
            navigationOptions: {
                header: null
            }
        },
        Login: {
            screen: UserLogin,
            navigationOptions: {
                header: null
            }
        },
        Password: {
            screen: ForgotPassword,
            navigationOptions: {
                header: null
            }
        },
        Profile: {
            screen: UserProfile,
            navigationOptions: {
                header: null
            }
        }
    },
    //config
    {
        initialRouteName: 'Login'
    }
);
