import React from 'react';
import { StackNavigator } from 'react-navigation';

// Main components
import SplashScreen from './components/SplashScreen';
import Onboarding from './components/Onboarding';
import UserRegister from './containers/UserRegister';
import UserLogin from './containers/UserLogin';
import UserDashboard from './containers/Dashboard';
import ForgotPassword from './containers/ForgotPassword';

// Navigation components
import DashboardNavbar from './navigations/DashboardNavbar';

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
        Dashboard: {
            screen: UserDashboard,
            navigationOptions: {
                headerTitle: <DashboardNavbar />,
                headerStyle: {
                    backgroundColor: '#FFFFFF'
                },
                headerLeft: null
            }
        }
    },
    //config
    {
        initialRouteName: 'Splash'
    }
);
