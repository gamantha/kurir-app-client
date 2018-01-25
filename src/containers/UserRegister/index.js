import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import UserLogin from '../userLogin';
import inputStyles from '../../helpers/styles';

import * as actions from './actions';
import * as selectors from './selectors';

import styles from './styles';

class UserRegister extends React.Component {
  onClickRegister = () => {
    const { username, email, password, repassword } = this.props;
    this.props.registerUser(
      {
        username,
        email,
        password,
        repassword
      },
      () => Actions.profile()
    );
  };

  setInputFields = (field, value) => {
    this.props.updateSingleInputField(field, value);
  };

  inputValidation = (field, value) => {
    this.props.inputFieldValidations(field, value);
  };

  render() {
    const { username, email, password, repassword } = this.props.inputFields || {};
    const { isValidName, isValidEmail, isValidRepassword } = this.props.inputFieldValidation || {};
    const signUpButtonStatus = isValidName && isValidEmail && isValidRepassword;
    console.log('hh', !!repassword && signUpButtonStatus);
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your name</Label>
            <Item rounded>
              <Input
                onBlur={() => this.inputValidation('isValidName', username)}
                onChangeText={(value) => this.setInputFields('username', value)}
                value={username}
                autoCapitalize="none"
              />
            </Item>
            <Label>Enter your email</Label>
            <Item rounded>
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
            {isValidEmail ? null : (
              <Text
                style={{
                  paddingLeft: 20,
                  color: '#F44336'
                }}
              >
                Please enter a valid email address
              </Text>
            )}
            <Label>Type your password</Label>
            <Item rounded last>
              <Input
                onBlur={() => this.inputValidation('isValidPassword', password)}
                onChangeText={(value) => this.setInputFields('password', value)}
                value={password}
                secureTextEntry
                autoCapitalize="none"
              />
            </Item>
            <Label>Retype your password</Label>
            <Item rounded last>
              <Input
                onBlur={() => this.inputValidation('isValidRepassword', repassword)}
                onChangeText={(retype) => this.setInputFields('repassword', retype)}
                value={repassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </Item>
            {isValidRepassword ? null : (
              <Text
                style={{
                  paddingLeft: 20,
                  color: '#F44336'
                }}
              >
                {'Password does not match'}
              </Text>
            )}
            <Button
              disabled={!!repassword && signUpButtonStatus}
              rounded
              primary={signUpButtonStatus}
              onPress={() => this.onClickRegister()}
            >
              <Text>SIGNUP</Text>
            </Button>
            <Label onPress={() => Actions.userLogin()}>Or Sign in</Label>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: selectors.getIsLoading(),
    inputFields: selectors.getInputFields(),
    registerData: selectors.getRegisterUser(),
    inputFieldValidation: selectors.getInputFieldValidation()
  });

export default connect(mapStateToProps, actions)(UserRegister);
