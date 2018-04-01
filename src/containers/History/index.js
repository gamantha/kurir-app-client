import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';


import HistoryNavbar from '../../navigations/HistoryNavbar';
import HistoryScreen from './HistoryScreen';
import ShipmentDetail from './ShipmentDetail';

const History = StackNavigator(
    {
        History: {
            screen: HistoryScreen,
            navigationOptions: {
                header: <HistoryNavbar title={'History'}/>,
                headerLeft: null
            }
        },
        Shipment: {
            screen: ShipmentDetail,
            navigationOptions: {
                header: <HistoryNavbar title={'Shipment Details'}/>,
                headerLeft: null
            }
        }
    },
    {
        initialRouteName: 'History',
    }
)

export default History;