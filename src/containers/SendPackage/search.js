import React, { Component } from 'react';
import {
    Dimensions,
    View,
    Text,
    ScrollView,
    FlatList,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import styles from '../../helpers/styles';

const HEIGHT = Dimensions.get('window').height / 1.5;

import { search, updateField } from './reducer';

class Search extends Component {
    handlePress = (field, value, coordinates) => {
        if (field === 'origin') {
            this.props.updateField('originCoord', coordinates);
        }
        if (field === 'destination') {
            this.props.updateField('destinationCoord', coordinates);
        }
        this.props.updateField(field, value);
        this.props.navigation.navigate({ routeName: 'OriginToDestination' });
        this.props.updateQuery('');
    };

    keyExtractor = (item, index) => item.id;
    render() {
        const { query, airports } = this.props;
        return (
            <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
                <View
                    style={[
                        styles.container,
                        { marginLeft: 20, marginRight: 20 }
                    ]}
                >
                    <View style={[styles.inputTextContainer, { top: 10 }]}>
                        <TextInput
                            style={styles.inputText}
                            onChangeText={text => this.props.updateQuery(text)}
                            value={query}
                            autoCapitalize="none"
                            autoCorrect={false}
                            underlineColorAndroid="transparent"
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            backgroundColor: '#FFF'
                        }}
                    >
                        <FlatList
                            data={airports}
                            renderItem={({ item }) => (
                                <Result
                                    airport={item}
                                    active={this.props.active}
                                    updateField={this.handlePress}
                                />
                            )}
                            keyExtractor={this.keyExtractor}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

class Result extends Component {
    render() {
        const { airport, active } = this.props;
        return (
            <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() =>
                    this.props.updateField(
                        active,
                        airport.name,
                        airport.coordinates
                    )
                }
            >
                <Text>{airport.name}</Text>
            </TouchableOpacity>
        );
    }
}

const mapStateProps = state => state.sendPackage;
const mapDispatchToProps = dispatch => ({
    updateQuery: value => dispatch(search(value)),
    updateField: (field, value) => dispatch(updateField(field, value))
});

export default connect(mapStateProps, mapDispatchToProps)(Search);
