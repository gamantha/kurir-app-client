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
  Root
} from 'native-base';

import store from '../../store';
import { connectWithStore } from '../../helpers/utils';
import { changeUserPassword } from './actions';

class NewPasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      retypePassword: ''
    };
  }

  onPressChangePassword(password, email) {
    const requestBody = { password, email };
    this.props.changeUserPassword(requestBody);
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Your new password</Label>
            <Item rounded>
              <Input
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
                autoCapitalize="none"
              />
            </Item>
            <Label>Retype your new password</Label>
            <Item rounded>
              <Input
                onChangeText={(retypePassword) => this.setState({ retypePassword })}
                value={this.state.retypePassword}
                autoCapitalize="none"
              />
            </Item>
            <Button
              rounded
              primary
              onPress={() => {
                this.onPressChangePassword(this.state.password, this.props.email);
              }}
            >
              <Text>SAVE</Text>
            </Button>
            <Text>
              {this.props.msgReducer.checkVerifCodeMsg.isLoading ? 'loading' : 'tidak loading'}
            </Text>
            <Text>
              {this.props.msgReducer.checkVerifCodeMsg.isSuccess ? 'sukses' : 'tidak sukses'}
            </Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  msgReducer: state.msgReducer,
  userReducer: state.userReducer
});

const mapDispatchToProps = (dispatch) => ({
  changeUserPassword: (requestBody) => {
    dispatch(changeUserPassword(requestBody));
  }
});

export default connectWithStore(store, NewPasswordInput, mapStateToProps, mapDispatchToProps);
