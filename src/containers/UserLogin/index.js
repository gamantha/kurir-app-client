import React, { Component } from 'react';
import Toast from 'react-native-simple-toast';
import { Actions } from 'react-native-router-flux';
import { ActivityIndicator } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import * as selectors from './selectors';
import { getErrorMessage } from '../UserRegister/selectors';

class UserLogin extends Component {
  onClickLogin = () => {
    const { username, password } = this.props.loginInputField || {};
    this.props.loginUser({ username, password }, () => Actions.profile());
  };

  setLoginInputField = (field, value) => {
    this.props.updateLoginInputField(field, value);
  };

  render() {
    const {
      loginInputField, isLoading, loginData, errorMessage
    } = this.props || {};
    const { username, password } = loginInputField;
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your email or username</Label>
            <Item rounded>
              <Input
                onChangeText={(value) => this.setLoginInputField('username', value)}
                value={username}
                autoCapitalize="none"
              />
            </Item>
            <Label>Enter your password</Label>
            <Item rounded>
              <Input
                onChangeText={(value) => this.setLoginInputField('password', value)}
                value={password}
                autoCapitalize="none"
                secureTextEntry
              />
            </Item>
            {errorMessage !== '' ? (
              <Text
                style={{
                  paddingLeft: 20,
                  color: '#F44336'
                }}
              >
                {errorMessage}
              </Text>
            ) : null}
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
            <Label onPress={() => Actions.forgotPassword()}>Forgot password</Label>
          </Form>
          {this.props.message ? Toast.show(this.props.message) : null}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    loginInputField: selectors.getLoginInputField(),
    isLoading: selectors.getIsLoadingUser(),
    loginData: selectors.getLoginData(),
    errorMessage: getErrorMessage()
  });

export default connect(mapStateToProps, actions)(UserLogin);
