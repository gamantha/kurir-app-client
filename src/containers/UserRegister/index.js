import React from 'react';
import {
    Animated,
    ActivityIndicator,
    BackHandler,
    Button,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Facebook from '../../components/facebook';
import Google from '../../components/google';

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
            inputHeight: 45
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
        const {
            email,
            username,
            password,
            repassword
        } = this.props.inputFields;
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
        if (field === 'username') {
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
        const { email, username, password, repassword } = inputFields;

        const {
            email: isValidEmail,
            username: isValidUsername,
            password: isValidPassword,
            repassword: isValidRepassword
        } = inputFieldValidation;
        console.log('username', username, isValidUsername);
        const signUpButtonStatus = isValidEmail && isValidRepassword;

        return (
            <ScrollView>
                <View style={[styles.container]}>
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
                            <Image
                                source={images.logo}
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: 2,
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={styles.textTitle}>
                                Enter your email ID
                            </Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    placeholder="Enter your email ID"
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
                            <Text style={styles.textTitle}>Username</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    placeholder="Username"
                                    style={[
                                        styles.inputText,
                                        {
                                            height: this.state.inputHeight
                                        }
                                    ]}
                                    onChangeText={text =>
                                        this.setInputFields('username', text)
                                    }
                                    value={username}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                {isValidUsername === null ? (
                                    <Icon
                                        name="clear"
                                        size={20}
                                        color="#FFFFFF"
                                        style={styles.icon}
                                    />
                                ) : (
                                    <Icon
                                        name={
                                            isValidUsername ? 'check' : 'clear'
                                        }
                                        size={20}
                                        color={
                                            isValidUsername
                                                ? '#9DD340'
                                                : '#BD303f'
                                        }
                                        style={styles.icon}
                                    />
                                )}
                            </View>
                            <Text style={styles.textTitle}>Password</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    placeholder="Password"
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
                            <Text style={styles.textTitle}>
                                Retype Password
                            </Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    placeholder="Retype Password"
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
                                paddingTop: 16
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    paddingBottom: 24
                                }}
                            >
                                Link your social media profiles
                            </Text>
                            <View
                                style={{
                                    paddingBottom: 24,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}
                            >
                                <Facebook
                                    navigation={this.props.navigation}
                                    authenticate={this.props.socialOauth}
                                    action="register"
                                    socialType="facebook"
                                />
                                <Google
                                    navigation={this.props.navigation}
                                    authenticate={this.props.socialOauth}
                                    action="register"
                                    socialType="google"
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

                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('Login')
                                }
                            >
                                <Text
                                    style={{
                                        paddingTop: 24,
                                        textAlign: 'center',
                                        color: '#2C36FB'
                                    }}
                                >
                                    Login
                                </Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    paddingTop: 24,
                                    paddingBottom: 24,
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
            </ScrollView>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            registerUser: actions.registerUser,
            validateFields: actions.inputFieldValidations,
            updateSingleInputField: actions.updateSingleInputField,
            clearErrorMessage: actions.clearErrorMessage,
            socialOauth: actions.socialOauth
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
