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

class SummaryPackage extends Component {
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
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30
                            }}
                        >
                            <View>
                                <Text>
                                    You book package below from :{'\n'}
                                    <Text style={{ fontWeight: 'bold' }}>
                                        Bandung
                                    </Text>{' '} to <Text style={{ fontWeight: 'bold' }}>
                                        Jakarta
                                    </Text>{' '}
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                marginTop: 20,
                                backgroundColor: '#EFEFEF'
                            }}
                        >
                            <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: 10,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    marginBottom: 20
                                    }}
                            >
                                <View style={{flex: 1}}>
                                    <Text>Ticket Number{'\n'}
                                        <Text style={{ fontWeight: 'bold' }}>
                                            #2826137122
                                        </Text>{' '}
                                    </Text>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{textAlign: 'right'}}>Weight{'\n'}
                                        <Text style={{ fontWeight: 'bold' }}>
                                            1 Kg
                                        </Text>{' '}
                                    </Text>
                                </View>
                            </View>


                            <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    marginTop: 20,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    marginBottom: 50
                                    }}
                            >
                                <View style={{flex: 1}}>
                                    <Text>Reward{'\n'}
                                        <Text style={{ fontWeight: 'bold' }}>
                                            80,000 IDR
                                        </Text>{' '}
                                    </Text>
                                </View>
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
                                    Please pickup the package within 30 minutes of confirmation.
                                    Your booking will expired after 30 mins.
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
                                    Click confirm to get out booking number
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
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        );
    }
}

export default SummaryPackage;
