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

import { connect } from 'react-redux';

import { connectWithStore } from '../../helpers/utils';

import store from '../../store';

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

  // componentDidMount() {
  //   Expo.SecureStore.getItemAsync('token').then((result) => {
  //     console.log(result);
  //   });
  // }

  onClickLogin(data) {
    this.props.userTryToLogin(data);
  }

  render() {
    const { navigate } = this.props.navigation;
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
            <Label onPress={() => navigate('ForgotPassword')}>Forgot password</Label>
          </Form>
        </Content>
      </Container>
    );
  }
}

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
