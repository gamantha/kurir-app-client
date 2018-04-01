import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableNativeFeedback } from 'react-native';
import { StackNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/MaterialIcons';

import RegisterKurir from "./RegisterKurir";

import styles from "./styles";

const RegisterKurirStack = StackNavigator({
  RegisterKurir: {
    screen: RegisterKurir,
    navigationOptions: ({ navigation, screenProps }) => ({
      headerStyle: {
        paddingLeft: 16,
        shadowColor: 'transparent',
        elevation: 0,
      },
      headerLeft: (
        <TouchableNativeFeedback
            style={{flex:0.4, justifyContent: 'center'}}
            onPress={() => screenProps.rootNavigation.goBack()}
        >
          <Icon name="arrow-back" size={30} />
        </TouchableNativeFeedback>
      ),
    })
  }
})

export default RegisterKurirStack;