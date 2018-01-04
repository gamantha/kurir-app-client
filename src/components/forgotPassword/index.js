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
// export default ForgotPasswordInput;
