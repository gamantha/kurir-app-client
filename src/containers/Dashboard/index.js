import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { images } from '../../assets';
import styles from '../../helpers/styles';

import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

class Dashboard extends Component {
    handleSendPackage = dispatch => {
        const resetToPackageInfo = NavigationActions.navigate({
            routeName: 'SendPackage',
            action: NavigationActions.navigate({
                routeName: 'OriginToDestination'
            })
        });
        dispatch(resetToPackageInfo);
    };

    render() {
        const { dispatch } = this.props.screenProps.rootNavigation;

        return (
            <View style={styles.container}>
                <View
                    style={{
                        flex: 1.5
                    }}
                >
                    {/* This will be a swiper */}

                    <Swiper
                        style={style1.wrapper}
                        dot={
                            <View
                                style={{
                                    backgroundColor: '#d4d2cf',
                                    width: 11,
                                    height: 11,
                                    borderRadius: 5,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}
                            />
                        }
                        activeDot={
                            <View
                                style={{
                                    backgroundColor: '#db4b35',
                                    width: 11,
                                    height: 11,
                                    borderRadius: 5,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}
                            />
                        }
                        paginationStyle={{ right: null, left: 40 }}
                        loop
                    >
                        <View style={style1.slide1}>
                            <Image
                                resizeMode="stretch"
                                style={styles.image}
                                source={images.slider1}
                            />
                            <Text style={style1.text}>Competitive Rates</Text>
                            <Text style={style1.subtext}>
                                World class services
                            </Text>
                        </View>
                        <View style={style1.slide1}>
                            <Image
                                resizeMode="stretch"
                                style={styles.image}
                                source={images.slider2}
                            />
                            <Text style={style1.text}>Competitive Rates 2</Text>
                            <Text style={style1.subtext}>
                                World class services 2
                            </Text>
                        </View>
                        <View style={style1.slide1}>
                            <Image
                                resizeMode="stretch"
                                style={styles.image}
                                source={images.slider3}
                            />
                            <Text style={style1.text}>Competitive Rates 3</Text>
                            <Text style={style1.subtext}>
                                World class services 3
                            </Text>
                        </View>
                    </Swiper>
                </View>
                {/* Start of Send Package! */}
                <View
                    style={{
                        flex: 1.2,
                        backgroundColor: 'rgba(222, 30, 67, 1)'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => this.handleSendPackage(dispatch)}
                        style={[
                            styles.container,
                            {
                                marginLeft: 25,
                                marginRight: 25,
                                backgroundColor: 'rgba(52, 52, 52, 0)',
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <Image
                            source={images.box}
                            style={{ width: 50, height: 50 }}
                        />
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ fontSize: 24, color: '#FFFFFF' }}>
                                Send Package!
                            </Text>
                            <Icon
                                name="keyboard-arrow-right"
                                size={28}
                                color="#FFF"
                            />
                        </View>
                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                            Send your valuable items is easy and
                        </Text>
                        <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                            Secure now
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        flex: 2,
                        flexDirection: 'row',
                        backgroundColor: 'rgba(252, 105, 79, 1)',
                        alignItems: 'flex-start'
                    }}
                >
                    <TouchableOpacity
                        onPress={this.handleLogout}
                        style={[
                            styles.container,
                            {
                                marginLeft: 25,
                                marginRight: 25,
                                backgroundColor: 'rgba(52, 52, 52, 0)',
                                justifyContent: 'center'
                            }
                        ]}
                    >
                        <View style={{ flex: 1.5, justifyContent: 'center' }}>
                            <Image
                                source={images.rocket}
                                style={{ width: 50, height: 50 }}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Text
                                    style={{ fontSize: 24, color: '#FFFFFF' }}
                                >
                                    Transport a package
                                </Text>
                                <Icon
                                    name="keyboard-arrow-right"
                                    size={28}
                                    color="#FFF"
                                />
                            </View>
                            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                Everyone now could be a courier and
                            </Text>
                            <Text style={{ fontSize: 16, color: '#FFFFFF' }}>
                                get money from it.
                            </Text>
                        </View>
                        <View style={{ flex: 1 }} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var style1 = {
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#9DD6EB'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 40,
        textShadowOffset: { width: 1, height: 2 },
        textShadowColor: 'rgba(51,51,51,0.5)',
        position: 'absolute',
        left: Dimensions.get('window').width / 0 - 25,
        top: height * 0.1
    },
    subtext: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
        marginLeft: 40,
        textShadowOffset: { width: 1, height: 2 },
        textShadowColor: 'rgba(51,51,51,0.5)',
        position: 'absolute',
        left: Dimensions.get('window').width / 0 - 25,
        top: height * 0.15
    },

    image: {
        width,
        flex: 1
    }
};

export default connect(null, null)(Dashboard);
