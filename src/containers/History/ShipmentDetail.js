import React, { Component } from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {},
    item: {
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    sectionTitle:{
        fontSize: 13,
        fontWeight: '800'
    },
    title: {
        fontSize: 13
    },
    content: {
        fontSize: 13,
        fontWeight: 'bold'
    }
});

// dummy data should be removed after integration
let shipmentData = {
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
}

export default class ShipmentDetail extends Component{
    constructor(props){
        super(props)
        this.renderItems = this._renderItems.bind(this)
    }
    /**
     * rendering ui as per item
     * @param object params
     * @return react.Elements
     */
    _renderItems(params){
        return(
            <View>
                <Text>{Object.keys(params)}</Text>
                <Text>{Object.values(params)}</Text>
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
            <View>
                <Text>{title}</Text>
            </View>
       );
   }

    render(){
        return(
            <SectionList
                renderItem={({item})=> this.renderItems(item)}
                renderSectionHeader={({title}) => this._renderHeadSection(title)}
                keyExtractor={(item, index)=>(index)}
                sections={[
                    {data: [shipmentData.ticketData], },
                    {data: [shipmentData.detailData], title: 'Details' }
                ]}
            />
        );
    }
}