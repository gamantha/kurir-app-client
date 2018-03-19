import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, withNavigation } from 'react-navigation';

import SendPackageNavBar from '../../navigations/SendPackageNavBar';
import OriginToDestination from './OriginToDestination';
import PackageInfo from './PackageInfo';
import ReceiverInfo from './ReceiverInfo';
import Preview from './Preview';
import Confirmation from './Confirmation';

const width = Dimensions.get('window').width / 2.5;

const SendPackage = StackNavigator(
    {
        OriginToDestination: {
            screen: OriginToDestination
        },
        PackageInfo: {
            screen: PackageInfo
        },
        ReceiverInfo: {
            screen: ReceiverInfo
        },
        Preview: {
            screen: Preview
        },
        Confirmation: {
            screen: Confirmation
        }
    },
    {
        initialRouteName: 'OriginToDestination',
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
