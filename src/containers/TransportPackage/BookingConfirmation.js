import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import { images } from '../../assets';
import styles from '../../helpers/styles';
import Toast from 'react-native-simple-toast';
import Api from '../../services/api';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Main' })]
});

class BookingConfirmation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: '#fff'
                    }}
                >
                    {/* <View style={{ flex: 0.05 }} /> */}
                    <View
                        style={{
                            flex: 0.8,
                            borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                marginTop: 20,
                                marginLeft: 30,
                                marginRight: 30,
                                marginBottom: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Image source={images.bookingConfirmation} style={{height: 80, width: 80}} />
                        </View>
                            
                        <View
                            style={{
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30
                            }}
                        >
                            <View>
                                <Text>
                                    Thank you for helping out! your booking # :
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginTop: 5,
                                    marginRight: 30,
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                        textAlign: 'left'
                                    }}
                                >
                                    #2826137122
                                </Text>
                            </View>
                        </View>
                        
                        <View
                            style={{
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30
                            }}
                        >
                            <View>
                                <Text>
                                    Please show your booking number along with your flight confirmation and
                                    passport/ID upon pickup 
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30
                            }}
                        >
                            <View>
                                <Text>
                                    Your booking number is stored on {' '}
                                    <Text style={{ color:'#498ee8' }}>
                                        "Delivery on Progress"
                                    </Text>{' '}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 2,
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: '83%',
                                    top: 20,
                                    height: 50,
                                    backgroundColor: '#D8283B',
                                    borderRadius: 30,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 16,
                                        color: '#FFFFFF',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        );
    }
}

export default BookingConfirmation;
