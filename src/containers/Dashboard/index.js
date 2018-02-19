import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SInfo from 'react-native-sensitive-info';
import { images } from '../../assets';
import styles from '../../helpers/styles';

class Dashboard extends Component {
    // Move this to action later
    handleLogout = async () => {
        try {
            await SInfo.deleteItem('accessToken', {});
            await SInfo.deleteItem('refreshToken', {});
            await SInfo.deleteItem('User', {});
            this.props.navigation.navigate('Login');
        } catch (error) {
            console.log('errror', error.message);
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1.5
                    }}
                >
                    {/* This will be a swiper */}
                    <TouchableOpacity onPress={() => this.handleLogout()}>
                        <Text>Temporary Log out here!</Text>
                    </TouchableOpacity>
                </View>
                {/* Start of Send Package! */}
                <View
                    style={{
                        flex: 1.2,
                        backgroundColor: 'rgba(222, 30, 67, 1)'
                    }}
                >
                    <TouchableOpacity
                        style={[
                            styles.container,
                            {
                                marginLeft: 25,
                                marginRight: 25,
                                backgroundColor: 'rgba(52, 52, 52, 0)',
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <Image
                            source={images.box}
                            style={{ width: 50, height: 50 }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>
                                Send Package!
                            </Text>
                            <Icon
                                name="keyboard-arrow-right"
                                size={28}
                                color="#FFF"
                            />
                        </View>
                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                            Send your valuable items is easy and
                        </Text>
                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                            Secure now
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'row',
                        backgroundColor: 'rgba(252, 105, 79, 1)',
                        alignItems: 'flex-start'
                    }}
                >
                    <TouchableOpacity
                        style={[
                            styles.container,
                            {
                                marginLeft: 25,
                                marginRight: 25,
                                backgroundColor: 'rgba(52, 52, 52, 0)',
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <View style={{ flex: 1.5, justifyContent: 'center' }}>
                            <Image
                                source={images.rocket}
                                style={{ width: 50, height: 50 }}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={{ fontSize: 24, color: '#FFFFFF' }}
                                >
                                    Transport a package
                                </Text>
                                <Icon
                                    name="keyboard-arrow-right"
                                    size={28}
                                    color="#FFF"
                                />
                            </View>
                            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                Everyone now could be a courier and
                            </Text>
                            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                get money from it.
                            </Text>
                        </View>
                        <View style={{ flex: 1 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Dashboard;
