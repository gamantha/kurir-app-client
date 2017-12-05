import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

const userOnboarding = () => (
  <Container>
    <Header />
    <Content>
      <Form>
        <Label>Email</Label>
        <Item rounded>
          <Input />
        </Item>
        <Label>Password</Label>
        <Item rounded last>
          <Input />
        </Item>
      </Form>
    </Content>
  </Container>
);

export default userOnboarding;
