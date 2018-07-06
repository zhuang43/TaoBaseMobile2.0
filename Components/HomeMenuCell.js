import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import {
	Card,
	CardItem,
	Thumbnail,
	Body,
	Left,
	Right,
	Button,
	Icon
} from 'native-base'

import ProjectListScreen from '../Screens/ProjectListScreen'
import BUsinessListScreen from '../Screens/BusinessListScreen'
import HomeScreen from '../Screens/HomeScreen'
import FeedScreen from '../Screens/FeedScreen'

class HomeMenuCell extends Component {
	render() {
		return (
			<Card
				style={{
					flexDirection: 'column',
					justifyContent: 'space-between',
					borderRadius: 0
				}}>
				<CardItem style={{ flex: 1 }}>
					<Left
						style={{
							justifyContent: 'space-between',
							marginHorizontal: -35,
							marginVertical: -5
						}}>
						<View
							style={{
								flex: 1,
								flexDirection: 'column',
								alignItems: 'center'
							}}>
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('FeedScreen')}>
								<Image
									source={require('../assets/topic.png')}
									style={{ height: 45, width: 45 }}
								/>
							</TouchableOpacity>
							<Text style={{ fontSize: 13 }}> Hot Feeds</Text>
						</View>

						<View
							style={{
								flex: 1,
								flexDirection: 'column',
								alignItems: 'center'
							}}>
							<TouchableOpacity
								onPress={() =>
									this.props.navigation.navigate('ProjectListScreen')
								}>
								<Image
									source={require('../assets/search.png')}
									style={{ height: 45, width: 45 }}
								/>
							</TouchableOpacity>
							<Text style={{ fontSize: 13 }}>Find Projects</Text>
						</View>

						<View
							style={{
								flex: 1,
								flexDirection: 'column',
								alignItems: 'center'
							}}>
							<TouchableOpacity
								transparent
								onPress={() =>
									this.props.navigation.navigate('BusinessListScreen')
								}>
								<Image
									source={require('../assets/cloud.png')}
									style={{ height: 45, width: 45 }}
								/>
							</TouchableOpacity>
							<Text style={{ fontSize: 13 }}>Find Business</Text>
						</View>
					</Left>
				</CardItem>
			</Card>
		)
	}
}
/*
<Image source={require('../assets/partner.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/cloud.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/search.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/calender.png')} style={{height: 62, width: 62}}/>
<Image source={require('../assets/light-bulb.png')} style={{height: 62, width: 62}}/> 
*/
const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderRadius: 4,
		height: 215,
		width: null,
		alignItems: 'center',
		justifyContent: 'space-between',
		marginVertical: 23
	}
})

export default HomeMenuCell
