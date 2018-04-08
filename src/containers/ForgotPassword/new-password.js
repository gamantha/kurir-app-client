import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
    ActivityIndicator,
    Text,
    TextInput,
    View,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Toast from 'react-native-simple-toast';

import * as actions from './reducer';

import styles from '../../helpers/styles';
import { images } from '../../assets';
// import NewPasswordInput from '../newPassword';

class NewPassword extends Component {
    componentWillReceiveProps(nextProps) {
        const { message } = nextProps;
        if (message) {
            Toast.show(message);
        }
    }
    render() {
        const { message, loading, newPassword, email } = this.props;

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
                                flex: 1,
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'
                                }}
                            >
                                Enter your new password:
                            </Text>
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
                                flex: 0.5,
                                justifyContent: 'space-around'
                            }}
                        >
                            <TextInput
                                placeholder="your new password"
                                style={[styles.inputText, { flex: 0.5 }]}
                                onChangeText={text =>
                                    this.props.updateField('newPassword', text)
                                }
                                value={newPassword}
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
                                    onPress={this.props.requestNewPassword}
                                    disabled={!(email.length > 0)}
                                >
                                    <Text style={styles.textButton}>
                                        SUBMIT
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
    updateField: (field, password) =>
        dispatch(actions.updateField(field, password)),
    requestNewPassword: () => dispatch(actions.requestNewPassword())
});

const mapStateToProps = state => state.forgotPassword;

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);
