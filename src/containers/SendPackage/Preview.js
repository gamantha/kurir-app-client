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
import { connect } from 'react-redux';

import { requestSendPackage, updateField } from './reducer';

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
    componentWillMount() {
        this.props.updateField('route', 'preview-info');
    }
    componentWillReceiveProps(nextProps) {
        if (
            nextProps.sendPackage.summary &&
            nextProps.sendPackage.summary !== this.props.sendPackage.summary
        ) {
            this.props.navigation.navigate({ routeName: 'Confirmation' });
        }
    }
    handlePress = () => {
        this.props.sendRequest();
    };

    render() {
        const { sendPackage, user } = this.props;
        const { username } = user;
        const {
            origin,
            destination,
            name,
            email,
            phone,
            approximateWeight,
            description
        } = sendPackage;

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
                                    {username || ''}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>From</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    {origin || ''}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Destination</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    {destination || ''}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Recipient</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    {name || ''}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Email</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    {email || ''}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.marginTop15}>
                                <Text>Phone</Text>
                            </View>
                            <View>
                                <Text style={styles.boldFont}>
                                    {phone || ''}
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
                                <Text style={styles.boldFont}>
                                    {approximateWeight || ''} KG
                                </Text>
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
                                    {description || ''}
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
                                    onPress={() => this.handlePress()}
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

const mapStateProps = state => ({
    sendPackage: state.sendPackage,
    user: state.userLogin
});

const mapDispatchToProps = dispatch => ({
    sendRequest: () => dispatch(requestSendPackage()),
    updateField: (field, value) => dispatch(updateField(field, value))
});

export default connect(mapStateProps, mapDispatchToProps)(Preview);
