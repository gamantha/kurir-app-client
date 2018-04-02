import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { images } from '../assets';

const TransportPackageNavbar = () => (
    <View
        style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }}
    >
        <View
            style={{
                width: '80%',
                justifyContent: 'space-around'
            }}
        >
            <View
                style={{
                    flex: 0.4,
                    justifyContent: 'center'
                }}
            >
                <Icon name="arrow-back" size={25} />
            </View>
            <View
                style={{
                    flex: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#000',
                            fontWeight: '500'
                        }}
                    >
                        Transport a package
                    </Text>
                </View>
                <View>
                    <Image source={images.origin} />
                </View>
            </View> 
        </View>
    </View>
);

export default TransportPackageNavbar;
