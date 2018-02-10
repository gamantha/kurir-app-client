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

import styles from './styles';

// @flow
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
        const {
            username,
            email,
            password,
            repassword
        } = this.props.inputFields;

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
        const { username, email, password, repassword } = inputFields;

        const {
            isValidName,
            isValidEmail,
            isValidRepassword
        } = inputFieldValidation;
        const signUpButtonStatus =
            isValidName && isValidEmail && isValidRepassword;

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
                            flex: 0.7,
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
                                value={username}
                            />
                            <Icon
                                name="check"
                                size={20}
                                color="#9DD340"
                                style={styles.icon}
                            />
                        </View>
                        <Text>Type your password</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={text =>
                                    this.setInputFields('password', text)
                                }
                                value={username}
                            />
                            <Icon
                                name="check"
                                size={20}
                                color="#9DD340"
                                style={styles.icon}
                            />
                        </View>

                        <Text>Retype your password</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onChangeText={text =>
                                    this.setInputFields('repassword', text)
                                }
                                value={username}
                            />
                            <Icon
                                name="check"
                                size={20}
                                color="#9DD340"
                                style={styles.icon}
                            />
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
                                style={{ width: 60, height: 60 }}
                            />
                            <Image
                                source={images.google}
                                style={{ width: 50, height: 50 }}
                            />
                        </View>
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#BD303f',
                                borderWidth: 1,
                                borderRadius: 50,
                                borderColor: '#BC2938',
                                height: 50,
                                justifyContent: 'center',
                                marginLeft: 20,
                                marginRight: 20
                            }}
                        >
                            <Button
                                style={{}}
                                color="#FFFFFF"
                                title="SIGNUP"
                                onPress={() => {}}
                            />
                        </TouchableOpacity>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{ textAlign: 'center' }}>
                                Forgot Password ?
                            </Text>
                            <TouchableOpacity onPress={() => {}}>
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
