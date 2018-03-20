import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    boxContainer: {
        marginBottom: 5,
        paddingHorizontal: 25,
        borderBottomWidth: 3,
        borderBottomColor: '#dddddd'
    },
    boxIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    boxTextChange: {
        flexDirection: 'row',
        marginVertical:10,
        alignItems: 'flex-start'
    },
    textChange: {
        fontSize: 16,
        color: '#333'
    },
});

const HistoryNavbar = () => (
    <View style={styles.boxContainer}>
        <View style={styles.boxIcon}>
            <Icon size={20} color="#333" name="arrow-left"/>
        </View>
        <View style= {styles.boxTextChange}>
            <Text style= {styles.textChange}>History</Text>
        </View>
    </View>
);

export default HistoryNavbar;