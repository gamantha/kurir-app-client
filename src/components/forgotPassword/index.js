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

import { sendForgotPassVerificationCode } from './actions';
import store from '../../store';
import { connectWithStore } from '../../helpers/utils';
import VerifCodeInput from '../verifCode';

class ForgotPasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  onPressSendEmail(email) {
    this.props.sendForgotPassVerificationCode({ email });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.props.msgReducer.forgotPassMsg.isSuccess) {
      return <VerifCodeInput />;
    }
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your email</Label>
            <Item rounded>
              <Input
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
                autoCapitalize="none"
              />
            </Item>
            <Button
              rounded
              primary
              onPress={() => {
                this.onPressSendEmail(this.state.email);
              }}
            >
              <Text>SEND EMAIL</Text>
            </Button>
            <Text>
              {this.props.msgReducer.forgotPassMsg.isLoading ? 'loading' : 'tidak loading'}
            </Text>
            <Text>{this.props.msgReducer.forgotPassMsg.isSuccess ? 'sukses' : 'tidak sukses'}</Text>
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
  sendForgotPassVerificationCode: (email) => {
    dispatch(sendForgotPassVerificationCode(email));
  },
});

export default connectWithStore(store, ForgotPasswordInput, mapStateToProps, mapDispatchToProps);
