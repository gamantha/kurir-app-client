import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';

import { images } from '../../assets';
import styles from '../../helpers/styles';
import Toast from 'react-native-simple-toast';
import Api from '../../services/api';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Main' })]
});

class SearchPackage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        backgroundColor: '#fff'
                    }}
                >
                    {/* <View style={{ flex: 0.05 }} /> */}
                    <View
                        style={{
                            flex: 0.8,
                            borderColor: 'red'
                        }}
                    >
                        <View
                            style={[
                                styles.container,
                                {
                                    marginLeft: 30,
                                    marginRight: 30,
                                    justifyContent: 'center'
                                }
                            ]}
                        >
                            <Text style={{ marginTop: 20, marginBottom: 5 }}>
                                Origin
                            </Text>
                            <View style={styles.SectionStyle}>
                                <Image source={images.origin} style={styles.InputImageStyle} />
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>
                        <View
                            style={[
                                styles.container,
                                {
                                    marginLeft: 30,
                                    marginRight: 30,
                                    justifyContent: 'center'
                                }
                            ]}
                        >
                            <Text style={{ marginTop: 10, marginBottom: 5 }}>
                                Destination
                            </Text>
                            <View style={styles.SectionStyle}>
                                <Image source={images.destination} style={styles.InputImageStyle} />
                                <TextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>

                        <View
                            style={{
                                flex: 2,
                                alignItems: 'center'
                            }}
                        >
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'SummaryPackage'
                                    )
                                }
                                style={{
                                    width: '83%',
                                    top: 20,
                                    height: 50,
                                    backgroundColor: '#D8283B',
                                    borderRadius: 30,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 16,
                                        color: '#FFFFFF',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Search for package
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        );
    }
}

export default SearchPackage;
