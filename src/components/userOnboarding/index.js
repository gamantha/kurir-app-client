import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';

import { connect } from 'react-redux';

import { userTryToRegister } from './actions';

class userOnboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      retype: '',
    };
  }

  onClickRegister(data) {
    this.props.userTryToRegister(data);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your name</Label>
            <Item rounded>
              <Input
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
              />
            </Item>
            <Label>Enter your email</Label>
            <Item rounded>
              <Input
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Label>Type your password</Label>
            <Item rounded last>
              <Input
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
              />
            </Item>
            <Label>Retype your password</Label>
            <Item rounded last>
              <Input
                onChangeText={retype => this.setState({ retype })}
                value={this.state.retype}
                secureTextEntry
              />
            </Item>
            <Button
              rounded
              primary
              onPress={() => this.onClickRegister(this.state)}
            >
              <Text>SIGNUP</Text>
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
  userTryToRegister: (data) => {
    dispatch(userTryToRegister(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(userOnboarding);
