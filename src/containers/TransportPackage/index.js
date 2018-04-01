import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { StackNavigator, withNavigation } from 'react-navigation';

import TransportPackageNavbar from '../../navigations/TransportPackageNavbar';
import SearchPackage from './SearchPackage';
import SummaryPackage from './SummaryPackage';

const width = Dimensions.get('window').width / 5;

const TransportPackage = StackNavigator(
    {
        SearchPackage: {
            screen: SearchPackage
        },
        SummaryPackage: {
            screen: SummaryPackage
        }
    },
    {
        initialRouteName: 'SearchPackage',
        navigationOptions: {
            headerTitle: <TransportPackageNavbar />,
            headerStyle: {
                backgroundColor: '#FFFFFF',
                height: width
            },
            headerLeft: null
        }
    }
);
// Wrap all component here later

export default TransportPackage;
