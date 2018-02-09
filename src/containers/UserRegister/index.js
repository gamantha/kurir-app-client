import React from 'react';
import { Actions } from 'react-native-router-flux';
import { ActivityIndicator } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

// import inputStyles from '../../helpers/styles';

import * as actions from './reducer';
import * as selectors from './selectors';

import styles from './styles';

// @flow
class UserRegister extends React.Component {
  onClickRegister = () => {
    const {
      username, email, password, repassword
    } = this.props.inputFields;

    this.props.registerUser(
      {
        username,
        email,
        password,
        repassword
      },
      () => Actions.userLogin({ message: 'Please confirm your email first.' })
    );
  };

  setInputFields = (field, value) => {
    this.props.updateSingleInputField(field, value);
  };

  inputValidation = (field, value) => {
    this.props.validateFields(field, value);
  };

  render() {
    const {
      isLoading, errorMessage, inputFields, inputFieldValidation
    } = this.props || {};
    const {
      username, email, password, repassword
    } = inputFields;

    const { isValidName, isValidEmail, isValidRepassword } = inputFieldValidation;
    const signUpButtonStatus = isValidName && isValidEmail && isValidRepassword;

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your name</Label>
            <Item style={{ borderColor: '#d7283b' }} rounded>
              <Input
                onBlur={() => this.inputValidation('isValidName', username)}
                onChangeText={(value) => this.setInputFields('username', value)}
                value={username}
                autoCapitalize="none"
              />
            </Item>
            <Label>Enter your email</Label>
            <Item style={{ borderColor: '#d7283b' }} rounded>
              <Input
                itemStyle={styles.inputText}
                onBlur={() => this.inputValidation('isValidEmail', email)}
                error={false}
                // style={styles.inputText}
                placeholder="Your Email"
                placeholderTextColor="#BDBDBD"
                onChangeText={(value) => this.setInputFields('email', value)}
                value={email}
                autoCapitalize="none"
              />
            </Item>
            {email && !isValidEmail ? (
              <Text
                style={{
                  paddingLeft: 20,
                  color: '#F44336'
                }}
              >
                Please enter a valid email address
              </Text>
            ) : null}
            <Label>Type your password</Label>
            <Item style={{ borderColor: '#d7283b' }} rounded last>
              <Input
                onBlur={() => this.inputValidation('isValidPassword', password)}
                onChangeText={(value) => this.setInputFields('password', value)}
                value={password}
                secureTextEntry
                autoCapitalize="none"
              />
            </Item>
            <Label>Retype your password</Label>
            <Item style={{ borderColor: '#d7283b' }} rounded last>
              <Input
                onBlur={() => this.inputValidation('isValidRepassword', repassword)}
                onChangeText={(retype) => this.setInputFields('repassword', retype)}
                value={repassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </Item>
            {password && !isValidRepassword ? (
              <Text
                style={{
                  paddingLeft: 20,
                  color: '#F44336'
                }}
              >
                {'Password does not match'}
              </Text>
            ) : null}
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
              <Button rounded disabled={!signUpButtonStatus} onPress={() => this.onClickRegister()}>
                <Text>SIGNUP</Text>
              </Button>
            )}
            <Label onPress={() => Actions.userLogin()}>Or Sign in</Label>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
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
