import React, { Component } from 'react';
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
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './actions';
import * as selectors from './selectors';
import VerificationCodeInput from '../VerificationCode';

class ForgotPasswordInput extends Component {
  onPressSendEmail = (email) => {
    this.props.forgotPassword({ email });
  };

  setEmail = (email) => {
    this.props.setEmail(email);
  };

  render() {
    if (this.props.status) {
      return <VerificationCodeInput email={this.props.email} />;
    }
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Label>Enter your email</Label>
            <Item rounded>
              <Input
                onChangeText={(email) => this.setEmail(email)}
                value={this.props.email}
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
            <Text>{null ? 'loading' : 'tidak loading'}</Text>
            <Text>{null ? 'sukses' : 'tidak sukses'}</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isShowLoading: selectors.getShowLoading(),
    message: selectors.getMessage(),
    email: selectors.getEmail(),
    status: selectors.getStatus()
  });

export default connect(mapStateToProps, actions)(ForgotPasswordInput);
