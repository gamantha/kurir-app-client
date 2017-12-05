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
} from 'native-base';

class userOnboarding extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      retype: '',
    };
  }
  render() {
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
              />
            </Item>
            <Label>Type your password</Label>
            <Item rounded last>
              <Input
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Label>Retype your password</Label>
            <Item rounded last>
              <Input
                onChangeText={retype => this.setState({ retype })}
                value={this.state.retype}
              />
            </Item>
            <Button rounded primary >
              <Text>SIGNUP</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default userOnboarding;
