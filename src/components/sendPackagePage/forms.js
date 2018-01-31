/* eslint-disable */
import React from 'react';

import { Form, Item, Input, Label, Button, Text, Picker } from 'native-base';

import { StyleSheet, View } from 'react-native';

import Swiper from 'react-native-swiper';

import { sendPackageData } from './actions';
import { connectWithStore } from '../../helpers/utils';
import store from '../../store';

const styles = StyleSheet.create({
  wrapper: {},
  pageOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageTwo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageThree: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageFour: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageFive: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

class SendItemForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: {
        senderCity: null,
        senderName: null,
        senderAddress: null,
        senderPhone: null
      },
      receiver: {
        receiverCity: null,
        receiverName: null,
        receiverAddress: null,
        receiverPhone: null
      },
      item: {
        itemName: null,
        itemWeight: null,
        itemValue: null,
        itemPrice: 'harga masih testing',
        deadline: null,
        isCustomPickupAddress: null
      },
      pickup: {
        pickupName: null,
        pickupNote: null,
        pickupAddress: null
      },
      isRetrievalSelected: false
    };
  }

  onChangeRetrievalMethod(isCustomPickupAddress) {
    if (this.state.item.isCustomPickupAddress) {
      this.setState({
        pickup: { ...this.state.pickup, pickupNote: 'Kurir.id office' },
        isRetrievalSelected: true,
        item: { ...this.state.item, isCustomPickupAddress }
      });
    } else if (!this.state.item.isCustomPickupAddress) {
      this.setState({
        pickup: { ...this.state.pickup, pickupNote: 'Custom' },
        isRetrievalSelected: true,
        item: { ...this.state.item, isCustomPickupAddress }
      });
    }
  }

  onChangeKurirAddress(pickupAddress) {
    this.setState({ pickup: { ...this.state.pickup, pickupAddress } });
  }

  onSubmitSendPackageForm() {
    const raw = {
      ...this.state.sender,
      ...this.state.receiver,
      ...this.state.item,
      ...this.state.pickup
    };
    console.log(raw);
    // this.props.sendPackageData(raw);
  }

  renderPickupAddressInput() {
    if (this.state.isRetrievalSelected) {
      if (this.state.item.isCustomPickupAddress) {
        return (
          <View>
            <Label>Input your address</Label>
            <Item rounded>
              <Input
                onChangeText={(pickupAddress) =>
                  this.setState({
                    pickup: { ...this.state.pickup, pickupAddress }
                  })
                }
                value={this.state.pickup.pickupAddress}
                autoCapitalize="none"
              />
            </Item>
          </View>
        );
      }
      return (
        <View>
          <Label>Select location of our office</Label>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            placeholder="Pick one"
            selectedValue={this.state.pickup.pickupAddress}
            onValueChange={(pickupAddress) => this.onChangeKurirAddress(pickupAddress)}
          >
            <Item label="Kurir.id office Bandung" value="Jalan Sukahaji" />
            <Item label="Kurir.id office Jakarta" value="Jalan Simatupang" />
          </Picker>
        </View>
      );
    }
    return <View />;
  }

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        onIndexChanged={this.props.onIndexChanged}
        loop={false}
        showsPagination={false}
        ref="swiper"
      >
        <View style={styles.pageOne}>
          <Form>
            <Label>Step 1 of 5 - Sender Details</Label>
            <Label>City</Label>
            <Item rounded>
              <Input
                onChangeText={(senderCity) =>
                  this.setState({
                    sender: { ...this.state.sender, senderCity }
                  })
                }
                value={this.state.sender.senderCity}
                autoCapitalize="none"
              />
            </Item>
            <Label>Sender Name</Label>
            <Item rounded>
              <Input
                onChangeText={(senderName) =>
                  this.setState({
                    sender: { ...this.state.sender, senderName }
                  })
                }
                value={this.state.sender.senderName}
                autoCapitalize="none"
              />
            </Item>
            <Label>Address</Label>
            <Item rounded>
              <Input
                onChangeText={(senderAddress) =>
                  this.setState({
                    sender: { ...this.state.sender, senderAddress }
                  })
                }
                value={this.state.sender.senderAddress}
                autoCapitalize="none"
              />
            </Item>
            <Label>Phone Number</Label>
            <Item rounded>
              <Input
                onChangeText={(senderPhone) =>
                  this.setState({
                    sender: { ...this.state.sender, senderPhone }
                  })
                }
                value={this.state.sender.senderPhone}
                autoCapitalize="none"
              />
            </Item>
            <Button rounded primary onPress={() => this.refs.swiper.scrollBy(1)}>
              <Text>Next</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.pageTwo}>
          <Form>
            <Label>Step 2 of 5 - Receiver Details</Label>
            <Label>City</Label>
            <Item rounded>
              <Input
                onChangeText={(receiverCity) =>
                  this.setState({
                    receiver: { ...this.state.receiver, receiverCity }
                  })
                }
                value={this.state.receiver.receiverCity}
                autoCapitalize="none"
              />
            </Item>
            <Label>Receiver Name</Label>
            <Item rounded>
              <Input
                onChangeText={(receiverName) =>
                  this.setState({
                    receiver: { ...this.state.receiver, receiverName }
                  })
                }
                value={this.state.receiver.receiverName}
                autoCapitalize="none"
              />
            </Item>
            <Label>Address</Label>
            <Item rounded>
              <Input
                onChangeText={(receiverAddress) =>
                  this.setState({
                    receiver: { ...this.state.receiver, receiverAddress }
                  })
                }
                value={this.state.receiver.receiverAddress}
                autoCapitalize="none"
              />
            </Item>
            <Label>Phone Number</Label>
            <Item rounded>
              <Input
                onChangeText={(receiverPhone) =>
                  this.setState({
                    receiver: { ...this.state.receiver, receiverPhone }
                  })
                }
                value={this.state.receiver.receiverPhone}
                autoCapitalize="none"
              />
            </Item>
            <Button rounded primary onPress={() => this.refs.swiper.scrollBy(1)}>
              <Text>Next</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.pageThree}>
          <Form>
            <Label>Step 3 of 5 - Package Details</Label>
            <Label>What is inside?</Label>
            <Item rounded>
              <Input
                onChangeText={(itemName) =>
                  this.setState({
                    item: { ...this.state.item, itemName }
                  })
                }
                value={this.state.item.itemName}
                autoCapitalize="none"
              />
            </Item>
            <Label>Luggage Space</Label>
            <Item rounded>
              <Input
                onChangeText={(itemWeight) =>
                  this.setState({
                    item: { ...this.state.item, itemWeight }
                  })
                }
                value={this.state.item.itemWeight}
                autoCapitalize="none"
              />
            </Item>
            <Label>Value</Label>
            <Item rounded>
              <Input
                onChangeText={(itemValue) =>
                  this.setState({
                    item: { ...this.state.item, itemValue }
                  })
                }
                value={this.state.item.itemValue}
                autoCapitalize="none"
              />
            </Item>
            <Button rounded primary onPress={() => this.refs.swiper.scrollBy(1)}>
              <Text>Next</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.pageFour}>
          <Form>
            <Label>Step 4 of 5 - Retrieval Method</Label>
            <Label>Date & time of retrieval</Label>
            <Item rounded>
              <Input
                onChangeText={(deadline) =>
                  this.setState({
                    item: { ...this.state.item, deadline }
                  })
                }
                value={this.state.item.deadline}
                autoCapitalize="none"
              />
            </Item>
            <Label>Select location of retrieval</Label>
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              placeholder="Pick one"
              selectedValue={this.state.item.isCustomPickupAddress}
              onValueChange={(isCustomPickupAddress) =>
                this.onChangeRetrievalMethod(isCustomPickupAddress)
              }
            >
              <Item label="Kurir.id office" value={false} />
              <Item label="Take from my home" value />
            </Picker>
            {this.renderPickupAddressInput()}
            <Button rounded primary onPress={() => this.refs.swiper.scrollBy(1)}>
              <Text>Next</Text>
            </Button>
          </Form>
        </View>
        <View style={styles.pageFive}>
          <Form>
            <Label>Step 5 of 5 - Review</Label>
            <Text>
              {`From ${this.state.sender.senderCity} to ${this.state.receiver.receiverCity}`}
            </Text>
            <Text>{`item: ${this.state.item.itemName}`}</Text>
            <Text>{`luggage: ${this.state.item.itemWeight}`}</Text>
            <Text>{`item value: ${this.state.item.itemValue}`}</Text>
            <Text>{`item price: ${this.state.item.itemPrice}`}</Text>
            <Text>{`retrieval method: ${this.state.pickup.pickupNote}`}</Text>
            <Button rounded primary onPress={() => this.onSubmitSendPackageForm()}>
              <Text>Done!</Text>
            </Button>
          </Form>
        </View>
      </Swiper>
    );
  }
}

const mapStateToProps = (state) => ({
  msgReducer: state.msgReducer,
  userReducer: state.userReducer
});

const mapDispatchToProps = (dispatch) => ({
  sendPackageData: (requestBody) => {
    dispatch(sendPackageData(requestBody));
  }
});

export default connectWithStore(store, SendItemForms, mapStateToProps, mapDispatchToProps);
