import React from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import { GoogleSignin } from 'react-native-google-signin';
import { images } from '../../assets';
const config = require('../../../config/development').default;

const googleRegister = (navigation, authenticate, action, socialType) =>
    GoogleSignin.configure({
        iosClientId: config.GOOGLE_CLIENT_ID
    }).then(() => {
        GoogleSignin.signIn()
            .then(user => {
                console.log('user', user);
                if (user && user.idToken) {
                    authenticate(user.idToken, action, socialType);
                }
            })
            .catch(err => {
                Toast.show('WRONG SIGNIN', err);
            })
            .done();
    });

const Google = ({ navigation, authenticate, action, socialType }) => (
    <TouchableOpacity
        onPress={() =>
            googleRegister(navigation, authenticate, action, socialType)
        }
    >
        <Image source={images.google} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
);

export default Google;
