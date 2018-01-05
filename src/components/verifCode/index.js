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
import { checkVeriCode } from './actions';

class VerifCodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      veriCode: '',
    };
  }

  onPressSendVeriCode(veriCode, email) {
    const requestBody = { veriCode, email };
    this.props.checkVeriCode(requestBody);
  }

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

const mapStateToProps = state => ({
  msgReducer: state.msgReducer,
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  checkVeriCode: (requestBody) => {
    dispatch(checkVeriCode(requestBody));
  },
});

export default connectWithStore(store, VerifCodeInput, mapStateToProps, mapDispatchToProps);
