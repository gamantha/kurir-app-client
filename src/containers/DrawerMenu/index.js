import React from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

// Main components
import UserDashboard from '../Dashboard';
import ForgotPassword from '../ForgotPassword';
import ChangePassword from '../../components/changePassword';
import EditProfile from '../../components/EditProfile';

// Navigation components
import DashboardNavbar from '../../navigations/DashboardNavbar';

//drawer stack
const DrawerStack = StackNavigator({
    Dashboard: {
        screen: UserDashboard,
        navigationOptions: {
            headerTitle: <DashboardNavbar />,
            headerStyle: {
                backgroundColor: '#FFFFFF'
            },
            headerLeft: null,
            drawerLabel: 'Home'
        }
    },
    EditProfile: {
        screen: EditProfile,
        navigationOptions: {
            header: null,
            drawerLabel: 'Profile'
        }
    },
    ChangePassword: {
        screen: ChangePassword,
        navigationOptions: {
            header: null,
            drawerLabel: 'Change Password'
        }
    }
});

export default DrawerStack;
