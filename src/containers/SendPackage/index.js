import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, withNavigation } from 'react-navigation';

import SendPackageNavBar from '../../navigations/SendPackageNavBar';
import PackageInfo from './PackageInfo';
import ReceiverInfo from './ReceiverInfo';

const width = Dimensions.get('window').width / 2.5;

const SendPackage = StackNavigator(
    {
        PackageInfo: {
            screen: PackageInfo
        },
        ReceiverInfo: {
            screen: ReceiverInfo
        }
    },
    {
        initialRouteName: 'PackageInfo',
        navigationOptions: {
            headerTitle: <SendPackageNavBar />,
            headerStyle: {
                backgroundColor: '#FFFFFF',
                height: width
            },
            headerLeft: null
        }
    }
);
// Wrap all component here later

export default SendPackage;
