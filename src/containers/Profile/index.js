import React from 'react';
import { Container, Header, Body, Title, Content, Label } from 'native-base';

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header>
        <Content>
          <Label onPress={() => this.props.userClickLogout()}>Logout</Label>
        </Content>
      </Container>
    );
  }
}

export default Profile;
