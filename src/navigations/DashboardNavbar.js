import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { images } from '../assets';

const DashboardNavbar = ({ navigation }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%'
            }}
        >
            <TouchableOpacity
                onPress={() =>
                    NavigationActions.navigate({
                        index: 1,
                        key: 'StackRouterRoot',
                        actions: [
                            NavigationActions.navigate({
                                routeName: 'SideMenu'
                            })
                        ]
                    })
                }
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

const mapStateToProps = state => ({
    navigation: state['navigation']
});

export default connect(mapStateToProps)(DashboardNavbar);
