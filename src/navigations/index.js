import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Main components
import SplashScreen from '../containers/SplashScreen';
import Onboarding from '../components/Onboarding';
import UserRegister from '../containers/UserRegister';
import UserLogin from '../containers/UserLogin';
import ForgotPassword from '../containers/ForgotPassword';
import SendPackage from '../containers/SendPackage';
import DrawerStack from '../containers/DrawerMenu';
import SideMenu from '../containers/DrawerMenu/sidemenu';
import RegisterKurir from '../containers/RegisterKurir';

// Navigation components
import DashboardNavbar from './DashboardNavbar';

const AppNavigator = StackNavigator({
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
    },
    SendPackage: {
        screen: ({ navigation }) => (
            <SendPackage screenProps={{ rootNavigation: navigation }} />
        ),
        navigationOptions: {
            header: null
        }
    },
    SideMenu: {
        screen: ({ navigation }) => (
            <SideMenu screenProps={{ rootNavigation: navigation }} />
        ),
        navigationOptions: {
            header: null
        }
    },
    RegisterKurir: {
        screen: ({ navigation }) => (
            <RegisterKurir screenProps={{ rootNavigation: navigation }} />
        ),
        navigationOptions: {
            header: null
        }
    }
});

export default AppNavigator;
