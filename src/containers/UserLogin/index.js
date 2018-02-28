import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import {
    Animated,
    ActivityIndicator,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
    Easing,
    BackHandler
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Facebook from '../../components/facebook';
import Google from '../../components/google';

import * as actions from './reducer';
import * as selectors from './selectors';
import { socialOauth } from '../UserRegister/reducer';
import { images } from '../../assets';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../../helpers/styles';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
    }

    componentDidMount() {
        BackHandler.addEventListener('addEventListener', () =>
            BackHandler.exitApp()
        );
    }

    componentWillReceiveProps(nextProps) {
        const { success, errorMessage } = nextProps;
        if (errorMessage !== '' && errorMessage !== this.props.errorMessage) {
            Toast.show(errorMessage);
            this.props.clearErrorMessage();
        }
        if (success && this.props.success !== success) {
            const navigateAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'Dashboard' })
                ]
            });
            this.props.navigation.dispatch(navigateAction);
        }
    }

    componentWillUnmount() {
        BackHandler.addEventListener('addEventListener', () =>
            BackHandler.exitApp()
        );
    }

    onClickLogin = () => {
        const { username, password } = this.props.loginInputField || {};
        this.props.loginFlow({ username, password });
    };

    setLoginInputField = (field, value) => {
        this.props.updateLoginInputField(field, value);
    };

    textInputFocus = field => {
        this.props.textInputFocus(field, '#F8E7E9');
    };

    textInputBlur = field => {
        this.props.textInputFocus(field, '#FFFFFF');
    };

    render() {
        const {
            loginInputField,
            isLoading,
            loginData,
            errorMessage,
            inputFocus
        } =
            this.props || {};
        const { username, password } = loginInputField;
        const disableButton = username !== '' && password !== '';

        return (
            <KeyboardAvoidingView style={styles.container} behaviour="padding">
                <View style={styles.container}>
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
                            flex: 1.2,
                            flexDirection: 'column',
                            justifyContent: 'space-around'
                        }}
                    >
                        <Animated.View
                            style={[
                                styles.container,
                                { marginLeft: 20, marginRight: 20 }
                            ]}
                        >
                            <Text>User Name</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={[
                                        styles.inputText,
                                        { backgroundColor: inputFocus.username }
                                    ]}
                                    onFocus={() =>
                                        this.textInputFocus('username')
                                    }
                                    onBlur={() =>
                                        this.textInputBlur('username')
                                    }
                                    onChangeText={value =>
                                        this.setLoginInputField(
                                            'username',
                                            value
                                        )
                                    }
                                    value={username}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                            <Text>Type your password</Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={[
                                        styles.inputText,
                                        { backgroundColor: inputFocus.password }
                                    ]}
                                    onFocus={() =>
                                        this.textInputFocus('password')
                                    }
                                    onBlur={() =>
                                        this.textInputBlur('password')
                                    }
                                    onChangeText={value =>
                                        this.setLoginInputField(
                                            'password',
                                            value
                                        )
                                    }
                                    value={password}
                                    secureTextEntry
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </Animated.View>
                    </View>
                    <View
                        style={{
                            flex: 0.2,
                            justifyContent: 'flex-end'
                        }}
                    >
                        <Text style={{ textAlign: 'center' }}>
                            You can also login with ...
                        </Text>
                    </View>
                    <View
                        style={{
                            flex: 2
                        }}
                    >
                        <ImageBackground
                            source={images.baseline}
                            style={styles.imageBackground}
                        >
                            <View
                                style={[
                                    styles.container,
                                    {
                                        flex: 0.8,
                                        marginLeft: 30,
                                        marginRight: 30,
                                        backgroundColor: 'rgba(52, 52, 52, 0)'
                                    }
                                ]}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'center'
                                    }}
                                >
                                    <Facebook
                                        navigation={this.props.navigation}
                                        authenticate={this.props.socialOauth}
                                        action="login"
                                        socialType="facebook"
                                    />
                                    <Google
                                        navigation={this.props.navigation}
                                        authenticate={this.props.socialOauth}
                                        action="login"
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
                                        style={styles.touchAbleButton}
                                        onPress={() => {
                                            this.onClickLogin();
                                        }}
                                        disabled={!disableButton}
                                    >
                                        <Text style={styles.textButton}>
                                            LOGIN
                                        </Text>
                                    </TouchableOpacity>
                                )}

                                <View
                                    style={{
                                        flex: 0.4,
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <View
                                        style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text style={{ textAlign: 'center' }}>
                                            Not registered yet ?
                                        </Text>
                                        <TouchableOpacity
                                            onPress={() =>
                                                this.props.navigation.navigate(
                                                    'Register'
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
                                                Sign up!
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
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
                                            Forgot Password ?
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateLoginInputField: actions.updateLoginInputField,
            loginFlow: actions.loginFlow,
            textInputFocus: actions.textInputFocus,
            clearErrorMessage: actions.clearErrorMessage,
            socialOauth: socialOauth
        },
        dispatch
    );

const mapStateToProps = () =>
    createStructuredSelector({
        loginInputField: selectors.getLoginInputField(),
        isLoading: selectors.getIsLoadingUser(),
        success: selectors.getLoginData(),
        errorMessage: selectors.getErrorMessage(),
        inputFocus: selectors.getTextInputFocus()
    });

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
