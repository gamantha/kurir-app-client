import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import HistoryNavbar from '../../navigations/HistoryNavbar';
import HistoryScreen from './HistoryScreen';
import ShipmentDetail from './ShipmentDetail';

const History = StackNavigator(
    {
        History: {
            screen: HistoryScreen
        },
        Shipment: {
            screen: ShipmentDetail
        }
    },
    {
        initialRouteName: 'History',
        navigationOptions: {
            header: <HistoryNavbar />,
            headerLeft: null
        }
    }
)

export default History;