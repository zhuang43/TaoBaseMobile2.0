import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableOpacity,
	Dimensions,
	Image,
	ScrollView
} from 'react-native'
import {
	Container,
	Content,
	Title,
	List,
	Header,
	Left,
	Body,
	Right,
	Icon
} from 'native-base'
import { StackNavigator, TabNavigator } from 'react-navigation'

import BusinessCell from '../Components/BusinessCell'
import PremiumCell from '../Components/PremiumCell'
import FeedCell from '../Components/FeedCell'
import PartnerCell from '../Components/PartnerCell'
import FriendCell from '../Components/FriendCell'

class FriendListScreen extends Component {
	// static navigationOptions = {
	// 	title: 'Friend Lists'
	// }

	render() {
		return (
			<Container>
				<Header style={styles.headerStyle}>
					<Left>
						<TouchableOpacity
							onPress={() => this.props.navigation.navigate('MessagesScreen')}>
							<Icon
								name="arrow-back"
								style={{
									color: '#fff'
								}}
							/>
						</TouchableOpacity>
					</Left>
					<Body>
						<Title
							style={{
								color: '#fff',
								fontSize: 18
							}}>
							Friends
						</Title>
					</Body>
				</Header>
				<Content>
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
					<FriendCell />
				</Content>
			</Container>
		)
	}
}
const styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: '#E14437',
		flexDirection: 'row',
		justifyContent: 'center'
	}
})

export default FriendListScreen
