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
  Toast,
  Root,
} from 'native-base';

import { connect, Provider } from 'react-redux';

import Expo from 'expo';

import store from '../../store';

import { userTryToLogin, userClickRegisterLabel } from './actions';

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

  // componentDidMount() {
  //   Expo.SecureStore.getItemAsync('token').then((result) => {
  //     console.log(result);
  //   });
  // }

  onClickLogin(data) {
    this.props.userTryToLogin(data);
  }

  render() {
    console.log(this.props);
    return (
      <Root>
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
                  secureTextEntry
                />
              </Item>
              <Button
                rounded
                primary
                onPress={() => {
                  this.onClickLogin(this.state.loginData);
                }}
              >
                <Text>Submit</Text>
              </Button>
              <Label onPress={() => this.props.userClickRegisterLabel()}>Go back to Register</Label>
            </Form>
          </Content>
        </Container>
      </Root>
    );
  }
}

const connectWithStore = (store, WrappedComponent, ...args) => {
  const ConnectedWrappedComponent = connect(...args)(WrappedComponent);
  return function (props) {
    return <ConnectedWrappedComponent {...props} store={store} />;
  };
};

const mapStateToProps = state => ({
  msgReducer: state.msgReducer,
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  userTryToLogin: (data) => {
    dispatch(userTryToLogin(data));
  },
  userClickRegisterLabel: () => {
    dispatch(userClickRegisterLabel());
  },
});

export default connectWithStore(store, UserLogin, mapStateToProps, mapDispatchToProps);
// export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);
