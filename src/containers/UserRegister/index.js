import React from 'react';
import {
    ActivityIndicator,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Button,
    Image
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import inputStyles from '../../helpers/styles';
import { images } from '../../assets';

import * as actions from './reducer';
import * as selectors from './selectors';

import globalStyles from '../../helpers/styles';
import styles from './styles';

class UserRegister extends React.Component {
    componentWillReceiveProps(nextProps) {
        const { errorMessage, registerData } = nextProps;
        if (errorMessage) {
            Toast.show(errorMessage, Toast.LONG);
        }
        if (registerData.createdAt) {
            this.props.navigation.navigate('Login');
            Toast.show(
                'Please confirm your first before using Kurir',
                Toast.LONG
            );
        }
    }

    onClickRegister = () => {
        const { email, password, repassword } = this.props.inputFields;
        const username = email.split('@')[0];
        console.log('CLICK Register', username, this.props);
        this.props.registerUser({
            username,
            email,
            password,
            repassword,
            role: 'sender'
        });
    };

    setInputFields = (field, value) => {
        this.props.updateSingleInputField(field, value);
    };

    inputValidation = (field, value) => {
        this.props.validateFields(field, value);
    };

    render() {
        const { isLoading, errorMessage, inputFields, inputFieldValidation } =
            this.props || {};
        const { email, password, repassword } = inputFields;

        const {
            isValidEmail,
            isValidRepassword,
            isValidPassword
        } = inputFieldValidation;
        const signUpButtonStatus = isValidEmail && isValidRepassword;
        console.log('button status', signUpButtonStatus);
        console.log('isValidEmail', isValidEmail);
        console.log('isValidRepassword', isValidRepassword);
        console.log('isValidPassword', isValidPassword);
        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.container,
                        { marginLeft: 25, marginRight: 25 }
                    ]}
                >
                    <View
                        style={{
                            flex: 0.5,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={images.logo}
                            style={{ width: 100, height: 100 }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}
                    >
                        <Text>Enter your email ID</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={text =>
                                    this.setInputFields('email', text)
                                }
                                onBlur={() =>
                                    this.inputValidation('isValidEmail', email)
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
                                    color={isValidEmail ? '#9DD340' : '#BD303f'}
                                    style={styles.icon}
                                />
                            )}
                        </View>
                        <Text>Type your password</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onBlur={() =>
                                    this.inputValidation(
                                        'isValidPassword',
                                        password
                                    )
                                }
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
                                    name={isValidPassword ? 'check' : 'clear'}
                                    size={20}
                                    color={
                                        isValidPassword ? '#9DD340' : '#BD303f'
                                    }
                                    style={styles.icon}
                                />
                            )}
                        </View>

                        <Text>Retype your password</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onBlur={() =>
                                    this.inputValidation(
                                        'isValidRepassword',
                                        repassword
                                    )
                                }
                                onChangeText={retype =>
                                    this.setInputFields('repassword', retype)
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
                                    name={isValidRepassword ? 'check' : 'clear'}
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
                            <ActivityIndicator size="large" color="#00ff00" />
                        ) : (
                            <TouchableOpacity
                                style={globalStyles.touchAbleButton}
                                disabled={!signUpButtonStatus}
                                onPress={() =>
                                    this.props.navigation.navigate('Register')
                                }
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
                                    this.props.navigation.navigate('Password')
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
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            registerUser: actions.registerUser,
            validateFields: actions.inputFieldValidations,
            updateSingleInputField: actions.updateSingleInputField
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
