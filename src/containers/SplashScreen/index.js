/* eslint-disable */
import React, { Component } from 'react';
import {
    Animated,
    Image,
    ActivityIndicator,
    Easing,
    AsyncStorage
} from 'react-native';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-simple-toast';

import { images } from '../../assets';
import Api from '../../services/api';
import { reqRefreshToken } from '../../containers/UserLogin/reducer';

class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
        this.divideScale = new Animated.Value(0);
    }

    async componentWillMount() {
        const { navigate } = this.props.navigation;
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const refreshToken = await AsyncStorage.getItem('refreshToken');
            if (accessToken && accessToken.length > 1) {
                const { exp } = jwtDecode(accessToken);

                if (exp < Date.now() / 1000) {
                    try {
                        const newToken = await reqRefreshToken(refreshToken);

                        Api.setAuthorizationToken(accessToken);
                    } catch (error) {
                        Toast.show('Splash Error', error.message);
                    }
                }
                navigate('Dashboard');
            } else {
                navigate('Login');
            }
        } catch (error) {
            if (
                error.message === 'invalid_token' ||
                error.message === 'invalid token'
            ) {
                const refreshToken = await AsyncStorage.getItem('refreshToken');
                const newToken = await reqRefreshToken(refreshToken);
                if (newToken) {
                    Api.setAuthorizationToken(accessToken);
                    navigate('Dashboard');
                }
            }
            navigate('Login');
        }
    }

    moveit = () => {
        this.divideScale.setValue(0.3);
        Animated.timing(this.divideScale, {
            toValue: 1,
            duration: 1000,
            easing: Easing.bounce
        }).start(() => this.moveit());
    };

    render() {
        return (
            <Animated.View>
                <Image
                    style={{ width: '100%', height: '100%' }}
                    source={images.splash}
                />
            </Animated.View>
        );
    }
}

export default SplashScreen;
