import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    TextInput,
    Button,
    Dimensions,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler,
    Easing,
    AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import styles from '../../helpers/styles';
import { images } from '../../assets';
import { updateField, requestNewPassword } from './reducer';
import Toast from 'react-native-simple-toast';

const { width, height } = Dimensions.get('window');

class NewPassword extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        const { message, success } = nextProps;
        if (message !== '') {
            Toast.show(message);
        }
    }

    componentWillUnmount() {
        BackHandler.addEventListener('addEventListener', () =>
            BackHandler.exitApp()
        );
    }

    updateField = (field, value) => {
        this.props.updateField(field, value);
    };

    handleFocus = (field, value) => {
        this.props.handleFocus(field, value);
    };

    handlePress = () => {
        this.props.handleNewPassword();
    };

    render() {
        const {
            newPassword,
            inputFocus,
            password,
            rePassword,
            textInputPassword,
            textInputRepassword
        } =
            this.props || {};

        const disableButton = rePassword !== '' && password !== '';

        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'space-between',
                            flexDirection: 'column',
                            marginLeft: 25,
                            marginRight: 25
                        }}
                    >
                        <View
                            style={{
                                flex: 1.5,
                                marginTop: 40
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                Add your new password
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 2.2,
                                flexDirection: 'column'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    Now you can change your password and fill
                                    the forms below
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 1.5,
                            marginLeft: 25,
                            marginRight: 25
                        }}
                    >
                        <View
                            style={{
                                flex: 0.2,
                                marginTop: 10,
                                flexDirection: 'row',
                                alignItems: 'flex-start'
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>
                                Your old password:
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 0.4,
                                justifyContent: 'space-around'
                            }}
                        >
                            <TextInput
                                style={[
                                    styles.inputText,
                                    { flex: 0.8 },
                                    { backgroundColor: textInputPassword }
                                ]}
                                onFocus={() =>
                                    this.handleFocus(
                                        'textInputPassword',
                                        '#F8E7E9'
                                    )
                                }
                                onBlur={() =>
                                    this.handleFocus(
                                        'textInputPassword',
                                        '#FFFFFF'
                                    )
                                }
                                onChangeText={value =>
                                    this.updateField('oldPassword', value)
                                }
                                value={password}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>

                        <View
                            style={{
                                flex: 0.2,
                                marginTop: 10,
                                flexDirection: 'row',
                                alignItems: 'flex-start'
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>
                                Your new password:
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 0.4,
                                justifyContent: 'space-around'
                            }}
                        >
                            <TextInput
                                style={[
                                    styles.inputText,
                                    { flex: 0.8 },
                                    { backgroundColor: textInputRepassword }
                                ]}
                                onFocus={() =>
                                    this.handleFocus(
                                        'textInputRepassword',
                                        '#F8E7E9'
                                    )
                                }
                                onBlur={() =>
                                    this.handleFocus(
                                        'textInputRepassword',
                                        '#FFFFFF'
                                    )
                                }
                                onChangeText={value =>
                                    this.updateField('newPassword', value)
                                }
                                value={rePassword}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1.9 }}>
                        <Image
                            source={images.baseline}
                            style={[
                                {
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    flex: 0.9,
                                    marginTop: 20,
                                    resizeMode: 'stretch'
                                }
                            ]}
                        />
                        <View
                            style={{
                                flex: 0.1,
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={[
                                    styles.touchAbleButton,
                                    {
                                        height: 45,
                                        width: 280,
                                        marginLeft: 30,
                                        position: 'absolute',
                                        top: 20,
                                        marginRight: 20
                                    }
                                ]}
                                // disabled={!disableButton}
                                onPress={this.handlePress}
                            >
                                <Text style={styles.textButton}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateField: (field, value) => dispatch(updateField(field, value)),
    handleFocus: (field, value) => dispatch(updateField(field, value)),
    handleNewPassword: () => dispatch(requestNewPassword())
});

const mapStateProps = state => state.newPassword;

export default connect(mapStateProps, mapDispatchToProps)(NewPassword);
