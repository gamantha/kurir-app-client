import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import {
    ActivityIndicator,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Button,
    ImageBackground
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './reducer';
import * as selectors from './selectors';
import { images } from '../../assets';
import styles from '../../helpers/styles';

class UserLogin extends Component {
    componentWillReceiveProps(nextProps) {
        const { errorMessage, success } = nextProps;
        if (errorMessage) {
            Toast.show(errorMessage, Toast.LONG);
        }
        if (success) {
            this.props.navigation.navigate('Dashboard');
        }
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
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Image
                        source={images.logo}
                        style={{ width: 120, height: 120 }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-around'
                    }}
                >
                    <View
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
                                onFocus={() => this.textInputFocus('username')}
                                onBlur={() => this.textInputBlur('username')}
                                onChangeText={value =>
                                    this.setLoginInputField('username', value)
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
                                onFocus={() => this.textInputFocus('password')}
                                onBlur={() => this.textInputBlur('password')}
                                onChangeText={value =>
                                    this.setLoginInputField('password', value)
                                }
                                value={password}
                                secureTextEntry
                                autoCapitalize="none"
                                autoCorrect={false}
                                underlineColorAndroid="transparent"
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.4, justifyContent: 'flex-end' }}>
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
                                    style={styles.touchAbleButton}
                                    onPress={() => {
                                        this.onClickLogin();
                                    }}
                                    disabled={!disableButton}
                                >
                                    <Text style={styles.textButton}>LOGIN</Text>
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
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateLoginInputField: actions.updateLoginInputField,
            loginFlow: actions.loginFlow,
            textInputFocus: actions.textInputFocus
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
