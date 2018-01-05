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

import store from '../../store';
import { connectWithStore } from '../../helpers/utils';

class VerifCodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      veriCode: '',
    };
  }

  onPressSendVeriCode(veriCode, email) {}

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your verification code:</Label>
            <Item rounded>
              <Input
                onChangeText={veriCode => this.setState({ veriCode })}
                value={this.state.veriCode}
                autoCapitalize="none"
              />
            </Item>
            <Button
              rounded
              primary
              onPress={() => {
                this.onPressSendVeriCode(this.state.veriCode, this.props.email);
              }}
            >
              <Text>NEXT</Text>
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

// const mapDispatchToProps = dispatch => ({
//   sendForgotPassVerificationCode: (email) => {
//     dispatch(sendForgotPassVerificationCode(email));
//   },
// });

export default connectWithStore(store, VerifCodeInput, mapStateToProps, null);
