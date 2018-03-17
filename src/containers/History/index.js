import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Button } from 'native-base'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    row: {
        flexDirection: 'row',
    },
    content: {
        fontWeight: 'bold'
    },
    link: {
        color: 'blue'
    }
})

export default class HistoryScreen extends Component{
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
            <FlatList
                data={historyData}
                keyExtractor={(item, index) => (index)}
                renderItem={({item, index}) =>
                    <View style={styles.wrapper} key={index}>
                        <View style={styles.row}>
                            <View style={}>
                                <Text style={styles.title}>{"TICKET"}</Text>
                                <Text style={styles.content}>{item.ticketId}</Text>
                            </View>
                            <Text style={styles.link}>{"Shipment Details"}</Text>
                        </View>
                        <View style={styles.row}>
                            <View style={}>
                                <Text style={styles.title}>{"SEND DATE"}</Text>
                                <Text style={styles.content}>{item.ticketSent}</Text>
                            </View>
                            <View style={}>
                                <Text style={styles.title}>{"DELIVERED DATE"}</Text>
                                <Text style={styles.content}>{item.ticketDelivered}</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                        </View>
                    </View>                        
                }
            />
        )
    }
}