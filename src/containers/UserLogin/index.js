import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import { ActivityIndicator } from 'react-native';
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text
} from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './reducer';
import * as selectors from './selectors';

class UserLogin extends Component {
    componentWillReceiveProps(nextProps) {
        const { errorMessage, success } = nextProps;
        if (errorMessage) {
            Toast.show(errorMessage, Toast.LONG);
        }
        if (success) {
            this.props.navigation.navigate('Profile');
        }
    }

    onClickLogin = () => {
        const { username, password } = this.props.loginInputField || {};
        this.props.loginFlow({ username, password });
    };

    setLoginInputField = (field, value) => {
        this.props.updateLoginInputField(field, value);
    };

    render() {
        const { loginInputField, isLoading, loginData, errorMessage } =
            this.props || {};
        const { username, password } = loginInputField;
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Label>Enter your email or username</Label>
                        <Item rounded>
                            <Input
                                onChangeText={value =>
                                    this.setLoginInputField('username', value)
                                }
                                value={username}
                                autoCapitalize="none"
                            />
                        </Item>
                        <Label>Enter your password</Label>
                        <Item rounded>
                            <Input
                                onChangeText={value =>
                                    this.setLoginInputField('password', value)
                                }
                                value={password}
                                autoCapitalize="none"
                                secureTextEntry
                            />
                        </Item>
                        {isLoading ? (
                            <ActivityIndicator size="large" color="#00ff00" />
                        ) : (
                            <Button
                                rounded
                                primary
                                onPress={() => {
                                    this.onClickLogin();
                                }}
                            >
                                <Text>Submit</Text>
                            </Button>
                        )}
                        <Label
                            onPress={() =>
                                this.props.navigation.navigate('ForgotPassword')
                            }
                        >
                            Forgot password
                        </Label>
                    </Form>
                    {this.props.message ? Toast.show(this.props.message) : null}
                </Content>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateLoginInputField: actions.updateLoginInputField,
            loginFlow: actions.loginFlow
        },
        dispatch
    );

const mapStateToProps = () =>
    createStructuredSelector({
        loginInputField: selectors.getLoginInputField(),
        isLoading: selectors.getIsLoadingUser(),
        success: selectors.getLoginData(),
        errorMessage: selectors.getErrorMessage()
    });

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
