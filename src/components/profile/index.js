import React from 'react';
import { Container, Header, Body, Title, Content, Label } from 'native-base';
import { connect } from 'react-redux';

import { userClickLogout } from './actions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

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

const mapStateToProps = state => ({
  userReducer: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  userClickLogout: () => {
    dispatch(userClickLogout());
  },
});

// connect(mapStateToProps, mapDispatchToProps)(LogoutLabel);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
