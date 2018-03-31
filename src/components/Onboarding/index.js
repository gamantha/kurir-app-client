import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    Platform
} from 'react-native';
import Swiper from 'react-native-swiper';

import { images } from '../../assets';

const styles = {
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    headline: {
        color: '#424242',
        fontSize: 24,
        marginBottom: 15,
        marginTop: 50
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#d7283b',
        padding: 10,
        borderRadius: 20,
        width: 150
    },
    nextText: {
        color: '#ffffff',
        padding: 2
    },
    imageMargin: {
        marginBottom: 10,
        height: 130
    },
    body: {
        color: '#424242',
        fontSize: 14,
        marginBottom: 25,
        textAlign: 'center',
        paddingRight: 20,
        paddingLeft: 20
    }
};

class OnboardingComponent extends React.Component {
    render() {
        return (
            <Swiper
                style={styles.wrapper}
                dot={
                    <View
                        style={{
                            backgroundColor: '#f8d3d7',
                            width: 9,
                            height: 9,
                            borderRadius: 5,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 300
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: '#d7283b',
                            width: 9,
                            height: 9,
                            borderRadius: 5,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 300
                        }}
                    />
                }
                loop={false}
                ref="swiper"
            >
                <View style={styles.slide1}>
                    <Image
                        style={styles.imageMargin}
                        source={images.traveler}
                        resizeMode="contain"
                    />
                    <Text style={styles.headline}>Find a Traveler</Text>
                    <Text style={styles.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.refs.swiper.scrollBy(1)}
                        style={styles.button}
                        title="Test"
                        color="#841584"
                    >
                        <Text style={styles.nextText}> NEXT </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingTop: 20 }}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text
                            style={[
                                styles.nextText,
                                {
                                    color:
                                        Platform.OS === 'ios'
                                            ? '#424242'
                                            : 'black'
                                }
                            ]}
                        >
                            {' '}
                            SKIP{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide2}>
                    <Image
                        style={styles.imageMargin}
                        source={images.handoff}
                        resizeMode="contain"
                    />
                    <Text style={styles.headline}>Hand off the Item</Text>
                    <Text style={styles.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.refs.swiper.scrollBy(1)}
                        style={styles.button}
                        title="Test"
                        color="#841584"
                    >
                        <Text style={styles.nextText}> NEXT </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingTop: 20 }}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text
                            style={[
                                styles.nextText,
                                {
                                    color:
                                        Platform.OS === 'ios'
                                            ? '#424242'
                                            : 'black'
                                }
                            ]}
                        >
                            {' '}
                            SKIP{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.slide3}>
                    <Image
                        style={styles.imageMargin}
                        source={images.trackPackage}
                        resizeMode="contain"
                    />
                    <Text style={styles.headline}>Track the Package</Text>
                    <Text style={styles.body}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Login')}
                        style={styles.button}
                        title="Test"
                        color="#841584"
                    >
                        <Text style={styles.nextText}>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ paddingTop: 20 }}
                        onPress={() => this.props.navigation.navigate('Login')}
                    >
                        <Text
                            style={[
                                styles.nextText,
                                {
                                    color:
                                        Platform.OS === 'ios'
                                            ? '#424242'
                                            : 'black'
                                }
                            ]}
                        >
                            {' '}
                            SKIP{' '}
                        </Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        );
    }
}

export default OnboardingComponent;
