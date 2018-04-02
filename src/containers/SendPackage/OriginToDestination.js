import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { updateField, requestSendPackage } from './reducer';
import Api from '../../services/api';
import { images } from '../../assets';
import styles from '../../helpers/styles';
import { getDistanceFromLatLonInKm } from '../../helpers/utils';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'Main' })]
});

class OriginToDestination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActiveWeight: true,
            weightUnit: 'KG',
            priceEstimation: ''
        };
    }

    componentWillMount() {
        this.props.updateField('route', 'origin-destination');
    }

    componentWillReceiveProps(nextProps) {
        const { message, success } = nextProps;
        if (message !== '') {
            Toast.show(message);
        }
    }

    getEstimationPrice = () => {
        if (!this.props.originCoord) {
            return Toast.show('From can not be empty!');
        }
        if (!this.props.approximateWeight) {
            return Toast.show('Approximate Weight can not be empty!');
        }
        if (!this.props.destinationCoord) {
            return Toast.show('To can not be empty!');
        }
        const origin = this.props.originCoord.split(',');
        const destination = this.props.destinationCoord.split(',');
        const distance = getDistanceFromLatLonInKm(
            origin[0],
            origin[1],
            destination[0],
            destination[1]
        );

        const price =
            100 * Number(distance) * Number(this.props.approximateWeight);

        this.props.updateField('cost', price);
    };

    handleActiveWeight = fieldName =>
        this.setState({
            isActiveWeight: !this.state.isActiveWeight,
            weightUnit: fieldName
        });

    handleSearch = field => {
        this.props.updateField('active', field);
        this.props.navigation.navigate({
            routeName: 'Search'
        });
    };
    updateField = (field, value) => {
        this.props.updateField(field, value);
    };

    handleFocus = (field, value) => {
        this.props.handleFocus(field, value);
    };

    handlePress = () => {
        this.props.handleSendPackage();
    };

    render() {
        const {
            sendPackage,
            query,
            origin,
            destination,
            approximateWeight,
            itemName,
            inputFocus,
            textInputApproximateWeight,
            textInputfrom,
            textInputTo,
            cost
        } =
            this.props || {};

        const disableButton = query !== '' && approximateWeight !== '';

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
                                    onFocus={() => this.handleSearch('origin')}
                                    value={origin}
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
                                        onFocus={() =>
                                            this.handleFocus(
                                                'textInputApproximateWeight',
                                                '#F8E7E9'
                                            )
                                        }
                                        onBlur={() =>
                                            this.handleFocus(
                                                'textInputApproximateWeight',
                                                '#FFFFFF'
                                            )
                                        }
                                        onChangeText={value =>
                                            this.updateField(
                                                'approximateWeight',
                                                value
                                            )
                                        }
                                        value={approximateWeight}
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
                                Item Name
                            </Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    onChangeText={text =>
                                        this.updateField('itemName', text)
                                    }
                                    value={itemName}
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
                                To
                            </Text>
                            <View style={styles.inputTextContainer}>
                                <TextInput
                                    style={styles.inputText}
                                    onFocus={() =>
                                        this.handleSearch('destination')
                                    }
                                    value={destination}
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
                                disabled={origin === '' && destination === ''}
                                onPress={this.getEstimationPrice}
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
                                    Approx cost: Rp.{' '}
                                    {Math.floor(cost)
                                        .toString()
                                        .replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ','
                                        ) || 0}
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
                                    this.props.screenProps.rootNavigation.dispatch(
                                        resetAction
                                    )
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
                                disabled={
                                    origin === '' &&
                                    destination === '' &&
                                    approximateWeight === '' &&
                                    itemName === ''
                                }
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

const mapDispatchToProps = dispatch => ({
    updateField: (field, value) => dispatch(updateField(field, value)),
    handleFocus: (field, value) => dispatch(updateField(field, value)),
    handleSendPackage: () => dispatch(requestSendPackage())
});

const mapStateProps = state => state.sendPackage;

export default connect(mapStateProps, mapDispatchToProps)(OriginToDestination);
