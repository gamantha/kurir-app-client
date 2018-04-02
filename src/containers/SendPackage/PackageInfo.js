import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { images } from '../../assets';
import styles from '../../helpers/styles';

import { updateField } from './reducer';

const resetAction = NavigationActions.reset({
    index: 0,
    key: 'StackRouterRoot',
    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
});

class PackageInfo extends Component {
    componentWillMount() {
        this.props.updateField('route', 'package-info');
    }
    render() {
        const { country, city, address } = this.props;

        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor: '#fff'
                }}
            >
                <View style={{ flex: 0.05 }} />
                <View
                    style={{
                        flex: 0.8,
                        borderColor: 'red'
                    }}
                >
                    <View
                        style={[
                            styles.container,
                            {
                                marginLeft: 30,
                                marginRight: 30,
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <Text style={{ marginBottom: 5 }}>Country</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    this.props.updateField('country', value)
                                }
                                value={country}
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                    <View
                        style={[
                            styles.container,
                            {
                                marginLeft: 30,
                                marginRight: 30,
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <Text style={{ marginBottom: 5 }}>City</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    this.props.updateField('city', value)
                                }
                                value={city}
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                    <View
                        style={[
                            styles.container,
                            {
                                marginLeft: 30,
                                marginRight: 30,
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <Text style={{ marginBottom: 5 }}>Address</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    this.props.updateField('address', value)
                                }
                                value={address}
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>

                    <View
                        style={[
                            styles.container,
                            {
                                marginLeft: 20,
                                marginRight: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }
                        ]}
                    >
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}
                            style={[
                                styles.touchAbleButton,
                                {
                                    borderColor: '#B5B5B5',
                                    backgroundColor: '#B5B5B5',
                                    width: '45%'
                                }
                            ]}
                        >
                            <Text style={styles.textButton}>Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={
                                country === '' && city === '' && address === ''
                            }
                            onPress={() =>
                                this.props.navigation.navigate('ReceiverInfo')
                            }
                            style={[styles.touchAbleButton, { width: '45%' }]}
                        >
                            <Text style={styles.textButton}>Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 0.3 }} />
            </View>
        );
    }
}

const mapStateProps = state => state.sendPackage;

const mapDispatchToProps = dispatch => ({
    updateField: (field, value) => dispatch(updateField(field, value))
});

export default connect(mapStateProps, mapDispatchToProps)(PackageInfo);
