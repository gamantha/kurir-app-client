import React, { Component } from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    item: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 10,
        paddingHorizontal: 20
    },
    firstItem: {
        marginTop: 10
    },
    lastItem: {
        marginBottom: 20
    },
    sectionTitle:{
        color: '#000000',
        fontSize: 13,
        fontWeight: '800',
        padding: 10
    },
    title: {
        fontSize: 12
    },
    content: {
        color: '#000000',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

// dummy data should be removed after integration
const shipmentData = [{
    ticketData: {
        ticketId: 2826137122,
        ticketSender: 'Kun Yahya Mustofa',
        ticketReceiver: 'Destri Tsurayya Istiqomah',
        ticketEmail: 'Destri@gmail.com',
        ticketPhone: '+62 7301269',
        ticketWeight: 10,
        ticketDescription: 'Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim veniam',
        ticketStatus: 0
    },
    detailData: {
        detailSendDate: '15 JAN 2018',
        detailDeliveredDate: '19 Jan 2018',
        detailCourierId: '7262817111',
        detailShipmentStatus: 'Ready to Pickup'
    }
}]

export default class ShipmentDetail extends Component{
    constructor(props){
        super(props)
        this.renderTicket = this._renderTiket.bind(this)
        this.renderDetail = this._renderDetail.bind(this)
    }

    /**
     * rendering ui as per ticket item
     * @param object params
     * @return react.Elements
     */
    _renderTiket({...params}){
        return(
            <View style={{}}>
                <View style={[styles.item, styles.firstItem]}>
                    <Text style={styles.title}>{'TICKET'}</Text>
                    <Text style={styles.content}>{'#'+params.ticketId}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{'SENDER NAME'}</Text>
                    <Text style={styles.content}>{params.ticketSender}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{'RECEIVER NAME'}</Text>
                    <Text style={styles.content}>{params.ticketReceiver}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{'EMAIL'}</Text>
                    <Text style={styles.content}>{params.ticketEmail}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{'PHONE'}</Text>
                    <Text style={styles.content}>{params.ticketPhone}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{'WEIGHT'}</Text>
                    <Text style={styles.content}>{params.ticketWeight}</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.title}>{'DESCRIPTION'}</Text>
                    <Text style={styles.content}>{params.ticketDescription}</Text>
                </View>
                <View style={[styles.item, styles.lastItem]}>
                    <Text style={styles.title}>{'STATUS'}</Text>
                    <Text style={styles.content}>{params.ticketStatus}</Text>
                </View>
            </View>
        );
    }

    /**
     * rendering ui as per detail item
     * @param object params
     * @return react.Elements
    */
   _renderDetail({...params}){
       return(
        <View style={{}}>
            <View style={[styles.item, styles.firstItem]}>
                <Text style={styles.title}>{'SEND DATE'}</Text>
                <Text style={styles.content}>{params.detailSendDate}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>{'DELIVERED DATE'}</Text>
                <Text style={styles.content}>{params.detailDeliveredDate}</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.title}>{'COURIERID'}</Text>
                <Text style={styles.content}>{params.detailCourierId}</Text>
            </View>
            <View style={[styles.item, styles.lastItem]}>
                <Text style={styles.title}>{'SHIPMENT STATUS'}</Text>
                <Text style={styles.content}>{params.detailShipmentStatus}</Text>
            </View>
        </View>
       );
   }

    /**
     * rendering header as per section
     * @param string title
     * @returns react.Elements
    */
   _renderHeadSection(title){
       return(
           title == null ?
            <View>
            </View> :
            <View style={[styles.item, {padding: 0, marginHorizontal:0, marginVertical: 5, backgroundColor: 'grey'}]}>
                <Text style={styles.sectionTitle}>{title}</Text>
            </View>
       );
    }

    render(){
        return(
            <SectionList
                style={styles.container}
                renderSectionHeader={({section}) => this._renderHeadSection(section.title)}
                keyExtractor={(item, index) => index}
                sections={[
                    {data: [shipmentData[0].ticketData], title: null, renderItem: ({item}) => this.renderTicket(item)},
                    {data: [shipmentData[0].detailData], title: 'Details', renderItem: ({item}) => this.renderDetail(item) }
                ]}
            />
        );
    }
}