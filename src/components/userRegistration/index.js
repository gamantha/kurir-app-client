import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';

// import Expo from 'expo';

import UserLogin from '../userLogin';

import { userTryToRegister, userClickLoginLabel } from './actions';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerData: {
        name: '',
        email: '',
        password: '',
        retype: '',
      },
    };
  }

  onClickRegister(data) {
    this.props.userTryToRegister(data);
  }

  onClickUserWantsToLogin() {
    console.log(this.state);
  }

  render() {
    if (!this.props.userReducer.userOnLoginPage) {
      return (
        <Container>
          <Header />
          <Content>
            <Form>
              <Label>Enter your name</Label>
              <Item rounded>
                <Input
                  onChangeText={name =>
                    this.setState({
                      registerData: { ...this.state.registerData, name },
                    })
                  }
                  value={this.state.registerData.name}
                  autoCapitalize="none"
                />
              </Item>
              <Label>Enter your email</Label>
              <Item rounded>
                <Input
                  onChangeText={email =>
                    this.setState({
                      registerData: { ...this.state.registerData, email },
                    })
                  }
                  value={this.state.registerData.email}
                  autoCapitalize="none"
                />
              </Item>
              <Label>Type your password</Label>
              <Item rounded last>
                <Input
                  onChangeText={password =>
                    this.setState({
                      registerData: { ...this.state.registerData, password },
                    })
                  }
                  value={this.state.registerData.password}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </Item>
              <Label>Retype your password</Label>
              <Item rounded last>
                <Input
                  onChangeText={retype =>
                    this.setState({
                      registerData: { ...this.state.registerData, retype },
                    })
                  }
                  value={this.state.registerData.retype}
                  secureTextEntry
                  autoCapitalize="none"
                />
              </Item>
              <Button rounded primary onPress={() => this.onClickRegister(this.state.registerData)}>
                <Text>SIGNUP</Text>
              </Button>
              <Label onPress={() => this.props.userClickLoginLabel()}>Or Sign in</Label>
            </Form>
          </Content>
        </Container>
      );
    }
    return <UserLogin />;
  }
}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  userTryToRegister: (data) => {
    dispatch(userTryToRegister(data));
  },
  userClickLoginLabel: (data) => {
    dispatch(userClickLoginLabel(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistration);
