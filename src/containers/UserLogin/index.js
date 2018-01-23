import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import * as selectors from './selectors';

class UserLogin extends Component {
  onClickLogin = () => {
    this.props.loginUser(this.props.email, this.props.password);
  };

  setPassword = (password) => {
    this.props.setPassword(password);
  };

  setEmail = (email) => {
    this.props.setEmail(email);
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your email</Label>
            <Item rounded>
              <Input
                onChangeText={(email) => this.setEmail(email)}
                value={this.props.email}
                autoCapitalize="none"
              />
            </Item>
            <Label>Enter your password</Label>
            <Item rounded>
              <Input
                onChangeText={(password) => this.setPassword(password)}
                value={this.props.password}
                autoCapitalize="none"
                secureTextEntry
              />
            </Item>
            <Button
              rounded
              primary
              onPress={() => {
                this.onClickLogin();
              }}
            >
              <Text>Submit</Text>
            </Button>
            <Label onPress={() => Actions.forgotPassword()}>Forgot password</Label>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    email: selectors.getEmail(),
    password: selectors.getPassword(),
    isLoading: selectors.getIsLoadingUser(),
    loginData: selectors.getLoginData()
  });

export default connect(mapStateToProps, actions)(UserLogin);
