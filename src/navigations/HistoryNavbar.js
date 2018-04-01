import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    boxContainer: {
        marginBottom: 5,
        paddingHorizontal: 25,
        borderBottomWidth: 3,
        borderBottomColor: '#dddddd',
        backgroundColor: '#ffffff'
    },
    boxIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    boxTextChange: {
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'flex-start'
    },
    textChange: {
        fontSize: 16,
        color: '#333'
    }
});

const HistoryNavbar = ({ title, goBack }) => (
    <View style={styles.boxContainer}>
        <TouchableOpacity onPress={() => goBack()} style={styles.boxIcon}>
            <Icon size={20} color="#333" name="arrow-left" />
        </TouchableOpacity>
        <View style={styles.boxTextChange}>
            <Text style={styles.textChange}>{title}</Text>
        </View>
    </View>
);

const mapDispatchToProps = dispatch => ({
    goBack: () => dispatch(NavigationActions.back())
});

export default connect(null, mapDispatchToProps)(HistoryNavbar);
