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
import { NavigationActions } from 'react-navigation';
import jwtDecode from 'jwt-decode';
import Toast from 'react-native-simple-toast';
import { createStructuredSelector } from 'reselect';

import { images } from '../../assets';
import Api from '../../services/api';
import { launched } from './reducer';
import { reqRefreshToken } from '../UserLogin/reducer';

class SplashScreen extends Component {
    componentDidMount() {
        const { launched, navigation } = this.props;
        const { navigate } = navigation;
        let accessToken;
        if (this.props.alreadyLaunch) {
            AsyncStorage.getItem('accessToken')
                .then(res => {
                    if (res === null || typeof res === 'undefined') {
                        setTimeout(() => this.props.toLogin(), 3000);
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
                            navigate('EditProfile');
                        }
                    }
                })
                .catch(err => Toast.show(err.message));
        } else {
            launched();
            setTimeout(() => navigate('Onboard'), 5000);
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

const mapStateProps = state => state.splash;

const mapDispatchToProps = dispatch => ({
    launched: () => dispatch(launched()),
    toLogin: () =>
        dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })]
            })
        ),
    refreshToken: refToken => dispatch(reqRefreshToken(refToken))
});

export default connect(mapStateProps, mapDispatchToProps)(SplashScreen);
