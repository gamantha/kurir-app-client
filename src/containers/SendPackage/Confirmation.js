import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { images } from '../../assets';

const WIDTH = Dimensions.get('window').width / 5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF'
    }
});

class Confirmation extends React.Component {
    handleFinish = () => {
        const toDashboard = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })]
        });
        this.props.screenProps.rootNavigation.dispatch(toDashboard);
    };
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#EFEFEF',
                        height: WIDTH,
                        justifyContent: 'center',
                        paddingLeft: 40
                    }}
                >
                    <Text>TICKET NUMBER</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                        #2826137122
                    </Text>
                </View>
                <View
                    style={{
                        flex: 2,
                        justifyContent: 'space-around',
                        marginLeft: 40,
                        marginRight: 40
                    }}
                >
                    <View>
                        <Text style={{ fontSize: 18 }}>
                            Please send/drop your package to the address listed
                            below:
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18 }}>TO</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            #2826137122
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18 }}>ADDRESS</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Jl. KH. Ahmad Dahlan no. 72, Bandung, Jawa-Barat,
                            Indonesia.
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
                        onPress={() => this.handleFinish()}
                        style={{
                            width: '80%',
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
                            Finish
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Confirmation;
