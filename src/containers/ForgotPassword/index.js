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
    Root
} from 'native-base';
import Toast from 'react-native-simple-toast';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import * as actions from './reducer';
import * as selectors from './selectors';
import VerificationCodeInput from '../VerificationCode';

class ForgotPasswordInput extends Component {
    componentWillReceiveProps(nextProps) {
        const { statusMessage } = nextProps;
        const { status, message } = statusMessage;
        if (message) {
            Toast.show(message);
        }
    }

    setEmail = email => {
        this.props.setEmail(email);
    };

    handlePress = email => {
        this.props.forgotPassword({ email });
    };

    render() {
        const { statusMessage, email } = this.props;
        const { status } = statusMessage;
        if (status) {
            return <VerificationCodeInput email={email} />;
        }
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Label>Enter your email</Label>
                        <Item rounded>
                            <Input
                                onChangeText={value => this.setEmail(value)}
                                value={email}
                                autoCapitalize="none"
                            />
                        </Item>
                        <Button
                            rounded
                            primary
                            onPress={() => {
                                this.handlePress(email);
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

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setEmail: actions.setEmail,
            forgotPassword: actions.forgotPassword
        },
        dispatch
    );

const mapStateToProps = () =>
    createStructuredSelector({
        isShowLoading: selectors.getShowLoading(),
        statusMessage: selectors.getMessage(),
        email: selectors.getEmail()
    });

export default connect(mapStateToProps, mapDispatchToProps)(
    ForgotPasswordInput
);
