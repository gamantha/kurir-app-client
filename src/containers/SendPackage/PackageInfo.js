import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';

import { images } from '../../assets';
import styles from '../../helpers/styles';

const resetAction = NavigationActions.reset({
    index: 0,
    key: 'StackRouterRoot',
    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
});

class PackageInfo extends Component {
    render() {
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
                                onChangeText={value => {}}
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
                                onChangeText={value => {}}
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
                                onChangeText={value => {}}
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

export default PackageInfo;
