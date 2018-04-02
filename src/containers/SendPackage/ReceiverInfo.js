import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { images } from '../../assets';
import styles from '../../helpers/styles';

import { updateField } from './reducer';

const resetAction = NavigationActions.reset({
    index: 0,
    key: 'StackRouterRoot',
    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })]
});

class ReceiverInfo extends Component {
    componentWillMount() {
        this.props.updateField('route', 'receiver-info');
    }
    render() {
        const { name, email, phone, description, updateField } = this.props;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor: '#fff'
                }}
            >
                <View
                    style={{
                        flex: 1,
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
                        <Text style={{ marginBottom: 5 }}>Name</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    updateField('name', value)
                                }
                                value={name}
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
                        <Text style={{ marginBottom: 5 }}>Email</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    updateField('email', value)
                                }
                                value={email}
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
                        <Text style={{ marginBottom: 5 }}>Phone Number</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    updateField('phone', value)
                                }
                                value={phone}
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
                        <Text style={{ marginBottom: 5 }}>Description</Text>
                        <View style={styles.inputTextContainer}>
                            <TextInput
                                style={styles.inputText}
                                onFocus={() => {}}
                                onBlur={() => {}}
                                onChangeText={value =>
                                    updateField('description', value)
                                }
                                value={description}
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
                                marginLeft: 20,
                                marginRight: 20,
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }
                        ]}
                    >
                        <TouchableOpacity
                            onPress={() =>
                                this.props.navigation.dispatch(resetAction)
                            }
                            style={[
                                styles.touchAbleButton,
                                {
                                    borderColor: '#B5B5B5',
                                    backgroundColor: '#B5B5B5',
                                    width: '45%'
                                }
                            ]}
                        >
                            <Text style={styles.textButton}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            disabled={
                                name === '' &&
                                email === '' &&
                                phone === '' &&
                                description === ''
                            }
                            onPress={() =>
                                this.props.navigation.navigate('Preview')
                            }
                            style={[styles.touchAbleButton, { width: '45%' }]}
                        >
                            <Text style={styles.textButton}>Preview</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const mapStateProps = state => state.sendPackage;

const mapDispatchToProps = dispatch => ({
    updateField: (field, value) => dispatch(updateField(field, value))
});

export default connect(mapStateProps, mapDispatchToProps)(ReceiverInfo);
