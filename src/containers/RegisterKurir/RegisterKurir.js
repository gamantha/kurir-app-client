import React, { Component } from 'react';
import {
    ActivityIndicator,
    ScrollView,
    View,
    Text,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';

import globalStyles from '../../helpers/styles';
import styles from './styles';

import { uploadImage, updateField, request } from './reducer';

const BoxImage = require('../../assets/images/box.png');

var options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class RegisterKurir extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHeight: 45,
            identity: null,
            passbook: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.message && nextProps.message !== this.props.message) {
            Toast.show(nextProps.message);
        }
    }

    handleUpdate = (field, value) => this.props.updateField(field, value);

    handlePress = type => {
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                Toast.show('User cancelled image picker');
            }
            if (response.error) {
                Toast.show(`ImagePicker Error: ${response.error}`);
            }
            if (response.customButton) {
                Toast.show(
                    `User tapped custom button: ${response.customButton}`
                );
            }
            if (response.uri) {
                // You can also display the image using data:
                const base64 = `data:image/${
                    response.type.split('/')[1]
                };base64,${response.data}`;
                let source = {
                    type: type,
                    base64: base64,
                    extension: response.fileName.split('.')[1]
                };
                let img = { uri: 'data:image/jpeg;base64,' + response.data };
                if (type === 'ID') {
                    this.setState({ identity: img });
                }
                if (type === 'Passbook') {
                    this.setState({ passbook: img });
                }
                this.props.uploadImage(source);
            }
        });
    };

    render() {
        const { user, registerKurir } = this.props;
        const { username, email } = user;
        const { loading } = registerKurir;
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
                                value={username}
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
                                value={email}
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
                                onChangeText={text =>
                                    this.handleUpdate('phone', text)
                                }
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
                                onChangeText={text =>
                                    this.handleUpdate('address', text)
                                }
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
                                onChangeText={text =>
                                    this.handleUpdate('bankAccount', text)
                                }
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
                        <TouchableOpacity
                            onPress={() => this.handlePress('ID')}
                            style={{ marginBottom: 16 }}
                        >
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
                                    source={this.state.identity || BoxImage}
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        marginRight: 10,
                                        width: 50,
                                        height: 50
                                    }}
                                />
                                <Text style={{ flex: 2, fontSize: 16 }}>
                                    Upload ID (KTP/SIM/KK/Passport)
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => this.handlePress('Passbook')}
                        >
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
                                    source={this.state.passbook || BoxImage}
                                    resizeMode="contain"
                                    style={{
                                        flex: 1,
                                        marginRight: 10,
                                        width: 50,
                                        height: 50
                                    }}
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
                        {loading ? (
                            <ActivityIndicator size="large" color="red" />
                        ) : null}

                        <TouchableOpacity
                            onPress={() => this.props.request()}
                            style={[
                                globalStyles.touchAbleButton,
                                { height: 40, marginBottom: 20 }
                            ]}
                            disabled={false}
                        >
                            <Text style={globalStyles.textButton}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    registerKurir: state.registerKurir,
    user: state.userLogin
});

const mapDispatchToProps = dispatch => ({
    updateField: (field, value) => dispatch(updateField(field, value)),
    uploadImage: payload => dispatch(uploadImage(payload)),
    request: () => dispatch(request())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterKurir);
