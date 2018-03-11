import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { images } from '../../assets';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#fff'
    },
    textContainer: {
        marginTop: 30,
        marginLeft: WIDTH / 10,
        marginRight: WIDTH / 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    originWrapper: {
        marginTop: 30,
        backgroundColor: '#EFEFEF'
    },
    innerOrigin: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: WIDTH / 10,
        marginRight: WIDTH / 10
    },
    text: {
        textAlign: 'left',
        fontWeight: 'bold'
    },
    marginTop15: {
        marginTop: 15
    },
    boldFont: {
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});

const resetAction = NavigationActions.reset({
    index: 0,
    key: 'StackRouterRoot',
    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
});

class Preview extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={{ fontSize: 16 }}>
                            Please all information is correct. Any discrepancies
                            might cause delay and/or rejection of packages
                        </Text>
                    </View>
                    <View style={styles.originWrapper}>
                        <View style={styles.innerOrigin}>
                            <Text style={styles.text}>Origin</Text>
                        </View>
                    </View>
                    <View style={styles.innerOrigin}>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Sender Name</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    Kun Yahya Mustofa
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>From</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    Bandung, Jawa Barat, Indonesia
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Destination</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    Jogjakarta, Jawa Tengah, Indonesia
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Recipient</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    Desti Suraya Istiqomah
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Email</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    Desti123@gmail.com
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Phone</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    +6285990928765
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.originWrapper}>
                        <View style={styles.innerOrigin}>
                            <Text style={styles.text}>Package Info</Text>
                        </View>
                    </View>

                    <View>
                        <View
                            style={[
                                styles.innerOrigin,
                                { backgroundColor: '#FFFFFF' }
                            ]}
                        >
                            <View style={styles.marginTop15}>
                                <Text>Weight</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>10 KG</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View
                            style={[
                                styles.innerOrigin,
                                { backgroundColor: '#FFFFFF', marginBottom: 20 }
                            ]}
                        >
                            <View>
                                <Text>Description</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                backgroundColor: '#EFEFEF'
                            }}
                        >
                            <View style={styles.innerOrigin}>
                                <Text style={{ marginTop: 10 }}>
                                    All packages will be inspected and
                                    repackaged at our facility. Final price
                                    maybe different that what is shown. Please
                                    refer to your own and destinations custom
                                    law for info on prohibited articles
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.innerOrigin,
                                    {
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        marginTop: 10,
                                        marginBottom: 20
                                    }
                                ]}
                            >
                                <TouchableOpacity
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: '40%',
                                        backgroundColor: '#B5B5B5',
                                        borderRadius: 50
                                    }}
                                >
                                    <Text style={styles.buttonText}>
                                        Change Info
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{
                                        borderColor: '#BD303f',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: '40%',
                                        backgroundColor: '#BD303f',
                                        borderRadius: 50
                                    }}
                                >
                                    <Text style={styles.buttonText}>
                                        Ship Item
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Preview;
