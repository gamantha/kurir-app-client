import React from 'react';
import { View, TouchableOpacity, Image, Alert, Platform } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import { GoogleSignin } from 'react-native-google-signin';
import { images } from '../../assets';
const config = require('../../../config/development').default;

const googleRegister = (navigation, authenticate, action, socialType) => {
    const clientId =
        Platform.OS === 'ios'
            ? { iosClientId: config.GOOGLE_CLIENT_ID_IOS }
            : { webClientId: config.GOOGLE_CLIENT_ID_ANDROID };
    GoogleSignin.configure(clientId).then(() => {
        console.log('Client ID', clientId);
        GoogleSignin.signIn()
            .then(user => {
                if (user && user.idToken) {
                    authenticate(user.idToken, action, socialType);
                }
            })
            .catch(err => {
                console.log('WRONG', err, err.response);
                Toast.show('WRONG SIGNIN ' + err);
            })
            .done();
    });
};
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
