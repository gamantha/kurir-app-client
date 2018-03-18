/* eslint-disable */
import React, { Component } from 'react';
import {
    Animated,
    Image,
    ActivityIndicator,
    Easing,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-simple-toast';

import { images } from '../../assets';
import Api from '../../services/api';
import { reqRefreshToken } from '../../containers/UserLogin/reducer';

class SplashScreen extends Component {
    async componentDidMount() {
        const { navigate } = this.props.navigation;
        try {
            const accessToken = await AsyncStorage.getItem('accessToken');
            const refreshToken = await AsyncStorage.getItem('refreshToken');

            if (accessToken && accessToken.length > 1) {
                const { exp } = jwtDecode(accessToken);

                if (exp < Date.now() / 1000) {
                    try {
                        const newToken = await refreshToken(refreshToken);

                        Api.setAuthorizationToken(accessToken);
                    } catch (error) {
                        Toast.show('Splash Error', error.message);
                    }
                }
                navigate('Main');
            } else {
                navigate('Login');
            }
        } catch (error) {
            if (
                error.message === 'invalid_token' ||
                error.message === 'invalid token'
            ) {
                const refreshToken = await AsyncStorage.getItem('refreshToken');
                const newToken = await this.props.reqRefreshToken(refreshToken);
                if (newToken) {
                    Api.setAuthorizationToken(accessToken);
                    navigate('Main');
                }
            }
            navigate('Login');
        }
    }

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

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            refreshToken: reqRefreshToken
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(SplashScreen);
