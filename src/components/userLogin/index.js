import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

import { connect } from 'react-redux';

import { userTryToLogin } from './actions';

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginData: {
        email: '',
        password: '',
      },
    };
  }

  onClickLogin(data) {
    this.props.userTryToLogin(data);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your email</Label>
            <Item rounded>
              <Input
                onChangeText={email =>
                  this.setState({
                    loginData: { ...this.state.loginData, email },
                  })
                }
                value={this.state.loginData.email}
                autoCapitalize="none"
              />
            </Item>
            <Label>Enter your password</Label>
            <Item rounded>
              <Input
                onChangeText={password =>
                  this.setState({
                    loginData: { ...this.state.loginData, password },
                  })
                }
                value={this.state.loginData.password}
                autoCapitalize="none"
              />
            </Item>
            <Button rounded primary onPress={() => this.onClickLogin(this.state.loginData)}>
              <Text>Submit</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  userTryToLogin: (data) => {
    dispatch(userTryToLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
