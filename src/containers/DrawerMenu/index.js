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

// drawer component
import SideMenu from './sidemenu.js';

const { width } = Dimensions.get('screen');
// drawer navigation
// MAKE SURE TO PLACE / WRITE ROUTE ITEMS CONSECUTIVELY AND ADD 'drawerLabel' IN EACH 'navigationOptions'
// DON'T MESS THE SEQUENCE!
export const DrawerRoute = DrawerNavigator(
    {
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
    },
    {
        contentComponent: SideMenu,
        drawerWidth: width,
        drawerBackgroundColor: 'rgba(222, 30, 67, 1)',
        contentOptions: {
            activeTintColor: '#FFFFFF',
            inactiveTintColor: '#FFFFFF'
        }
    }
);

//drawer stack
export const DrawerStack = StackNavigator({
    DrawerRoute: {
        screen: DrawerRoute
    }
});
