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

class AvailablePackage extends Component {
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
                                    Available package from :{'\n'}
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
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30,
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderColor: '#E0E0E0',
                                borderRadius: 10,
                                borderLeftWidth: 10,
                                borderLeftColor: '#BD303f'
                            }}
                        >  

                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent:'space-between',
                                marginTop: 10,
                                marginLeft: 10,
                                marginRight: 10,
                                marginBottom: 100
                                }}
                            >
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent:'flex-start'
                                    }}
                                >
                                    <View>  
                                        <View style={{flex: 1, width: 100}}>
                                            <Text>Ticket#{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    2826137122
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <View>  
                                        <View style={{flex: 1, width: 120}}>
                                            <Text>Type{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    Envelope
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Weight{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    1 Kg
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                                <View
                                style={{
                                    flex:1,
                                    borderBottomColor: '#E0E0E0',
                                    borderBottomWidth: 1,
                                    marginTop:45,
                                    marginBottom:10
                                }}
                                />

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent:'space-between'
                                    }}
                                >
                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Space Taken{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    4 Kg
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Available Space{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    5 Kg
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Reward{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    80,000 IDR
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                            </View>

                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30,
                                backgroundColor: '#FFFFFF',
                                borderWidth: 1,
                                borderColor: '#E0E0E0',
                                borderRadius: 10,
                                borderLeftWidth: 10,
                                borderLeftColor: '#BD303f'
                            }}
                        >  

                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent:'space-between',
                                marginTop: 10,
                                marginLeft: 10,
                                marginRight: 10,
                                marginBottom: 100
                                }}
                            >
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent:'flex-start'
                                    }}
                                >
                                    <View>  
                                        <View style={{flex: 1, width: 100}}>
                                            <Text>Ticket#{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    2826137122
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <View>  
                                        <View style={{flex: 1, width: 120}}>
                                            <Text>Type{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    Envelope
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Weight{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    1 Kg
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                                <View
                                style={{
                                    flex:1,
                                    borderBottomColor: '#E0E0E0',
                                    borderBottomWidth: 1,
                                    marginTop:45,
                                    marginBottom:10
                                }}
                                />

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent:'space-between'
                                    }}
                                >
                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Space Taken{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    4 Kg
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>
                                    
                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Available Space{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    5 Kg
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                    <View>  
                                        <View style={{flex: 1}}>
                                            <Text>Reward{'\n'}
                                                <Text style={{ fontWeight: 'bold' }}>
                                                    80,000 IDR
                                                </Text>{' '}
                                            </Text>
                                        </View>
                                    </View>

                                </View>

                            </View>

                        </View>

                    </View>
                </View>
        );
    }
}

export default AvailablePackage;
