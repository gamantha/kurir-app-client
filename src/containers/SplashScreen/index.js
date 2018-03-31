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
import { createStructuredSelector } from 'reselect';

import { images } from '../../assets';
import Api from '../../services/api';
import { reqRefreshToken } from '../UserLogin/reducer';

class SplashScreen extends Component {
    componentDidMount() {
        const { navigate } = this.props.navigation;
        let accessToken;
        AsyncStorage.getItem('accessToken')
            .then(res => {
                if (res === null || typeof res === 'undefined') {
                    navigate('Onboard');
                } else {
                    accessToken = res;
                    Api.setAuthorizationToken(accessToken);
                    return AsyncStorage.getItem('refreshToken');
                }
            })
            .then(refreshToken => {
                if (accessToken && accessToken.length > 1) {
                    const { exp } = jwtDecode(accessToken);
                    if (exp < Math.floor(Date.now() / 1000) - 300) {
                        this.props.refreshToken(refreshToken);
                    } else {
                        navigate('Main');
                    }
                }
            })
            .catch(err => Toast.show(err.message));
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
