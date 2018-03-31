import React, { Component } from 'react';
import {
    ScrollView,
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import globalStyles from '../../helpers/styles';
import styles from './styles';

const BoxImage = require('../../assets/images/box.png');

class RegisterKurir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHeight: 45
        };
    }
    render() {
        return (
            <ScrollView>
                <View style={[styles.container]}>
                    <Text style={styles.header}>Register as Kurir</Text>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Name</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your name"
                                style={[
                                    styles.inputText,
                                    { height: this.state.inputHeight }
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Email Address</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your email address"
                                style={[
                                    styles.inputText,
                                    { height: this.state.inputHeight }
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Phone Number</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your phone number"
                                style={[
                                    styles.inputText,
                                    { height: this.state.inputHeight }
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Address</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your address"
                                style={[
                                    styles.inputText,
                                    { height: this.state.inputHeight }
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text style={styles.textTitle}>Bank Account</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                placeholder="Enter your bank account"
                                style={[
                                    styles.inputText,
                                    { height: this.state.inputHeight }
                                ]}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View
                        style={[
                            styles.textTitle,
                            {
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }
                        ]}
                    >
                        <TouchableOpacity>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={BoxImage}
                                    resizeMode="contain"
                                    style={{ flex: 1, marginRight: 10 }}
                                />
                                <Text style={{ flex: 2, fontSize: 16 }}>
                                    Upload ID (KTP/SIM/KK/Passport)
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Image
                                    source={BoxImage}
                                    resizeMode="contain"
                                    style={{ flex: 1, marginRight: 10 }}
                                />
                                <Text style={{ flex: 2, fontSize: 16 }}>
                                    Upload Passbook
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 2,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <TouchableOpacity
                            style={[
                                globalStyles.touchAbleButton,
                                { height: 40, marginBottom: 20 }
                            ]}
                            disabled={false}
                            onPress={() => alert('registered!')}
                        >
                            <Text style={globalStyles.textButton}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default RegisterKurir;
