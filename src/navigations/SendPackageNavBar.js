import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { images } from '../assets';

const SendPackageNavBar = () => (
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
                <Icon name="arrow-back" size={30} />
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
                        Send Package
                    </Text>
                    <Text>Step 1 of 5 - Package Info</Text>
                </View>
                <View>
                    <Image source={images.receiver} />
                </View>
            </View>
            <View
                style={{
                    flex: 0.6,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        backgroundColor: '#de2443'
                    }}
                >
                    <Text style={{ color: '#fff' }}>1</Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#d3d3d3',
                        width: 30
                    }}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        borderWidth: 1,
                        borderColor: '#d3d3d3'
                    }}
                >
                    <Text>2</Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#d3d3d3',
                        width: 30
                    }}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        borderWidth: 1,
                        borderColor: '#d3d3d3'
                    }}
                >
                    <Text>3</Text>
                </View>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: '#d3d3d3',
                        width: 30
                    }}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 30,
                        height: 30,
                        borderRadius: 30 / 2,
                        borderWidth: 1,
                        borderColor: '#d3d3d3'
                    }}
                >
                    <Text>4</Text>
                </View>
            </View>
        </View>
    </View>
);

export default SendPackageNavBar;
