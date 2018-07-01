import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import {
	Card,
	CardItem,
	Thumbnail,
	Body,
	Button,
	Icon,
	Container,
	Content,
	ListItem
} from 'native-base'

class ExpericeListItem extends Component {
	render() {
		return (
			<ListItem>
				<View
					style={{
						shadowColor: '#000',
						shadowOffset: { width: 0, height: 1 },
						shadowOpacity: 0.8,
						shadowRadius: 1,
						elevation: 1
					}}>
					<Thumbnail
						source={require('../assets/company2.png')}
						square
						size={60}
					/>
				</View>
				<Body style={{ paddingLeft: 10 }}>
					<Text style={{ fontWeight: 'normal', fontSize: 15 }}>
						{this.props.ExperienceTitle}
					</Text>
					<Text note>{this.props.ExperienceCompany}</Text>
					<Text note style={{ opacity: 0.8 }}>
						{this.props.ExperiencePeriod}
					</Text>
				</Body>
			</ListItem>
		)
	}
}

export default ExpericeListItem
