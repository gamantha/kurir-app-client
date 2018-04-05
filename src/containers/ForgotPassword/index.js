import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image,
    TextInput,
    Button,
    BackHandler
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as actions from './reducer';
import * as selectors from './selectors';
import VerificationCodeInput from '../VerificationCode';
import styles from '../../helpers/styles';
import { images } from '../../assets';

class ForgotPasswordInput extends Component {

    componentDidMount() {
        BackHandler.addEventListener('addEventListener', () =>
            this.props.navigation.navigate(
                'Login'
            )
        );
    }

    componentWillReceiveProps(nextProps) {
        const { statusMessage } = nextProps;
        const { message } = statusMessage;
        if (message !== '' && message !== this.props.message) {
            Toast.show(message);
        }
    }

    componentWillUnmount() {
        BackHandler.addEventListener('addEventListener', () =>
            this.props.navigation.navigate(
                'Login'
            )
        );
    }

    setEmail = email => {
        this.props.setEmail(email);
    };

    handlePress = email => {
        this.props.forgotPassword({ email });
    };

    render() {
        const { statusMessage, email } = this.props;
        const { status } = statusMessage;

        if (status) {
            return <VerificationCodeInput email={email} />;
        }
        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1.5,
                        justifyContent: 'space-between'
                    }}
                >
                    <View
                        style={[
                            styles.container,
                            { marginLeft: 25, marginRight: 25 }
                        ]}
                    >
                        <View
                            style={{
                                flex: 0.3,
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                Forgot Password
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 0.6,
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 0.8,
                                    justifyContent: 'flex-start',
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    Enter Your email address and we will send a
                                    verification number through your email
                                </Text>
                            </View>

                            <View
                                style={{
                                    flex: 0.2
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flex: 1.5
                    }}
                >
                    <View
                        style={[
                            styles.container,
                            {
                                marginLeft: 25,
                                marginRight: 25,
                                justifyContent: 'space-around'
                            }
                        ]}
                    >
                        <View
                            style={{
                                flex: 0.2,
                                flexDirection: 'row',
                                alignItems: 'flex-end'
                            }}
                        >
                            <Text style={{ fontSize: 16 }}>Email:</Text>
                        </View>
                        <View
                            style={{
                                flex: 0.5,
                                justifyContent: 'space-around'
                            }}
                        >
                            <TextInput
                                style={[styles.inputText, { flex: 0.5 }]}
                                onChangeText={value => this.setEmail(value)}
                                value={email}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{ flex: 0.3 }}>
                            <TouchableOpacity
                                style={[styles.touchAbleButton, { height: 45 }]}
                                onPress={() => {
                                    this.handlePress(email);
                                }}
                                disabled={!(email.length > 0)}
                            >
                                <Text style={styles.textButton}>
                                    SEND EMAIL
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 3 }}>
                    <ImageBackground
                        source={images.baseline}
                        style={styles.imageBackground}
                    />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setEmail: actions.setEmail,
            forgotPassword: actions.forgotPassword
        },
        dispatch
    );

const mapStateToProps = () =>
    createStructuredSelector({
        isShowLoading: selectors.getShowLoading(),
        statusMessage: selectors.getMessage(),
        email: selectors.getEmail()
    });

export default connect(mapStateToProps, mapDispatchToProps)(
    ForgotPasswordInput
);
