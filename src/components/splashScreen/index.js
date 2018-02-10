/* eslint-disable */
import React, { Component } from 'react';
import { Animated, Image, ActivityIndicator, Easing } from 'react-native';

import { images } from '../../assets';

class SplashScreen extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        };
        this.divideScale = new Animated.Value(0);
    }

    componentDidMount() {
        setTimeout(() => this.props.navigation.navigate('Onboard'), 3000);
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
