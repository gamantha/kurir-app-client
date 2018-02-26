import React from 'react';
import { View, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import FBSDK from 'react-native-fbsdk';
import { images } from '../../assets';

const { LoginManager, AccessToken } = FBSDK;

const facebookRegister = (navigation, authenticate, action, socialType) =>
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        function(result) {
            if (result.isCancelled) {
                Toast.show('Login cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data.accessToken.toString();
                    authenticate(accessToken, action, socialType);
                    if (action === 'register') {
                        // do something later
                    }
                    if (action === 'login') {
                        // do something later
                    }
                });
            }
        },
        function(error) {
            Toast.show('Login fail with error: ' + error);
        }
    );

const Facebook = ({ navigation, authenticate, action, socialType }) => (
    <TouchableOpacity
        onPress={() =>
            facebookRegister(navigation, authenticate, action, socialType)
        }
    >
        <Image source={images.facebook} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
);

export default Facebook;
