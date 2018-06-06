import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import {
    Animated,
    ActivityIndicator,
    Dimensions,
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
    BackHandler,
    Alert
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Facebook from '../../components/Facebook';
import Google from '../../components/Google';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as actions from './reducer';
import * as selectors from './selectors';
import { socialOauth } from '../UserRegister/reducer';
import { images } from '../../assets';
import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from '../../helpers/styles';

const HEIGHT = Dimensions.get('window').width;

class UserLogin extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)

    };

    componentWillReceiveProps(nextProps) {
        const { success, errorMessage } = nextProps;
        if (errorMessage !== '') {
            Toast.show(errorMessage);
            this.props.clearErrorMessage();
        }
    }
      
    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?', 
            [{ text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            { text: 'OK', onPress: () => BackHandler.exitApp() },
            ], { cancelable: true }
        )
        return true;
    } 
      
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
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
            <ScrollView>
                <View style={styles.container}>
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
                                width: 120,
                                height: 120
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
                        <View
                            style={[
                                styles.container,
                                {
                                    marginLeft: 20,
                                    marginRight: 20
                                }
                            ]}
                        >
                            <Text>User Name</Text>
                            <View
                                style={[
                                    styles.inputTextContainer,
                                    { marginBottom: 30 }
                                ]}
                            >
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
                                    secureTextEntry={this.state.password}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                                <Icon style={styles.iconEye}
                                    name={this.state.icEye}
                                    size={20}
                                    color={this.props.iconColor}
                                    onPress={this.changePwdType}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{
                            flex: 0.2,
                            justifyContent: 'flex-end'
                        }}
                    >
                        {/* <Text style={{ textAlign: 'center' }}>
                            You can also login with ...
                        </Text> */}
                    </View>
                    {/* <View
                        style={{
                            flex: 2,
                            borderWidth: 1,
                            borderColor: 'green'
                        }}
                    > */}
                    <ImageBackground
                        source={images.baseline}
                        style={{
                            position: 'relative',
                            height: HEIGHT,
                            justifyContent: 'space-around'
                        }}
                    >
                        <View
                            style={[
                                styles.container,
                                {
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
                                {/* <Facebook
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
                                    /> */}
                            </View>
                            {isLoading ? (
                                <ActivityIndicator
                                    size="large"
                                    color="#00ff00"
                                />
                            ) : (
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
                                    top: -80,
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        marginBottom: 30
                                    }}
                                >
                                    <Text style={{ textAlign: 'center' }}>
                                        Not registered yet ?
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() => this.props.toRegister()}
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
                    {/* </View> */}
                </View>
            </ScrollView>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateLoginInputField: (field, value) =>
        dispatch(actions.updateLoginInputField(field, value)),
    loginFlow: payload => dispatch(actions.loginFlow(payload)),
    textInputFocus: (field, value) =>
        dispatch(actions.textInputFocus(field, value)),
    clearErrorMessage: () => dispatch(actions.clearErrorMessage()),
    socialOauth: () => dispatch(socialOauth()),
    toRegister: () =>
        dispatch(
            NavigationActions.navigate({
                routeName: 'Register'
            })
        )
});

const mapStateToProps = () =>
    createStructuredSelector({
        loginInputField: selectors.getLoginInputField(),
        isLoading: selectors.getIsLoadingUser(),
        success: selectors.getLoginData(),
        errorMessage: selectors.getErrorMessage(),
        inputFocus: selectors.getTextInputFocus()
    });

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
