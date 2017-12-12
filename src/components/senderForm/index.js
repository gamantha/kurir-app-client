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
        <Item floatingLabel>
          <Label>nama barang (misal: hadiah)</Label>
          <Input
            onChangeText={name =>
              this.setState({
                senderData: { ...this.state.senderData, name },
              })
            }
            value={this.state.senderData.name}
            autoCapitalize="none"
          />
        </Item>
        <Label>kapan barang ini harus sampai?</Label>
        <DatePicker cancelBtnText="Undo" confirmBtnText="Done" mode="date" format="DD-MM-YYYY" />
        <Item floatingLabel>
          <Label>berat barang (dalam kg)</Label>
          <Input
            onChangeText={weight =>
              this.setState({
                senderData: { ...this.state.senderData, weight },
              })
            }
            value={this.state.senderData.weight}
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </Item>
        <Item floatingLabel>
          <Label>perkiraan nilai barang (rupiah)</Label>
          <Input
            onChangeText={value =>
              this.setState({
                senderData: { ...this.state.senderData, value },
              })
            }
            value={this.state.senderData.value}
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </Item>
        <Button primary>
          <Text>Kirim</Text>
        </Button>
      </Form>
    );
  }
}

export default SenderFormPage;
