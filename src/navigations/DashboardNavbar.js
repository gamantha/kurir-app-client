import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { images } from '../assets';

const DashboardNavbar = () => (
    <View
        style={{
            flex: 1,
            flexDirection: 'row',
            width: '100%'
        }}
    >
        <View
            style={{
                flex: 0.2,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Icon name="menu" size={40} />
        </View>
        <View
            style={{
                flex: 0.6,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Image
                source={images.kurirheader}
                style={{ height: '90%', width: '55%' }}
            />
        </View>
        <View style={{ flex: 0.2 }} />
    </View>
);

export default DashboardNavbar;
