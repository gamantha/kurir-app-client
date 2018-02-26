import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Toast from 'react-native-simple-toast';
import FBSDK from 'react-native-fbsdk';
import { images } from '../../assets';

const { LoginManager, AccessToken } = FBSDK;

const facebookRegister = (navigation, authenticate, action) =>
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        function(result) {
            if (result.isCancelled) {
                Toast.show('Login cancelled');
            } else {
                AccessToken.getCurrentAccessToken().then(data => {
                    const accessToken = data.accessToken.toString();
                    authenticate(accessToken, action);
                    if (action === 'register') {
                        Toast.show(
                            'Register success, please check your email first!'
                        );
                        navigation.navigate('Login');
                    }
                    if (action === 'login') {
                        const navigateAction = NavigationActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({
                                    routeName: 'Dashboard'
                                })
                            ]
                        });
                        navigation.dispatch(navigateAction);
                    }
                });
            }
        },
        function(error) {
            Toast.show('Login fail with error: ' + error);
        }
    );

const Facebook = ({ navigation, authenticate, action }) => (
    <TouchableOpacity
        onPress={() => facebookRegister(navigation, authenticate, action)}
    >
        <Image source={images.facebook} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
);

export default Facebook;
