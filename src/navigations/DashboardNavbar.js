import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { images } from '../assets';

const DashboardNavbar = ({ toSideMenu }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%'
            }}
        >
            <TouchableOpacity
                onPress={() => toSideMenu()}
                style={{
                    flex: 0.2,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Icon name="menu" size={40} />
            </TouchableOpacity>
            <View
                style={{
                    flex: 0.6,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={images.kurirheader}
                    style={{ height: '90%', width: '55%' }}
                />
            </View>
            <View style={{ flex: 0.2 }} />
        </View>
    );
};

const mapDispatchToProps = dispatch => ({
    toSideMenu: () =>
        dispatch(NavigationActions.navigate({ routeName: 'SideMenu' }))
});

const mapStateToProps = state => ({
    navigation: state['navigation']
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardNavbar);
