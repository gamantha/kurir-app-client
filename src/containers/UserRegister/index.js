import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import UserLogin from '../userLogin';
import inputStyles from '../../helpers/styles';

import * as actions from './actions';
import * as selectors from './selectors';

class UserRegister extends React.Component {
  onClickRegister = () => {
    const { username, email, password, repassword } = this.props;
    this.props.registerUser({
      username,
      email,
      password,
      repassword
    });
  };

  setUserName = (name) => {
    this.props.setUserName(name);
  };

  setEmail = (email) => {
    this.props.setEmail(email);
  };

  setPassword = (password) => {
    this.props.setPassword(password);
  };

  setRePassword = (password) => {
    this.props.setRePassword(password);
  };

  render() {
    const { username } = this.props;
    // if (!state.userReducer.userOnLoginPage) {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your name</Label>
            <Item rounded>
              <Input
                onChangeText={(name) => this.setUserName(name)}
                value={username}
                autoCapitalize="none"
              />
            </Item>
            <Label>Enter your email</Label>
            <Item rounded>
              <Input
                onChangeText={(email) => this.setEmail(email)}
                value={this.props.email}
                autoCapitalize="none"
              />
            </Item>
            <Label>Type your password</Label>
            <Item rounded last>
              <Input
                onChangeText={(password) => this.setPassword(password)}
                value={this.props.password}
                secureTextEntry
                autoCapitalize="none"
              />
            </Item>
            <Label>Retype your password</Label>
            <Item rounded last>
              <Input
                onChangeText={(retype) => this.setRePassword(retype)}
                value={this.props.repassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </Item>
            <Button rounded primary onPress={() => this.onClickRegister()}>
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
    username: selectors.getUsername(),
    email: selectors.getEmail(),
    password: selectors.getPassword(),
    repassword: selectors.getRepassword(),
    registerData: selectors.getRegisterUser()
  });

export default connect(mapStateToProps, actions)(UserRegister);
