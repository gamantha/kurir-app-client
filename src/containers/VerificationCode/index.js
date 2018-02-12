import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import * as actions from './reducer';
import * as selectors from './selectors';
// import NewPasswordInput from '../newPassword';

class VerificationCode extends Component {
    handleVerify = (code, email) => {
        const payload = { code, email };
        this.props.verify(payload);
    };

    handleSetCode = code => {
        this.props.setCode(code);
    };

    render() {
        // email property is from ForgotPassword containers
        const {
            statusMessage,
            isLoading,
            email,
            verificationCode
        } = this.props;
        const { status } = statusMessage;
        if (isLoading) {
            return <ActivityIndicator size="large" color="#00ff00" />;
        }
        // if (verificationSuccess) {
        //   return <NewPasswordInput email={this.props.email} />;
        // }
        return <View />;
    }
}
// <Container>
//     <Header />
//     <Content>
//         <Form>
//             <Label>Enter your verification code:</Label>
//             <Item rounded>
//                 <Input
//                     onChangeText={value =>
//                         this.handleSetCode(value)
//                     }
//                     value={verificationCode}
//                     autoCapitalize="none"
//                 />
//             </Item>
//             <Button
//                 rounded
//                 primary
//                 onPress={() => {
//                     this.handleVerify(verificationCode, email);
//                 }}
//             >
//                 <Text>NEXT</Text>
//             </Button>
//         </Form>
//     </Content>
// </Container>
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            setCode: actions.setCode,
            verify: actions.verify
        },
        dispatch
    );

const mapStateToProps = () =>
    createStructuredSelector({
        verificationCode: selectors.getCode(),
        isLoading: selectors.getIsLoading(),
        statusMessage: selectors.getMessage()
    });

export default connect(mapStateToProps, mapDispatchToProps)(VerificationCode);
