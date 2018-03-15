import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, Image, } from 'react-native'
import { SafeAreaView, DrawerItems, } from 'react-navigation'
import { images } from '../../assets';

// initialize styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: '10%',
	},
	headerContent: {
		flex: 1,
	},
	bodyContent: {
		flex: 1,
		justifyContent: 'space-around',
		marginTop: '10%',
	},
	thumbnail: {
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderRadius: 100,
		height: 100,
		width: 100,
	},
	image: {
		resizeMode: 'contain',
		height: 100,
		width: undefined,
	},
	usernameContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: '5%',
	},
	username: {
		color: '#fff',
		fontSize: 14,
	},
	role: {
		color: '#fff',
		fontSize: 12,
	},
})

export default class SideMenu extends Component {
	render(){
		return(
			<ScrollView style={styles.container}>
				<View style={styles.headerContent}>
					<View style={styles.thumbnail}>
						<Image source={images.facebook} style={styles.image}/>
					</View>
					<View style={styles.usernameContainer}>
						<Text style={styles.username}>{'dummy username'}</Text>
						<Text>{' '}</Text>
						<Text style={styles.role}>{'(dummy role)'}</Text>
					</View>
				</View>
				<View style={styles.bodyContent}>
					<SafeAreaView>
						<DrawerItems {...this.props}/>
					</SafeAreaView>
				</View>
			</ScrollView>
		)
	}
}