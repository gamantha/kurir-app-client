import React from 'react';
import {
    Animated,
    ActivityIndicator,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Button,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    BackHandler
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { images } from '../../assets';

import * as actions from './reducer';
import * as selectors from './selectors';

import globalStyles, {
    IMAGE_HEIGHT,
    IMAGE_HEIGHT_SMALL
} from '../../helpers/styles';
import styles from './styles';

class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHeight: 50
        };
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            this._keyboardDidShow
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            this._keyboardDidHide
        );
    }

    componentDidMount() {
        BackHandler.addEventListener('addEventListener', () =>
            BackHandler.exitApp()
        );
    }

    componentWillReceiveProps(nextProps) {
        const { registerData, errorMessage } = nextProps;
        if (errorMessage !== '' && errorMessage !== this.props.errorMessage) {
            Toast.show(errorMessage);
            this.props.clearErrorMessage();
        }
        if (
            registerData.createdAt &&
            this.props.registerData.createdAt !== registerData.createdAt
        ) {
            this.props.navigation.navigate('Login');
            Toast.show('Please confirm your email first!');
        }
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    onClickRegister = () => {
        const { email, password, repassword } = this.props.inputFields;
        const username = email.split('@')[0];
        this.props.registerUser({
            username,
            email,
            password,
            role: 'sender'
        });
    };

    setInputFields = (field, value) => {
        this.props.updateSingleInputField(field, value);
        if (field === 'email') {
            this.props.validateFields(field);
        }
        if (field === 'password') {
            this.props.validateFields(field);
        }
        if (field === 'repassword') {
            this.props.validateFields(field);
        }
    };

    _keyboardDidShow = event => {
        Animated.timing(this.imageHeight, {
            duration: 100,
            toValue: IMAGE_HEIGHT_SMALL
        }).start();
    };

    _keyboardDidHide = event => {
        Animated.timing(this.imageHeight, {
            duration: 100,
            toValue: IMAGE_HEIGHT
        }).start();
    };

    render() {
        const { isLoading, errorMessage, inputFields, inputFieldValidation } =
            this.props || {};
        const { email, password, repassword } = inputFields;

        const {
            email: isValidEmail,
            password: isValidPassword,
            repassword: isValidRepassword
        } = inputFieldValidation;
        const signUpButtonStatus = isValidEmail && isValidRepassword;

        return (
            <KeyboardAvoidingView style={styles.container} behaviour="padding">
                <View style={styles.container}>
                    <View
                        style={[
                            styles.container,
                            { marginLeft: 25, marginRight: 25 }
                        ]}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        >
                            <Animated.Image
                                source={images.logo}
                                style={{
                                    width: this.imageHeight,
                                    height: this.imageHeight
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'space-around'
                            }}
                        >
                            <Text>Enter your email ID</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={[
                                        styles.inputText,
                                        {
                                            height: this.state.inputHeight
                                        }
                                    ]}
                                    onChangeText={text =>
                                        this.setInputFields('email', text)
                                    }
                                    value={email}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                {isValidEmail === null ? (
                                    <Icon
                                        name="clear"
                                        size={20}
                                        color="#FFFFFF"
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Icon
                                        name={isValidEmail ? 'check' : 'clear'}
                                        size={20}
                                        color={
                                            isValidEmail ? '#9DD340' : '#BD303f'
                                        }
                                        style={styles.icon}
                                    />
                                )}
                            </View>
                            <Text>Type your password</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={[
                                        styles.inputText,
                                        {
                                            height: this.state.inputHeight
                                        }
                                    ]}
                                    onChangeText={value =>
                                        this.setInputFields('password', value)
                                    }
                                    value={password}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                {isValidPassword === null ? (
                                    <Icon
                                        name={'clear'}
                                        size={20}
                                        color={'#FFFFFF'}
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Icon
                                        name={
                                            isValidPassword ? 'check' : 'clear'
                                        }
                                        size={20}
                                        color={
                                            isValidPassword
                                                ? '#9DD340'
                                                : '#BD303f'
                                        }
                                        style={styles.icon}
                                    />
                                )}
                            </View>

                            <Text>Retype your password</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={[
                                        styles.inputText,
                                        {
                                            height: this.state.inputHeight
                                        }
                                    ]}
                                    onChangeText={retype =>
                                        this.setInputFields(
                                            'repassword',
                                            retype
                                        )
                                    }
                                    value={repassword}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                {isValidRepassword === null ? (
                                    <Icon
                                        name="clear"
                                        size={20}
                                        color="#FFFFFF"
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Icon
                                        name={
                                            isValidRepassword
                                                ? 'check'
                                                : 'clear'
                                        }
                                        size={20}
                                        color={
                                            isValidRepassword
                                                ? '#9DD340'
                                                : '#BD303f'
                                        }
                                        style={styles.icon}
                                    />
                                )}
                            </View>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }}
                        >
                            <Text style={{ textAlign: 'center' }}>
                                Link your social media profiles
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}
                            >
                                <Image
                                    source={images.facebook}
                                    style={{ width: 50, height: 50 }}
                                />
                                <Image
                                    source={images.google}
                                    style={{ width: 50, height: 50 }}
                                />
                            </View>

                            {isLoading ? (
                                <ActivityIndicator
                                    size="large"
                                    color="#00ff00"
                                />
                            ) : (
                                <TouchableOpacity
                                    style={globalStyles.touchAbleButton}
                                    disabled={!signUpButtonStatus}
                                    onPress={this.onClickRegister}
                                >
                                    <Text style={globalStyles.textButton}>
                                        SIGNUP
                                    </Text>
                                </TouchableOpacity>
                            )}

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center'
                                }}
                            >
                                <Text style={{ textAlign: 'center' }}>
                                    Forgot Password ?
                                </Text>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            'Password'
                                        )
                                    }
                                >
                                    <Text
                                        style={{
                                            textAlign: 'center',
                                            color: '#2C36FB'
                                        }}
                                    >
                                        {' '}
                                        Click Here!
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            registerUser: actions.registerUser,
            validateFields: actions.inputFieldValidations,
            updateSingleInputField: actions.updateSingleInputField,
            clearErrorMessage: actions.clearErrorMessage
        },
        dispatch
    );

const mapStateToProps = () =>
    createStructuredSelector({
        isLoading: selectors.getIsLoading(),
        errorMessage: selectors.getErrorMessage(),
        inputFields: selectors.getInputFields(),
        registerData: selectors.getRegisterUser(),
        inputFieldValidation: selectors.getInputFieldValidation()
    });

export default connect(mapStateToProps, mapDispatchToProps)(UserRegister);
