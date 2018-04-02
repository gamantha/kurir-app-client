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
import { connect } from 'react-redux';

import { clearState } from './reducer';
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
        this.props.clearState();
        this.props.toDashboard();
    };
    render() {
        const { summary } = this.props;
        const ticketNumber = summary.ticketNumber
            ? '#' + summary.ticketNumber
            : '';
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
                        {ticketNumber || ''}
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
                            {summary['ReceiverId'] || ''}
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 18 }}>ADDRESS</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            {summary['address'] || ''}
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

const mapStateProps = state => state.sendPackage;

const mapDispatchToProps = dispatch => ({
    toDashboard: () =>
        dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Main' })]
            })
        ),
    clearState: () => dispatch(clearState())
});

export default connect(mapStateProps, mapDispatchToProps)(Confirmation);
