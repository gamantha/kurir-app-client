import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Main components
import SplashScreen from './containers/SplashScreen';
import Onboarding from './components/Onboarding';
import UserRegister from './containers/UserRegister';
import UserLogin from './containers/UserLogin';
import UserDashboard from './containers/Dashboard';
import ForgotPassword from './containers/ForgotPassword';
import ChangePassword from './components/changePassword';
import EditProfile from './components/EditProfile';

// Navigation components
import DashboardNavbar from './navigations/DashboardNavbar';

import { DrawerStack } from './containers/DrawerMenu';

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
        Main: {
            screen: ({ navigation }) => (
                <DrawerStack screenProps={{ rootNavigation: navigation }} />
            ),
            navigationOptions: {
                header: null
            }
        }
    },
    //config
    {
        initialRouteName: 'Splash'
    }
);
