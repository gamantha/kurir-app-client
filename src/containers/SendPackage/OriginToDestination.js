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

class OriginToDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveWeight: true,
            weightUnit: 'KG'
        };
    }

    handleActiveWeight = fieldName =>
        this.setState({
            isActiveWeight: !this.state.isActiveWeight,
            weightUnit: fieldName
        });
    render() {
        const { isActiveWeight } = this.state;
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
                    <View style={{ flex: 0.05 }} />
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
                                From
                            </Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    onFocus={() => {}}
                                    onBlur={() => {}}
                                    onChangeText={value => {}}
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
                                Approximate Weight
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <View
                                    style={[
                                        styles.inputTextContainer,
                                        { width: '60%' }
                                    ]}
                                >
                                    <TextInput
                                        style={styles.inputText}
                                        onFocus={() => {}}
                                        onBlur={() => {}}
                                        onChangeText={value => {}}
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        width: '35%',
                                        borderWidth: 1,
                                        borderColor: '#BD303f'
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.handleActiveWeight('KG')
                                        }
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '50%',
                                            backgroundColor: isActiveWeight
                                                ? '#BD303f'
                                                : '#FFFFFF'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: isActiveWeight
                                                    ? '#FFFFFF'
                                                    : '#BD303f'
                                            }}
                                        >
                                            KG
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.handleActiveWeight('LBS')
                                        }
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '50%',
                                            borderLeftWidth: 1,
                                            borderColor: '#BD303f',
                                            backgroundColor: isActiveWeight
                                                ? '#FFFFFF'
                                                : '#BD303f'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: isActiveWeight
                                                    ? '#BD303f'
                                                    : '#FFFFFF'
                                            }}
                                        >
                                            LBS
                                        </Text>
                                    </TouchableOpacity>
                                </View>
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
                                Address
                            </Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    onFocus={() => {}}
                                    onBlur={() => {}}
                                    onChangeText={value => {}}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    underlineColorAndroid="transparent"
                                />
                            </View>
                        </View>

                        <View
                            style={{
                                marginTop: 10,
                                marginLeft: 30,
                                marginRight: 30
                            }}
                        >
                            <View>
                                <Text>
                                    <Text style={{ fontWeight: 'bold' }}>
                                        note:
                                    </Text>{' '}
                                    please make sure your package can fit into 1
                                    standard luggage and no more than 20KG's
                                </Text>
                            </View>
                        </View>

                        <View
                            style={[
                                styles.container,
                                {
                                    marginTop: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center'
                                }
                            ]}
                        >
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'ReceiverInfo'
                                    )
                                }
                                style={[
                                    styles.touchAbleButton,
                                    { width: '45%' }
                                ]}
                            >
                                <Text style={styles.textButton}>
                                    Calculate Price
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flexDirection: 'column',
                                marginTop: 20,
                                backgroundColor: '#EFEFEF'
                            }}
                        >
                            <View
                                style={{
                                    marginTop: 10,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    justifyContent: 'flex-end'
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                        textAlign: 'right'
                                    }}
                                >
                                    Approx cost: Rp. 12.000
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginTop: 10,
                                    marginLeft: 30,
                                    marginRight: 30,
                                    marginBottom: 20
                                }}
                            >
                                <Text style={{ fontSize: 16 }}>
                                    <Text style={{ fontWeight: 'bold' }}>
                                        note:
                                    </Text>{' '}
                                    Items to be shipped will be inspected and
                                    repackaged at our drop point facility. Final
                                    price maybe different that shown
                                </Text>
                            </View>
                        </View>

                        <View
                            style={[
                                styles.container,
                                {
                                    margin: 20,
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
                                <Text style={styles.textButton}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate(
                                        'PackageInfo'
                                    )
                                }
                                style={[
                                    styles.touchAbleButton,
                                    { width: '45%' }
                                ]}
                            >
                                <Text style={styles.textButton}>Ship Item</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default OriginToDestination;
