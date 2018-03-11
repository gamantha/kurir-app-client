import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { images } from '../../assets';
import styles from '../../helpers/styles';

const resetAction = NavigationActions.reset({
    index: 0,
    key: 'StackRouterRoot',
    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
});

class Preview extends Component {
    render() {
        return (
            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        backgroundColor: '#fff'
                    }}
                >
                    <View>
                        <Text>
                            Please all information is correct. Any discrepancies
                            might cause delay and/or rejection of packages
                        </Text>
                    </View>
                    <View>
                        <View>
                            <Text>Origin</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Send name</Text>
                        </View>
                        <View>
                            <Text>Send name</Text>
                        </View>
                        <View>
                            <Text>Send name</Text>
                        </View>
                        <View>
                            <Text>Send name</Text>
                        </View>
                        <View>
                            <Text>Send name</Text>
                        </View>
                        <View>
                            <Text>Send name</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>Packge Infor</Text>
                        </View>
                    </View>
                    <View />
                    <View>
                        <View>
                            <Text>Weight</Text>
                        </View>
                        <View>
                            <Text>Description</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text>
                                All packages will be inspected and repackaged at
                                our facility. Final price maybe different that
                                what is shown. Please refer to your own and
                                destinations custom law for info on prohibited
                                articles
                            </Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Text>Change Info</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text>Ship Item</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default Preview;
