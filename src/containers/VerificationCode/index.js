import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
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

import * as actions from './actions';
import * as selectors from './selectors';
// import NewPasswordInput from '../newPassword';

class VerificationCode extends Component {
  onPressSendVeriCode = (verificationCode, email) => {
    const verificationCodePayload = { verificationCode, email };
    this.props.checkCodeVerification(verificationCodePayload);
  };

  setVerificationCode = (verificationCode) => {
    this.props.setVerificationCode(verificationCode);
  };

  render() {
    const { verificationStatus } = this.props;
    // if (verificationSuccess) {
    //   return <NewPasswordInput email={this.props.email} />;
    // }
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your verification code:</Label>
            <Item rounded>
              <Input
                onChangeText={(verificationCode) => this.setVerificationCode(verificationCode)}
                value={this.props.verificationCode}
                autoCapitalize="none"
              />
            </Item>
            <Button
              rounded
              primary
              onPress={() => {
                this.onPressSendVeriCode(this.props.verificationCode, this.props.email);
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

const mapStateToProps = () =>
  createStructuredSelector({
    verificationCode: selectors.getVerificationCode(),
    isLoading: selectors.getIsLoading(),
    verificationStatus: selectors.getVerificationStatus(),
    verificationMessage: selectors.getVerificationMessage()
  });

export default connect(mapStateToProps, actions)(VerificationCode);
