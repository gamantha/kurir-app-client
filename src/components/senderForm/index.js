import React from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import DatePicker from 'react-native-datepicker';

class SenderFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      senderData: {
        name: '',
        deadline: '',
        weight: 0,
        value: '',
        note: '',
      },
    };
  }

  render() {
    return (
      <Form>
        <Item rounded>
          <Input
            placeholder="nama barang (misal: hadiah)"
            onChangeText={name =>
              this.setState({
                senderData: { ...this.state.senderData, name },
              })
            }
            value={this.state.senderData.name}
            autoCapitalize="none"
          />
        </Item>
        <DatePicker mode="date" format="DD-MM-YYYY" />
        <Item rounded>
          <Input
            placeholder="berat barang"
            onChangeText={weight =>
              this.setState({
                senderData: { ...this.state.senderData, weight },
              })
            }
            value={this.state.senderData.weight}
            autoCapitalize="none"
            secureTextEntry
          />
        </Item>
        <Item rounded>
          <Input
            placeholder="perkiraan nilai barang"
            onChangeText={value =>
              this.setState({
                senderData: { ...this.state.senderData, value },
              })
            }
            value={this.state.senderData.value}
            autoCapitalize="none"
            secureTextEntry
          />
        </Item>
        <Item rounded>
          <Input
            placeholder="catatan kamu buat pengirim"
            onChangeText={note =>
              this.setState({
                senderData: { ...this.state.senderData, note },
              })
            }
            value={this.state.senderData.note}
            autoCapitalize="none"
            secureTextEntry
          />
        </Item>
        <Button rounded primary>
          <Text>Submit</Text>
        </Button>
      </Form>
    );
  }
}

export default SenderFormPage;
