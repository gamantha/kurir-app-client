import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    wrapper: {
        alignItems: 'flex-start',
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderBottomColor: '#dddddd',
        borderTopColor: '#dddddd',
        borderBottomWidth: 2,
        borderTopWidth: 2,
    },
    row: {
        flexDirection: 'row',
    },
    boxContainer: {
        marginBottom: 5,
        paddingHorizontal: 25,
        borderBottomWidth: 3,
        borderBottomColor: '#dddddd'
    },
    boxIcon: {
        justifyContent: 'space-between',
        marginTop: 10
    },
    boxTextChange: {
        marginVertical:10,
        alignItems: 'flex-start'
    },
    textChange: {
        fontSize: 16,
        color: '#333'
    },
    section: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingVertical: 5
    },
    content: {
        fontWeight: 'bold',
        color: '#000000'
    },
    ticketId: {
        fontSize: 25
    },
    ticketDate:{
        fontSize: 13
    },
    link: {
        alignSelf: 'center',
        alignItems: 'flex-end',
        marginLeft: 60,
        color: 'blue',
        fontSize: 12
    },
    button: {
        borderRadius: 80,
        minWidth: 100,
        alignItems: 'center'
    },
    buttonTitle: {
        fontSize: 13,
        color: '#ffffff',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5
    }
})

export default class HistoryScreen extends Component{
    constructor(){
        super()
        this.color = '';
        this.title = '';
    }

    setColorAndTitle(status){
        switch(status){
            case 0:
                this.color = '#afafaf';
                this.title = 'Need to send to drop point';
                break
            case 1:
                this.color = '#ffaf30';
                this.title = 'Active';
                break
            case 2:
                this.color = '#81d129';
                this.title = 'Completed';
                break
        }
    }
    render(){
        const historyData = [
            {
                "ticketId": 2826137122,
                "ticketSent": "15 JAN 2018",
                "ticketDelivered": "19 JAN 2018",
                "ticketStatus": 2
            },
            {
                "ticketId": 2826137122,
                "ticketSent": "15 JAN 2018",
                "ticketDelivered": "19 JAN 2018",
                "ticketStatus": 1
            },
            {
                "ticketId": 2826137122,
                "ticketSent": "15 JAN 2018",
                "ticketDelivered": "19 JAN 2018",
                "ticketStatus": 0
            },
        ]
        return(
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <View style={[styles.row, styles.boxIcon]}>
                        <View><Icon size={20} color="#333" name="arrow-left"/></View>
                    </View>
                    <View style= {[styles.row, styles.boxTextChange]}>
                        <Text style= {styles.textChange}>Edit Profile</Text>
                    </View>
                </View>
                <FlatList
                    data={historyData}
                    keyExtractor={(item, index) => (index)}
                    renderItem={({item, index}) =>
                        <View style={styles.wrapper} key={index}>
                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.title}>{"TICKET"}</Text>
                                    <Text style={[styles.content, styles.ticketId]}>{item.ticketId}</Text>
                                </View>
                                <Text style={styles.link}>{"Shipment Details"}</Text>
                            </View>
                            <View style={styles.section}>
                                <View>
                                    <Text style={styles.title}>{"SEND DATE"}</Text>
                                    <Text style={[styles.content, styles.ticketDate]}>{item.ticketSent}</Text>
                                </View>
                                <View style={{marginHorizontal: 20}}>
                                    <Text style={styles.title}>{"DELIVERED DATE"}</Text>
                                    <Text style={[styles.content, styles.ticketDate]}>{item.ticketDelivered}</Text>
                                </View>
                            </View>
                            <View style={[styles.section, {alignSelf: 'flex-end', marginRight: 20 }]}>
                                {
                                    // move this function into componentDidMount after this page has been integrated with api
                                    this.setColorAndTitle(item.ticketStatus)
                                }
                                <View style={[styles.button, {backgroundColor: this.color}]}>
                                    <Text style={styles.buttonTitle}>{this.title}</Text>
                                </View>
                            </View>
                        </View>
                }/>
            </View>
        )
    }
}