import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView, DrawerItems, NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { logoutFlow } from '../UserLogin/reducer';
import { clearTokenData } from '../../helpers/utils';

import { images } from '../../assets';

// initialize styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '10%',
        justifyContent: 'space-around',
        backgroundColor: '#CF2F3C'
    },
    headerContent: {
        flex: 2,
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    bodyContent: {
        flex: 4,
        justifyContent: 'center',
        paddingLeft: '10%',
        paddingRight: '10%'
    },
    menuColor: {
        color: '#FAFAFA',
        fontWeight: '500'
    },
    itemMenu: {
        justifyContent: 'space-around',
        height: 40
    },
    thumbnail: {
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 100,
        height: 100,
        width: 100
    },
    image: {
        resizeMode: 'contain',
        height: 100,
        width: undefined
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: '5%'
    },
    username: {
        color: '#fff',
        fontSize: 14
    },
    role: {
        color: '#fff',
        fontSize: 12
    },
    registerKurir: {
        flex: 0.7,
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderTopWidth: 0.3,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5
        }
    }
});

class SideMenu extends Component {
    handleLogout = () => {
        clearTokenData();
        this.props.logout();
        this.props.clearState();
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    <View style={styles.thumbnail}>
                        <Image source={images.placeholder} style={styles.image} />
                    </View>
                    <View style={styles.usernameContainer}>
                        <Text style={styles.username}>
                            {this.props.username || 'username'}
                        </Text>
                        <Text> </Text>
                        <Text style={styles.role}>
                            {this.props.role || 'role'}
                        </Text>
                    </View>
                </View>
                <View style={styles.bodyContent}>
                    <SafeAreaView>
                        <TouchableOpacity
                            style={styles.itemMenu}
                            onPress={() => this.props.toDashboard()}
                        >
                            <Text style={styles.menuColor}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu}>
                            <Text style={styles.menuColor}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu}>
                            <Text style={styles.menuColor}>Order</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.itemMenu}
                            onPress={() => this.props.toHistory()}
                        >
                            <Text style={styles.menuColor}>History</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.itemMenu}>
                            <Text style={styles.menuColor}>My Wallet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.itemMenu}
                            onPress={() => this.props.toChangePassword()}
                        >
                            <Text style={styles.menuColor}>
                                Change Password
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.itemMenu}
                            onPress={this.handleLogout}
                        >
                            <Text style={styles.menuColor}>Sign Out</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <View style={styles.registerKurir}>
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Image
                            source={images.regAsKurir}
                            style={{ height: 40, width: 40 }}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => this.props.registerAsKurir()}
                        style={{
                            flex: 1,
                            justifyContent: 'center'
                        }}
                    >
                        <Text style={[styles.menuColor, { paddingLeft: 10 }]}>
                            Register as Kurir
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            justifyContent: 'center'
                        }}
                    >
                        <Image source={images.caretRight} />
                    </View>
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    toDashboard: () =>
        dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Main' })]
            })
        ),
    logout: () =>
        dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })]
            })
        ),
    clearState: () => dispatch(logoutFlow()),
    registerAsKurir: () =>
        dispatch(NavigationActions.navigate({ routeName: 'RegisterKurir' })),
    toChangePassword: () =>
        dispatch(NavigationActions.navigate({ routeName: 'NewPassword' })),
    toHistory: () =>
        dispatch(NavigationActions.navigate({ routeName: 'History' }))
});

const mapStateToProps = state => state.userLogin;

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
