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

import * as actions from './reducer';
import styles from '../../helpers/styles';
import { images } from '../../assets';

class ForgotPassword extends Component {
    componentDidMount() {
        BackHandler.addEventListener('addEventListener', () =>
            this.props.navigation.navigate('Login')
        );
    }

    componentWillReceiveProps(nextProps) {
        const { message } = nextProps;
        if (message) {
            Toast.show(message);
        }
    }

    componentWillUnmount() {
        BackHandler.addEventListener('addEventListener', () =>
            this.props.navigation.navigate('Login')
        );
    }
    render() {
        const { email } = this.props;
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
                                onChangeText={text =>
                                    this.props.setEmail('email', text)
                                }
                                value={email}
                                autoCapitalize="none"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{ flex: 0.3 }}>
                            {this.props.showLoading ? (
                                <ActivityIndicator
                                    size="large"
                                    color="#BD303f"
                                />
                            ) : (
                                <TouchableOpacity
                                    style={[
                                        styles.touchAbleButton,
                                        { height: 45 }
                                    ]}
                                    onPress={this.props.forgotPassword}
                                    disabled={!(email.length > 0)}
                                >
                                    <Text style={styles.textButton}>
                                        SEND EMAIL
                                    </Text>
                                </TouchableOpacity>
                            )}
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

const mapDispatchToProps = dispatch => ({
    setEmail: (field, email) => dispatch(actions.updateField(field, email)),
    forgotPassword: () => dispatch(actions.forgotPassword())
});

const mapStateToProps = state => state.forgotPassword;

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
